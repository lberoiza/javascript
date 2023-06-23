<template>
  <div id="search" class="sidebar-item">
    <h3>Search</h3>
    <p>Search for an article</p>
    <form @submit.prevent="searchArticleHandler">
      <input type="text" name="search" id="search-input-text" v-model="searchStr" />
      <button type="submit" value="Buscar" name="submit" id="search-btn-submit" class="btn">Search</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {useRouter } from 'vue-router'

const router = useRouter();
const searchStr = ref<string>('');

const searchArticleHandler = () => {
  if(searchStr.value.trim().length > 0){
    router.push({name: 'redirect', params: {name: 'searchPage', searchStr: searchStr.value, car1: 'test'}});
  }
}

</script>