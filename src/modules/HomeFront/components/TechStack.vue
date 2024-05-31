<script lang="ts" setup>

import LogoVue from '@/assets/brand/logo-vue.svg?url'
import LogoVite from '@/assets/brand/logo-vite.svg?url'
import LogoTypescript from '@/assets/brand/logo-typescript.svg?url'
import LogoNaive from '@/assets/brand/logo-naive.svg?url'
import LogoUnocss from '@/assets/brand/logo-unocss.svg?url'
import LogoPinia from '@/assets/brand/logo-pinia.svg?url'


defineOptions({
  name: 'TechStack'
})


const configTechStack = shallowRef([
  {
    icon: LogoVue,
    title: 'Vue',
    desc: '一款用于构建用户界面的 JavaScript 渐进式框架',
    link: 'https://vuejs.org/'
  },
  {
    icon: LogoVite,
    title: 'Vite',
    desc: '下一代的前端工具链, 基于原生 ES 模块, 为开发提供极速响应',
    link: 'https://vitejs.dev/'
  },
  {
    icon: LogoTypescript,
    title: 'TypeScript',
    desc: 'JavaScript 的超集, 为 JS 添加了类型支持',
    link: 'https://www.typescriptlang.org/'
  },
  {
    icon: LogoNaive,
    title: 'NaiveUI',
    desc: '图森未来开源的一个 Vue3 的组件库, 比较完整, 主题可调, 使用 TypeScript',
    link: 'https://www.naiveui.com/'
  },
  {
    icon: LogoUnocss,
    title: 'UnoCSS',
    desc: '一个高性能的原子化 CSS 引擎, 让你用简短的类名来控制元素的样式, 而无需编写 CSS 代码',
    link: 'https://unocss.dev/'
  },
  {
    icon: LogoPinia,
    title: 'Pinia',
    desc: '一个拥有组合式 API 的 Vue 状态管理库, 同时支持 Vue 2 和 Vue 3',
    link: 'https://pinia.vuejs.org/'
  }
])


const handleToLink = (techItem) => {
  window.open(techItem.link, '_blank')
}


</script>


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
        class="h-full cursor-pointer"
        @click="handleToLink(techItem)"
      >
        <n-thing>
          <template
            #avatar
          >
            <n-avatar
              :style="{
                '--n-color': 'transparent',
              }"
              :src="techItem.icon"
            >
              <!-- <img :src="techItem.icon"> -->
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

<style lang="scss" scoped>

</style>
