import React, { Component } from "react";
import ArticulosPrueba from "./ArticulosPrueba";

class UltimosArticulos extends Component {

  public render(): JSX.Element {
    return (
      <div id="article-container">
        <h2 className="subheader">Últimos artículos</h2>
        {/* <!-- LISTADO ARTICULOS --> */}
        <ArticulosPrueba totalOfArticles={5}></ArticulosPrueba>
      </div>
    );
  }
}

export default UltimosArticulos;