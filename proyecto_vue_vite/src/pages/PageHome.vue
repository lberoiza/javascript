<script setup lang="ts">
import Slider from '../components/Slider.vue';
import Sidebar from '../components/Sidebar.vue';
</script>


<template>
  <Slider isHome title='Welcome to the Blog with VueJs'></Slider>
  <section id="content" class="page-home">
    <h2 class="subheader">Last Articles</h2>
    <!-- LISTADO ULTIMOS ARTICULOS ARTICULOS -->
    <!-- <ArticleListLast></ArticleListLast> -->
  </section>
  <Sidebar></Sidebar>
</template>

