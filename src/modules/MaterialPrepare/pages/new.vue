<script lang="ts" setup>

/**
 * MaterialPrepareNew 资料管理-资料准备-资料上传
 */
defineOptions({
  name: 'MaterialPrepareNew'
})

const route = useRoute()
const router = useRouter()

const pageTitle = ref('MaterialPrepareNew 资料管理-资料准备-资料上传')

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
