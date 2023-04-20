import Config from "../config/Config";

type ApiConstantProps = {
  readonly ARTICLE: {
    readonly GET_BY_ID: string,
    readonly GET_ALL_ARTICLES: string,
    readonly GET_ALL_BY_SEARCH: string
    readonly POST_NEW_ARTICLE: string
    readonly POST_ADD_IMAGE_TO_ARTICLE: string
    readonly DELETE_BY_ID: string
  },
  readonly IMAGE: {
    readonly GET_IMAGE_BY_NAME: string
  }
};


const ApiConstant: ApiConstantProps = {
  ARTICLE: {
    GET_BY_ID: `http://${Config.APP_API_HOST}:${Config.APP_PORT}${Config.APP_API_PREFIX}/article`,
    DELETE_BY_ID: `http://${Config.APP_API_HOST}:${Config.APP_PORT}${Config.APP_API_PREFIX}/article`,
    GET_ALL_ARTICLES: `http://${Config.APP_API_HOST}:${Config.APP_PORT}${Config.APP_API_PREFIX}/article/all`,
    GET_ALL_BY_SEARCH: `http://${Config.APP_API_HOST}:${Config.APP_PORT}${Config.APP_API_PREFIX}/article/search`,
    POST_NEW_ARTICLE: `http://${Config.APP_API_HOST}:${Config.APP_PORT}${Config.APP_API_PREFIX}/article/save`,
    POST_ADD_IMAGE_TO_ARTICLE: `http://${Config.APP_API_HOST}:${Config.APP_PORT}${Config.APP_API_PREFIX}/article/upload_image`
  },
  IMAGE: {
    GET_IMAGE_BY_NAME: `http://${Config.APP_API_HOST}:${Config.APP_PORT}${Config.APP_API_PREFIX}/image`
  }
}


export default ApiConstant