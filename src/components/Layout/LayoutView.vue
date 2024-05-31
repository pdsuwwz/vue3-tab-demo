<script lang="ts" setup>

import NavigationNavBar from '@/components/Navigation/NavBar.vue'

defineOptions({
  name: 'LayoutView'
})
const { isRouterAlive } = useRegisterForceReload()
watch(
  () => isRouterAlive.value,
  () => {
    console.log('isRouterAlive', isRouterAlive.value)
  }
)

const { isWorkPlatform } = useWorkPlatform()

</script>

<template>
  <LayoutArea
    :min-height="isWorkPlatform"
  >
    <template #top>
      <NavigationNavBar />
    </template>
    <template #content>
      <router-view
        v-if="isRouterAlive"
        v-slot="{ Component }"
      >
        <Component :is="Component" />
      </router-view>
    </template>
  </LayoutArea>
</template>

<style lang="scss" scoped>
</style>
