<script setup>
import DiceRoll from '@/components/DiceRoll.vue'
</script>

<template>
  <section id="dice">
    <h2>Roll Dice</h2>
    <div>
      <DiceRoll />
    </div>
  </section>
</template>

<style scoped>
section {
  width: 100%;
}
h2 {
  font-size: 1.5em;
  font-weight: 700;
  text-align: center;
  background-color: var(--color-background-mute);
  padding: 0.5rem;
}
div {
  /* display: grid;
  grid-template-columns: 100%;
  gap: 0.5rem; */
  margin-block-start: 1rem;
}
/* @media (min-width: 650px) {
  section {
    width: auto;
    flex: 1;
  }
}
@media (min-width: 900px) {
  section {
    flex: unset;
  }
  div {
    width: 100%;
  }
} */
</style>
