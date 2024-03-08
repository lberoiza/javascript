<template>
  <article :id="props.article._id" class="article-item article-detail">
    <div class="image-wrap">
      <img :src="ApiImage.getImageUrl(props.article.image)" alt="Article Image" />
    </div>
    <div class="article-button-bar">
      <button @click="editArticle(props.article._id)" class="btn btn-warning">Edit</button>
      <button @click="confirmDeleteArticle(props.article._id)" class="btn btn-danger">Delete</button>
    </div>
    <Dayjs class="date" :dateString="props.article.date"></Dayjs>
    <h1 class="subheader">{{ props.article.title }}</h1>
    <div class="article-text" v-html="contentAsHtml">

    </div>
  </article>
</template>

<script setup lang="ts">
import ApiArticle, { ArticleResponse } from '../api/ApiArticle';
import ApiImage from '../api/ApiImage';
import { useRouter } from "vue-router";
import Dayjs from './Dayjs.vue';
import Alert from '../classes/Alert';
import { computed } from "vue";

const router = useRouter();

type ArticleProps = {
  article: ArticleResponse
}

const props = defineProps<ArticleProps>()

const contentAsHtml = computed(() => {
  return props.article.content.replace(/\n/g, '<br/>');
})


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

<style scoped>

.article-item {
  width: 100%;
  border-bottom: 1px solid var(--color-primary-darker);
  text-align: left;
  display: flex;
  flex-flow:  column nowrap;
  gap: 1rem;
}

.article-item .subheader {
  font-size: 38px;
  border-bottom: 1px solid #444;
  padding-bottom: 10px;
  margin-bottom: 2rem;
}

.article-item  time {
  text-align: right;
}

.article-item .image-wrap {
  width: 130px;
  height: 130px;
  overflow: hidden;
  float: left;
  margin-right: 15px;
  border-radius: 0.3rem;
}

.article-item .image-wrap a,
.article-item .image-wrap img {
  height: 100%;
  text-align: center;
}

.article-item h2 {
  display: block;
  width: 100%;
  padding: 0px;
  margin: 0px;
  margin-bottom: 7px;
}

.article-item .date {
  display: block;
  width: 100%;
  color: rgb(122, 122, 122);
}

.article-item a {
  display: block;
  text-decoration: none;
}

.article-item a.btn {
  text-transform: none;
  margin-top: 10px;
  max-width: 160px;
  padding: 10px;
  height: 20px;
  float: left;
}


.article-item.article-detail {
  border-bottom: none;
}

.article-item.article-detail .image-wrap {
  float: none;
  width: 100%;
  height: 300px;
}

.article-item.article-detail .image-wrap img {
  width: 100%;
  height: auto;
  float: none
}

.article-item.article-detail .article-button-bar {
  margin-top: 10px;
  /* display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
}

.article-item.article-detail .subheader {
  border: none;
  margin-bottom: 5px;
}

</style>