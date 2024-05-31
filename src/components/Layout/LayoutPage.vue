<script lang="ts" setup>
defineOptions({
  name: 'LayoutPage'
})

defineProps({
  padding: {
    type: Boolean,
    default: false
  }
})

</script>


<template>
  <div
    class="h-full overflow-y-auto"
    :class="{
      'px-10px py-12px': padding
    }"
  >
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>

</style>
