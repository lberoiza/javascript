import ArticleNew from "../components/ArticleNew";
import Sidebar from "../components/Sidebar";

export default function ArticleNewPage(): JSX.Element {
  return (
    <div id="create">
      <div className="center">
        <section id="content">
          <ArticleNew></ArticleNew>
        </section>
        <Sidebar></Sidebar>
      </div>
    </div>
  );
}