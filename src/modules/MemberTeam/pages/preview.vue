<template>
  <div class="p-16px">
    <h1>{{ pageTitle }}</h1>
    <n-input v-model:value="inputValue" />
  </div>
</template>

<script lang="ts" setup>

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


</script>

<style lang="scss" scoped>
</style>
