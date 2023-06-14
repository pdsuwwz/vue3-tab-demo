<template>
  <div class="p-16px">
    <h1>{{ pageTitle }}</h1>
    <n-input v-model:value="inputValue" />
  </div>
</template>

<script lang="ts" setup>

/**
 * MemberTeamEdit 成员管理-成员信息编辑
 */
defineOptions({
  name: 'MemberTeamEdit'
})

const route = useRoute()
const router = useRouter()

const pageTitle = ref('MemberTeamEdit 成员管理-成员信息编辑')

const inputValue = ref(pageTitle.value)


</script>

<style lang="scss" scoped>
</style>
