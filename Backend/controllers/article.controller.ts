import WsResponse from '../models/ws_response';
import { Request, Response } from 'express';

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

      return res.status(200).send(response.toJson());

    } catch(error) {
      const errorMessage: string = 'Error interno del servidor';
      response.addError(errorMessage)
      return res.status(500).send(response.toJson());
    }

    }
}

export default new ArticleController();