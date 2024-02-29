import { AppState } from "@/store/app.state";
import { createSelector } from "@ngrx/store";
import { ArticleCurrentState } from "@/models/store/ArticleCurrentState.model";

export const ModuleCurrentArticleState = (state: AppState) => state.articleCurrentState;


export const SelectModuleCurrentArticle = createSelector(
  ModuleCurrentArticleState,
  (state: ArticleCurrentState) => state.article
)
