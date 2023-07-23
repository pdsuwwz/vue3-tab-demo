import { _menuOptions } from './config'
import { routesWorkPlatform } from '@/router/frontend'

const findMenuPathNameByRouteName = (routeName: RouteRecordName | null | undefined) => {
  const findArrayTreePath = (arrayTree, name, pathStack = []) => {
    const findPath = (tree: any, name, pathStack: any[] = []) => {
      if (tree.name === name) return {
        name: tree.name,
        tree,
        path: pathStack
      }

      pathStack.push(tree.name)

      for (const node of tree.children || []) {
        const result = findPath(node, name, [...pathStack])
        if (result) return result
      }
    }
    for (const node of arrayTree) {
      const result = findPath(node, name, [...pathStack])
      if (result) return result
    }
  }
  return findArrayTreePath(routesWorkPlatform.children, routeName)
}


// 递归查找 tree 中下标对应值
function recursion (data, targetId, options: any = {}, callback: (...args: any[]) => void = () => {}) {
  options = Object.assign({}, {
    id: 'id',
    next: 'children'
  }, options)

  let result: any = null
  if (!data) {
    return
  }
  for (const i in data) {
    if (result !== null) {
      break
    }

    const item = data[i]
    if (item[options.id] === targetId) {
      callback(item, data)
      result = item
      break
    } else if (item[options.next] && item[options.next].length > 0) {
      result = recursion(item[options.next], targetId, options, callback)
    }
  }
  return result
}

export const useMenuHook = () => {

  const activeKey = ref<string | null>(null)
  const route = useRoute()
  const router = useRouter()

  const menuOptions = shallowRef(
    _menuOptions
  )

  let lockPush = false
  let isMounted = false
  const handleSelect = (key: string) => {
    lockPush = true
    isMounted = true
    router.push({
      name: key
    }).finally(() => {
      lockPush = false
    })
  }


  const setActiveKey = async (key: string) => {
    activeKey.value = key
    if (isMounted) return
    await nextTick()

    const selectedClassName = '.n-menu-item-content--selected'
    const el = document.querySelector(selectedClassName)
    el?.scrollIntoView()
  }

  watch(
    () => route.fullPath,
    (newRoute) => {
      if (
        lockPush ||
      !newRoute.includes('/work-platform') // 防止离开工作台后会继续 watch
      ) return

      const targetRoute = recursion(menuOptions.value, route.name, {
        id: 'key',
        next: 'children'
      })

      if (targetRoute) {
        const _activeKey = targetRoute.key as string
        setActiveKey(_activeKey)
        return
      }


      const { path } = findMenuPathNameByRouteName(route.name)
      const routeNamePaths = path.reverse()


      for (let index = 0; index < routeNamePaths.length; index++) {
        const _routePathName = routeNamePaths[index]
        const _configRecursion = recursion(menuOptions.value, _routePathName, {
          id: 'key',
          next: 'children'
        })

        if (_configRecursion) {
          setActiveKey(_routePathName)
          break
        }

      }

    },
    {
      immediate: true
    }
  )

  return {
    activeKey,
    menuOptions,
    handleSelect
  }
}
