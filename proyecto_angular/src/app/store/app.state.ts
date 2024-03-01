import { ActionReducerMap } from "@ngrx/store";
import { ArticleState } from "@/models/store/ModuleArticle.model";
import { SearchState } from "@/models/store/ModuleSearch.model";
import { BlogState } from "@/models/store/ModuleBlog.model";
import { ModuleBlogReducers } from "@/store/storemodule-blog/module-blog.reducers";
import { ModuleArticleReducers } from "@/store/storemodule-article/module-article.reducers";
import { ModuleSearchReducers } from "@/store/storemodule-search/module-search.reducers";
import { HomeState } from "@/models/store/ModuleHome.model";
import { ModuleHomeReducers } from "@/store/storemodule-home/module-home.reducers";

export interface AppState {
  moduleSearch: SearchState,
  moduleBlog: BlogState,
  moduleArticle: ArticleState
  moduleHome: HomeState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  moduleSearch: ModuleSearchReducers,
  moduleBlog: ModuleBlogReducers,
  moduleArticle: ModuleArticleReducers,
  moduleHome: ModuleHomeReducers
}
