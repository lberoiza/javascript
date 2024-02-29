import { ArticlesLastState } from "@/models/store/ArticlesLastState.model";
import { createReducer, on } from "@ngrx/store";
import { ModuleLastArticlesActions } from "@/store/storemodule-lastArticles/module-lastArticles.actions";


const initialState: ArticlesLastState = {
  isLoading: false,
  articles: []
}

export const ModuleLastArticlesReducers =  createReducer(
  initialState,
  on(ModuleLastArticlesActions.loadLastArticles, (currentState) => {
    return {...currentState, isLoading: true}
  }),
  on(ModuleLastArticlesActions.loadLastArticlesEnded, (currentState) => {
    return {...currentState, isLoading: false}
  }),
  on(ModuleLastArticlesActions.setLastArticles, (currentState, {articles}) => {
    return {...currentState, articles}
  })
)
