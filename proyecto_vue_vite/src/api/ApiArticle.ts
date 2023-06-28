import FetchRequest, { FetchRequestReturn } from "../classes/FetchRequest"
import UseFetchData, { IUseFetchData } from "../classes/UseFetchData"
import ApiConstant from "./ApiConstant"
import Config from '../config/Config'

export interface ArticleResponse {
  _id: string,
  title: string,
  content: string,
  date: string,
  image: string,
  __v: number
}

export type ArticleFormFields = {
  title: string,
  content: string
  imagen: File
}

class ApiArticle {

  public getLastArticles(): FetchRequestReturn<ArticleResponse[]> {
    return FetchRequest.get<ArticleResponse[]>(`${ApiConstant.ARTICLE.GET_ALL_ARTICLES}/${Config.DEFAULT_NR_OF_ARTICLES_HOMEPAGE}`);
  }

  public getArticles(): FetchRequestReturn<ArticleResponse[]> {
    return FetchRequest.get<ArticleResponse[]>(`${ApiConstant.ARTICLE.GET_ALL_ARTICLES}`);
  }

  public getArticleById(articleId: string): FetchRequestReturn<ArticleResponse> {
    return FetchRequest.get<ArticleResponse>(`${ApiConstant.ARTICLE.GET_BY_ID}/${articleId}`);
  }

  public getArticlesBySearch(searchStr: string): FetchRequestReturn<ArticleResponse[]> {
    return FetchRequest.get<ArticleResponse[]>(`${ApiConstant.ARTICLE.GET_ALL_BY_SEARCH}/${searchStr}`);
  }

  public updateArticleImage(articleId: string, formDataObject: ArticleFormFields): FetchRequestReturn<ArticleResponse> {
    const form = new FormData();
    form.append('imagen', formDataObject.imagen, formDataObject.imagen.name);
    return FetchRequest.postForm<ArticleResponse>(`${ApiConstant.ARTICLE.POST_ADD_IMAGE_TO_ARTICLE}/${articleId}`, form);
  }

  public createArticle(formDataObject: ArticleFormFields): FetchRequestReturn<ArticleResponse> {
    return FetchRequest.post<ArticleResponse>(ApiConstant.ARTICLE.POST_NEW_ARTICLE, formDataObject);
  }

  public deleteArticle(articleId: string, callback: (wsResult: IUseFetchData<ArticleResponse>) => void): void {
    const { promise } = FetchRequest.delete<ArticleResponse>(`${ApiConstant.ARTICLE.DELETE_BY_ID}/${articleId}`);
    promise.then((wsResult) => callback(wsResult));
  }

  public updateArticle(articleId: string, formDataObject: ArticleFormFields): FetchRequestReturn<ArticleResponse> {
    return FetchRequest.put<ArticleResponse>(`${ApiConstant.ARTICLE.PUT_UPDATE_BY_ID}/${articleId}`, formDataObject);
  }

}

export default new ApiArticle();