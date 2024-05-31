<script lang="ts" setup>
import { CloseOutline } from '@vicons/ionicons5'
import useWorkTabsStore from './store'
import type { WorkTab } from './types'

/**
 * Tabs 页签
 */

defineOptions({
  name: 'TabsHeader'
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

const refTabList = ref<HTMLElement>()

const { arrivedState } = useScroll(refTabList)
const { left: arrivedLeft, right: arrivedRight } = toRefs(arrivedState)


const refsTabs = ref<Array<HTMLElement>>([])
const updateFocusActiveTab = () => {
  setTimeout(async() => {
    await nextTick()
    refsTabs.value.find(el => {
      const isFinded = el.classList.contains('active')
      if (isFinded) {
        el.scrollIntoView()
      }
      return isFinded
    })
  })
}


const hasBothShadow = ref(false)

// 更新两端阴影
const updateShadow = useDebounceFn(() => {
  const { clientWidth, scrollWidth } = refTabList.value!
  if (clientWidth < scrollWidth) {
    hasBothShadow.value = true
  } else {
    hasBothShadow.value = false
  }
}, 200)


// 自动定位 tab
watch(
  () => workTabsStore.currentCacheSpace?.activeTabKey,
  () => {
    updateFocusActiveTab()
  },
  {
    immediate: true
  }
)

useMutationObserver(refTabList, () => {
  updateShadow()
}, {
  childList: true,
  subtree: true,
  attributes: true
})

useResizeObserver(refTabList, () => {
  updateShadow()
  updateFocusActiveTab()
})


const handlerByTabListRef = async(
  callback: (el: HTMLElement) => any
) => {
  await nextTick()
  if (!refTabList.value) return

  callback(refTabList.value)
}

const horizontalScroll = async(event: WheelEvent) => {
  handlerByTabListRef((el) => {
    el.scrollLeft += event.deltaY
  })
}

onMounted(async() => {
  handlerByTabListRef((el) => {
    el.addEventListener('wheel', horizontalScroll)
  })
})

onUnmounted(async() => {
  handlerByTabListRef((el) => {
    el.removeEventListener('wheel', horizontalScroll)
  })
})


</script>

<template>
  <div
    class="tabs-wrapper"
    :class="{
      'shadow-pseudo': hasBothShadow,
      'shadow-left': !arrivedLeft,
      'shadow-right': !arrivedRight
    }"
  >
    <ul
      v-if="workTabsStore.currentTabsInCacheSpace.length"
      ref="refTabList"
      class="tab-list-box"
    >
      <li
        v-for="(tabItem) in workTabsStore.currentTabsInCacheSpace"
        :key="tabItem.tabKey"
        ref="refsTabs"
        :class="[
          'tab-item-box',
          {
            'active': tabItem.tabKey === workTabsStore.currentCacheSpace?.activeTabKey
          }
        ]"
        @click="handleSwitch(tabItem)"
      >
        <span
          :title="tabItem.customLabel || tabItem.label"
          class="tab-item-label"
        >{{ tabItem.customLabel || tabItem.label }}</span>
        <div
          v-if="!isOnlyOneTab"
          class="tab-item-icon flex items-center"
          @click.stop="handleCloseTab(tabItem)"
        >
          <n-icon :component="CloseOutline" />
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>

.tabs-wrapper {
  flex: 1;
  position: relative;
  overflow: hidden;

  &.shadow-pseudo::after,
  &.shadow-pseudo::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 20px;
    pointer-events: none;
    opacity: 0;
    z-index: 1;
    transition: box-shadow .3s;
  }

  &.shadow-left::before {
    left: 0;
    opacity: 1;
    box-shadow: inset 10px 0 8px -8px rgb(0 0 0 / 20%);
  }

  &.shadow-right::after {
    right: 0;
    opacity: 1;
    box-shadow: inset -10px 0 8px -8px rgb(0 0 0 / 20%);
  }

  .tab-list-box {
    display: flex;
    align-items: center;
    height: 32px;
    overflow-x: auto;
    overscroll-behavior: none; // 阻止触底反弹

    &::-webkit-scrollbar {
      height: 0;
    }

    .tab-item-box {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 207px;
      min-width: 207px;
      height: 100%;
      padding: 0 11px 0 12px;
      cursor: pointer;
      transition: all .2s;
      border-radius: 8px 8px 0 0;
      margin-right: 2px;

      --at-apply: bg-#fcfcfc "dark:bg-#302f2f";

      &:last-child {
        margin-right: 0;
        transition: all .2s;
      }


      .tab-item-icon {
        margin-left: 14px;
        border-radius: 50%;

        --at-apply: c-#5a5a5a "dark:c-#e6e6e6";

        padding: 2px;
        font-weight: bolder;
        transition: background .3s;

        &:hover {
          --at-apply: bg-#e6e6e6 "dark:bg-#302f2f";
        }
      }

      .tab-item-label {
        flex: 1;
        min-width: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 14px;
        font-family: PingFangSC-Regular, "PingFang SC";
        font-weight: 400;

        --at-apply: c-#303133 "dark:c-#fff";
      }

      &:hover {
        --at-apply: bg-#f5f7f9 "dark:bg-#3e3e3e";

        & > .tab-item-icon {
          // color: #909399;
        }
      }

      &.active {
        --at-apply: bg-#cacfd8 "dark:bg-#1e1e20";

        & > .tab-item-label {
          --at-apply: "dark:c-#f5f7f9";
        }

        & > .tab-item-icon {
          // color: transparent;
        }

        &:hover {
          --at-apply: "dark:bg-#1e1e20";

          & > .tab-item-icon {
            // --at-apply: c-#909399 "dark:c-#b6b9c1";
          }
        }
      }
    }
  }
}


</style>
