<script setup>
import { onMounted } from 'vue'
const emit = defineEmits(['rollOnColumn'])
const props = defineProps({
  result: {
    type: [String],
    required: true,
    default: 'TBD'
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
onMounted(() => {
  emit('rollOnColumn', props.section, props.table, props.column)
})
</script>

<template>
  <p>
    {{ result }}
  </p>
</template>

<style scoped>
p {
  font-size: 1.3em;
  font-weight: 400;
  font-style: italic;
  letter-spacing: 0.03em;
}
</style>
