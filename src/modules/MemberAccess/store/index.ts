import { defineStore } from 'pinia'

import { sleep } from '@/utils/request'
import * as MemberAccessAPI from '../api'

export const useMemberAccessStore = defineStore('MemberAccess', {
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
      const res = await MemberAccessAPI.createProject(query)
      return this.filterResponse(res)
    }
  }
})
