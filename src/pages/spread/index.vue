<template>
    <div class="invite_warp">
        <img src="@/static/img/yqyqyqyq.png" alt="" class="yaoqinghaoyou" />
        <div class="fenxiang">
            <div class="feng">
                <canvas id="qrcode" canvas-id="qrcode" style="width: 200px; height: 200px"></canvas>
            </div>

            <div class="fen">
                <p><i></i></p>
                <div data-clipboard-text="" class="invite_btn code-copy-btn">复制分享链接</div>
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
import { getInvest } from '@/api';
import { nextTick } from 'vue';
import UQRCode from 'uqrcodejs'; // npm install uqrcodejs
import globalTool from '@/utils/globalTool';
const show = ref(false);
const msg = ref(null);
const spreadurl = ref('');
const pic = ref('');
const bianhao = ref('');
const qrCodeUrl = ref('');

const creatQrCode = () => {
    // 获取uQRCode实例
    var qr = new UQRCode();
    // 设置二维码内容
    qr.data = spreadurl.value;
    // 设置二维码大小，必须与canvas设置的宽高一致
    qr.size = 120;
    // 调用制作二维码方法
    qr.make();
    // 获取canvas上下文
    var canvasContext = uni.createCanvasContext('qrcode', this); // 如果是组件，this必须传入
    // 设置uQRCode实例的canvas上下文
    qr.canvasContext = canvasContext;
    // 调用绘制方法将二维码图案绘制到canvas上
    qr.drawCanvas();
};

const getData = async () => {
    getInvest()
        .then((res: any) => {
            bianhao.value = res.bianhao;
            spreadurl.value = `${location.origin}/#/pages/register?bianhao=${res.bianhao}`;
            creatQrCode();
        })
        .catch((err: any) => {
            console.log(err);
            globalTool.showModal(err.data.msg, () => {
                uni.switchTab({
                    url: '/pages/my/index',
                });
            });
        });
};

onMounted(() => {
    getData();
    // creatQrCode();
});
</script>
<style scoped lang="scss">
.invite_warp {
    width: 100%;
    height: 100%;
    .vux-header-title {
        font-size: 32rpx !important;
        height: 80rpx !important;
        line-height: 100rpx !important;
        color: #bd5e00 !important;
        font-weight: 400 !important;
    }
    .yaoqinghaoyou {
        width: 100%;
        position: absolute;
    }
    .fenxiang {
        position: relative;
        z-index: 19;
        top: 840rpx;
        display: flex;
        width: 90%;
        margin: auto;
        .feng {
            margin: 20rpx auto;
            margin-right: 20rpx;
            img {
                width: 140rpx;
                display: block;
                margin: auto;
            }
        }
        .fen {
            margin: auto;
            width: 50%;
            font-weight: bold;
            word-break: break-all;
            p {
                color: #ffffff;
                font-size: 30rpx;
            }
            i {
                font-style: normal;
                display: block;
                word-break: break-all;
                color: #fff;
            }
            div {
                display: block;
                border-radius: 50rpx;
                color: #eb2d45;
                font-size: 28rpx;
                background: linear-gradient(180deg, #ffe8a0 0%, #ffc752 100%);
                width: 300rpx;
                line-height: 80rpx;
                text-align: center;
                margin: 20rpx auto;
            }
        }
    }
}
</style>
