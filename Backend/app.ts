import config from './config/config';

// 1.- Cargar Modulos para crear el servidor
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';


// 2.- Ejecutar Express (trabajar con el http)
const app = express();


// 3.- Cargar Ficheros rutas
import routesArticle from './routes/article.routes';
import routesImage from './routes/image.routes';


// 4.- Middlewares (se ejecutan antes de cargar las rutas )
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


// 5.- CORS (permite peticiones del frontend)


// 6.- Agregar prefijos a las rutas y cargar rutas
app.use(config.APP_API_PREFIX, routesArticle);
app.use(config.APP_API_PREFIX, routesImage);


// 7.- Exportar modulo (fichero actual)
export default app;