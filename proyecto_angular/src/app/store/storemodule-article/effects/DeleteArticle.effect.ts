import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ApiArticlesService } from "@/services/api-articles/api-articles.service";
import { Injectable } from "@angular/core";
import { ModuleArticleActions } from "@/store/storemodule-article/module-article.actions";
import { catchError, of, switchMap } from "rxjs";

interface DeleteArticleByIdParams extends ReturnType<typeof ModuleArticleActions.deleteArticleById> {
}

@Injectable({
  providedIn: 'root'
})
export class DeleteArticleEffect {

  constructor(
    private actions$: Actions,
    private apiArticleService: ApiArticlesService,
  ) {
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
