import { getFilterResponse } from '@/store/utils/mixin'
import router from '@/router'

export const pluginExternalProperties = ({ store }) => {
  store.filterResponse = getFilterResponse
  store.router = router
}
