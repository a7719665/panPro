<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title text-red!">{{ title }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { BusinessRecord } from "@/api/types";
// import { getPzhiye } from '@/api';

// import { ref } from 'vue'
// const title = ref('Hell222o')
const title = ref('mememe')
// console.log(import.meta.env.VITE_APP_BASE_URL)
// getPzhiye('1').then((res) => {
//   console.log(res);
// });
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  // align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 100rpx;
  // margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
