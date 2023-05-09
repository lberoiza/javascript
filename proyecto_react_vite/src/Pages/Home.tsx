import React, { Component } from 'react';

import Slider from '../components/Slider';
import Sidebar from '../components/Sidebar';
import ArticleListLast from '../components/ArticleListLast';

class Home extends Component {

  public render(): JSX.Element {
    return (
      <>
        <Slider isHome title='Bienvenido al master der ReactJS'></Slider>
        <section id="content">
          <h2 className="subheader">Últimos artículos</h2>
          {/* <!-- LISTADO ULTIMOS ARTICULOS ARTICULOS --> */}
          <ArticleListLast></ArticleListLast>
        </section>
        <Sidebar></Sidebar>
      </>
    );
  }
}

export default Home;