import { ArticlesAllState } from "@/models/store/ArticlesAllState.model";
import { ModuleAllArticlesActions } from "@/store/storemodule-all-articles/module-allArticles.actions";
import { createReducer, on } from "@ngrx/store";


const initialState: ArticlesAllState = {
  isLoading: false,
  articles: []
}

export const ModuleAllArticlesReducers = createReducer(
  initialState,
  on(ModuleAllArticlesActions.loadAllArticles, (currentState) => {
    return {...currentState, isLoading: true}
  }),
  on(ModuleAllArticlesActions.loadAllArticlesEnded, (currentState) => {
    return {...currentState, isLoading: false}
  }),
  on(ModuleAllArticlesActions.setArticles, (currentState, {articles}) => {
    return {...currentState, articles}
  })
);

