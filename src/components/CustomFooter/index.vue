<script lang="ts">
import Octocat from '@/components/Octocat.vue'

export default defineComponent({
  name: 'CustomFooter',
  components: {
    Octocat
  },
  props: {
    showBorder: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const link = ref('https://github.com/pdsuwwz')
    return {
      link
    }
  }
})
</script>

<template>
  <footer
    class="footer"
    :class="{
      'b-t b-t-solid b-t-#ededed dark:b-t-#444': showBorder
    }"
  >
    <div
      class="footer-container"
    >
      <p
        class="text"
      >
        <Octocat />
        MIT Licensed | Copyright © 2020-PRESENT <a
          target="_blank"
          :href="link"
          class="github-link c-#555 dark:c-#fff b-b b-b-solid b-b-[rgba(#3c3c43, 0.12)] dark:b-b-[rgba(#666, 0.12)]"
        >
          Wisdom
        </a>
      </p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  margin: 0 auto;
  width: 100%;

  .footer-container {
    padding: 12px 0;

    .text {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      margin: 0;
      text-align: center;
      line-height: 1;
      font-size: 1em;
      color: #929292;
    }
  }
}

.github-link {
  transition: border 0.3s ease-in-out;
  margin-left: 6px;

  &:hover {
    border-color: #7d7d7d;
  }
}
</style>
