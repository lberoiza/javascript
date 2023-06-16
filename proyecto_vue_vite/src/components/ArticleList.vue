<template>
  <Error v-if="articleList?.hasErrors()" :errors="articleList?.errorMessages"></Error>
  <Loading v-if="loading"></Loading>
  <div v-else id="article-container">
    <ArticlePreview v-if="articleList?.hasResponse" v-for="article in articleList?.response" :key="article._id" :article="article"></ArticlePreview>
    <NoResults v-else></NoResults>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import ApiArticle, { ArticleResponse } from '../api/ApiArticle';
import UseFetchData from '../classes/UseFetchData';
import ArticlePreview from './ArticlePreview.vue';
import Loading from '../components/Loading.vue'
import NoResults from '../components/NoResults.vue'
import Error from '../components/Error.vue'

type ArticleListProps = {
  lastArticles?: boolean
}

const props = defineProps<ArticleListProps>();
const articleList = ref<UseFetchData<ArticleResponse[]>>()
const loading = ref<boolean>(true)
const { promise, abortController } = ApiArticle.getLastArticles(props.lastArticles == true)


onMounted(() => {
  promise.then((wsResult) => {
    articleList.value = new UseFetchData<ArticleResponse[]>().setFetchData(wsResult);
    console.log(articleList)
    loading.value = false;
  });
});

onUnmounted(() => {
  abortController.abort();
  console.log("abortando peticion")
})


</script>