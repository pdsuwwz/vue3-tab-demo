import { defineStore } from 'pinia'

import { sleep } from '@/utils/request'
import * as CostDistributeAPI from '../api'

export const useCostDistributeStore = defineStore('CostDistribute', {
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
      const res = await CostDistributeAPI.createProject(query)
      return this.filterResponse(res)
    }
  }
})
