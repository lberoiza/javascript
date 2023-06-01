<template>
  <section id="content" class="page-home">
    <h2 class="subheader">My Component</h2>
    <div class="my-component">
      <p>Hello World</p>
      <p>{{ msg }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
type MyComponentType = { msg: string }
defineProps<MyComponentType>()
</script>