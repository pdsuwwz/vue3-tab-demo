<script lang="ts" setup>

/**
 * CostDistributeEdit 成本核算管理-分配和归集-成本数据详情
 */
defineOptions({
  name: 'CostDistributeEdit'
})

const route = useRoute()
const router = useRouter()

const pageTitle = ref('CostDistributeEdit 成本核算管理-分配和归集-成本数据详情')

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
