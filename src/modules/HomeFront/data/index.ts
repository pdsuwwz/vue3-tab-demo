export const testData = {
  id: Math.random(),
  name: '测试项目',
  corpName: '测试公司',
  notes: '备注',
  isPublished: false,
  createTime: '2021.01.29'
}

/**
 * 首页项目列表 模拟数据
 */
export const mockHomeProjectList = Array.from({
  length: 50
}).map((item, index) => {
  const id = index + 1
  return {
    id: `${ id }`,
    project_code: `ACBD${ id }`,
    projectName: `项目${ id }`,
    status: '进行中',
    create_time: '2023-06-14 12:00',
    create_by: '李华'
  }
})


/**
 * 项目所属分部
 */
export const DepartmentBranchMap = [
  {
    value: '北京总部',
    label: '北京总部'
  },
  {
    value: '上海分部',
    label: '上海分部'
  },
  {
    value: '广州分部',
    label: '广州分部'
  },
  {
    value: '深圳分部',
    label: '深圳分部'
  },
  {
    value: '成都分部',
    label: '成都分部'
  },
  {
    value: '西安分部',
    label: '西安分部'
  },
  {
    value: '天津分部',
    label: '天津分部'
  },
  {
    value: '青岛分部',
    label: '青岛分部'
  },
  {
    value: '杭州分部',
    label: '杭州分部'
  },
  {
    value: '重庆分部',
    label: '重庆分部'
  }
]


/**
 * 项目所属等级
 */
export const ProjectLevelMap = [
  {
    value: 'A',
    label: 'A'
  },
  {
    value: 'B',
    label: 'B'
  },
  {
    value: 'C',
    label: 'C'
  },
  {
    value: 'D',
    label: 'D'
  }
]
