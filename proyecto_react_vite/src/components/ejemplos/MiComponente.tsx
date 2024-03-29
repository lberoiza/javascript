import React, { Component } from "react";

type Receta = {
  nombre: string,
  calorias: number,
  ingredientes: string[]
};

class MiComponente extends Component {

  private receta: Receta = {
    nombre: 'Pizza',
    calorias: 400,
    ingredientes: ['Tomate', 'Queso', 'Jamon Cocido']
  }


  // React.Fragment permite poder devolver 2 o mas nodos HTML
  // sin tener que crear otra etiqueta.
  // ya que por defecto solo puede devolver un solo node de DOM
  public render(): JSX.Element {

    return (
      <section id="content" className="receta">
        <h1>Receta: {this.receta.nombre}</h1>
        {/* {tituloUrl} */}
        <h3>Calorias: {this.receta.calorias}</h3>
        <ol>
          {this.receta.ingredientes.map((ingrediente, index) => (<li key={index}>{ingrediente}</li>))}
        </ol>
      </section>

    );
  }
}

export default MiComponente;