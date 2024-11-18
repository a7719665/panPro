<template>
    <view class="container">
        <div class="img"><img class="imgs" src="@/static/img/hkefu.png" alt="" /></div>
        <div class="fu">
            <p @click="getUrl"><img src="@/static/img/xiao.png" alt="" />在线客服</p>
        </div>

        <div class="gd">
            <span>常见问题</span>
            <div>
                <p v-for="item in apistradeList" :key="item.id" @click="open(item.con)">{{item.title}} <img src="@/static/img/youjian.png" alt="" /></p>
         
            </div>
        </div>
    </view>
</template>
<script lang="ts" setup>
import { getapistrade } from '@/api';
import { onMounted } from 'vue';
const apistradeList = ref<any[]>([]);
const open = (con: string) => {
    window.open(con)
}

const tousu = ref("");
const kefu = ref("");
const type = ref('chaton');//chaton,
const url = ref('');
const dataList = ref({});

const getUrl = () => {
    const token = uni.getStorageSync('token');
    url.value = `/api/kefu_url.php?token=${token}&type=${type.value}`;
    uni.navigateTo({
        url: `/pages/chatcon/index?url=${url.value}`
    });
    console.log(url.value);
}



const GetData = () => {
    var that = this;
    getapistrade().then((res:any) => {
        apistradeList.value = res.cai;
    });
}



onMounted(() => {
    GetData();
});
</script>
<style lang="scss" scoped>
.container {
    min-height: 100vh;
    background: linear-gradient(180deg, #24234c, #0f0f1c);
}
.imgs {
    width: 100%;
    position: absolute;
    top: -120rpx;
}
.fu {
    position: relative;
    top: 282rpx;
    left: 40rpx;
    p {
        width:146px;
        text-align: center;
        font-weight: 700;
        letter-spacing: 3.2rpx;
        line-height: 90rpx;
        font-size: 34rpx;
        border-radius: 100rpx;
        color: #fff;
        background: -webkit-gradient(linear, left top, left bottom, from(#c78cff), to(#643ab8));
        background: linear-gradient(180deg, #c78cff, #643ab8);
    }
    img {
        width: 22px;
        vertical-align: text-top;
        margin-right: 10rpx;
    }
}
.gd {
    position: relative;
    top: 460rpx;
    background-color: hsla(0, 0%, 100%, 0.25);
    width: 95%;
    margin: auto;
    padding: 20rpx 40rpx 60rpx;
    border-radius: 20rpx;
    span {
        display: block;
        line-height: 80rpx;
        color: #fff;
        font-size: 32rpx;
        font-weight: 400;
        font-weight: 700;
    }
    
        p {
            margin-top: 30rpx;
            color: hsla(0, 0%, 100%, 0.75);
            font-size: 28rpx;
            vertical-align: middle;
            border-bottom: 2rpx solid hsla(0, 0%, 100%, 0.25);
            padding-bottom: 30rpx;
        }
        img {
            width: 5%;
            vertical-align: middle;
            float: right;
            margin-top: 10rpx;
        }
    
}
</style>
