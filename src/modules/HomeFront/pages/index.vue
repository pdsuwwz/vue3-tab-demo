<template>
  <LayoutSection
    title="主页"
    flex-content
  >
    <!-- <template #action>
      <n-button>测绘</n-button>
    </template> -->

    <n-data-table
      :columns="tableColumns"
      :data="tableData"
      :style="{
        height: `100%`
      }"
      flex-height
      :bordered="true"
    />
  </LayoutSection>
</template>

<script lang="ts" setup>
import { NButton } from 'naive-ui'

/**
 * 首页项目列表
 */
defineOptions({
  name: 'GroupProjectList'
})

const router = useRouter()

type ProjectItem = {
  id: string
  project_code: string
  project_name: string
  status: string
  create_time: string
  create_by: string
}

const tableData = ref<Array<ProjectItem>>([])

const createColumns = (): DataTableColumns<ProjectItem> => {
  return [
    {
      title: '项目代码',
      key: 'project_code',
      align: 'center'
    },
    {
      title: '项目名称',
      key: 'project_name',
      align: 'center',
      render(row) {
        return h(
          NButton,
          {
            text: true,
            tag: 'a',
            type: 'info',
            strong: true,
            onClick: () => handlerPreviewDetail(row)
          },
          { default: () => row.project_name }
        )
      }
    },
    {
      title: '状态',
      key: 'status',
      align: 'center'
    },
    {
      title: '创建时间',
      key: 'create_time',
      align: 'center'
    },
    {
      title: '创建人',
      key: 'create_by',
      align: 'center'
    },
    {
      title: '操作',
      key: 'action',
      align: 'center',
      render (row) {
        return h(
          NButton,
          {
            text: true,
            tag: 'a',
            type: 'info',
            strong: true,
            onClick: () => handlerPreviewDetail(row)
          },
          { default: () => '查看' }
        )
      }
    }
  ]
}
const tableColumns = createColumns()

const handlerPreviewDetail = (row: ProjectItem) => {
  router.push({
    name: 'GroupProjectDetail',
    params: {
      projectId: row.id
    }
  })
}


setTimeout(() => {
  // tableData.value = [
  //   {
  //     id: '1111',
  //     project_code: 'ACBD',
  //     project_name: '项目一',
  //     status: '进行中',
  //     create_time: '2023-06-14 12:00',
  //     create_by: '李华'
  //   },
  //   {
  //     id: '222',
  //     project_code: 'EFGH',
  //     project_name: '项目二',
  //     status: '已完成',
  //     create_time: '2023-06-14 12:00',
  //     create_by: '李雷'
  //   }
  // ]

  tableData.value = Array.from({ length: 50 }).map((item, index) => {

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
})


</script>

<style lang="scss" scoped>
</style>
