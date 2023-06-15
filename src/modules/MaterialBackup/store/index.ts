import { defineStore } from 'pinia'

import { sleep } from '@/utils/request'
import * as MaterialBackupAPI from '../api'

export const useMaterialBackupStore = defineStore('MaterialBackup', {
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
      const res = await MaterialBackupAPI.createProject(query)
      return this.filterResponse(res)
    }
  }
})
