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


<template>
  <n-menu
    v-model:value="activeKey"
    class="work-menu select-none"
    :options="menuOptions"
    default-expand-all
    @update:value="handleSelect"
  />
</template>

<style lang="scss">
.work-menu {
  box-shadow: 2px 0 8px #1d23290d;
}
</style>
