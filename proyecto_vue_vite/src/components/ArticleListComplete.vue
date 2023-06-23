<template>
  <ArticleList :loading="loading" :articleList="articleList"></ArticleList>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import ArticleList from './ArticleList.vue';
import ApiArticle, { ArticleResponse } from '../api/ApiArticle';
import UseFetchData from '../classes/UseFetchData';


const articleList = ref<UseFetchData<ArticleResponse[]>>(new UseFetchData<ArticleResponse[]>());
const loading = ref<boolean>(true);
const { promise, abortController } = ApiArticle.getArticles();


onMounted(() => {
  promise.then((wsResult) => {
    articleList.value.setFetchData(wsResult);
    loading.value = false;
  });
});

onUnmounted(() => {
  abortController.abort();
})


</script>