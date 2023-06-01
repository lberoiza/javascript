<template>
  <div id="slider" :class="isHome ? 'slider-big' : 'slider-small'">
    <h1>{{ title }}</h1>
    <a v-if="isHome" href="/blog" class="btn-white">Ir al blog</a>
  </div>
</template>

<script setup lang="ts">

type SliderProps = {
  title: string,
  isHome?: boolean
};

defineProps<SliderProps>();

</script>