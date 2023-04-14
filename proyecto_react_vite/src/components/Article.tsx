import React, { Component, MouseEvent } from "react";
import ApiImage from "../api/ApiImage";
import ClearFix from "./ClearFix";

export interface ArticleProps {
  _id: string,
  title: string;
  image: string;
  date: string;
  content: string,
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
    const { _id, title, image, date, follow } = this.props;
    return (
      <article id={_id} className="article-item">
        <div className="image-wrap">
          <img src={ApiImage.getImageUrl(image)} alt="Article Image" />
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