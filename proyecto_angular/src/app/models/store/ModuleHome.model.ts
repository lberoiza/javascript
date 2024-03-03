import { Article } from "@/models/Article.model";

export interface HomeState {
  isLoading: boolean,
  articles: Article[]
}
