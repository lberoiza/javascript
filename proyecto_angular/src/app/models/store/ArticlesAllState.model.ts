import { Article } from "@/models/Article.model";

export interface ArticlesAllState {
  isLoading: boolean,
  articles: Article[]
}
