<template>
    <view class="container">
        <div class="account_warp">
            <div class="account_content">
                <div class="account_btn" :class="{ common_btn: type == 'zj' }" @click="type = 'zj'">资金明细<span></span></div>
                <div class="account_btn" :class="{ common_btn: type == 'hd' }" @click="type = 'hd'">活动明细<span></span></div>
                <div class="account_btn" :class="{ common_btn: type == 'jf' }" @click="type = 'jf'">积分明细<span></span></div>
            </div>
            <div class="account">
                <div class="led">
                    <template v-show="type == 'zj'">
                        <div class="Activity_warp" v-for="(item, index) in wallet1" :key="index">
                            <div class="Activity_w"><img src="@/static/img/hbao.png" alt="" /></div>
                            <div class="Activity_a">
                                <span>{{ item.shuoming }}</span>
                                <p>{{ item.addtime }}</p>
                            </div>
                            <div class="Activity_p" style="color: rgba(255, 255, 255, 0.36)">{{ item.moneys }}</div>
                        </div>
                        
                    </template>

                    <template v-show="type == 'hd'">
                        <div class="Activity_warp" v-for="(item, index) in wallet2" :key="index">
                            <div class="Activity_w"><img src="@/static/img/hbao.png" alt="" /></div>
                            <div class="Activity_a">
                                <span>{{ item.shuoming }}</span>
                                <p>{{ item.addtime }}</p>
                            </div>
                            <div class="Activity_p" style="color: rgba(255, 255, 255, 0.36)">{{ item.money }}</div>
                        </div>
                    </template>
                    <view v-if="type == 'hd' && wallet2.length == 0 || type == 'zj' && wallet1.length == 0 || type == 'jf' && wallet3.length == 0">
                        <div class="no_data">暂无数据</div>
                    </view>
                    <template v-show="type == 'jf'">
                        <div class="Activity_warp" v-for="(item, index) in wallet3" :key="index">
                            <div class="Activity_w"><img src="@/static/img/hbao.png" alt="" /></div>
                            <div class="Activity_a">
                                <span>{{ item.shuoming }}</span>
                                <p>{{ item.addtime }}</p>
                            </div>
                            <div class="Activity_p" style="color: rgba(255, 255, 255, 0.36)">{{ item.money }}</div>
                        </div>
                        
                    </template>
                </div>
            </div>
        </div>
    </view>
</template>
<script setup lang="ts">
import { getszstream, gethdstream, getjfstream } from '@/api';
import { ref, onMounted } from 'vue';

const wallet1 = ref<any>([]);
const wallet2 = ref<any>([]);
const wallet3 = ref<any>([]);
//资金
// {
//     "lx": "支出",
//     "res": "已完成",
//     "shuoming": "提现",
//     "moneys": "100.00",
//     "addtime": "2024-11-17 17:03:39"
// }
//积分
// {
//   "res": "支出",
//   "shuoming": "提现积分扣除",
//   "moneys": "250,006.00",
//   "addtime": "2024-11-17 17:13:19"
// }

//活动
// {
//   "lx": "收入",
//   "shuoming": "返回提现手续费",
//   "moneys": "4.00",
//   "addtime": "2024-03-14 01:04:49",
//   "res": "已完成"
// }

const page = ref({
    PageSize: 10,
    PageNumber: 1
});
const notdata = ref(false);
const datacount = ref(7);
const show_load = ref(false);
const type = ref('zj');
const title = ref('充值明细');
// const data = ref([]);

onMounted(() => {
    GetSzData();
    getHdData();
    getJfData();
});

const GetSzData = async () => {
    const res: any = await getszstream();
    wallet1.value = res.records;
    // page.value.data = wallet.value;
};

const getHdData = async () => {
    const res: any = await gethdstream();

    wallet2.value = res.records;
};

const getJfData = async () => {
    const res: any = await getjfstream();

    wallet3.value = res.records;
};
</script>

<style scoped lang="scss">
.no_data {
    text-align: center;
    color: #fff;
    font-size: 28rpx;
    padding: 20rpx 0;

}
.account_warp {
    background: linear-gradient(180deg, #24234c 0%, #0f0f1c 100%);
    min-height: 100%;
    padding: 0rpx 0 80rpx;
    .account_content {
        display: flex;
        background-color: #52516d;
        .account_btn {
            font-size: 28rpx;
            text-align: center;
            flex: 1;
            padding-top: 40rpx;
            color: #ffffff;
            &.common_btn {
                color: #00baad;
                span {
                    width: 80rpx;
                    height: 12rpx;
                    display: block;
                    background-color: #00baad;
                    border-radius: 10rpx;
                    margin: 10rpx auto 0;
                }
            }
        }
    }
    .account {
        width: 93%;
        margin: 40rpx auto 0;
        background-color: #47465e;
        border-radius: 20rpx;
        box-shadow: 0px 40rpx 80rpx rgba(0, 0, 0, 0.25);
        padding: 30rpx;
        .led {
            width: 96%;
            min-height: 100rpx;
            margin: auto;
            .Activity_warp {
                display: flex;
                width: 100%;
                margin: auto;
                border-bottom: 1px solid #e5e5e5;
                padding: 40rpx 0;
                .Activity_w img {
                    width: 100rpx;
                    display: block;
                    margin: auto;
                }
                .Activity_a {
                    width: 60%;
                    margin: auto 20rpx;
                    line-height: 50rpx;
                    span {
                        font-size: 28rpx;
                        font-weight: bold;
                        color: #f0efef;
                    }
                    p {
                        color: #f0efef;
                        font-size: 24rpx;
                    }
                }
                .Activity_p {
                    font-size: 32rpx;
                    color: #fff;
                    margin: auto;
                }
            }
        }
    }
}
</style>
