<script lang="ts" setup>

import { omit } from 'lodash-es'
import { isFunction } from '@/utils/type'
import { lightTheme } from 'naive-ui'

const { theme, themeOverrides } = useTheme()

type Attrs = {
  path: string
  rule: () => any
}

interface FormConfigOptions {
  attrs: Attrs
  link?: any
  type?: string
  label: string
  prefixIcon?: Component
  showPasswordOn?: string
  placeholder: string
}

type ActionOnEvent = {
  click: (...args: any[]) => any
}
interface ActionOptions {
  attrs: any
  text: string
  on: ActionOnEvent
}

defineOptions({
  name: 'UserAccountContainerLayout'
})

const props = defineProps({
  title: {
    type: String,
    default: '',
    required: true
  },
  titleIcon: {
    type: String,
    default: ''
  },
  desc: {
    type: String,
    default: ''
  },
  actionList: {
    type: Array as PropType<Array<ActionOptions>>,
    default () {
      return []
    },
    required: true
  },
  formData: {
    type: Object,
    default () {
      return {}
    },
    required: true
  },
  formConfig: {
    type: Array as PropType<Array<FormConfigOptions>>,
    default () {
      return []
    },
    required: true
  }
})

const emits = defineEmits([
  'on-submit'
])

const { proxy } = useCurrentInstance()
const boxForm = ref<FormInst | null>(null)

function getInputItemAttrs (formItem: any) {

  return {
    // clearable: true,
    placeholder: formItem.placeholder,
    type: formItem.type,
    showPasswordOn: formItem.showPasswordOn
  }
}

function getFormItemAttrs (attrs: any) {
  const rule = isFunction(attrs.rule)
    ? attrs.rule.call(proxy)
    : ''

  return {
    rule,
    ...omit(attrs, ['rule'])
  }
}

function getActionItemEvent (on: any) {
  const onEvent: any = {}
  Object.keys(on).forEach((onItem) => {
    onEvent[onItem] = on[onItem].bind(proxy.$parent, boxForm.value)
  })
  return onEvent
}


const getEmailAutoCompleteOptions = (valueRef) => {
  return ['@admin.com', '@test.com', '@qq.com'].map((suffix) => {
    const prefix = valueRef.split('@')[0]
    return {
      label: prefix + suffix,
      value: prefix + suffix
    }
  })
}

function handleClickLink (link: any) {
  link.click.call(proxy.$parent, boxForm.value)
}

function onSubmit () {
  emits('on-submit', boxForm.value)
}

defineExpose({
  refBoxForm: boxForm
})

</script>

<template>
  <div class="user-account-container-layout bg-#fff">
    <div class="form-title">
      <div class="form-title-icon">
        <IconFont
          v-if="titleIcon"
          :icon="titleIcon"
        />
        <slot name="titleIcon"></slot>
      </div>
      <p class="form-title-text">
        {{ title }}
      </p>
      <p class="form-desc-text">
        {{ desc }}
      </p>
    </div>
    <NConfigProvider
      :theme="lightTheme"
      :theme-overrides="themeOverridesLight"
    >
      <n-form
        ref="boxForm"
        :model="formData"
        label-placement="top"
        :show-require-mark="false"
        @keyup.enter="onSubmit()"
      >
        <template
          v-for="(formItem, index) in formConfig"
          :key="index"
        >
          <n-form-item
            v-bind="getFormItemAttrs(formItem.attrs)"
          >
            <template #label>
              <div class="form-custom-label">
                {{ formItem.label }}
                <n-button
                  v-if="formItem.link"
                  text
                  tag="a"
                  type="primary"
                  tabindex="-1"
                  @click="handleClickLink(formItem.link)"
                >
                  {{ formItem.link.text }}
                </n-button>
              </div>
            </template>

            <n-auto-complete
              v-if="formItem.type === 'email'"
              v-model:value="formData[formItem.attrs.path]"
              v-bind="getInputItemAttrs(formItem)"
              :input-props="{
                autocomplete: 'disabled'
              }"
              :options="getEmailAutoCompleteOptions(formData[formItem.attrs.path])"
              blur-after-select
            />
            <n-input
              v-else
              v-model:value="formData[formItem.attrs.path]"
              v-bind="getInputItemAttrs(formItem)"
            >
              <template
                v-if="formItem.prefixIcon"
                #prefix
              >
                <n-icon>
                  <component
                    :is="formItem.prefixIcon"
                  />
                </n-icon>
              </template>
            </n-input>
          </n-form-item>
        </template>
        <div
          v-for="(actionItem, index) in actionList"
          :key="`${index}-`"
          class="submit-form-action-list"
        >
          <n-button
            v-bind="actionItem.attrs"
            class="submit-form-action-button"
            v-on="getActionItemEvent(actionItem.on) || {}"
          >
            {{ actionItem.text }}
          </n-button>
        </div>
      </n-form>
    </NConfigProvider>
  </div>
</template>

<style lang="scss" scoped>
.user-account-container-layout {
  width: 438px;
  margin-right: 80px;
  padding: 50px 34px 60px;
  box-shadow: 3px 6px 12px 0 rgb(0 0 0 / 15%), 1px 4px 8px 0 rgb(0 0 0 / 15%);
  border-radius: 6px;
  user-select: none;

  &:deep(){

    .n-form-item-label__text {
      width: 100%;
    }
  }

  .form-custom-label {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    font-weight: 600;
  }

  .form-title {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding-bottom: 30px;

    .form-title-icon {
      width: 32px;
      font-size: 0;
      margin-right: 10px;

      &:deep() {

        & > * {
          width: inherit;
          font-size: 32px;
        }
      }
    }

    .form-title-text {
      font-size: 26px;
      font-weight: 600;
      color: #777;
    }

    .form-desc-text {
      font-size: 16px;
      font-weight: 400;
      line-height: 26px;
      padding: 44px 0 0;
      color: #777;
    }
  }
}

.input-icon-lock {
  cursor: pointer;
}

.submit-form-action-list {
  display: flex;
  margin-top: 40px;

  .submit-form-action-button {
    flex: 1;
  }
}

@media screen and (width <= 600px) {

  .user-account-container-layout {
    width: 95%;
    margin: auto;
  }
}
</style>
