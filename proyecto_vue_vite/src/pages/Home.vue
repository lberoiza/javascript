<template>
  <Slider isHome title='Bienvenido al master der ReactJS'></Slider>
  <section id="content" class="page-home">
    <h2 class="subheader">Últimos artículos</h2>
    <!-- LISTADO ULTIMOS ARTICULOS ARTICULOS -->
    <!-- <ArticleListLast></ArticleListLast> -->
  </section>
  <Sidebar></Sidebar>
</template>

<script setup lang="ts">
import Slider from '../components/Slider.vue';
import Sidebar from '../components/Sidebar.vue';
</script>