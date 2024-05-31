<script lang="ts" setup>
import NavigationSideAction from '@/components/Navigation/Side/SideAction.vue'
import NavigationAvatar from '@/components/Navigation/Avatar.vue'
import NavigationChangeTheme from '@/components/Navigation/ChangeTheme.vue'
import NavigationFullScreen from '@/components/Navigation/FullScreen.vue'
import NavigationSideLogo from '@/components/Navigation/Side/SideLogo.vue'

import Octocat from '@/components/Octocat.vue'

defineOptions({
  name: 'NavigationNavBar'
})

const props = defineProps({
  fixed: {
    type: Boolean,
    default: false
  }
})
const { reloadRouterView } = useApplyForceReload()

const route = useRoute()

const isAuth = computed(() => {
  return route.name !== 'UserLogin'
})

</script>

<template>
  <header
    class="navigation-navbar-header-container"
    :class="{
      'fixed-header': fixed,
      'navbar-shadow dark:dark-navbar-shadow': isAuth,
      'login-navbar-shadow dark:shadow-none': !isAuth,
    }"
  >
    <div
      class="navbar-header-box"
      :class="{
        'bg-#fff dark:bg-#1e1e20': isAuth,
        'bg-#8d8b89 bg-opacity-30': !isAuth
      }"
    >
      <NavigationSideLogo
        :auth="isAuth"
      />
      <div style="flex: 1;"></div>
      <NavigationSideAction v-if="isAuth" />
      <n-tooltip>
        强制刷新路由
        <template #trigger>
          <div
            class="h-full text-1.5em i-material-symbols:refresh"
            flex="~ items-center"
            cursor-pointer
            @click="reloadRouterView()"
          >
          </div>
        </template>
      </n-tooltip>
      <NavigationChangeTheme />
      <Octocat />
      <NavigationFullScreen />
      <NavigationAvatar v-if="isAuth" />
    </div>
  </header>
</template>

<style lang="scss" scoped>
$headerHeight: 48px;

.navigation-navbar-header-container {
  height: $headerHeight;
  line-height: $headerHeight;

  &.fixed-header {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    z-index: 3;
  }

  // box-shadow: 0 1px 4px rgb(0 21 41 / 8%);

  .navbar-header-box {
    display: flex;
    height: 100%;
    padding-left: 16px;
    padding-right: 6px;
  }
}
</style>
