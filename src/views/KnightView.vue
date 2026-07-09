<script setup>
// import { computed } from 'vue'
import { useKnightStore } from '@/stores/knightStore'

import KnightVirtueDisplay from '@/components/KnightVirtueDisplay.vue'
import NpcNameDisplay from '@/components/NpcNameDisplay.vue'
import NpcSparkDisplay from '@/components/NpcSparkDisplay.vue'

const npcStore = useKnightStore()

const ages = [
  {
    label: 'Wanderer',
    value: 'wanderer'
  },
  {
    label: 'Courtier',
    value: 'courtier'
  },
  {
    label: 'Ruler',
    value: 'ruler'
  }
]

function setSparks(sparks) {
  npcStore.setSparks(sparks)
}
function copyNpc() {
  // copy html content.
  const npcContent = document
    .querySelector('.npc__card')
    .innerText.replaceAll('\n\n', '\n')
    .replaceAll('re-roll\n', '')
    .replaceAll('copy to clipboard', '')
    .replaceAll(':\n', ': ')
  window.navigator.clipboard.writeText(npcContent)
  // change text briefly to confirm copy.
  const copyButton = document.querySelector('.copy-npc')
  const originalText = copyButton.innerText
  copyButton.innerText = 'copied!'
  setTimeout(() => {
    copyButton.innerText = originalText
  }, 2000)
}
</script>

<template>
  <section id="knight">
    <h2 class="page-title">Make a Knight</h2>
    <nav class="choice choice--rarity">
      <button
        v-for="item in ages"
        :key="item.value"
        @click="npcStore.setValue('age', item.value)"
        :class="['button', npcStore.age === item.value ? 'active' : '']"
      >
        {{ item.label }}
      </button>
    </nav>
    <div class="npc__card" ref="npcCard" v-if="npcStore.getValue('age').length">
      <article>
        <NpcNameDisplay :npc="npcStore.getNpc()" @set-name="npcStore.setValue('name', $event)" />
        <KnightVirtueDisplay
          :npc="npcStore.getNpc()"
          @set-virtues="npcStore.setValue('virtues', $event)"
          @set-guard="npcStore.setValue('guard', $event)"
        />
      </article>
      <NpcSparkDisplay :npc="npcStore.getNpc()" @set-sparks="setSparks" />
      <button class="copy-npc button" @click="copyNpc">copy to clipboard</button>
    </div>
  </section>
</template>

<style scoped>
section {
  width: 100%;
}
@media (min-width: 1200px) {
  section {
    min-height: 47.5625rem;
  }
}
.choice {
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  justify-content: center;
  margin: 1em 2em;
}
.choice--type {
  font-size: 0.9em;
  margin-block: 0;
}
.button {
  padding: 0.5em 1em;
}
.button.active {
  background: var(--color-highlight);
  color: var(--color-background);
}
.npc__card {
  border: 1px solid var(--color-border);
  padding: 1.5em;
  margin: 1em auto 2em;
  max-width: 600px;
  position: relative;
}
article {
  display: flex;
  flex-direction: column;
  gap: 0.25em;
  margin-block-end: 0.5em;
}
.copy-npc {
  /* position: absolute;
  top: 100%;
  left: -1px;
  right: -1px;
  border: 0;
  border: 1px solid var(--color-highlight);
  color: var(--color-highlight); */
  margin-block-start: 1.5em;
  padding: 0.5em 0.5em;
  font-size: 0.875em;
  width: 100%;
  cursor: pointer;
}
.copy-npc:hover {
  background: var(--color-highlight);
  color: var(--color-background);
}
.steed {
  white-space: nowrap;
}
.steed span {
  font-weight: 600;
}
.steed strong {
  font-size: 0.875em;
  display: inline-block;
  font-weight: 400;
}
</style>
