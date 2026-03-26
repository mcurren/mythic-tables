<script setup>
import { onMounted, computed } from 'vue'
import { inspirationTable } from '@/stores/inspiration'

const props = defineProps({
  npc: {
    type: Object,
    required: true
  }
})
const emit = defineEmits(['set-name'])
const names = computed(() => {
  return inspirationTable.find((item) => item.name === 'name').items
})

function rollName() {
  const name = names.value[Math.floor(Math.random() * names.value.length)]
  emit('set-name', name)
}
onMounted(() => {
  rollName()
})
</script>

<template>
  <div>
    <p>
      <strong>Name:</strong> <span class="name">{{ props.npc.name }}</span
      >&nbsp;
      <span v-if="props.npc.type && props.npc.rarity"
        >({{ props.npc.type }}, {{ props.npc.rarity }})</span
      >
    </p>
    <button class="button" @click="rollName()">re-roll</button>
  </div>
</template>

<style scoped>
div {
  display: flex;
  align-items: center;
  gap: 1em;
}
strong {
  font-weight: 400;
  font-size: 0.875em;
  text-transform: uppercase;
}
.name {
  font-weight: 600;
  padding-inline: 0.25em;
}
.button {
  font-size: 0.875em;
  border: 0;
  border-bottom: 1px solid var(--color-highlight);
  border-radius: 0;
  padding: 0.25em;
  white-space: nowrap;
}
</style>
