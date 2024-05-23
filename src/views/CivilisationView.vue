<script setup>
import TableDisplay from '@/components/TableDisplay.vue'
import { civilisationTables } from '@/stores/civilisation'
const civilisation = civilisationTables
</script>

<template>
  <section id="civilisation" class="spark-tables">
    <h2 class="spark-tables__title">Civilisation</h2>
    <div class="spark-tables__content">
      <TableDisplay
        v-for="(table, index) in civilisation"
        :key="index"
        :table-data="table"
        section="civilisation"
      />
    </div>
  </section>
</template>

<style scoped></style>
