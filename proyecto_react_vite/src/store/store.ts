import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "@/store/user/user.reducers";
import { articleSlice } from "@/store/article/articles.reducers";


export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    articles: articleSlice.reducer
  },
});

export type AppState = ReturnType<typeof store.getState>;