import { Article } from "@/models/Article.model";

export interface ArticleState {
  article?: Article
  isLoading: boolean
}
