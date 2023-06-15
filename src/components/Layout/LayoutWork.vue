<template>
  <div class="wrap-layout__work">
    <div
      class="common-work__sidebar"
    >
      <div class="resizable"></div>
      <div
        ref="refSidebar"
        class="resize-content"
      >
        <!-- <ProjectTree /> -->
        侧边栏
      </div>
      <div
        class="resize-line"
        :class="{
          'has-border': hasBorder
        }"
      ></div>
    </div>
    <div
      class="common-work__menu"
    >
      <!-- <Menu
        :is-put-away-menu="isPutAwayMenu"
        :route-info="routeWorkInfo"
      /> -->
    </div>
    <div class="common-work__body">
      <WorkTabs />
    </div>
  </div>
</template>


<script lang="ts">
export default defineComponent({
  name: 'LayoutWork'
})
</script>

<script lang="ts" setup>
import WorkTabs from '@/widgets/WorkTabs/index.vue'


const refSidebar = ref<HTMLElement>()
const hasBorder = ref(true)


</script>

<style lang="scss" scoped>
.wrap-layout__work {
  display: flex;
  height: 100%;

  .common-work__sidebar {
    position: relative;
    background-color: #f5f6f8;

    .resizable {
      overflow: scroll;
      resize: horizontal;
      cursor: ew-resize;
      opacity: 0;
      min-width: 340px;
      max-width: 1000px;
      height: calc(100vh - 56px);

      &::-webkit-scrollbar {
        width: 20px;
        height: inherit;
      }

      &:hover,
      &:active {

        &~.resize-line {
          transition: border .2s;
          border-left-color: $color-primary;
        }
      }
    }

    .resize-content {
      position: absolute;
      height: 100%;
      inset: 0 5px 0 0;
      overflow-y: auto;
      background-color: #f5f6f8;

      // box-shadow: 1px 0 0 0 #d3d7df;
    }

    .resize-line {
      position: absolute;
      height: 100%;
      top: 0;
      right: 0;
      bottom: 0;
      border-left: 2px dashed transparent;
      pointer-events: none;

      &.has-border {
        border-right: 1px solid #d3d7df;
      }
    }
  }

  .is-close-sidebar {
    display: none;
  }

  .common-work__menu {
  }

  .common-work__body {
    flex: 1;
    min-width: 0;
  }
}
</style>
