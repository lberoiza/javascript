<script setup lang="ts">
import Slider from '../components/Slider.vue';
import Sidebar from '../components/Sidebar.vue';
import MyComponent from '../components/MyComponent.vue';
import { ref, onBeforeMount, onMounted, onUnmounted, computed } from 'vue';

const text = ref<string>("Prop-Text from My Component");
const buttonClicked = ref<string>();
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


const buttonClickedFunction = (butonName: string) => {
  buttonClicked.value = butonName;
}

const click = () => {
  text.value = "The text has changed from Parent component";
};


const computedValue = computed(() => {
  return "<p class='font-green'>To show this text as html-code must be used v-html as Tag on the component</p>"
});


</script>


<template>
  <Slider title='TestPage 1'></Slider>
  <section id="content" class="page-1">
    <h2 class="subheader">Test Page 1</h2>
    <h4 v-if="buttonClicked">Button Clicked: {{ buttonClicked }}</h4>
    <MyComponent :msg="text" @buttonHandler="buttonClickedFunction" ></MyComponent>
    <br>
    <span>Click to change the text of MyComponent from Parent </span>
    <button @click="click">Change Text</button>
    <div>
      <p>Print a computed value:</p>
      {{ computedValue }}
      <div v-html="computedValue"></div>
    </div>
  </section>
  <Sidebar></Sidebar>
</template>

