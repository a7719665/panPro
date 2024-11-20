<template>
    <div class="Order_warp">
        <div class="shuju">
            <div class="shuju_content">
                <img src="@/static/img/xingming.png" alt="" />
                <p>
                    真实姓名<span>{{ BankInfo.bankuser }}</span>
                </p>
            </div>
            <div class="shuju_content">
                <img src="@/static/img/daihuuanyinhang.png" alt="" />
                <p>
                    银行名称<span>{{ BankInfo.bankname }}</span>
                </p>
            </div>
            <div class="shuju_content">
                <img src="@/static/img/yinhangkahao.png" alt="" />
                <p>
                    银行卡号<span>{{ BankInfo.bankcode }}</span>
                </p>
            </div>
            <div class="shuju_content">
                <img src="@/static/img/daihuanzonge2.png" alt="" />
                <p>
                    代还金额<span>{{ BankInfo.moneys }}</span>
                </p>
            </div>
            <div class="shuju_content">
                <img src="@/static/img/daihuanlilv.png" alt="" />
                <p>
                    <p>利率<span>{{ days == BankInfo.days ? BankInfo.shouyi : days == BankInfo.days2 ? BankInfo.shouyi2 : BankInfo.shouyi3 }}%</span></p>
                </p>
            </div>
            <div class="shuju_content">
                <img src="@/static/img/daihuanlilv.png" alt="" />
                <p class="days_choose">
                    代还天数
                    <span :class="{ active: days == BankInfo.days }" @click="days = BankInfo.days">{{ BankInfo.days }}</span>
                    <span v-if="BankInfo.days2 > 0" :class="{ active: days == BankInfo.days2 }" @click="days = BankInfo.days2">{{ BankInfo.days2 }}</span>
                    <span v-if="BankInfo.days3 > 0" :class="{ active: days == BankInfo.days3 }" @click="days = BankInfo.days3">{{ BankInfo.days3 }}</span>
                </p>
            </div>
        </div>
        <div class="common_btn" @click="ok">马上代还</div>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getOrderInfo, postOrder } from '@/api';
import globalTool from '@/utils/globalTool';

const BankInfo = ref<any>({});
const jiedaiInfo = ref<any>({});
const days = ref(30);
const show = ref(false);
const msg = ref('');
const isClicked = ref(false);
const moneys = ref('');
const bianhao = ref('');
const getData = () => {
    getOrderInfo(bianhao.value).then((data: any) => {
        BankInfo.value = data;
        days.value = data.days;
        moneys.value = data.moneys;
        jiedaiInfo.value = BankInfo.value.yue_moneys[0];
    });
};

const ok = () => {
    if (!days.value) {
        globalTool.showToast('请选择代还天数');
        return;
    }

    postOrder(bianhao.value, BankInfo.value.jb === '3' ? jiedaiInfo.value.days : days.value, BankInfo.value.jb === '3' ? jiedaiInfo.value.jiedai : moneys.value, jiedaiInfo.value.rililv)
        .then((res) => {
            globalTool.showModal(res.msg, () => {
                uni.navigateBack();
            });
        })
        .catch(() => {});
};

onLoad((options: any) => {
    bianhao.value = options.bianhao;
    getData();
});
</script>
<style scoped lang="scss">
.Order_warp {
    width: 100%;
    min-height: 100vh;
    overflow: scroll;
    padding-top: 20rpx;
    background: -webkit-gradient(linear, left top, left bottom, from(#24234c), to(#0f0f1c));
    background: linear-gradient(180deg, #24234c 0%, #0f0f1c 100%);

   

    .shuju {
        position: relative;
        z-index: 3;
        width: 90%;
        margin: auto;

        .shuju_content {
            background-color: #56556c;
            border-radius: 10rpx;
            width: 100%;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            line-height: 100rpx;
            height: 100rpx;
            padding: 0 40rpx;
            margin-bottom: 30rpx;

            img {
                width: 32rpx;
            }

            p {
                margin-left: 20rpx;
                font-size: 28rpx;
                color: #a6a6a6;

                span {
                    float: right;
                    margin-left: 10rpx;
                }
            }

            .choose_money_wrap {
                -webkit-box-flex: 1;
                -ms-flex: 1;
                flex: 1;
                margin-left: 0;
                padding: 20rpx 0;

                .active {
                    background: #f24100 !important;
                    color: #fff !important;
                }
            }

            .choose_money {
                width: 30%;
                margin: 1.5%;
                border: 1px solid #e5e5e5;
                text-align: center;
                border-radius: 20rpx;
                float: left;
            }

            .days_choose {
                span {
                    width: 80rpx;
                    border: 1px solid #e5e5e5;
                    border-radius: 20rpx;
                    text-align: center;
                    height: 70rpx;
                    line-height: 70rpx;
                    margin: 20rpx 8rpx 0;
                }

                .active {
                    color: #f355ff;
                    border: 1px solid #f355ff !important;
                }
            }
        }
    }

    .common_btn {
        position: relative;
        width: 90%;
        margin: auto;
        border-radius: 70rpx;
        background: radial-gradient(50% 80%, #7582fc 0%, #f355ff 100%);
        text-align: center;
        font-size: 32rpx;
        color: #ffffff;
        line-height: 100rpx;
        height: 100rpx;
    }
}
</style>
