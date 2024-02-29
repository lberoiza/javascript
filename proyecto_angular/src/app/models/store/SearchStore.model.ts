import { Article } from "@/models/Article.model";

export interface ModuleSearchState {
  isLoading: boolean,
  lastQuery: string,
  lastResults: Article[]
}
