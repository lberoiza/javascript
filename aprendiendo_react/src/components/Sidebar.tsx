import React, { Component } from "react";

class Sidebar extends Component {

  public render(): JSX.Element {
    return (
      <aside id="sidebar">
        <div id="nav-blog" className="sidebar-item">
          <h3>Puedes hacer esto</h3>
          <a href="" className="btn btn-success">Crear Articulo</a>
        </div>

        <div id="search" className="sidebar-item">
          <h3>Buscador</h3>
          <p>Encuentra el articulo que buscas</p>
          <form action="">
            <input type="text" name="search" id="search-input-text" />
            <input type="submit" value="Buscar" name="submit" id="search-btn-submit" className="btn" />
          </form>
        </div>
      </aside>
    );
  }
}

export default Sidebar;