<template>
  <h1>redireccionando</h1>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import { RouteParams, useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const extractParams = (allParams: RouteParams) => {
  const { name, ...params } = allParams;
  return { name: name as string, params: params };
};

onMounted(() => {
  const props = extractParams(route.params);
  router.push({name: props.name, params: props.params});
});
</script>