<script lang="ts" setup>

/**
 * NestedLevel4-1 多级菜单 四级菜单 4-1
 */
defineOptions({
  name: 'NestedLevel41'
})

const route = useRoute()

const router = useRouter()

const pageTitle = ref('NestedLevel4-1 多级菜单 四级菜单 4-1')

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
