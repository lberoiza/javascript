import config from "../config/config";
import { IUploadedFile } from "../models/uploaded_file";
import imageValidator from "../validations/image_validation";
import fileService from "./file_service";
import fs from 'fs';

class ImageService {

  private readonly IMAGE_DIRECTORY = `${config.RESOURCE_DIR}/images`;


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


  public async findImageInFileSystem(fileName: string) : Promise<string> {
    try {
      const pathToImage = this.getAbsolutPathToImage(fileName); 
      await fs.promises.access(pathToImage, fs.constants.F_OK);
      return pathToImage;
    }catch (error) {
      throw new Error(`La imagen '${fileName}' no fue encontrada en el servidor`);
    }
  }


  public async moveImageToResources(imageFile: IUploadedFile) : Promise<IUploadedFile>{
    await fileService.moveFile(imageFile, this.IMAGE_DIRECTORY);
    return imageFile;
  }


  public async deleteImagefromResources(imageName: string) : Promise<void>{
    await fileService.deleteFile(this.getAbsolutPathToImage(imageName));
  }


  public getAbsolutPathToImage(imageName: string) : string {
    return `${this.IMAGE_DIRECTORY}/${imageName}`;
  }
}

export default new ImageService();