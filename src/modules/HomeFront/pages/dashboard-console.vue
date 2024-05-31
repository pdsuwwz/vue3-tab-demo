
<script lang="ts" setup>
import { useResultStore } from '@/modules/Result/store'

import {
  Dashboard as IconDashboard,
  ReportMoney as IconReportMoney
} from '@vicons/tabler'
import {
  ProfileOutlined as IconProfileOutlined,
  TeamOutlined as IconTeamOutlined
} from '@vicons/antd'


/**
 * 项目整体概况 类似驾驶舱
 */
defineOptions({
  name: 'GroupProjectOverview'
})

const resultStore = useResultStore()
const route = useRoute()
const router = useRouter()

const overviewData = computed(() => resultStore.overviewData)


async function init () {
  const { error, data } = await resultStore.getResultOverview({
    projectId: route.params.projectId
  })

  if (error) return

  console.log('overview', data)
}

init()

type CardConfig = {
  title: string
  icon: Component
  routeName: string
}

const cardConfigOptions = shallowRef<Array<CardConfig>>([
  {
    title: '仪表盘',
    icon: IconDashboard,
    routeName: 'DashboardIndex'
  },
  {
    title: '成员管理页面',
    icon: IconTeamOutlined,
    routeName: 'MemberTeamManageRoot'
  },
  {
    title: '资料管理页面',
    icon: IconProfileOutlined,
    routeName: 'MaterialPrepareManageRoot'
  },
  {
    title: '成本核算管理页面',
    icon: IconReportMoney,
    routeName: 'CostBudgetManageRoot'
  }
])

const handlePreviewUrl = (cardItem: CardConfig) => {
  router.push({
    name: cardItem.routeName
  })
}


</script>

<template>
  <div class="h-full flex-1 b b-#dcdfe6 dark:b-#444 b-solid">
    <n-grid
      :x-gap="6"
      :y-gap="6"
      cols="xs:1 s:2 m:3 l:4"
      responsive="screen"
    >
      <n-gi
        v-for="(cardConfigItem, index) in cardConfigOptions"
        :key="index"
      >
        <n-card
          hoverable
          :bordered="false"
          class="cursor-pointer"
          @click="handlePreviewUrl(cardConfigItem)"
        >
          <template #header>
            <n-icon
              :size="30"
              :component="cardConfigItem.icon"
            />
          </template>
          {{ cardConfigItem.title }}
        </n-card>
      </n-gi>
    </n-grid>

    <div>
      {{ overviewData.content }}
    </div>
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
