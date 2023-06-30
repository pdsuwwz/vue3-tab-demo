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
export const mockHomeProjectList = Array.from({ length: 50 }).map((item, index) => {
  const id = index + 1
  return {
    id: '' + id,
    project_code: 'ACBD' + id,
    project_name: '项目' + id,
    status: '进行中',
    create_time: '2023-06-14 12:00',
    create_by: '李华'
  }
})
