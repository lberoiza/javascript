import Alert from "@/classes/Alert";
import ApiArticle from "@/api/ApiArticle";
import ArticleForm from "@/components/ArticleForm";
import useForm from "@/hooks/useForm";
import { ArticleFormFields } from "@/models/ArticleFormFields.model"
import { FormEvent, useState } from "react";
import { useNavigateWithTransitions } from "@/hooks/useNavigateWithTransitions";
import { setCurrentArticle } from "@/store/article/articles.actions";
import { useDispatch } from "react-redux";


export default function ArticleCreate(): JSX.Element {
  const navigation = useNavigateWithTransitions();
  const [error, setError] = useState<string>('');
  const { getData, validateStringFields } = useForm<ArticleFormFields>();
  const dispatch = useDispatch();

  const formHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const formDataObject = getData(event.target as HTMLFormElement);

    try {
      if (!validateStringFields(formDataObject)) throw new Error("Titulo o Contenido del Articulo vacio.");
      if (formDataObject.imagen.name == '') throw new Error("No se ha Selecionado imagen para el Articulo");

      ApiArticle.createCompleteArticle(formDataObject, (wsResult) => {
        dispatch(setCurrentArticle(wsResult.response));
        navigation(`/blog/article/${wsResult.response?._id}`)
        Alert.showSuccess("Tu Articulo fué creado exitosamente")
      });

    } catch (error) {
      setError((error as Error).message)
    }
  }


  return (
    <div className="create-article-form">
      {error && <div className="message-error">{error}</div>}
      <ArticleForm formHandler={formHandler}></ArticleForm>
    </div>
  );
}