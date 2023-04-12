import React, { Component } from 'react';

import Slider from '../components/Slider';
import Sidebar from '../components/Sidebar';
import UltimosArticulos from '../components/UltimosArticulos';

class Formulario extends Component {

  public render(): JSX.Element {
    return (
      <div id="home">
        <Slider title='Formulario'></Slider>
        <div className="center">
          <section id="content">

            <form className="mid-form">
              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input type="text" name="nombre" />
              </div>

              <div className="form-group">
                <label htmlFor="apellido">Apellido</label>
                <input type="text" name="apellido" />
              </div>


              <div className="form-group">
                <label htmlFor="biografia">Biografía</label>
                <textarea name="biografia" cols={30} rows={10}></textarea>
              </div>


              <div className="form-group radio-button">
                <input type="radio" name="genero" /> Hombre
                <input type="radio" name="genero" /> Mujer
                <input type="radio" name="genero" /> No Binario
              </div>

              <div className="clearfix"></div>
              <input type="submit" value="Enviar" className="btn" />
            </form>

          </section>
          <Sidebar></Sidebar>
        </div>
      </div>
    );
  }
}

export default Formulario;