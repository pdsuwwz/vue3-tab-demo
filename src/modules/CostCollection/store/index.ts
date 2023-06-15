import { defineStore } from 'pinia'

import { sleep } from '@/utils/request'
import * as CostCollectionAPI from '../api'

export const useCostCollectionStore = defineStore('CostCollection', {
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
      const res = await CostCollectionAPI.createProject(query)
      return this.filterResponse(res)
    }
  }
})
