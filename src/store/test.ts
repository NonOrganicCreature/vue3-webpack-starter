import { defineStore } from 'pinia'
import { shallowReactive } from 'vue'

export const useTestStore = defineStore('test', () => {
  const state = shallowReactive({
    test: 'Hello store',
  })

  return {
    state,
  }
})
