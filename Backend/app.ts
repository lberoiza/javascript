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
// Se Agrega como si fuese un Middleware
// CORS significa "Cross-Origin Resource Sharing"
// y se refiere a una política de seguridad en navegadores web
// que limita el acceso de una página web a los recursos
// de otra página web que se encuentre en un dominio diferente.
import customCors from './middleware/custom_cors';
app.use(customCors.cors);



// 6.- Agregar prefijos a las rutas y cargar rutas
app.use(config.APP_API_PREFIX, routesArticle);
app.use(config.APP_API_PREFIX, routesImage);


// 7.- Exportar modulo (fichero actual)
export default app;