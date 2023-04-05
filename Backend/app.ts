// 1.- Cargar Modulos para crear el servidor
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';


// 2.- Ejecutar Express (trabajar con el http)
const app = express();


// 3.- Cargar Ficheros rutas


// 4.- Middlewares (se ejecutan antes de cargar las rutas )
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


// 5.- CORS (permite peticiones del frontend)


// 6.- Agregar prefijos a las rutas


// 7.- Rutas
app.get('/datos-curso', (req: Request, res: Response) => {

  console.log("llamando datos-curso")
   
  return res.status(200).send({
    curso: 'Master en Frameworks JS',
    autor: 'Luis Beroiza'
  });
});



// 8.- Exportar modulo (fichero actual)
export default app;