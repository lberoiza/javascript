import ArticleCreate from "../components/ArticleCreate";
import Sidebar from "../components/Sidebar";
import Slider from "../components/Slider";

export default function ArticleNewPage(): JSX.Element {
  return (
    <div id="create">
      <Slider title="Nuevo Articulo"></Slider>
      <div className="center">
        <section id="content">
          <ArticleCreate></ArticleCreate>
        </section>
        <Sidebar></Sidebar>
      </div>
    </div>
  );
}