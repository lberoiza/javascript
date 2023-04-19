import Dayjs from "../components/Dayjs";
import ApiImage from "../api/ApiImage";
import { ArticleResponse } from "../api/ApiArticle";
import ClearFix from "./ClearFix";


type ArticleProps = {
  article: ArticleResponse
}


export default function Article(props: ArticleProps): JSX.Element {
  return (
    <article id={props.article._id} className="article-item article-detail">
      <div className="image-wrap">
        <img src={ApiImage.getImageUrl(props.article.image)} alt="Article Image" />
      </div>
      <div className="article-button-bar">
        <a href="#" className="btn btn-warning">Editar</a>
        <a href="#" className="btn btn-danger">Eliminar</a>
      </div>
      <ClearFix></ClearFix>
      <h1 className="subheader">{props.article.title}</h1>
      <Dayjs className="date">{props.article.date}</Dayjs>
      <div className="article-text">
        {props.article.content}
      </div>
    </article>
  );
}