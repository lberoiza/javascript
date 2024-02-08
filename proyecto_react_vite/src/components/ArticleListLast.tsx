import ArticleList from "./ArticleList";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "@/redux/store";
import { useEffect } from "react";
import { IUseFetchData } from "@/classes/UseFetchData";
import { ArticleResponse } from "@/models/ArticleResponse.model";
import { setLastArticles } from "../redux/article/articles.actions";
import ApiConstant from "../api/ApiConstant";
import Config from "../config/Config";


const ArticleListLast = (): JSX.Element => {
  const lastArticles = useSelector((state: AppState) => state.articles.last);
  const dispatch = useDispatch();

  const lastArticlesUrl = ApiConstant.ARTICLE.GET_ALL_ARTICLES + '/' + Config.DEFAULT_NR_OF_ARTICLES_HOMEPAGE;
  useEffect(() => {

    fetch(lastArticlesUrl)
      .then(response => response.json())
      .then((data: IUseFetchData<ArticleResponse>) => {
        if (data.isSuccessful && data.response) {
          dispatch(setLastArticles(data.response));
        }
      })
  }, []);


  return (
    <ArticleList articles={lastArticles}></ArticleList>
  );
}

export default ArticleListLast