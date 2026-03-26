<script setup>
import TableDisplay from '@/components/TableDisplay.vue'
import { natureTables } from '@/stores/nature'
import { useSparkState } from '@/stores/sparkStore'
const nature = natureTables
const state = useSparkState()
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
    <button @click="state.changeState('nature')" class="reroll-all">re-roll all</button>
  </section>
</template>

<style scoped></style>
