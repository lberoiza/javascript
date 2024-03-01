import { AppState } from "@/store/app.state";
import { createSelector } from "@ngrx/store";
import { SearchState } from "@/models/store/ModuleSearch.model";

export const ModuleSearchState = (state: AppState) => state.moduleSearch;

export const SelectModuleSearchIsLoading = createSelector(
  ModuleSearchState,
  (state: SearchState) => state.isLoading
)

export const SelectModuleSearchLastQuery = createSelector(
  ModuleSearchState,
  (state: SearchState) => state.lastQuery
)

export const SelectModuleSearchLastResults = createSelector(
  ModuleSearchState,
  (state: SearchState) => state.lastResults
)
