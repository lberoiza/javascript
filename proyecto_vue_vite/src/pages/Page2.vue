<script setup lang="ts">
import { useRoute } from "vue-router";

import Slider from '../components/Slider.vue';
import Sidebar from '../components/Sidebar.vue';
const route = useRoute();

const msg = route.params.msg;

</script>


<template>
  <Slider title='TestPage 2'></Slider>
  <section id="content" class="page-2">
    <h2 class="subheader">Test Page 2</h2>
    <p v-if="msg">{{ msg }}</p>
  </section>
  <Sidebar></Sidebar>
</template>