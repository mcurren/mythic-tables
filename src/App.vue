<script setup>
import router from './router'
const navItems = router.getRoutes().map((route) => ({ name: route.name, path: route.path }))
</script>

<template>
  <header>
    <h1><span>Mythic</span> Sparks</h1>
    <nav>
      <RouterLink
        class="button"
        v-for="item in navItems"
        :class="`nav-item nav-item--${item.name}`"
        :key="item.path"
        :to="item.path"
        >{{ item.name }}</RouterLink
      >
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
  <footer>
    <p>
      an independent tool for running Mythic Bastionland ©<a
        href="https://bastionlandpress.com/"
        target="_blank"
        rel="noopener"
        >Bastionland Press</a
      >
      | built by <a href="https://curren.me/labs" target="_blank" rel="noopener">michaelopolis</a>
    </p>
  </footer>
</template>

<style scoped>
header {
  text-align: center;
  max-width: 100%;
}
@media (max-width: 1199px) {
  header {
    padding-block-end: 2rem;
  }
}
h1 {
  font-weight: 400;
  font-size: 3.75em;
}
@media (min-width: 650px) {
  h1 {
    font-size: 5em;
  }
}
h1 span {
  display: block;
  text-transform: lowercase;
  letter-spacing: 0.35em;
  font-size: 0.5em;
}
h1 span:before {
  content: '\00A0';
  display: inline-block;
  /* width: 0.35em; */
}
main {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.25rem;
  max-width: 100%;
  width: 100%;
}
nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75em 0.5em;
  padding-block-start: 2rem;
  text-transform: lowercase;
}
nav a {
  padding: 0.25em 1em;
}
@media (max-width: 1199px) {
  nav {
    max-width: 600px;
  }
}
@media (min-width: 1200px) {
  nav {
    flex-direction: column;
    padding-block-start: 2rem;
  }
}
footer {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8em;
  text-align: center;
  padding: 3rem 2rem 0;
}
</style>
