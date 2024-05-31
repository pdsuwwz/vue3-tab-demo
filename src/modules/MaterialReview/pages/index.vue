<script lang="ts" setup>

/**
 * MaterialReviewIndex 资料管理-资料审阅-审阅列表
 */
defineOptions({
  name: 'MaterialReviewIndex'
})

const route = useRoute()
const router = useRouter()

const pageTitle = ref('MaterialReviewIndex 资料管理-资料审阅-审阅列表')

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
