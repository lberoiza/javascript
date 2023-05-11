import ArticleList from "../components/ArticleList";
import Sidebar from "../components/Sidebar";
import Slider from "../components/Slider";


const Blog = (): JSX.Element => {

  return (
    <>
      <Slider title='Blog'></Slider>
      <section id="content" className="page-blog">
        <ArticleList></ArticleList>
      </section>
      <Sidebar isBlog></Sidebar>
    </>
  );
}

export default Blog