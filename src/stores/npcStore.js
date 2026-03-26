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
    guard: '1',
    equipment: 'Dagger (d6)',
    weapon: '',
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
      this.name = ''
      this.virtues = []
      this.guard = '1'
      this.equipment = 'Dagger (d6)'
      this.weapon = ''
      this.sparks = []
    }
  }
})
