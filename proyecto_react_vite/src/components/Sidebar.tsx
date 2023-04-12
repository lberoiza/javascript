import React, { Component } from "react";


export type SidebarProps = {
  isBlog?: boolean
};

class Sidebar extends Component<SidebarProps> {



  private getNavBlog() : JSX.Element | null{
    const navBlog = this.props.isBlog ?
    (
      <div id="nav-blog" className="sidebar-item">
        <h3>Puedes hacer esto</h3>
        <a href="" className="btn btn-success">Crear Articulo</a>
      </div>
    ) : null;
    return navBlog;
  }


  public render(): JSX.Element {
    return (
      <aside id="sidebar">
        {this.getNavBlog()}

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