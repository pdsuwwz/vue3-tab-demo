<script lang="ts" setup>
import TabsController from '@/widgets/WorkTabs/TabsController.vue'

/**
 * 上下左右布局，顶部导航 + (底部左侧侧边栏 + 底部右侧内容区域)
 */
defineOptions({
  name: 'LayoutArea'
})

defineProps({
  /**
   * 开启后，子内容高度扩大后不会撑开父容器高度
   */
  minHeight: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="layout-area-container bg-#fff dark:bg-#1e1e20">
    <div class="layout-area-container__top">
      <slot name="top"></slot>
      <TabsController />
    </div>
    <div class="layout-area-container__bottom">
      <!-- <aside
        v-if="$slots.side"
        :class="[
          'side-layout-area-menu-bar',
          'b-r-#dcdfe6 b-r b-r-solid',
          'dark:b-r-#444',
        ]"
      >
        <div class="layout-area-menu-bar__inner">
          <slot name="side"></slot>
        </div>
      </aside> -->
      <section
        class="flex-1"
        :class="{
          'overflow-y-auto': false,
          'min-h-0': minHeight
        }"
      >
        <slot name="content"></slot>
      </section>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$headerHeight: 48px;

.layout-area-container {
  display: flex;
  flex-direction: column;
  min-width: 100%;
  height: 100%;
  min-height: 100vh;
  overflow: hidden;

  .layout-area-container__top {
    z-index: 1;
  }

  .layout-area-container__bottom {
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-y: auto;

    .side-layout-area-menu-bar {
      position: relative;
      flex-direction: column;
      width: 256px;
      transition: width 0.28s;

      .layout-area-menu-bar__inner {
        position: absolute;
        inset: 0;
        overflow: hidden auto;
        padding: 24px;
        scroll-behavior: smooth;
      }
    }

    .content-section-container {
      display: flex;
      flex: auto;
      flex-direction: column;
      min-width: 0;

      .main-content-box {
        flex: auto;
        position: relative;
        overflow: auto;
      }
    }
  }
}
</style>
