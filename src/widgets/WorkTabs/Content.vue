<script lang="ts" setup>
import useWorkTabsStore from './store'
import { useChangeCacheSpaceByUpdateRoute } from './hook'


defineOptions({
  name: 'TabContent'
})

const workTabsStore = useWorkTabsStore()

useChangeCacheSpaceByUpdateRoute()

</script>

<template>
  <section class="flex flex-col flex-1 min-h-0">
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
  </section>
  <CustomFooter
    show-border
  />
</template>

<style lang="scss" scoped>

</style>
