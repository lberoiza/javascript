<template>
  <div class="page-content">
    <div class="slider">
      <Slider :title="sliderTitle" :showBigSlider="showBigSlider"></Slider>
    </div>

    <section class="content">
      <h2 class="subheader">{{subheaderTitle}}</h2>
      <slot/>
    </section>
    <div class="sidebar">
      <Sidebar :showBoxNewArticle="showBoxNewArticle" :search-text="searchText" />
    </div>

  </div>
</template>


<script setup lang="ts">
import { defineProps } from 'vue';
import Sidebar from "./Sidebar.vue";
import Slider from "./Slider.vue";

interface PageContentProps {
  sliderTitle: string,
  subheaderTitle: string,
  showBigSlider: boolean,
  showBoxNewArticle: boolean,
  searchText: string
}

withDefaults(defineProps<PageContentProps>(),
    {
      sliderTitle: '',
      subheaderTitle: '',
      searchText: '',
      showBigSlider: false,
      showBoxNewArticle: false
    }
);


</script>


<style scoped>
.page-content {
  grid-area: page-content;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, auto);
  grid-template-areas:
    "slider "
    "content"
    "aside";
}

.slider {
  grid-area: slider;
  margin-bottom: 1rem;
}

.content {
  grid-area: content;
  width: 90%;
  padding: 1rem 0;
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