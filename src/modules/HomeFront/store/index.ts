import { defineStore } from 'pinia'

import { sleep } from '@/utils/request'
import * as HomeFrontAPI from '../api'

export const useHomeFrontStore = defineStore('HomeFront', {
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
      const res = await HomeFrontAPI.createProject(query)
      return this.filterResponse(res)
    }
  }
})
