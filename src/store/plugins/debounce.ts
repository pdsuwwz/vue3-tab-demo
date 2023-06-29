import { store } from '..'
// 使用任意防抖库

store.use(({ options, store }) => {
  if (options.debounce) {
    // 我们正在用新的 action 来覆盖这些 action
    return Object.keys(options.debounce).reduce((debouncedActions, action) => {
      debouncedActions[action] = _.debounce(
        store[action],
        options.debounce![action]
      )
      return debouncedActions
    }, {})
  }
})
