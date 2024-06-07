<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRollStore } from '@/stores/rollStore'
const store = useRollStore()
const pageRolls = store.getPageRolls
const pageNum = computed(() => {
  const d6PageNum = [28, 52, 76, 100, 124, 148]
  const dPageIndex = pageRolls.d6 - 1
  return d6PageNum[dPageIndex] + pageRolls.d12 * 2 - 2
})
let changeClass = ref('')
function rollPage() {
  store.rollPage()
  changeClass.value = 'changed'
  setTimeout(() => {
    changeClass.value = ''
  }, 300)
}
onMounted(() => {
  store.rollPage()
})
</script>

<template>
  <aside>
    <section>
      <div class="control">
        <button class="button" v-on:click="rollPage()">Roll Dice</button>
      </div>
      <div class="results">
        <div class="results__column">
          <p v-if="pageRolls.d6" class="dice-roll shape--d6" :class="changeClass">
            {{ pageRolls.d6 }}
          </p>
        </div>
        <div class="results__column">
          <p v-if="pageRolls.d12" class="dice-roll shape--d12" :class="changeClass">
            {{ pageRolls.d12 }}
          </p>
        </div>
        <div class="results__column">
          <p v-if="pageNum" class="page-num">
            <span :class="changeClass">p. {{ pageNum }}–{{ pageNum + 1 }}</span>
            <small>(Pre-print Version)</small>
          </p>
        </div>
      </div>
    </section>
  </aside>
</template>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
  color: var(--color-text);
  text-shadow: none;
  transition: all 300ms ease;
}
p.page-num {
  font-size: 1.65em;
  display: flex;
  flex-direction: column;
}
small {
  font-size: 0.6em;
}
button {
  font-size: 1em;
  outline: 0;
  padding: 0.5em 1.5em;
  min-width: 100px;
  background-color: transparent;
}
.changed {
  color: var(--color-highlight);
  color: transparent;
  text-shadow: 0 0 9px rgba(255, 255, 255, 0.5);
  transition: all 200ms ease;
}
.control {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-block: 3rem;
}
.results {
  display: grid;
  gap: 1.5rem;
  max-width: 200px;
  margin-inline: auto;
  padding-inline: 1rem;
}
@media (min-width: 600px) {
  .results {
    grid-template-columns: repeat(3, 1fr);
    max-width: calc(500px + 3rem);
    align-items: center;
  }
}
.results__column {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}
.dice-roll {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  font-family: var(--font-blackletter);
  font-size: 3rem;
  line-height: 1;
  background: var(--color-border);
}
.shape--d6 {
  aspect-ratio: 1;
}
.shape--d12 {
  clip-path: polygon(50% 0, 100% 38%, 81% 100%, 19% 100%, 0 38%);
  aspect-ratio: 1.02 / 1;
}
</style>
