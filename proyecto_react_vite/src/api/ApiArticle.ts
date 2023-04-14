import FetchRequest from "../classes/FetchRequest";
import { FetchRequestResponse } from "../classes/FetchRequest";

export type ArticleTyp = {
  [key:string]: string;
}


class ApiArticle {

  private readonly URL_ARTICLE_LIST = "http://localhost:3900/api/article/all";

  public getList() : Promise<FetchRequestResponse>{
    return FetchRequest.get(this.URL_ARTICLE_LIST)
  }

}


export default new ApiArticle();