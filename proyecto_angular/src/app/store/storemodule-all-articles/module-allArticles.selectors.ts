import { AppState } from "@/store/app.state";
import { createSelector } from "@ngrx/store";
import { ArticlesAllState } from "@/models/store/ArticlesAllState.model";


export const ModuleAllArticlesState = (state: AppState) => state.articleAllState;

export const SelectModuleAllArticlesIsLoading = createSelector(
  ModuleAllArticlesState,
  (state: ArticlesAllState) => state.isLoading
)

export const SelectModuleAllArticlesAll = createSelector(
  ModuleAllArticlesState,
  (state: ArticlesAllState) => state.articles
)
