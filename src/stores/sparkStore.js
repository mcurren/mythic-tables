import { defineStore } from 'pinia'

export const useSparksStore = defineStore('sparks', () => {
  const results = {}

  function setSpark(section, table, column, value) {
    results[section][table][column] = value
  }

  function clearSection(section) {
    if (Object.prototype.hasOwnProperty.call(results, section)) {
      delete results[section]
    }
  }

  function clearTable(section, table) {
    if (Object.prototype.hasOwnProperty.call(results, section[table])) {
      delete results[section][table]
    }
  }

  return { results, setSpark, clearSection, clearTable }
})
