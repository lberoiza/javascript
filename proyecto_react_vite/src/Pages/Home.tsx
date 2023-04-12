import React, { Component } from 'react';

import Slider from '../components/Slider';
import Sidebar from '../components/Sidebar';
import ClearFix from '../components/ClearFix';
import UltimosArticulos from '../components/UltimosArticulos';

class Home extends Component {

  public render(): JSX.Element {
    return (
      <div id="home">
        <Slider></Slider>
        <div className="center">
          <section id="content">
            <UltimosArticulos></UltimosArticulos>
          </section>
          <Sidebar></Sidebar>
          <ClearFix></ClearFix>
        </div>
      </div>
    );
  }
}

export default Home;