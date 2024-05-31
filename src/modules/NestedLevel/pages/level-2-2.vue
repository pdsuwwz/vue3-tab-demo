<script lang="ts" setup>

/**
 * NestedLevel2-2 多级菜单 二级菜单 2-2 （目录层级）
 */
defineOptions({
  name: 'NestedLevel22'
})

const route = useRoute()

const router = useRouter()

const pageTitle = ref('NestedLevel2-2 多级菜单 二级菜单 2-2 （目录层级）')

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
