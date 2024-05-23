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
    <section>
      <div class="control">
        <button v-on:click="store.addRoll('d6')">Roll d6</button>
        <button v-on:click="store.clearRolls('d6')">Clear</button>
      </div>
      <div class="results">
        <p v-for="(num, index) in store.d6" :key="index">{{ num }}</p>
      </div>
    </section>
    <section>
      <div class="control">
        <button v-on:click="store.addRoll(12)">Roll d12</button>
        <button v-on:click="store.clearRolls(12)">Clear</button>
      </div>
      <div class="results">
        <p v-for="(num, index) in store.d12" :key="index">{{ num }}</p>
      </div>
    </section>
    <section>
      <div>
        <button v-on:click="rollBoth()">Roll Both</button>
        <button v-on:click="clearAll()">Clear All</button>
      </div>
    </section>
  </aside>
</template>

<style scoped>
aside {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  justify-items: center;
}
section {
  display: flex;
  justify-content: space-around;
}
p {
  font-size: 2em;
  text-align: center;
}
</style>
