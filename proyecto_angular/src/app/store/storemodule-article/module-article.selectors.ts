import { AppState } from "@/store/app.state";
import { createSelector } from "@ngrx/store";
import { ArticleState } from "@/models/store/ModuleArticle.model";

export const ModuleArticleState = (state: AppState) => state.moduleArticle;


export const SelectModuleArticleCurrentArticle = createSelector(
  ModuleArticleState,
  (state: ArticleState) => state.article
)

export const SelectModuleArticleIsLoading = createSelector(
  ModuleArticleState,
  (state: ArticleState) => state.isLoading
)
