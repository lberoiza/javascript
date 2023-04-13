import React, { Component } from "react";
import { NavLink } from "react-router-dom";



class Menu extends Component {

  classNameMethod(arg: {isActive: boolean, isPending: boolean }) : string {
    return arg.isActive ? "navlink_active" : ""
  }
  


  public render(): JSX.Element {
    return (
      < nav id="menu" >
        <ul>
          <li><NavLink className={this.classNameMethod} to="/">Inicio</NavLink></li>
          <li><NavLink className={this.classNameMethod} to="blog">Blog</NavLink></li>
          <li><NavLink className={this.classNameMethod} to="formulario">Formulario</NavLink></li>
          <li><NavLink className={this.classNameMethod} to="pagina1/funcional/receta">Pagina 1</NavLink></li>
          <li><NavLink className={this.classNameMethod} to="pagina2">Pagina 2</NavLink></li>
        </ul>
      </nav >
    );
  }
}

export default Menu;