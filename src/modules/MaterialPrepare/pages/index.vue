<script lang="ts" setup>

/**
 * MaterialPrepareIndex 资料管理-资料准备-资料列表
 */
defineOptions({
  name: 'MaterialPrepareIndex'
})

const route = useRoute()
const router = useRouter()

const pageTitle = ref('MaterialPrepareIndex 资料管理-资料准备-资料列表')

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
