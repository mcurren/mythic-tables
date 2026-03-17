import { defineStore } from 'pinia'

export const useNpcStore = defineStore('npc', {
  state: () => ({
    rarity: '',
    type: '',
    name: '',
    virtues: [],
    guard: '',
    description: '',
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
      this.rarity = ''
      this.type = ''
      this.name = ''
      this.virtues = []
      this.guard = ''
      this.description = ''
      this.sparks = []
    }
  }
})

export const useSquireStore = defineStore('squire', {
  state: () => ({
    name: '',
    virtues: [],
    guard: '',
    equipment: '',
    weapon: '',
    sparks: []
  }),

  actions: {
    setVirtue(virtue, value) {
      this['virtues'][virtue] = this['virtues'][virtue] || false
      this['virtues'][virtue] = value
    },
    setSparks(sparks) {
      this['sparks'] = this['sparks'] || []
      this['sparks'] = sparks
    },
    setValue(name, value) {
      this[name] = value
    },
    getValue(name) {
      return this[name]
    }
  }
})
