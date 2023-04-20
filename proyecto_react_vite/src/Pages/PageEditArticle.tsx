import { useParams } from "react-router-dom";
import ArticleEdit from "../components/ArticleEdit";
import Sidebar from "../components/Sidebar";
import Slider from "../components/Slider";
import useFetch from "../hooks/useFetch";
import ApiConstant from "../api/ApiConstant";
import { ArticleResponse } from "../api/ApiArticle";
import Error from "../components/Error";
import Loading from "../components/Loading";
import ClearFix from "../components/ClearFix";

export default function PageEditArticle(): JSX.Element {
  const { id } = useParams();
  const { data, error, loading } = useFetch<ArticleResponse>(`${ApiConstant.ARTICLE.GET_BY_ID}/${id}`);

  return (
    <div id="create">
      <Slider title="Edita Articulo"></Slider>
      <div className="center">
        <section id="content">
          {loading && <Loading></Loading>}
          {error && <Error></Error>}
          {data.hasResponse() && <ArticleEdit article={data.response!}></ArticleEdit>}
        </section>
        <Sidebar></Sidebar>
      </div>
    </div>
  );
}