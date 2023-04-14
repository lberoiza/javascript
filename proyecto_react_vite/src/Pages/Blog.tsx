import React, { Component } from 'react';

import Slider from '../components/Slider';
import Sidebar from '../components/Sidebar';
import MiComponente from '../components/ejemplos/MiComponente';
import ApiArticle from '../api/ApiArticle';
import WsResponse, { WsResponseObject } from '../classes/WsResponse';
import { FetchRequestResponse } from '../classes/FetchRequest';




type BlogPropsType = {
  [key: string]: string
}

type BlogStateTyp = {
  articles: any
};


class Blog extends Component<BlogPropsType, WsResponseObject> {

  private wsResponse = new WsResponse()
  state: WsResponseObject = this.wsResponse.toState();

  constructor(props: BlogPropsType) {
    super(props);
  }

  componentDidMount(): void {
    this.loadArticles();
  }

  private loadArticles(): void {
    const self = this;
    ApiArticle.getList().then((response: FetchRequestResponse) => {
      console.log(response);
      self.setState(self.wsResponse.setFetchRequestResponse(response).toState());
    }).catch(error => {
      console.error(error)
      self.wsResponse.addError("Hubo un error al cargar los datos");
      self.setState(self.wsResponse.toState());
    });
  }



  private showArticles(): JSX.Element {
    if (this.wsResponse.isPending()) {
      return (<p>Cargando articulos...</p>);
    } else {
      if (this.wsResponse.hasResponse()) {
        return (
          <p>Se encontraron un total de {this.wsResponse.getResponse().length}</p>
        );
      } else {
        return (
            <p>Todavia no existen articulos para mostar</p>
          );
      }

    }

  }

  public render(): JSX.Element {
    return (
      <div id="blog">
        <Slider title='Blog'></Slider>
        <div className="center">
          {this.showArticles()}
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