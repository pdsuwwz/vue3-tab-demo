import useWorkTabsStore from '@/widgets/WorkTabs/store'
import type { MultipleLinks } from '@/widgets/WorkTabs/types'

export const useTabRouter = () => {
  const route = useRoute()
  const router = useRouter()
  const workTabsStore = useWorkTabsStore()


  /**
   * 基于 tab 切换的自定义 router.push
   * @param tabName 自定义 Tab 名称
   */
  const push = (to: RouteLocationRaw, tabName?: string): Promise<NavigationFailure | void | undefined> => {
    if (tabName) {
      workTabsStore.singletonTabName = tabName
    }

    const p = router.push(to)
    p.then(() => {
      workTabsStore.singletonTabName = null
    })

    return p
  }

  /**
   * 基于 tab 切换的自定义 router.replace
   * @param tabName 自定义 Tab 名称
   */
  const replace = (to: RouteLocationRaw, tabName?: string): Promise<NavigationFailure | void | undefined> => {
    if (tabName) {
      workTabsStore.singletonTabName = tabName
    }

    const p = router.replace(to)
    p.then(() => {
      workTabsStore.singletonTabName = null
    })

    return p
  }


  /**
   * router.push 同时打开多个 tab 标签
   * @dynamicCacheSpacePrefixKey 缓存空间 key, 一般为 projectId
   * @routeTabs 每个 tab 为一个 to 或者一个完整的 url 路径
   */
  const pushMultiple = (dynamicCacheSpacePrefixKey: string, routeTabs: MultipleLinks) => {
    workTabsStore.bindMultipleTabsToCacheSpace(
      dynamicCacheSpacePrefixKey,
      routeTabs
    )
  }

  return {
    push,
    replace,
    pushMultiple,
    getRoutes: router.getRoutes
  }
}
