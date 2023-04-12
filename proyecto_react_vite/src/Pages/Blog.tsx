import React, { Component } from 'react';

import Slider from '../components/Slider';
import Sidebar from '../components/Sidebar';
import MiComponente from '../components/ejemplos/MiComponente';

class Blog extends Component {

  public render(): JSX.Element {
    return (
      <div id="blog">
        <Slider title='Blog' isBlog></Slider>
        <div className="center">
          <section id="content">
            {/* Aqui se cargaran mediante api rest, la lista de articulos */}
            <MiComponente />
          </section>
          <Sidebar isBlog></Sidebar>
        </div>
      </div>
    );
  }

}

export default Blog;