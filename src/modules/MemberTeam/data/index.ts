// 随机获取数组中某一项
function getRandomValueFromArray (arr: Array<any>) {
  const randomIndex = Math.floor(Math.random() * arr.length)
  return arr[randomIndex]
}

// 级别映射表
export const userRankMap = [
  {
    key: 'junior',
    label: '初级开发',
    type: 'info'
  },
  {
    key: 'middle',
    label: '中级开发',
    type: 'success'
  },
  {
    key: 'senior',
    label: '高级开发',
    type: 'error'
  }
]

// 角色映射表
export const userRoleMap = [
  {
    key: 'team_member',
    label: '团队成员'
  },
  {
    key: 'team_leader',
    label: '现场负责人'
  },
  {
    key: 'project_manager',
    label: '项目经理'
  },
  {
    key: 'quality_manager',
    label: '质控经理'
  },
  {
    key: 'review_manager',
    label: '复核经理'
  }
]

/**
 * 查询目标级别映射
 */
export const findUserRankMapByRankName = (targetRank) => {
  return userRankMap.find(
    rankItem => rankItem.key === targetRank
  )!
}

/**
 * 查询目标角色映射
 */
export const findUserRoleMapByRankName = (targetRole) => {
  return userRoleMap.find(
    roleItem => roleItem.key === targetRole
  )!
}

export interface TypeMemberPerson {
  username: string
  roleId: string
  userId: string
  email: string
  rank: string
}

export const memberTeamList = Array.from({ length: 100 }).map((_, index) => {
  const userId = `BJ${(index + 1 + '').padStart(4, '0')}`
  const rankItem = getRandomValueFromArray(userRankMap)
  const roleItem = getRandomValueFromArray(userRoleMap)
  return {
    username: `Tom${index+1}`,
    userId,
    roleId: roleItem.key,
    rank: rankItem.key,
    email: `${userId}@admin.com`
  } as TypeMemberPerson
})
