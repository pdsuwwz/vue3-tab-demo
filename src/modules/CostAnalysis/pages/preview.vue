<script lang="ts" setup>

/**
 * CostAnalysisPreview 成本核算管理-分析和报告-报表列表
 */
defineOptions({
  name: 'CostAnalysisPreview'
})

const route = useRoute()
const router = useRouter()

const pageTitle = ref('CostAnalysisPreview 成本核算管理-分析和报告-报表列表')

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
