import Slider from '../components/Slider';
import Sidebar from '../components/Sidebar';
import ArticleListLast from '../components/ArticleListLast';

const Home = () => {
  return (
    <>
      <Slider isHome title="Bienvenido al master der ReactJS"></Slider>
      <section id="content" className="page-home">
        <h2 className="subheader">Últimos artículos</h2>
        {/* <!-- LISTADO ULTIMOS ARTICULOS ARTICULOS --> */}
        <ArticleListLast></ArticleListLast>
      </section>
      <Sidebar></Sidebar>
    </>
  );
}


export default Home;