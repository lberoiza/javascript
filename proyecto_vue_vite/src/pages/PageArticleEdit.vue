<template>
  <PageContent>
    <Loading v-if="loading"></Loading>
    <div v-else>
      <Error v-if="article.hasErrors()" :errors="article.errorMessages"></Error>
      <div v-else class="article-container">
        <ArticleForm v-if="article.hasResponse()" :article="article.response!"></ArticleForm>
        <NoResults v-else></NoResults>
      </div>
    </div>
  </PageContent>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import ArticleForm from '../components/ArticleForm.vue';
import ApiArticle, { ArticleResponse } from '../api/ApiArticle';
import UseFetchData from '../classes/UseFetchData';
import Error from '../components/Error.vue';
import Loading from '../components/Loading.vue';
import NoResults from '../components/NoResults.vue';
import PageContent from "../components/PageContent.vue";


const articleId = useRoute().params.articleId as string;
const article = ref<UseFetchData<ArticleResponse>>(new UseFetchData<ArticleResponse>());
const loading = ref<boolean>(true);

const apiArticle = ApiArticle.getArticleById(articleId);

onMounted(() => {
  apiArticle.promise.then(wsResponse => {
    loading.value = false;
    article.value.setFetchData(wsResponse);
  });
});

onUnmounted(() => {
  if (apiArticle.abortController) {
    apiArticle.abortController.abort()
  }

});

</script>