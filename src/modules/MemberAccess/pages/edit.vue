<script lang="ts" setup>

/**
 * MemberAccessEdit 成员管理-角色权限分配-角色信息编辑
 */
defineOptions({
  name: 'MemberAccessEdit'
})

const route = useRoute()
const router = useRouter()

const pageTitle = ref('MemberAccessEdit 成员管理-角色权限分配-角色信息编辑')

const inputValue = ref(pageTitle.value)


</script>

<template>
  <div class="p-16px">
    <h1>{{ pageTitle }}</h1>
    <n-input v-model:value="inputValue" />
  </div>
</template>

<style lang="scss" scoped>
</style>
