<script setup lang="ts">
import Slider from '../components/Slider.vue';
import Sidebar from '../components/Sidebar.vue';
import ArticleListComplete from '../components/ArticleListComplete.vue';
</script>


<template>
  <Slider title='Blog'></Slider>
  <section id="content" class="page-blog">
    <h2 class="subheader">List of Articles</h2>
    <ArticleListComplete></ArticleListComplete>
  </section>
  <Sidebar isBlog></Sidebar>
</template>



