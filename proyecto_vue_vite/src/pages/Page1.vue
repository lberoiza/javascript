<script setup lang="ts">
import Slider from '../components/Slider.vue';
import Sidebar from '../components/Sidebar.vue';
import MyComponent from '../components/MyComponent.vue';
import { ref, onBeforeMount, onMounted, onUnmounted, computed } from 'vue';

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
};


const computedValue = computed(() => {
  return "<p class='font-green'>To show this text as html-code must be used v-html as Tag on the component</p>"
});


</script>


<template>
  <Slider title='TestPage 1'></Slider>
  <section id="content" class="page-1">
    <h2 class="subheader">Test Page 1</h2>
    <MyComponent :msg="text"></MyComponent>
    <button @click="click">Change Text</button>
    <div>
      <p>Print a computed value:</p>
      {{ computedValue }}
      <div v-html="computedValue"></div>
    </div>
  </section>
  <Sidebar></Sidebar>
</template>

