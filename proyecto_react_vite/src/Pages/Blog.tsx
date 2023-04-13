import React, { Component } from 'react';

import Slider from '../components/Slider';
import Sidebar from '../components/Sidebar';
import MiComponente from '../components/ejemplos/MiComponente';
import FetchRequest, { WsResponse } from '../classes/FetchRequest';


type apiArticles = {
  articles: any
};


class Blog extends Component<{}, apiArticles> {

  state: apiArticles = { articles: {} };


  private showArticles = (wsResponse: WsResponse) => {
    console.log(wsResponse);
  }

  public render(): JSX.Element {

    // FetchRequest.get('http://localhost:3900/api/article/all/5', this.showArticles);
    return (
      <div id="blog">
        <Slider title='Blog'></Slider>
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