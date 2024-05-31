<script lang="ts" setup>

/**
 * Dashboard Monitor 数据监测
 */
defineOptions({
  name: 'DashboardMonitor'
})

const route = useRoute()
const router = useRouter()

const pageTitle = ref('Dashboard Monitor 数据监测')

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
