# vue3-tab-demo

[![GitHub Workflow Status (branch)](https://img.shields.io/github/actions/workflow/status/pdsuwwz/vue3-tab-demo/deploy.yml?branch=main)](https://github.com/pdsuwwz/vue3-tab-demo/deployments/activity_log?environment=github-pages)
[![thanks](https://badgen.net/badge/thanks/♥/pink)](https://github.com/pdsuwwz)

[![License](https://img.shields.io/github/license/pdsuwwz/vue3-tab-demo?color=blue)](https://github.com/pdsuwwz/vue3-tab-demo/blob/main/LICENSE)
[![NaiveUI Version](https://img.shields.io/github/package-json/dependency-version/pdsuwwz/vue3-tab-demo/naive-ui?color=18a058)](https://github.com/pdsuwwz/vue3-tab-demo)
[![Vue Version](https://img.shields.io/github/package-json/dependency-version/pdsuwwz/vue3-tab-demo/vue?color=42b883)](https://github.com/pdsuwwz/vue3-tab-demo)
[![Vite Version](https://img.shields.io/github/package-json/dependency-version/pdsuwwz/vue3-tab-demo/dev/vite?color=ffd932)](https://github.com/pdsuwwz/vue3-tab-demo)


## 简介

🗂️ 一个基于 Vite6 + Vue3 + Naive UI + Pinia (v3) + TS + ESLint (v9) + Unplugin + Husky 的 Tab 切换选项卡演示项目，其内部抽象出了一个**比较贴近实战**的**项目管理系统**的业务场景，虽不涉及特别复杂的业务逻辑但也不失灵活，旨在更好地理解和展示如何使用 Tab 标签页组件，项目基于原子化 UnoCSS 框架配置主题，还自带一个模块化的组件开发环境，使页面组件、路由组件、状态管理和样式等模块可以根据 Modules 目录进行解耦，它是一个开箱即用的解决方案，也适合作为快速开发中后台前端，可用于学习和参考


__[🌈 Live Demo 在线体验](https://pdsuwwz.github.io/vue3-tab-demo)__


## 🌱 技术栈

* Naive UI 2.x
* Vue 3.5.x
* Vite 6.x + Vitest
* Pinia 3.x
* TypeScript 5.x
* ESLint 9.x + Stylistic
* Husky + lint-staged
* Lodash
* VueUse
* Unplugin + UnoCSS
* Iconify + Unplugin-Icons


## 🎉 Tab 核心特性
- [x] 支持按照一级 ID 进行划分的缓存空间集合，本示例的一级ID为 [projectId](src/router/frontend/index.ts#L547)，可加以[自行改造和将其耦合到组件内](src/widgets/WorkTabs/hook.ts#L13)
- [x] 支持命名空间的 Tab 集合
- [x] 支持 Caches 缓存, 用于 Keep Alive
- [x] 支持缓存空间的切换及内部 Tab 的添加/关闭
- [x] 支持一键关闭其他标签页
- [x] 支持多层级动态路由参数页面的缓存(如 `/xxxx/:id1`, `/xxxx/:id1/xxx/:id2`...)
- [x] 支持关闭 Tab 之前的 Hook 钩子, 用于手动处理阻止关闭 Tab 的逻辑
- [x] 支持同时打开多个 Tab
- [x] 支持 Tab 打开时自定义命名
- [x] 支持 Pinia 统一数据管理和本地 Session 存储 (可自由改造为 LocalStorage)


## 前置条件

* Vue 3.5.x
* Node >= 18.12.x
* Pnpm 9.x
* **VS Code 插件 `dbaeumer.vscode-eslint` >= v3.0.5 (pre-release)**

## 安装和运行

* 安装依赖

```bash
pnpm i
```

* 本地开发

```bash
pnpm dev
```


## 项目示例图

<img width="1680" alt="image" src="https://github.com/pdsuwwz/vue3-tab-demo/assets/19891724/90af35bb-af44-4d38-8545-67093535f06b">
<img width="1680" alt="image" src="https://github.com/pdsuwwz/vue3-tab-demo/assets/19891724/81dc718e-86c9-4abd-adcd-aed9d874577f">
<img width="1680" alt="image" src="https://github.com/pdsuwwz/vue3-tab-demo/assets/19891724/c3a7eede-1969-443b-a145-0f6a4b0c47d9">
<img width="1680" alt="image" src="https://github.com/pdsuwwz/vue3-tab-demo/assets/19891724/9ec11946-eccc-4162-b0ab-28a7ef32e27b">
<img width="1680" alt="image" src="https://github.com/pdsuwwz/vue3-tab-demo/assets/19891724/f1453c56-780c-4afd-a961-ed82e87e2298">

## 🧪 使用示例

* 打开单个 Tab

```ts
const router = useTabRouter()
router.push({
  name: 'Xxxxxx',
  params: {
    datasetId: row.xxxId
  }
}, `自定义名称-${row.xxxId}`)
```


* 同时打开多个 Tab

```ts
const router = useTabRouter()
router.pushMultiple(
  // 路由一级动态ID
  'xxxxprojectId',
  [
    {
      to: {
        name: 'Xxxx1',
        params: {
          datasetId: row.id
        },
        query: {
          query1: '123456'
        }
      },
      tabName: '自定义名称1'
    },
    {
      to: {
        name: 'Xxxx2',
      },
      tabName: '自定义名称2'
    },
  ]
)
```

或直接使用全路径：

```ts
// 路由一级动态ID
const prefixKey = route.params.projectId // 'xxxxprojectId'
router.pushMultiple(
  prefixKey,
  [
    `/group-project/${prefixKey}/dashboard/monitor`,
    `/group-project/${prefixKey}/work-platform`,
    `/group-project/${prefixKey}/work-platform/nested-level/level-1-2`,
  ]
)
```


## 🛠️ 缓存空间设计

由于每个 __WorkTab__ 代表一个路由页面，所以在设计初期就已经将以下核心概念引入到路由中，以方便更好的理解组件的设计理念:

<details>
<summary>路由 Layout 布局配置</summary><br>

Tab 组件本身已经解耦了 `TabContent` 区域和 `TabsController` 区域，所以只需要将两者简单结合封装即可完成路由布局的配置

本示例项目主要到涉及两个 Tab 路由布局, 感兴趣的可以直接看源码: [路由布局组件1](src/components/Layout/LayoutWork.vue), [路由布局组件2](src/components/Layout/LayoutArea.vue)

为确保 Tab 和路由不会有较强的耦合关系，缓存空间 Key 则以可插拔的形式绑定到路由元信息 `meta` 中，形如以下路由配置代码:

```ts
// src/router/frontend/test-routes.ts
export const testRoutesExample = {
  path: 'example-component',
  name: 'ExampleComponentRoot',
  component: LayoutWork, // 配置 Tab 路由布局
  redirect: {
    name: 'ExampleComponentBasic'
  },
  children: [
    {
      path: 'basic',
      name: 'ExampleComponentBasic',
      meta: {
        title: '组件示例-基础组件',
        cacheSpaceKey: CacheSpaceKeys.exampleComponent // 配置缓存空间 Key
      },
      component: () => import('@/modules/ExampleComponent/pages/basic.vue')
    },
    {
      path: 'form',
      name: 'ExampleComponentForm',
      meta: {
        title: '组件示例-表单',
        cacheSpaceKey: CacheSpaceKeys.exampleComponent // 配置缓存空间 Key
      },
      component: () => import('@/modules/ExampleComponent/pages/form.vue')
    },
    // ...
  ]
}
```

这样也就能确保具有相同缓存空间 Key 的路由(`WorkTab`)能够被归集到同一个缓存空间 `CacheSpace` 内

<br></details>

<details>
<summary>缓存空间与 Tab 的缓存</summary><br>

为尽可能地保证使用者无感知的使用体验并避免重复编码，这里通过监听 Vue Router 中 `route.fullPath` 的变化来实现自动触发 Tab 缓存的添加、切换等逻辑。具体的实现细节可以看[源码](src/widgets/WorkTabs/hook.ts#L32)

为了满足同时打开一个或多个自定义命名 Tab 的需求，并克服 Vue Router 自身的限制，项目中封装了 `useTabRouter` Hook 方法，用于替代原生的 `useRouter` 中的 `push` 和 `replace` 方法（也可以根据需要进行扩展）
在 `useTabRouter` 内部，采用了单例模式来处理每个Tab的自定义命名。感兴趣的可以深究对应[源码](src/hooks/useTabRouter.ts)

其核心就是利用 Vue Router 的 API 解决缓存空间的创建时机、缓存空间于 Tab 的关联以及 Tab 的自定义命名等问题。


以下是 Tab 缓存空间的核心结构设计:


* 单个缓存空间
```ts
export interface CacheSpace {
  cacheSpaceKey: string
  tabs: Array<WorkTab>
  activeTabKey: string | null
}
```

* 缓存空间集合

```ts
Map<cacheSpaceKey, CacheSpace>
```

* 单个 Tab 页签数据

```ts
export interface WorkTab {
  // 取自 meta.title 的 tab 标题名称
  label: string
  // 自定义 tab 标题名称
  customLabel: string
  tabKey: string
  link: string
  routeName: RouteRecordName
}

```
<br></details>



## 💡 注意事项

* Vue 组件名称需要与对应路由名称保持一致，否则 Keep Alive 将会失效
* 由于 Tab 组件自身解耦了所有的业务逻辑，所以涉及到路由一级动态 ID 这种跟业务路由强耦合的地方都需要再自行传入，嫌麻烦的可以直接修改源码中的所有 `dynamicCacheSpacePrefixKey` 字段或将相关 hook 二次封装一下。具体参考这两个位置：[源码1](src/widgets/WorkTabs/store.ts#L85) 和 [源码2](src/hooks/useTabRouter.ts#L50) 
* 若 Husky 未生效，可能是由于未完成初始化，执行 `pnpm run prepare` 进行初始化再尝试
* 推荐使用本项目进行二次开发和定制实际的业务项目



## 说明

* 如果此开源对您有帮助，您可以点右上角 "Star" 支持一下 谢谢！ ^_^ 🌹

* 或者您可以 "follow" 一下, 我会不断开源更多有趣和实用的项目

* 开发环境 MacOS Ventura, VSCode

* 如有问题请直接在 Issues 中提, 或者您发现问题并有非常好的解决方案, 欢迎 PR 👍

* 推荐一个 Vite6 + Vue3 + TS + Element Plus 开源入门项目, 对 Element Plus UI 库感兴趣的朋友可以去看看。[地址在这里](https://github.com/pdsuwwz/vite-ts-starter)

* 另外一个 Vite6 + Vue3 + Naive UI + TS 的入门项目, 比当前项目简洁很多, 非常适合入门练习和二次开发。[地址在这里](https://github.com/pdsuwwz/vite-naive-template)


## License

[MIT](./LICENSE) License | Copyright © 2023-PRESENT [Wisdom](https://github.com/pdsuwwz)

