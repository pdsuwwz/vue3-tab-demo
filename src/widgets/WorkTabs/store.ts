import { isString } from '@/utils/type'
import { defineStore } from 'pinia'

import type {
  BaseCacheSpace,
  BeforeCloseFunction,
  CacheSpace,
  MultipleLinkItem,
  MultipleLinks,
  SubScribingClosedTabOptions,
  WorkTab
} from './types'

const useWorkTabsStore = defineStore('work-tabs',
  () => {
    const router = useRouter()
    /**
     * 单例 tab name，用于存储运行时的自定义 tab 标签名称
     */
    const singletonTabName = ref<string | null | undefined>()

    /**
     * 缓存空间集合
     */
    const allTabCacheSpaces = useSessionStorage(
      'allTabCacheSpaces',
      reactive(new Map<string, CacheSpace>())
    )

    /**
     * 当前 active 的缓存空间 key
     */
    const activeCacheSpaceKey = useSessionStorage(
      'activeCacheSpaceKey',
      ref<string | null>(null)
    )

    /**
     * 获取当前 active 的缓存空间
     */
    const currentCacheSpace = computed(
      () => {
        return allTabCacheSpaces.value.get(activeCacheSpaceKey.value!)
      }
    )

    /**
     * 获取当前缓存空间下的所有 tabs 集合
     */
    const currentTabsInCacheSpace = computed(
      (): Array<WorkTab> => {
        return currentCacheSpace?.value?.tabs || []
      }
    )

    /**
     * 获取当前缓存空间下的最后一个 tab
     */
    const lastTabInCurrentCacheSpace = computed(
      (): WorkTab => {
        const _len = currentTabsInCacheSpace.value.length
        return currentTabsInCacheSpace.value[_len - 1]
      }
    )

    /**
     * 获取当前 active 的 tab
     */
    const currentActiveTabInCurrentCacheSpace = computed<WorkTab>(
      () => {
        const tabs = currentTabsInCacheSpace.value
        const activeTabKey = currentCacheSpace.value!.activeTabKey

        const targetTab = tabs.find(
          tabItem => tabItem.tabKey === activeTabKey
        )!
        return targetTab
      }
    )

    /**
     * TODO: 可能由多个值组合生成 key
     * 项目 ID + baseKey
     */
    const createNewCacheSpaceKey = (dynamicCacheSpacePrefixKey: string, baseKey: string) => {
      // '项目ID: projectId' + baseKey
      return dynamicCacheSpacePrefixKey + baseKey
    }

    /**
     * 查询某个缓存空间中是否存在目标 tab，若存在则返回 tab 数据
     */
    const findTabByCacheSpaceKey = (dynamicCacheSpacePrefixKey: string, cacheSpaceKey: string, tabRouteName: RouteRecordName | undefined): WorkTab | undefined => {
      const _cacheSpace = allTabCacheSpaces.value.get(
        createNewCacheSpaceKey(dynamicCacheSpacePrefixKey, cacheSpaceKey)
      )
      if (!_cacheSpace) return

      const tab = _cacheSpace.tabs.find(
        tabItem => tabItem.routeName === tabRouteName
      )

      return tab
    }


    /**
     * Caches Set for keep-alive
     */
    const cachesKeepAliveInclude = useSessionStorage(
      'cachesKeepAliveInclude',
      reactive(new Set<RouteRecordName>())
    )

    /**
     * Getter for Caches keep-alive
     */
    const getterCachesKeepAliveInclude = computed(
      () => {
        return Array.from<any>(cachesKeepAliveInclude.value)
      }
    )

    /**
     * Add Cache to keep-alive 'include'
     */
    const addCacheToKeepAlive = (tabData: WorkTab) => {
      cachesKeepAliveInclude.value.add(tabData.routeName)
    }

    /**
     * Remove Cache from keep-alive 'include'
     */
    const removeCacheFromKeepAlive = (tabData: WorkTab) => {
      cachesKeepAliveInclude.value.delete(tabData.routeName)
    }


    /**
     * 对比两个 Tab 是否相同
     */
    const isEqualTab = (tabData1: WorkTab, tabData2: WorkTab) => {
      return tabData1.tabKey === tabData2.tabKey
    }

    /**
     * 构造一个 tab 页签数据
     */
    const createFactoryTabData = (
      {
        label,
        customLabel,
        route
      }: {
        label: string
        customLabel?: string | null | undefined
        route: RouteLocationNormalizedLoaded
      }
    ): WorkTab => {
      return {
        label: label ?? '',
        customLabel: customLabel ?? '',
        tabKey: route.path,
        link: route.fullPath,
        routeName: route.name!
      }
    }

    /**
     * 切换缓存空间
     */
    const changeOtherCacheSpace = (targetCacheSpace: CacheSpace) => {
      activeCacheSpaceKey.value = targetCacheSpace.cacheSpaceKey
    }

    /**
     * 在缓存空间内切换 tab 页签
     */
    const changeTabByCacheSpace = (tabData: WorkTab) => {
      const cacheSpace = currentCacheSpace.value!
      cacheSpace.activeTabKey = tabData.tabKey
      router.push(tabData.link)
    }

    /**
     * 初始化构造一个缓存空间数据
     */
    const createFactoryCacheSpace = (dynamicCacheSpacePrefixKey: string, targetCacheSpace: BaseCacheSpace): CacheSpace => {
      return {

        cacheSpaceKey: createNewCacheSpaceKey(
          dynamicCacheSpacePrefixKey,
          targetCacheSpace.cacheSpaceKey
        ),
        activeTabKey: null,
        tabs: []
      }
    }


    /**
     * 添加一个新的缓存空间
     */
    const addCacheSpace = (dynamicCacheSpacePrefixKey: string, targetCacheSpace: BaseCacheSpace) => {
      const _cacheSpaceKey = createNewCacheSpaceKey(dynamicCacheSpacePrefixKey, targetCacheSpace.cacheSpaceKey)

      let cacheSpace: CacheSpace
      if (allTabCacheSpaces.value.has(_cacheSpaceKey)) {
        cacheSpace = allTabCacheSpaces.value.get(_cacheSpaceKey)!
      } else {
        cacheSpace = createFactoryCacheSpace(dynamicCacheSpacePrefixKey, targetCacheSpace)
        allTabCacheSpaces.value.set(cacheSpace.cacheSpaceKey, cacheSpace)
      }

      // 设置为当前缓存空间为 active Key
      changeOtherCacheSpace(cacheSpace)
      return cacheSpace
    }


    /**
     * 将一个新的 tab 页签绑定到缓存空间中
     */
    const bindTabToCacheSpace = (tabData: WorkTab) => {
      const tabs = currentTabsInCacheSpace.value

      const _workTab = tabs.find((tabItem) => {
        return isEqualTab(tabItem, tabData)
      })

      addCacheToKeepAlive(tabData)

      if (_workTab) {
        // 保持更新 tab 的 fullpath（如 query 更新）
        _workTab.link = tabData.link

        if (tabData.customLabel) {
          _workTab.customLabel = tabData.customLabel
        }

        return _workTab
      }

      tabs.push(tabData)
      return tabData
    }


    /**
     * @dynamicCacheSpacePrefixKey 将多个 tab 页签绑定到同一个缓存空间中
     * @routeTabs 每个 tab 为一个 to 或者一个完整的 url 路径
     */
    const bindMultipleTabsToCacheSpace = (dynamicCacheSpacePrefixKey: string, routeTabs: MultipleLinks) => {
      if (!routeTabs.length) return

      const resolveRawTabRoute = (routeTab: string | MultipleLinkItem) => {
        let routeItem: RouteLocationRaw
        if (isString(routeTab)) {
          routeItem = routeTab
        } else {
          routeItem = routeTab.to
        }
        return routeItem
      }

      const firstRoute = resolveRawTabRoute(routeTabs[0])
      const _guard = router.resolve(firstRoute)

      addCacheSpace(
        dynamicCacheSpacePrefixKey,
        {
          cacheSpaceKey: _guard.meta.cacheSpaceKey!
        }
      )


      const _tabsMap = routeTabs.map((tabLinkData) => {

        const routeItem = resolveRawTabRoute(tabLinkData)
        const _guard = router.resolve(routeItem)


        let customLabel: string | undefined
        if (!isString(tabLinkData)) {
          customLabel = tabLinkData.tabName
        }

        const tabLabel = _guard.meta.title as string


        return bindTabToCacheSpace(
          createFactoryTabData({
            label: tabLabel,
            customLabel,
            route: _guard
          })
        )
      })

      changeTabByCacheSpace(_tabsMap[_tabsMap.length - 1])
    }

    const __subscribingClosedTab = ref<Array<SubScribingClosedTabOptions>>([])

    /**
     * 订阅关闭选项卡事件（按需, 若需要钩子阻止关闭 Tab 则再订阅）
     */
    const registerCloseTabEvent = (beforeCloseFunction: BeforeCloseFunction) => {

      const workTab = currentActiveTabInCurrentCacheSpace.value

      const targetClosedTab = __subscribingClosedTab.value.find(
        closedTabItem => (
          isEqualTab(workTab, closedTabItem.workTab)
        )
      )

      if (targetClosedTab) {
        return
      }

      __subscribingClosedTab.value.push({
        workTab,
        beforeCloseFunction
      })
    }

    /**
     * 在关闭某个 Tab 前通知对应组件 Component
     */
    const notifyBeforeCloseTabEvent = (workTab: WorkTab): Promise<true | Error> => {
      const targetClosedTab = __subscribingClosedTab.value.find(
        closedTabItem => (
          isEqualTab(workTab, closedTabItem.workTab)
        )
      )
      const targetClosedTabIndex = __subscribingClosedTab.value.findIndex(
        closedTabItem => (
          isEqualTab(workTab, closedTabItem.workTab)
        )
      )

      const SUCCESS_CLOSED = true

      if (!targetClosedTab) {
        return Promise.resolve(SUCCESS_CLOSED)
      }

      const p = targetClosedTab.beforeCloseFunction()

      return new Promise((resolve, reject) => {
        p.then(
          () => {
            __subscribingClosedTab.value.splice(targetClosedTabIndex, 1)
            resolve(SUCCESS_CLOSED)
          }
        )
        p.catch(
          err => reject(
            new Error(err || '关闭 Tab 失败')
          )
        )
      })
    }

    /**
     * 在缓存空间中移除某个 tab 页签
     */
    const removeTabFromCacheSpace = async(tabData: WorkTab) => {
      await notifyBeforeCloseTabEvent(tabData)

      const tabs = currentTabsInCacheSpace.value

      const _index = tabs.findIndex(
        tabItem => isEqualTab(tabItem, tabData)
      )
      const discardedTab = tabs.splice(_index, 1)[0]

      // 若存在同路由的页面，则不清除缓存
      const hasSameRoutePage = tabs.some(tabItem => (
        tabItem.routeName === discardedTab.routeName
      ))
      if (!hasSameRoutePage) {
        removeCacheFromKeepAlive(discardedTab)
      }

      // 删除 tab 后将 active 值更新为最后一个
      if (tabs.length !== 0) {
        changeTabByCacheSpace(lastTabInCurrentCacheSpace.value)
      }

      return discardedTab
    }

    /**
     * 在缓存空间中移除非当前 active 的其他所有 tab 页签
     */
    const removeOtherTabsFromCacheSpace = () => {
      const tabs = currentTabsInCacheSpace.value

      const activeTabKey = currentCacheSpace.value!.activeTabKey

      if (tabs.length <= 1) return

      const onlyOneTab = tabs.find(
        tabItem => tabItem.tabKey === activeTabKey
      )!

      tabs.forEach((tabData) => {
        if (isEqualTab(onlyOneTab, tabData)) {
          return
        }
        removeCacheFromKeepAlive(tabData)
      })

      tabs.splice(0, tabs.length, onlyOneTab)
    }


    /** ---------------------- Closed Tab Hooks | 关闭 Tab 相关钩子 ---------------------- **/

    /**
      使用示例:

      import useWorkTabsStore from '@/widgets/WorkTabs/store'
      const workTabsStore = useWorkTabsStore()

      workTabsStore.registerCloseTabEvent(
        async() => {
          const rr = Math.random()
          await sleep(2000)

          if (rr > 0.5) return Promise.resolve()

          return Promise.reject(new Error('xxxxx'))
        }
      )
     */

    // TODO: 待实现，针对右侧关闭其他所有 Tabs 按钮的钩子的处理

    /** ---------------------- Closed Tab Hooks | 关闭 Tab 相关钩子 ---------------------- **/


    return {

      singletonTabName,
      getterCachesKeepAliveInclude,
      allTabCacheSpaces,
      activeCacheSpaceKey,
      currentCacheSpace,
      currentTabsInCacheSpace,
      findTabByCacheSpaceKey,

      removeCacheFromKeepAlive,

      createNewCacheSpaceKey,
      addCacheSpace,
      changeOtherCacheSpace,
      bindTabToCacheSpace,
      bindMultipleTabsToCacheSpace,
      removeTabFromCacheSpace,
      removeOtherTabsFromCacheSpace,
      changeTabByCacheSpace,
      createFactoryCacheSpace,
      createFactoryTabData,

      // Closed Tab Hooks | 关闭 Tab 相关钩子
      __subscribingClosedTab,
      registerCloseTabEvent,
      notifyBeforeCloseTabEvent

    }
  }
)

export default useWorkTabsStore
