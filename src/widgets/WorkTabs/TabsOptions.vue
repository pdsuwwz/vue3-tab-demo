<template>
  <n-popover
    trigger="hover"
    style="width: 236px"
    :delay="300"
    class="tabs-options-box"
    placement="bottom-start"
    @update:show="(showValue) => isKeepHover = showValue"
  >
    <template #trigger>
      <div
        class="tabs-options-action hover-bg-#cacfd8 dark:hover-c-#303133"
        :class="{
          'bg-#cacfd8 dark:c-#303133': isKeepHover
        }"
      >
        <n-icon
          :component="KeyboardDoubleArrowDownFilled"
        />
      </div>
    </template>
    <template #default>
      <div
        class="tabs-options-header"
        :class="{
          disabled: isOnlyOneTab
        }"
        @click="handleCloseOtherTabs()"
      >
        <span class="close-icon">
          <n-icon :component="IosCloseCircleOutline" />
        </span>
        <span class="close-other-text">关闭其他标签</span>
      </div>
      <ul class="tabs-options-body">
        <li
          v-for="(tabItem) in workTabsStore.currentTabsInCacheSpace"
          :key="tabItem.tabKey"
          class="tabs-options-list-item"
          :class="{
            active: tabItem.tabKey === workTabsStore.currentCacheSpace?.activeTabKey
          }"
          @click="handleSwitch(tabItem)"
        >
          <span
            :title="tabItem.customLabel || tabItem.label"
            class="tabs-options-label"
          >{{ tabItem.customLabel || tabItem.label }}</span>
          <div
            v-if="workTabsStore.currentTabsInCacheSpace.length !== 1"
            class="close-icon"
            @click.stop="handleCloseTab(tabItem)"
          >
            <IconFont icon="icon-error" />
          </div>
        </li>
      </ul>
    </template>
  </n-popover>
</template>

<script lang="ts" setup>

import { IosCloseCircleOutline } from '@vicons/ionicons4'
import { KeyboardDoubleArrowDownFilled } from '@vicons/material'
import useWorkTabsStore from './store'
import type { WorkTab } from './types'


/**
 * 最右侧二级 Tabs 控制器
 */
defineOptions({
  name: 'TabsOptions'
})

const router = useTabRouter()
const workTabsStore = useWorkTabsStore()

const isOnlyOneTab = computed(() => {
  return workTabsStore.currentTabsInCacheSpace.length === 1
})

const handleSwitch = (tabItem: WorkTab) => {
  router.push(tabItem.link)
}

const handleCloseTab = (tabItem: WorkTab) => {
  workTabsStore.removeTabFromCacheSpace(tabItem)
}

const handleCloseOtherTabs = () => {
  if (isOnlyOneTab.value) return

  workTabsStore.removeOtherTabsFromCacheSpace()
}

// 是否保持 action 的 hover 样式状态
const isKeepHover = ref(false)

</script>

<style lang="scss">
.tabs-options-action {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  margin-left: 10px;
  font-size: 20px;
  border-radius: 4px;
  transition: .3s;
  cursor: pointer;
  z-index: 0;
}

.tabs-options-box {
  display: flex;
  flex-direction: column;
  max-height: 490px;
  padding: 0 !important;
  user-select: none;

  .close-icon {
    display: flex;
    align-items: center;
    color: #b6b9c1;
    font-size: 14px;
    cursor: pointer;

    &:hover {
      color: #909399;
    }
  }

  .close-other-text {
    font-size: 14px;
    padding-left: 5px;
  }

  .tabs-options-header {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 36px;
    box-shadow: inset 0 -1px 0 0 #eee;
    color: #303133;
    cursor: pointer;

    &.disabled {
      color: #c8c8c8;
      cursor: not-allowed;

      .close-icon {
        cursor: not-allowed;
        color: #c8c8c8 !important;
      }
    }

    &:hover {

      .close-icon {
        color: #909399;
      }
    }
  }

  .tabs-options-body {
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 8px;
    font-size: 14px;

    .tabs-options-list-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px;
      transition: .3s;
      color: #303133;
      cursor: pointer;

      &.active {
        color: $color-primary;
      }

      &:hover {
        border-radius: 4px;
        background-color: #eff1f4;
      }

      .tabs-options-label {
        flex: 1;
        min-width: 0;
        padding-right: 9px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 14px;
        font-family: PingFangSC-Regular, "PingFang SC";
        font-weight: 400;
      }
    }
  }
}
</style>
