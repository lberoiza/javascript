import { useState } from "react";
import ApiConstant from "../api/ApiConstant";
import useFetch from "../hooks/useFetch";
import UseFetchData from "../classes/UseFetchData";
import { ArticleResponse } from "@/models/ArticleResponse.model";
import Error from "./Error";
import Loading from "./Loading";
import ArticlePreview from "./ArticlePreview";



type ArticleListProps = {
  articlesApiUrl?: string
}

type ArticleListState = {
  followArticleTitle: string
}


function showArticleList(fetchData: UseFetchData<ArticleResponse[]>, followArticle: (f: ArticleResponse) => void): JSX.Element {
  if(fetchData.hasResponse()){
    const articleList = fetchData.response!;
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


const ArticleList = (props: ArticleListProps) => {

  const apiUrl = props.articlesApiUrl ? props.articlesApiUrl : ApiConstant.ARTICLE.GET_ALL_ARTICLES;

  const { data, error, loading } = useFetch<ArticleResponse[]>(apiUrl);
  const [blogState, setBlogState] = useState<ArticleListState>({
    followArticleTitle: ''
  });

  const followArticle = (article: ArticleResponse): void => {
    setBlogState({ followArticleTitle: article.title });
  };

  return (
    <>
      {/* Aqui se cargaran mediante api rest, la lista de articulos */}
      {blogState.followArticleTitle && <div className="message">{blogState.followArticleTitle}</div>}
      {loading && <Loading></Loading>}
      {error && <Error></Error>}
      {data.hasErrors() && <Error errors={data.errorMessages}></Error>}
      {data.isSuccessful && showArticleList(data, followArticle)}
    </>
  );
}

export default ArticleList