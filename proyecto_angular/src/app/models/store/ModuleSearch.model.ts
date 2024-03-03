import { Article } from "@/models/Article.model";

export interface SearchState {
  isLoading: boolean,
  query: string,
  results: Article[]
}
