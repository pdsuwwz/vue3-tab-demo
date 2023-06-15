<template>
  <n-grid
    :x-gap="6"
    :y-gap="6"
    cols="xs:1 s:2 m:3"
    item-responsive
    responsive="screen"
  >
    <n-gi
      v-for="(techItem, index) in configTechStack"
      :key="index"
    >
      <n-card
        hoverable
        :bordered="true"
        class="cursor-pointer"
      >
        <n-thing>
          <template
            #avatar
          >
            <n-avatar
              :style="{
                '--n-color': 'transparent',
              }"
            >
              <component :is="techItem.icon" />
            </n-avatar>
          </template>
          <template
            #header
          >
            {{ techItem.title }}
          </template>
          {{ techItem.desc }}
        </n-thing>
      </n-card>
    </n-gi>
  </n-grid>
</template>


<script lang="ts" setup>

defineOptions({
  name: 'TechStack'
})
const { isDark } = useTheme()


const configTechStack = shallowRef([
  {
    icon: defineAsyncComponent(
      () => import('@/assets/brand/logo-vue.svg')
    ),
    title: 'Vue',
    desc: '一款用于构建用户界面的 JavaScript 渐进式框架。',
    link: ''
  },
  {
    icon: defineAsyncComponent(
      () => import('@/assets/brand/logo-vite.svg')
    ),
    title: 'Vite',
    desc: '基于 原生 ES 模块',
    link: ''
  },
  {
    icon: defineAsyncComponent(
      () => import('@/assets/brand/logo-typescript.svg')
    ),
    title: 'TypeScript',
    desc: '',
    link: ''
  },
  {
    icon: defineAsyncComponent(
      () => import('@/assets/brand/logo-naive.svg')
    ),
    title: 'NaiveUI',
    desc: '',
    link: ''
  },
  {
    icon: defineAsyncComponent(
      () => import('@/assets/brand/logo-unocss.svg')
    ),
    title: 'UnoCSS',
    desc: '',
    link: ''
  },
  {
    icon: defineAsyncComponent(
      () => import('@/assets/brand/logo-pinia.svg')
    ),
    title: 'Pinia',
    desc: '',
    link: ''
  }
])


</script>

<style lang="scss" scoped>

</style>
