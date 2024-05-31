<script lang="ts" setup>
import { sleep } from '@/utils/request'

import {
  NButton,
  NRadio,
  NRadioGroup,
  NSelect
} from 'naive-ui'

import AvatarUpload from '@/modules/MemberTeam/components/AvatarUpload.vue'

import {
  findMemberInfoById,
  userRankMap,
  userRoleMap,
  userStatusMap
} from '@/modules/MemberTeam/data'
import type { TypesMemberTeam } from '@/modules/MemberTeam/types'


/**
 * MemberEditor 成员管理-成员信息 【编辑/预览】通用组件
 */
defineOptions({
  name: 'MemberEditor'
})


const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  userId: {
    type: String,
    default: ''
  },
  readonly: {
    type: Boolean,
    default: true
  }
})


const disabledForm = computed(() => props.readonly)


const memberFormModel = ref<TypesMemberTeam.TypeMemberPerson>({
  username: '',
  roleId: '',
  userId: '',
  avatar: '',
  email: '',
  rank: '',
  phone: '',
  memberStatus: null
})

const loadingForm = ref(true)
const fetchMemberInfo = async () => {
  loadingForm.value = true
  const _member = await findMemberInfoById(props.userId)
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

<template>
  <n-card
    :bordered="false"
    :title="title"
    class="bg-transparent"
  >
    <n-spin :show="loadingForm">
      <n-form
        ref="refForm"
        :model="memberFormModel"
        label-placement="top"
        label-width="auto"
        :disabled="disabledForm"
      >
        <n-grid
          :x-gap="100"
          cols="xs:1 s:1 m:2 l:2"
          responsive="screen"
        >
          <n-grid-item>
            <n-grid
              cols="l:1"
              responsive="screen"
            >
              <n-form-item-gi
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
              </n-form-item-gi>
            </n-grid>
          </n-grid-item>
          <n-grid-item>
            <n-form-item
              path="avatar"
              label="成员头像"
            >
              <AvatarUpload
                v-model="memberFormModel.avatar"
                :disabled="disabledForm"
              />
            </n-form-item>
          </n-grid-item>
        </n-grid>

        <n-form-item v-if="!disabledForm">
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
</template>

<style lang="scss" scoped>
</style>
