<template>
  <h2>Ooops!</h2>
  <div id="errors-container">
    <p v-for="error in errors"  :key="error">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
type ErrorComponentProps = {
  errors: string[]
}

defineProps<ErrorComponentProps>();

</script>