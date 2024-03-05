<template>
    <div class="header">
      <!-- LOGO -->
      <div class="logo">
        <img src="../assets/images/vue.svg" alt="Logotipo" class="app-logo">
        <span id="brand">
            <strong>Vue</strong>JS
        </span>
        </div>

  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>

.header {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 1rem;
}

.logo {
  padding: 2rem ;
  font-size: 30px;
  display: flex;
  flex-flow: row nowrap;
  gap: 2rem;
  align-items: flex-end;
}


.logo img {
  height: 50px;
  animation: bell-swing 3s ease-in-out infinite;
}

@keyframes bell-swing {
  0% {
    transform: rotate(0deg);
  }

  20% {
    transform: rotate(20deg);
  }

  60% {
    transform: rotate(-20deg);
  }

  80% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(0deg);
  }
}

</style>