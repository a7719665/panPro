<template>
    <div class="Checkin_warp">
        <div class="kong"><img src="@/static/img/lblblb.png" alt="" /></div>
        <div class="zc"><p @click="qiandao">立即签到</p></div>
        <div></div>
      
    </div>
</template>
<script setup lang="ts">
import { qiandaoDati, qiandaoDatiok, setfollow } from '@/api';
import { ref, onMounted } from 'vue';
import { useUserStore } from '@/stores/modules/userStore';
import { storeToRefs } from 'pinia';
import globalTool from '@/utils/globalTool';

const userStore = useUserStore();
const { prefixUrl } = storeToRefs(userStore);

const opened = ref(false);
const show = ref(false);
const msg = ref("");
const timu = ref<any>({});
const da = ref("");

const getData = async () => {
    qiandaoDati().then((res: any) => {
        timu.value = res.data.dati;
    });
};

const qiandao = () => {
    if(!!timu.value.id){
        opened.value = true;
    } else {
        globalTool.showToast('今日不能签到');
    }
};

const confirm = async () => {
    if(da.value === ''){
        globalTool.showToast("请选择答案");
        return;
    }

    qiandaoDatiok( da.value, timu.value.id).then((res: any) => {
        if(res.data.result === 'true'){
            opened.value = false;
            da.value = '';
            SingIn();
        }
    }).catch((err: any) => {
        globalTool.showToast(err.message);
        da.value = '';
        getData();
    });
};

const SingIn = async () => {
    setfollow().then((res: any) => {
        globalTool.showToast(res.data.msg);
    });
};



const withdraw = () => {
    uni.navigateTo({
        url: '/pages/withdraw/index'
    });
};

onMounted(() => {
    getData();
    console.log('签到');
});
</script>
<style scoped lang="scss">
.Checkin_warp {
    background: linear-gradient(180deg, #24234c 0%, #0f0f1c 100%);
    min-height: 100vh;
    padding-top: 60rpx; // 0.3rem * 200 = 60rpx
    position: relative;
    .kong {
        margin-left: 40rpx; // 0.2rem * 200 = 40rpx
        img {
            position: absolute;
            padding-top: 120rpx; // 0.6rem * 200 = 120rpx
            width: 90%;
        }
        p {
            padding-top: 210rpx; // 1.05rem * 200 = 210rpx
            position: relative;
            z-index: 3;
            color: #ffffff;
            font-size: 28rpx; // 0.14rem * 200 = 28rpx
            padding-left: 40rpx; // 0.2rem * 200 = 40rpx
        }
    }
    .zc {
        width: 75%;
        margin: auto;
        top: 760rpx; // 3.8rem * 200 = 760rpx
        position: relative;
        z-index: 2;
        p {
            text-align: center;
            background: radial-gradient(50% 100%, #7582fc 0%, #f355ff 100%);
            border-radius: 70rpx; // 0.35rem * 200 = 70rpx
            font-size: 30rpx; // 0.15rem * 200 = 30rpx
            font-weight: bold;
            color: #ffffff;
            line-height: 98rpx; // 0.49rem * 200 = 98rpx
        }
    }
}
</style>
