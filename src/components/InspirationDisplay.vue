<script setup>
import { ref, watch } from 'vue'
import { useInspirationStore } from '@/stores/inspirationStore'
import { useSparkState } from '@/stores/sparkStore'
import InspirationRoll from '@/components/InspirationRoll.vue'
const store = useInspirationStore()
const state = useSparkState()
const props = defineProps({
  tableData: {
    type: Object,
    required: true
  }
})
let tableClass = ref('')
const section = props.tableData.name
function rollInspiration(section) {
  let result = 'TBD'
  if (props.tableData.items.length) {
    result = props.tableData.items[Math.floor(Math.random() * props.tableData.items.length)]
  }
  store.setInspiration(section, result)
}
function rollOnTable(table) {
  tableClass.value = 'rolled'
  setTimeout(() => {
    tableClass.value = ''
  }, 300)
  let result = 'TBD'
  if (table.items.length) {
    result = table.items[Math.floor(Math.random() * table.items.length)]
  }
  store.setInspiration(table.name, result)
}

watch(
  () => state['inspiration'],
  async (newState, oldState) => {
    if (newState !== oldState) {
      rollOnTable(props.tableData)
      console.log('State changed, rolling on table:', props.tableData.name)
    }
  }
)
</script>

<template>
  <article :id="props.tableData.name" :class="tableClass">
    <h3>
      <button class="button roll-button" @click="rollOnTable(props.tableData)">
        {{ props.tableData.label }}
      </button>
    </h3>
    <div class="columns">
      <div class="columns__item">
        <InspirationRoll
          :result="store[section]"
          :section="section"
          :table="props.tableData.name"
          @roll-inspiration="rollInspiration"
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
  /* border: 0; */
  /* display: block; */
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
  grid-template-columns: repeat(1, 1fr);
  gap: 0.5rem;
  margin-block-end: 0.5vw;
}
.columns__item {
  padding: 0.5vw;
}
</style>
