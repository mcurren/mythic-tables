<script setup>
import TableDisplay from '@/components/TableDisplay.vue'
import { peopleTables } from '@/stores/people'
const people = peopleTables
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
  </section>
</template>

<style scoped></style>
