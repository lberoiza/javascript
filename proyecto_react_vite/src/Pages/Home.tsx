import React, { Component } from 'react';

import Slider from '../components/Slider';
import Sidebar from '../components/Sidebar';
import ArticleListLast from '../components/ArticleListLast';

class Home extends Component {

  public render(): JSX.Element {
    return (
      <div id="home">
        <Slider isHome title='Bienvenido al master der ReactJS'></Slider>
        <div className="center">
          <section id="content">
            <h2 className="subheader">Últimos artículos</h2>
            {/* <!-- LISTADO ULTIMOS ARTICULOS ARTICULOS --> */}
            <ArticleListLast></ArticleListLast>
          </section>
          <Sidebar></Sidebar>
        </div>
      </div>
    );
  }
}

export default Home;