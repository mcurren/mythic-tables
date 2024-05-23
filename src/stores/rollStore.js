import { defineStore } from 'pinia'

export const useRollStore = defineStore('rolls', {
  state: () => ({
    d6: [],
    d12: []
  }),

  actions: {
    addRoll(sides) {
      const key = Number.isInteger(sides) ? `d${sides}` : sides
      const num = Number.isInteger(sides) ? sides : parseInt(sides.substring(1))
      const randomNumber = Math.floor(Math.random() * num) + 1
      this[key].push(randomNumber)
    },
    clearRolls(sides) {
      const key = Number.isInteger(sides) ? `d${sides}` : sides
      this[key].length = 0
    }
  }
})
