import { Article } from "@/models/Article.model";

export interface ArticlesLastState {
  isLoading: boolean,
  articles: Article[]
}
