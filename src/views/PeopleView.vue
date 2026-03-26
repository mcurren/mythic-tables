<script setup>
import TableDisplay from '@/components/TableDisplay.vue'
import { peopleTables } from '@/stores/people'
import { useSparkState } from '@/stores/sparkStore'
const people = peopleTables
const state = useSparkState()
</script>

<template>
  <section id="people" class="spark-tables">
    <h2 class="page-title">People</h2>
    <div class="spark-tables__content">
      <TableDisplay
        v-for="(table, index) in people"
        :key="index"
        :table-data="table"
        section="people"
      />
    </div>
    <button @click="state.changeState('people')" class="reroll-all">re-roll all</button>
  </section>
</template>

<style scoped></style>
