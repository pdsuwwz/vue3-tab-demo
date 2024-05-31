<script lang="ts" setup>

/**
 * MemberTeamEdit 成员管理-成员信息编辑
 */
defineOptions({
  name: 'MemberTeamEdit'
})

import MemberEditor from '@/modules/MemberTeam/components/MemberEditor.vue'

const route = useRoute()

const userId = ref(route.params.datasetId as string)

</script>

<template>
  <LayoutPage>
    <MemberEditor
      title="成员管理-成员信息编辑"
      :user-id="userId"
      :readonly="false"
    />
  </LayoutPage>
</template>

<style lang="scss" scoped>
</style>
