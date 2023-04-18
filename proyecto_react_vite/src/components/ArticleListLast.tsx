import Config from "../config/Config";
import ApiConstant from "../api/ApiConstant";
import ArticleList from "./ArticleList";


const ArticleListLast = (): JSX.Element => {
  const apiUrl = ApiConstant.ARTICLE.GET_ALL_ARTICLES + '/' + Config.DEFAULT_NR_OF_ARTICLES_HOMEPAGE
  return (
    <ArticleList articlesApiUrl={apiUrl}></ArticleList>
  );
}

export default ArticleListLast