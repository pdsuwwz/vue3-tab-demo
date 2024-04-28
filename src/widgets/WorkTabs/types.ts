/**
 * 单个 tab 页签
 */
export interface WorkTab {
  // 取自 meta.title 的 tab 标题名称
  label: string
  // 自定义 tab 标题名称
  customLabel: string
  tabKey: string
  link: string
  routeName: RouteRecordName
}


export interface BaseCacheSpace {
  cacheSpaceKey: string
}

/**
 * 单个缓存空间
 */
export interface CacheSpace extends BaseCacheSpace {
  tabs: Array<WorkTab>
  activeTabKey: string | null
}

export interface MultipleLinkItem {
  /**
   * 一个 to 或者一个完整的 url 路径
   */
  to: RouteLocationRaw
  /**
   * 自定义 tab 名称
   */
  tabName?: string
}

export type MultipleLinks = Array<MultipleLinkItem | string>

export type BeforeCloseFunction = () => Promise<any>


/**
 * Closed Tab Caches | 关闭 Tab 之前的钩子缓存
 */
export interface SubScribingClosedTabOptions {
  workTab: WorkTab
  beforeCloseFunction: BeforeCloseFunction
}
