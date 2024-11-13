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
                <uv-input class="enterMoney" v-model="money" placeholder="请输入金额" />
                <div class="led_warp">
                    <div class="led"><p style="background: none" @click="outClick">转出</p></div>
                    <div class="led"><p style="color: rgb(255, 255, 255)" @click="inClick">转入</p></div>
                </div>
            </div>
            <div class="serve_warp">
                <p>请选择理财产品</p>
                <span></span>
            </div>
        </div>
        <div class="income_wao">
            <div class="income_warp" @click="activeClick">
                <div class="income">
                    <p>
                        0.60% <span>(预计收益) <i>立即投资</i></span>
                    </p>
                </div>
                <div class="inc">
                    <img src="@/static/img/rili.png" alt="" /> <span>理财天数90天 <i>(1元起存)</i></span>
                </div>
            </div>
            <div class="income_warp">
                <div class="income">
                    <p>
                        0.05% <span>(预计收益) <i>立即投资</i></span>
                    </p>
                </div>
                <div class="inc">
                    <img src="@/static/img/rili.png" alt="" /> <span>理财天数1天 <i>(1元起存)</i></span>
                </div>
            </div>
            <div class="income_warp">
                <div class="income">
                    <p>
                        0.07% <span>(预计收益) <i>立即投资</i></span>
                    </p>
                </div>
                <div class="inc">
                    <img src="@/static/img/rili.png" alt="" /> <span>理财天数3天 <i>(1元起存)</i></span>
                </div>
            </div>
            <div class="income_warp">
                <div class="income">
                    <p>
                        0.10% <span>(预计收益) <i>立即投资</i></span>
                    </p>
                </div>
                <div class="inc">
                    <img src="@/static/img/rili.png" alt="" /> <span>理财天数7天 <i>(1元起存)</i></span>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const score = ref(0);

const outClick = () => {
    console.log('转出');
    uni.showToast({
        title: '转出',
        icon: 'none'
    });
};
const inClick = () => {
    console.log('转入');
};
const selectIndex = ref(0);
const activeClick = (index: number) => {
    selectIndex.value = index;
};
</script>
<style lang="scss" scoped>
.container {
    width: 100vw;
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
.serve_warp {
    padding-top: 30rpx; /* 0.85rem x 200 = 170rpx */
    padding-left: 60rpx; /* 0.3rem x 200 = 60rpx */
    p {
        color: hsla(0, 0%, 100%, 0.9);
        font-size: 32rpx; /* 0.16rem x 200 = 32rpx */
        padding-bottom: 8rpx; /* 0.04rem x 200 = 8rpx */
    }
    span {
        background: linear-gradient(135deg, #f355ff, hsla(0, 0%, 100%, 0.09));
        display: block;
        width: 220rpx; /* 1.1rem x 200 = 220rpx */
        height: 10rpx; /* 0.05rem x 200 = 10rpx */
    }
}
.income_wao {
    margin-top: 160rpx;
}
.active {
    border: 0 solid #7582fc !important;
    color: #fff !important;
}
.income_warp {
    background-color: hsla(0, 0%, 100%, 0.45);
    width: 90%;
    margin: 40rpx auto; /* 0.2rem x 200 = 40rpx */
    padding: 20rpx; /* 0.1rem x 200 = 20rpx */
    border-radius: 20rpx; /* 0.1rem x 200 = 20rpx */
    .income p {
        color: hsla(0, 0%, 100%, 0.9);
        font-size: 48rpx; /* 0.24rem x 200 = 48rpx */
        span {
            font-size: 26rpx; /* 0.13rem x 200 = 26rpx */
        }
    }
    .inc {
        background-color: #4f4f4f;
        margin: 10rpx 0; /* 0.05rem x 200 = 10rpx */
        padding: 8rpx; /* 0.04rem x 200 = 8rpx */
        img {
            width: 10%; /* 5% x 200 = 10% */
            vertical-align: middle;
        }
        span {
            color: #fff;
            vertical-align: middle;
            font-size: 24rpx; /* 0.12rem x 200 = 24rpx */
            padding-left: 6rpx; /* 0.03rem x 200 = 6rpx */
            i {
                color: #6bfaff;
                font-size: 26rpx; /* 0.13rem x 200 = 26rpx */
                font-style: normal;
                padding-left: 20rpx; /* 0.1rem x 200 = 20rpx */
            }
        }
    }
}
</style>
