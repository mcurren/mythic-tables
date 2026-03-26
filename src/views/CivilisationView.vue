<script setup>
import TableDisplay from '@/components/TableDisplay.vue'
import { useSparkState } from '@/stores/sparkStore'
import { civilisationTables } from '@/stores/civilisation'
const civilisation = civilisationTables
const state = useSparkState()
</script>

<template>
  <section id="civilisation" class="spark-tables">
    <h2 class="page-title">Civilisation</h2>
    <div class="spark-tables__content">
      <TableDisplay
        v-for="(table, index) in civilisation"
        :key="index"
        :table-data="table"
        section="civilisation"
      />
    </div>
    <button @click="state.changeState('civilisation')" class="reroll-all">re-roll all</button>
  </section>
</template>

<style scoped></style>
