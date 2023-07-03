<template>
  <aside id="sidebar">
    <SidebarArticleNew v-if="isBlog" />
    <SidebarSearchArticleForm :searchText="searchText"></SidebarSearchArticleForm>
  </aside>
</template>

<script setup lang="ts">
import SidebarArticleNew from './SidebarArticleNew.vue';
import SidebarSearchArticleForm from './SidebarSearchArticleForm.vue';

type SidebarProps = {
  isBlog?: boolean,
  searchText?: string
};

defineProps<SidebarProps>()
</script>