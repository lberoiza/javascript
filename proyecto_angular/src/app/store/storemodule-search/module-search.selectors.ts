import { AppState } from "@/store/app.state";
import { createSelector } from "@ngrx/store";
import { SearchState } from "@/models/store/ModuleSearch.model";

export const ModuleSearchState = (state: AppState) => state.moduleSearch;

export const SelectModuleSearchIsLoading = createSelector(
  ModuleSearchState,
  (state: SearchState) => state.isLoading
)

export const SelectModuleSearchQuery = createSelector(
  ModuleSearchState,
  (state: SearchState) => state.query
)

export const SelectModuleSearchResults = createSelector(
  ModuleSearchState,
  (state: SearchState) => state.results
)
