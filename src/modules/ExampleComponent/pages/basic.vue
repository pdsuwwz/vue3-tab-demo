<script lang="ts" setup>

/**
 * ExampleComponentBasic 组件示例-基础组件
 */
defineOptions({
  name: 'ExampleComponentBasic'
})

const route = useRoute()

const router = useRouter()

const pageTitle = ref('ExampleComponentBasic 组件示例-基础组件')

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
