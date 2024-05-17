<script setup>
import { useRollStore } from '@/stores/rollStore'
const store = useRollStore()
</script>

<template>
  <aside>
    <section>
      <div class="control">
        <button v-on:click="store.addRoll('d6')">Roll d6</button>
        <button v-on:click="store.clearRolls('d6')">Clear Rolls</button>
      </div>
      <div class="results">
        <p v-for="(num, index) in store.d6" :key="index">{{ num }}</p>
      </div>
    </section>
    <section>
      <div class="control">
        <button v-on:click="store.addRoll(12)">Roll d12</button>
        <button v-on:click="store.clearRolls(12)">Clear Rolls</button>
      </div>
      <div class="results">
        <p v-for="(num, index) in store.d12" :key="index">{{ num }}</p>
      </div>
    </section>
    <button v-on:click="store.clearAllRolls()">Clear All</button>
  </aside>
</template>
