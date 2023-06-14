<template>
  <div class="p-16px">
    <h1>{{ pageTitle }}</h1>
    <n-input v-model:value="inputValue" />
  </div>
</template>

<script lang="ts" setup>

/**
 * MaterialPreparePreview 成员管理-资料信息查看
 */
defineOptions({
  name: 'MaterialPreparePreview'
})

const route = useRoute()
const router = useRouter()

const pageTitle = ref('MaterialPreparePreview 成员管理-资料信息查看')

const inputValue = ref(pageTitle.value)


</script>

<style lang="scss" scoped>
</style>
