<script lang="ts" setup>

/**
 * MaterialBackupNew 资料管理-备份与恢复-新建备份
 */
defineOptions({
  name: 'MaterialBackupNew'
})

const route = useRoute()
const router = useRouter()

const pageTitle = ref('MaterialBackupNew 资料管理-备份与恢复-新建备份')

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
