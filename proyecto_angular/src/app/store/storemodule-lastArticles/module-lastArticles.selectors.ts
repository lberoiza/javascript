import { AppState } from "@/store/app.state";
import { createSelector } from "@ngrx/store";
import { ArticlesLastState } from "@/models/store/ArticlesLastState.model";


export const SelectLastArticlesState = (state: AppState) => state.articlesLastState;

export const SelectLastArticlesIsLoading = createSelector(
  SelectLastArticlesState,
  (state: ArticlesLastState) => state.isLoading
);

export const SelectLastArticles = createSelector(
  SelectLastArticlesState,
  (state: ArticlesLastState) => state.articles
);
