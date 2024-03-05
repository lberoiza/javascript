<script setup lang="ts">
import Slider from '../components/Slider.vue';
import Sidebar from '../components/Sidebar.vue';
import ArticleListLast from '../components/ArticleListLast.vue'
</script>


<template>
  <Slider isHome title='Welcome to the Blog with VueJs'></Slider>
  <section id="content" class="page-home">
    <h2 class="subheader">Last published Articles</h2>
    <ArticleListLast></ArticleListLast>
  </section>
  <Sidebar></Sidebar>
</template>

