import Article from "@/components/Article";
import Error from "@/components/Error";
import Loading from "@/components/Loading";
import NotFound from "@/pages/NotFound";
import Sidebar from "@/components/Sidebar";
import { useFetchArticleById } from "@/hooks/useFetchArticleById";
import { useParams } from "react-router-dom";

type ArticleUrlParams = {
  id: string;
}

const ArticlePage = (): JSX.Element => {
  const {id} = useParams<ArticleUrlParams>();
  if (id === undefined) return (<NotFound></NotFound>)
  const { article, loading, error } = useFetchArticleById(id);

  return (
    <>
      <section id="content" className="page-article">
        <div id="article-container">
          {loading && <Loading></Loading>}
          {error && <Error></Error>}
          {article && <Article article={article!}></Article>}
        </div>
      </section>
      <Sidebar isBlog></Sidebar>
    </>
  );
}

export default ArticlePage;