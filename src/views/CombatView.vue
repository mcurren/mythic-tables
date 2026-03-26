<script setup>
import TableDisplay from '@/components/TableDisplay.vue'
import { combatTables } from '@/stores/combat'
import { useSparkState } from '@/stores/sparkStore'
const combat = combatTables
const state = useSparkState()
</script>

<template>
  <section id="combat" class="spark-tables">
    <h2 class="page-title">Combat</h2>
    <div class="spark-tables__content">
      <TableDisplay
        v-for="(table, index) in combat"
        :key="index"
        :table-data="table"
        section="combat"
      />
    </div>
    <button @click="state.changeState('combat')" class="reroll-all">re-roll all</button>
  </section>
</template>

<style scoped></style>
