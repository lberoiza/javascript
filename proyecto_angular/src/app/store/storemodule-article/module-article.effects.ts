import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ApiArticlesService } from "@/services/api-articles/api-articles.service";
import { AppState } from "@/store/app.state";
import { Article } from "@/models/Article.model";
import { Injectable } from "@angular/core";
import { ModuleArticleActions } from "@/store/storemodule-article/module-article.actions";
import { SelectModuleArticleCurrentArticle } from "@/store/storemodule-article/module-article.selectors";
import { Store } from "@ngrx/store";
import { catchError, of, switchMap } from "rxjs";


interface LoadArticleByIdParams extends ReturnType<typeof ModuleArticleActions.loadArticleById> {
}

interface DeleteArticleByIdParams extends ReturnType<typeof ModuleArticleActions.deleteArticleById> {
}


@Injectable({
  providedIn: 'root'
})
export class ModuleArticleEffects {

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
          if (this.currentArticle?._id === action.articleId) return of(ModuleArticleActions.loadArticleByIdEnds());
          return this.loadArticleFromApi(action);
        }
      )
    )
  );

  private loadArticleFromApi(action: LoadArticleByIdParams) {
    return this.apiArticleService.getArticleById(action.articleId).pipe(
      switchMap((apiResponse) => {
        if (!apiResponse.isSuccessful) {
          return this.loadCurrentArticleEndedWithError(action);
        }
        return of(
          ModuleArticleActions.setArticle({article: apiResponse.response}),
          ModuleArticleActions.loadArticleByIdEnds()
        );
      }),
      catchError(error => {
        console.error(error);
        return this.loadCurrentArticleEndedWithError(action)
      })
    );
  }

  private loadCurrentArticleEndedWithError(action: LoadArticleByIdParams) {
    action.onError();
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
