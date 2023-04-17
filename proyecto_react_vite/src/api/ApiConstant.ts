import Config from "../config/Config";

type ApiConstantProps = {
  readonly ARTICLE: {
    readonly GET_BY_ID: string,
    readonly GET_ALL_ARTICLES: string
  },
  readonly IMAGE: {
    readonly GET_IMAGE_BY_NAME: string
  }
};


const ApiConstant: ApiConstantProps = {
  ARTICLE: {
    GET_BY_ID: `http://${Config.APP_API_HOST}:${Config.APP_PORT}${Config.APP_API_PREFIX}/article`,
    GET_ALL_ARTICLES: `http://${Config.APP_API_HOST}:${Config.APP_PORT}${Config.APP_API_PREFIX}/article/all`
  },
  IMAGE: {
    GET_IMAGE_BY_NAME: `http://${Config.APP_API_HOST}:${Config.APP_PORT}${Config.APP_API_PREFIX}/image`
  }
}


export default ApiConstant