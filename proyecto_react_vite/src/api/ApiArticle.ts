import Config from '../config/Config'
import FetchRequest from "../classes/FetchRequest";
import { FetchRequestResponse } from "../classes/FetchRequest";

export type ArticleTyp = {
  [key:string]: string;
}


class ApiArticle {

  private readonly URL_ARTICLE_LIST = `http://${Config.APP_API_HOST}:${Config.APP_PORT}${Config.APP_API_PREFIX}/article/all`

  public getList() : Promise<FetchRequestResponse>{
    return FetchRequest.get(this.URL_ARTICLE_LIST)
  }

}


export default new ApiArticle();