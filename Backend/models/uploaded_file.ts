import uploadFileValidation from "../validations/upload_file_validation";

export interface IUploadedFile{
  fieldname: string;
  originalname: string;
  mimetype: string;
  destination: string;
  filename: string;
  path: string;
  size: number;

}


class UploadedFile implements IUploadedFile{

  fieldname: string;
  originalname: string;
  mimetype: string;
  destination: string;
  filename: string;
  path: string;
  size: number;

  constructor(data: Express.Multer.File) {
    uploadFileValidation.isValid(data);
    this.fieldname = data.fieldname;
    this.originalname = data.originalname;
    this.mimetype = data.mimetype;
    this.destination = data.destination;
    this.filename = data.filename;
    this.path = data.path;
    this.size = data.size;
  }

}

export default UploadedFile;