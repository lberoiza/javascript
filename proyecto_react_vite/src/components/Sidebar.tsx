import SearchArticleForm from "./SidebarSearchArticleForm";
import SidebarArticleNew from "./SidebarArticleNew";


export type SidebarProps = {
  isBlog?: boolean
};


const Sidebar = (props: SidebarProps): JSX.Element => {
  return (
    <aside id="sidebar">
      {props.isBlog && <SidebarArticleNew />}
      <SearchArticleForm></SearchArticleForm>
    </aside>
  );
}

export default Sidebar;