import { defineStore } from 'pinia'

import { sleep } from '@/utils/request'
import * as MemberTeamAPI from '../api'

export const useProjectStore = defineStore('MemberTeam', {
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
      const res = await MemberTeamAPI.createProject(query)
      return this.filterResponse(res)
    }
  }
})
