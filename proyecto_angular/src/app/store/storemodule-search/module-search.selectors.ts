import { AppState } from "@/store/app.state";
import { createSelector } from "@ngrx/store";
import { ArticleSearchState } from "@/models/store/ArticleSearchState.model";

export const ModuleSearchState = (state: AppState) => state.articleSearchState;

export const SelectModuleSearchIsLoading = createSelector(
  ModuleSearchState,
(state: ArticleSearchState) => state.isLoading
)

export const SelectModuleSearchLastQuery = createSelector(
  ModuleSearchState,
(state: ArticleSearchState) => state.lastQuery
)

export const SelectModuleSearchLastResults = createSelector(
  ModuleSearchState,
(state: ArticleSearchState) => state.lastResults
)
