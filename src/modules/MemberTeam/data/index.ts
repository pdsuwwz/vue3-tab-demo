// 随机获取数组中某一项
function getRandomValueFromArray (arr: any[]) {
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

export interface TypeMemberPerson {
  key: string | number
  username: string
  userId: string
  rank: string
}

export const memberTeamList = Array.from({ length: 100 }).map((_, index) => {
  const userId = `BJ${(index + 1 + '').padStart(4, '0')}`
  const rankItem = getRandomValueFromArray(userRankMap)
  return {
    key: index,
    username: `Tom${index+1}`,
    userId,
    rank: rankItem.key
  } as TypeMemberPerson
})
