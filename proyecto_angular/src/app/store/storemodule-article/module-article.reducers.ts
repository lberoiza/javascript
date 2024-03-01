import { ArticleState } from "@/models/store/ModuleArticle.model";
import { createReducer, on } from "@ngrx/store";
import { ModuleArticleActions } from "@/store/storemodule-article/module-article.actions";

const initialState: ArticleState = {
  article: undefined
}

export const ModuleArticleReducers = createReducer(
  initialState,
  on(ModuleArticleActions.setArticle, (currentState, {article}) => {
    return {...currentState, article}
  })
);
