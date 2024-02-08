import ApiConstant from "@/api/ApiConstant";
import FetchRequest from "@/classes/FetchRequest";
import { AppState } from "@/store/store";
import { ArticleResponse } from "@/models/ArticleResponse.model";
import { IUseFetchData } from "@/classes/UseFetchData";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const useFetchArticleById = (id: string) => {

  const articles = useSelector((state: AppState) => state.articles.all);
  const [article, setArticle] = useState<ArticleResponse | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const foundArticle = articles.find(article => article._id === id);
    if (foundArticle) {
      setArticle(foundArticle);
      setLoading(false);
    } else {
      FetchRequest.get<ArticleResponse>(`${ApiConstant.ARTICLE.GET_BY_ID}/${id}`)
        .promise
        .then((data: IUseFetchData<ArticleResponse>) => {
          if (data.isSuccessful && data.response) {
            setArticle(data.response);
          } else {
            setError(true);
          }
          setLoading(false);
        });
    }
  }, [id, articles]);


  return { article, loading, error };

};