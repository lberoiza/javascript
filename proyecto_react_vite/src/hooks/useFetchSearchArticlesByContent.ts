import ApiConstant from "@/api/ApiConstant";
import FetchRequest from "@/classes/FetchRequest";
import { ArticleResponse } from "@/models/ArticleResponse.model";
import { IUseFetchData } from "@/classes/UseFetchData";
import { useEffect, useState } from "react";

export const useFetchSearchArticlesByContent = (search: string) => {
  const searchUrl = ApiConstant.ARTICLE.GET_ALL_BY_SEARCH + '/' + search;
  const [articles, setArticles] = useState<ArticleResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string[]>([]);

  useEffect(() => {
    FetchRequest.get<ArticleResponse[]>(searchUrl)
      .promise
      .then((data: IUseFetchData<ArticleResponse[]>) => {
        console.log(data);
        if (data.isSuccessful) {
          setArticles(data.response);
        } else {
          setError(true);
          setErrorMessage(data.errorMessages);
        }
        setLoading(false);
      });
  }, [search, articles]);


  return {articles, loading, error, errorMessage};

};