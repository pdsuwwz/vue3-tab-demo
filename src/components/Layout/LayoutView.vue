<template>
  <LayoutArea>
    <template #top>
      <NavigationNavBar />
    </template>
    <template #content>
      <router-view v-slot="{ Component }">
        <Component :is="Component" />
      </router-view>
    </template>
  </LayoutArea>
</template>

<script lang="ts" setup>

import NavigationNavBar from '@/components/Navigation/NavBar.vue'

defineOptions({
  name: 'LayoutView'
})

</script>

<style lang="scss" scoped>
</style>
