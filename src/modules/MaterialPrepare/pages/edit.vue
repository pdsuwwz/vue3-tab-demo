<script lang="ts" setup>

/**
 * MaterialPrepareEdit 资料管理-资料准备-资料信息编辑
 */
defineOptions({
  name: 'MaterialPrepareEdit'
})

const route = useRoute()
const router = useRouter()

const pageTitle = ref('MaterialPrepareEdit 资料管理-资料准备-资料信息编辑')

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
