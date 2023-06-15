<template>
  <div class="p-16px">
    <h1>{{ pageTitle }}</h1>
    <n-input v-model:value="inputValue" />
  </div>
</template>

<script lang="ts" setup>

/**
 * CostCollectionIndex 成本核算管理-数据收集预览
 */
defineOptions({
  name: 'CostCollectionIndex'
})

const route = useRoute()
const router = useRouter()

const pageTitle = ref('CostCollectionIndex 成本核算管理-数据收集预览')

const inputValue = ref(pageTitle.value)


</script>

<style lang="scss" scoped>
</style>
