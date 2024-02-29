import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ModuleAllArticlesActions } from "@/store/storemodule-all-articles/module-allArticles.actions";
import { catchError, map, of, switchMap } from "rxjs";
import { ApiArticlesService } from "@/services/api-articles/api-articles.service";
import { ApiListArticles } from "@/models/ApiArticleResponse.model";

@Injectable({
  providedIn: 'root'
})
export class ModuleAllArticlesEffects {
  constructor(
    private actions$: Actions,
    private articlesService: ApiArticlesService
  ) {
  }

  loadAllArticles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ModuleAllArticlesActions.loadAllArticles),
      switchMap(() =>
        this.articlesService.getAllArticles()
          .pipe(
            switchMap((articlesResponse: ApiListArticles) => {
              if (!articlesResponse.isSuccessful) return of();

              return of(
                ModuleAllArticlesActions.setAllArticles({articles: articlesResponse.response}),
                ModuleAllArticlesActions.loadAllArticlesEnded()
              )
            }),
            catchError(() => of(ModuleAllArticlesActions.loadAllArticlesEnded()))
          )
      )
    )
  );

}
