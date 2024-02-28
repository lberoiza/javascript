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

  constructor(
    private apiArticleService: ApiArticlesService,
    private router: Router,
    private alert: AlertService
  ) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.articleFormFields = createArticleFormFieldsOf(this.article);
  }

  private isFormComplete = (): boolean => {
    if (this.articleFormFields.title.trim().length === 0) return false;
    return this.articleFormFields.content.trim().length !== 0;
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      this.articleFormFields.imageFile = file;
    } else {
      this.articleFormFields.imageFile = undefined;
    }
  }

  protected sendData(form: NgForm) {
    if (form.invalid || !this.isFormComplete()) {
      return;
    }
    this.saveArticleData();

  }

  private saveArticleData() {
    this.apiArticleService.updateArticle(this.article._id, this.articleFormFields)
      .subscribe(apiResponse => {
        if (apiResponse.isSuccessful) {
          this.saveArticleImage();
        } else {
          this.showError(apiResponse);
        }
      });
  }

  private saveArticleImage() {
    if (this.articleFormFields.imageFile) {
      this.apiArticleService.updateArticleImage(this.article._id, this.articleFormFields.imageFile!)
        .subscribe(apiResponse => {
          if (apiResponse.isSuccessful) {
            this.goBackToBlog();
          } else {
            this.showError(apiResponse);
          }
        });
    } else {
      this.goBackToBlog();
    }
  }

  private goBackToBlog(): void {
    this.router.navigate(['/blog'])
      .then(() => {
        this.showSuccessAlert();
      });
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
