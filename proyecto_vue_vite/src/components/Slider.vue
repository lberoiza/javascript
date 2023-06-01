<template>
  <div id="slider" :class="isHome ? 'slider-big' : 'slider-small'">
    <h1>{{ title }}</h1>
    <router-link v-if="isHome" to="/blog" class="btn-white">Go to Blog</router-link>
  </div>
</template>

<script setup lang="ts">

type SliderProps = {
  title: string,
  isHome?: boolean
};

defineProps<SliderProps>();

</script>