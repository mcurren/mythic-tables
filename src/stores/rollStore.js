import { defineStore } from 'pinia'

export const useRollStore = defineStore('rolls', {
  state: () => ({
    d6: [],
    d12: [],
    dPage: {
      d6: false,
      d12: false
    }
  }),
  getters: {
    getPageRolls(state) {
      return state.dPage
    },
    getRolls(sides, state) {
      const key = Number.isInteger(sides) ? `d${sides}` : sides
      return state[key]
    }
  },
  actions: {
    rollPage() {
      this.dPage.d6 = Math.floor(Math.random() * 6) + 1
      this.dPage.d12 = Math.floor(Math.random() * 12) + 1
    },
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
