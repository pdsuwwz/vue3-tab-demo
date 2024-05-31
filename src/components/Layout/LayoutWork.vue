<script lang="ts">
export default defineComponent({
  name: 'LayoutWork'
})
</script>


<script lang="ts" setup>
import WorkMenu from '@/widgets/WorkMenu/index.vue'
import WorkTabs from '@/widgets/WorkTabs/index.vue'


const refSidebar = ref<HTMLElement>()
const hasBorder = ref(false)


</script>

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
        <!-- <div>侧边栏</div> -->
        <WorkMenu />
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

<style lang="scss" scoped>
.wrap-layout__work {
  display: flex;
  height: 100%;

  .common-work__sidebar {
    position: relative;
    height: inherit;

    --at-apply: sidebar-shadow "dark:dark-sidebar-shadow";

    .resizable {
      overflow: scroll;
      resize: horizontal;
      cursor: ew-resize;
      opacity: 0;
      min-width: 340px;
      max-width: 1000px;
      height: inherit;

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

      // inset: 0 5px 0 0;

      inset: 0;
      overflow-y: auto;

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
        // border-right: 1px solid #d3d7df;

        --at-apply: b-r b-r-solid b-r-#d3d7df "dark:b-r-#444";
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
