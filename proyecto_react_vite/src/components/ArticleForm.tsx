import ArticleFormImage from "@/components/ArticleFormImage";
import { ArticleResponse } from "@/models/ArticleResponse.model";
import { FormEvent } from "react";


type ArticleFormProps = {
  formHandler: (event: FormEvent<HTMLFormElement>) => void,
  article?: ArticleResponse
}


export default function ArticleForm(props: ArticleFormProps): JSX.Element {
  return (
    <form className="mid-form" onSubmit={props.formHandler}>

      {props.article && <ArticleFormImage article={props.article}></ArticleFormImage>}

      <div className="form-group">
        <label htmlFor="title">Agregue el titulo del artículo</label>
        <input type="text"
               name="title"
               placeholder="Mi Articulo"
               defaultValue={props.article?.title}
               style={{viewTransitionName: `article-title-${props.article?._id}`}}
        />
      </div>

      <div className="form-group">
        <label htmlFor="content" >Agrege el contenido del artículo</label>
        <textarea name="content"
                  placeholder="este articulo trata de..."
                  defaultValue={props.article?.content}
                  style={{viewTransitionName: `article-text-${props.article?._id}`}}
        ></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="imagen" >Agregue la imagen del articulo</label>
        <input id="file-input" type="file" name="imagen" />
      </div>

      <div className="form-group">
        <input type="submit"
               value="guardar"
               className="btn btn-success"
               style={{viewTransitionName: `article-button-${props.article?._id}`}}
        />
      </div>
    </form>
  );
}