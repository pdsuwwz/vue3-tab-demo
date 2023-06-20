<template>
  <n-menu
    ref="refMenu"
    v-model:value="activeKey"
    class="select-none"
    :options="menuOptions"
    default-expand-all
    @update:value="handleSelect"
  />
</template>


<script lang="ts" setup>
import type { MenuInst, MenuOption } from 'naive-ui'
import { _menuOptions } from './config'

defineOptions({
  name: 'WorkMenu'
})

const route = useRoute()
const router = useTabRouter()
window.router = router

const menuOptions = shallowRef(
  _menuOptions
)

const activeKey = ref<string | null>(null)
const refMenu = ref<MenuInst>()

let lockPush = false
const handleSelect = (key: string) => {
  console.log('12121')
  lockPush = true
  router.push({
    name: key
  }).finally(() => {
    lockPush = false
  })
}

// watchEffect(() => {
//   if (lockPush) return

//   // 从 matched 中获取到最后一个元素的路由元信息（即当前 active 的路由）
//   // const index = 3
//   const index = route.matched.length - 1
//   console.log('route.matched', route.matched)
//   const currentRoute = route.matched[index]
//   const _activeKey = currentRoute.name as string

//   console.log(_activeKey)
//   activeKey.value = _activeKey
//   nextTick(() => {
//     refMenu.value?.showOption(_activeKey)
//   })
// })



</script>

<style lang="scss" scoped>

</style>
