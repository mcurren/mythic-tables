<script setup></script>

<template>
  <header>
    <h1>Mythic Sparks</h1>
    <nav>
      <RouterLink class="button" to="/">Random Page</RouterLink>
      <RouterLink class="button" to="/nature">Nature</RouterLink>
      <RouterLink class="button" to="/civilisation">Civilisation</RouterLink>
      <RouterLink class="button" to="/people">People</RouterLink>
      <RouterLink class="button" to="/combat">Combat</RouterLink>
    </nav>
  </header>

  <!-- <DiceRoll /> -->

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  padding-block: 2rem;
  text-align: center;
  max-width: 100%;
}
h1 {
  font-weight: 700;
  font-size: 3.4em;
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
  gap: 1.5rem 2.5rem;
  padding-block-start: 1rem;
  text-transform: lowercase;
}
nav a {
  padding: 0.5em 2em;
  /* border: 2px solid var(--color-highlight);
  border-radius: 6px;
  transition: all 300ms ease; */
}
/* nav a:hover,
nav a.router-link-active {
  background-color: var(--color-highlight);
  color: var(--color-background);
} */
@media (min-width: 1200px) {
  nav {
    flex-direction: column;
    padding-block-start: 2rem;
  }
}
/* @media (min-width: 1500px) {
  main {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
} */
</style>
