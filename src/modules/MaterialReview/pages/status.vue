<script lang="ts" setup>

/**
 * MaterialReviewStatus 资料管理-资料审阅-审阅状态管理
 */
defineOptions({
  name: 'MaterialReviewStatus'
})

const route = useRoute()
const router = useRouter()

const pageTitle = ref('MaterialReviewStatus 资料管理-资料审阅-审阅状态管理')

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
