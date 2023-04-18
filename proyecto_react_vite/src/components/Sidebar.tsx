import SearchArticleForm from "./SearchArticleForm";
import ArticleNew from "./ArticleNew";


export type SidebarProps = {
  isBlog?: boolean
};


const Sidebar = (props: SidebarProps): JSX.Element => {
  return (
    <aside id="sidebar">
      {props.isBlog && <ArticleNew />}
      <SearchArticleForm></SearchArticleForm>
    </aside>
  );
}

export default Sidebar;