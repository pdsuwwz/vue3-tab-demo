<template>
  <div class="p-16px">
    <h1>{{ pageTitle }}</h1>
    <n-input v-model:value="inputValue" />
  </div>
</template>

<script lang="ts" setup>

/**
 * MemberTeamIndex 成员管理-团队成员
 */
defineOptions({
  name: 'MemberTeamIndex'
})

const route = useRoute()
const router = useRouter()

const pageTitle = ref('MemberTeamIndex 成员管理-团队成员')

const inputValue = ref(pageTitle.value)


</script>

<style lang="scss" scoped>
</style>
