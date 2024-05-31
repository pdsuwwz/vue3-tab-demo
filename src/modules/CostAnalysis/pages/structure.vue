<script lang="ts" setup>

/**
 * CostAnalysisStructure 成本核算管理-分析和报告-成本结构
 */
defineOptions({
  name: 'CostAnalysisStructure'
})

const route = useRoute()
const router = useRouter()

const pageTitle = ref('CostAnalysisStructure 成本核算管理-分析和报告-成本结构')

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
