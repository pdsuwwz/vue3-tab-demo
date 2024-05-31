<script lang="ts" setup>

/**
 * NestedLevel3-3 多级菜单 三级菜单 3-3 （目录层级）
 */
defineOptions({
  name: 'NestedLevel33'
})

const route = useRoute()

const router = useRouter()

const pageTitle = ref('NestedLevel3-3 多级菜单 三级菜单 3-3 （目录层级）')

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
