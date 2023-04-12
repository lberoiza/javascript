import React, { Component } from 'react';

import Slider from '../components/Slider';
import Sidebar from '../components/Sidebar';
import ClearFix from '../components/ClearFix';
import MiComponente from '../components/ejemplos/MiComponente';

class Blog extends Component {

  public render(): JSX.Element {
    return (
      <div id="blog">
        <Slider isBlog></Slider>
        <div className="center">
          <section id="content">
            <MiComponente />
          </section>
          <Sidebar isBlog></Sidebar>
          <ClearFix></ClearFix>
        </div>
      </div>
    );
  }

}

export default Blog;