import { Router } from 'express';
import articleController from '../controllers/article.controller';
import uploadMiddleware from '../middleware/upload_files';

const router = Router();


// rutas para controlador articulos
router.get('/article/datos-curso', articleController.datosCurso);
router.post('/article/save', articleController.saveArticle);
router.get('/article/all/:last?', articleController.allArticles);
router.get('/article/:id', articleController.findArticle);
router.put('/article/:id', articleController.updateArticle);
router.delete('/article/:id', articleController.deleteArticle);
router.post('/article/upload_image/:id', uploadMiddleware.any(), articleController.uploadImage);

export default router;