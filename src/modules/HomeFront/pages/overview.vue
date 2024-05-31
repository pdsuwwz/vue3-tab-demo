<script lang="ts" setup>
import TechStack from '@/modules/HomeFront/components/TechStack.vue'
import QuickStart from '@/modules/HomeFront/components/QuickStart.vue'
import DynamicActivity from '@/modules/HomeFront/components/DynamicActivity.vue'
import NoticeBoard from '@/modules/HomeFront/components/NoticeBoard.vue'

/**
 * Dashboard Console 主控制台
 */
defineOptions({
  name: 'DashboardConsole'
})

const route = useRoute()
const router = useRouter()

const pageTitle = ref('Dashboard Console 主控制台')


const handlerPreviewDetail = () => {
  router.push({
    name: 'GroupProjectList'
  })
}


</script>


<template>
  <LayoutSection class="p-16px">
    <n-grid
      :x-gap="8"
      :y-gap="8"
      cols="5"
      item-responsive
      responsive="screen"
    >
      <n-gi
        span="xs:5 m:3"
      >
        <n-card
          :bordered="false"
          title="项目技术栈"
        >
          <TechStack />
        </n-card>
      </n-gi>
      <n-gi
        span="xs:5 m:2"
      >
        <n-card
          :bordered="false"
          class="h-full"
          title="快速访问"
        >
          <QuickStart />
        </n-card>
        <!-- m 以下：不显示<br>
        m 到 l：占据空间 1<br>
        l 以上：占据空间 2 -->
      </n-gi>

      <n-gi
        span="xs:5 m:3"
      >
        <n-card
          class="h-full"
          :bordered="false"
          title="实时动态"
        >
          <DynamicActivity />
        </n-card>
        <!-- m 以下：不显示<br>
        m 到 l：占据空间 1<br>
        l 以上：占据空间 2 -->
      </n-gi>
      <n-gi
        span="xs:5 m:2"
      >
        <n-card
          class="h-full"
          :bordered="false"
          title="公告/通知"
        >
          <NoticeBoard />
        </n-card>
        <!-- m 以下：不显示<br>
        m 到 l：占据空间 1<br>
        l 以上：占据空间 2 -->
      </n-gi>
    </n-grid>
  </LayoutSection>
</template>

<style lang="scss" scoped>
</style>
