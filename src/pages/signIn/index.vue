<template>
    <div class="Checkin_warp">
        <div class="kong"><img src="@/static/img/lblblb.png" alt="" /></div>
        <div class="zc"><p @click="qiandao">立即签到</p></div>
        <div></div>
        <uv-popup ref="popup" mode="center">
            <view class="popcontainer">
                <div class="popheader">问题</div>
                <div>{{ timu.wenti }}</div>
                <div class="daan_list">
                    <p :class="{ active: da == 'A' }" @click="da = 'A'">{{ timu.da1 }}</p>
                    <p :class="{ active: da == 'B' }" @click="da = 'B'">{{ timu.da2 }}</p>
                    <p :class="{ active: da == 'C' }" @click="da = 'C'">{{ timu.da3 }}</p>
                </div>
                <div slot="footer">
                    <button class="h-btn" @click="confirm">确定</button>
                </div>
            </view>
        </uv-popup>
    </div>
</template>
<script setup lang="ts">
import { qiandaoDati, qiandaoDatiok, setfollow } from '@/api';
import { ref, onMounted } from 'vue';
import globalTool from '@/utils/globalTool';

const popup = ref<any>(null);
const timu = ref<any>({});
const da = ref('');

const getData = async () => {
    qiandaoDati().then((res: any) => {
        timu.value = res.dati;
        if (!timu.value.id) {
            popup.value.close();
        } 
    });
};

const qiandao = () => {
    if (!!timu.value.id) {
        popup.value.open();
    } else {
        globalTool.showToast('今日不能签到');
    }
};

const confirm = async () => {
    if (da.value === '') {
        globalTool.showToast('请选择答案');
        return;
    }

    qiandaoDatiok(da.value, timu.value.id)
        .then((res: any) => {
            popup.value.close();
            da.value = '';
            SingIn();
        })
        .catch((err: any) => {
            if (err.data?.msg == '回答错误') {
                globalTool.showToast(err.data.msg);
                da.value = '';
                getData();
            }
        });
};

const SingIn = async () => {
    setfollow().then((res: any) => {
        globalTool.showToast(res.msg);
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
.popcontainer {
    width: 600rpx;
    padding: 20rpx;
    border-radius: 20rpx;
    .popheader {
        font-size: 36rpx;
        font-weight: bold;
    }
    .daan_list p {
        border: 1px solid #3a79f7;
        margin: 20rpx 0;
        line-height: 60rpx;
        text-align: center;
        border-radius: 10rpx;
    }
    .daan_list .active {
      background: #3a79f7;
      color: #fff;
    }
}
</style>
