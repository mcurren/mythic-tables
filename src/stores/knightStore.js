import { defineStore } from 'pinia'

export const useKnightStore = defineStore('knight', {
  state: () => ({
    age: '',
    virtues: [],
    guard: '',
    sparks: []
  }),

  actions: {
    setVirtue(virtue, value) {
      this['virtues'][virtue] = this['virtues'][virtue] || false
      this['virtues'][virtue] = value
    },
    setSparks(array) {
      this['sparks'] = this['sparks'] || []
      this['sparks'] = array
    },
    setValue(name, value) {
      this[name] = value
    },
    getValue(name) {
      return this[name]
    },
    getNpc() {
      return this
    },
    clearNpc() {
      this.age = ''
      this.virtues = []
      this.guard = ''
      this.sparks = []
    }
  }
})
