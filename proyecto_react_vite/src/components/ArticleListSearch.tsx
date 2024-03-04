import ArticleList from "@/components/ArticleList/ArticleList";
import Error from "@/components/Error";
import Loading from "@/components/Loading";
import { useFetchSearchArticlesByContent } from "@/hooks/useFetchSearchArticlesByContent";

type ArticleListSearchProps = {
  search: string
}

const ArticleListSearch = (props: ArticleListSearchProps): JSX.Element => {
  const search = props.search
  const {articles, loading, error, errorMessage} = useFetchSearchArticlesByContent(search);

  return (
    <>
      {loading && <Loading></Loading>}
      {error && <Error errors={errorMessage}></Error>}
      {articles.length > 0 && <ArticleList articles={articles}/>}
    </>
  );
}

export default ArticleListSearch