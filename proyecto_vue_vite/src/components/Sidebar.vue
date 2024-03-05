<template>
  <aside class="sidebar">
    <SidebarArticleNew v-if="showBoxNewArticle"/>
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
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
  justify-content: space-evenly;
  align-items: flex-start;

}

.sidebar::before {
  content: '';
  height: 1px;
  width: 90%;
  background-color: var(--color-gray-light);
  margin-bottom: 1rem;
}



@media (width > 1000px) {
  .sidebar {
    max-width: 16rem;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
  }

  .sidebar::before {
    content: none;
  }

}


</style>