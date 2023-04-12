import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Menu extends Component {

  public render(): JSX.Element {
    return (
      < nav id="menu" >
        <ul>
          <li><NavLink to="/">Inicio</NavLink></li>
          <li><NavLink to="blog">Blog</NavLink></li>
          <li><NavLink to="formulario">Formulario</NavLink></li>
          <li><NavLink to="pagina1">Pagina 1</NavLink></li>
          <li><NavLink to="pagina2">Pagina 2</NavLink></li>
        </ul>
      </nav >
    );
  }
}

export default Menu;