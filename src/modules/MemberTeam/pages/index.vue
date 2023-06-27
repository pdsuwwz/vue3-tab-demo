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

import { memberTeamList, findUserRankMapByRankName } from '@/modules/MemberTeam/data'
import type { TypeMemberPerson } from '@/modules/MemberTeam/data'

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


const columns: DataTableColumns<TypeMemberPerson> = [
  {
    title: '姓名',
    key: 'username'
  },
  {
    title: '角色',
    key: 'roleId'
  },
  {
    title: '职级',
    key: 'rank',
    render(row) {
      const rankItem = findUserRankMapByRankName(row.rank)
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
    title: '邮箱',
    key: 'email'
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
                        datasetId: row.userId
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
                        datasetId: row.userId
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
                    window.$ModalMessage.success(`假删除成功: ${row.username}`)
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

const tableData = ref<Array<TypeMemberPerson>>([])

tableData.value = memberTeamList

</script>
