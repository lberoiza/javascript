import { useState } from "react";
import ApiConstant from "../api/ApiConstant";
import useFetch from "../custom_hooks/useFetch";
import { ArticleResponse } from "../api/ApiArticle";
import Error from "./Error";
import Loading from "./Loading";
import ArticlePreview from "./ArticlePreview";


type ArticleListProps = {
  nrOfArticlesToShow?: number
}

type ArticleListState = {
  followArticleTitle: string
}


function showArticleList(articleList: ArticleResponse[] | null, followArticle: (f: ArticleResponse) => void): JSX.Element {
  if (articleList) {
    return (
      <div id="article-container">
        {articleList.map(article => (<ArticlePreview key={article._id} {...article} follow={followArticle} />))}
      </div>
    );
  } else {
    return (
      <p>Todavia no existen articulos para mostar</p>
    );
  }
}


const ArticleList = (props: ArticleListProps): JSX.Element => {

  const numberOfLastArticles = props.nrOfArticlesToShow ? `/${props.nrOfArticlesToShow}` : '';
  const apiUrl = ApiConstant.ARTICLE.GET_ALL_ARTICLES + numberOfLastArticles;

  const { data, error, loading } = useFetch<ArticleResponse[]>(apiUrl);
  const [blogState, setBlogState] = useState<ArticleListState>({
    followArticleTitle: ''
  });

  const followArticle = (article: ArticleResponse): void => {
    setBlogState({ followArticleTitle: article.title });
  };

  return (
    <section id="content">
      {/* Aqui se cargaran mediante api rest, la lista de articulos */}
      {blogState.followArticleTitle && <div className="message">{blogState.followArticleTitle}</div>}
      {loading && <Loading></Loading>}
      {error && <Error></Error>}
      {data.response && showArticleList(data.response, followArticle)}
    </section>
  );
}

export default ArticleList