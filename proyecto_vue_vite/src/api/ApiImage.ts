import ApiConstant from "./ApiConstant";
import NoImage from "../assets/images/no_image.png"


class ApiImage {

  public getImageUrl(imageName: string | null): string {
    return imageName? `${ApiConstant.IMAGE.GET_IMAGE_BY_NAME}/${imageName}` : NoImage;
  }
}

export default new ApiImage();