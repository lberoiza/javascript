<template>
  <article :id="article._id" class="article_preview_container">
    <figure class="article_preview_container__image_container">
      <router-link :to="'/blog/article/' + article._id">
        <img :src="ApiImage.getImageUrl(article.image)" :alt="article.title" />
      </router-link>
    </figure>
    <div class="article_preview_container__card_info">
      <Dayjs :dateString="article.date"></Dayjs>
      <h2>{{ article.title }}</h2>
      <p>{{ article.content }}</p>
      <div class="article_preview_container__card_info__buttonbar">
        <button class="article_preview_container__card_info__star_button" @click="buttonFollowPressed" :disabled="buttonFollorPressed">
          <span class="star_icon"></span>
        </button>
        <router-link :to="'/blog/article/' + article._id" class="article_preview_container__card_info__read_more">
          More Info ...
        </router-link>
      </div>
    </div>
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

<style scoped>
.article_preview_container {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: flex-start;
  gap: 0.4rem;

  border: 1px solid grey;
  border-radius: 0.5rem;
  overflow: hidden;

  width: 13vw;
  height: 13vw;

  min-width: 13rem;
  min-height: 13rem;

  box-shadow: var(--color-gray-light) 0.2rem 0.2rem 0.7rem 0;
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}

.article_preview_container:hover {
  transform: translateY(-0.5rem);
  box-shadow: var(--color-gray-light) 0.5rem 0.5rem 0.7rem 0.4rem;
}

.article_preview_container__image_container {
  width: 100%;
  height: 35%;
  overflow: hidden;
}

.article_preview_container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  cursor: pointer;
}

.article_preview_container__card_info {
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: space-around;
  padding: 0 0.5rem 0.5rem;
  width: 100%;
  height: 65%;
}

.article_preview_container__card_info time {
  display: block;
  width: 100%;
  text-align: right;
  color: var(--color-gray-light);
  font-style: italic;
}

.article_preview_container__card_info h2 {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 1.4rem;
}

.article_preview_container__card_info p {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 1rem;
  font-style: italic;
  padding: 0 0 0 0.5rem;
  color: var(--color-gray-light);
}

.article_preview_container__card_info__buttonbar {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.article_preview_container__card_info__star_button {
  position: relative;
  display: inline-block;
  padding: 15px 20px;
  color: var(--color-primary-darker);
  background-color: #ffffff;
  border: 1px solid currentColor;
  border-radius: 5px;
  cursor: pointer;
  transition: color 0.3s ease
}

.article_preview_container__card_info__star_button:hover {
  color: var(--color-primary);
}

.article_preview_container__card_info__read_more {
  background-color: var(--color-primary-darker);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-decoration: none;
}

.article_preview_container__card_info__read_more:hover {
  background-color: var(--color-primary);
}

.star_icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  background-color: currentColor;
  clip-path: polygon(50% 0%,
  64% 36%,
  100% 36%,
  70% 57%,
  82% 91%,
  50% 72%,
  18% 91%,
  30% 57%,
  0% 36%,
  36% 36%);
}

.article_preview_container__card_info__star_button[disabled] {
  color: lightgray;
  border-color: currentColor;

}
</style>