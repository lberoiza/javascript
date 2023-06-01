<template>
  <div class="my-component">
    <p>Hello World</p>
    <p>{{ msg }}</p>
  </div>
</template>

<script setup lang="ts">
type MyComponentType = { msg: string }
defineProps<MyComponentType>()
</script>