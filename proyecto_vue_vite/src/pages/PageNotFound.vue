<script setup lang="ts">
import { useRoute } from 'vue-router';
import Slider from '../components/Slider.vue';
import Sidebar from '../components/Sidebar.vue';
import ArticleListComplete from "../components/ArticleListComplete.vue";
import PageContent from "../components/PageContent.vue";

const path = useRoute().params.pathMatch;
</script>


<template>
  <PageContent slider-title="Page not found">
    <h1 class="error">The page doesn't exist.</h1>
    <p class="error">The url "/{{ (path as String[]).join('/') }}" is not defined.</p>
  </PageContent>

</template>

