<script setup>
import { onMounted, watch } from 'vue'
const emit = defineEmits(['set-virtues'])
const props = defineProps({
  npc: {
    type: Object,
    required: true
  }
})

function rollDice(type = 'age') {
  let resultOne
  let resultTwo
  if (type === 'wanderer') {
    resultOne = Math.floor(Math.random() * 6) + 1
    resultTwo = Math.floor(Math.random() * 12) + 1
  } else if (type === 'courtier') {
    resultOne = 6
    resultTwo = Math.floor(Math.random() * 12) + 1
  } else if (type === 'ruler') {
    resultOne = 6
    resultTwo = Math.floor(Math.random() * 12) + 1
  }
  return resultOne + resultTwo
}
function rollVirtues() {
  return [
    {
      label: 'VIG',
      name: 'vigour',
      value: rollDice(props.npc.age)
    },
    {
      label: 'CLA',
      name: 'clarity',
      value: rollDice(props.npc.age)
    },
    {
      label: 'SPI',
      name: 'spirit',
      value: rollDice(props.npc.age)
    }
  ]
}
function setVirtues() {
  const virtues = rollVirtues()
  emit('set-virtues', virtues)
}
function rollGuard() {
  if (props.npc.age === 'wanderer') {
    return Math.floor(Math.random() * 6) + 1
  } else if (props.npc.age === 'courtier') {
    return Math.floor(Math.random() * 6) + 1 + (Math.floor(Math.random() * 6) + 1)
  } else if (props.npc.age === 'ruler') {
    return Math.floor(Math.random() * 6) + 1 + 6
  }
}
function setGuard() {
  const guard = rollGuard()
  emit('set-guard', guard)
}
function setVirtuesGuard() {
  setVirtues()
  setGuard()
}

watch(
  () => props.npc.age,
  () => {
    setVirtuesGuard()
  },
  { immediate: true }
)
onMounted(() => {
  setVirtuesGuard()
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
    <button class="button" @click="setVirtuesGuard()">re-roll</button>
  </div>
</template>

<style scoped>
div {
  display: flex;
  align-items: center;
  gap: 1em;
}
.button {
  font-size: 0.875em;
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
