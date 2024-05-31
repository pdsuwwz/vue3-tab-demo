<script lang="ts" setup>

/**
 * CostAnalysisIndex 成本核算管理-分析和报告-成本总览
 */
defineOptions({
  name: 'CostAnalysisIndex'
})

const route = useRoute()
const router = useRouter()

const pageTitle = ref('CostAnalysisIndex 成本核算管理-分析和报告-成本总览')

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
