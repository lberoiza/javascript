import React, { Component } from "react";
import ClearFix from "./ClearFix";

export interface ArticleProps {
  title: string;
  imageUrl: string;
  date: string;
}

class Article extends Component<ArticleProps> {
  render() {
    const { title, imageUrl, date } = this.props;
    return (
      <article className="article-item">
        <div className="image-wrap">
          <img src={imageUrl} alt="Article Image" />
        </div>
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