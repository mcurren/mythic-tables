<script setup>
import TableDisplay from '@/components/InspirationDisplay.vue'
import { inspirationTable as inspiration } from '@/stores/inspiration'
import { useSparkState } from '@/stores/sparkStore'
const state = useSparkState()
</script>

<template>
  <section id="inspiration" class="spark-tables">
    <h2 class="page-title">Inspiration</h2>
    <div class="spark-tables__content">
      <TableDisplay
        v-for="(table, index) in inspiration"
        :key="index"
        :table-data="table"
        section="inspiration"
      />
    </div>
    <button @click="state.changeState('inspiration')" class="reroll-all">re-roll all</button>
  </section>
</template>

<style scoped></style>
