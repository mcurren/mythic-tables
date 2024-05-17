<script setup>
import { computed, onMounted } from 'vue'
import { useSparkStore } from '@/stores/sparkStore'
const store = useSparkStore()
const props = defineProps({
  items: {
    type: Array,
    required: true
  },
  section: {
    type: String,
    required: true
  },
  table: {
    type: String,
    required: true
  },
  column: {
    type: String,
    required: true
  }
})
const result = props.items.length
  ? computed(() => props.items[Math.floor(Math.random() * props.items.length)])
  : 'TBD'

onMounted(() => {
  store.setSpark(props.section, props.table, props.column, result)
})
</script>

<template>
  <p>
    {{ store[props.section][props.table][props.column] }}
  </p>
</template>

<style scoped>
p {
  /* font-family: var(--font-sans); */
  font-size: 1.3em;
  font-weight: 400;
  font-style: italic;
  letter-spacing: 0.03em;
}
</style>
