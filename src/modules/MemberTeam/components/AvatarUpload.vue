<script lang="ts" setup>
defineOptions({
  name: 'AvatarUpload'
})

import { NButton, NIcon, NImage, NSpace, NUpload } from 'naive-ui'
import type { PopoverInst, UploadFileInfo } from 'naive-ui'

import { Pencil as IconPencil } from '@vicons/tabler'
import { UploadOutlined as IconUploadOutlined } from '@vicons/antd'
import { ArrowReset24Regular as IconArrowReset24Regular } from '@vicons/fluent'

import memberAvatar from '@/assets/images/member-avatar.png'

import * as FileHandler from '@/utils/fileHandler'

const refPopover = ref<PopoverInst>()
const avatarRef = ref<UploadFileInfo>()


const props = defineProps({
  disabled: {
    type: Boolean,
    default: false
  }
})
const avatarSource = defineModel<string>()

/**
 * 选择文件更新回调
 */
const handleChangeFile = async (options: { fileList: UploadFileInfo[]; }) => {
  refPopover.value!.setShow(false)
  avatarRef.value = options.fileList[0]

  FileHandler.fileToBase64Url(avatarRef.value.file)
    .then((url) => {
      avatarSource.value = url as string
    })
    .catch(() => {
      avatarSource.value = memberAvatar
    })
}

const handleResetDefault = () => {
  refPopover.value!.setShow(false)

  window.$ModalDialog.create({
    title: '恢复默认头像',
    closable: true,
    content: () => h(
      NSpace,
      {
        align: 'center',
        justify: 'center'
      },
      () => [
        '将',
        h(NImage, {
          width: 80,
          src: avatarSource.value
        }),
        '替换为 ➔',
        h(NImage, {
          width: 80,
          src: memberAvatar
        })
      ]
    ),
    positiveText: '确认恢复',
    async onPositiveClick () {
      avatarSource.value = memberAvatar
    }
  })
}


</script>


<template>
  <div class="avatar-upload-box relative">
    <n-avatar
      circle
      :size="150"
      :src="avatarSource"
    />
    <n-popover
      v-if="!disabled"
      ref="refPopover"
      trigger="click"
      raw
      placement="bottom-start"
    >
      <template #trigger>
        <n-button
          size="tiny"
          dashed
          strong
          type="primary"
          class="absolute left-50% bottom-16px translate-x--50%"
        >
          <n-icon
            class="mr-4px"
            :component="IconPencil"
          />
          编辑
        </n-button>
      </template>
      <n-space
        vertical
        justify="center"
        class="p-6px dark:bg-#424245"
      >
        <n-upload
          :default-upload="false"
          :show-file-list="false"
          @change="handleChangeFile"
        >
          <n-button
            text
            size="tiny"
          >
            <template #icon>
              <n-icon
                :component="IconUploadOutlined"
              />
            </template>
            上传图片
          </n-button>
        </n-upload>
        <n-button
          text
          size="tiny"
          @click="handleResetDefault()"
        >
          <template #icon>
            <n-icon
              :component="IconArrowReset24Regular"
            />
          </template>
          恢复默认
        </n-button>
      </n-space>
    </n-popover>
  </div>
</template>

<style lang="scss" scoped>
.avatar-upload-box {

}
</style>
