import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { getImageUrl } from "@/libs/ImageUtils";
import { Article, ArticleFormFields, createArticleFormFieldsOf, createEmptyArticle } from "@/models/Article.model";
import { FormsModule, NgForm } from "@angular/forms";
import { ApiArticlesService } from "@/services/api-articles/api-articles.service";
import { Router } from "@angular/router";
import { AlertMessage, AlertService } from "@/services/alerts/alert.service";
import { ApiArticle } from "@/models/ApiArticleResponse";

@Component({
  selector: 'app-article-form',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './article-form.component.html',
  styleUrl: './article-form.component.css'
})
export class ArticleFormComponent implements OnChanges {

  protected readonly getImageUrl = getImageUrl;

  @Input()
  article: Article = createEmptyArticle();

  protected articleFormFields: ArticleFormFields = createArticleFormFieldsOf(this.article);
  protected previewImageUrl?: string;

  constructor(
    private apiArticleService: ApiArticlesService,
    private router: Router,
    private alert: AlertService
  ) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.articleFormFields = createArticleFormFieldsOf(this.article);
    this.previewImageUrl = getImageUrl(this.article.image);
  }

  private isFormComplete = (): boolean => {
    if (this.articleFormFields.title.trim().length === 0) return false;
    return this.articleFormFields.content.trim().length !== 0;
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      this.articleFormFields.imageFile = file;
      this.loadPreviewImage(file);
    } else {
      this.articleFormFields.imageFile = undefined;
    }
  }

  loadPreviewImage(file: File): void {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event: any) => {
      this.previewImageUrl = event.target.result;
    }
  }

  protected sendData(form: NgForm) {
    if (form.invalid || !this.isFormComplete()) {
      return;
    }
    this.saveOrUpdateArticleData();

  }

  private saveOrUpdateArticleData() {
    this.saveOrUpdate().subscribe(apiResponse => {
      if (apiResponse.isSuccessful) {
        this.article = apiResponse.response;
        this.saveArticleImage();
      } else {
        this.showError(apiResponse);
      }
    });
  }

  private saveOrUpdate() {
    if (this.article._id === '') {
      return this.apiArticleService.createArticle(this.articleFormFields);
    }
    return this.apiArticleService.updateArticle(this.article._id, this.articleFormFields);
  }


  private saveArticleImage(){
    if (this.articleFormFields.imageFile) {
      this.apiArticleService.updateArticleImage(this.article._id, this.articleFormFields.imageFile!)
        .subscribe(apiResponse => {
          if (apiResponse.isSuccessful) {
            this.goBackAndShowSuccess();
          } else {
            this.showError(apiResponse);
          }
        });
    } else {
      this.goBackAndShowSuccess();
    }
  }


  private goBackToArticle(): Promise<boolean> {
    return this.router.navigate(['/blog/article', this.article._id])
  }

  private goBackAndShowSuccess(): void {
    this.goBackToArticle()
      .then(() => {
        this.showSuccessAlert();
      });
  }

  protected cancelEditionAndGoBack() {
    this.goBackToArticle().then(() => {});
  }


  private showSuccessAlert(): void {
    const message: AlertMessage = {
      title: 'Article saved',
      content: 'The article was successfully saved'
    }
    this.alert.showSuccess(message);
  }

  private showError(apiResponse: ApiArticle): void {
    const errorMessage: AlertMessage = {
      title: 'Error',
      content: 'The article could not be saved'
    }
    this.alert.showError(errorMessage);
    console.error('Error saving article', apiResponse.errorMessages);
  }


}
