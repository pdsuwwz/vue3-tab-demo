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
        :scroll-x="1800"
      />
    </n-card>
  </LayoutPage>
</template>

<script lang="ts" setup>
import { NTag, NIcon, NSpace, NButton, NPopconfirm, NDropdown } from 'naive-ui'


import {
  memberTeamList,
  findUserRankMapByRankName,
  findUserRoleMapByRankName
} from '@/modules/MemberTeam/data'
import type { TypeMemberPerson } from '@/modules/MemberTeam/data'
import {
  MoreVertical20Regular as IconMoreVertical20Regular
} from '@vicons/fluent'

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

const renderIcon = (icon: Component) => {
  return () => {
    return h(NIcon, { class: 'cursor-pointer' }, {
      default: () => h(icon)
    })
  }
}


const createActionsColumns = (row: TypeMemberPerson) => {
  return h(
    NDropdown,
    {
      options: [
        {
          label: '查看',
          key: 'preview',
          props: {
            onClick: () => {
              router.push({
                name: 'MemberTeamPreview',
                params: {
                  datasetId: row.userId
                }
              }, `成员查看-${row.username}`)
            }
          }
        },
        {
          label: '编辑',
          key: 'edit',
          props: {
            onClick: () => {
              router.push({
                name: 'MemberTeamEdit',
                params: {
                  datasetId: row.userId
                }
              }, `成员编辑-${row.username}`)
            }
          }
        },
        {
          key: 'remove',
          type: 'render',
          render() {
            return h(
              NPopconfirm,
              {
                onPositiveClick() {
                  window.$ModalMessage.success(`假删除成功: ${row.username}`)
                }
              },
              {
                trigger: () => h('div', { class: 'px-4px' },
                  h(
                    NButton,
                    {
                      block: true,
                      quaternary: true,
                      size: 'small',
                      onClick: () => {}
                    },
                    { default: () => '删除' }
                  )
                ),
                default: () => '确定删除？'
              }
            )
          }
        }
      ]
    },
    {
      default: renderIcon(IconMoreVertical20Regular)
    }
  )

  // return [
  //   h(
  //     NSpace,
  //     {
  //       justify: 'center'
  //     },
  //     {
  //       default: () => [
  //         h(
  //           NButton,
  //           {
  //             type: 'info',
  //             strong: true,
  //             secondary: true,
  //             size: 'small',
  //             onClick: () => {
  //               router.push({
  //                 name: 'MemberTeamPreview',
  //                 params: {
  //                   datasetId: row.userId
  //                 }
  //               }, `成员查看-${row.username}`)
  //             }
  //           },
  //           { default: () => '查看' }
  //         ),
  //         h(
  //           NButton,
  //           {
  //             type: 'primary',
  //             strong: true,
  //             secondary: true,
  //             size: 'small',
  //             onClick: () => {
  //               router.push({
  //                 name: 'MemberTeamEdit',
  //                 params: {
  //                   datasetId: row.userId
  //                 }
  //               }, `成员编辑-${row.username}`)
  //             }
  //           },
  //           { default: () => '编辑' }
  //         ),
  //         h(
  //           NPopconfirm,
  //           {
  //             onPositiveClick() {
  //               window.$ModalMessage.success(`假删除成功: ${row.username}`)
  //             }
  //           },
  //           {
  //             trigger: () => h(
  //               NButton,
  //               {
  //                 type: 'warning',
  //                 strong: true,
  //                 secondary: true,
  //                 size: 'small',
  //                 onClick: () => {}
  //               },
  //               { default: () => '删除' }
  //             ),
  //             default: () => '确定删除？'
  //           }
  //         )
  //       ]
  //     }
  //   )
  // ]
}

const columns: DataTableColumns<TypeMemberPerson> = [
  {
    title: '成员名称',
    key: 'username',
    width: 80,
    fixed: 'left'
  },
  {
    title: '工号',
    key: 'userId',
    align: 'center',
    width: 60
  },
  {
    title: '项目角色',
    key: 'roleId',
    align: 'center',
    width: 100,
    render(row) {
      const roleItem = findUserRoleMapByRankName(row.roleId)
      return h(
        NTag,
        {
          bordered: false
        },
        {
          default: () => {
            return roleItem.label
          }
        }
      )
    }
  },
  {
    title: '职级',
    key: 'rank',
    align: 'center',
    width: 100,
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
    title: '邮箱',
    key: 'email',
    align: 'center',
    width: 150
  },
  {
    title: '操作列',
    key: 'actions',
    align: 'center',
    width: 25,
    fixed: 'right',
    render (row) {
      return createActionsColumns(row)
    }
  }
]

const tableData = ref<Array<TypeMemberPerson>>([])

tableData.value = memberTeamList

</script>
