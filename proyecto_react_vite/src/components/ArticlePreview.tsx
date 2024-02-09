import React, { useState, MouseEvent } from "react";
import ApiImage from "@/api/ApiImage";
import Dayjs from "@/components/Dayjs";
import { ArticleResponse } from '@/models/ArticleResponse.model';
import { Link } from 'react-router-dom';
import { useNavigateWithTransitions } from "@/hooks/useNavigateWithTransitions";
import { useDispatch } from "react-redux";
import { setCurrentArticle } from "@/store/article/articles.actions";

export interface ArticlePreviewProps {
  article: ArticleResponse;

  follow(article: ArticleResponse): void;
};

const ArticlePreview: React.FC<ArticlePreviewProps> = ({article, follow}) => {
  const navigate = useNavigateWithTransitions();
  const dispatch = useDispatch();

  const [btnSeguir, setBtnSeguir] = useState({disabled: false});

  const callFollow = (event: MouseEvent<HTMLButtonElement>): void => {
    setBtnSeguir({disabled: true});
    follow(article);
  }

  const gotToArticlePage = () => {
    dispatch(setCurrentArticle(article));
    navigate('/blog/article/' + article._id);
  }

  return (
    <article id={article._id} className="article-item">
      <div className="image-wrap"
           onClick={gotToArticlePage}
           style={{viewTransitionName: `article${article._id}`}}
      >
        <img className="preview"
             src={ApiImage.getImageUrl(article.image)}
             alt="Article Image"
        />
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