<template>
  <div v-if="title" class="slider" :class="showBigSlider ? 'slider-big' : 'slider-small'">
    <h1>{{ title }}</h1>
    <router-link v-if="showBigSlider" to="/blog" class="btn-white">Go to Blog</router-link>
  </div>
</template>

<script setup lang="ts">

type SliderProps = {
  title: string,
  showBigSlider?: boolean
};

defineProps<SliderProps>();

</script>

<style scoped>
.slider {
  width: 100%;
  height: 350px;
  color: white;
  text-shadow: 0.2rem 0.2rem 5px #444;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  /* Fondo en Degradado */
  background: rgba(119, 194, 81, 1);
  background: -moz-radial-gradient(center, ellipse cover, rgba(119, 194, 81, 1) 0%, rgba(8, 145, 42, 1) 100%);
  background: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%, rgba(119, 194, 81, 1)), color-stop(100%, rgba(8, 145, 42, 1)));
  background: -webkit-radial-gradient(center, ellipse cover, rgba(119, 194, 81, 1) 0%, rgba(8, 145, 42, 1) 100%);
  background: -o-radial-gradient(center, ellipse cover, rgba(119, 194, 81, 1) 0%, rgba(8, 145, 42, 1) 100%);
  background: -ms-radial-gradient(center, ellipse cover, rgba(119, 194, 81, 1) 0%, rgba(8, 145, 42, 1) 100%);
  background: radial-gradient(ellipse at center, rgba(119, 194, 81, 1) 0%, rgba(8, 145, 42, 1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#77c251', endColorstr='#08912a', GradientType=1);
}

.slider h1 {
  text-align: center;
}

.slider.slider-small {
  height: 150px;
}
</style>