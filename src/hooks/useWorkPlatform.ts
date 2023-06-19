export const useWorkPlatform = () => {
  const route = useRoute()

  const isWorkPlatform = computed(() => {
    return route.path.includes('/work-platform')
  })

  return {
    isWorkPlatform
  }
}
