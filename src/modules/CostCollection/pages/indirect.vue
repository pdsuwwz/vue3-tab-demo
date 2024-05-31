<script lang="ts" setup>

/**
 * CostCollectionIndirect 成本核算管理-数据收集-间接成本
 */
defineOptions({
  name: 'CostCollectionIndirect'
})

const route = useRoute()
const router = useRouter()

const pageTitle = ref('CostCollectionIndirect 成本核算管理-数据收集-间接成本')

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
