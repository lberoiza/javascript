import React, { ChangeEvent, Component, MouseEvent } from "react";
import ArticlePreview, { ArticlePreviewProps } from "@/components/ArticlePreview/ArticlePreview";

export type ArticulosPruebaProps = {
  totalOfArticles: number;
};


export type ArticulosPruebaState = {
  articles: ArticlePreviewProps[],
  title: string,
  followArticleTitle: string
};


class ArticulosPrueba extends Component<ArticulosPruebaProps, ArticulosPruebaState> {

  private followArticle = (article: ArticlePreviewProps): void => {
    this.setState({ ...this.state, followArticleTitle: article.title });
  }


  private articleTestProps: ArticlePreviewProps = {
    _id: '',
    title: 'Titulo del Articulo',
    date: 'hace %s minutos.',
    image: 'https://picsum.photos/300/200?random=',
    content: '',
    __v: 0,
    follow: this.followArticle
  }


  state = {
    articles: this.createTestArticleData(),
    title: '',
    followArticleTitle: ''
  };


  private generateUUID(): string {
    let dt = new Date().getTime();
    const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
  }

  private createTestArticleData(): ArticlePreviewProps[] {
    const { totalOfArticles } = this.props;
    const articles: ArticlePreviewProps[] = [];

    for (let i = 0; i < totalOfArticles; i++) {
      // genera un número aleatorio entre 0 y 59
      const randomMinutes = Math.floor(Math.random() * 60);
      // copia todas las propiedades del modelo
      const article: ArticlePreviewProps = { ...this.articleTestProps };

      // setea el ID
      article._id= this.generateUUID();
      // agrega un número al final de la URL de la imagen
      article.title = `${this.articleTestProps.title} ${i + 1}`;
      article.image = this.articleTestProps.image + i;
      // reemplaza %s con el número aleatorio generado
      article.date = article.date.replace('%s', `${randomMinutes}`)

      articles.push(article);
    }
    return articles;
  }


  private actualizaTitulo = (e: ChangeEvent<HTMLInputElement>): void => {
    this.setState({ ...this.state, title: e.target.value });
  };


  private cambiarTitulo = (e: MouseEvent<HTMLButtonElement>): void => {
    const articles = this.state.articles;
    articles[0].title = this.state.title;
    this.setState({ articles: articles });
  };


  public render(): JSX.Element {
    return (
      <React.Fragment>
        <div>
          <input type="text" name="new_title" id="newtitle" onChange={this.actualizaTitulo} />
          <button onClick={this.cambiarTitulo}>Cambiar Titulo</button>
        </div>
        {/* Operador ternario compacto. si this.state.followArticleTitle existe, se renderiza el resto*/}
        {this.state.followArticleTitle && <div className="message">{this.state.followArticleTitle}</div>}

        {this.state.articles.map((article) => (
          <ArticlePreview key={article._id} {...article} />
        ))}
      </React.Fragment>
    );
  }
}

export default ArticulosPrueba;