import Config from "../config/Config";

class ApiImage {
  private readonly URL_IMAGE_LIST = `http://${Config.APP_API_HOST}:${Config.APP_PORT}${Config.APP_API_PREFIX}/image`;

  public getImageUrl(imageName: string): string {
    return imageName? `${this.URL_IMAGE_LIST}/${imageName}` : '';
  }
}

export default new ApiImage();