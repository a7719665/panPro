<template>
    <view class="container">
        <img src="@/static/img/lll.png" alt="" class="beitu" />

        <view class="return_warp_content" v-for="item in list" :key="item.id">
            <view class="return_content" >
                <p class="zq">{{ item.title }}</p>
                <view class="return_content_nav">
                    <view class="dhtupian"><img :src="prefixUrl + item.pic" alt="" /></view>
                    <view class="return_but">
                        <p>{{ item.con }}</p>
                        <span>{{ item.iskai }}</span>
                        <!---->
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>
<script lang="ts" setup>
import { getXindai } from '@/api';
import { useUserStore } from '@/stores/modules/userStore';
import { storeToRefs } from 'pinia';
const userStore = useUserStore();
const { prefixUrl } = storeToRefs(userStore);
const list = ref<any[]>([]);
onMounted(() => {
    getXindai().then((res:any) => {
        list.value = res.daihuan;
    });
});
</script>
<style scoped lang="scss">
.container {
    position: relative;
    padding-bottom: 300rpx;
    background: linear-gradient(180deg, #24234c, #0f0f1c);
}
.beitu {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
}
.return_warp_content {
    width: 90%;
    background-color: #17172f;
    border: 1px solid #fff;
    border-radius: 10rpx; /* 0.05rem * 200 */
    position: relative;
    top: 40rpx; /* 0.7rem * 200 */
    margin: auto auto 20rpx; /* 0.1rem * 200 */
    padding: 20rpx 0; /* 0.1rem * 200 */
}
.return_content {
    width: 94%;
    margin: auto;
}
.zq {
    font-size: 32rpx; /* 0.16rem * 200 */
    color: #b35900;
    font-weight: 700;
}
.return_content_nav {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    padding: 10rpx 0; /* 0.05rem * 200 */
}
.dhtupian {
    width: 48%;
    margin-right: 2%;
    img {
        width: 100%;
        display: block;
        margin: auto;
    }
}

.return_but {
    margin-left: 2%;
    flex: 1;
    font-weight: 700;

    p {
        font-size: 28rpx; /* 0.14rem * 200 */
        color: #fff;
    }
    span {
        font-size: 24rpx; /* 0.12rem * 200 */
        color: #fff;
        display: block;
        padding: 10rpx 0 20rpx; /* 0.05rem * 200 */
    }
}
</style>
