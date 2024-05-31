<script lang="ts" setup>

import { CloseOutline } from '@vicons/ionicons5'
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

<template>
  <n-popover
    trigger="hover"
    style="width: 236px"
    :delay="300"
    class="tabs-options-box"
    flip
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
        <span
          v-if="!isOnlyOneTab"
          class="close-icon focus"
        >
          <n-icon
            :component="CloseOutline"
          />
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
            class="close-icon right"
            @click.stop="handleCloseTab(tabItem)"
          >
            <n-icon
              :component="CloseOutline"
            />
          </div>
        </li>
      </ul>
    </template>
  </n-popover>
</template>

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
    font-size: 14px;
    border-radius: 50%;
    padding: 2px;
    font-weight: bolder;
    transition: background .3s;
    cursor: pointer;


    --at-apply: c-#5a5a5a "dark:c-#e6e6e6";

    &.right:hover {
      --at-apply: bg-#fff "dark:bg-#302f2f";
    }

    &.focus {
      --at-apply: bg-#e6e6e6 "dark:bg-#666";
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
    cursor: pointer;
    opacity: 0.8;

    &.disabled {
      color: #c8c8c8;
      cursor: not-allowed;
      opacity: 0.6;

      &:hover {
        opacity: 0.6;
      }
    }

    &:hover {
      opacity: 1;
    }
  }

  .tabs-options-body {
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 8px;
    font-size: 14px;
    max-height: 350px;

    .tabs-options-list-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px;
      transition: .3s;
      cursor: pointer;
      margin-bottom: 4px;
      border-radius: 4px;

      &:last-child {
        margin-bottom: 0;
      }

      &.active {
        --at-apply: bg-#eee "dark:bg-#777";
      }

      &:hover {
        --at-apply: bg-#eff1f4 "dark:bg-#666";
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
