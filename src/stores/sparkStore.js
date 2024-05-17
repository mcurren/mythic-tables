import { defineStore } from 'pinia'

export const useSparkStore = defineStore('sparks', {
  state: () => ({
    nature: {
      land: {},
      sky: {},
      water: {},
      weather: {},
      flora: {},
      fauna: {},
      feature: {},
      wonder: {},
      otherworld: {}
    },
    civilisation: {
      holding: {},
      bailey: {},
      keep: {},
      food: {},
      goods: {},
      luxuries: {},
      drama: {},
      woe: {},
      news: {}
    },
    people: {
      appearance: {},
      voice: {},
      personality: {},
      relationship: {},
      desire: {},
      task: {},
      background: {},
      ailment: {},
      heraldry: {}
    },
    combat: {}
  }),

  actions: {
    setSpark(section, table, column, value) {
      this[section] = this[section] || {}
      this[section][table] = this[section][table] || {}
      this[section][table][column] = value
    },
    clearSection(section) {
      if (Object.prototype.hasOwnProperty.call(this, section)) {
        delete this[section]
      }
    },
    clearTable(section, table) {
      if (Object.prototype.hasOwnProperty.call(this, section[table])) {
        delete this[section][table]
      }
    }
  }
})
