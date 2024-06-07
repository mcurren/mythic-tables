<script setup>
import { useRollStore } from '@/stores/rollStore'
const store = useRollStore()
function rollBoth() {
  store.addRoll(12)
  store.addRoll(6)
}
function clearAll() {
  store.clearRolls(12)
  store.clearRolls(6)
}
</script>

<template>
  <aside>
    <!-- <section>
      <div class="control">
        <button v-on:click="store.addRoll('d6')" class="dice-roll shape--d6">6</button>
        <button v-on:click="store.clearRolls('d6')">Clear</button>
      </div>
      <div class="results">
        <p class="dice-roll shape--d6" v-for="(num, index) in store.d6" :key="index">{{ num }}</p>
      </div>
    </section>
    <section>
      <div class="control">
        <button v-on:click="store.addRoll(12)" class="dice-roll shape--d12">12</button>
        <button v-on:click="store.clearRolls(12)">Clear</button>
      </div>
      <div class="results">
        <p class="dice-roll shape--d12" v-for="(num, index) in store.d12" :key="index">{{ num }}</p>
      </div>
    </section> -->
    <section>
      <div class="control">
        <button class="button" v-on:click="rollBoth()">Roll</button>
        <button class="button" v-on:click="clearAll()">Clear</button>
      </div>
      <div class="results">
        <div class="results__column">
          <p class="dice-roll shape--d6" v-for="(num, index) in store.d6" :key="index">{{ num }}</p>
        </div>
        <div class="results__column">
          <p class="dice-roll shape--d12" v-for="(num, index) in store.d12" :key="index">
            {{ num }}
          </p>
        </div>
      </div>
    </section>
  </aside>
</template>

<style scoped>
/* aside {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: auto;
  gap: 2rem;
  justify-items: center;
} */
/* section {
  display: flex;
  justify-content: space-around;
} */
p {
  font-size: 2em;
  text-align: center;
}
button {
  font-size: 1em;
  /* border: 0; */
  outline: 0;
  /* cursor: pointer; */
  padding: 0.5em 1.5em;
  min-width: 100px;
  /* border-radius: 0.4em; */
  /* border: 2px solid var(--color-highlight); */
  background-color: transparent;
  /* color: var(--color-text); */
}
.control {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-block: 3rem;
}
.results {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  max-width: calc(200px + 1.5rem);
  margin-inline: auto;
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
  /* width: auto; */
  /* height: 100px; */
  width: 100%;
  height: auto;
  font-family: var(--font-blackletter);
  font-size: 2rem;
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
