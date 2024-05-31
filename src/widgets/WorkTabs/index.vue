<script lang="ts" setup>

import TabsController from './TabsController.vue'
import TabContent from './Content.vue'

defineOptions({
  name: 'WorkTabs'
})

const route = useRoute()

</script>


<template>
  <div class="work-tabs-container">
    <!-- <TabsController /> -->

    <div class="work-tabs__content">
      <TabContent />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.work-tabs-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .work-tabs__controller {
    display: flex;
    align-items: center;
    justify-content: space-between;
    user-select: none;
    padding: 16px 21px 0 24px;
    position: relative;
  }

  .work-tabs__controller::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    pointer-events: none;
    box-shadow: 0 1px 4px 0 rgb(0 0 0 / 8%);
  }

  .work-tabs__content {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
    overflow-y: auto;
  }
}
</style>
