import Alert from "@/classes/Alert";
import ApiArticle from "@/api/ApiArticle";
import ApiImage from "../api/ApiImage";
import Dayjs from "@/components/Dayjs";
import { ArticleResponse } from "@/models/ArticleResponse.model";
import { useNavigateWithTransitions } from "@/hooks/useNavigateWithTransitions";


type ArticleProps = {
  article: ArticleResponse
}


function deleteArticle(articleId: string, useNavigationHook: Function): void {
  try {
    ApiArticle.deleteArticle(articleId, (wsResult) => {
      const text = `El Articulo: "${wsResult.response?.title}" fué eliminado correctamente.`;
      useNavigationHook('/blog');
      Alert.showSuccess(text);
    });
  } catch (error) {
    const text = `El Articulo no pudo ser eliminado`;
    Alert.showError(text);
  }
}


function confirmDeletion(articleId: string, useNavigationHook: Function) {

  Alert.showConfirmDialog("Está seguro que desea eliminar el articulo?", "El borrado del articulo es permanente!")
    .then((willDelete) => {
      if (willDelete) {
        deleteArticle(articleId, useNavigationHook);
      }
    });
}


export default function Article(props: ArticleProps): JSX.Element {
  const navigation = useNavigateWithTransitions();

  return (
    <article id={props.article._id} className="article-item article-detail">
      <div className="image-wrap">
        <img
          src={ApiImage.getImageUrl(props.article.image)}
          alt="Article Image"
        />
      </div>
      <div className="article-button-bar">
        <button
          onClick={() => navigation(`/blog/edita/${props.article._id}`)}
          className="btn btn-warning"
        >Editar
        </button>
        <button onClick={() => confirmDeletion(props.article._id, navigation)} className="btn btn-danger">Eliminar
        </button>
      </div>
      <h1 className="subheader">
        {props.article.title}
      </h1>
      <Dayjs className="date">
        {props.article.date}
      </Dayjs>
      <div className="article-text">
        {props.article.content}
      </div>
    </article>
  );
}