import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AlertMessage, AlertService } from "@/services/alerts/alert.service";
import { ApiArticle } from "@/models/ApiArticleResponse.model";
import { ApiArticlesService } from "@/services/api-articles/api-articles.service";
import { AppState } from "@/store/app.state";
import { Article, ArticleFormFields, createArticleFormFieldsOf, createEmptyArticle } from "@/models/Article.model";
import { FormsModule, NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { getImageUrl } from "@/libs/ImageUtils";
import { ModuleArticleActions } from "@/store/storemodule-article/module-article.actions";
import { SelectModuleArticleCurrentArticle } from "@/store/storemodule-article/module-article.selectors";

@Component({
  selector: 'app-article-form',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './article-form.component.html',
  styleUrl: './article-form.component.css'
})
export class ArticleFormComponent implements OnInit {

  protected readonly getImageUrl = getImageUrl;

  protected article!: Article;

  protected articleFormFields!: ArticleFormFields;
  protected previewImageUrl?: string;

  constructor(
    private alert: AlertService,
    private apiArticleService: ApiArticlesService,
    private router: Router,
    private store: Store<AppState>,
  ) {
  }

  ngOnInit(): void {
    this.subscribeToArticle();
  }

  private subscribeToArticle() {
    this.store.select(SelectModuleArticleCurrentArticle)
      .subscribe((article?: Article) => {
        this.article = article || createEmptyArticle();
        this.initFormFields();
      });
  }

  private initFormFields(): void {
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
    this.apiArticleService
      .createOrUpdateArticle(this.articleFormFields, this.article._id)
      .subscribe(apiResponse => {
        if (apiResponse.isSuccessful) {
          this.article = apiResponse.response;
          this.updateStore();
          this.goBackAndShowSuccess();
        } else {
          this.showError(apiResponse);
        }
      });
  }

  private updateStore() {
    this.store.dispatch(ModuleArticleActions.setArticle({article: this.article}));
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
    this.goBackToArticle().then(() => {
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
