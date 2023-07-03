import { defineStore } from 'pinia'

import { sleep } from '@/utils/request'
import * as HomeFrontAPI from '../api'
import * as HomeFrontData from '../data'

import type { ProjectItem } from '@/modules/HomeFront/types'


export const useHomeFrontStore = defineStore('HomeFront', {
  state: () => {
    return {
      homeProjectList: [] as Array<ProjectItem>
    }
  },
  getters: {
  },
  actions: {
    async createProject (query) {
      await sleep(200)
      const res = await HomeFrontAPI.createProject(query)
      return this.filterResponse(res)
    },
    async fetchHomeProjectList() {
      await sleep(320)

      const res = {
        msg: 'ok',
        error: 0,
        data: HomeFrontData.mockHomeProjectList
      }

      return this.filterResponse(res, ({ data }) => {
        this.homeProjectList = data!
      })
    },
    fetchSearchHomeProjectList(searchValue = '') {
      const res = {
        msg: 'ok',
        error: 0,
        data: HomeFrontData.mockHomeProjectList
      }

      return this.filterResponse(res, ({ data }) => {
        this.homeProjectList = data!.filter(projectItem => {
          const { projectName } = projectItem
          return searchValue.includes(projectName) ||
            projectName.includes(searchValue)
        })
      })
    }
  },
  debounce: {
    fetchSearchHomeProjectList: 400
  }
})
