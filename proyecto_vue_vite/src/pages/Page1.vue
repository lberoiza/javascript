<script setup lang="ts">
import Slider from '../components/Slider.vue';
import Sidebar from '../components/Sidebar.vue';
import MyComponent from '../components/MyComponent.vue';
</script>


<template>
  <Slider title='TestPage 1'></Slider>
  <section id="content" class="page-1">
    <h2 class="subheader">Test Page 1</h2>
    <MyComponent msg="Prop-Text from My Component"></MyComponent>
  </section>
  <Sidebar></Sidebar>
</template>

