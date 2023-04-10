import React, { Component } from "react";
import Article, { ArticleProps } from "./Article";

export type ArticulosPruebaProps = {
  totalOfArticles: number;
}

class ArticulosPrueba extends Component<ArticulosPruebaProps> {

  private articleTestProps: ArticleProps = {
    title: 'Titulo del Articulo',
    date: 'hace %s minutos.',
    imageUrl: 'https://picsum.photos/300/200?random='
  }


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



  public render(): JSX.Element {
    return (
      <React.Fragment>
        {this.createTestArticleData().map((article) => (
          <Article key={article.title} {...article} />
        ))}
      </React.Fragment>
    );
  }
}

export default ArticulosPrueba;