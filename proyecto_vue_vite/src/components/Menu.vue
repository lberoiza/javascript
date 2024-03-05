<template>
  <nav class="menu">
    <ul>
      <li>
        <router-link to="/" active-class="navlink_active">Home</router-link>
      </li>
      <li>
        <router-link to="/blog" active-class="navlink_active">Blog</router-link>
      </li>
      <li>
        <router-link to="/form" active-class="navlink_active">Form</router-link>
      </li>
      <li>
        <router-link to="/page1" active-class="navlink_active">Page 1</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'pag', params: { msg: 'parametro por url desde el menu' } }"
          active-class="navlink_active">Page 2</router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.menu {
  font-size: 18px;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 0.7rem;
}


.menu li {
  display: inline;
  list-style: none;
  height: 46px;
  margin-left: 15px;
  margin-right: 15px;

}

.menu a {
  text-decoration: none;
  color: #444;
  transition: 300ms all;
}

.menu a:hover {
  color: var(--color-primary-darker);
}

.menu a.navlink_active {
  position: relative;
  color: var(--color-primary-darker);
  font-weight: bold;
}

.menu a.navlink_active::after {
  position: absolute;
  content: '';
  height: 2px;
  width: 100%;
  bottom: -2px;
  left: 0;
  background: var(--color-primary-darker);
  box-shadow: 0 2px 5px var(--color-primary-darker);
}

</style>