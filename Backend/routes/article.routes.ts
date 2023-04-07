import { Router } from 'express';
import articleController from '../controllers/article.controller';

const router = Router();

// rutas para controlador articulos
router.get('/article/datos-curso', articleController.datosCurso);
router.post('/article/save', articleController.saveArticle);
router.get('/article/all/:last?', articleController.allArticles);
router.get('/article/:id', articleController.findArticle);
router.put('/article/:id', articleController.updateArticle);

export default router;