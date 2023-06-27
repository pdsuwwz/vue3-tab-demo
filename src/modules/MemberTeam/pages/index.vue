<template>
  <LayoutPage>
    <n-card
      :bordered="false"
      title="成员管理-团队成员列表"
      class="h-full"
    >
      <template #header-extra>
        <n-button
          type="primary"
        >
          打开
        </n-button>
      </template>
      <n-data-table
        :columns="columns"
        :data="tableData"
        :pagination="pagination"
        flex-height
        striped
        :row-key="(row: TypeMemberPerson) => row.userId"
        class="h-full"
        :scroll-x="1100"
        :bordered="false"
        :single-line="false"
      />
    </n-card>
  </LayoutPage>
</template>

<script lang="ts" setup>
import { NTag, NIcon, NSpace, NButton, NPopconfirm, NDropdown } from 'naive-ui'


import {
  memberTeamList,
  findUserRankMapByRankName,
  findUserRoleMapByRankName,
  findUserStatusMapByRankName
} from '@/modules/MemberTeam/data'
import type { TypeMemberPerson } from '@/modules/MemberTeam/data'
import {
  MoreVertical20Regular as IconMoreVertical20Regular,
  NotepadPerson24Regular as IconNotepadPerson24Regular,
  PersonEdit24Regular as IconPersonEdit24Regular,
  PersonDelete16Regular as IconPersonDelete16Regular
} from '@vicons/fluent'
import { sleep } from '@/utils/request'

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

const renderIcon = (icon: Component, className = '') => {
  return () => {
    return h(NIcon, { class: className }, {
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
          icon: renderIcon(IconNotepadPerson24Regular),
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
          icon: renderIcon(IconPersonEdit24Regular),
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
          label: '删除',
          key: 'remove',
          icon: renderIcon(IconPersonDelete16Regular),
          disabled: row.memberStatus === 1,
          props: {
            onClick: () => {
              if (row.memberStatus === 1) return

              const d = window.$ModalDialog.warning({
                title: '警告',
                content: `确定删除该成员: " ${row.username} "?`,
                positiveText: '删除',
                negativeText: '我再想想',
                onPositiveClick: async () => {
                  d.loading = true
                  await sleep(400)
                  window.$ModalMessage.success(`假删除成功: ${row.username}`)
                }
              })
            }
          }
        }
      ]
    },
    {
      default: () => h(
        NButton,
        {
          quaternary: true,
          round: true,
          size: 'tiny'
        },
        renderIcon(IconMoreVertical20Regular, 'cursor-pointer')
      )
    }
  )
}

const columns: DataTableColumns<TypeMemberPerson> = [
  {
    type: 'selection',
    fixed: 'left'
  },
  {
    title: '成员名称',
    key: 'username',
    width: 100,
    align: 'center',
    fixed: 'left'
  },
  {
    title: '工号',
    key: 'userId',
    align: 'center',
    width: 100
  },
  {
    title: '项目角色',
    key: 'roleId',
    align: 'center',
    width: 160,
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
    align: 'center'
  },
  {
    title: '成员状态',
    key: 'status',
    align: 'center',
    width: 200,
    fixed: 'right',
    render(row) {
      const statusItem = findUserStatusMapByRankName(row.memberStatus)
      return h(
        NTag,
        {
          bordered: false,
          round: true,
          type: statusItem.type as any
        },
        {
          icon: renderIcon(statusItem.icon),
          default: () => {
            return statusItem.label
          }
        }
      )
    }
  },
  {
    title: '操作列',
    key: 'actions',
    align: 'center',
    width: 80,
    fixed: 'right',
    render (row) {
      return createActionsColumns(row)
    }
  }
]

const tableData = ref<Array<TypeMemberPerson>>([])

tableData.value = memberTeamList

</script>
