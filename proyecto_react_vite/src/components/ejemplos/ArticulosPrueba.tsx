import React, { ChangeEvent, Component, MouseEvent } from "react";
import Article, { ArticleProps } from "../Article";

export type ArticulosPruebaProps = {
  totalOfArticles: number;
};


export type ArticulosPruebaState = {
  articles: ArticleProps[],
  title: string,
  followArticleTitle: string
};


class ArticulosPrueba extends Component<ArticulosPruebaProps, ArticulosPruebaState> {

  private followArticle = (article: ArticleProps): void => {
    this.setState({ ...this.state, followArticleTitle: article.title });
  }


  private articleTestProps: ArticleProps = {
    title: 'Titulo del Articulo',
    date: 'hace %s minutos.',
    imageUrl: 'https://picsum.photos/300/200?random=',
    follow: this.followArticle
  }


  state = {
    articles: this.createTestArticleData(),
    title: '',
    followArticleTitle: ''
  };


  private createTestArticleData(): ArticleProps[] {
    const { totalOfArticles } = this.props;
    const articles: ArticleProps[] = [];

    for (let i = 0; i < totalOfArticles; i++) {
      // genera un número aleatorio entre 0 y 59
      const randomMinutes = Math.floor(Math.random() * 60);
      // copia todas las propiedades del modelo
      const article: ArticleProps = { ...this.articleTestProps };

      // agrega un número al final de la URL de la imagen
      article.title = `${this.articleTestProps.title} ${i + 1}`;
      article.imageUrl = this.articleTestProps.imageUrl + i;
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
          <Article key={article.title} {...article} />
        ))}
      </React.Fragment>
    );
  }
}

export default ArticulosPrueba;