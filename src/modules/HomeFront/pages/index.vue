<template>
  <LayoutSection
    flex-content
  >
    <template #title>
      <n-icon
        :size="22"
        class="flex items-center"
      >
        <IconPaperPlaneRegular />
      </n-icon>
      <h3>项目列表</h3>
    </template>
    <template #action>
      <div class="w-320px">
        <n-input
          v-model:value="searchValue"
          placeholder="请输入项目名称搜索"
          clearable
          @update:value="handleChangeTableData"
        >
          <template #prefix>
            <n-icon
              :component="IconSearch"
            />
          </template>
        </n-input>
      </div>
      <n-button
        type="primary"
      >
        <template #icon>
          <n-icon :component="IconAdd" />
        </template>
        添加项目
      </n-button>
    </template>

    <n-data-table
      :columns="tableColumns"
      :data="filterTableData"
      :style="{
        height: `100%`,
      }"
      striped
      flex-height
      :loading="tableLoading"
      :bordered="false"
    />
    <MyFooter
      show-border
    />
  </LayoutSection>
</template>

<script lang="ts" setup>
import { Search as IconSearch, Add as IconAdd } from '@vicons/carbon'
import { PaperPlaneRegular as IconPaperPlaneRegular } from '@vicons/fa'
import { NButton } from 'naive-ui'

import type { ProjectItem } from '@/modules/HomeFront/types'


const homeFrontStore = useHomeFrontStore()

/**
 * 首页项目列表
 */
defineOptions({
  name: 'GroupProjectList'
})

const router = useRouter()


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


const tableLoading = ref(true)

const initHomeProjectList = async () => {
  tableLoading.value = true
  await homeFrontStore.fetchHomeProjectList()
  tableLoading.value = false
}
initHomeProjectList()


const searchValue = ref('')

const filterTableData = computed(() => homeFrontStore.homeProjectList)
const handleChangeTableData = homeFrontStore.fetchSearchHomeProjectList


</script>

<style lang="scss" scoped>
</style>
