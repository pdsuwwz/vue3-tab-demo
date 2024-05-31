<script lang="ts" setup>
import { Add as IconAdd, Search as IconSearch } from '@vicons/carbon'
import { PaperPlaneRegular as IconPaperPlaneRegular } from '@vicons/fa'
import { NButton } from 'naive-ui'

import CreateProjectForm from '@/modules/HomeFront/components/CreateProjectForm.vue'
import type { ProjectItem } from '@/modules/HomeFront/types'
import { sleep } from '@/utils/request'


const homeFrontStore = useHomeFrontStore()

/**
 * 首页项目列表
 */
defineOptions({
  name: 'GroupProjectList'
})

const router = useRouter()


const handlerPreviewDetail = (row: ProjectItem) => {
  router.push({
    name: 'GroupProjectDetail',
    params: {
      projectId: row.id
    }
  })
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
      key: 'projectName',
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
          {
            default: () => row.projectName
          }
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
          {
            default: () => '查看'
          }
        )
      }
    }
  ]
}
const tableColumns = createColumns()


const tableLoading = ref(true)

/**
 * 初始化项目列表
 */
const initHomeProjectList = async () => {
  tableLoading.value = true
  await homeFrontStore.fetchHomeProjectList()
  tableLoading.value = false
}
initHomeProjectList()


const searchValue = ref('')

/**
 * 根据项目名称模糊搜索的表格数据
 */
const filterTableData = computed(() => homeFrontStore.homeProjectList)
const handleChangeTableData = homeFrontStore.fetchSearchHomeProjectList


/**
 * 添加项目
 */
const handleCreateProject = () => {
  const _positiveText = '新建'
  const instanceRef = ref()


  const dd = window.$ModalDialog.create({
    title: '新建项目',
    style: {
      maxWidth: '900px',
      width: '80%'
    },
    maskClosable: false,
    closeOnEsc: false,
    content: () => h(
      CreateProjectForm, {
        ref: instanceRef
      }
    ),
    positiveText: _positiveText,
    async onPositiveClick() {
      const isValid = await instanceRef.value.validateRules()
      if (!isValid) {
        return Promise.reject(new Error('请填写完整'))
      }

      dd.loading = true
      dd.positiveText = '提交中..'
      await sleep(1000)

      dd.positiveText = _positiveText
      dd.loading = false
      return Promise.reject(new Error('提交失败'))
    }
  })
}

</script>

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
        @click="handleCreateProject()"
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
    <CustomFooter
      show-border
    />
  </LayoutSection>
</template>

<style lang="scss" scoped>
</style>
