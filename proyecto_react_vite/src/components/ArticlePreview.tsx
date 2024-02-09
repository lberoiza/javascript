import React, { useState, MouseEvent } from "react";
import ApiImage from "@/api/ApiImage";
import Dayjs from "@/components/Dayjs";
import LinkWithTransition from "@/components/LinkWithTransition";
import { ArticleResponse } from '@/models/ArticleResponse.model';
import { Link } from 'react-router-dom';

export interface ArticlePreviewProps {
  article: ArticleResponse;
  follow(article: ArticleResponse): void;
};

const ArticlePreview: React.FC<ArticlePreviewProps> = ({article, follow }) => {
  const [btnSeguir, setBtnSeguir] = useState({ disabled: false });

  const callFollow = (event: MouseEvent<HTMLButtonElement>): void => {
    setBtnSeguir({ disabled: true });
    follow(article);
  }

  return (
    <article id={article._id} className="article-item">
      <div className="image-wrap"
           style={{viewTransitionName: `article${article._id}`}}
      >
        <LinkWithTransition href={'/blog/article/' + article._id}>
          <img className="preview"
               src={ApiImage.getImageUrl(article.image)}
               alt="Article Image"
          />
        </LinkWithTransition>
      </div>
      <button className="btn-follow star-button" onClick={callFollow} disabled={btnSeguir.disabled}>
        <span className="star-icon"></span>
      </button>
      <h2>{article.title}</h2>
      <Dayjs className="date">{article.date}</Dayjs>
      <Link to={'/blog/article/' + article._id} className="btn">
        Leer más ...
      </Link>
    </article>
  );
}

export default ArticlePreview;