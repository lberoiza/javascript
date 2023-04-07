import WsResponse from '../models/ws_response';
import { Request, Response } from 'express';
import { IArticle } from '../models/article';
import articleValidation from '../validations/article_validation';
import articleService from '../services/article_service'
import ServiceError from '../models/service_error';

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
      const article = await articleService.save(req.body);
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
      const articles = await articleService.all(req.params);
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
      const article = await articleService.getArticle(req.params);
      response.addResponse(article);
    } catch(err: unknown) {
      const serviceError: ServiceError = ServiceError.fromError(err);
      response.addError(serviceError.getErrorMessage());
    }

    return res.status(200).send(response.toJson());
  }


}

export default new ArticleController();