import { useNavigateWithTransitions } from "@/hooks/useNavigateWithTransitions";

const SidebarArticleNew = (): JSX.Element => {
  const navigate = useNavigateWithTransitions();
  return (
    <div id="nav-blog" className="sidebar-item">
      <h3>Puedes hacer esto</h3>
      <a className="btn btn-success" onClick={() => navigate("/blog/nuevo")}>Crear Articulo</a>
    </div>
  );
}

export default SidebarArticleNew;