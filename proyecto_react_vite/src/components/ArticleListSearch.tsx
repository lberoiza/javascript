import ApiConstant from "../api/ApiConstant";
import ArticleList from "./ArticleList";


type ArticleListSearchProps = {
  search: string
}


const ArticleListSearch = (props: ArticleListSearchProps): JSX.Element => {
  const search = props.search
  const apiUrl = ApiConstant.ARTICLE.GET_ALL_BY_SEARCH + '/' + search
  return (
    <ArticleList articlesApiUrl={apiUrl}></ArticleList>
  );
}

export default ArticleListSearch