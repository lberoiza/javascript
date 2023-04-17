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

function renderArticle(article: ArticleResponse): JSX.Element {
  return (
    <article id={article._id} className="article-item article-detail">
      <div className="image-wrap">
        <img src={ApiImage.getImageUrl(article.image)} alt="Article Image" />
      </div>
      <h1 className="subheader">{article.title}</h1>
      <Dayjs className="date">{article.date}</Dayjs>
      <div className="article-text">
        {article.content}
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