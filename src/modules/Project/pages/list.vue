<script lang="ts">

import NavigationSideLogo from '@/components/Navigation/Side/SideLogo.vue'
import NavigationNavBar from '@/components/Navigation/NavBar.vue'

import ProjectForm from '@/modules/Project/components/ProjectForm.vue'
import ProjectTableHeader from '@/modules/Project/components/TableHeader.vue'
import ProjectTableBody from '@/modules/Project/components/TableBody.vue'

import { sleep } from '@/utils/request'

import { useProjectStore } from '@/modules/Project/store'

import { CreateNewFolderOutlined } from '@vicons/material'

export default defineComponent({
  name: 'ProjectList',
  components: {
    NavigationNavBar,
    NavigationSideLogo,
    ProjectTableHeader,
    ProjectTableBody,
    CreateNewFolderOutlined
  },
  setup () {
    const { proxy } = useCurrentInstance()
    const projectStore = useProjectStore()

    const testRef = ref()

    async function handleCreateProject () {

      const formData = reactive({
        name: '',
        corpName: '',
        notes: ''
      })

      await nextTick()
      const dd = window.$ModalDialog.create({
        title: '创建项目',
        style: {
          // top: '10vh',
          width: '50vw'
        },
        closable: true,
        maskClosable: false,
        closeOnEsc: false,
        content: () => h(ProjectForm, {
          modelValue: formData,
          ref: testRef
        }),
        positiveText: '创建',
        async onPositiveClick () {
          const isValid = await testRef.value.validateRules()
          if (!isValid) return Promise.reject(new Error('表单校验失败'))

          dd.loading = true
          const { error, data } = await projectStore.createProject(formData)

          dd.loading = false

          if (error) {
            return Promise.reject(new Error('创建失败'))
          }

          projectStore.getProjectList()
        }
      })
    }

    function handleSelectSearch (name?: string) {
      console.log('搜索项目名: ', name)
      projectStore.getProjectList({
        kw: name
      })
    }
    handleSelectSearch()

    return {
      handleCreateProject,
      handleSelectSearch
    }
  }
})

</script>

<template>
  <LayoutArea>
    <template #top>
      <NavigationNavBar
        :fixed="false"
      >
        <NavigationSideLogo />
      </NavigationNavBar>
    </template>

    <template #side>
      <LayoutSection title="项目管理">
        <n-button
          type="primary"
          class="create-action"
          @click="handleCreateProject()"
        >
          <template #icon>
            <n-icon>
              <CreateNewFolderOutlined />
            </n-icon>
          </template>
          创建项目
        </n-button>
      </LayoutSection>
    </template>

    <template #content>
      <LayoutSection
        has-divider
        flex-content
      >
        <template #head>
          <n-date-picker type="datetimerange">
            <template #footer>
              extra footer
            </template>
          </n-date-picker>
        </template>

        <ProjectTableHeader />
        <ProjectTableBody />
      </LayoutSection>
    </template>
  </LayoutArea>
</template>

<style lang="scss" scoped>
.create-action {
  padding: 10px 20px;
  width: 100%;
  font-weight: 600;
}
</style>
