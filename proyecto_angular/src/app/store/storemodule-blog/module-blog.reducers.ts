import { BlogState } from "@/models/store/ModuleBlog.model";
import { ModuleBlogActions } from "@/store/storemodule-blog/module-blog.actions";
import { createReducer, on } from "@ngrx/store";


const initialState: BlogState = {
  isLoading: false,
  articles: []
}

export const ModuleBlogReducers = createReducer(
  initialState,
  on(ModuleBlogActions.loadAllArticles, (currentState) => {
    return {...currentState, isLoading: true}
  }),
  on(ModuleBlogActions.loadAllArticlesEnded, (currentState) => {
    return {...currentState, isLoading: false}
  }),
  on(ModuleBlogActions.setAllArticles, (currentState, {articles}) => {
    return {...currentState, articles}
  })
);

