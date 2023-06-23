<template>
  <article :id="article._id" class="article-item">
    <div class="image-wrap">
      <a :href="'/blog/article/' + article._id">
        <img :src="ApiImage.getImageUrl(article.image)" :alt="article.title" />
      </a>
    </div>
    <button class="btn-follow star-button" @click="buttonFollowPressed" :disabled="buttonFollorPressed">
      <span class="star-icon"></span>
    </button>
    <h2>{{ article.title }}</h2>
    <Dayjs class="date" :dateString="article.date"></Dayjs>
    <a :href="'/blog/article/' + article._id" class="btn">
      Leer más ...
    </a>
  </article>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ApiImage from "../api/ApiImage";
import { ArticleResponse } from "../api/ApiArticle";
import Dayjs from "./Dayjs.vue";


const emit = defineEmits<{
  setFavorite: [article: ArticleResponse]
}>();

type ArticlePreviewProps = {
  article: ArticleResponse
}

const buttonFollorPressed = ref<boolean>(false);
const props = defineProps<ArticlePreviewProps>()


const buttonFollowPressed = () => {
  buttonFollorPressed.value = true;
  emit('setFavorite', props.article);
}

</script>