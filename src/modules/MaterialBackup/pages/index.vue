<script lang="ts" setup>

/**
 * MaterialBackupIndex 资料管理-备份与恢复-备份版本列表
 */
defineOptions({
  name: 'MaterialBackupIndex'
})

const route = useRoute()
const router = useRouter()

const pageTitle = ref('MaterialBackupIndex 资料管理-备份与恢复-备份版本列表')

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
