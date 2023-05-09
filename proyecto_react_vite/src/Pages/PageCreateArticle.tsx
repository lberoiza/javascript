import ArticleCreate from "../components/ArticleCreate";
import Sidebar from "../components/Sidebar";
import Slider from "../components/Slider";

export default function ArticleNewPage(): JSX.Element {
  return (
    <>
      <Slider title="Nuevo Articulo"></Slider>
      <section id="content">
        <ArticleCreate></ArticleCreate>
      </section>
      <Sidebar></Sidebar>
    </>
  );
}