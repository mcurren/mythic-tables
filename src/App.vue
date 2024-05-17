<script setup>
import SectionDisplay from '@/components/SectionDisplay.vue'
import RollDice from '@/components/RollDice.vue'
</script>

<template>
  <header>
    <h1>Mythic Tables</h1>
  </header>

  <RollDice />

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
  gap: 2rem;
  max-width: 100%;
}
</style>
