<template>
  <Error v-if="articleList?.hasErrors()" :errors="props.articleList?.errorMessages"></Error>
  <Loading v-if="loading"></Loading>
  <div v-else id="article-container">
    <SelectedArticle v-if="selectedArticle" :title=selectedArticle></SelectedArticle>
    <ArticlePreview v-if="props.articleList?.hasResponse()" v-for="article in articleList?.response" :key="article._id"
      :article="article" @setFavorite="setSelectedArticle"></ArticlePreview>
    <NoResults v-else></NoResults>
  </div>
</template>

<script setup lang="ts">
import { ArticleResponse } from '../api/ApiArticle';
import UseFetchData from '../classes/UseFetchData';
import ArticlePreview from './ArticlePreview.vue';
import SelectedArticle from './SelectedArticle.vue';
import Loading from '../components/Loading.vue'
import NoResults from '../components/NoResults.vue'
import Error from '../components/Error.vue'
import { ref } from 'vue';


type ArticleListProps = {
  loading: boolean,
  articleList: UseFetchData<ArticleResponse[]>
}

const props = defineProps<ArticleListProps>();
const selectedArticle = ref<string>('');


const setSelectedArticle = (article: ArticleResponse) => {
  selectedArticle.value = article.title;
}

</script>