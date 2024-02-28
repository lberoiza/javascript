import ApiConstant from "@/config/ApiConstant";

export function getImageUrl(imageString: string): string {
  return `${ApiConstant.IMAGE.GET_IMAGE_BY_NAME}/${imageString}`;
}
