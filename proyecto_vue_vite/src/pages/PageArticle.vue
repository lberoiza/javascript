<template>
  <PageContent :show-box-new-article="true">
    <Loading v-if="loading"></Loading>
    <div v-else>
      <Error v-if="article.hasErrors()" :errors="article.errorMessages"></Error>
      <div v-else class="article-container">
        <ArticleDetails v-if="article.hasResponse()" :article="article.response!"></ArticleDetails>
        <NoResults v-else></NoResults>
      </div>
    </div>
  </PageContent>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import ApiArticle, { ArticleResponse } from '../api/ApiArticle';
import UseFetchData from '../classes/UseFetchData';
import { useRoute } from "vue-router";
import Loading from '../components/Loading.vue'
import NoResults from '../components/NoResults.vue'
import Error from '../components/Error.vue'
import ArticleDetails from '../components/ArticleDetails.vue'
import PageContent from "../components/PageContent.vue";


const route = useRoute();
const articleId = route.params.articleId as string;
const article = ref<UseFetchData<ArticleResponse>>(new UseFetchData<ArticleResponse>());
const loading = ref<boolean>(true);
const api = ApiArticle.getArticleById(articleId);


onMounted(() => {
  api.promise.then((wsResult) => {
    loading.value = false;
    article.value.setFetchData(wsResult);
  });
});

onUnmounted(() => {
  api.abortController.abort();
})

</script>