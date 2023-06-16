<script setup lang="ts">
import Slider from '../components/Slider.vue';
import Sidebar from '../components/Sidebar.vue';
import ArticleList from '../components/ArticleList.vue';
</script>


<template>
  <Slider title='Blog'></Slider>
  <section id="content" class="page-blog">
    <h2 class="subheader">List of Articles</h2>
    <ArticleList></ArticleList>
  </section>
  <Sidebar isBlog></Sidebar>
</template>



