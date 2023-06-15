import { defineStore } from 'pinia'

import { sleep } from '@/utils/request'
import * as MaterialPrepareAPI from '../api'

export const useMaterialPrepareStore = defineStore('MaterialPrepare', {
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
      const res = await MaterialPrepareAPI.createProject(query)
      return this.filterResponse(res)
    }
  }
})
