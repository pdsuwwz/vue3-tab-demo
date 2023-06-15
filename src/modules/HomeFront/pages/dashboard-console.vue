<template>
  <div class="p-16px">
    <h1>{{ pageTitle }}</h1>
    <n-input v-model:value="inputValue" />
  </div>
  <n-grid
    :x-gap="6"
    :y-gap="6"
    cols="4"
    item-responsive
    responsive="screen"
  >
    <n-gi
      span="xs:4 s:3"
    >
      <n-card
        hoverable
        :bordered="false"
        class="cursor-pointer"
        title="项目技术栈"
      >
        <TechStack />
      </n-card>
    </n-gi>
    <n-gi
      span="xs:4 s:1"
    >
      <n-card
        hoverable
        :bordered="false"
        class="cursor-pointer"
        title="快速访问"
      />
      <!-- m 以下：不显示<br>
      m 到 l：占据空间 1<br>
      l 以上：占据空间 2 -->
    </n-gi>

    <n-gi
      span="xs:4 s:3"
    >
      <n-card
        hoverable
        :bordered="false"
        class="cursor-pointer"
        title="实时动态"
      >
        <!-- {{ cardConfigItem.title }} -->
      </n-card>
      <!-- m 以下：不显示<br>
      m 到 l：占据空间 1<br>
      l 以上：占据空间 2 -->
    </n-gi>
    <n-gi
      span="xs:4 s:1"
    >
      <n-card
        hoverable
        :bordered="false"
        class="cursor-pointer"
        title="公告/通知"
      >
        <!-- {{ cardConfigItem.title }} -->
      </n-card>
      <!-- m 以下：不显示<br>
      m 到 l：占据空间 1<br>
      l 以上：占据空间 2 -->
    </n-gi>
  </n-grid>
</template>



<script lang="ts" setup>
import TechStack from '@/modules/HomeFront/components/TechStack.vue'

/**
 * Dashboard Console 主控制台
 */
defineOptions({
  name: 'DashboardConsole'
})

const route = useRoute()
const router = useRouter()

const pageTitle = ref('Dashboard Console 主控制台')

const inputValue = ref(pageTitle.value)


</script>

<style lang="scss" scoped>
</style>
