import ApiConstant from "../api/ApiConstant";
import ArticleList from "@/components/ArticleList/ArticleList";
import Sidebar from "@/components/Sidebar";
import Slider from "@/components/Slider";
import { AppState } from "@/store/store";
import { ArticleResponse } from "@/models/ArticleResponse.model";
import { IUseFetchData } from "@/classes/UseFetchData";
import { setAllArticles } from "@/store/article/articles.actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


const Blog = (): JSX.Element => {
  const allArticles = useSelector((state: AppState) => state.articles.all);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(ApiConstant.ARTICLE.GET_ALL_ARTICLES)
      .then(response => response.json())
      .then((data: IUseFetchData<ArticleResponse>) => {
        if (data.isSuccessful && data.response) {
          dispatch(setAllArticles(data.response));
        }
      })
  }, []);

  return (
    <>
      <Slider title='Blog'></Slider>
      <section id="content" className="page-blog">
        <h2 className="subheader">List of Articles</h2>
        <ArticleList articles={allArticles}/>
      </section>
      <Sidebar isBlog></Sidebar>
    </>
  );
}

export default Blog