<template>
    <div class="illustrate_warp">
        <div class="vux-header">
            <div class="vux-header-left"><a class="vux-header-back"></a>
                <div class="left-arrow"></div>
            </div>
            <h1 class="vux-header-title"><span style="display: none;"></span></h1> <!---->
            <div class="vux-header-right"><!----> </div>
        </div> <img src="@/static/img/qiandaosm.png" alt="">
        <div class="illustrate"><!---->
            <p>
            <p>平台运行时间早上9：00至晚上23：00</p>
            <p>每天签到即可领取2积分<br><br>普通会员每日签到可获得6元<br><br>VIP1每日签到可获得13元<br><br>VIP2每日签到可获得20元<br><br>VIP3每日签到可获得30元<br><br>VIP4每日签到可获得58元<br><br>VIP5每日签到可获得88元
            </p>
            </p>
        </div>
    </div>
</template>
<script setup lang="ts">
//规则type
const type = ref(1);
onLoad((options: any) => {
    // 获取传递的 type 参数
    type.value = options.type;
    console.log('接收到的 type 参数:', type.value);
});

onMounted((options: any) => {

});
</script>
<style scoped lang="scss">
.illustrate_warp {
    background: -webkit-gradient(linear, left top, left bottom, from(#24234c), to(#0f0f1c));
    background: linear-gradient(180deg, #24234c 0%, #0f0f1c 100%);
    height: 100%;
}

.illustrate_warp img {
    width: 100%;
}

.illustrate_warp .illustrate {
    position: relative;
    bottom: 60rpx;
    border: solid #ffffff 1rpx;
    margin: 0 40rpx;
    border-radius: 20rpx;
}

.illustrate_warp .illustrate p {
    padding: 40rpx 20rpx;
    color: #ffffff;
    font-size: 24rpx;
}

.integral_warp {
    background: -webkit-gradient(linear, left top, left bottom, from(#24234c), to(#0f0f1c));
    background: linear-gradient(180deg, #24234c 0%, #0f0f1c 100%);
    min-height: 100%;
    position: relative;
    padding-bottom: 60rpx;
}

.integral_warp .integral {
    padding-top: 100rpx;
}

.integral_warp .integral img {
    position: absolute;
    width: 90%;
    left: 40rpx;
    display: block;
}

.integral_warp .integral .da {
    position: relative;
    z-index: 2;
    padding-left: 60rpx;
    padding-top: 60rpx;
}

.integral_warp .integral .da p {
    color: #b35900;
    font-size: 48rpx;
}

.integral_warp .integral .da span {
    color: #000000;
    font-size: 28rpx;
    padding-top: 6rpx;
    display: block;
}

.integral_warp .Popular {
    padding-top: 120rpx;
    text-align: center;
    display: block;
    margin: 40rpx 0;
}

.integral_warp .Popular img {
    width: 30%;
    padding: 0 10rpx;
}

.integral_warp .Popular span {
    color: #ffffff;
    font-size: 32rpx;
}

.integral_warp .commodity_warp {
    width: 96%;
    margin: auto;
}

.integral_warp .commodity_warp .commodity {
    float: right;
    width: 46%;
    margin: 10rpx 4%;
}

.integral_warp .commodity_warp .commodity img {
    width: 100%;
    height: 140rpx;
    display: block;
    border-radius: 20rpx 20rpx 0 0;
}

.integral_warp .commodity_warp .commodity .data {
    background-color: rgba(255, 255, 255, 0.5);
    padding: 20rpx 0;
    bottom: 20rpx;
    border-radius: 0 0 20rpx 20rpx;
    line-height: 60rpx;
}

.integral_warp .commodity_warp .commodity .data p {
    color: #d43030;
    font-size: 34rpx;
    text-align: center;
}

.integral_warp .commodity_warp .commodity .data span {
    display: block;
    margin: auto;
    font-size: 26rpx;
    background-color: #000000;
    text-align: center;
    color: rgba(255, 255, 255, 0.5);
    width: 95rpx;
    line-height: 70rpx;
    border-radius: 50rpx;
}
</style>
