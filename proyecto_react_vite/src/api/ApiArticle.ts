import FetchRequest from "../classes/FetchRequest"
import { IUseFetchData } from "../classes/UseFetchData"
import WsResult from "../classes/WsResult"
import ApiConstant from "./ApiConstant"

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


  public deleteArticle(id: string, callback: (wsResult: IUseFetchData<ArticleResponse>) => void): void {
    const { promise } = FetchRequest.delete<ArticleResponse>(`${ApiConstant.ARTICLE.DELETE_BY_ID}/${id}`);
    promise.then((wsResult) => callback(wsResult));
  }


}

export default new ApiArticle();