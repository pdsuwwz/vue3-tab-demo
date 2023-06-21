<template>
  <n-menu
    v-model:value="activeKey"
    class="select-none"
    :options="menuOptions"
    default-expand-all
    @update:value="handleSelect"
  />
</template>


<script lang="ts" setup>
import { useMenuHook } from './hooks'

defineOptions({
  name: 'WorkMenu'
})


const {
  activeKey,
  menuOptions,
  handleSelect
} = useMenuHook()

</script>

<style lang="scss" scoped>

</style>
