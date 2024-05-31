import { defineStore } from 'pinia'

import { sleep } from '@/utils/request'
import * as MemberTeamData from '../data'
import * as MemberTeamAPI from '../api'
import type { TypesMemberTeam } from '../types'

export const useMemberTeamStore = defineStore('MemberTeam', {
  state: () => {
    return {
      memberTeamList: [] as Array<TypesMemberTeam.TypeMemberPerson>
    }
  },
  actions: {
    async createProject (query) {
      await sleep(200)
      const res = await MemberTeamAPI.createProject(query)
      return this.filterResponse(res)
    },
    async fetchMemberTeamList({ projectId }) {
      await sleep(240)
      const res = {
        msg: 'ok',
        error: 0,
        data: MemberTeamData.memberTeamList
      }

      return this.filterResponse(res, ({ data }) => {
        this.memberTeamList = data!
      })
    },
    async fetchAllMemberTeamList(params = {
      username: ''
    }) {
      await sleep(130)
      // 模拟远程搜索
      const { username } = params
      const res = {
        msg: 'ok',
        error: 0,
        data: MemberTeamData.memberTeamList.filter(
          (memberItem) => {
            if (!username) return true

            return memberItem.username.includes(username) ||
            username.includes(memberItem.username)
          }
        )
      }

      return this.filterResponse(res)
    }
  }
})
