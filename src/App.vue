<script setup></script>

<template>
  <header>
    <h1>Mythic Sparks</h1>
    <nav>
      <RouterLink class="button" to="/">Inspiration</RouterLink>
      <RouterLink class="button" to="/nature">Nature</RouterLink>
      <RouterLink class="button" to="/civilisation">Civilisation</RouterLink>
      <RouterLink class="button" to="/people">People</RouterLink>
      <RouterLink class="button" to="/combat">Combat</RouterLink>
      <RouterLink class="button" to="/npc">Make an NPC</RouterLink>
    </nav>
  </header>
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
  gap: 1em 1.5em;
  padding-block-start: 1rem;
  text-transform: lowercase;
}
nav a {
  padding: 0.3625em 2em;
}
@media (min-width: 1200px) {
  nav {
    flex-direction: column;
    padding-block-start: 2rem;
  }
}
</style>
