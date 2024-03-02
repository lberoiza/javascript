import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ApiArticlesService } from "@/services/api-articles/api-articles.service";
import { ModuleArticleActions } from "@/store/storemodule-article/module-article.actions";
import { catchError, of, switchMap } from "rxjs";
import { Article } from "@/models/Article.model";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "@/store/app.state";
import { SelectModuleArticleCurrentArticle } from "@/store/storemodule-article/module-article.selectors";


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
          // this.goToBlog().then();
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
              return this.errorByDeletion(action);
            }
            action.onSuccess(apiResponse.response);
            return of(
              ModuleArticleActions.setArticle({article: undefined}),
              ModuleArticleActions.deleteArticleByIdEnd({success: true})
            );
          }),
          catchError(error => {
            console.error(error);
            return this.errorByDeletion(action)
          })
        );
      })
    )
  );


  private errorByDeletion(deleteAction: DeleteArticleByIdParams) {
    deleteAction.onError();
    return of(ModuleArticleActions.deleteArticleByIdEnd({success: false}));
  }

}
