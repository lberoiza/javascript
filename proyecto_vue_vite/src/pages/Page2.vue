<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";

import { ref } from "vue";
import PageContent from "../components/PageContent.vue";

const route = useRoute();
const router = useRouter();

const msg = route.params.msg;
type Page2State = {
  valor1: string
};

const testText = ref<Page2State>(
    {
      valor1: ''
    });
;

const goHome = () => {
  router.push('/home');
}

</script>


<template>
  <PageContent slider-title='TestPage 2'>
    <h2 class="subheader">Test Page 2</h2>
    <p v-if="msg">{{ msg }}</p>
    <input type="text" name="text-test" id="text-test" v-model="testText.valor1">
    <p class="show-text">The text in the input is: {{ testText.valor1 }}</p>
    <ol v-if="testText.valor1.length > 0">
      <li v-for="elemento in testText.valor1.split(',')"
          :key="elemento"
          :class="{
          'font-red': elemento.length >= 10,
          'font-green': elemento.length < 10

      }">{{ elemento }}
      </li>
    </ol>
    <button @click="goHome">Go back to home</button>
  </PageContent>
</template>