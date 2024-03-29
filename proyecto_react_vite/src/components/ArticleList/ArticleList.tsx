import ArticlePreview from "@/components/ArticlePreview/ArticlePreview";
import { ArticleResponse } from "@/models/ArticleResponse.model";
import { useState } from "react";
import styles from './ArticleList.module.css';

type ArticleListProps = {
  articles: ArticleResponse[]
}

type ArticleListState = {
  followArticleTitle: string
}

function showArticleList(articleList: ArticleResponse[], followArticle: (f: ArticleResponse) => void): JSX.Element {
  if (articleList.length > 0) {
    return (
      <div className={styles.article_list_container}>
        {articleList.map(article => (<ArticlePreview key={article._id} article={article} follow={followArticle}/>))}
      </div>
    );
  } else {
    return (
      <p>There are not Articles to show</p>
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