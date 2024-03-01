import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import ApiConstant from "@/config/ApiConstant";
import { ApiArticle, ApiListArticles } from "@/models/ApiArticleResponse.model";
import { ArticleFormFields } from "@/models/Article.model";

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

  public getArticlesBySearch(searchStr: string): Observable<ApiListArticles> {
    return this.http.get<ApiListArticles>(`${ApiConstant.ARTICLE.GET_ALL_BY_SEARCH}/${searchStr}`);
  }

  public createArticle(formDataObject: ArticleFormFields): Observable<ApiArticle> {
    return this.http.post<ApiArticle>(ApiConstant.ARTICLE.POST_NEW_ARTICLE, formDataObject);
  }

  public deleteArticleById(articleId: string): Observable<ApiArticle> {
    return this.http.delete<ApiArticle>(`${ApiConstant.ARTICLE.DELETE_BY_ID}/${articleId}`);
  }

  public updateArticle(articleId: string, formDataObject: ArticleFormFields): Observable<ApiArticle> {
    return this.http.put<ApiArticle>(`${ApiConstant.ARTICLE.PUT_UPDATE_BY_ID}/${articleId}`, formDataObject);
  }

  public updateArticleImage(articleId: string, imageFile: File): Observable<ApiArticle> {
    const form = new FormData();
    form.append('imagen', imageFile, imageFile.name);
    return this.http.post<ApiArticle>(`${ApiConstant.ARTICLE.POST_ADD_IMAGE_TO_ARTICLE}/${articleId}`, form);
  }


}
