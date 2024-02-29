import { ActionReducerMap } from "@ngrx/store";
import { ArticleCurrentState } from "@/models/store/ArticleCurrentState.model";
import { ArticleSearchState } from "@/models/store/ArticleSearchState.model";
import { ArticlesAllState } from "@/models/store/ArticlesAllState.model";
import { ModuleAllArticlesReducers } from "@/store/storemodule-all-articles/module-allArticles.reducers";
import { ModuleCurrentArticleReducers } from "@/store/storemodule-current-article/module-currentArticle.reducers";
import { ModuleSearchReducers } from "@/store/storemodule-search/module-search.reducers";
import { ArticlesLastState } from "@/models/store/ArticlesLastState.model";
import { ModuleLastArticlesReducers } from "@/store/storemodule-lastArticles/module-lastArticles.reducers";

export interface AppState {
  articleSearchState: ArticleSearchState,
  articleAllState: ArticlesAllState,
  articleCurrentState: ArticleCurrentState
  articlesLastState: ArticlesLastState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  articleSearchState: ModuleSearchReducers,
  articleAllState: ModuleAllArticlesReducers,
  articleCurrentState: ModuleCurrentArticleReducers,
  articlesLastState: ModuleLastArticlesReducers
}
