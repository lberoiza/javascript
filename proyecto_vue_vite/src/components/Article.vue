<template>
  <article :id="props.article._id" class="article-item article-detail">
    <div class="image-wrap">
      <img :src="ApiImage.getImageUrl(props.article.image)" alt="Article Image" />
    </div>
    <div class="article-button-bar">
      <button @click="editArticle(props.article._id)" class="btn btn-warning">Editar</button>
      <button @click="deleteArticle(props.article._id)" class="btn btn-danger">Eliminar</button>
    </div>
    <h1 class="subheader">{{ props.article.title }}</h1>
    <Dayjs class="date" :dateString="props.article.date"></Dayjs>
    <div class="article-text">
      {{ props.article.content }}
    </div>
  </article>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import ApiArticle, { ArticleResponse } from '../api/ApiArticle';
import ApiImage from '../api/ApiImage';
import UseFetchData from '../classes/UseFetchData';
import { useRoute, useRouter } from "vue-router";
import Dayjs from './Dayjs.vue';

const route = useRoute();
const router = useRouter();
const articleId = route.params.articleId as string;


type ArticleProps = {
  article: ArticleResponse
}

const props = defineProps<ArticleProps>()

const editArticle = (articleId: string) => {
  router.push({name: 'pageArticleEdit', params: {articleId: articleId}})
}

const deleteArticle = (articleId: string) => {
  console.log(articleId);
}


const article = ref<UseFetchData<ArticleResponse>>(new UseFetchData<ArticleResponse>());
const loading = ref<boolean>(true);
const { promise, abortController } = ApiArticle.getArticleById(articleId);


onMounted(() => {
  promise.then((wsResult) => {
    article.value.setFetchData(wsResult);
    loading.value = false;
  });
});

onUnmounted(() => {
  abortController.abort();
})



</script>