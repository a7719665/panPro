<template>
    <div class="withdraw_warp">
        <div class="withdraw">
            <input type="number" placeholder="请输入提现金额" v-model="money"/>
            <input type="text" placeholder="请输入银行卡号" :disabled="disabled" v-model="bankcode" />
            <input type="text" placeholder="请输入收款姓名" :disabled="disabled" v-model="bankuser" />
            <input type="text" placeholder="请输入银行名称" :disabled="disabled" v-model="bankname" />
            <input type="text" placeholder="请输入开户行地址" v-model="bankadd" />
            <input type="password" placeholder="请输入支付密码" v-model="usepwd" />
            <span class="clearfix" @click="pwd">忘记密码</span>
            <!---->
        </div>
        <div class="ke">
            <p style="color: rgb(255, 255, 255); margin-top: 20rpx">请选择提现方式</p>
            <p>* 周六日银行休息时间如有延迟请耐心等待，提现最低金额为50元,每日仅可提现一次，提现时间为每周一至周五上午9：00到晚上21：00前截止。</p>
            <div class="choose_type">
                <div :class="tday == 1 ? 'active' : ''" @click="tday = 1"><span>T+1提现到账</span> <i>手续费2%</i></div>
                <div :class="tday == 3 ? 'active' : ''" @click="tday = 3"><span>T+3提现到账</span> <i>手续费1%</i></div>
                <div :class="tday == 7 ? 'active' : ''" @click="tday = 7">
                    <span>T+7提现到账</span>
                    <i>免手续费</i>
                </div>
            </div>
            <div>
                <p style="color: rgb(255, 0, 0)">
                    温馨提示:
                    <br />
                    选择T+1提现手续费为2%
                    <br />
                    选择T+3提现手续费为1%
                    <br />
                    选择T+7提现免手续费
                </p>
                <!---->
            </div>
        </div>
        <div class="qr" @click="ok">确认</div>
        <div class="wt">
            <span>如遇资金问题，请<i @click="contact">联系客服</i></span>
        </div>
        <img src="@/static/img/zhtx.png" alt="" />
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { getuserdetail, getbankinfo, withdrawals, withdrawals2 } from '@/api';
import globalTool from '@/utils/globalTool';

const userInfo = ref<any>('');
const bankname = ref('');
const bankcode = ref('');
const bankuser = ref('');
const bankadd = ref('');
const bankid = ref('');
const money = ref('');
const tday = ref(1);
const usepwd = ref('');
const disabled = ref(false);
const pay_pwd = ref('');
const type = ref(1);
const isLoading = ref(false);

watch(bankcode, (newValue, oldValue) => {
    console.log(newValue);
    bankcode.value = newValue.replace(/[\u4e00-\u9fa5/\s+/]|[^a-zA-Z0-9\u4E00-\u9FA5]/g, '');
    if (newValue.length > 50) {
        bankcode.value = newValue.substr(0, 50);
    }
});

const pwd = () => {
    uni.navigateTo({
        url: '/pages/withdrawpwd/index?pay_pwd=' + pay_pwd.value,
    });
};

const contact = () => {
    uni.navigateTo({
        url: '/pages/contact',
    });
};

const InitData = () => {
    const that = this;
    getuserdetail().then((res: any) => {
        userInfo.value = res;
        window.localStorage.setItem('pay_pwd', res.pay_pwd);
    });
};

const GetBank = () => {
    const that = this;
    getbankinfo().then((res: any) => {
        bankcode.value = res.bankcode ?? '';
        bankname.value = res.bankname ?? '';
        bankuser.value = res.bankuser ?? '';
        if (!!bankcode.value) {
            disabled.value = true;
        }
    });
};

const ok = () => {
    if (bankcode.value == '') {
        globalTool.showToast('请输入银行卡账号');
    } else if (bankname.value == '') {
        globalTool.showToast('请输入开户行');
    } else if (bankuser.value == '') {
        globalTool.showToast('请输入姓名');
    } else if (usepwd.value == '') {
        globalTool.showToast('请输入提现密码');
    } else {
        if (type.value == 1) {
            if (money.value == '') {
                globalTool.showToast('请输入提现金额');
                return;
            }
            withdrawals(bankcode.value, bankname.value, bankuser.value, money.value, usepwd.value, tday.value, bankadd.value).then((res: any) => {
                globalTool.showToast(res.msg);
            });
        } else {
            if (money.value == '') {
                globalTool.showToast('请选择提现金额');
                return;
            }
            withdrawals2(bankcode.value, bankname.value, bankuser.value, money.value, usepwd.value, tday.value, bankadd.value).then((res: any) => {
                globalTool.showToast(res.msg);
            });
        }
    }
};

