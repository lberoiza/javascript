<template>
  <div class="page-content">
    <div class="slider">
      <Slider :title="sliderTitle" :showBigSlider="showBigSlider"></Slider>
    </div>

    <section class="content">
      <h2 v-if="hasSubheaderTitle" class="subheader">{{subheaderTitle}}</h2>
      <slot/>
    </section>
    <div class="sidebar">
      <Sidebar :showBoxNewArticle="showBoxNewArticle" :search-text="searchText" />
    </div>

  </div>
</template>


<script setup lang="ts">
import { computed, defineProps } from 'vue';
import Sidebar from "./Sidebar.vue";
import Slider from "./Slider.vue";

interface PageContentProps {
  sliderTitle?: string,
  subheaderTitle?: string,
  showBigSlider?: boolean,
  showBoxNewArticle?: boolean,
  searchText?: string
}

const props = withDefaults(defineProps<PageContentProps>(),
    {
      sliderTitle: '',
      subheaderTitle: '',
      searchText: '',
      showBigSlider: false,
      showBoxNewArticle: false
    }
);

const hasSubheaderTitle = computed(() => props.subheaderTitle?.length > 0);


</script>


<style scoped>
.page-content {
  grid-area: page-content;
  width: 100vw;
  position: relative;

  display: grid;

  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, auto);
  grid-template-areas:
    "slider "
    "content"
    "aside";
}

.page-content::before {
  position: absolute;
  top: 0;
  left:10%;
  content: '';
  height: 1px;
  width: 80%;
  background-color: var(--color-gray-light);
}

.slider {
  grid-area: slider;
  margin-bottom: 1rem;
}

.content {
  grid-area: content;
  width: 90%;
  margin: 0 auto;
}

.sidebar {
  grid-area: aside;
}

.page-content .subheader {
  font-size: 38px;
  border-bottom: 1px solid #444;
  padding-bottom: 10px;
  margin-bottom: 2rem;
}


@media (min-width: 1000px) {
  .page-content {
    grid-template-columns: 80% 20%;
    grid-template-rows: repeat(2, auto);
    grid-template-areas:
    "slider slider"
    "content aside";
  }
}



</style>