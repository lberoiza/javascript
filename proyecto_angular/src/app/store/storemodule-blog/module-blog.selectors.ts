import { AppState } from "@/store/app.state";
import { createSelector } from "@ngrx/store";
import { BlogState } from "@/models/store/ModuleBlog.model";


export const SelectModuleBlogState = (state: AppState) => state.moduleBlog;

export const SelectModuleBlogIsLoading = createSelector(
  SelectModuleBlogState,
  (state: BlogState) => state.isLoading
)

export const SelectModuleBlogArticles = createSelector(
  SelectModuleBlogState,
  (state: BlogState) => state.articles
)
