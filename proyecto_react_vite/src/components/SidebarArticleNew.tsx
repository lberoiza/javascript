import { useNavigateWithTransitions } from "@/hooks/useNavigateWithTransitions";

const SidebarArticleNew = (): JSX.Element => {
  const navigate = useNavigateWithTransitions();
  return (
    <div className="sidebar-item"
          style={{viewTransitionName: `sidebar-article-new`}}
    >
      <h3>Puedes hacer esto</h3>
      <a className="btn btn-success" onClick={() => navigate("/blog/nuevo")}>Crear Articulo</a>
    </div>
  );
}

export default SidebarArticleNew;