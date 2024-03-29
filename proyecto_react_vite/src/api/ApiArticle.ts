import FetchRequest from "../classes/FetchRequest"
import { IUseFetchData } from "@/classes/UseFetchData"
import ApiConstant from "./ApiConstant"
import { ArticleResponse } from "@/models/ArticleResponse.model"
import { ArticleFormFields } from "@/models/ArticleFormFields.model"

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