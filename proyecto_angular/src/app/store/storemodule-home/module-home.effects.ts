import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ApiArticlesService } from "@/services/api-articles/api-articles.service";
import { ApiListArticles } from "@/models/ApiArticleResponse.model";
import { ModuleHomeActions } from "@/store/storemodule-home/module-home.actions";
import { catchError, of, switchMap } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ModuleHomeEffects {
  constructor(
    private actions$: Actions,
    private apiArticleService: ApiArticlesService) {
  }

  loadArticles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ModuleHomeActions.loadLastArticles),
      switchMap(() => this.apiArticleService.getLastArticles()
        .pipe(
          switchMap((apiResult: ApiListArticles) => {
            if (!apiResult.isSuccessful) return this.loadEnds();

            return of(
              ModuleHomeActions.setLastArticles({articles: apiResult.response}),
              ModuleHomeActions.loadLastArticlesEnded()
            )
          }),
          catchError(error =>
            this.loadEnds()
          )
        )
      )
    ));

  private loadEnds() {
    return of(ModuleHomeActions.loadLastArticlesEnded());
  }


}
