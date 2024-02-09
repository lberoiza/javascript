import ApiConstant from "../api/ApiConstant";
import ArticleList from "@/components/ArticleList";
import Config from "@/config/Config";
import { AppState } from "@/store/store";
import { ArticleResponse } from "@/models/ArticleResponse.model";
import { IUseFetchData } from "@/classes/UseFetchData";
import { setAllArticles, setLastArticles } from "@/store/article/articles.actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


const ArticleListLast = (): JSX.Element => {
  const articles = useSelector((state: AppState) => state.articles);
  const dispatch = useDispatch();

  const lastArticlesUrl = ApiConstant.ARTICLE.GET_ALL_ARTICLES + '/' + Config.DEFAULT_NR_OF_ARTICLES_HOMEPAGE;
  useEffect(() => {

    fetch(lastArticlesUrl)
      .then(response => response.json())
      .then((data: IUseFetchData<ArticleResponse>) => {
        if (data.isSuccessful && data.response) {
          dispatch(setLastArticles(data.response));
          if(articles.all.length === 0) {
            dispatch(setAllArticles(data.response));
          }
        }
      })
  }, []);


  return (
    <ArticleList articles={articles.last}></ArticleList>
  );
}

export default ArticleListLast