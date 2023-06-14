<template>
  <div class="work-tabs-container">
    <div class="work-tabs__controller">
      <TabsOutset v-if="showOutset" />
      <TabsHeader />
      <!-- TODO: 需要将 element-plus 重构为 naive-ui 组件 -->
      <!-- <TabsOptions /> -->
    </div>

    <div class="work-tabs__content">
      <TabContent />
    </div>
  </div>
</template>


<script lang="ts" setup>
import TabsOutset from './TabsOutset.vue'
import TabsHeader from './Tabs.vue'
import TabsOptions from './TabsOptions.vue'
import TabContent from './Content.vue'

defineOptions({
  name: 'WorkTabs'
})

const route = useRoute()

const showOutset = computed(() => route.path.includes('/group-project'))

</script>

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
    background-color: #eaedf2;
    position: relative;
  }

  .work-tabs__controller::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    // box-shadow: 0 1px 4px 0 rgb(0 0 0 / 8%);
  }

  .work-tabs__content {
    flex: 1;
    min-height: 0;
    background-color: #fff;
    overflow-y: auto;
  }
}
</style>
