<template>
  <div class="p-16px">
    <h1>{{ pageTitle }}</h1>
    <n-input v-model:value="inputValue" />
  </div>
</template>

<script lang="ts" setup>

/**
 * MemberAccessAssignMember 成员管理-角色-成员分配
 */
defineOptions({
  name: 'MemberAccessAssignMember'
})

const route = useRoute()
const router = useRouter()

const pageTitle = ref('MemberAccessAssignMember 成员管理-角色-成员分配')

const inputValue = ref(pageTitle.value)


</script>

<style lang="scss" scoped>
</style>
