<script setup>
import { onMounted } from 'vue'
const emit = defineEmits(['rollInspiration'])
const props = defineProps({
  result: {
    type: [String],
    required: true,
    default: 'TBD'
  },
  section: {
    type: String,
    required: true
  }
})
onMounted(() => {
  emit('rollInspiration', props.section)
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
