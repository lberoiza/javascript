import mongoose from 'mongoose';
import application from './app';
import express from 'express';

const url: string = 'mongodb://localhost:27017/api_rest_blog';
const port: number = 3900;

mongoose.connect(url)
.then(() => {
  console.log("La conexion a la Base de Datos se ha realizado correctamente!!!");

  application.listen(port, () => {
    console.log(`Servidor corriendo http://localhost:${3900}`);
  });

});

