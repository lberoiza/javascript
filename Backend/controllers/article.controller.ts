import WsResponse from '../models/ws_response';
import { Request, Response } from 'express';
import { IArticleData } from '../models/article';
import articleService from '../services/article_service'
import ServiceError from '../models/service_error';
import UploadedFile, { IUploadedFile } from '../models/uploaded_file';
import fileService from '../services/file_service';
import config from '../config/config';

class ArticleController {

  public async datosCurso(req: Request, res: Response) {
    const response = new WsResponse();
    try {
      console.log("llamando datos-curso")
      let mensaje: string = req.query.mensaje as string;

      response.addResponse({
        curso: 'Master en Frameworks JS',
        autor: 'Luis Beroiza',
        mensaje
      });

    } catch(error) {
      const errorMessage: string = 'Error interno del servidor';
      response.addError(errorMessage)
    }

    return res.status(200).send(response.toJson());
  }


  public async saveArticle(req: Request, res: Response) {
    const response = new WsResponse();
    try{

      const articleData: IArticleData = {
        title: req.body.title,
        content: req.body.content,
        image: req.body.image
      };

      const article = await articleService.save(articleData);
      response.addResponse(article);
    } catch(err: unknown) {
      const serviceError: ServiceError = ServiceError.fromError(err);
      response.addError(serviceError.getErrorMessage());
    }

    return res.status(200).send(response.toJson());
  }


  public async allArticles(req: Request, res: Response) {
    const response = new WsResponse();
    try{
      const articles = await articleService.all(req.params.last);
      response.addResponse(articles);
    } catch(err: unknown) {
      const serviceError: ServiceError = ServiceError.fromError(err);
      response.addError(serviceError.getErrorMessage());
    }

    return res.status(200).send(response.toJson());
  }


  public async findArticle(req: Request, res: Response) {
    const response = new WsResponse();
    try{
      const article = await articleService.getArticle(req.params.id);
      response.addResponse(article);
    } catch(err: unknown) {
      const serviceError: ServiceError = ServiceError.fromError(err);
      response.addError(serviceError.getErrorMessage());
    }

    return res.status(200).send(response.toJson());
  }


  public async updateArticle(req: Request, res: Response) {
    const response = new WsResponse();
    try{
      const articleData: IArticleData = {
        title: req.body.title,
        content: req.body.content,
        image: req.body.image
      };

      const article = await articleService.update(req.params.id, articleData);
      response.addResponse(article);
    } catch(err: unknown) {
      const serviceError: ServiceError = ServiceError.fromError(err);
      response.addError(serviceError.getErrorMessage());
    }

    return res.status(200).send(response.toJson());
  }


  public async deleteArticle(req: Request, res: Response) {
    const response = new WsResponse();
    try{
      const article = await articleService.delete(req.params.id);
      response.addResponse(article);
    } catch(err: unknown) {
      const serviceError: ServiceError = ServiceError.fromError(err);
      response.addError(serviceError.getErrorMessage());
    }

    return res.status(200).send(response.toJson());
  }


  public async uploadImage(req: Request, res: Response) {
    const response = new WsResponse();
    const destination = `${config.RESOURCE_DIR}/images`;

    try{
      const article = await articleService.getArticle(req.params.id);
      if(req.files?.length == 0)
        throw new Error('No se se subieron imagenes');
      
      const files = req.files as Express.Multer.File[];
      const uploadedFileList: IUploadedFile[] = files.map((file) => new UploadedFile(file));
      const uploadedFile: IUploadedFile = await fileService.conserveFirstFileAndDeleteRest(uploadedFileList, destination);
      const oldImage = article.image;
      article.image = uploadedFile.filename;
      await fileService.deleteFile(`${destination}/${oldImage}`);
      await articleService.update(req.params.id, article);
      response.addResponse(article);
    } catch(err: unknown) {
      const serviceError: ServiceError = ServiceError.fromError(err);
      response.addError(serviceError.getErrorMessage());
    }

    return res.status(200).send(response.toJson());
  }


}

export default new ArticleController();