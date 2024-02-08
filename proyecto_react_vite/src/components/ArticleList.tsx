import { useState } from "react";
import { ArticleResponse } from "@/models/ArticleResponse.model";
import ArticlePreview from "./ArticlePreview";

type ArticleListProps = {
  articles: ArticleResponse[]
}

type ArticleListState = {
  followArticleTitle: string
}

function showArticleList(articleList: ArticleResponse[], followArticle: (f: ArticleResponse) => void): JSX.Element {
  if (articleList.length > 0) {
    return (
      <div id="article-container">
        {articleList.map(article => (<ArticlePreview key={article._id} {...article} follow={followArticle}/>))}
      </div>
    );
  } else {
    return (
      <p>Todavia no existen articulos para mostar</p>
    );
  }
}


const ArticleList = (props: ArticleListProps) => {
  const [blogState, setBlogState] = useState<ArticleListState>({followArticleTitle: ''});

  const followArticle = (article: ArticleResponse): void => {
    setBlogState({followArticleTitle: article.title});
  };

  return (
    <>
      {/* Aqui se cargaran mediante api rest, la lista de articulos */}
      {blogState.followArticleTitle && <div className="message">{blogState.followArticleTitle}</div>}
      {showArticleList(props.articles, followArticle)}
    </>
  );
}

export default ArticleList