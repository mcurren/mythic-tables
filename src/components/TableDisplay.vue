<script setup>
import { ref } from 'vue'
import { useSparkStore } from '@/stores/sparkStore'
import TableRoll from '@/components/TableRoll.vue'
const store = useSparkStore()
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
let tableClass = ref('')
function rollOnColumn(section, table, column) {
  let result = 'TBD'
  const items = props.tableData.columns.find((col) => col.name === column).items
  if (items.length) {
    result = items[Math.floor(Math.random() * items.length)]
  }
  store.setSpark(section, table, column, result)
}
function rollOnTable(section, table, columns) {
  tableClass.value = 'rolled'
  setTimeout(() => {
    tableClass.value = ''
  }, 300)
  columns.forEach((column) => {
    let result = 'TBD'
    if (column.items.length) {
      result = column.items[Math.floor(Math.random() * column.items.length)]
    }
    store.setSpark(section, table, column.name, result)
  })
}
</script>

<template>
  <article :id="props.tableData.name" :class="tableClass">
    <h3>
      <button @click="rollOnTable(props.section, props.tableData.name, props.tableData.columns)">
        {{ props.tableData.label }}
      </button>
    </h3>
    <div class="columns">
      <div class="columns__item" v-for="(column, index) in props.tableData.columns" :key="index">
        <h4>{{ column.label }}</h4>
        <TableRoll
          :result="store[props.section][props.tableData.name][column.name]"
          :section="props.section"
          :table="props.tableData.name"
          :column="column.name"
          @roll-on-column="rollOnColumn"
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
  transition: border-color 1000ms ease;
}
article.rolled {
  border-color: var(--color-highlight);
  transition: border-color 0ms ease;
}
h3 button {
  font-size: 1em;
  font-family: inherit;
  color: inherit;
  font-weight: 600;
  text-transform: uppercase;
  margin-block-end: 0.5vw;
  background-color: var(--color-background-soft);
  padding: 0.25em;
  border: 0;
  display: block;
  cursor: pointer;
  width: 100%;
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
