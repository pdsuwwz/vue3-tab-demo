<script lang="ts" setup>

/**
 * MemberAccessIndex 成员管理-角色权限分配-角色列表
 */
defineOptions({
  name: 'MemberAccessIndex'
})

const route = useRoute()
const router = useRouter()

const pageTitle = ref('MemberAccessIndex 成员管理-角色权限分配-角色列表')

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
