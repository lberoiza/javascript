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

  public getLastArticles(lastArticles: boolean): FetchRequestReturn<ArticleResponse[]> {
    if (lastArticles == true)
      return FetchRequest.get<ArticleResponse[]>(`${ApiConstant.ARTICLE.GET_ALL_ARTICLES}/${Config.DEFAULT_NR_OF_ARTICLES_HOMEPAGE}`);
    else
      return this.getArticles();
  }

  public getArticles(): FetchRequestReturn<ArticleResponse[]> {
    return FetchRequest.get<ArticleResponse[]>(`${ApiConstant.ARTICLE.GET_ALL_ARTICLES}`);
  }

  public updateArticleImage(articleId: string, form: FormData, callback: (wsResult: IUseFetchData<ArticleResponse>) => void): void {
    const { promise } = FetchRequest.postForm<ArticleResponse>(`${ApiConstant.ARTICLE.POST_ADD_IMAGE_TO_ARTICLE}/${articleId}`, form);
    promise.then((wsResult) => callback(wsResult));
  }


  public createArticle(formDataObject: ArticleFormFields, callback: (wsResult: IUseFetchData<ArticleResponse>) => void): void {
    const { promise } = FetchRequest.post<ArticleResponse>(ApiConstant.ARTICLE.POST_NEW_ARTICLE, formDataObject);
    promise.then((wsResult) => callback(wsResult));
  }


  public createCompleteArticle(formDataObject: ArticleFormFields, callback: (wsResult: IUseFetchData<ArticleResponse>) => void): void {
    this.createArticle(formDataObject, (wsResult) => {
      const id = wsResult.response?._id!;
      const form = new FormData();
      form.append('imagen', formDataObject.imagen, formDataObject.imagen.name);
      this.updateArticleImage(id, form, callback);
    });
  }


  public deleteArticle(articleId: string, callback: (wsResult: IUseFetchData<ArticleResponse>) => void): void {
    const { promise } = FetchRequest.delete<ArticleResponse>(`${ApiConstant.ARTICLE.DELETE_BY_ID}/${articleId}`);
    promise.then((wsResult) => callback(wsResult));
  }


  public updateArticle(articleId: string, formDataObject: ArticleFormFields, callback: (wsResult: IUseFetchData<ArticleResponse>) => void): void {
    const { promise } = FetchRequest.put<ArticleResponse>(`${ApiConstant.ARTICLE.PUT_UPDATE_BY_ID}/${articleId}`, formDataObject);
    promise.then((wsResult) => {
      if(formDataObject.imagen.name!='') {
        const form = new FormData();
        form.append('imagen', formDataObject.imagen, formDataObject.imagen.name);
        this.updateArticleImage(articleId, form, callback);
      } else {
        callback(wsResult);
      }
    });
  }

}

export default new ApiArticle();