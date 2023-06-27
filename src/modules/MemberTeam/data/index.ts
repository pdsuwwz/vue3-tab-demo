import { sleep } from '@/utils/request'
import {
  PresenceAvailable10Regular,
  PresenceBlocked10Regular
} from '@vicons/fluent'

// 随机获取数组中某一项
function getRandomValueFromArray<T>(arr: Array<T>): T {
  const randomIndex = Math.floor(Math.random() * arr.length)
  return arr[randomIndex]
}



// 级别映射表
export const userRankMap = [
  {
    value: 'junior_development',
    label: '初级开发',
    type: 'info'
  },
  {
    value: 'middle_development',
    label: '中级开发',
    type: 'success'
  },
  {
    value: 'senior_development',
    label: '高级开发',
    type: 'error'
  }
]

/**
 * 查询目标【级别映射】
 */
export const findUserRankMapByRankName = (targetRank) => {
  return userRankMap.find(
    rankItem => rankItem.value === targetRank
  )!
}



// 角色映射表
export const userRoleMap = [
  {
    value: 'team_member',
    label: '团队成员'
  },
  {
    value: 'team_leader',
    label: '现场负责人'
  },
  {
    value: 'project_manager',
    label: '项目经理'
  },
  {
    value: 'quality_manager',
    label: '质控经理'
  },
  {
    value: 'review_manager',
    label: '复核经理'
  }
]

/**
 * 查询目标【角色映射】
 */
export const findUserRoleMapByRankName = (targetRole) => {
  return userRoleMap.find(
    roleItem => roleItem.value === targetRole
  )!
}



// 状态映射表
export const userStatusMap = [
  {
    value: 1,
    label: '活跃',
    type: 'success',
    icon: PresenceAvailable10Regular
  },
  {
    value: 0,
    label: '停用',
    type: 'default',
    icon: PresenceBlocked10Regular
  }
]

/**
 * 查询目标【状态映射】
 */
export const findUserStatusMapByRankName = (targetStatus) => {
  return userStatusMap.find(
    statusItem => statusItem.value === targetStatus
  )!
}



export interface TypeMemberPerson {
  username: string
  roleId: string
  userId: string
  email: string
  phone: string
  rank: string
  /**
   * 1活跃, 0停用
   */
  memberStatus: number | null | undefined
}

/**
 * 构造一份成员列表的假数据
 */
export const memberTeamList = Array.from({ length: 100 }).map((_, index) => {
  const _index = index + 1

  const userId = `BJ${(_index + '').padStart(4, '0')}`
  const rankItem = getRandomValueFromArray(userRankMap)
  const roleItem = getRandomValueFromArray(userRoleMap)
  return {
    username: `Tom${_index}`,
    userId,
    roleId: roleItem.value,
    rank: rankItem.value,
    phone: 10000000000 + _index + '',
    email: `${userId}@admin.com`,
    memberStatus: Math.random() > 0.5 ? 0 : 1
  } as TypeMemberPerson
})


/**
 * 根据 userId 查询成员信息
 */
export const findMemberInfoById = async (userId) => {
  await sleep(440)
  return memberTeamList.find(
    memberItem => memberItem.userId === userId
  )
}
