import { defineStore } from 'pinia'

import { sleep } from '@/utils/request'
import * as CostBudgetAPI from '../api'

export const useCostBudgetStore = defineStore('CostBudget', {
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
      const res = await CostBudgetAPI.createProject(query)
      return this.filterResponse(res)
    }
  }
})
