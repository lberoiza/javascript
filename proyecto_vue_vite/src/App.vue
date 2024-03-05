<script setup lang="ts">
import HeaderComponent from './components/HeaderComponent.vue';
import Menu from './components/Menu.vue';
import FooterComponent from './components/FooterComponent.vue';
</script>

<template>
  <div class="appContainer">
    <header>
      <HeaderComponent></HeaderComponent>
    </header>
    <nav>
      <Menu></Menu>
    </nav>
    <main>
      <router-view v-slot="{Component}">
        <transition name="fade">
          <component :is="Component"></component>
        </transition>
      </router-view>
    </main>
    <footer>
      <FooterComponent></FooterComponent>
    </footer>
  </div>


</template>

<style scoped>

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s ease-in-out;
}



.appContainer {
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 7rem 7rem auto 5rem;
  grid-auto-columns: auto;
  grid-template-areas:
  "header"
  "nav"
  "main"
  "footer";
}

header {
  grid-area: header;
}

nav {
  grid-area: nav;
}

main {
  grid-area: main;
}

footer {
  grid-area: footer;
}


@media (width > 1000px) {
  .appContainer {
    border-top: 7px solid var(--color-primary);
    grid-template-rows: 7rem auto 5rem;
    grid-auto-columns: repeat(2, auto);
    grid-template-areas:
      "header nav"
      "main   main"
      "footer footer";
  }
}





</style>


<!--"slider slider  slider"-->
<!--".      content ."-->
<!--".      aside   ."-->