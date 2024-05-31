import type { getFilterResponse } from '@/store/utils/mixin'

import type {
  imageListRules,
  requiredEmailRules,
  requiredRadioRules,
  requiredRules,
  validatorRules
} from '@/utils/formRules'


declare module 'vue' {
  export interface VNode {
    destroy?: any
  }

  /**
   * Costom Instance.
   * proxy._t
   *
   */
  interface ComponentCustomProperties extends Window {
    _t: (str: string) => string
    getValidatorRules: (...args: any[]) => ReturnType<typeof validatorRules>
    getRequiredRules: (...args: any[]) => ReturnType<typeof requiredRules>
    getRequiredRadioRules: (...args: any[]) => ReturnType<typeof requiredRadioRules>
    getRequiredEmailRules: (...args: any[]) => ReturnType<typeof requiredEmailRules>
    getImageListRules: (...args: any[]) => ReturnType<typeof imageListRules>
  }
}

declare module 'axios' {
  /**
   * Costom Axios Field.
   */
  export interface AxiosRequestConfig {
    redirect?: string
    /**
     * 默认需要驼峰转译, 默认为 true
     */
    needCamelCase?: boolean
  }
}

declare module 'pinia' {
  /**
   * Costom Pinia Field.
   */
  export interface PiniaCustomProperties {
    filterResponse: typeof getFilterResponse
  }
  export interface DefineStoreOptionsBase<S, Store> {
    // 任意 action 都允许定义一个防抖的毫秒数
    debounce?: Partial<Record<keyof StoreActions<Store>, number>>
  }
}

declare module 'vue-router' {
  // export interface RouteRecordRaw {
  //   icon?: 'string'
  // }
  export interface RouteMeta {
    title?: string
    /**
     * 路由缓存空间的 Key, 用于 Tabs 页签的缓存
     * @example CacheSpaceKey_Xxxxxxx
     */
    cacheSpaceKey?: string
  }
}

export { }
