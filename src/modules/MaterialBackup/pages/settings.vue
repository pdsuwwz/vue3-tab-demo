<script lang="ts" setup>

/**
 * MaterialBackupSettings 资料管理-备份与恢复-备份设置
 */
defineOptions({
  name: 'MaterialBackupSettings'
})

const route = useRoute()
const router = useRouter()

const pageTitle = ref('MaterialBackupSettings 资料管理-备份与恢复-备份设置')

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
