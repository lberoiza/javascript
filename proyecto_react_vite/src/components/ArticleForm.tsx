import { FormEvent } from "react";
import { ArticleResponse } from "../api/ApiArticle";



type ArticleFormProps = {
  formHandler: (event: FormEvent<HTMLFormElement>) => void,
  article?: ArticleResponse
}


export default function ArticleForm(props: ArticleFormProps): JSX.Element {
  const error = '';
  return (
    <div className="new-article-form">
      {error && <div className="message-error">{error}</div>}
      <form className="mid-form" onSubmit={props.formHandler}>

        <div className="form-group">
          <label htmlFor="title">Agregue el titulo del artículo</label>
          <input type="text" name="title" placeholder="Mi Articulo" />
        </div>

        <div className="form-group">
          <label htmlFor="content" >Agrege el contenido del artículo</label>
          <textarea name="content" placeholder="este articulo trata de..."></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="imagen" >Agrege la imagen del articulo</label>
          <input id="file-input" type="file" name="imagen" />
        </div>

        <div className="form-group">
          <input type="submit" value="guardar" className="btn btn-success" />
        </div>
      </form>
    </div>
  );
}