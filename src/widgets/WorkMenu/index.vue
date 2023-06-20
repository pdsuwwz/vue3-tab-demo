<template>
  <n-menu
    v-model:value="activeKey"
    :options="menuOptions"
    default-expand-all
    class="select-none"
  />
</template>


<script lang="ts" setup>
import { _menuOptions } from './config'

defineOptions({
  name: 'WorkMenu'
})


const menuOptions = shallowRef(
  _menuOptions
)


const activeKey = ref<string | null>(null)
</script>

<style lang="scss" scoped>

</style>
