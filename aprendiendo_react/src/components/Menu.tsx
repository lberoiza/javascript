import React, { Component } from "react";

class Menu extends Component {

  public render(): JSX.Element {
    return (
      < nav id="menu" >
        <ul>
          <li><a href="index.html">Inicio</a></li>
          <li><a href="blog.html">Blog</a></li>
          <li><a href="formulario.html">Formulario</a></li>
          <li><a href="#">Pagina 1</a></li>
          <li><a href="#">Pagina 2</a></li>
        </ul>
      </nav >
    );
  }
}

export default Menu;