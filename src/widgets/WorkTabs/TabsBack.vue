<script lang="ts" setup>
import { ArrowBackUp } from '@vicons/tabler'


/**
 * 返回首页 - 🏠
 */
defineOptions({
  name: 'TabsBack'
})


const router = useTabRouter()

const handleJumpToHome = () => {
  router.push('/')
}
</script>

<template>
  <n-popover
    trigger="hover"
    placement="top-start"
  >
    <template #trigger>
      <div
        id="tabs-back-box"
        @click="handleJumpToHome()"
      >
        <n-icon
          :component="ArrowBackUp"
        />
      </div>
    </template>
    返回首页
  </n-popover>
</template>

<style lang="scss" scoped>
#tabs-back-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 32px;
  font-size: 14px;
  font-family: PingFangSC-Regular, "PingFang SC";
  font-weight: 400;
  background-color: transparent;
  padding: 0 11px 0 12px;
  border-radius: 8px 8px 0 0;
  margin-right: 2px;
  z-index: 0;
  cursor: pointer;
}
</style>
