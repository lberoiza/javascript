'use strict'

let mongoose = require('mongoose');


let url = 'mongodb://localhost:27017/api_rest_blog';
let opciones = {
    useNewUrlParser: true
};
mongoose.connect(url, opciones)
.then(() => {
    console.log("La conexion a la Base de Datos se ha realizado correctamente!!!");
});