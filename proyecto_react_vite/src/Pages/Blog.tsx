import React, { Component } from 'react';

import Slider from '../components/Slider';
import Sidebar from '../components/Sidebar';
import ApiArticle from '../api/ApiArticle';
import WsResult, { WsResultObject } from '../classes/WsResult';
import { FetchRequestResponse } from '../classes/FetchRequest';


type BlogPropsType = {
  [key: string]: string
}


class Blog extends Component<BlogPropsType, WsResultObject> {

  private wsResult = new WsResult()
  state: WsResultObject = this.wsResult.toState();

  constructor(props: BlogPropsType) {
    super(props);
  }

  componentDidMount(): void {
    this.loadArticles();
  }

  private loadArticles(): void {
    const self = this;
    ApiArticle.getList().then((response: FetchRequestResponse) => {
      self.setState(self.wsResult.setFetchRequestResponse(response).toState());
    }).catch(error => {
      console.error(error)
      self.wsResult.addError("Hubo un error al cargar los datos");
      self.setState(self.wsResult.toState());
    });
  }



  private showArticles(): JSX.Element {
    if (this.wsResult.isPending()) {
      return this.showLoading();
    } else {
      return this.showArticleList();

    }
  }


  private showLoading(): JSX.Element {
    return (
      <p>Cargando articulos...</p>
    );
  }


  private showArticleList(): JSX.Element {
    if (this.wsResult.hasResponse()) {
      console.log(this.wsResult);
      return (
        <p>Se encontraron un total de {this.wsResult.getResponse().length}</p>
        
      );
    } else {
      return (
          <p>Todavia no existen articulos para mostar</p>
        );
    }
  }


  public render(): JSX.Element {
    return (
      <div id="blog">
        <Slider title='Blog'></Slider>
        <div className="center">
          <section id="content">
            {/* Aqui se cargaran mediante api rest, la lista de articulos */}
            {this.showArticles()}
            {/* <MiComponente /> */}
          </section>
          <Sidebar isBlog></Sidebar>
        </div>
      </div>
    );
  }

}

export default Blog;