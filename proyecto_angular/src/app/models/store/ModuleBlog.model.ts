import { Article } from "@/models/Article.model";

export interface BlogState {
  isLoading: boolean,
  articles: Article[]
}
