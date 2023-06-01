<script setup lang="ts">
import { useRoute } from 'vue-router';
import Slider from '../components/Slider.vue';
import Sidebar from '../components/Sidebar.vue';
const path = useRoute().params.pathMatch;
</script>


<template>
  <Slider title='Page not found'></Slider>
  <section id="content" class="page-notfound">
    <h1 class="error">The page doesn't exist.</h1>
    <p class="error">The url "/{{ (path as String[]).join('/') }}" is not defined.</p>
  </section>
  <Sidebar></Sidebar>
</template>

