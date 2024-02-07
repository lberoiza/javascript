import { useParams } from "react-router-dom";
import ArticleEdit from "../components/ArticleEdit";
import Sidebar from "../components/Sidebar";
import Slider from "../components/Slider";
import useFetch from "../hooks/useFetch";
import ApiConstant from "../api/ApiConstant";
import { ArticleResponse } from "@/models/ArticleResponse.model";
import Error from "../components/Error";
import Loading from "../components/Loading";

export default function PageEditArticle(): JSX.Element {
  const { id } = useParams();
  const { data, error, loading } = useFetch<ArticleResponse>(`${ApiConstant.ARTICLE.GET_BY_ID}/${id}`);

  return (
    <>
      <Slider title="Edita Articulo"></Slider>
      <section id="content" className="page-edit-article">
        {loading && <Loading></Loading>}
        {error && <Error></Error>}
        {data.hasResponse() && <ArticleEdit article={data.response!}></ArticleEdit>}
      </section>
      <Sidebar></Sidebar>
    </>
  );
}