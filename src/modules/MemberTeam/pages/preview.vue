<template>
  <LayoutPage>
    <n-card
      :bordered="false"
      title="成员管理-成员信息查看"
      class="h-full"
    >
      <n-spin :show="loadingForm">
        <n-form
          ref="refForm"
          :model="memberFormModel"
          label-placement="top"
          label-width="auto"
          disabled
        >
          <n-form-item
            v-for="(infoItem, index) in memberInfoMap"
            :key="index"
            :path="infoItem.path"
            :label="infoItem.label"
          >
            <component
              :is="infoItem.render"
              v-if="infoItem.render"
              v-model:value="memberFormModel[infoItem.path]"
            />

            <n-input
              v-else
              v-model:value="memberFormModel[infoItem.path]"
            />
          </n-form-item>
          <n-form-item>
            <n-button
              type="primary"
              :loading="loadingSubmit"
              disabled
              @click="handleSubmit()"
            >
              更新
            </n-button>
          </n-form-item>
        </n-form>

        <pre>{{ JSON.stringify(memberFormModel, null, 2) }}</pre>
      </n-spin>
    </n-card>
  </LayoutPage>
</template>

<script lang="ts" setup>
import { NRadioGroup, NRadio, NSelect } from 'naive-ui'
import { sleep } from '@/utils/request'

import type { TypeMemberPerson } from '../data'
import { userRoleMap, userRankMap, findMemberInfoById, userStatusMap } from '../data'

/**
 * MemberTeamPreview 成员管理-成员信息查看
 */
defineOptions({
  name: 'MemberTeamPreview'
})

const route = useRoute()
const router = useRouter()


const memberFormModel = ref<TypeMemberPerson>({
  username: '',
  roleId: '',
  userId: '',
  email: '',
  rank: '',
  phone: '',
  memberStatus: null
})

const loadingForm = ref(true)
const fetchMemberInfo = async () => {
  loadingForm.value = true
  const _member = await findMemberInfoById(route.params.datasetId)
  if (_member) {
    memberFormModel.value = _member
  }
  loadingForm.value = false
}
fetchMemberInfo()

const memberInfoMap = [
  {
    path: 'username',
    label: '成员名称'
  },
  {
    path: 'userId',
    label: '工号'
  },
  {
    path: 'roleId',
    label: '项目角色',
    render: () => h(
      NSelect,
      {
        options: userRoleMap,
        value: memberFormModel.value.roleId,
        onUpdateValue (v) {
          memberFormModel.value.roleId = v
        }
      }
    )
  },
  {
    path: 'email',
    label: '邮箱'
  },
  {
    path: 'phone',
    label: '手机号'
  },
  {
    path: 'memberStatus',
    label: '成员状态',
    render: () => h(
      NRadioGroup,
      {
        value: memberFormModel.value.memberStatus,
        onUpdateValue (v) {
          memberFormModel.value.memberStatus = v
        }
      },
      () => userStatusMap.map(
        (statusItem) => h(
          NRadio,
          {
            ...statusItem
          }
        )
      )
    )
  },
  {
    path: 'rank',
    label: '职级',
    render: () => h(
      NSelect,
      {
        options: userRankMap,
        value: memberFormModel.value.rank,
        onUpdateValue (v) {
          memberFormModel.value.rank = v
        }
      }
    )
  }
]



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

const loadingSubmit = ref(false)
const handleSubmit = async () => {
  loadingSubmit.value = true
  await sleep(500)
  loadingSubmit.value = false
  window.$ModalMessage.success('更新成功')
}



</script>

<style lang="scss" scoped>
</style>
