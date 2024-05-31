<script lang="ts" setup>

/**
 * ExampleComponentForm 组件示例-表单
 */
defineOptions({
  name: 'ExampleComponentForm'
})

const route = useRoute()

const router = useRouter()

const pageTitle = ref('ExampleComponentForm')

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
