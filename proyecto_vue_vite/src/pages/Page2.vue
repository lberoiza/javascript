<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";

import Slider from '../components/Slider.vue';
import Sidebar from '../components/Sidebar.vue';
const route = useRoute();
const router = useRouter();

const msg = route.params.msg;

const goHome = () => {
  router.push('/home');
}

</script>


<template>
  <Slider title='TestPage 2'></Slider>
  <section id="content" class="page-2">
    <h2 class="subheader">Test Page 2</h2>
    <p v-if="msg">{{ msg }}</p>
    <button @click="goHome">Go back to home</button>
  </section>
  <Sidebar></Sidebar>
</template>