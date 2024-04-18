/**
 * 演示效果用：
 *
 * 统一 WorkPlatform 下的所有路由的缓存空间 key
 */
const DefaultCacheSpaceKeyWorkPlatform = 'CacheSpaceKey_WorkPlatform'


/**
 * 工作台 Tabs 页签所属的缓存空间 Keys 常量
 *
 * 通过改变以下 key 来控制 Tab 是否属于同一个缓存空间
 *
 * 为演示效果，保证 WorkPlatform 下的路由 tab 都在一个页签下，目前均设置为了 DefaultCacheSpaceKeyWorkPlatform
 *
 * 也可根据实际业务自行改变以下 key 值
 */
export const CacheSpaceKeys = {
  /**
   * 缓存空间 Key -> 首页-Dashboard
   */
  dashboard: 'CacheSpaceKey_Dashboard',


  /**
   * 缓存空间 Key -> 成员管理-团队成员
   */
  // memberTeam: 'CacheSpaceKey_WorkPlatform_Member',
  memberTeam: DefaultCacheSpaceKeyWorkPlatform,

  /**
   * 缓存空间 Key -> 成员管理-角色权限分配
   */
  // memberAccess: 'CacheSpaceKey_WorkPlatform_Member',
  memberAccess: DefaultCacheSpaceKeyWorkPlatform,


  /**
   * 缓存空间 Key -> 资料管理-资料准备
   */
  // materialPrepare: 'CacheSpaceKey_WorkPlatform_MaterialPrepare',
  materialPrepare: DefaultCacheSpaceKeyWorkPlatform,

  /**
   * 缓存空间 Key -> 资料管理-资料审阅
   */
  // materialReview: 'CacheSpaceKey_WorkPlatform_MaterialReview',
  materialReview: DefaultCacheSpaceKeyWorkPlatform,

  /**
   * 缓存空间 Key -> 资料管理-备份与恢复
   */
  // materialBackup: 'CacheSpaceKey_WorkPlatform_MaterialBackup',
  materialBackup: DefaultCacheSpaceKeyWorkPlatform,


  /**
   * 缓存空间 Key -> 成本核算管理-预算设定
   */
  // costBudget: 'CacheSpaceKey_WorkPlatform_CostBudget',
  costBudget: DefaultCacheSpaceKeyWorkPlatform,

  /**
   * 缓存空间 Key -> 成本核算管理-数据收集
   */
  // costCollection: 'CacheSpaceKey_WorkPlatform_CostCollection',
  costCollection: DefaultCacheSpaceKeyWorkPlatform,

  /**
   * 缓存空间 Key -> 成本核算管理-分配和归集
   */
  // costDistribute: 'CacheSpaceKey_WorkPlatform_CostDistribute',
  costDistribute: DefaultCacheSpaceKeyWorkPlatform,

  /**
   * 缓存空间 Key -> 成本核算管理-分析和报告
   */
  // costAnalysis: 'CacheSpaceKey_WorkPlatform_CostAnalysis',
  costAnalysis: DefaultCacheSpaceKeyWorkPlatform,


  /**
   * 缓存空间 Key -> 多级菜单
   */
  // nestedLevel: 'CacheSpaceKey_WorkPlatform_NestedLevel',
  nestedLevel: DefaultCacheSpaceKeyWorkPlatform,

  /**
   * 缓存空间 Key -> 组件示例
   */
  // exampleComponent: 'CacheSpaceKey_WorkPlatform_ExampleComponent'
  exampleComponent: DefaultCacheSpaceKeyWorkPlatform

}
