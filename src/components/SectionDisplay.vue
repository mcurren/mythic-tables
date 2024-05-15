<script setup>
import TableDisplay from '@/components/TableDisplay.vue'
import { natureTables } from '@/stores/nature'
import { civilisationTables } from '@/stores/civilisation'
import { peopleTables } from '@/stores/people'

const nature = natureTables
const civilisation = civilisationTables
const people = peopleTables
</script>

<template>
  <section id="nature">
    <h2>Nature</h2>
    <div>
      <TableDisplay v-for="(table, index) in nature" :key="index" :table-data="table" />
    </div>
  </section>
  <section id="civilisation">
    <h2>Civilisation</h2>
    <div>
      <TableDisplay v-for="(table, index) in civilisation" :key="index" :table-data="table" />
    </div>
  </section>
  <section id="people">
    <h2>People</h2>
    <div>
      <TableDisplay v-for="(table, index) in people" :key="index" :table-data="table" />
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
  display: grid;
  grid-template-columns: 100%;
  gap: 0.5rem;
  margin-block: 1rem;
}
@media (min-width: 650px) {
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
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
