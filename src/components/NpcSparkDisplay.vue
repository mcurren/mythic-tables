<script setup>
import { onMounted } from 'vue'
import { peopleTables as sparks } from '@/stores/people'

const emit = defineEmits(['set-sparks'])
const props = defineProps({
  npc: {
    type: Object,
    required: true
  }
})

function rollColumn(items) {
  let result = 'TBD'
  if (items.length) {
    result = items[Math.floor(Math.random() * items.length)]
  }
  return result
}
function rollTable(table) {
  let results = []
  table.columns.forEach((column) => {
    const result = rollColumn(column.items)
    results.push(result)
  })
  return {
    label: table.label,
    name: table.name,
    value: results.join(', ')
  }
}
async function setSparks() {
  const results = await Promise.all(sparks.map((table) => Promise.resolve(rollTable(table))))
  emit('set-sparks', results)
}
onMounted(async () => {
  await setSparks()
})
</script>

<template>
  <aside>
    <p v-for="spark in props.npc.sparks" :key="spark.name">
      <strong>{{ spark.label }}:</strong> <span>{{ spark.value }}</span>
    </p>
  </aside>
</template>

<style scoped>
aside {
  display: flex;
  flex-direction: column;
  gap: 0.25em;
}
p {
  display: grid;
  grid-template-columns: 150px auto;
  align-items: baseline;
  gap: 0.5em;
}
span {
  font-weight: 600;
}
strong {
  font-size: 0.875em;
  text-transform: uppercase;
  font-weight: 400;
  display: inline;
}
</style>
