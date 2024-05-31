<script lang="ts" setup>

/**
 * CostDistributeIndex 成本核算管理-分配和归集-成本数据列表
 */
defineOptions({
  name: 'CostDistributeIndex'
})

const route = useRoute()
const router = useRouter()

const pageTitle = ref('CostDistributeIndex 成本核算管理-分配和归集-成本数据列表')

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
