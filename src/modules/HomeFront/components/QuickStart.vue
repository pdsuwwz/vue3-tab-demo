<script lang="ts" setup>
import {
  Components as IconComponents,
  Dashboard as IconDashboard,
  ReportMoney as IconReportMoney
} from '@vicons/tabler'
import {
  MenuOutlined as IconMenuOutlined,
  ProfileOutlined as IconProfileOutlined,
  TeamOutlined as IconTeamOutlined
} from '@vicons/antd'


defineOptions({
  name: 'QuickStart'
})

const route = useRoute()
const router = useRouter()


type CardConfig = {
  title: string
  icon: Component
  routeName: string
}

const cardConfigOptions = shallowRef<Array<CardConfig>>([
  {
    title: '仪表盘',
    icon: IconDashboard,
    routeName: 'DashboardMonitor'
  },
  {
    title: '成员管理',
    icon: IconTeamOutlined,
    routeName: 'MemberTeamManageRoot'
  },
  {
    title: '资料管理',
    icon: IconProfileOutlined,
    routeName: 'MaterialPrepareManageRoot'
  },
  {
    title: '成本核算',
    icon: IconReportMoney,
    routeName: 'CostBudgetManageRoot'
  },
  {
    title: '组件示例',
    icon: IconComponents,
    routeName: 'ExampleComponentRoot'
  },
  {
    title: '多级菜单',
    icon: IconMenuOutlined,
    routeName: 'NestedLevelRoot'
  }
])

const handlePreviewUrl = (cardItem: CardConfig) => {
  router.push({
    name: cardItem.routeName
  })
}

</script>


<template>
  <n-grid
    :x-gap="6"
    :y-gap="6"
    cols="xs:2 s:3 m:2"
    responsive="screen"
    class="justify-between"
  >
    <n-gi
      v-for="(cardConfigItem, index) in cardConfigOptions"
      :key="index"
    >
      <n-card
        hoverable
        class="cursor-pointer"
        @click="handlePreviewUrl(cardConfigItem)"
      >
        <div
          class="flex flex-col justify-center items-center h-full"
        >
          <n-icon
            :size="30"
            :component="cardConfigItem.icon"
          />
          <span>{{ cardConfigItem.title }}</span>
        </div>
      </n-card>
    </n-gi>
  </n-grid>
</template>

<style lang="scss" scoped>

</style>
