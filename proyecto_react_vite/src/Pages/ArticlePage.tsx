import ApiConstant from "../api/ApiConstant";
import Sidebar from "../components/Sidebar";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import NotFound from "./NotFound";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { ArticleResponse } from "@/models/ArticleResponse.model";
import Article from "../components/Article";

type ArticleUrlParams = {
  id: string;
}




const ArticlePage = (): JSX.Element => {
  const { id } = useParams<ArticleUrlParams>();
  if (id === undefined) return <NotFound></NotFound>

  const { data, loading, error } = useFetch<ArticleResponse>(`${ApiConstant.ARTICLE.GET_BY_ID}/${id}`);

  return (
    <>
      <section id="content" className="page-article">
        <div id="article-container">
          {loading && <Loading></Loading>}
          {error && <Error></Error>}
          {data.hasErrors() && <Error errors={data.errorMessages}></Error>}
          {data.hasResponse() && <Article article={data.response!}></Article>}
        </div>
      </section>
      <Sidebar isBlog></Sidebar>
    </>
  );
}

export default ArticlePage;