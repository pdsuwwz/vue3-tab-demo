<script lang="ts">
import { useResultStore } from '@/modules/Result/store'

export default defineComponent({
  name: 'ResultOverView',
  setup () {
    const resultStore = useResultStore()
    const route = useRoute()
    const overviewData = computed(() => resultStore.overviewData)

    async function init () {
      const { error, data } = await resultStore.getResultOverview({
        projectId: route.params.projectId
      })

      if (error) return

      console.log('overview', data)
    }

    init()
    return {
      overviewData
    }
  }
})
</script>

<template>
  <!-- <LayoutSection
    flex-content
    :title="overviewData.title"
  >
    <div class="h-full flex-1 b b-#dcdfe6 dark:b-#444 b-solid">
      {{ overviewData.content }}
    </div>
  </LayoutSection> -->
  <div class="h-full flex-1 b b-#dcdfe6 dark:b-#444 b-solid">
    {{ overviewData.content }}
  </div>
</template>

<style lang="scss" scoped>
.wrap-result-overview-content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 360px) 528px;
  grid-gap: 16px;
  padding-bottom: 16px;

  .grid-last {
    grid-column-start: span 2;
  }

  .fitting-operate {
    color: $color-primary;
    cursor: pointer;
  }
}
</style>
