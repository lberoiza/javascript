import { IUploadedFile } from "../models/uploaded_file";
import * as path from 'path';

class ImageValidation {

  private readonly listOfExtension: string[] = ['.jpg', '.jpeg',  '.bmp', '.png', '.gif', '.svg'];

  public hasImageExtension(pathToFile: string){
    const extension: string = path.extname(pathToFile);
    return this.listOfExtension.includes(extension);
  }

  public isValid(file: IUploadedFile) : boolean {
    if(!this.hasImageExtension(file.filename)) return false;
    return true;
  }
}

export default new ImageValidation();