<template>
    <view class="container">
        <!-- <img src="@/static/img/lclclc.png" alt="" class="licai" /> -->
        <view class="alance_conternt">
            <view class="zichang_cen">
                <p>总资产(元)</p>
                <span>0</span>
                <view class="yuebap_main">
                    <view>
                        <p>余额宝</p>
                        <span>+{{ info.yue }}</span>
                    </view>
                    <view style="text-align: center">
                        <p>总收益</p>
                        <span> +{{ info.zongshouyi }}</span>
                    </view>
                    <view style="text-align: right">
                        <p>昨日收益</p>
                        <span>+{{ info.zuoshouyi }}</span>
                    </view>
                </view>
            </view>
            <view class="pde">
                <!-- <input type="number" placeholder="请输入金额" class="enterMoney" /> -->
                <uv-input class="enterMoney" v-model="enterMoney" placeholder="请输入金额" />
                <view class="led_warp">
                    <view class="led">
                        <p style="background: none" @click="out">转出</p>
                    </view>
                    <view class="led">
                        <p style="color: rgb(255, 255, 255)" @click="into">转入</p>
                    </view>
                </view>
            </view>
            
        </view>
        <view class="serve_warp">
                <p>请选择理财产品</p>
                <span></span>
            </view>
        <view class="income_wao">
            <view class="income_warp" :class="selectIndex == index ? 'active' : ''" @click="activeClick(index)"
                v-for="(item, index) in datalists" :key="index">
                <view class="income">
                    <p>
                        {{ item.shouyi }}% <span>(预计收益) <i @click="touziClick(item, index)">立即投资</i></span>
                    </p>
                </view>
                <view class="inc">
                    <img src="@/static/img/rili.png" alt="" />
                    <span>理财天数{{ item.days }}天 <i>({{ item.moneys }}元起存)</i></span>
                </view>
            </view>
        </view>
    </view>

    <uv-popup ref="popup">
        <view class="withdraw_wrap touzi_wrap">
            <p class="withdraw_tit">请输入投资金额</p>
            <div class="withdraw_list" style="padding: 20rpx">
                <uv-input type="number" placeholder="请输入金额" v-model="money" background="#e8e8e8" />
            </div>
            <button class="btn active_btn quedingbtn" @click="ok"
                style="background-color: rgb(117, 33, 96); width: 80%; margin: 0.2rem auto 0px">确定</button>
        </view>
    </uv-popup>
</template>
<script setup lang="ts">
import { getGreat, getposition,outbalance,intobalance,postGreat } from '@/api';
import globalTool from '@/utils/globalTool';
import { ref, onMounted } from 'vue';
const popup = ref<any>(null);
//转出转入金额
const money = ref('');
const outClick = () => {
    console.log('转出');
    uni.showToast({
        title: '转出',
        icon: 'none'
    });
};
//弹窗输入金额
const enterMoney = ref('');
const touzi_con = ref(false);
let currentItem:any = {};
const touziClick = (item: any, index: number) => {
    activeClick(index);
    touzi_con.value = true;
    money.value = '';
    currentItem = item;
    popup.value?.open();
};
const inClick = () => {
    console.log('转入');
};
const selectIndex = ref(0);
const activeClick = (index: number) => {
    selectIndex.value = index;
};
const datalists = ref<any>([]);
const getData = () => {
    getGreat().then((res: any) => {
        datalists.value = res.licai;
    });
};
const info = ref<any>({});
const getyuebao = () => {
    getposition().then((res: any) => {
        info.value = res;
    });
};


const out = () => {
    if (!enterMoney.value) {
        globalTool.showToast('请输入转出金额');
    } else {
        outbalance( enterMoney.value).then((res) => {
            globalTool.showToast('转出成功');
            money.value = '';
            getyuebao();
        });
    }
};

