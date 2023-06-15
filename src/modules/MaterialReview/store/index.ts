import { defineStore } from 'pinia'

import { sleep } from '@/utils/request'
import * as MaterialReviewAPI from '../api'

export const useMaterialReviewStore = defineStore('MaterialReview', {
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
      const res = await MaterialReviewAPI.createProject(query)
      return this.filterResponse(res)
    }
  }
})
