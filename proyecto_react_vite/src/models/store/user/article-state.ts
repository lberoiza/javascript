import { ArticleResponse } from "@/models/ArticleResponse.model";

export interface ArticleState {
  all: ArticleResponse[];
  last: ArticleResponse[];
  current?: ArticleResponse;
}