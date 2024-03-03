import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ApiArticlesService } from "@/services/api-articles/api-articles.service";
import { AppState } from "@/store/app.state";
import { Article } from "@/models/Article.model";
import { Injectable } from "@angular/core";
import { ModuleArticleActions } from "@/store/storemodule-article/module-article.actions";
import { SelectModuleArticleCurrentArticle } from "@/store/storemodule-article/module-article.selectors";
import { Store } from "@ngrx/store";
import { catchError, of, switchMap } from "rxjs";
import { ModuleSearchActions } from "@/store/storemodule-search/module-search.actions";
import { SearchState } from "@/models/store/ModuleSearch.model";
import { ApiListArticles } from "@/models/ApiArticleResponse.model";


interface ActionSearchParams extends ReturnType<typeof ModuleSearchActions.search> {
}


@Injectable({
  providedIn: 'root'
})
export class ModuleSearchEffects {


  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private apiArticleService: ApiArticlesService,
  ) {
  }

  searchArticles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ModuleSearchActions.search),
      switchMap((action: ActionSearchParams) => {
          return this.searchArticlesFromApi(action);
        }
      )
    )
  );


  private searchArticlesFromApi(action: ActionSearchParams) {
    return this.apiArticleService.getArticlesBySearch(action.strQuery).pipe(
      switchMap((apiResponse) => {
        if (!apiResponse.isSuccessful) {
          return of(ModuleSearchActions.searchEnded());
        }
        return of(
          ModuleSearchActions.setResults({results: apiResponse.response}),
          ModuleSearchActions.searchEnded()
        );
      }),
      catchError(error => {
        console.error(error);
        return of(ModuleSearchActions.searchEnded());
      })
    );
  }



}
