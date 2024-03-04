import ArticleListSearch from "@/components/ArticleListSearch";
import Sidebar from "@/components/Sidebar";
import Slider from "@/components/Slider";
import { useParams } from "react-router-dom";


const Search = (): JSX.Element => {
  const { search } = useParams<string>();

  return (
    <>
      <Slider title={`Search: '${search}'`}></Slider>
      <section id="content" className="page-search-article">
        <ArticleListSearch search={search!}></ArticleListSearch>
      </section>
      <Sidebar isBlog></Sidebar>
    </>
  );
}

export default Search