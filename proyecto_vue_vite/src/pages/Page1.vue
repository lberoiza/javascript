<script setup lang="ts">
import Slider from '../components/Slider.vue';
import Sidebar from '../components/Sidebar.vue';
import MyComponent from '../components/MyComponent.vue';
import { ref, onBeforeMount, onMounted, onUnmounted } from 'vue';

const text = ref("Prop-Text from My Component");
console.log("Page 1 - setup");

// Metodos del Ciclo de vida
onMounted(() => {
  console.log("Page 1 - onMounted");
});

onBeforeMount(() => {
  console.log("Page 1 - onBeforeMount");
});

onUnmounted(() => {
  console.log("Page 1 - onUnmounted");
});


const click = () => {
  text.value = "The text has changed";
}


</script>


<template>
  <Slider title='TestPage 1'></Slider>
  <section id="content" class="page-1">
    <h2 class="subheader">Test Page 1</h2>
    <MyComponent :msg="text"></MyComponent>
    <button @click="click">Button</button>
  </section>
  <Sidebar></Sidebar>
</template>

