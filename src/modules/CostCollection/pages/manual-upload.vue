<script lang="ts" setup>

/**
 * CostCollectionManualUpload 成本核算管理-数据收集-手动录入
 */
defineOptions({
  name: 'CostCollectionManualUpload'
})

const route = useRoute()
const router = useRouter()

const pageTitle = ref('CostCollectionManualUpload 成本核算管理-数据收集-手动录入')

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
