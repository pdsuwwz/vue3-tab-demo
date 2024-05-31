<script lang="ts" setup>

/**
 * MaterialBackupLog 资料管理-备份与恢复-日志记录
 */
defineOptions({
  name: 'MaterialBackupLog'
})

const route = useRoute()
const router = useRouter()

const pageTitle = ref('MaterialBackupLog 资料管理-备份与恢复-日志记录')

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
