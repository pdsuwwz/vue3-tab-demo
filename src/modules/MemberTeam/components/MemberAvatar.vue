<script lang="ts" setup>
import type { Size } from 'naive-ui/es/avatar/src/interface'

defineOptions({
  name: 'MemberAvatar'
})

defineProps({
  size: {
    type: [String, Number] as PropType<Size>,
    default: 'medium'
  },
  avatar: {
    type: String,
    default: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'
  },
  title: {
    type: String,
    default: ''
  },
  subTitle: {
    type: String,
    default: ''
  }
})

</script>


<template>
  <div
    class="flex items-center"
  >
    <n-avatar
      :src="avatar"
      round
      :size="size"
    />
    <div class="pl-12px">
      <div>{{ title }}</div>
      <n-text
        depth="3"
        tag="div"
      >
        {{ subTitle }}
      </n-text>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
