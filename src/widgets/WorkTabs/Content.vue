<template>
  <router-view v-slot="{ Component }">
    <KeepAlive
      :include="workTabsStore.getterCachesKeepAliveInclude"
    >
      <Component
        :is="Component"
        :key="$route.path"
      />
    </KeepAlive>
  </router-view>
</template>

<script lang="ts" setup>
import useWorkTabsStore from './store'
import { useChangeCacheSpaceByUpdateRoute } from './hook'


defineOptions({
  name: 'TabContent'
})

const workTabsStore = useWorkTabsStore()

useChangeCacheSpaceByUpdateRoute()

</script>

<style lang="scss" scoped>

</style>
