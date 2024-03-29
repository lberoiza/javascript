import ArticleListLast from '@/components/ArticleListLast';
import Sidebar from '@/components/Sidebar';
import Slider from '@/components/Slider';

const Home = () => {
  return (
    <>
      <Slider isHome title="Welcome This Blog written in ReactJs"></Slider>
      <section id="content" className="page-home">
        <h2 className="subheader">Last published Articles</h2>
        {/* <!-- LISTADO ULTIMOS ARTICULOS ARTICULOS --> */}
        <ArticleListLast></ArticleListLast>
      </section>
      <Sidebar></Sidebar>
    </>
  );
}


export default Home;