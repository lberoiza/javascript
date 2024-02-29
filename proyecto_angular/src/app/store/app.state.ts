import { ArticleSearchState } from "@/models/store/ArticleSearchState.model";
import { ActionReducerMap } from "@ngrx/store";
import { ModuleSearchReducers } from "@/store/storemodule-search/module-search.reducers";
// import { ArticlesAllState } from "@/models/store/ArticlesAllState.model";
// import { ArticleCurrentState } from "@/models/store/ArticleCurrentState.model";
// import { ArticlesLastState } from "@/models/store/ArticlesLastState.model";

export interface AppState {
  articleSearchState: ArticleSearchState,
  // articleAllState: ArticlesAllState,
  // articlesLastState: ArticlesLastState,
  // articleCurrentState: ArticleCurrentState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  articleSearchState: ModuleSearchReducers,
  // articleAllState: ModuleSearchReducers
}
