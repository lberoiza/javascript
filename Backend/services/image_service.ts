import { IUploadedFile } from "../models/uploaded_file";
import imageValidator from "../validations/image_validation";
import fileService from "./file_service";

class ImageService {
  public conserveFirstImageAndDeleteRest(fileList: IUploadedFile[]) : IUploadedFile{

    let selectedImage: IUploadedFile = fileList.find((file) => imageValidator.isValid(file))!;
    if(!selectedImage){
      fileService.deleteFiles(fileList.map(file => file.path));
      throw new Error("Ningun archivo subido es una imagen válida");
    }

    const filesToDelete = fileList.filter(file => file != selectedImage);
    fileService.deleteFiles(filesToDelete.map(file => file.path));
    return selectedImage;
  }
}

export default new ImageService();