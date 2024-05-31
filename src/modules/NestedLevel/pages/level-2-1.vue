<script lang="ts" setup>

/**
 * NestedLevel2-1 多级菜单 二级菜单 2-1
 */
defineOptions({
  name: 'NestedLevel21'
})

const route = useRoute()

const router = useRouter()

const pageTitle = ref('NestedLevel2-1 多级菜单 二级菜单 2-1')

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
