import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./user/user.reducers";
import { articleSlice } from "./article/articles.reducers";


export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    articles: articleSlice.reducer
  },
});

export type AppState = ReturnType<typeof store.getState>