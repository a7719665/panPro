<template>
    <div class="team_warp">
        <img src="@/static/img/jiang.png" alt="" />
        <div class="team">
            <div class="te_warp">
                <div class="te">
                    <p>{{ datalist.zhitui }}</p>
                    <span>直推总数</span>
                </div>
                <div class="te">
                    <p>{{ datalist.teams }}</p>
                    <span>团队总数</span>
                </div>
            </div>
            <div class="te_warp" style="margin-top: 0.18rem">
                <div class="te">
                    <p style="color: rgb(255, 246, 93)">￥{{ datalist.chong }}</p>
                    <span>团队充值</span>
                </div>
                <div class="te">
                    <p style="color: rgb(255, 153, 0)">￥{{ datalist.tixian }}</p>
                    <span>团队提现</span>
                </div>
            </div>
        </div>
        <div class="acting_warp">
            <div class="act" :class="{ active: type === 1 }" @click="changeType(1)">
                <p>一级代理</p>
                <span></span>
            </div>
            <div class="act" :class="{ active: type === 2 }" @click="changeType(2)">
                <p>二级代理</p>
                <span></span>
            </div>
            <div class="act" :class="{ active: type === 3 }" @click="changeType(3)">
                <p>三级代理</p>
                <span></span>
            </div>
        </div>
        <!---->
        <div class="data_warp">
            <div class="data" v-for="(item, index) in teams" :key="index">
                <p>
                    手机号：<span>{{ item.name }}</span
                    ><i
                        >总充值: <span>￥{{ item.chong }}</span></i
                    >
                </p>
                <em
                    >{{ item.regtime
                    }}<i
                        >总提现: <span>￥{{ item.tixian }}</span></i
                    ></em
                >
            </div>
        </div>
        <div class="vux-toast">
            <div class="weui-mask_transparent" style="display: none"></div>
            <div class="weui-toast weui-toast_text vux-toast-middle" style="width: 200px; display: none">
                <i class="weui-icon-success-no-circle weui-icon_toast" style="display: none"></i>
                <p class="weui-toast__content"></p>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getrankings } from '@/api';
const stradeinfo = ref('');
const show = ref(false);
const msg = ref('');
const select = ref(1);
const type = ref(1);
const team1 = ref([]);
const page = ref({
    PageSize: 10,
    PageNumber: 1
});
const notdata = ref(false);
const datacount = ref('');
const show_load = ref(false);
const datalist = ref<any>({});
const teams = ref<any[]>([]);

const getData = async () => {
    const res: any = await getrankings();
    //     {
    //   "result": "true",
    //   "yue": 0,
    //   "shouchong": 0,
    //   "chong": 0,
    //   "tixian": 0,
    //   "yongjin": 0,
    //   "jinri": 0,
    //   "zuori": 0,
    //   "teams": "0",
    //   "zhitui": "0",
    //   "xinzeng": "0",
    //   "team1": [],
    //   "team2": [],
    //   "team3": []
    // }
    datalist.value = res;
    teams.value = datalist.value.team1;
};

const changeType = (index: number) => {
    console.log(index);
    type.value = index;

    //     {
    //   "name": "130 **** 0000",
    //   "benjin": 359957,
    //   "chong": 0,
    //   "tixian": 1500,
    //   "regtime": "2022-07-10 00:00:00"
    // }
    if (index === 1) {
        teams.value = datalist.value.team1;
    } else if (index === 2) {
        teams.value = datalist.value.team2;
    } else if (index === 3) {
        teams.value = datalist.value.team3;
    }
};

const GetPhone = (m: string) => {
    //加密手机号码
    const tel = String(m);
    const dh = tel.substr(0, 3) + '****' + tel.substr(7);
    return dh;
};

const getccData = () => {
    datalist.value = [];
    getData();
};

const gethtData = () => {
    datalist.value = [];
    // getHistory();
};

// const getMoreList = () => {
//     if (Math.ceil(datacount.value / 10) > page.value.PageNumber) {
//         page.value.PageNumber++;
//         if (Math.ceil(datacount.value / 10) > 1) {
//             show_load.value = true;
//             notdata.value = false;
//         }
//         if (select.value === 1) {
//             getData();
//         } else {
//             getHistory();
//         }
//     } else {
//         notdata.value = true;
//     }
// };

onMounted(() => {
    getData();
});
</script>
<style scoped lang="scss">
.team_warp {
    background: -webkit-gradient(linear, left top, left bottom, from(#24234c), to(#0f0f1c));
    background: linear-gradient(180deg, #24234c 0%, #0f0f1c 100%);
    width: 100%;
    min-height: 100vh;
    position: relative;
    padding-top: 20rpx;
    .vux-header-title {
        font-size: 32rpx !important;
        height: 80rpx !important;
        font-size: 28rpx !important;
        line-height: 100rpx !important;
        color: #ffffff !important;
        font-size: 34rpx !important;
        font-weight: 550 !important;
    }
    .vux-header .vux-header-left .left-arrow:before {
        border-color: #ffffff !important;
    }
    img {
        width: 90%;
        margin: auto;
        position: absolute;
        left: 20rpx;
    }
    .team {
        position: relative;
        z-index: 4;
        top: 40rpx;
        .te_warp {
            width: 50%;
            margin: 0 80rpx;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            .te {
                -webkit-box-flex: 1;
                -ms-flex: 1;
                flex: 1;
                p {
                    color: #ffffff;
                    font-size: 26rpx;
                }
                span {
                    font-size: 32rpx;
                    color: #ffffff;
                }
            }
        }
    }
    .acting_warp {
        position: relative;
        top: 140rpx;
        width: 90%;
        margin: auto;
        background-color: rgba(0, 0, 0, 0.42);
        line-height: 100rpx;
        border-radius: 20rpx 20rpx 0 0;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        .active {
            color: #000 !important;
            font-weight: bold !important;
            span {
                background: radial-gradient(100% 80%, #7582fc 0%, #f355ff 100%);
                width: 52px;
                height: 6px;
                border-radius: 20rpx;
                display: block;
                margin: auto;
            }
        }
        .act {
            -webkit-box-flex: 1;
            -ms-flex: 1;
            flex: 1;
            p {
                color: #ffffff;
                font-size: 26rpx;
                text-align: center;
            }
        }
    }
    .data_warp {
        position: relative;
        top: 140rpx;
        width: 90%;
        margin: auto;
        background-color: rgba(255, 255, 255, 0.13);
        border-radius: 0;
        .data {
            padding: 20rpx 20rpx;
            border-bottom: solid #e5e5e5 1rpx;
            p {
                margin-top: 10rpx;
                color: #ffffff;
                font-size: 28rpx;
                i {
                    color: #ffffff;
                    font-size: 24rpx;
                    font-style: normal;
                    float: right;
                    span {
                        color: #ff8d1a;
                        font-size: 24rpx;
                    }
                }
            }
            em {
                display: block;
                margin-top: 10rpx;
                color: #b5b5b5;
                font-size: 20rpx;
                font-style: normal;
                i {
                    color: #69c232;
                    font-size: 24rpx;
                    font-style: normal;
                    float: right;
                }
            }
        }
    }
}
</style>
