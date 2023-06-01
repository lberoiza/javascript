<template>
  <aside id="sidebar">
    <SidebarArticleNew v-if="isBlog" />
    <SidebarSearchArticleForm></SidebarSearchArticleForm>
  </aside>
</template>

<script setup lang="ts">
import SidebarArticleNew from './SidebarArticleNew.vue';
import SidebarSearchArticleForm from './SidebarSearchArticleForm.vue';

type SidebarProps = {
  isBlog?: boolean
};

defineProps<SidebarProps>()
</script>