import { Router } from 'express';
import articleController from '../controllers/article.controller';

const router = Router();

// rutas para controlador articulos
router.get('/article/datos-curso', articleController.datosCurso);

export default router;