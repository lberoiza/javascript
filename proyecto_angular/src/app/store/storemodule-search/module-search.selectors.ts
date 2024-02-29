import { AppState } from "@/store/app.state";
import { createSelector } from "@ngrx/store";
import { ModuleSearchState } from "@/models/store/SearchStore.model";

export const ModuleSearchState = (state: AppState) => state.searchState;

export const SelectModuleSearchIsLoading = createSelector(
  ModuleSearchState,
(state: ModuleSearchState) => state.isLoading
)

export const SelectModuleSearchLastQuery = createSelector(
  ModuleSearchState,
(state: ModuleSearchState) => state.lastQuery
)

export const SelectModuleSearchLastResults = createSelector(
  ModuleSearchState,
(state: ModuleSearchState) => state.lastResults
)
