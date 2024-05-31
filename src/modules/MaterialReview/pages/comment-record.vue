<script lang="ts" setup>

/**
 * MaterialReviewCommentRecord 资料管理-资料审阅-审阅意见记录
 */
defineOptions({
  name: 'MaterialReviewCommentRecord'
})

const route = useRoute()
const router = useRouter()

const pageTitle = ref('MaterialReviewCommentRecord 资料管理-资料审阅-审阅意见记录')

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
