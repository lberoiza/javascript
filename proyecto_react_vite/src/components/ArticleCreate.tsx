import Alert from "@/classes/Alert";
import ApiArticle from "@/api/ApiArticle";
import ArticleForm from "@/components/ArticleForm";
import useForm from "@/hooks/useForm";
import { ArticleFormFields } from "@/models/ArticleFormFields.model"
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function ArticleCreate(): JSX.Element {
  const navigation = useNavigate();
  const [error, setError] = useState<string>('');
  const { getData, validateStringFields } = useForm<ArticleFormFields>();

  const formHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const formDataObject = getData(event.target as HTMLFormElement);

    try {
      if (!validateStringFields(formDataObject)) throw new Error("Titulo o Contenido del Articulo vacio.");
      if (formDataObject.imagen.name == '') throw new Error("No se ha Selecionado imagen para el Articulo");

      ApiArticle.createCompleteArticle(formDataObject, (wsResult) => {
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