import React, { Component } from 'react';

import Slider from '../components/Slider';
import Sidebar from '../components/Sidebar';
import UltimosArticulos from '../components/UltimosArticulos';

class Home extends Component {

  public render(): JSX.Element {
    return (
      <div id="home">
        <Slider title='Bienvenido al master der ReactJS'></Slider>
        <div className="center">
          <section id="content">
            <UltimosArticulos></UltimosArticulos>
          </section>
          <Sidebar></Sidebar>
        </div>
      </div>
    );
  }
}

export default Home;