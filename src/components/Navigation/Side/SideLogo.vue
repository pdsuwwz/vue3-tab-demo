<script lang="ts">
import { systemTitleZh } from '@/base'


export default defineComponent({
  name: 'NavigationSideLogo',
  props: {
    auth: {
      type: Boolean,
      default: true
    }
  },
  setup () {

    const title = computed(() => systemTitleZh)

    return {
      title
    }
  }
})
</script>

<template>
  <div
    class="side-logo-container"
  >
    <router-link
      :to="`/`"
    >
      <img
        class="side-logo-img"
        src="@/assets/brand/logo-naive.svg?url"
        alt="商标"
      >
      <h1
        class="side-logo-title c-#303133 dark:c-#fff"
        :class="{
          'c-#303133 dark:c-#fff': auth,
          'c-#fff dark:c-#303133': !auth,
        }"
      >
        {{ title }}
      </h1>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.side-logo-container {
  position: relative;
  height: 100%;
  white-space: nowrap;

  & > a {
    display: flex;
    align-items: center;
    height: 100%;

    .side-logo-img {
      width: 32px;
      height: 38px;
    }

    .side-logo-title {
      height: 32px;
      line-height: 32px;
      font-size: 16px;
      font-weight: 600;
      margin-left: 12px;
    }
  }
}
</style>
