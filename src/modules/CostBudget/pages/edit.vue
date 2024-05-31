<script lang="ts" setup>

/**
 * CostBudgetEdit 成本核算管理-预算设定-成本预算录入
 */
defineOptions({
  name: 'CostBudgetEdit'
})

const route = useRoute()
const router = useRouter()

const pageTitle = ref('CostBudgetEdit 成本核算管理-预算设定-成本预算录入')

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