const into = () => {
    if (!enterMoney.value) {
        globalTool.showToast('请输入转入金额');
    } else {
        intobalance( enterMoney.value).then((res) => {
            globalTool.showToast('转入成功');
            money.value = '';
            getyuebao();
        });
    }
}

const ok = () => {
    if (Number(money.value) < Number(currentItem.moneys.value)) {
        globalTool.showToast('输入金额必须大于起投金额');
    } else {
        postGreat( currentItem.bianhao, money.value).then((res) => {
            touzi_con.value = false;
            globalTool.showToast('投资成功');
        });
    }
};

onMounted(() => {
    console.log('onMounted');
    getData();
    getyuebao();
});
</script>
<style lang="scss" scoped>
.container {
    width: 100vw;
    min-height: 100vh;
    background: linear-gradient(180deg, #24234c, #0f0f1c);
    position: relative;
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
    background-image: url("@/static/img/lclclc.png");
    background-size:750rpx 570rpx;
    position: relative;
    padding-top: 50rpx;
    width: 94%;
    margin: 0 auto;
    border-radius: 20rpx;

    /* 0.1rem x 200 = 20rpx */
    .zichang_cen {
        width: 94%;
        padding: 0 40rpx;
        /* 0.2rem x 200 = 40rpx */
        font-weight: 700;

        .yuebap_main {
            display: flex;

            view {
                flex: 1;
                margin-top: 20rpx;
            }

            p {
                margin-bottom: 10rpx;
                /* 0.05rem x 200 = 10rpx */
                color: hsla(0, 0%, 100%, 0.7);
                font-size: 28rpx;
                /* 0.14rem x 200 = 28rpx */
            }

            span {
                color: #fff;
                font-size: 32rpx;
                /* 0.16rem x 200 = 32rpx */
                font-weight: 700;
            }
        }
        span {
            color: #000;
            font-size: 56rpx;
        }
    }

    .enterMoney {
        width: 90%;
        display: block;
        margin: 0 auto;
        background: none;
        border: 0;
        border-radius: 0;
        border-bottom: 2rpx solid #777575;
        /* 1px x 200 = 2px */
        font-size: 30rpx;
        /* 0.15rem x 200 = 30rpx */
        font-weight: 700;
        padding: 40rpx 0;
        /* 0.2rem x 200 = 40rpx */
    }
}

.led_warp {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    text-align: center;
    width: 90%;
    margin-left: 40rpx;
    /* 0.2rem x 200 = 40rpx */
}

.led {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    margin: 20rpx 10rpx;
    /* 0.15rem x 200 = 30rpx, 0.05rem x 200 = 10rpx */
    line-height: 80rpx;
    /* 0.4rem x 200 = 80rpx */
    font-size: 28rpx;
    /* 0.14rem x 200 = 28rpx */
    font-weight: 700;

    p {
        color: #000;
        background-color: #752160;
        border-radius: 70rpx;
        border: 0.01rem solid #fff;
    }
}

.serve_warp {
    padding-top: 30rpx;
    /* 0.85rem x 200 = 170rpx */
    padding-left: 60rpx;

    /* 0.3rem x 200 = 60rpx */
    p {
        color: hsla(0, 0%, 100%, 0.9);
        font-size: 32rpx;
        /* 0.16rem x 200 = 32rpx */
        padding-bottom: 8rpx;
        /* 0.04rem x 200 = 8rpx */
    }

    span {
        background: linear-gradient(135deg, #f355ff, hsla(0, 0%, 100%, 0.09));
        display: block;
        width: 220rpx;
        /* 1.1rem x 200 = 220rpx */
        height: 10rpx;
        /* 0.05rem x 200 = 10rpx */
    }
}

.income_wao {
    margin-top: 20rpx;
}

.active {
    border: 0 solid #7582fc !important;
    color: #fff !important;
    background: linear-gradient(220.24deg, rgba(117, 130, 252, 0.5) 10%, #f355ff);
}

.income_warp {
    background-color: hsla(0, 0%, 100%, 0.45);
    width: 90%;
    margin: 40rpx auto;
    /* 0.2rem x 200 = 40rpx */
    padding: 20rpx;
    /* 0.1rem x 200 = 20rpx */
    border-radius: 20rpx;

    /* 0.1rem x 200 = 20rpx */
    .income p {
        color: hsla(0, 0%, 100%, 0.9);
        font-size: 48rpx;

        /* 0.24rem x 200 = 48rpx */
        span {
            font-size: 26rpx;
            /* 0.13rem x 200 = 26rpx */
        }

        i {
            font-style: normal;
            font-size: 28rpx;
            /* 0.14rem x 200 = 28rpx */
            float: right;
            margin-top: 8rpx;
            /* 0.04rem x 200 = 8rpx */
            margin-right: 20rpx;
            /* 0.1rem x 200 = 20rpx */
            background-color: #d43030;
            padding: 8rpx 26rpx;
            /* 0.04rem x 200 = 8rpx, 0.13rem x 200 = 26rpx */
            border-radius: 50rpx;
            /* 0.25rem x 200 = 50rpx */
        }
    }

    .inc {
        background-color: #4f4f4f;
        margin: 10rpx 0;
        /* 0.05rem x 200 = 10rpx */
        padding: 8rpx;

        /* 0.04rem x 200 = 8rpx */
        img {
            width: 10%;
            /* 5% x 200 = 10% */
            vertical-align: middle;
        }

        span {
            color: #fff;
            vertical-align: middle;
            font-size: 24rpx;
            /* 0.12rem x 200 = 24rpx */
            padding-left: 6rpx;

            /* 0.03rem x 200 = 6rpx */
            i {
                color: #6bfaff;
                font-size: 26rpx;
                /* 0.13rem x 200 = 26rpx */
                font-style: normal;
                padding-left: 20rpx;
                /* 0.1rem x 200 = 20rpx */
            }
        }
    }
}

.touzi_wrap {
    position: fixed;
    top: 400rpx;
    /* 2rem x 200 = 400rpx */
    left: 0;
    right: 0;
    margin: auto;
    height: auto !important;
    width: 90%;
    background: #fff;
    padding-bottom: 40rpx;
    /* 0.2rem x 200 = 40rpx */
    border-radius: 30rpx;
    /* 0.15rem x 200 = 30rpx */
}

.withdraw_tit {
    color: #333;
    line-height: 80rpx;
    /* 0.4rem x 200 = 80rpx */
    padding-left: 20rpx;
    /* 0.1rem x 200 = 20rpx */
    font-size: 28rpx;
    /* 0.14rem x 200 = 28rpx */
    background: hsla(0, 0%, 100%, 0.1) !important;
    font-size: 34rpx !important;
    /* 0.17rem x 200 = 34rpx */
    text-align: left;
    font-weight: 700;
    text-align: center !important;
    margin-top: 20rpx;
    /* 0.1rem x 200 = 20rpx */
}

.withdraw_list {
    background: #fff;
    padding: 0 20rpx;
    /* 0.1rem x 200 = 20rpx */
    line-height: 80rpx;
    /* 0.4rem x 200 = 80rpx */
    color: #939ba4;
    font-size: 28rpx;
    /* 0.14rem x 200 = 28rpx */
    position: relative;
}

.quedingbtn {
    background-color: rgb(117, 33, 96);
    width: 80%;
    margin: 40rpx auto 0px;
    /* 0.2rem x 200 = 40rpx */
    display: block;
    line-height: 80rpx;
    /* 0.4rem x 200 = 80rpx */
    border-radius: 44rpx;
    /* 0.22rem x 200 = 44rpx */
    text-align: center;
    color: #fff;
    font-size: 28rpx;
    /* 0.14rem x 200 = 28rpx */
    border: 0;
    font-size: 28rpx;
    color: #fff;
}
</style>
