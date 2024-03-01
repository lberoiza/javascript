import { ActionReducerMap } from "@ngrx/store";
import { ArticleCurrentState } from "@/models/store/ArticleCurrentState.model";
import { ArticleSearchState } from "@/models/store/ArticleSearchState.model";
import { ArticlesAllState } from "@/models/store/ArticlesAllState.model";
import { ModuleAllArticlesReducers } from "@/store/storemodule-all-articles/module-allArticles.reducers";
import { ModuleCurrentArticleReducers } from "@/store/storemodule-current-article/module-currentArticle.reducers";
import { ModuleSearchReducers } from "@/store/storemodule-search/module-search.reducers";
import { HomeState } from "@/models/store/ModuleHome.model";
import { ModuleHomeReducers } from "@/store/storemodule-home/module-home.reducers";

export interface AppState {
  articleSearchState: ArticleSearchState,
  articleAllState: ArticlesAllState,
  articleCurrentState: ArticleCurrentState
  moduleHome: HomeState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  articleSearchState: ModuleSearchReducers,
  articleAllState: ModuleAllArticlesReducers,
  articleCurrentState: ModuleCurrentArticleReducers,
  moduleHome: ModuleHomeReducers
}
