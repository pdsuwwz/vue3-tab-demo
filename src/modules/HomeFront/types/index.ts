export type ProjectItem = {
  id: string
  project_code: string
  projectName: string
  status: string
  create_time: string
  create_by: string
}


export namespace TypesHomeFront {
  export type TypeCreateProjectInfo = {
    /**
     * 项目名称
     */
    projectName: string
    /**
     * 项目所属分部
     */
    projectBranch: string | null
    /**
     * 项目等级 A B C D
     */
    projectLevel: string | null
    /**
     * 项目概括
     */
    projectDesc: string
    /**
     * 开始日期
     */
    startDate: string | null
    /**
     * 结束日期
     */
    endDate: string | null
    /**
     * 人员映射表 Record
     */
    memberList: any
  }
}
