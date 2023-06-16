<script setup lang="ts">
import Slider from '../components/Slider.vue';
import Sidebar from '../components/Sidebar.vue';
import ArticleList from '../components/ArticleList.vue'
</script>


<template>
  <Slider isHome title='Welcome to the Blog with VueJs'></Slider>
  <section id="content" class="page-home">
    <h2 class="subheader">Last Articles</h2>
    <ArticleList :lastArticles="true"></ArticleList>
  </section>
  <Sidebar></Sidebar>
</template>

