import ApiConstant from "@/config/ApiConstant";

export function getImageUrl(imageString: string | undefined): string {
  return imageString? `${ApiConstant.IMAGE.GET_IMAGE_BY_NAME}/${imageString}` : '/assets/images/no_image.png'
}
