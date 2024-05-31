<script lang="ts" setup>
defineOptions({
  name: 'NoticeBoard'
})
const inputValue = ref('')
</script>


<template>
  <n-carousel
    autoplay
    :interval="2000"
  >
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
    >
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
    >
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
    >
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
    >
  </n-carousel>
</template>

<style lang="scss" scoped>
.carousel-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
