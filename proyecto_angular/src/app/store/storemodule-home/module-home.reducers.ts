import { createReducer, on } from "@ngrx/store";
import { HomeState } from "@/models/store/ModuleHome.model";
import { ModuleHomeActions } from "@/store/storemodule-home/module-home.actions";


const initialState: HomeState = {
  isLoading: false,
  articles: []
}

export const ModuleHomeReducers =  createReducer(
  initialState,
  on(ModuleHomeActions.loadLastArticles, (currentState) => {
    return {...currentState, isLoading: true}
  }),
  on(ModuleHomeActions.loadLastArticlesEnded, (currentState) => {
    return {...currentState, isLoading: false}
  }),
  on(ModuleHomeActions.setLastArticles, (currentState, {articles}) => {
    return {...currentState, articles}
  })
)
