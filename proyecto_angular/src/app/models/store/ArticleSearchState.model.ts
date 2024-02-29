import { Article } from "@/models/Article.model";

export interface ArticleSearchState {
  isLoading: boolean,
  lastQuery: string,
  lastResults: Article[]
}
