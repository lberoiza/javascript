import { ArticleState } from "@/models/store/ModuleArticle.model";
import { createReducer, on } from "@ngrx/store";
import { ModuleArticleActions } from "@/store/storemodule-article/module-article.actions";

const initialState: ArticleState = {
  article: undefined,
  isLoading: false
}

export const ModuleArticleReducers = createReducer(
  initialState,
  on(ModuleArticleActions.setArticle, (currentState, {article}) => {
    return {...currentState, article}
  }),
  on(ModuleArticleActions.loadArticleById, (currentState, {articleId}) => {
    return {...currentState, isLoading: true}
  }),
  on(ModuleArticleActions.loadArticleByIdEnds, (currentState) => {
    return {...currentState, isLoading: false}
  }),
);
