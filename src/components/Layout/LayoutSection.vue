<script lang="ts">
/**
 * 上下布局，顶部 header 大标题 + 底部内容区域
 */
export default defineComponent({
  name: 'LayoutSection',
  props: {
    hasDivider: {
      type: Boolean,
      default: false
    },
    flexContent: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    }
  }
})
</script>

<template>
  <div class="layout-section-container">
    <div
      v-if="$slots.title || $slots.action"
      class="layout-section-container__header"
    >
      <h1
        v-if="$slots.title"
        class="layout-section-container__header-title c-#303133 dark:c-#fff text_nowrap"
      >
        <n-space class="flex items-center">
          <slot name="title"></slot>
        </n-space>
      </h1>
      <div
        v-if="$slots.action"
        class="layout-section-container__header-action"
      >
        <n-space class="flex items-center">
          <slot name="action"></slot>
        </n-space>
      </div>
    </div>
    <div class="layout-section-container__content">
      <div
        v-if="hasDivider"
        class="content-divider bg-#dcdfe6 dark:bg-#444"
      ></div>
      <div
        class="layout-section-container__content-inner"
        :class="{
          'is-flex': flexContent
        }"
      >
        <slot name="default"></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout-section-container {
  display: flex;
  flex-direction: column;
  height: 100%;

  .layout-section-container__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;

    .layout-section-container__header-title {
    }

    .layout-section-container__header-action {
    }
  }

  .layout-section-container__content {
    display: flex;
    flex-direction: column;
    position: relative;
    flex: auto;
    min-height: 0;
    overflow-y: auto;

    .content-divider {
      height: 1px;
      margin-bottom: 6px;
    }

    .layout-section-container__content-inner {

      &.is-flex {
        flex: 1;
        display: flex;
        flex-direction: column;
        height: 100%;
      }
    }
  }
}
</style>
