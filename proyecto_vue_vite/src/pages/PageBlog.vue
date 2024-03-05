<script setup lang="ts">
import ArticleListComplete from '../components/ArticleListComplete.vue';
import PageContent from "../components/PageContent.vue";
</script>


<template>
  <PageContent
    slider-title='Blog'
    subheader-title="List of Articles"
    :show-box-new-article="true"
  >
    <ArticleListComplete></ArticleListComplete>
  </PageContent>
</template>



