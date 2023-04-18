import ArticleList from "../components/ArticleList";
import Sidebar from "../components/Sidebar";
import Slider from "../components/Slider";


const Blog = (): JSX.Element => {

  return (
    <div id="blog">
      <Slider title='Blog'></Slider>
      <div className="center">
        <section id="content">
          <ArticleList></ArticleList>
        </section>
        <Sidebar isBlog></Sidebar>
      </div>
    </div>
  );
}

export default Blog