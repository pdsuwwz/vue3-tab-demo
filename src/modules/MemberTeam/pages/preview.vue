<script lang="ts" setup>

/**
 * MemberTeamPreview 成员管理-成员信息查看
 */
defineOptions({
  name: 'MemberTeamPreview'
})

import MemberEditor from '@/modules/MemberTeam/components/MemberEditor.vue'

const route = useRoute()

const userId = ref(route.params.datasetId as string)

</script>

<template>
  <LayoutPage>
    <MemberEditor
      title="成员管理-成员信息查看"
      :user-id="userId"
      readonly
    />
  </LayoutPage>
</template>

<style lang="scss" scoped>
</style>
