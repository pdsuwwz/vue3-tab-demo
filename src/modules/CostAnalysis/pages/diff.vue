<script lang="ts" setup>

/**
 * CostAnalysisDiff 成本核算管理-分析和报告-成本比较
 */
defineOptions({
  name: 'CostAnalysisDiff'
})

const route = useRoute()
const router = useRouter()

const pageTitle = ref('CostAnalysisDiff 成本核算管理-分析和报告-成本比较')

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
