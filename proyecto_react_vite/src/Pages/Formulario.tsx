import React, { Component } from 'react';

import Slider from '../components/Slider';
import Sidebar from '../components/Sidebar';
import UltimosArticulos from '../components/UltimosArticulos';
import { on } from 'events';

class Formulario extends Component {

  private formAttrib = {
    nombre: React.createRef<HTMLInputElement>(),
    apellido: React.createRef<HTMLInputElement>(),
    biografia: React.createRef<HTMLTextAreaElement>(),
    genero: {
      hombre: React.createRef<HTMLInputElement>(),
      mujer: React.createRef<HTMLInputElement>(),
      noBinario: React.createRef<HTMLInputElement>()
    },
  };

  
  private onSubmitMethode = (event: React.FormEvent<HTMLFormElement>) => {
    console.log(this.formAttrib);
    console.log(this.formAttrib.nombre.current?.value);
    event.preventDefault();
  };


  public render(): JSX.Element {
    return (
      <div id="home">
        <Slider title='Formulario'></Slider>
        <div className="center">
          <section id="content">

            <form className="mid-form" onSubmit={this.onSubmitMethode}>
              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input type="text" name="nombre" ref={this.formAttrib.nombre} />
              </div>

              <div className="form-group">
                <label htmlFor="apellido">Apellido</label>
                <input type="text" name="apellido" ref={this.formAttrib.apellido} />
              </div>


              <div className="form-group">
                <label htmlFor="biografia">Biografía</label>
                <textarea name="biografia" cols={30} rows={10} ref={this.formAttrib.biografia} ></textarea>
              </div>


              <div className="form-group radio-button">
                <input type="radio" name="genero" ref={this.formAttrib.genero.hombre} /> Hombre
                <input type="radio" name="genero" ref={this.formAttrib.genero.mujer} /> Mujer
                <input type="radio" name="genero" ref={this.formAttrib.genero.noBinario} /> No Binario
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