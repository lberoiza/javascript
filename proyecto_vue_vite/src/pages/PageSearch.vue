<template>
  <Slider :title="'Search: ' + searchStr"></Slider>
  <section id="content" class="page-blog">
    <h2 class="subheader">List of Articles</h2>
    <ArticleList :loading="loading" :articleList="articleList"></ArticleList>
  </section>
  <Sidebar></Sidebar>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import UseFetchData from '../classes/UseFetchData';
import ApiArticle, { ArticleResponse } from '../api/ApiArticle';
import Slider from '../components/Slider.vue';
import Sidebar from '../components/Sidebar.vue';
import ArticleList from '../components/ArticleList.vue';


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



// import ArticleList from '../components/ArticleList.vue';
</script>