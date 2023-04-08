import { IUploadedFile } from '../models/uploaded_file';
import fs from 'fs';


class FileService {

  public deleteFiles(listOfPaths: string[]) {
    listOfPaths.forEach(path => this.deleteFile(path));
  }


  public async deleteFile(path: string) {
    if(path){
      try {
        await fs.promises.unlink(path);
      }catch(error) {
        console.warn(error);
      }
    }
  }


  public async moveFile(fileToMove: IUploadedFile, destinationDir: string) {
    try {
      const path: string = `${destinationDir}/${fileToMove.filename}`
      await fs.promises.rename(fileToMove.path, path);
      fileToMove.path = path;
      fileToMove.destination = destinationDir;
    }catch(error) {
      console.log(error);
      throw new Error(`Error al mover el archivo: ${fileToMove.filename}`);
    }
  }

}

export default new FileService();