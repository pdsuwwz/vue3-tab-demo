<script lang="ts" setup>

/**
 * CostAnalysisReportInfo 成本核算管理-分析和报告-报表查看
 */
defineOptions({
  name: 'CostAnalysisReportInfo'
})

const route = useRoute()
const router = useRouter()

const pageTitle = ref('CostAnalysisReportInfo 成本核算管理-分析和报告-报表查看')

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
