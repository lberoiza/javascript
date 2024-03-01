import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ApiArticlesService } from "@/services/api-articles/api-articles.service";
import { ModuleArticleActions } from "@/store/storemodule-article/module-article.actions";
import { catchError, of, switchMap } from "rxjs";
import { Article } from "@/models/Article.model";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "@/store/app.state";
import { SelectModuleArticleCurrentArticle } from "@/store/storemodule-article/module-article.selectors";
import { Router } from "@angular/router";
import { AlertMessage, AlertService } from "@/services/alerts/alert.service";


interface LoadArticleByIdParams extends ReturnType<typeof ModuleArticleActions.loadArticleById>{}
interface DeleteArticleByIdParams extends ReturnType<typeof ModuleArticleActions.deleteArticleById>{}


@Injectable({
  providedIn: 'root'
})
export class ModuleArticleEffects {

  private articleIdFromUrl: string = '';
  private currentArticle?: Article;


  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private apiArticleService: ApiArticlesService,
    private router: Router,
    private alert: AlertService
  ) {
    this.store.select(SelectModuleArticleCurrentArticle)
      .subscribe((article?: Article) => {
      this.currentArticle = article;
    });
  }

  loadCurrentArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ModuleArticleActions.loadArticleById),
      switchMap((action: LoadArticleByIdParams) => {
          this.articleIdFromUrl = action.articleId;
          if (this.currentArticle?._id === action.articleId) return this.loadCurrentArticleEnded();
          return this.loadArticleFromApi();
        }
      )
    )
  );

  private loadArticleFromApi() {
    return this.apiArticleService.getArticleById(this.articleIdFromUrl).pipe(
      switchMap((apiResponse) => {
        if (!apiResponse.isSuccessful) {
          this.goToBlog().then();
          return this.loadCurrentArticleEnded();
        }
        return of(ModuleArticleActions.setArticle({article: apiResponse.response}));
      }),
      catchError(error => this.loadCurrentArticleEnded())
    );
  }

  private loadCurrentArticleEnded() {
    return of(ModuleArticleActions.loadArticleByIdEnds());
  }


  deleteArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ModuleArticleActions.deleteArticleById),
      switchMap((action: DeleteArticleByIdParams) => {
        return this.apiArticleService.deleteArticleById(action.articleId).pipe(
          switchMap((apiResponse) => {
            if (!apiResponse.isSuccessful) {
              this.ShowDeletionErrorMessage();
              return of(ModuleArticleActions.deleteArticleByIdEnd());
            }

            this.goToBlog()
              .then(() => this.ShowDeletionSuccessMessage(apiResponse.response.title));

            return of(
              ModuleArticleActions.setArticle({article: undefined}),
              ModuleArticleActions.deleteArticleByIdEnd()
            );
          }),
          catchError(error => of(ModuleArticleActions.deleteArticleByIdEnd()))
        );
      })
    )
  );


  private goToBlog(): Promise<boolean> {
    return this.router.navigate(['/blog'])
  }

  private ShowDeletionSuccessMessage(articleTitle: string = '') {
    const alertMessage: AlertMessage = {
      title: `Successfully deleted`,
      content: `The Article: "${articleTitle}" was successfully deleted.`
    }
    this.alert.showSuccess(alertMessage);
  }

  private ShowDeletionErrorMessage() {
    const alertMessage: AlertMessage = {
      title: `Error by the deletion`,
      content: `The Article could not be eliminated`
    }
    this.alert.showError(alertMessage);
  }


}
