import { defineStore } from 'pinia'

export const useRollsStore = defineStore('rolls', () => {
  const results = {
    d6: [],
    d12: []
  }

  function addRoll(key, value) {
    results[key].push(value)
  }

  function clearRolls(key) {
    results[key].length = 0
  }

  function clearAllRolls() {
    clearRolls('d6')
    clearRolls('d12')
  }

  return { results, addRoll, clearRolls, clearAllRolls }
})
