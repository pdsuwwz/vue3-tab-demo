<script lang="ts" setup>

/**
 * CostBudgetCategoryAssign 成本核算管理-预算设定-成本类别分配
 */
defineOptions({
  name: 'CostBudgetCategoryAssign'
})

const route = useRoute()
const router = useRouter()

const pageTitle = ref('CostBudgetCategoryAssign 成本核算管理-预算设定-成本类别分配')

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
