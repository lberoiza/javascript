import { Article } from "@/models/Article.model";

export interface SearchState {
  isLoading: boolean,
  lastQuery: string,
  lastResults: Article[]
}
