import ArticleListSearch from "../components/ArticleListSearch";
import Sidebar from "../components/Sidebar";
import Slider from "../components/Slider";
import { useParams } from "react-router-dom";


const Search = (): JSX.Element => {
  const { search } = useParams<string>();

  return (
    <div id="search">
      <Slider title={`Busqueda: '${search}'`}></Slider>
      <div className="center">
        <section id="content">
          <ArticleListSearch search={search!}></ArticleListSearch>
        </section>
        <Sidebar isBlog></Sidebar>
      </div>
    </div>
  );
}

export default Search