onMounted(() => {
    GetBank();
    InitData();
    pay_pwd.value = window.localStorage.getItem('pay_pwd') || '';
});
</script>
<style scoped lang="scss">
.withdraw_warp {
    background: -webkit-gradient(linear, left top, left bottom, from(#24234c), to(#0f0f1c));
    background: linear-gradient(180deg, #24234c 0%, #0f0f1c 100%);
    min-height: 100%;
    padding-bottom: 410rpx;
    img {
        width: 50%;
        position: absolute;
        margin-left: 300rpx;
    }
    .qr {
        background-color: #48505d;
        width: 95%;
        margin: auto;
        text-align: center;
        line-height: 100rpx; // 0.5rem * 200 = 100rpx
        color: #ffffff;
        font-size: 32rpx; // 0.16rem * 200 = 32rpx
        border-radius: 20rpx; // 0.1rem * 200 = 20rpx
        margin-top: 40rpx; // 0.2rem * 200 = 40rpx
    }
    .wt {
        text-align: center;
        margin-top: 40rpx; // 0.2rem * 200 = 40rpx
        font-size: 28rpx; // 0.14rem * 200 = 28rpx
        font-weight: bold;
        span {
            color: #7d8287;
            i {
                font-style: normal;
                color: #ec3c37;
            }
        }
    }

    .choose_type {
        display: flex;
        width: 90%;
        margin: auto;
        div {
            flex: 1;
            margin: 10rpx; // 0.05rem * 200 = 10rpx
            border-radius: 20rpx; // 0.1rem * 200 = 20rpx
            background: white;
            padding: 20rpx 20rpx; // 0.1rem * 200 = 20rpx
            span {
                display: block;
                text-align: center;
                color: #000;
                font-size: 28rpx; // 0.14rem * 200 = 28rpx
            }
            i {
                font-style: normal;
                font-size: 24rpx; // 0.12rem * 200 = 24rpx
                text-align: center;
                display: block;
                color: #ff0000;
            }
            &.active {
                background: #48505d;
                span {
                    color: #fff;
                }
            }
        }
    }

    .ke p {
        padding-left: 40rpx;
        color: #999999;
        font-size: 24rpx;
    }
    .ke p span {
        color: #3a79f7;
    }
    .withdraw {
        padding-top: 10rpx; // 0.5rem * 200 = 100rpx

        .withdraw_type {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;

            p {
                -webkit-box-flex: 1;
                -ms-flex: 1;
                flex: 1;
                text-align: center;
                line-height: 70rpx; // 0.35rem * 200 = 70rpx
                border: 1px solid #35495e;
                color: #fff;
                margin: 20rpx 20rpx 0; // 0.1rem * 200 = 20rpx
                border-radius: 20rpx; // 0.1rem * 200 = 20rpx
            }

            .active {
                background: #35495e;
                color: #dd8109;
            }
        }

        input {
            width: 90%;
            display: block;
            margin: auto;
            padding: 50rpx 20rpx; // 0.25rem * 200 = 50rpx, 0.1rem * 200 = 20rpx
            margin-top: 40rpx; // 0.2rem * 200 = 40rpx
            background-color: #ffffff;
            border: 1.94rpx solid #d9d9d9; // 0.97px * 200 = 1.94rpx
            -webkit-box-shadow: 0px 3.88rpx 7.76rpx rgba(0, 0, 0, 0.07); // 0px 1.94px 3.88px rgba(0, 0, 0, 0.07) * 200 = 0px 3.88rpx 7.76rpx
            box-shadow: 0px 3.88rpx 7.76rpx rgba(0, 0, 0, 0.07);
        }

        ::-webkit-input-placeholder {
            font-size: 32rpx; // 16px * 200 = 32rpx
            color: #7d8287;
            font-weight: bold;
        }

        span {
            position: relative;
            float: right;
            right: 100rpx; // 0.5rem * 200 = 100rpx
            bottom: 70rpx; // 0.35rem * 200 = 70rpx
            color: #ec3c37;
            font-size: 28rpx; // 0.14rem * 200 = 28rpx
            font-weight: bold;
        }

        .withdraw_ti {
            font-size: 26rpx; // 0.13rem * 200 = 26rpx
            color: #7d8287;
            width: 90%;
            margin: 40rpx auto; // 0.2rem * 200 = 40rpx
        }

        .qr {
            background-color: #48505d;
            width: 95%;
            margin: auto;
            text-align: center;
            line-height: 100rpx; // 0.5rem * 200 = 100rpx
            color: #ffffff;
            font-size: 32rpx; // 0.16rem * 200 = 32rpx
            border-radius: 20rpx; // 0.1rem * 200 = 20rpx
            margin-top: 40rpx; // 0.2rem * 200 = 40rpx
        }

        .wt {
            text-align: center;
            margin-top: 40rpx; // 0.2rem * 200 = 40rpx
            font-size: 28rpx; // 0.14rem * 200 = 28rpx
            font-weight: bold;

            span {
                color: #7d8287;

                i {
                    font-style: normal;
                    color: #ec3c37;
                }
            }
        }

        img {
            width: 100rpx; // 50% * 200 = 100rpx
            position: absolute;
            margin-left: 320rpx; // 1.6rem * 200 = 320rpx
        }
    }
}
</style>
