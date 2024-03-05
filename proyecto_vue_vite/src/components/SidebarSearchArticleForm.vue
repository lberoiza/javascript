<template>
  <div id="search" class="sidebar-item">
    <h3>Search</h3>
    <p>Search for an article</p>
    <form @submit.prevent="searchArticleHandler">
      <input type="text" name="search" id="search-input-text" v-model="searchStr" ref="searchInputRef" />
      <button type="submit" value="Buscar" name="submit" id="search-btn-submit" class="btn">Search</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import {useRouter } from 'vue-router'

type SidebarSearchArticleFormProps = {
  searchText?: string
};

const props = defineProps<SidebarSearchArticleFormProps>();

const router = useRouter();
const searchStr = ref<string>(props.searchText ?? '');
const searchInputRef = ref<HTMLInputElement>();


onMounted(() => {
  if(searchStr.value.length > 0){
    searchInputRef.value?.select();
  }
});

const searchArticleHandler = () => {
  if(searchStr.value.trim().length > 0){
    router.push({name: 'redirect', params: {name: 'pageSearch', searchStr: searchStr.value}});
  }
}

</script>

<style scoped>
</style>