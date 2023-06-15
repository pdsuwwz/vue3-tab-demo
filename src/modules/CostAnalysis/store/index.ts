import { defineStore } from 'pinia'

import { sleep } from '@/utils/request'
import * as CostAnalysisAPI from '../api'

export const useCostAnalysisStore = defineStore('CostAnalysis', {
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
      const res = await CostAnalysisAPI.createProject(query)
      return this.filterResponse(res)
    }
  }
})
