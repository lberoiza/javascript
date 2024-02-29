import { ArticleCurrentState } from "@/models/store/ArticleCurrentState.model";
import { createReducer, on } from "@ngrx/store";
import { ModuleCurrentArticleActions } from "@/store/storemodule-current-article/module-currentArticle.actions";

const initialState: ArticleCurrentState = {
  article: undefined
}

export const ModuleCurrentArticleReducers = createReducer(
  initialState,
  on(ModuleCurrentArticleActions.setCurrentArticle, (currentState, {article}) => {
    return {...currentState, article}
  })
);
