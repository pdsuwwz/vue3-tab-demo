<script lang="ts" setup>
import {
  NButton,
  NDropdown,
  NIcon,
  NTag
} from 'naive-ui'
import { sleep } from '@/utils/request'

import {
  findUserRankMapByRankName,
  findUserRoleMapByRankName,
  findUserStatusMapByRankName
} from '@/modules/MemberTeam/data'

import {
  MoreVertical20Regular as IconMoreVertical20Regular,
  NotepadPerson24Regular as IconNotepadPerson24Regular,
  PersonDelete16Regular as IconPersonDelete16Regular,
  PersonEdit24Regular as IconPersonEdit24Regular
} from '@vicons/fluent'


import type { TypesMemberTeam } from '@/modules/MemberTeam/types'
import type { MultipleLinkItem } from '@/widgets/WorkTabs/types'

/**
 * MemberTeamIndex 成员管理-团队成员列表
 */
defineOptions({
  name: 'MemberTeamIndex'
})

const route = useRoute()
const router = useTabRouter()

const memberTeamStore = useMemberTeamStore()

const projectId = route.params.projectId as string

/**
 * 构造行唯一 ID
 */
const getRowKey = (row: TypesMemberTeam.TypeMemberPerson) => row.userId

/**
 * 选中行
 */
const checkedRowKeysRef = ref<Array<DataTableRowKey>>([])
const checkedRowsRef = ref<Array<TypesMemberTeam.TypeMemberPerson>>([])

const handleUpdateCheckedRows = (keys, rows: Array<object>) => {
  checkedRowsRef.value = rows as Array<TypesMemberTeam.TypeMemberPerson>
}


/**
 * 打开多个 Tabs
 */
const handleOpenTabs = () => {
  if (!checkedRowsRef.value.length) {
    window.$ModalMessage.warning('请至少勾选一条表格数据')
    return
  }

  const multipleLinks = checkedRowsRef.value.map((rowData) => {
    return {
      to: {
        name: 'MemberTeamPreview',
        params: {
          datasetId: rowData.userId
        }
      },
      tabName: `成员查看-${ rowData.username }`
    } as MultipleLinkItem
  })

  router.pushMultiple(projectId, multipleLinks)

  nextTick(() => {
    checkedRowKeysRef.value = []
  })

}


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
    return h(NIcon, {
      class: className
    }, {
      default: () => h(icon)
    })
  }
}


const goToMemberTeamPreview = (row: TypesMemberTeam.TypeMemberPerson) => {
  router.push({
    name: 'MemberTeamPreview',
    params: {
      datasetId: row.userId
    }
  }, `成员查看-${ row.username }`)
}

const createActionsColumns = (row: TypesMemberTeam.TypeMemberPerson) => {
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
              goToMemberTeamPreview(row)
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
              }, `成员编辑-${ row.username }`)
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
                content: `确定删除该成员: " ${ row.username } "?`,
                positiveText: '删除',
                negativeText: '我再想想',
                onPositiveClick: async () => {
                  d.loading = true
                  await sleep(400)
                  window.$ModalMessage.success(`假删除成功: ${ row.username }`)
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

const columns: DataTableColumns<TypesMemberTeam.TypeMemberPerson> = [
  {
    type: 'selection',
    fixed: 'left'
  },
  {
    title: '成员名称',
    key: 'username',
    width: 100,
    align: 'center',
    fixed: 'left',
    render(row) {
      return h(
        NButton,
        {
          text: true,
          type: 'primary',
          onClick() {
            goToMemberTeamPreview(row)
          }
        },
        {
          default: () => row.username
        }
      )
    }
  },
  {
    title: '工号',
    key: 'userId',
    align: 'center',
    width: 100,
    render(row) {
      return h(
        NButton,
        {
          text: true,
          type: 'primary',
          onClick() {
            goToMemberTeamPreview(row)
          }
        },
        {
          default: () => row.userId
        }
      )
    }
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


const tableLoading = ref(true)
const initDataList = async () => {
  tableLoading.value = true
  await memberTeamStore.fetchMemberTeamList({
    projectId
  })
  tableLoading.value = false
}
initDataList()

const tableData = computed(() => memberTeamStore.memberTeamList)


</script>

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
          @click="handleOpenTabs()"
        >
          打开
        </n-button>
      </template>
      <n-data-table
        v-model:checked-row-keys="checkedRowKeysRef"
        class="h-full"
        :columns="columns"
        :data="tableData"
        :pagination="pagination"
        :scroll-x="1100"
        :bordered="false"
        :single-line="false"
        flex-height
        striped
        :row-key="getRowKey"
        :loading="tableLoading"
        @update:checked-row-keys="handleUpdateCheckedRows"
      />
    </n-card>
  </LayoutPage>
</template>

