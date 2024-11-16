<template>
    <view class="container">
        <span class="ml-30rpx">请选择充值方式</span>
        <view class="recharge">
            <view @click="handleRecharge('人民币')">
                <img src="@/static/img/renming.png" alt="" />
                <p>人民币充值</p>
            </view>
            <view @click="handleRecharge('海外USDT')">
                <img src="@/static/img/haiwai.png" alt="" />
                <p>海外USDT充值</p>
            </view>
        </view>
    </view>
</template>
<script setup lang="ts">
const handleRecharge = (type: string) => {
    console.log(type);
    if (type === '人民币') {
        uni.navigateTo({
            url: '/pages/bankrecharge/index'
        });
    } else {
        uni.navigateTo({
            url: '/pages/bankrecharge/index'
        });
    }
};
</script>
<style lang="scss" scoped>
.container {
    width: 100vw;
    min-height: 100vh;
    background: linear-gradient(180deg, #24234c, #0f0f1c);
    color: #fff;
}
.recharge {
    width: 92%;
    margin: 30rpx auto;

    display: flex;
    justify-content: space-around;
    border: 1px solid hsla(0, 0%, 100%, .08);
   
    box-shadow: inset 0 40rpx 80rpx hsla(0, 0%, 100%, .1);
    border-radius: 20rpx;
    padding: 20rpx 0;
    span {
        margin: 0 30rpx;
        color: #fff;
        font-size: 30rpx;
        font-weight: 700;
    }
    img {
        width: 100rpx;
        display: block;
        margin: auto;
    }
    p {
       font-size: 28rpx;
        font-weight: 700;
        text-align: center;
        color: #fff;
        width: 240rpx;
        margin: 20rpx auto;
        line-height: 70rpx;
        border-radius: 80rpx;
        background: radial-gradient(50% 90%, #7582fc 0, #f355ff 100%);
    }
}
</style>
