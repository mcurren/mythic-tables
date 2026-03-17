import { defineStore } from 'pinia'

export const useInspirationStore = defineStore('inspiration', {
  state: () => ({
    name: '',
    person: '',
    characteristic: '',
    object: '',
    beast: '',
    state: '',
    theme: '',
    dwelling: '',
    sanctum: '',
    monument: '',
    hazard: '',
    curse: '',
    ruin: ''
  }),

  actions: {
    setInspiration(section, value) {
      this[section] = this[section] || ''
      this[section] = value
    },
    clearSection(section) {
      if (Object.prototype.hasOwnProperty.call(this, section)) {
        delete this[section]
      }
    }
  }
})
