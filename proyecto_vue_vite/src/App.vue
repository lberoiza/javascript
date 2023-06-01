<script setup lang="ts">
import HeaderComponent from './components/HeaderComponent.vue';
import Menu from './components/Menu.vue';
import FooterComponent from './components/FooterComponent.vue';
</script>

<template>
  <HeaderComponent></HeaderComponent>
  <Menu></Menu>
  <router-view></router-view>
  <FooterComponent></FooterComponent>
</template>

<style>
/*@import url('./assets/css/style.css');*/
</style>
