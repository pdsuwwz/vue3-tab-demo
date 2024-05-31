<script lang="ts" setup>

/**
 * TestComponent
 */
defineOptions({
  name: 'TestComponent'
})

const route = useRoute()
const router = useRouter()

const pageTitle = ref('TestComponent')

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
