<script lang="ts" setup>
import { AppFolder20Regular } from '@vicons/fluent'


/**
 * 驾驶舱 - 🏠
 */
defineOptions({
  name: 'TabsOutset'
})


const router = useTabRouter()

const handleJumpToOverview = () => {
  router.push({
    name: 'GroupProjectDetail'
  })
}
</script>

<template>
  <div
    id="tabs-outset-box"
    @click="handleJumpToOverview()"
  >
    <n-icon
      :component="AppFolder20Regular"
    />
    <span
      v-if="false"
      class="tabs-outset-box-label"
    >驾</span>
  </div>
</template>

<style lang="scss" scoped>
#tabs-outset-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 32px;
  font-size: 14px;
  font-family: PingFangSC-Regular, "PingFang SC";
  font-weight: 400;
  background-color: $color-primary;
  padding: 0 11px 0 12px;
  border-radius: 8px 8px 0 0;
  color: #fff;
  margin-right: 2px;
  z-index: 0;
  cursor: pointer;

  .tabs-outset-box-label {
    padding-left: 3px;
  }
}
</style>
