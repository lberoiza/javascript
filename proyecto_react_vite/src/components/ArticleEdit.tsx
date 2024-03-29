import Alert from "../classes/Alert";
import ApiArticle from "@/api/ApiArticle";
import ArticleForm from "@/components/ArticleForm";
import useForm from "@/hooks/useForm";
import { ArticleFormFields } from "@/models/ArticleFormFields.model"
import { ArticleResponse } from "@/models/ArticleResponse.model"
import { FormEvent, useState } from "react";
import { useNavigateWithTransitions } from "@/hooks/useNavigateWithTransitions";

type ArticleEditProps = {
  article: ArticleResponse
}

export default function ArticleEdit(props: ArticleEditProps): JSX.Element {
  const navigation = useNavigateWithTransitions();
  const [error, setError] = useState<string>('');
  const { getData, validateStringFields } = useForm<ArticleFormFields>();

  const formHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const formDataObject = getData(event.target as HTMLFormElement);

    try {
      if (!validateStringFields(formDataObject)) throw new Error("Titulo o Contenido del Articulo vacio.");

      ApiArticle.updateArticle(props.article._id, formDataObject, (wsResult) => {
        navigation(`/blog/article/${wsResult.response?._id}`);
        Alert.showSuccess("Tu Articulo fué editado exitosamente");
      });

    } catch (error) {
      setError((error as Error).message)
    }
  }


  return (
    <div className="edit-article-form">
      {error && <div className="message-error">{error}</div>}
      <ArticleForm article={props.article} formHandler={formHandler}></ArticleForm>
    </div>
  );
}