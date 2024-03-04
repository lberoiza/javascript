import React, { useState, MouseEvent } from "react";
import ApiImage from "@/api/ApiImage";
import Dayjs from "@/components/Dayjs";
import { ArticleResponse } from '@/models/ArticleResponse.model';
import { useNavigateWithTransitions } from "@/hooks/useNavigateWithTransitions";
import { useDispatch } from "react-redux";
import { setCurrentArticle } from "@/store/article/articles.actions";
import styles from './ArticlePreview.module.css';

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
    <article id={article._id} className={styles.article_preview_container}>
      <figure className={styles.article_preview_container__image_container}
              onClick={gotToArticlePage}
              style={{viewTransitionName: `article-image-${article._id}`}}
      >
        <img src={ApiImage.getImageUrl(article.image)} alt="Article Image" />
      </figure>
      <div className={styles.article_preview_container__card_info}>
        <Dayjs
          style={{viewTransitionName: `article-date-${article._id}`}}
        >
          {article.date}
        </Dayjs>
        <h2 style={{viewTransitionName: `article-title-${article._id}`}} >
          {article.title}
        </h2>
        <p>{article.content}</p>
        <div className={styles.article_preview_container__card_info__buttonbar}>
          <button className={styles.article_preview_container__card_info__star_button} onClick={callFollow} disabled={btnSeguir.disabled}>
            <span className={styles.star_icon}></span>
          </button>
          <a onClick={gotToArticlePage} className={styles.article_preview_container__card_info__read_more}>
            <span style={{viewTransitionName: `article-button-${article._id}`}}>Leer más ...</span>
          </a>
        </div>

      </div>

    </article>
  );
}

export default ArticlePreview;