import ArticlePreview from "@/components/ArticlePreview";
import { ArticleResponse } from "@/models/ArticleResponse.model";
import { useState } from "react";

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
        {articleList.map(article => (<ArticlePreview key={article._id} article={article} follow={followArticle}/>))}
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