<script lang="ts" setup>
import { BrandGravatar } from '@vicons/tabler'


defineOptions({
  name: 'DynamicActivity'
})
const activityList = ref([
  {
    id: 5,
    content: '电灯熄灭 物换星移 泥牛入海 黑暗好像 一颗巨石 按在胸口',
    time: '2022-10-07 12:30:30'
  },
  {
    id: 4,
    content: '电灯熄灭 物换星移 泥牛入海 黑暗好像 一颗巨石 按在胸口',
    time: '2022-10-07 12:30:30'
  },
  {
    id: 3,
    content: '电灯熄灭 物换星移 泥牛入海 黑暗好像 一颗巨石 按在胸口',
    time: '2022-10-07 12:30:30'
  },
  {
    id: 2,
    content: '电灯熄灭 物换星移 泥牛入海 黑暗好像 一颗巨石 按在胸口',
    time: '2022-10-07 12:30:30'
  },
  {
    id: 1,
    content: '电灯熄灭 物换星移 泥牛入海 黑暗好像 一颗巨石 按在胸口',
    time: '2022-10-07 12:30:30'
  }
])
</script>


<template>
  <n-list>
    <n-list-item
      v-for="(activityItem, index) in activityList"
      :key="index"
    >
      <template #prefix>
        <n-icon
          :component="BrandGravatar"
          class="text-36px"
        />
      </template>
      <n-thing
        :title="activityItem.content"
        :description="activityItem.time"
      />
    </n-list-item>
  </n-list>
</template>

<style lang="scss" scoped>

</style>
