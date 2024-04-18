import { createPinia } from 'pinia'
import {
  pluginDebounceAction,
  pluginExternalProperties
} from '@/store/plugins'

const store = createPinia()

export function setupStore(app: App<Element>) {
  app.use(store)
}

store.use(pluginExternalProperties)
store.use(pluginDebounceAction)

export { store }
