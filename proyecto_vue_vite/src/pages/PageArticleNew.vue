<template>
  <PageContent
    slider-title='Create new Article'>
    <ArticleForm></ArticleForm>
  </PageContent>



</template>

<script setup lang="ts">
import Slider from '../components/Slider.vue';
import Sidebar from '../components/Sidebar.vue';
import ArticleForm from '../components/ArticleForm.vue';
import Loading from "../components/Loading.vue";
import Error from "../components/Error.vue";
import NoResults from "../components/NoResults.vue";
import PageContent from "../components/PageContent.vue";
import Article from "../components/Article.vue";
</script>