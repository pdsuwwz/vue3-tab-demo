<script lang="ts" setup>

/**
 * Dashboard Statistics 数据统计
 */
defineOptions({
  name: 'DashboardStatistics'
})

const route = useRoute()
const router = useRouter()

const pageTitle = ref('Dashboard Statistics 数据统计')

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
