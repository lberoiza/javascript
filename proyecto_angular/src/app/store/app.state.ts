import { ModuleSearchState } from "@/models/store/SearchStore.model";
import { ActionReducerMap } from "@ngrx/store";
import { ModuleSearchReducers } from "@/store/storemodule-search/module-search.reducers";

export interface AppState {
  searchState: ModuleSearchState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  searchState: ModuleSearchReducers
}
