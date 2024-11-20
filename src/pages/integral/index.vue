<template>
    <div class="integral_warp">
        <div class="integral">
            <img src="@/static/img/jifen.png" alt="" />
            <div class="da">
                <p>{{ shopInfo.jifen }}</p>
                <span>我的积分</span>
            </div>
        </div>
        <div class="Popular"><img src="@/static/img/yb.png" alt="" /> <span>积分兑好礼</span> <img src="@/static/img/zb.png" alt="" /></div>
        <div class="commodity_warp clearfix">
            <div class="commodity" v-for="item in shopInfo.shop" :key="item.id">
                <img :src="prefixUrl + item.shoppic" />
                <div class="data">
                    <p>${{ item.danjia }}</p>
                    <span>兑换</span>
                </div>
            </div>
            
        </div>
  
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getShop, postQiandao, postShop, postDaihuan, postYaoqing, postFuli } from '@/api'; // Assuming these are imported from your API module
import globalTool from '@/utils/globalTool';
import { useUserStore } from '@/stores/modules/userStore';
import { storeToRefs } from 'pinia';
const userStore = useUserStore();
const { prefixUrl } = storeToRefs(userStore);
const title = ref("");
const news_con = ref("");
const type = ref(null);
const shopInfo = ref<any>({});
const show = ref(false);
const msg = ref("");
const qiandaoLoading = ref(false);
const daihuanLoading = ref(false);
const yaoqingLoading = ref(false);
const fuliLoading = ref(false);
const isLoading = ref(false);


function GetData() {
    getShop().then((res: any) => {
        shopInfo.value = res;
    })
}

function reqpostQiandao() {
    postQiandao().then((res: any) => {
        GetData();
    })
}

function reqpostShop(id: string) {
    postShop(id).then((res: any) => {
        globalTool.showToast('兑换成功');
        GetData();
    })
}

function reqpostDaihuan() {
    postDaihuan().then((res: any) => {
        globalTool.showToast('兑换成功');
        GetData();
    })
}

function reqpostYaoqing() {
    postYaoqing().then((res: any) => {
        globalTool.showToast('领取成功');
        GetData();
    })
}

function reqpostFuli() {
    postFuli().then((res: any) => {
        globalTool.showToast('领取成功');
        GetData();
    })
}

onMounted(() => {
    GetData();
});
</script>
<style scoped lang="scss">
.integral_warp {
    background: -webkit-gradient(linear, left top, left bottom, from(#24234c), to(#0f0f1c));
    background: linear-gradient(180deg, #24234c 0%, #0f0f1c 100%);
    min-height: 100%;
    position: relative;
    padding-bottom: 60rpx;
    .integral {
        padding-top: 100rpx;
        img {
            position: absolute;
            width: 90%;
            left: 40rpx;
            display: block;
        }
        .da {
            position: relative;
            z-index: 2;
            padding-left: 60rpx;
            padding-top: 60rpx;
            p {
                color: #b35900;
                font-size: 48rpx;
            }
            span {
                color: #000000;
                font-size: 28rpx;
                padding-top: 6rpx;
                display: block;
            }
        }
    }
    .Popular {
        padding-top: 120rpx;
        text-align: center;
        display: block;
        margin: 40rpx 0rpx;
        img {
            width: 30%;
            padding: 0 10rpx;
        }
        span {
            color: #ffffff;
            font-size: 32rpx;
        }
    }
    .commodity_warp {
        width: 96%;
        margin: auto;
        .commodity {
            float: right;
            width: 46%;
            margin: 10rpx 2%;
            img {
                width: 100%;
                height: 140px;
                display: block;
                border-radius: 20rpx 20rpx 0 0;
            }
            .data {
                background-color: rgba(255, 255, 255, 0.5);
                padding: 20rpx 0;
                bottom: 20rpx;
                border-radius: 0 0 20rpx 20rpx;
                line-height: 60rpx;
                p {
                    color: #d43030;
                    font-size: 34rpx;
                    text-align: center;
                }
                span {
                    display: block;
                    margin: auto;
                    font-size: 26rpx;
                    background-color: #000000;
                    text-align: center;
                    color: rgba(255, 255, 255, 0.5);
                    width: 95px;
                    line-height: 70rpx;
                    border-radius: 50rpx;
                }
            }
        }
    }
}
</style>
