<script setup lang="ts">
import ArticleListLast from '../components/ArticleListLast.vue'
import PageContent from "../components/PageContent.vue";
</script>


<template>
  <PageContent
      slider-title='Welcome to the Blog with VueJs'
      subheader-title="Last published Articles"
      :show-big-slider="true"
  >
    <ArticleListLast></ArticleListLast>
  </PageContent>
</template>

