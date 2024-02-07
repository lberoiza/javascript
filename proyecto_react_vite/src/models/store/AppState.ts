import { UserState } from "@/models/store/user/user-state";
import { ArticleState } from "@/models/store/user/article-state";

export interface AppState{
  user: UserState,
  articles: ArticleState
}