<template>
  <div class="p-16px">
    <h1>{{ pageTitle }}</h1>
    <n-input v-model:value="inputValue" />


    <n-form
      ref="refForm"
      :model="memberModelData"
      label-placement="top"
      label-width="auto"
    >
      <n-form-item
        v-for="(infoItem, index) in memberInfoMap"
        :key="index"
        :path="infoItem.path"
        :label="infoItem.label"
      >
        <n-input
          v-model:value="memberModelData[infoItem.path]"
        />
      </n-form-item>
    </n-form>
  </div>
</template>

<script lang="ts" setup>
import type { FormInst } from 'naive-ui'
import { TypeMemberPerson } from '../data'


/**
 * MemberTeamPreview 成员管理-成员信息查看
 */
defineOptions({
  name: 'MemberTeamPreview'
})

const route = useRoute()
const router = useRouter()

const pageTitle = ref('MemberTeamPreview 成员管理-成员信息查看')

const inputValue = ref(pageTitle.value)


const memberModelData = reactive<TypeMemberPerson>({
  username: 's',
  roleId: 's',
  userId: 's',
  email: 'sss',
  rank: 'ssssss'
})

const memberInfoMap = [
  {
    path: 'username',
    label: 'username'
  },
  {
    path: 'roleId',
    label: 'roleId'
  },
  {
    path: 'userId',
    label: 'userId'
  },
  {
    path: 'email',
    label: 'email'
  },
  {
    path: 'rank',
    label: 'rank'
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



</script>

<style lang="scss" scoped>
</style>
