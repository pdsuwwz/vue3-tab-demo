<script lang="ts" setup>

/**
 * Dashboard Schema Record 报表更新记录查看
 */
defineOptions({
  name: 'DashboardSchemaRecord'
})

const route = useRoute()
const router = useRouter()

const pageTitle = ref('Dashboard Schema Record 报表更新记录查看')

const inputValue = ref(route.params.recordId + pageTitle.value)


</script>

<template>
  <div class="p-16px">
    <h1>{{ pageTitle }}</h1>
    <n-input v-model:value="inputValue" />
  </div>
</template>

<style lang="scss" scoped>
</style>
