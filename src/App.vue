<script setup>
import SectionDisplay from '@/components/SectionDisplay.vue'
import DiceRoll from '@/components/DiceRoll.vue'
</script>

<template>
  <header>
    <h1>Mythic Tables</h1>
  </header>

  <!-- <DiceRoll /> -->

  <main>
    <SectionDisplay />
  </main>
</template>

<style scoped>
header {
  padding-block: 2rem;
  text-align: center;
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
}

@media (min-width: 1500px) {
  main {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
