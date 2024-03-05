<template>
  <Loading v-if="loading"></Loading>
  <div v-else>
    <SelectedArticle v-if="selectedArticle" :title=selectedArticle></SelectedArticle>
    <Error v-if="articleList?.hasErrors()" :errors="props.articleList?.errorMessages!"></Error>
    <div v-else class="article-container">
      <ArticlePreview v-if="props.articleList?.hasResponse()" v-for="article in articleList?.response" :key="article._id"
        :article="article" @setFavorite="setSelectedArticle"></ArticlePreview>
      <NoResults v-else></NoResults>
    </div>
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

<style scoped>
.article-container {
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
}

</style>