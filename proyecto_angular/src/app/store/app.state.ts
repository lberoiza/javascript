import { ArticleSearchState } from "@/models/store/ArticleSearchState.model";
import { ActionReducerMap } from "@ngrx/store";
import { ModuleSearchReducers } from "@/store/storemodule-search/module-search.reducers";
import { ArticlesAllState } from "@/models/store/ArticlesAllState.model";
import { ModuleAllArticlesReducers } from "@/store/storemodule-all-articles/module-allArticles.reducers";

export interface AppState {
  articleSearchState: ArticleSearchState,
  articleAllState: ArticlesAllState,
  // articlesLastState: ArticlesLastState,
  // articleCurrentState: ArticleCurrentState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  articleSearchState: ModuleSearchReducers,
  articleAllState: ModuleAllArticlesReducers
}
