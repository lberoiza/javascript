<template>
  <Error v-if="articleList?.hasErrors()" :errors="articleList?.errorMessages"></Error>
  <Loading v-if="loading"></Loading>
  <div v-else id="article-container">
    <SelectedArticle v-if="selectedArticle" :title=selectedArticle></SelectedArticle>
    <ArticlePreview v-if="articleList?.hasResponse" v-for="article in articleList?.response" :key="article._id"
      :article="article" @setFavorite="setSelectedArticle"></ArticlePreview>
    <NoResults v-else></NoResults>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import ApiArticle, { ArticleResponse } from '../api/ApiArticle';
import UseFetchData from '../classes/UseFetchData';
import ArticlePreview from './ArticlePreview.vue';
import SelectedArticle from './SelectedArticle.vue';
import Loading from '../components/Loading.vue'
import NoResults from '../components/NoResults.vue'
import Error from '../components/Error.vue'

type ArticleListProps = {
  lastArticles?: boolean
}

const props = defineProps<ArticleListProps>();
const articleList = ref<UseFetchData<ArticleResponse[]>>();
const loading = ref<boolean>(true);
const selectedArticle = ref<string>('');
const { promise, abortController } = ApiArticle.getLastArticles(props.lastArticles == true);


onMounted(() => {
  promise.then((wsResult) => {
    articleList.value = new UseFetchData<ArticleResponse[]>().setFetchData(wsResult);
    loading.value = false;
  });
});

onUnmounted(() => {
  abortController.abort();
})


const setSelectedArticle = (article: ArticleResponse) => {
  selectedArticle.value = article.title;
}

</script>