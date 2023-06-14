import useWorkTabsStore from './store'

export const useChangeCacheSpaceByUpdateRoute = () => {

  const workTabsStore = useWorkTabsStore()
  const route = useRoute()

  const _route = computed(() => route)

  const updateCacheSpace = (updateGuard: RouteLocationNormalizedLoaded) => {
    if (!updateGuard.meta?.cacheSpaceKey) return

    const dynamicCacheSpacePrefixKey = updateGuard.params.projectId || '__'
    const cacheSpace = workTabsStore.addCacheSpace(
      dynamicCacheSpacePrefixKey as string,
      {
        cacheSpaceKey: updateGuard.meta.cacheSpaceKey
      }
    )

    const workTab = workTabsStore.bindTabToCacheSpace(
      workTabsStore.createFactoryTabData({
        label: updateGuard.meta.title || '',
        customLabel: workTabsStore.singletonTabName,
        route: updateGuard
      })
    )

    cacheSpace.activeTabKey = workTab.tabKey
  }

  watch(
    () => _route.value.fullPath,
    () => {
      updateCacheSpace(_route.value)
    }
  )
  // 第一次初始化
  updateCacheSpace(_route.value)
}

/**
 * Keep Alive 再次进入页面的回调触发
 */
export const useCacheSpaceActivatedPage = (callback = (...args: any[]) => {}) => {

  const workTabsStore = useWorkTabsStore()
  const route = useRoute()

  const currentPageTabKey = workTabsStore.currentCacheSpace?.activeTabKey


  const _handler = watch(
    () => route.query,
    (newQuery, oldQuery) => {
      if (
        workTabsStore.currentCacheSpace?.activeTabKey === currentPageTabKey
      ) {
        callback(newQuery, oldQuery)
      }
    }
  )

  return _handler
}

// 判断当前tab是否是激活状态
export const useCacheSpaceActivating = () => {
  const route = useRoute()

  const workTabsStore = useWorkTabsStore()
  const currentPageTabKey = workTabsStore.currentCacheSpace?.activeTabKey
  const _computed = computed(
    () => route.matched.some(record => record.meta.title === '工作台') && workTabsStore.currentCacheSpace?.activeTabKey === currentPageTabKey
  )

  return _computed
}
