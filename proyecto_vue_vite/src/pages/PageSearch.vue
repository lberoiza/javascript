<template>
  <PageContent
      :slider-title="'Search: ' + searchStr"
      :search-text="searchStr"
  >
    <h2 class="subheader">List of Articles</h2>
    <ArticleList :loading="loading" :articleList="articleList"></ArticleList>
  </PageContent>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import UseFetchData from '../classes/UseFetchData';
import ApiArticle, { ArticleResponse } from '../api/ApiArticle';
import ArticleList from '../components/ArticleList.vue';
import PageContent from "../components/PageContent.vue";


const route = useRoute();
const searchStr = route.params.searchStr as string;
const articleList = ref<UseFetchData<ArticleResponse[]>>(new UseFetchData<ArticleResponse[]>());
const loading = ref<boolean>(true);

const { promise, abortController } = ApiArticle.getArticlesBySearch(searchStr);


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