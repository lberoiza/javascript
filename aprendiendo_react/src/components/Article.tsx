import React, { Component, MouseEvent } from "react";
import ClearFix from "./ClearFix";

export interface ArticleProps {
  title: string;
  imageUrl: string;
  date: string;
  follow(article: ArticleProps): void;
};


type ArticleState = {
  btnSeguir: {
    disabled: boolean
  }
};


class Article extends Component<ArticleProps, ArticleState> {

  state = {
    btnSeguir: { disabled: false }
  }

  private callFollow = (event: MouseEvent<HTMLButtonElement>): void => {
    this.setState({ ...this.state, btnSeguir: { ...this.state.btnSeguir, disabled: true } });
    this.props.follow(this.props);
  }

  render() {
    const { title, imageUrl, date, follow } = this.props;
    return (
      <article className="article-item">
        <div className="image-wrap">
          <img src={imageUrl} alt="Article Image" />
        </div>
        <button className="btn-follow star-button" onClick={this.callFollow} disabled={this.state.btnSeguir.disabled}>
          <span className="star-icon"></span>
        </button>
        <h2>{title}</h2>
        <span className="date">{date}</span>
        <a href="#" className="btn">
          Leer más ...
        </a>
        <ClearFix></ClearFix>
      </article>
    );
  }
}

export default Article;