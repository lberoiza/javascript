import { Router } from 'express';
import imageController from '../controllers/image.controller';

const router = Router();


// rutas para controlador Imagenes
router.get('/image/:image', imageController.getImage);

export default router;