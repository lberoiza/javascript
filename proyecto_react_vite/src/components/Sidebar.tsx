import SidebarSearchArticleForm from "./SidebarSearchArticleForm";
import SidebarArticleNew from "./SidebarArticleNew";


export type SidebarProps = {
  isBlog?: boolean
};


const Sidebar = (props: SidebarProps): JSX.Element => {
  return (
    <aside id="sidebar">
      {props.isBlog && <SidebarArticleNew />}
      <SidebarSearchArticleForm></SidebarSearchArticleForm>
    </aside>
  );
}

export default Sidebar;