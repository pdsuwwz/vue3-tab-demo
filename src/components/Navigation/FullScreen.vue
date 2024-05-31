<script lang="ts" setup>
import { FullScreenMaximize24Regular, FullScreenMinimize24Filled } from '@vicons/fluent'

defineOptions({
  name: 'NavigationFullScreen'
})

const { isFullscreen, toggle } = useFullscreen()

</script>


<template>
  <div class="flex items-center h-full cursor-pointer">
    <n-icon
      :size="22"
      :component="isFullscreen
        ? FullScreenMinimize24Filled
        : FullScreenMaximize24Regular"
      @click="toggle()"
    />
  </div>
</template>

<style lang="scss" scoped>

</style>
