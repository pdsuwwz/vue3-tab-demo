<script lang="ts" setup>

/**
 * ExampleComponentTable 组件示例-表格
 */
defineOptions({
  name: 'ExampleComponentTable'
})

const route = useRoute()

const router = useRouter()

const pageTitle = ref('ExampleComponentTable 组件示例-表格')

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
