<template>
  <article :id="props.article._id" class="article-item article-detail">
    <div class="image-wrap">
      <img :src="ApiImage.getImageUrl(props.article.image)" alt="Article Image" />
    </div>
    <div class="article-button-bar">
      <button @click="editArticle(props.article._id)" class="btn btn-warning">Edit</button>
      <button @click="confirmDeleteArticle(props.article._id)" class="btn btn-danger">Delete</button>
    </div>
    <h1 class="subheader">{{ props.article.title }}</h1>
    <Dayjs class="date" :dateString="props.article.date"></Dayjs>
    <div class="article-text">
      {{ props.article.content }}
    </div>
  </article>
</template>

<script setup lang="ts">
import ApiArticle, { ArticleResponse } from '../api/ApiArticle';
import ApiImage from '../api/ApiImage';
import { useRouter } from "vue-router";
import Dayjs from './Dayjs.vue';
import Alert from '../classes/Alert';

const router = useRouter();

type ArticleProps = {
  article: ArticleResponse
}

const props = defineProps<ArticleProps>()

const editArticle = (articleId: string) => {
  router.push({name: 'pageArticleEdit', params: {articleId: articleId}})
}


function deleteArticle(articleId: string): void {
  try {
    ApiArticle.deleteArticle(articleId, (wsResult) => {
      const text = `The Article: "${wsResult.response?.title}" was successfully deleted.`;
      router.push({name: 'pageBlog'});
      Alert.showSuccess(text);
    });
  } catch (error) {
    const text = `The Article could not be eliminated`;
    Alert.showError(text);
  }
}


const confirmDeleteArticle = (articleId: string) => {
const title = 'The deletion is permanent!'
const message= 'Are you sure, that you want to delete the Article?';
Alert.showConfirmDialog(message, title)
  .then((willDelete) => {
    if (willDelete) {
      deleteArticle(articleId);
    }
  });
}

</script>