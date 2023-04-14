import React, { Component } from 'react';

import Slider from '../components/Slider';
import Sidebar from '../components/Sidebar';

type formUser = {
  nombre: string,
  apellidos: string,
  biografia: string,
  genero: string
};


class Formulario extends Component<{}, formUser> {


  state: formUser = {
    nombre: '',
    apellidos: '',
    biografia: '',
    genero: ''
  }


  private formAttrib = {
    nombre: React.createRef<HTMLInputElement>(),
    apellido: React.createRef<HTMLInputElement>(),
    biografia: React.createRef<HTMLTextAreaElement>(),
  };


  private getFormValue(input: React.RefObject<HTMLInputElement | HTMLTextAreaElement>): string {
    return input.current ? input.current.value : ''
  }


  private onSubmitMethode = (event: React.FormEvent<HTMLFormElement>) => {
    const newFormData: formUser = {
      nombre: this.getFormValue(this.formAttrib.nombre),
      apellidos: this.getFormValue(this.formAttrib.apellido),
      biografia: this.getFormValue(this.formAttrib.biografia),
      genero: this.state.genero
    }
    console.log(newFormData);
    this.setState(newFormData);
    event.preventDefault();
  };


  private handleGeneroChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ ...this.state, genero: event.target.value });
  }


  private showUserDataIfDataExists(): JSX.Element {
    return (
      <div className='user-info'>
        {
          Object.entries(this.state).map(([key, value]) => {
            return value ? <p key={key}><strong>{key}</strong>: {value}</p> : null
          })
        }
      </div>);
  }


  public render(): JSX.Element {
    return (
      <div id="home">
        <Slider title='Formulario'></Slider>
        <div className="center">
          {this.showUserDataIfDataExists()}
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
                <input type="radio" name="genero" value="hombre" onChange={this.handleGeneroChange} /> Hombre
                <input type="radio" name="genero" value="mujer" onChange={this.handleGeneroChange} /> Mujer
                <input type="radio" name="genero" value="NoBinario" onChange={this.handleGeneroChange} /> No Binario
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