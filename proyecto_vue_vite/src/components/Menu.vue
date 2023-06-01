<template>
  <nav id="menu">
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