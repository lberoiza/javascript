import ApiConstant from "../api/ApiConstant";
import Sidebar from "../components/Sidebar";
import { useParams } from "react-router-dom";
import useFetch from "../custom_hooks/useFetch";
import NotFound from "./NotFound";
import Loading from "../components/Loading";
import Dayjs from "../components/Dayjs";
import ApiImage from "../api/ApiImage";
import Error from "../components/Error";
import {ArticleResponse} from "../api/ApiArticle";

type ArticleUrlParams = {
  id: string;
}

function renderArticle(response: ArticleResponse): JSX.Element {
  return (
    <article className="article-item article-detail">
      <div className="image-wrap">
        <img src={ApiImage.getImageUrl(response.image)} alt="Article Image" />
      </div>
      <h1 className="subheader">{response.title}</h1>
      <Dayjs className="date">{response.date}</Dayjs>
      <div className="article-text">
        {response.content}
      </div>
    </article>
  );
}


const Article = (): JSX.Element => {
  const { id } = useParams<ArticleUrlParams>();
  if (id === undefined) return <NotFound></NotFound>

  const { data, loading, error } = useFetch<ArticleResponse>(`${ApiConstant.ARTICLE.GET_BY_ID}/${id}`);

  return (
    <div className="center">
      <section id="content">
        <div id="article-container">
          {loading && <Loading></Loading>}
          {error && <Error></Error>}
          {data.response && renderArticle(data.response)}
        </div>
      </section>
      <Sidebar isBlog></Sidebar>
    </div>
  );
}

export default Article;