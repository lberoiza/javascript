import ApiImage from "@/api/ApiImage";
import { ArticleResponse } from "@/models/ArticleResponse.model";


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