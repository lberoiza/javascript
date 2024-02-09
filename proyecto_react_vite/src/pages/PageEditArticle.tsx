import ArticleEdit from "@/components/ArticleEdit";
import Error from "@/components/Error";
import Loading from "@/components/Loading";
import Sidebar from "@/components/Sidebar";
import Slider from "@/components/Slider";
import { ArticleResponse } from "@/models/ArticleResponse.model";
import { useParams } from "react-router-dom";
import NotFound from "@/pages/NotFound";
import { useSelector } from "react-redux";
import { AppState } from "@/store/store";
import { useFetchArticleById } from "@/hooks/useFetchArticleById";

type ArticleUrlParams = {
  id: string;
}

type RenderProperties = {
  article?: ArticleResponse;
  loading?: boolean;
  error?: boolean;
}

const renderPage = (renderProps: RenderProperties) => {
  const {article, loading, error} = renderProps;
  return (
    <>
      <Slider title="Edita Articulo"></Slider>
      <section id="content" className="page-edit-article">
        {loading && <Loading></Loading>}
        {error && <Error></Error>}
        {article && <ArticleEdit article={article}></ArticleEdit>}
      </section>
      <Sidebar></Sidebar>
    </>
  );
}


export default function PageEditArticle(): JSX.Element {
  const {id} = useParams<ArticleUrlParams>();
  if (id === undefined) return (<NotFound></NotFound>)

  const storedArticle = useSelector((state: AppState) => state.articles.current);
  if (storedArticle) {
    return renderPage({article: storedArticle});
  }

  const {article, loading, error} = useFetchArticleById(id);
  return renderPage({article, loading, error});
}