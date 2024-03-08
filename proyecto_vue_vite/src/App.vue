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
        <transition
            name="fade"
        >
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


/*Clase que se aplica mientras dura la transicion de entrada*/
.fade-enter-active {
  animation: slideIn 1s ease-in-out;
}

/*Clase que se aplica mientras dura la transicion de salida*/
.fade-leave-active {
  animation: slideOut 1s ease-in-out;
}

/*Clase que se aplica al primer frame del elemento que entra*/
.fade-enter-from {
}

/*Clase que se aplica al ultimo frame del elemento que sale*/
.fade-leave-to {
}


@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slideOut {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
    opacity: 0;
  }
}


.appContainer {
  width: 100%;
  min-width: 420px;
  margin: 0 auto;
  min-height: 100vh;
  overflow: hidden;

  display: grid;
  align-items: start;
  grid-template-rows: 6rem 2rem auto 5rem;

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
  height: 100%;
}

main {
  grid-area: main;
  display: grid;
  align-items: start;
}

footer {
  grid-area: footer;
}


@media (width > 1000px) {
  .appContainer {
    border-top: 7px solid var(--color-primary);
    grid-template-rows: 7rem 1fr 5rem;
    grid-auto-columns: repeat(2, auto);
    grid-template-areas:
      "header nav"
      "main   main"
      "footer footer";
  }
}


</style>
