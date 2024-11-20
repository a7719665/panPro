<template>
    <!-- <view>
      <web-view :src="prefixUrl + url" style="width: 100%; height: 100vh;"></web-view>
    </view> -->
    <div style="width:100%; height:100%; margin:0 auto 0; position:relative">
      <iframe class="iframe_wrap" :src="url + '&type=' + type"></iframe>
    </div>
  </template>
  

<script setup lang="ts">
import { useUserStore } from '@/stores/modules/userStore';
import { storeToRefs } from 'pinia';
const userStore = useUserStore();
const { prefixUrl } = storeToRefs(userStore);

const url = ref("");
const type = ref(1);
onLoad((options: any) => {
    // 获取传递的 type 参数
    type.value = options.type;
    url.value = options.url ;//+ '&type=' + type.value;
});
</script>