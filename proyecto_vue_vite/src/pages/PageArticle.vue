<template>
  <section id="content" class="page-blog">
    <Loading v-if="loading"></Loading>
    <div v-else>
      <Error v-if="article.hasErrors()" :errors="article.errorMessages"></Error>
      <div v-else class="article-container">
        <Article v-if="article.hasResponse()" :article="article.response!"></Article>
        <NoResults v-else></NoResults>
      </div>
    </div>
  </section>
  <Sidebar isBlog></Sidebar>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import ApiArticle, { ArticleResponse } from '../api/ApiArticle';
import UseFetchData from '../classes/UseFetchData';
import { useRoute } from "vue-router";
import Sidebar from '../components/Sidebar.vue';
import Loading from '../components/Loading.vue'
import NoResults from '../components/NoResults.vue'
import Error from '../components/Error.vue'
import Article from '../components/Article.vue'


const route = useRoute();
const articleId = route.params.articleId as string;
const article = ref<UseFetchData<ArticleResponse>>(new UseFetchData<ArticleResponse>());
const loading = ref<boolean>(true);
const { promise, abortController } = ApiArticle.getArticleById(articleId);


onMounted(() => {
  promise.then((wsResult) => {
    article.value.setFetchData(wsResult);
    loading.value = false;
  });
});

onUnmounted(() => {
  abortController.abort();
})

</script>