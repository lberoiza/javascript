import Config from "@/config/Config";

class ApiImage {
  private readonly URL_IMAGE_LIST = `http://${Config.APP_API_HOST}:${Config.APP_PORT}${Config.APP_API_PREFIX}/image`;
  private readonly NO_IMAGE_URL = `src/assets/images/no_image.png`;

  public getImageUrl(imageName: string | null): string {
    if(imageName==null || imageName=='') return this.NO_IMAGE_URL;
    return `${this.URL_IMAGE_LIST}/${imageName}`;
  }
}

export default new ApiImage();