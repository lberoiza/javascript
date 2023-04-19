import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../hooks/useForm";
import FetchRequest from "../classes/FetchRequest";
import { IUseFetchData } from '../classes/UseFetchData'
import { ArticleResponse } from "../api/ApiArticle";
import ApiConstant from "../api/ApiConstant";


type ArticleFormFields = {
  title: string,
  content: string
  imagen: File
}


export default function ArticleNew(): JSX.Element {
  const navigation = useNavigate();
  const [error, setError] = useState<string>('');
  const { getData, validateStringFields } = useForm<ArticleFormFields>();

  const formHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formDataObject = getData(event.target as HTMLFormElement);

    try {
      if (!validateStringFields(formDataObject)) throw new Error("Titulo o Contenido del Articulo vacio.");
      if (formDataObject.imagen.name == '') throw new Error("No se ha Selecionado imagen para el Articulo");

      const { promise } = FetchRequest.post<ArticleResponse>(ApiConstant.ARTICLE.POST_NEW_ARTICLE, formDataObject)
      promise.then(wsResult => {
        const id = wsResult.response?._id;
        const form = new FormData();
        form.append('imagen', formDataObject.imagen, formDataObject.imagen.name);

        const { promise } = FetchRequest.postForm<ArticleResponse>(`${ApiConstant.ARTICLE.POST_ADD_IMAGE_TO_ARTICLE}/${id}`, form)
        promise.then(wsResult => {
          navigation(`/blog/article/${id}`);
        });
      });

    } catch (error) {
      console.log(error);
      setError((error as Error).message)
    }
  }


  return (
    <div className="new-article-form">
      {error && <div className="message-error">{error}</div>}
      <form className="mid-form" onSubmit={formHandler}>

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