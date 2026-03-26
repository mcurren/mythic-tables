<script setup>
import { computed } from 'vue'
import { squireTable as squire } from '@/stores/npc'
import { useSquireStore } from '@/stores/npcStore'

import NpcVirtueDisplay from '@/components/NpcVirtueDisplay.vue'
import NpcNameDisplay from '@/components/NpcNameDisplay.vue'
import NpcSparkDisplay from '@/components/NpcSparkDisplay.vue'

const npcStore = useSquireStore()

const description = computed(() => {
  let equipment = npcStore.getValue('equipment')
  const weapons = squire.items
  if (weapons.length) {
    equipment = `${equipment}, ${weapons[Math.floor(Math.random() * weapons.length)]}`
  }
  return equipment
})

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
  <section id="npc">
    <h2 class="page-title">Random Squire</h2>
    <div class="npc__card" ref="npcCard">
      <article>
        <NpcNameDisplay :npc="npcStore.getNpc()" @set-name="npcStore.setValue('name', $event)" />
        <NpcVirtueDisplay
          :npc="npcStore.getNpc()"
          npcType="squire"
          @set-virtues="npcStore.setValue('virtues', $event)"
        />
        <div>
          <p class="description">
            {{ description }},
            <span class="steed"
              >Pony (<span
                ><strong>VIG</strong> 7, <strong>CLA</strong> 7, <strong>SPI</strong> 2, 2<strong
                  >GD</strong
                ></span
              >)</span
            >
          </p>
        </div>
      </article>
      <NpcSparkDisplay :npc="npcStore.getNpc()" @set-sparks="setSparks" />
      <button class="copy-npc" @click="copyNpc">copy to clipboard</button>
    </div>
  </section>
</template>

<style scoped>
section {
  width: 100%;
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
  border: 1px solid var(--color-highlight);
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
  position: absolute;
  top: 100%;
  left: -1px;
  right: -1px;
  border: 0;
  border: 1px solid var(--color-highlight);
  color: var(--color-highlight);
  padding: 0.5em 0.5em;
  font-size: 0.875em;
  cursor: pointer;
}
.copy-npc:hover {
  background: var(--color-highlight);
  color: var(--color-background);
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
