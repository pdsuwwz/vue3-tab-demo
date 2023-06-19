import { defineStore } from 'pinia'

import { sleep } from '@/utils/request'
import * as NestedLevelAPI from '../api'

export const useNestedLevelStore = defineStore('NestedLevel', {
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
      const res = await NestedLevelAPI.createProject(query)
      return this.filterResponse(res)
    }
  }
})
