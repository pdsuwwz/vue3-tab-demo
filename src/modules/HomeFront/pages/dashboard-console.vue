<template>
  <div class="p-16px">
    <h1>{{ pageTitle }}</h1>
    <n-input v-model:value="inputValue" />
  </div>
</template>

<script lang="ts" setup>

/**
 * Dashboard Console 主控制台
 */
defineOptions({
  name: 'DashboardConsole'
})

const route = useRoute()
const router = useRouter()

const pageTitle = ref('Dashboard Console 主控制台')

const inputValue = ref(pageTitle.value)


</script>

<style lang="scss" scoped>
</style>
