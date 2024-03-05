<template>
  <aside class="sidebar">
    <SidebarArticleNew v-if="showBoxNewArticle" />
    <SidebarSearchArticleForm :searchText="searchText"></SidebarSearchArticleForm>
  </aside>
</template>

<script setup lang="ts">
import SidebarArticleNew from './SidebarArticleNew.vue';
import SidebarSearchArticleForm from './SidebarSearchArticleForm.vue';

type SidebarProps = {
  showBoxNewArticle?: boolean,
  searchText?: string
};

defineProps<SidebarProps>()
</script>

<style scoped>
.sidebar {
  max-width: 16rem;

  display: flex;
  flex-flow: row wrap;
  gap: 10px;
  justify-content: center;
}


@media (width > 1000px) {
  .sidebar {
    flex-direction: column;
  }
}


</style>