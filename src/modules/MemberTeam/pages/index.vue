<template>
  <LayoutPage>
    <n-card
      :bordered="false"
      title="成员管理-团队成员列表"
      class="h-full"
    >
      <n-data-table
        :columns="columns"
        :data="tableData"
        :pagination="pagination"
        flex-height
        striped
        class="h-full"
      />
    </n-card>
  </LayoutPage>
</template>

<script lang="ts" setup>
import { NTag, NSpace, NButton, NPopconfirm } from 'naive-ui'
import type { DataTableColumn } from 'naive-ui'

/**
 * MemberTeamIndex 成员管理-团队成员列表
 */
defineOptions({
  name: 'MemberTeamIndex'
})

const router = useTabRouter()


const pagination = reactive({
  page: 1,
  pageSize: 30,
  showSizePicker: true,
  pageSizes: [10, 20, 30],
  onChange: (page: number) => {
    pagination.page = page
  },
  onUpdatePageSize: (pageSize: number) => {
    pagination.pageSize = pageSize
    pagination.page = 1
  }
})

function getRandomValueFromArray (arr: any[]) {
  const randomIndex = Math.floor(Math.random() * arr.length)
  return arr[randomIndex]
}

const userRankMap = [
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

const columns: Array<DataTableColumn> = [
  {
    title: '成员名称',
    key: 'username'
  },
  {
    title: '职级',
    key: 'rank',
    render(row) {
      const rankItem = userRankMap.find(rankItem => rankItem.key === row.rank)!
      return h(
        NTag,
        {
          type: rankItem.type as any
        },
        {
          default: () => {
            return rankItem.label
          }
        }
      )
    }
  },
  {
    title: '工号',
    key: 'userId'
  },
  {
    title: '操作列',
    key: 'actions',
    width: '210px',
    align: 'center',
    render (row) {
      return [
        h(
          NSpace,
          null,
          {
            default: () => [
              h(
                NButton,
                {
                  type: 'info',
                  strong: true,
                  secondary: true,
                  size: 'small',
                  onClick: () => {
                    router.push({
                      name: 'MemberTeamPreview',
                      params: {
                        datasetId: row.userId as string
                      }
                    }, `成员查看-${row.username}`)
                  }
                },
                { default: () => '查看' }
              ),
              h(
                NButton,
                {
                  type: 'primary',
                  strong: true,
                  secondary: true,
                  size: 'small',
                  onClick: () => {
                    router.push({
                      name: 'MemberTeamEdit',
                      params: {
                        datasetId: row.userId as string
                      }
                    }, `成员编辑-${row.username}`)
                  }
                },
                { default: () => '编辑' }
              ),
              h(
                NPopconfirm,
                {
                  onPositiveClick() {
                    window.$ModalMessage.success(`假删除成功: ${row.username as string}`)
                  }
                },
                {
                  trigger: () => h(
                    NButton,
                    {
                      type: 'warning',
                      strong: true,
                      secondary: true,
                      size: 'small',
                      onClick: () => {}
                    },
                    { default: () => '删除' }
                  ),
                  default: () => '确定删除？'
                }
              )
            ]
          }
        )
      ]
    }
  }
]

const tableData = Array.from({ length: 100 }).map((_, index) => {
  const userId = `BJ${(index + 1 + '').padStart(4, '0')}`
  const rankItem = getRandomValueFromArray(userRankMap)
  return {
    key: index,
    username: `Tom${index+1}`,
    userId,
    rank: rankItem.key
  }
})

</script>
