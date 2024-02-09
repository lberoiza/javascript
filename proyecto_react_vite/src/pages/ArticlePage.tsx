import Article from "@/components/Article";
import Error from "@/components/Error";
import Loading from "@/components/Loading";
import NotFound from "@/pages/NotFound";
import Sidebar from "@/components/Sidebar";
import { useFetchArticleById } from "@/hooks/useFetchArticleById";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppState } from "@/store/store";
import { ArticleResponse } from "@/models/ArticleResponse.model";

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
      <section id="content" className="page-article">
        <div id="article-container">
          {loading && <Loading></Loading>}
          {error && <Error></Error>}
          {article && <Article article={article}></Article>}
        </div>
      </section>
      <Sidebar isBlog></Sidebar>
    </>
  );
}


const ArticlePage = (): JSX.Element => {
  const {id} = useParams<ArticleUrlParams>();
  if (id === undefined) return (<NotFound></NotFound>)

  const storedArticle = useSelector((state: AppState) => state.articles.current);
  if (storedArticle) {
    return renderPage({article: storedArticle});
  }

  const {article, loading, error} = useFetchArticleById(id);
  return renderPage({article, loading, error});
}

export default ArticlePage;