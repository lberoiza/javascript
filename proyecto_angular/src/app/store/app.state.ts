import { ActionReducerMap } from "@ngrx/store";
import { ArticleCurrentState } from "@/models/store/ArticleCurrentState.model";
import { ArticleSearchState } from "@/models/store/ArticleSearchState.model";
import { BlogState } from "@/models/store/ModuleBlog.model";
import { ModuleBlogReducers } from "@/store/storemodule-blog/module-blog.reducers";
import { ModuleCurrentArticleReducers } from "@/store/storemodule-current-article/module-currentArticle.reducers";
import { ModuleSearchReducers } from "@/store/storemodule-search/module-search.reducers";
import { HomeState } from "@/models/store/ModuleHome.model";
import { ModuleHomeReducers } from "@/store/storemodule-home/module-home.reducers";

export interface AppState {
  articleSearchState: ArticleSearchState,
  moduleBlog: BlogState,
  articleCurrentState: ArticleCurrentState
  moduleHome: HomeState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  articleSearchState: ModuleSearchReducers,
  moduleBlog: ModuleBlogReducers,
  articleCurrentState: ModuleCurrentArticleReducers,
  moduleHome: ModuleHomeReducers
}
