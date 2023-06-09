import { ArticleResponse } from "../api/ApiArticle";
import ApiImage from "../api/ApiImage";


type ArticleFormImageProps = {
  article: ArticleResponse
}

export default function ArticleFormImage(props: ArticleFormImageProps): JSX.Element {
  return (
    <div className="form-group">
      <img src={ApiImage.getImageUrl(props.article.image)} alt="Article Image" />
    </div>
  );
}