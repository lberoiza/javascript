import WsResponse from '../models/ws_response';
import { Request, Response } from 'express';
import imageService from '../services/image_service';
import ServiceError from '../models/service_error';
import * as path from 'path';

class ArticleController {


  public async getImage(req: Request, res: Response) {
    const response = new WsResponse();

    try{
      const imagePath = await imageService.findImageInFileSystem(req.params.image)
      return res.sendFile(path.resolve(imagePath));
    } catch(err: unknown) {
      const serviceError: ServiceError = ServiceError.fromError(err);
      response.addError(serviceError.getErrorMessage());
    }

    return res.status(200).send(response.toJson());
  }


}

export default new ArticleController();