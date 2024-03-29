import { Component, OnInit } from '@angular/core';
import { AlertMessage, AlertService } from "@/services/alerts/alert.service";
import { ApiArticlesService } from "@/services/api-articles/api-articles.service";
import { Article } from "@/models/Article.model";
import { ConvertNewLinesToBrTag } from "@/pipes/ConvertNewLinesToBrTag";
import { DayjsComponent } from "@/components/dayjs/dayjs.component";
import { Router, RouterLink } from "@angular/router";
import { getImageUrl } from "@/libs/ImageUtils";
import { Store } from "@ngrx/store";
import { AppState } from "@/store/app.state";
import { SelectModuleArticleCurrentArticle } from "@/store/storemodule-article/module-article.selectors";
import { ActionDeleteParams, ModuleArticleActions } from "@/store/storemodule-article/module-article.actions";

@Component({
  selector: 'app-article-details',
  standalone: true,
  imports: [
    ConvertNewLinesToBrTag,
    DayjsComponent,
    RouterLink
  ],
  templateUrl: './article-details.component.html',
  styleUrl: './article-details.component.css'
})
export class ArticleDetailsComponent implements OnInit {
  protected readonly getImageUrl = getImageUrl;

  protected article?: Article;

  constructor(
    private alert: AlertService,
    private apiArticleService: ApiArticlesService,
    private router: Router,
    private store: Store<AppState>
  ) {
  }


  ngOnInit(): void {
    this.subscribeToArticle();
  }

  private subscribeToArticle = () => {
    this.store.select(SelectModuleArticleCurrentArticle)
      .subscribe((article?: Article) => {
        this.article = article;
      })
  }

  protected confirmDeleteArticle = (articleId: string) => {

    const message: AlertMessage = {
      title: 'The deletion is permanent!',
      content: 'Are you sure, that you want to delete the Article?'
    }

    this.alert.confirmDialog(message)
      .then((willDelete) => {
        if (willDelete) {
          const actionParams: ActionDeleteParams = {
            articleId,
            onSuccess: (article: Article) => this.articleSuccessfullyDeleted(article),
            onError: () => this.showDeletionErrorMessage()
          };
          this.store.dispatch(ModuleArticleActions.deleteArticleById(actionParams));
        }
      });
  }


  private articleSuccessfullyDeleted(article: Article) {
    this.goToBlog().then(() => this.showDeletionSuccessMessage(article));
  }


  private goToBlog(): Promise<boolean> {
    return this.router.navigate(['/blog'])
  }

  private showDeletionSuccessMessage(article: Article) {
    const alertMessage: AlertMessage = {
      title: `Successfully deleted`,
      content: `The Article: "${article.title}" was successfully deleted.`
    }
    this.alert.showSuccess(alertMessage);
  }

  private showDeletionErrorMessage() {
    const alertMessage: AlertMessage = {
      title: `Error by the deletion`,
      content: `The Article could not be eliminated`
    }
    this.alert.showError(alertMessage);
  }


}
