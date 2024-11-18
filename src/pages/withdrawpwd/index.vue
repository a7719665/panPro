<template>
    <view class="withdrawpwd_warp">
        <img src="@/static/img/da1.png" alt="" class="wjmm" />
        <view class="xuigai"><p>修改支付密码</p></view>
        <view class="topay">

            <input placeholder="请输入原支付密码"  type="text" v-model="value" autocomplete="off"></input>
            <input placeholder="请输入新支付密码"  type="text" v-model="value2" autocomplete="off"></input>
            <input placeholder="请确定支付密码"  type="text" v-model="value2" autocomplete="off"></input>

          
            <i>密码支持6-14字符，建议数字、字母、符号组合</i>
            <view class="ll"><p>确认</p></view>
        </view>
        
    </view>
</template>

<script setup lang="ts">
const value = ref('');
const value2 = ref('');
</script>
<style scoped lang="scss">
.withdrawpwd_warp {
    width: 100%;
    background: linear-gradient(180deg, #24234c 0%, #0f0f1c 100%);
    min-height: 100vh;
    position: relative;
    .wjmm {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
    .xuigai {
        padding-top: 540rpx; // 3.2rem * 200 = 640rpx
        p {
            text-align: center;
            color: #ffffff;
            font-size: 52rpx; // 0.26rem * 200 = 52rpx
            font-weight: 400;
        }
    }
    .topay {
        width: 90%;
        margin: auto;
        top: 60rpx; // 0.3rem * 200 = 60rpx
        background-color: rgba(255, 255, 255, 0.28);
        border-radius: 20rpx; // 0.1rem * 200 = 20rpx
        position: relative;
        padding: 20rpx 0; // 0.1rem * 200 = 20rpx
        .uv-input {
            margin-bottom: 10rpx;
        }

        input {
            width: 90%;
            margin: auto;
            display: block;
            background: none;
            line-height: 100rpx; // 0.5rem * 200 = 100rpx
            height: 100rpx; // 0.5rem * 200 = 100rpx
            font-size: 28rpx; // 0.14rem * 200 = 28rpx
            border-bottom: 1px solid #000000; // 0.5px * 200 = 10rpx
        }
        i {
            margin-left: 40rpx; // 0.2rem * 200 = 40rpx
            padding-top: 20rpx; // 0.1rem * 200 = 20rpx
            color: #ffffff;
            font-size: 22rpx; // 0.11rem * 200 = 22rpx
            font-style: normal;
            font-weight: bold;
            display: block;
        }

        .ll p {
            width: 90%;
            margin: 20rpx auto; // 0.1rem * 200 = 20rpx
            text-align: center;
            font-size: 32rpx; // 0.16rem * 200 = 32rpx
            color: #ffffff;
            background: radial-gradient(75.86% 100%, #7582fc 0%, #f355ff 100%);
            line-height: 80rpx; // 0.4rem * 200 = 80rpx
            box-shadow: 0px 40rpx 80rpx rgba(0, 0, 0, 0.08), inset 0px 40rpx 80rpx rgba(255, 255, 255, 0.25);
            border-radius: 20rpx; // 0.1rem * 200 = 20rpx
        }
    }
    .forget_warp {
        width: 100%;
        background: linear-gradient(180deg, #24234c 0%, #0f0f1c 100%);
        height: 100%;
        position: relative;
        .wjmm {
            width: 60%;
            position: absolute;
            margin: auto;
            right: 0;
            left: 0;
        }
        .forget_mima {
            text-align: center;
            color: #fff;
            font-size: 50rpx; // 0.25rem * 200 = 50rpx
            position: relative;
            top: 500rpx; // 2.5rem * 200 = 500rpx
            font-weight: bold;
        }
        .topay {
            width: 90%;
            margin: auto;
            background: rgba(255, 255, 255, 0.28);
            border-radius: 20rpx; // 0.1rem * 200 = 20rpx
            position: relative;
            top: 600rpx; // 3rem * 200 = 600rpx
            padding: 20rpx 0; // 0.1rem * 200 = 20rpx
            input {
                width: 90%;
                margin: auto;
                display: block;
                background: none;
                line-height: 100rpx; // 0.5rem * 200 = 100rpx
                height: 100rpx; // 0.5rem * 200 = 100rpx
                border: none;
                font-size: 28rpx; // 0.14rem * 200 = 28rpx
                border-bottom: 10rpx solid #000000; // 0.5px * 200 = 10rpx
                border-radius: 0;
            }
            ::-webkit-input-placeholder {
                color: #fff;
            }
            i {
                width: 140rpx; // 0.7rem * 200 = 140rpx
                line-height: 50rpx; // 0.25rem * 200 = 50rpx
                text-align: center;
                border-radius: 8rpx; // 0.04rem * 200 = 8rpx
                background: #fff;
                font-size: 22rpx; // 0.11rem * 200 = 22rpx
                font-style: normal;
                font-weight: bold;
                right: 60rpx; // 0.3rem * 200 = 60rpx
                position: absolute;
                top: 140rpx; // 0.7rem * 200 = 140rpx
                z-index: 888;
            }
            .forget_quer {
                background: radial-gradient(75.86% 100%, #7582fc 0%, #f355ff 100%);
                width: 90%;
                margin: 30rpx auto; // 0.15rem * 200 = 30rpx
                text-align: center;
                font-size: 32rpx; // 0.16rem * 200 = 32rpx
                color: #ffffff;
                line-height: 90rpx; // 0.45rem * 200 = 90rpx
                border-radius: 20rpx; // 0.1rem * 200 = 20rpx
            }
        }
    }
}
</style>
