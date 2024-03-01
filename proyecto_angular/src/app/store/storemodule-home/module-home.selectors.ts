import { createSelector } from "@ngrx/store";
import { AppState } from "@/store/app.state";
import { HomeState } from "@/models/store/ModuleHome.model";


export const SelectModuleHomeState = (state: AppState) => state.moduleHome;

export const SelectHomeIsLoading = createSelector(
  SelectModuleHomeState,
  (state: HomeState) => state.isLoading
);

export const SelectHomeArticles = createSelector(
  SelectModuleHomeState,
  (state: HomeState) => state.articles
);
