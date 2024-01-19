import { getFilterResponse } from '@/store/utils/mixin'

export const pluginExternalProperties = ({ store }) => {
  store.filterResponse = getFilterResponse
}
