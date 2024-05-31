<script setup lang="ts">
import {
  DrawerProvider,
  useDrawer
} from '@/components/Drawer'
import { useNotifyPlacement } from './context'

function registerNaiveTools() {
  window.$ModalMessage = useMessage()
  window.$ModalNotification = useNotification()
  window.$ModalDialog = useDialog()
  window.$ModalLoadingBar = useLoadingBar()
  window.$ModalDrawer = useDrawer()
}

const NaiveProviderWrapper = defineComponent({
  name: 'NaiveProviderWrapper',
  setup(props, { slots }) {
    registerNaiveTools()
    console.log('撒大叔2323232')
    return () => h('div')
  }
})

const { notifyPlacement } = useNotifyPlacement()
</script>

<template>
  <DrawerProvider>
    <NLoadingBarProvider>
      <NDialogProvider>
        <NNotificationProvider
          :placement="notifyPlacement"
        >
          <NMessageProvider>
            <slot></slot>
            <NaiveProviderWrapper />
          </NMessageProvider>
        </NNotificationProvider>
      </NDialogProvider>
    </NLoadingBarProvider>
  </DrawerProvider>
</template>
