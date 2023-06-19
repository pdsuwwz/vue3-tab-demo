import { defineStore } from 'pinia'

import { sleep } from '@/utils/request'
import * as ExampleComponentAPI from '../api'

export const useExampleComponentStore = defineStore('ExampleComponent', {
  state: () => {
    return {
      demoList: {}
    }
  },
  getters: {
  },
  actions: {
    async createProject (query) {
      await sleep(200)
      const res = await ExampleComponentAPI.createProject(query)
      return this.filterResponse(res)
    }
  }
})
