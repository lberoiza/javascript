import React, { Component, MouseEvent } from "react";
import ApiImage from "../api/ApiImage";
import ClearFix from "./ClearFix";
import Dayjs from "./Dayjs";

export interface ArticlePreviewProps {
  _id: string,
  title: string;
  image: string;
  date: string;
  content: string,
  follow(article: ArticlePreviewProps): void;
};


type ArticlePreviewState = {
  btnSeguir: {
    disabled: boolean
  }
};


class ArticlePreview extends Component<ArticlePreviewProps, ArticlePreviewState> {

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
        <Dayjs className="date">{date}</Dayjs>
        <a href="#" className="btn">
          Leer más ...
        </a>
        <ClearFix></ClearFix>
      </article>
    );
  }
}

export default ArticlePreview;