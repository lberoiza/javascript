import React, { Component } from 'react';

import Slider from '../components/Slider';
import Sidebar from '../components/Sidebar';
import ApiArticle from '../api/ApiArticle';
import WsResult, { WsResultObject } from '../classes/WsResult';
import { FetchRequestResponse } from '../classes/FetchRequest';
import ArticlePreview, { ArticlePreviewProps } from '../components/ArticlePreview';


type BlogPropsType = {
  [key: string]: string
}

type BlogState = {
  followArticleTitle: string,
  articleRespose: WsResultObject
}

class Blog extends Component<BlogPropsType, BlogState> {

  private wsResult = new WsResult()
  state: BlogState = {
    followArticleTitle: '',
    articleRespose: this.wsResult.toState()
  };

  constructor(props: BlogPropsType) {
    super(props);
  }

  componentDidMount(): void {
    this.loadArticles();
  }

  private loadArticles(): void {
    const self = this;
    ApiArticle.getList().then((response: FetchRequestResponse) => {
      self.setState({ articleRespose: self.wsResult.setFetchRequestResponse(response).toState() });
    }).catch(error => {
      console.error(error)
      self.wsResult.addError("Hubo un error al cargar los datos");
      self.setState({ articleRespose: self.wsResult.toState() });
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
      const articleList = this.wsResult.getResponse() as ArticlePreviewProps[]
      return (
        <>
          {articleList.map(article => (<ArticlePreview key={article._id} {...article} follow={this.followArticle} />))}
        </>
      );
    } else {
      return (
        <p>Todavia no existen articulos para mostar</p>
      );
    }
  }


  private followArticle = (article: ArticlePreviewProps): void => {
    this.setState({ followArticleTitle: article.title });
  }

  public render(): JSX.Element {
    return (
      <div id="blog">
        <Slider title='Blog'></Slider>
        <div className="center">
          <section id="content">
            {/* Aqui se cargaran mediante api rest, la lista de articulos */}
            {/* Operador ternario compacto. si this.state.followArticleTitle existe, se renderiza el resto*/}
            {this.state.followArticleTitle && <div className="message">{this.state.followArticleTitle}</div>}
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