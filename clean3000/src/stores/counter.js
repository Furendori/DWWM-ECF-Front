import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import HomeView from '../views/HomeView.vue'

export const intervInfos = defineStore('infos', () => {
  <HomeView 
    v-model:selected-client
  />

  return { count, doubleCount, increment }
})
