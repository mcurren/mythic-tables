<script setup>
import TableRoll from '@/components/TableRoll.vue'
const props = defineProps({
  tableData: {
    type: Object,
    required: true
  },
  section: {
    type: String,
    required: true
  }
})
const tableId = props.tableData.label.toLowerCase()
</script>

<template>
  <article :id="tableId">
    <h3>{{ props.tableData.label }}</h3>
    <div class="columns">
      <div class="columns__item" v-for="(column, index) in props.tableData.columns" :key="index">
        <h4>{{ column.label }}</h4>
        <TableRoll
          :items="column.items"
          :section="props.section"
          :table="props.tableData.name"
          :column="column.name"
        />
      </div>
    </div>
  </article>
</template>

<style scoped>
article {
  text-align: center;
  padding: 0.25em;
  border: 1px solid var(--color-border);
}
h3 {
  font-size: 1em;
  font-weight: 600;
  text-transform: uppercase;
  margin-block-end: 0.5vw;
  background-color: var(--color-background-soft);
  padding: 0.25em;
}
h4 {
  font-size: 0.95em;
  font-weight: 500;
  text-transform: lowercase;
  margin-block-end: 0.5vw;
  opacity: 0.9;
}
.columns {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  margin-block-end: 0.5vw;
}
.columns__item {
  padding: 0.5vw;
}
</style>
