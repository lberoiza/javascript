import { Article } from "@/models/Article.model";

export interface ApiArticleResponse<T> {
  isSuccessful: boolean,
  successMessages: string[],
  warningMessages: string[],
  errorMessages: string[],
  response: T
}


export interface ApiListArticles extends ApiArticleResponse<Article[]> {}
export interface ApiArticle extends ApiArticleResponse<Article> {}
