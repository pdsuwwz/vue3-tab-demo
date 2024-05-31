<script lang="ts" setup>
import {
  NDatePicker,
  NInput,
  NSelect
} from 'naive-ui'
import {
  BookInformation24Regular as IconBookInformation24Regular
} from '@vicons/fluent'
import {
  TeamOutlined as IconTeamOutlined
} from '@vicons/antd'

import type { TypesHomeFront } from '@/modules/HomeFront/types'
import {
  DepartmentBranchMap,
  ProjectLevelMap
} from '@/modules/HomeFront/data'

import {
  userRoleMap
} from '@/modules/MemberTeam/data'

import MemberAssignCard from '@/modules/MemberTeam/components/MemberAssignCard.vue'

defineOptions({
  name: 'CreateProjectForm'
})


const projectFormModel = ref<TypesHomeFront.TypeCreateProjectInfo>({
  projectName: '',
  projectBranch: null,
  projectLevel: null,
  projectDesc: '',
  startDate: null,
  endDate: null,
  memberList: {
    teamMember: [],
    teamLeader: [],
    projectManager: [],
    qualityManager: [],
    reviewManager: []
  }
})


const projectBasicMap = shallowRef([
  {
    path: 'projectBranch',
    label: '项目分部',
    rule: {
      message: '请选择'
    },
    render: () => h(
      NSelect,
      {
        placeholder: '请选择所属分部',
        options: DepartmentBranchMap,
        value: projectFormModel.value.projectBranch,
        onUpdateValue (v) {
          projectFormModel.value.projectBranch = v
        }
      }
    )
  },
  {
    path: 'projectLevel',
    label: '项目等级',
    rule: {
      message: '请选择'
    },
    render: () => h(
      NSelect,
      {
        placeholder: '请选择项目等级',
        options: ProjectLevelMap,
        value: projectFormModel.value.projectLevel,
        onUpdateValue (v) {
          projectFormModel.value.projectLevel = v
        }
      }
    )
  },
  {
    path: 'startDate',
    label: '开始日期',
    rule: {
      message: '请选择'
    },
    render: () => h(
      NDatePicker,
      {
        placeholder: '请选择项目开始日期',
        valueFormat: 'yyyy.MM.dd',
        type: 'date',
        formattedValue: projectFormModel.value.startDate,
        onUpdateFormattedValue (v) {
          projectFormModel.value.startDate = v
        }
      }
    )
  },
  {
    path: 'endDate',
    label: '结束日期',
    rule: {
      message: '请选择'
    },
    render: () => h(
      NDatePicker,
      {
        placeholder: '请选择项目结束日期',
        valueFormat: 'yyyy.MM.dd',
        type: 'date',
        formattedValue: projectFormModel.value.endDate,
        isDateDisabled(ts: number) {
          if (!projectFormModel.value.startDate) {
            return false
          }
          return ts < Date.parse(projectFormModel.value.startDate)
        },
        onUpdateFormattedValue (v) {
          projectFormModel.value.endDate = v
        }
      }
    )
  },
  {
    path: 'projectDesc',
    label: '项目概括',
    span: 'xs:2 s:2 m:2',
    render: () => h(
      NInput,
      {
        placeholder: '请简要描述一下项目基本情况',
        type: 'textarea',
        autosize: {
          minRows: 2,
          maxRows: 4
        },
        maxlength: '200',
        showCount: true,
        value: projectFormModel.value.projectDesc,
        onUpdateValue (v) {
          projectFormModel.value.projectDesc = v
        }
      }
    )
  }
])

const refMemberAsign = ref()
const handleSelectMembers = (userRoleItem) => {
  const _member = reactive(
    projectFormModel.value.memberList[userRoleItem.value]
  )
  window.$ModalDialog.create({
    title: '选择成员',
    style: {
      maxWidth: '650px',
      width: '70%'
    },
    maskClosable: false,
    closeOnEsc: false,
    content: () => h(
      MemberAssignCard,
      {
        ref: refMemberAsign,
        modelValue: _member
      }
    ),
    positiveText: '确定',
    async onPositiveClick() {
      projectFormModel.value.memberList[userRoleItem.value] = refMemberAsign.value.checkedRowsRef
    }
  })
}

const refForm = ref<FormInst>()
const validateRules = async () => {
  return new Promise((resolve) => {
    refForm.value!.validate(errors => {
      if (errors) {
        resolve(false)
      } else {
        resolve(true)
      }
    })
  })
}

defineExpose({
  validateRules
})

</script>


<template>
  <n-form
    ref="refForm"
    :model="projectFormModel"
    label-placement="top"
    label-width="auto"
    class="max-h-600px overflow-y-auto"
  >
    <n-list>
      <template #header>
        <div class="flex items-center">
          <n-icon
            class="mr-10px"
            size="18"
            :component="IconBookInformation24Regular"
          />
          <span class="text-16px font-700">基本信息</span>
        </div>
      </template>
      <n-list-item>
        <n-form-item
          path="projectName"
          label="项目名称"
          :rule="getRequiredRules({
            trigger: 'change',
            message: '请输入项目名称'
          })"
        >
          <n-input
            v-model:value="projectFormModel.projectName"
            maxlength="100"
            show-count
            placeholder="请输入项目名称"
          />
        </n-form-item>

        <n-grid
          :x-gap="20"
          cols="2"
          item-responsive
          responsive="screen"
        >
          <n-form-item-gi
            v-for="(infoItem, index) in projectBasicMap"
            :key="index"
            :path="infoItem.path"
            :label="infoItem.label"
            :span="infoItem.span || `xs:2 s:2 m:1`"
            :rule="getRequiredRules({
              trigger: 'change',
              ...infoItem.rule
            })"
          >
            <component
              :is="infoItem.render"
              v-if="infoItem.render"
              v-model:value="projectFormModel[infoItem.path]"
              class="flex-1"
            />

            <n-input
              v-else
              v-model:value="projectFormModel[infoItem.path]"
            />
          </n-form-item-gi>
        </n-grid>
      </n-list-item>
    </n-list>


    <n-list>
      <template #header>
        <div class="flex items-center">
          <n-icon
            class="mr-10px"
            size="18"
            :component="IconTeamOutlined"
          />
          <span class="text-16px font-700">成员分配</span>
        </div>
      </template>
      <n-list-item>
        <n-space vertical>
          <n-form-item
            v-for="(userRoleItem, index) in userRoleMap"
            :key="index"
            label-placement="left"
            :label="userRoleItem.label + ':'"
          >
            <n-space>
              <n-tag
                v-for="(memberListRoleItem) in projectFormModel.memberList[userRoleItem.value]"
                :key="memberListRoleItem.userId"
                closable
              >
                {{ memberListRoleItem.username }}
              </n-tag>
              <n-button
                size="small"
                type="primary"
                dashed
                @click="handleSelectMembers(userRoleItem)"
              >
                添加
              </n-button>
            </n-space>
            <!-- <n-button @click="handleSelectMembers()">选择成员</n-button> -->
          </n-form-item>
        </n-space>
      </n-list-item>
    </n-list>
    <pre>{{ JSON.stringify(projectFormModel, null, 2) }}</pre>
  </n-form>
</template>

<style lang="scss" scoped>

</style>
