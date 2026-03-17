<script setup>
import { onMounted } from 'vue'
const emit = defineEmits(['set-virtues'])
const props = defineProps({
  npc: {
    type: Object,
    required: true
  }
})

function rollDice() {
  const d6 = Math.floor(Math.random() * 6) + 1
  const d12 = Math.floor(Math.random() * 12) + 1
  return d6 + d12
}
function rollVirtues() {
  return [
    {
      label: 'VIG',
      name: 'vigour',
      value: rollDice()
    },
    {
      label: 'CLA',
      name: 'clarity',
      value: rollDice()
    },
    {
      label: 'SPI',
      name: 'spirit',
      value: rollDice()
    }
  ]
}
function setVirtues() {
  const virtues = rollVirtues()
  emit('set-virtues', virtues)
}
onMounted(() => {
  setVirtues()
})
</script>

<template>
  <div>
    <p>
      <span v-for="item in props.npc.virtues" :key="item.name"
        ><strong>{{ item.label }}</strong> {{ item.value }},
      </span>
      <span v-if="props.npc.guard">{{ props.npc.guard }}<strong>GD</strong></span>
    </p>
    <button class="button" @click="setVirtues()">re-roll</button>
  </div>
</template>

<style scoped>
div {
  display: flex;
  align-items: center;
  gap: 1em;
}
.button {
  border: 0;
  border-bottom: 1px solid var(--color-highlight);
  border-radius: 0;
  padding: 0.25em;
}
span {
  font-weight: 600;
}
strong {
  font-size: 0.875em;
  display: inline-block;
  font-weight: 400;
}
</style>
