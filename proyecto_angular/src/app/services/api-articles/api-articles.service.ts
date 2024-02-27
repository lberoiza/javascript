import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import ApiConstant from "@/config/ApiConstant";
import { ApiArticle, ApiListArticles } from "@/models/ApiArticleResponse";

@Injectable({
  providedIn: 'root'
})
export class ApiArticlesService {
  constructor(private http: HttpClient) { }

  public getAllArticles(): Observable<ApiListArticles> {
    return this.http.get<ApiListArticles>(ApiConstant.ARTICLE.GET_ALL_ARTICLES);
  }

  public getLastArticles(): Observable<ApiListArticles> {
    return this.http.get<ApiListArticles>(ApiConstant.ARTICLE.GET_LAST_ARTICLES);
  }

  public getArticleById(articleId: string): Observable<ApiArticle> {
    return this.http.get<ApiArticle>(`${ApiConstant.ARTICLE.GET_BY_ID}/${articleId}`);
  }

  public deleteArticle(articleId: string): Observable<ApiArticle> {
    return this.http.delete<ApiArticle>(`${ApiConstant.ARTICLE.DELETE_BY_ID}/${articleId}`);
  }


}
