import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ApiArticlesService } from "@/services/api-articles/api-articles.service";
import { ApiListArticles } from "@/models/ApiArticleResponse.model";
import { ModuleBlogActions } from "@/store/storemodule-blog/module-blog.actions";
import { catchError, map, of, switchMap } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ModuleBlogEffects {
  constructor(
    private actions$: Actions,
    private articlesService: ApiArticlesService
  ) {
  }

  loadAllArticles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ModuleBlogActions.loadAllArticles),
      switchMap(() =>
        this.articlesService.getAllArticles()
          .pipe(
            switchMap((articlesResponse: ApiListArticles) => {
              if (!articlesResponse.isSuccessful) return of();

              return of(
                ModuleBlogActions.setAllArticles({articles: articlesResponse.response}),
                ModuleBlogActions.loadAllArticlesEnded()
              )
            }),
            catchError(() => of(ModuleBlogActions.loadAllArticlesEnded()))
          )
      )
    )
  );

}
