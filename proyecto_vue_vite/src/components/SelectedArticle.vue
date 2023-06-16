<template>
  <div class="selected-article">
    <span>You have selected the article</span>
    <span class="article-title">"{{ title }}"</span>
  </div>
</template>

<script setup lang="ts">

type SelectedArticleProps = {
  title: string
}

defineProps<SelectedArticleProps>()
</script>

<style>
.selected-article {

  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  color:aliceblue;
  background-color: var(--color-primary-darker);
  border-radius: 3px;
  font-size: 1.3rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
}

.selected-article .article-title {
  font-weight: bold;
}
</style>