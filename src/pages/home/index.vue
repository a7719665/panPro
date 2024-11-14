<template>
    <view class="container">
        <uv-swiper :list="slides" height="360rpx" class="" keyName="pic" ></uv-swiper>
        <view class="notice-warp">
            <uv-notice-bar :text="announcementText"  bgColor="#2f2e5e" color="#fff" speed="20"></uv-notice-bar>
        </view>
        <div class="top_content">
            <div class="con_list">
                <div @click="toGreat">
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
            <div class="ctiv_warp"><img src="@/static/img/huo1.png" /> 
                <img src="@/static/img/huo2.png"/>
                 <img src="@/static/img/huo3.png" /></div>
        </div>

        <div class="Popular"><img src="@/static/img/yb.png" alt="" /> <span>信用卡知识</span> <img src="@/static/img/zb.png" alt="" /></div>
        <div class="division_warp">
            <div class="division" v-for="item in creditCardList" :key="item.id" @click="toCreditCard(item)">
                <image :src="prefixUrl + item.pic" mode="widthFix" />
                <p>{{ item.title }} <span>{{item.hits}}阅读</span></p>
            </div>
        </div>
    </view>
</template>

<script setup>
import { getbanner, getuserdetail, getIndex } from '@/api';
import { useUserStore } from '@/stores/modules/userStore';
import { storeToRefs } from 'pinia';
const userStore = useUserStore();
const { prefixUrl } = storeToRefs(userStore);
const toGreat = () => {
    uni.navigateTo({
        url: '/pages/great/index'
    });
};
//公告text
const announcementText = ref('')
let announcementList = []
//信用卡知识list
const creditCardList = ref([])
const list = ref(['https://cdn.uviewui.com/uview/swiper/swiper1.png', 'https://cdn.uviewui.com/uview/swiper/swiper2.png', 'https://cdn.uviewui.com/uview/swiper/swiper3.png']);
const slides = ref([]);
const reqBanner = () => {
    getbanner().then((res) => {
        res.banner.forEach((item) => {
            item.pic = prefixUrl.value + item.pic;
        });
        slides.value = res.banner;
    });
};
const data = ref({});
const InitData = () => {
    getuserdetail().then((res) => {
        data.value = res;
    });
};
const indexData = ref({});
const ulList = ref([]);
const remen = ref([]);
const adv_ = ref(false);
const getIndexData = () => {
    getIndex().then((res) => {
        // data.value = res;
        creditCardList.value = res.zixun;
        announcementList = res.gonggao.map((item)=>{
            return item.usename;
        })
        announcementText.value = announcementList.join(' ');
        if (indexData.value.tanchuang != '') {
            adv_.value = true;
        }
    });
};
const toCreditCard = (item) => {
    window.open(item.con);
};
onMounted(() => {
});
onShow(() => {
    if (ulList.value.length == 0) {
        reqBanner();
        InitData();
        getIndexData();
    }
});
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
    display: flex;
    
    .ctiv_warp {
        flex: 1;
        line-height:90rpx;
    }
    img {
        width: 100%;
        display: block;
        margin-bottom: 10px;
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
    display: flex;
    flex-wrap: wrap;
    .division {
        width: 44%;
        margin: 10rpx 20rpx; /* 0.05rem x 200 = 10rpx, 1% x 200 = 20rpx */
        background-color: #2f2e5e;
        border-radius: 30rpx 30rpx 30rpx 30rpx; /* 0.15rem x 200 = 30rpx */
    }
    image {
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
