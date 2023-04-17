import { useState } from "react";
import ApiConstant from "../api/ApiConstant";
import Sidebar from "../components/Sidebar";
import Slider from "../components/Slider";
import useFetch from "../custom_hooks/useFetch";
import { ArticleResponse } from "../api/ApiArticle";
import Error from "../components/Error";
import Loading from "../components/Loading";
import ArticlePreview from "../components/ArticlePreview";

type BlogState = {
  followArticleTitle: string
}


function showArticleList(articleList: ArticleResponse[] | null, followArticle: (f: ArticleResponse) => void): JSX.Element {
  if (articleList) {
    return (
      <>
        {articleList.map(article => (<ArticlePreview key={article._id} {...article} follow={followArticle} />))}
      </>
    );
  } else {
    return (
      <p>Todavia no existen articulos para mostar</p>
    );
  }
}


const Blog = (): JSX.Element => {

  const { data, error, loading } = useFetch<ArticleResponse[]>(ApiConstant.ARTICLE.GET_ALL_ARTICLES);
  const [blogState, setBlogState] = useState<BlogState>({
    followArticleTitle: ''
  });

  const followArticle = (article: ArticleResponse): void => {
    setBlogState({ followArticleTitle: article.title });
  };

  return (
    <div id="blog">
      <Slider title='Blog'></Slider>
      <div className="center">
        <section id="content">
          {/* Aqui se cargaran mediante api rest, la lista de articulos */}
          {blogState.followArticleTitle && <div className="message">{blogState.followArticleTitle}</div>}
          {loading && <Loading></Loading>}
          {error && <Error></Error>}
          {data.response && showArticleList(data.response, followArticle)}
        </section>
        <Sidebar isBlog></Sidebar>
      </div>
    </div>
  );
}

export default Blog