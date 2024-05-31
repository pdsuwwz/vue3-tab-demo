<script lang="ts" setup>

/**
 * MaterialReviewPreview 资料管理-资料审阅-审阅任务详情
 */
defineOptions({
  name: 'MaterialReviewPreview'
})

const route = useRoute()
const router = useRouter()

const pageTitle = ref('MaterialReviewPreview 资料管理-资料审阅-审阅任务详情')

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
