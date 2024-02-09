import { createSlice } from '@reduxjs/toolkit';
import { ArticleState } from "@/models/store/user/article-state";

const initialState: ArticleState = {
  all: [],
  last: [],
  current: undefined
}

export const articleSlice = createSlice<ArticleState>({
  name: 'articleStore',
  initialState,
  reducers: {
    setAllArticles(state, action) {
      state.all = action.payload;
    },
    setLastArticles(state, action) {
      state.last = action.payload;
    },
    setCurrentArticle(state, action) {
      state.current = action.payload;
    }
  }
});