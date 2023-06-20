const Layout = () => import('@/components/Layout/index.vue')
const LayoutWork = () => import('@/components/Layout/LayoutWork.vue')

import { CacheSpaceKeys } from './constants'

/** ------------------------- 多级菜单页面 ------------------------- */

export const testRoutesNested = {
  path: 'nested-level',
  name: 'NestedLevelRoot',
  component: LayoutWork,
  redirect: {
    name: 'NestedLevel11'
  },
  children: [
    {
      path: 'level-1-1',
      name: 'NestedLevel11',
      meta: {
        title: '多级菜单 1-1',
        cacheSpaceKey: CacheSpaceKeys.nestedLevel
      },
      component: () => import('@/modules/NestedLevel/pages/level-1-1.vue')
    },
    {
      path: 'level-1-2',
      name: 'NestedLevel12',
      children: [
        {
          path: '',
          name: 'NestedLevel12',
          meta: {
            title: '多级菜单 1-2',
            cacheSpaceKey: CacheSpaceKeys.nestedLevel
          },
          component: () => import('@/modules/NestedLevel/pages/level-1-2.vue')
        },
        {
          path: 'level-2-1',
          name: 'NestedLevel21',
          meta: {
            title: '多级菜单 2-1',
            cacheSpaceKey: CacheSpaceKeys.nestedLevel
          },
          component: () => import('@/modules/NestedLevel/pages/level-2-1.vue')
        },
        {
          path: 'level-2-2',
          name: 'NestedLevel22',
          children: [
            {
              path: '',
              name: 'NestedLevel22',
              meta: {
                title: '多级菜单 2-2',
                cacheSpaceKey: CacheSpaceKeys.nestedLevel
              },
              component: () => import('@/modules/NestedLevel/pages/level-2-2.vue')
            },
            {
              path: 'level-3-1',
              name: 'NestedLevel31',
              meta: {
                title: '多级菜单 3-1',
                cacheSpaceKey: CacheSpaceKeys.nestedLevel
              },
              component: () => import('@/modules/NestedLevel/pages/level-3-1.vue')
            },
            {
              path: 'level-3-2',
              name: 'NestedLevel32',
              meta: {
                title: '多级菜单 3-2',
                cacheSpaceKey: CacheSpaceKeys.nestedLevel
              },
              component: () => import('@/modules/NestedLevel/pages/level-3-2.vue')
            },
            {
              path: 'level-3-3',
              name: 'NestedLevel33',
              children: [
                {
                  path: '',
                  name: 'NestedLevel33',
                  meta: {
                    title: '多级菜单 3-3',
                    cacheSpaceKey: CacheSpaceKeys.nestedLevel
                  },
                  component: () => import('@/modules/NestedLevel/pages/level-3-3.vue')
                },
                {
                  path: 'level-4-1',
                  name: 'NestedLevel41',
                  meta: {
                    title: '多级菜单 4-1',
                    cacheSpaceKey: CacheSpaceKeys.nestedLevel
                  },
                  component: () => import('@/modules/NestedLevel/pages/level-4-1.vue')
                },
                {
                  path: 'level-4-2',
                  name: 'NestedLevel42',
                  meta: {
                    title: '多级菜单 4-2',
                    cacheSpaceKey: CacheSpaceKeys.nestedLevel
                  },
                  component: () => import('@/modules/NestedLevel/pages/level-4-2.vue')
                }
              ]
            }
          ]
        }
      ]
    },
    {
      path: 'level-1-3',
      name: 'NestedLevel13',
      meta: {
        title: '多级菜单 1-3',
        cacheSpaceKey: CacheSpaceKeys.nestedLevel
      },
      component: () => import('@/modules/NestedLevel/pages/level-1-3.vue')
    },
    {
      path: 'level-1-4',
      name: 'NestedLevel14',
      meta: {
        title: '多级菜单 1-4',
        cacheSpaceKey: CacheSpaceKeys.nestedLevel
      },
      component: () => import('@/modules/NestedLevel/pages/level-1-4.vue')
    }
  ]
}

/** ------------------------- 组件示例页面 ------------------------- */

export const testRoutesExample = {
  path: 'example-component',
  name: 'ExampleComponentRoot',
  component: LayoutWork,
  redirect: {
    name: 'ExampleComponentBasic'
  },
  children: [
    {
      path: 'basic',
      name: 'ExampleComponentBasic',
      meta: {
        title: '组件示例-基础组件',
        cacheSpaceKey: CacheSpaceKeys.exampleComponent
      },
      component: () => import('@/modules/ExampleComponent/pages/basic.vue')
    },
    {
      path: 'table',
      name: 'ExampleComponentTable',
      meta: {
        title: '组件示例-表格',
        cacheSpaceKey: CacheSpaceKeys.exampleComponent
      },
      component: () => import('@/modules/ExampleComponent/pages/table.vue')
    },
    {
      path: 'form',
      name: 'ExampleComponentForm',
      meta: {
        title: '组件示例-表单',
        cacheSpaceKey: CacheSpaceKeys.exampleComponent
      },
      component: () => import('@/modules/ExampleComponent/pages/form.vue')
    }
  ]
}

