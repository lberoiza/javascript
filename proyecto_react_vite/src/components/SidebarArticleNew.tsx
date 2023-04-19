import { Link } from "react-router-dom";

const SidebarArticleNew = (): JSX.Element => {
  return (
    <div id="nav-blog" className="sidebar-item">
      <h3>Puedes hacer esto</h3>
      <Link to="/blog/nuevo" className="btn btn-success">Crear Articulo</Link>
    </div>
  );
}

export default SidebarArticleNew;