import { useNavigateWithTransitions } from "@/hooks/useNavigateWithTransitions";

const SidebarArticleNew = (): JSX.Element => {
  const navigate = useNavigateWithTransitions();
  return (
    <div className="sidebar-item"
          style={{viewTransitionName: `sidebar-article-new`}}
    >
      <h3>You can create a</h3>
      <a className="btn btn-success" onClick={() => navigate("/blog/nuevo")}>New Article</a>
    </div>
  );
}

export default SidebarArticleNew;