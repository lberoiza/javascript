import ArticleListSearch from "../components/ArticleListSearch";
import Sidebar from "../components/Sidebar";
import Slider from "../components/Slider";
import { useParams } from "react-router-dom";


const Search = (): JSX.Element => {
  const { search } = useParams<string>();

  return (
    <>
      <Slider title={`Busqueda: '${search}'`}></Slider>
      <section id="content">
        <ArticleListSearch search={search!}></ArticleListSearch>
      </section>
      <Sidebar isBlog></Sidebar>
    </>
  );
}

export default Search