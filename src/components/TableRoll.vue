<script setup>
import { computed } from 'vue'
const props = defineProps({
  items: {
    type: Array,
    required: true
  }
})
const result = props.items.length
  ? computed(() => props.items[Math.floor(Math.random() * props.items.length)])
  : 'TBD'
</script>

<template>
  <p>
    {{ result }}
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
