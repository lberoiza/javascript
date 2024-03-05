import Alert from "@/classes/Alert";
import ApiArticle from "@/api/ApiArticle";
import ApiImage from "../api/ApiImage";
import Dayjs from "@/components/Dayjs";
import { ArticleResponse } from "@/models/ArticleResponse.model";
import { useNavigateWithTransitions } from "@/hooks/useNavigateWithTransitions";


type ArticleProps = {
  article: ArticleResponse
}

type ContentInnerHTML = {
  __html: string
}


function convertTextToHtml(text: string): ContentInnerHTML {
  return {
    __html: text.replace(/\n/g, '</br>')
  };
}


function deleteArticle(articleId: string, useNavigationHook: Function): void {
  try {
    ApiArticle.deleteArticle(articleId, (wsResult) => {
      const text = `The article: "${wsResult.response?.title}" was eliminated.`;
      useNavigationHook('/blog');
      Alert.showSuccess(text);
    });
  } catch (error) {
    const text = `The article could not be deleted.`;
    Alert.showError(text);
  }
}


function confirmDeletion(articleId: string, useNavigationHook: Function) {

  Alert.showConfirmDialog("Are you sure, you want to delete this article?", "The deletion is permanent!")
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
        >Edit
        </button>
        <button onClick={() => confirmDeletion(props.article._id, navigation)} className="btn btn-danger">Delete
        </button>
      </div>
      <h1 className="subheader">
        {props.article.title}
      </h1>
      <Dayjs className="date">
        {props.article.date}
      </Dayjs>
      <div className="article-text"
           dangerouslySetInnerHTML={convertTextToHtml(props.article.content)}
      >
      </div>
    </article>
  );
}