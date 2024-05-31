<script lang="ts" setup>
import TabsBack from './TabsBack.vue'
import TabsOutset from './TabsOutset.vue'
import TabsHeader from './Tabs.vue'
import TabsOptions from './TabsOptions.vue'

defineOptions({
  name: 'TabsController'
})

const route = useRoute()

const showTabs = computed(() => route.name !== 'GroupProjectList')
const showOutset = computed(() => route.name !== 'GroupProjectOverview')
</script>


<template>
  <div
    v-if="showTabs"
    class="work-tabs__controller bg-#fff dark:bg-#333333"
  >
    <TabsBack v-if="!showOutset" />
    <TabsOutset v-if="showOutset" />
    <TabsHeader />
    <TabsOptions />
  </div>
</template>

<style lang="scss" scoped>

.work-tabs__controller {
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;
  padding: 16px 21px 0 24px;
  position: relative;
  border-top: 1px solid rgb(0 21 41 / 8%);

  &::before {
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
}


</style>
