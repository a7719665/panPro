<template>
    <div class="container">
        <img src="@/static/img/lclclc.png" alt="" class="licai" />
        <div class="alance_conternt">
            <div class="zichang_cen">
                <p>总资产(元)</p>
                <span>0</span>
                <div class="yuebap_main">
                    <div>
                        <p>余额宝</p>
                        <span>+8.0000</span>
                    </div>
                    <div style="text-align: center">
                        <p>总收益</p>
                        <span> +0</span>
                    </div>
                    <div style="text-align: right">
                        <p>昨日收益</p>
                        <span>+0</span>
                    </div>
                </div>
            </div>
            <div class="pde pl-40rpx pr-40rpx">
                <!-- <input type="number" placeholder="请输入金额" class="enterMoney" /> -->
                <wd-input class="bg-transparent!"   v-model="score" placeholder="请输入金额"> </wd-input>

                <div class="led_warp">
                    <div class="led"><p style="background: none" @click="outClick">转出</p></div>
                    <div class="led"><p style="color: rgb(255, 255, 255)" @click="inClick">转入</p></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useToast } from 'wot-design-uni';
const score = ref(0);
const toast = useToast()

const outClick = () => {
    console.log('转出');
    toast.show('转出')
    // uni.showToast({
    //     title: '转出',
    //     icon: 'none'
    // })
};
const inClick = () => {
    console.log('转入');
};
</script>
<style lang="scss" scoped>
.container {
    width: 100vw;
    height: 100vh;
    background: linear-gradient(180deg, #24234c, #0f0f1c);
}
.licai {
    width: 92%;
    height: 270px;
    position: absolute;
    right: 0;
    left: 0;
    display: block;
    margin: auto;
    top: 0.4rem;
}
.alance_conternt {
    position: relative;
    z-index: 1;
    top: 140rpx; /* 0.7rem x 200 = 140rpx */
    width: 94%;
    margin: 0 auto;
    border-radius: 20rpx; /* 0.1rem x 200 = 20rpx */
    .zichang_cen {
        width: 94%;
        padding: 0 40rpx; /* 0.2rem x 200 = 40rpx */
        font-weight: 700;

        .yuebap_main {
            display: flex;
            div {
                flex: 1;
                margin-top: 20rpx;
            }
            p {
                margin-bottom: 10rpx; /* 0.05rem x 200 = 10rpx */
                color: hsla(0, 0%, 100%, 0.7);
                font-size: 28rpx; /* 0.14rem x 200 = 28rpx */
            }
            span {
                color: #fff;
                font-size: 32rpx; /* 0.16rem x 200 = 32rpx */
                font-weight: 700;
            }
        }
    }
    .enterMoney {
        width: 90%;
        display: block;
        margin: 0 auto;
        background: none;
        border: 0;
        border-radius: 0;
        border-bottom: 2rpx solid #777575; /* 1px x 200 = 2px */
        font-size: 30rpx; /* 0.15rem x 200 = 30rpx */
        font-weight: 700;
        padding: 40rpx 0; /* 0.2rem x 200 = 40rpx */
    }
}
.led_warp {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    text-align: center;
    width: 90%;
    margin-left: 40rpx; /* 0.2rem x 200 = 40rpx */
}
.led {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    margin: 30rpx 10rpx; /* 0.15rem x 200 = 30rpx, 0.05rem x 200 = 10rpx */
    line-height: 80rpx; /* 0.4rem x 200 = 80rpx */
    font-size: 28rpx; /* 0.14rem x 200 = 28rpx */
    font-weight: 700;
    p {
        color: #000;
        background-color: #752160;
        border-radius: 70rpx;
        border: 0.01rem solid #fff;
    }
}
</style>
