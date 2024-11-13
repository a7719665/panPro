<template>
    <view class="container">
        <uv-swiper :list="list" height="360rpx" class=""></uv-swiper>
        <view class="notice-warp">
            <uv-notice-bar :text="text" bgColor="#2f2e5e" color="#fff" speed="20"></uv-notice-bar>
        </view>
        <div class="top_content">
            <div class="con_list">
                <div>
                    <img src="@/static/img/licai.png" alt="" />
                    <p>余额宝</p>
                </div>
                <div>
                    <img src="@/static/img/congzhi.png" alt="" />
                    <p>充值</p>
                </div>
                <div>
                    <img src="@/static/img/qiandao.png" alt="" />
                    <p>签到</p>
                </div>
                <div>
                    <img src="@/static/img/ptjs.png" alt="" />
                    <p>平台介绍</p>
                </div>
                <div>
                    <img src="@/static/img/sc.png" alt="" />
                    <p>商城</p>
                </div>
            </div>
        </div>
        <div class="zp"><img src="@/static/img/zhuanpan.png" /></div>
        <div class="activit_warp">
            <div class="ctiv_warp"><img src="@/static/img/huo1.png" /> <img src="@/static/img/huo2.png" style="margin: 0.1rem 0px" /> <img src="@/static/img/huo3.png" /></div>
        </div>

        <div class="Popular"><img src="@/static/img/yb.png" alt="" /> <span>信用卡知识</span> <img src="@/static/img/zb.png" alt="" /></div>
        <div class="division_warp clearfix">
            <div class="division">
                <img src="https://my201hongy.zvrxw.com//pic/tie/202210102292328492.jpg" alt="" />
                <p>信用卡逾期怎么办 <span>5780230阅读</span></p>
            </div>
            <div class="division">
                <img src="https://my201hongy.zvrxw.com//pic/tie/202210102275376804.jpg" alt="" />
                <p>信用卡申请 <span>902325阅读</span></p>
            </div>
            <div class="division">
                <img src="https://my201hongy.zvrxw.com//pic/tie/202210102224324442.jpg" alt="" />
                <p>各银行信用卡提额 <span>10215820阅读</span></p>
            </div>
        </div>
    </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const text = ref('鸿运平台温馨提醒各位代还员：近年来通过市场调研发现有平台存在恶意模仿、复制鸿运平台机制等不法行为，通过高额返现、高利回报、伪造鸿运平台证明等行为导致代还员直接造成经济财产损失。因此鸿运平台温馨提醒各位代还！平台所有代还员如遇上述情况也可随时提交受骗资料证据向小助理举报，一经查证平台法务部门将依法惩处此类不法行为！');

const list = ref(['https://cdn.uviewui.com/uview/swiper/swiper1.png', 'https://cdn.uviewui.com/uview/swiper/swiper2.png', 'https://cdn.uviewui.com/uview/swiper/swiper3.png']);
</script>

<style lang="scss" scoped>
.container {
    width: 100vw;
    // padding: 20rpx 0;
    background: linear-gradient(180deg, #24234c, #0f0f1c);
    .notice-warp {
        width: 94%;
        margin: 30rpx auto 0;
        background-color: #2f2e5e;
        color: #fff;
        overflow: hidden;
        padding: 0 32rpx;
        position: relative;
        z-index: 2;
    }
    .top_content {
        width: 92%;
        margin: 40rpx auto 0;
    }
    .con_list {
        display: flex;
        justify-content: space-between;
        div {
            text-align: center;
        }
        p {
            font-size: 28rpx;
            color: #fff;
        }
        img {
            width: 98rpx;
            height: 98rpx;
        }
    }
}

.zp {
    width: 100%;
    margin: 0 auto;
    display: block;
    img {
        width: 92%;
        margin: auto;
        display: block;
    }
}
.activit_warp {
    width: 92%;
    margin: 0.1rem auto 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    .ctiv_warp {
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        line-height: 0.45rem;
    }
    img {
        width: 100%;
        display: block;
    }
}

.Popular {
    margin: 40rpx 0;
    display: flex;

    align-items: center;

    justify-content: center;

    img {
        width: 30%;
        padding: 0 20rpx;
    }
    span {
        color: #fff;
        font-size: 32rpx;
    }
}

.division_warp {
    width: 94%;
    margin: auto;
    .division {
        float: left;
        width: 44%;
        margin: 10rpx 20rpx; /* 0.05rem x 200 = 10rpx, 1% x 200 = 20rpx */
        background-color: #2f2e5e;
        border-radius: 30rpx 30rpx 30rpx 30rpx; /* 0.15rem x 200 = 30rpx */
    }
    img {
        width: 100%;
        height: 261.16rpx; /* 130.58px x 200 = 261.16rpx */
        border-radius: 30rpx 30rpx 0 0; /* 0.15rem x 200 = 30rpx */
    }
    p {
        color: #fff;
        font-size: 28rpx; /* 0.14rem x 200 = 28rpx */
        font-weight: 400;
        padding: 20rpx; /* 0.1rem x 200 = 20rpx */
    }
}
</style>
