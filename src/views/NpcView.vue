<script setup>
import { ref } from 'vue'
import { npcTable as npcs } from '@/stores/npc'
import { useNpcStore } from '@/stores/npcStore'

import NpcVirtueDisplay from '@/components/NpcVirtueDisplay.vue'
import NpcNameDisplay from '@/components/NpcNameDisplay.vue'
import NpcSparkDisplay from '@/components/NpcSparkDisplay.vue'

const npcStore = useNpcStore()
const rarity = ref('')
const type = ref('')
let templates = []

function setRarity(value) {
  rarity.value = value
  npcStore.setValue('rarity', value)
  templates = npcs.find((item) => item.name === value).items
  setType('')
}
function setType(value) {
  type.value = value
  npcStore.setValue('type', value)

  const item = templates.find((item) => item.name === value)
  npcStore.setValue('guard', item?.guard ?? '')
  npcStore.setValue('description', item?.description ?? '')
}
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
function clearNpc() {
  rarity.value = ''
  type.value = ''
  npcStore.clearNpc()
}
</script>

<template>
  <section id="npc">
    <h2 class="page-title">Make an NPC</h2>
    <nav class="choice choice--rarity">
      <button
        v-for="item in npcs"
        :key="item.id"
        @click="setRarity(item.name)"
        :class="['button', rarity === item.name ? 'active' : '']"
      >
        {{ item.label }}
      </button>
    </nav>
    <nav class="choice choice--type" v-if="rarity">
      <button
        v-for="item in templates"
        :key="item.id"
        @click="setType(item.name)"
        :class="['button', type === item.name ? 'active' : '']"
      >
        {{ item.label }}
      </button>
    </nav>
    <button v-if="type" class="clear-npc" @click="clearNpc">start over</button>
    <div class="npc__card" ref="npcCard" v-if="type">
      <article>
        <NpcNameDisplay :npc="npcStore.getNpc()" @set-name="npcStore.setValue('name', $event)" />
        <NpcVirtueDisplay
          :npc="npcStore.getNpc()"
          npc-type="npc"
          @set-virtues="npcStore.setValue('virtues', $event)"
        />
        <div>
          <p>{{ npcStore.getNpc().description }}</p>
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
@media (min-width: 1200px) {
  section {
    min-height: 43.8421052632em;
  }
}
.choice {
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  justify-content: center;
  margin: 1em 0;
}
.choice--type {
  font-size: 0.9em;
  margin-block: 0;
  gap: 0.5em;
}
/* @media (min-width: 1200px) {
  .choice--type {
    padding-inline: 1em;
  }
} */
.button {
  padding: 0.5em 1em;
  min-width: calc(33.3% - 1em);
}
@media (min-width: 800px) {
  .button {
    min-width: 238px;
  }
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
.clear-npc {
  display: block;
  font-size: 0.875em;
  cursor: pointer;
  /* width: 100%;
  max-width: 200px; */
  margin: 1rem auto;
  border: 0;
  border-bottom: 1px solid var(--color-highlight);
  background: transparent;
  padding: 0.25em;
}
</style>
