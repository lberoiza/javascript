import Dayjs from "../components/Dayjs";
import ApiImage from "../api/ApiImage";
import ApiArticle, { ArticleResponse } from "../api/ApiArticle";
import ClearFix from "./ClearFix";
import { NavigateFunction, NavigateOptions, To, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { SwalParams } from "sweetalert/typings/core";


type ArticleProps = {
  article: ArticleResponse
}


function deleteArticle(articleId: string, useNavigationHook: NavigateFunction): void {
  const swalOptions = {
    text: '',
    className: 'swal-position-top-right',
    timer: 2000,
    icon: 'success'
  }

  try {
    ApiArticle.deleteArticle(articleId, (wsResult) => {
      swalOptions.text = `El Articulo: "${wsResult.response?.title}" fué eliminado correctamente.`;
      useNavigationHook('/blog');
      swal(swalOptions);
    });
  } catch (error) {
    swalOptions.text = `El Articulo no pudo ser eliminado`;
    swalOptions.icon = 'error';
    swalOptions.timer = 0;
    swal(swalOptions)
  }
}


function confirmDeletion(articleId: string, useNavigationHook: NavigateFunction) {
  swal({
    title: "Está seguro que desea eliminar el articulo?",
    text: "El borrado del articulo es permanente!",
    icon: "warning",
    buttons: ['cancelar', 'borrar'],
    dangerMode: true,
  })
    .then((willDelete) => {
      if (willDelete) {
        deleteArticle(articleId, useNavigationHook);
      }
    });
}


export default function Article(props: ArticleProps): JSX.Element {
  const navigation = useNavigate();

  return (
    <article id={props.article._id} className="article-item article-detail">
      <div className="image-wrap">
        <img src={ApiImage.getImageUrl(props.article.image)} alt="Article Image" />
      </div>
      <div className="article-button-bar">
        <button className="btn btn-warning">Editar</button>
        <button onClick={() => confirmDeletion(props.article._id, navigation)} className="btn btn-danger">Eliminar</button>
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