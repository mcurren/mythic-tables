<script setup>
import TableDisplay from '@/components/TableDisplay.vue'
import { natureTables } from '@/stores/nature'
const nature = natureTables
</script>

<template>
  <section id="nature" class="spark-tables">
    <h2 class="page-title">Nature</h2>
    <div class="spark-tables__content">
      <TableDisplay
        v-for="(table, index) in nature"
        :key="index"
        :table-data="table"
        section="nature"
      />
    </div>
  </section>
</template>

<style scoped></style>
