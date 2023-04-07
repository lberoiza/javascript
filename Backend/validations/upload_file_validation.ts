import validator from "validator";

class UploadFileValidation {
  public isValid(data: Express.Multer.File) : boolean{
    if(validator.isEmpty(data.fieldname)){
      throw new Error("Validacion UploadedFile incorrecta, fieldname está vacío");
    }

    if(validator.isEmpty(data.originalname)){
      throw new Error("Validacion UploadedFile incorrecta, originalname está vacío");
    }

    if(validator.isEmpty(data.mimetype)){
      throw new Error("Validacion UploadedFile incorrecta, mimetype está vacío");
    }

    if(validator.isEmpty(data.destination)){
      throw new Error("Validacion UploadedFile incorrecta, destination está vacío");
    }

    if(validator.isEmpty(data.filename)){
      throw new Error("Validacion UploadedFile incorrecta, filename está vacío");
    }

    if(validator.isEmpty(data.path)){
      throw new Error("Validacion UploadedFile incorrecta, path está vacío");
    }

    console.log(data.size)
    if(Number.isNaN(data.size)){
      throw new Error("Validacion UploadedFile incorrecta, size no es un numero");
    }

    return true;
  }

}

export default new UploadFileValidation();