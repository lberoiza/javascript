<template>
  <article :id="article._id" class="article-item">
    <div class="image-wrap">
      <a :href="'/blog/article/' + article._id">
      <img :src="ApiImage.getImageUrl(article.image)" :alt="article.title" />
      </a>
    </div>
    <button class="btn-follow star-button" >
      <span class="star-icon"></span>
    </button>
    <h2>{{article.title}}</h2>
    <div class="date">{{article.date}}</div>
    <a :href="'/blog/article/' + article._id" class="btn">
    Leer más ...
    </a>
  </article>
</template>

<script setup lang="ts">
import ApiImage from "../api/ApiImage";
import { ArticleResponse } from "../api/ApiArticle";

type ArticlePreviewProps = {
  article: ArticleResponse
}

defineProps<ArticlePreviewProps>()

</script>