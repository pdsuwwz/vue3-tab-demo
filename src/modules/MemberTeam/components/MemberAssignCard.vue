<template>
  <n-grid
    cols="2"
    :x-gap="10"
    item-responsive
    responsive="screen"
    class="member-assign-card-box h-500px overflow-hidden"
  >
    <n-gi
      span="1"
      class="flex flex-col min-h-0"
    >
      <n-input
        v-model:value="searchValue"
        placeholder="输入成员名称，模拟远程搜索"
        clearable
        @update:value="handleChangeSearch"
      >
        <template #prefix>
          <n-icon :component="IconSearch" />
        </template>
      </n-input>
      <div class="py-10px"><!-- 分割线 --></div>
      <div
        class="flex-1 overflow-y-auto"
      >
        <!-- 内容区域 -->
        <n-data-table
          v-model:checked-row-keys="checkedRowKeysRef"
          :style="{
            height: `100%`,
          }"
          flex-height
          :bordered="true"
          :single-line="false"
          size="small"
          :columns="leftTableColumns"
          :data="leftTableData"
          :loading="leftTableLoading"
          :row-key="getRowKey"
          @update:checked-row-keys="handleUpdateCheckedRows"
        />
      </div>
    </n-gi>


    <n-gi
      span="1"
      class="flex flex-col min-h-0"
    >

      <div class="flex items-center pl-10px h-34px">
        {{ checkedRowKeysRef.length ? `已选择${checkedRowKeysRef.length}个成员` : `请选择要添加的成员` }}
      </div>
      <div class="py-10px"><!-- 分割线 --></div>
      <div
        class="flex-1 overflow-y-auto"
      >
        <!-- 内容区域 -->
        <n-list
          hoverable
          :show-divider="false"
        >
          <n-list-item
            v-for="(checkedRowItem) in checkedRowsRef"
            :key="checkedRowItem.userId"
          >
            <n-space
              justify="space-between"
              align="center"
            >
              <MemberAvatar
                :size="26"
                :avatar="checkedRowItem.avatar"
                :title="checkedRowItem.username"
                :sub-title="checkedRowItem.userId"
              />
              <n-button
                text
                @click="handleRemoveMember(checkedRowItem)"
              >
                <n-icon
                  size="20"
                  :component="IconClose"
                />
              </n-button>
            </n-space>
          </n-list-item>
        </n-list>
      </div>
    </n-gi>

  </n-grid>
</template>


<script lang="ts" setup>
defineOptions({
  name: 'MemberAssignCard'
})

import {
  Search as IconSearch,
  Close as IconClose
} from '@vicons/carbon'

import type { TypesMemberTeam } from '@/modules/MemberTeam/types'

import MemberAvatar from './MemberAvatar.vue'

const memberTeamStore = useMemberTeamStore()

const props = defineProps({
  modelValue: {
    type: Array as PropType<Array<TypesMemberTeam.TypeMemberPerson>>,
    default() {
      return []
    }
  }
})

const selectedMembers = props.modelValue.slice()

/**
 * 初始化已经勾选过的行状态
 */
const initSelectedMembers = () => {
  nextTick(() => {
    checkedRowKeysRef.value = selectedMembers.map((member) => member.userId)
    checkedRowsRef.value = selectedMembers
  })
}
initSelectedMembers()

/**
 * 构造行唯一 ID
 */
const getRowKey = (row: TypesMemberTeam.TypeMemberPerson) => row.userId

/**
 * 左侧多选表格-选中行
 */
const checkedRowKeysRef = ref<Array<DataTableRowKey>>([])
const checkedRowsRef = ref<Array<TypesMemberTeam.TypeMemberPerson>>([])

const handleUpdateCheckedRows = (keys, rows: Array<object>) => {
  const currentRows = rows.filter(i => i) as Array<TypesMemberTeam.TypeMemberPerson>

  for (let index = 0; index < currentRows.length; index++) {
    const _row = currentRows[index]
    const isExist = checkedRowsRef.value.find(checkedRow => checkedRow.userId === _row.userId)
    if (isExist) {
      continue
    } else {
      checkedRowsRef.value.push(_row)
    }
  }
}

/**
 * 在右侧列表中移除选中的成员
 */
const handleRemoveMember = (row: TypesMemberTeam.TypeMemberPerson) => {
  const indexRow = checkedRowsRef.value.findIndex(_row => row.userId === _row.userId)
  const indexRowKey = checkedRowKeysRef.value.findIndex(_userId => row.userId === _userId)

  if (indexRow < 0 || indexRowKey < 0) return

  checkedRowsRef.value.splice(indexRow, 1)
  checkedRowKeysRef.value.splice(indexRowKey, 1)
}

/**
 * 左侧多选表格-表头
 */
const leftTableColumns: DataTableColumns<TypesMemberTeam.TypeMemberPerson> = [
  {
    type: 'selection'
  },
  {
    key: 'member',
    render(row) {
      return h(
        MemberAvatar,
        {
          avatar: row.avatar,
          title: row.username,
          subTitle: row.userId
        }
      )
    }
  }
]

/**
 * 左侧多选表格-表体数据获取
 */
const leftTableLoading = ref(true)
const leftTableData = ref<Array<TypesMemberTeam.TypeMemberPerson>>([])
const initLeftTableList = async (params = { username: '' }) => {
  leftTableLoading.value = true
  const { error, data } = await memberTeamStore.fetchAllMemberTeamList(params)
  leftTableLoading.value = false

  if (error) return

  leftTableData.value = data!
}
initLeftTableList()

/**
 * 左侧多选表格-远程搜索
 */
const searchValue = ref('')
const handleChangeSearch = _.debounce(
  (val) => {
    // 🔍 远程搜索成员
    initLeftTableList({
      username: val
    })
  },
  200
)

defineExpose({
  checkedRowsRef
})

</script>

<style lang="scss">
.member-assign-card-box {

  .n-data-table-thead {
    display: none;
  }
}

</style>