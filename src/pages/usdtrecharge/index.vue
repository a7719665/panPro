<template>
    <view class="container">
        <img src="@/static/img/ccczzz.png" alt="" class="kef" @click="serviceClick" />
        <i class="lxkfbtn">联系客服</i>

        <div class="cz">
            <p>充值金额（请不要充整数）</p>
            <uv-input type="nimber" placeholder="请输入充值金额" class="bg-white" v-model="money" />
        </div>

        <div class="pz">
            <p>上传凭证（付款成功截图）</p>
            <!-- <input ref="pingzheng" type="file" accept="image/png, image/jpeg" style="display: none" @change="fileChange"/> -->

            <uv-upload :fileList="fileList1" name="6" @afterRead="afterRead" @delete="deletePic" :maxCount="1" width="250" height="150">
                <img src="@/static/img/jiapz.png" alt="" @click="chooseFile" />
            </uv-upload>
        </div>

        <div class="ts">
            <img src="@/static/img/gant.png" alt="" /> <span>温馨提示</span>
            <p>1：需要银行卡充值转账请联系在线客服索要专属收款银行卡号。</p>
            <p>2：完成充值后，请上传交易凭证，并点击我已完成支付，等待系统审核到账。</p>
            <p>3：由于会员充值过多，转账成功后请联系在线客服核实。</p>
        </div>
        <div class="zf" @click="ok">我已完成充值</div>
    </view>
</template>
<script setup lang="ts">
import globalTool from '@/utils/globalTool';
import { bankRecharge } from '@/api';
const handlePay = () => {
    uni.navigateTo({
        url: '/pages/pay/index'
    });
};
const pingzheng = ref<HTMLInputElement | null>(null);
const money = ref('');
const beizhu = ref('');
const src = ref('');
const fileList1 = ref<any>([]);
// 删除图片
const deletePic = (event: any) => {
    fileList1.value.splice(event.index, 1);
};
const serviceClick = () => {
    uni.switchTab({
        url: '/pages/service/index'
    });
};
// 新增图片
const afterRead = async (event: any) => {
    // 当设置 multiple 为 true 时, file 为数组格式，否则为对象格式
    let lists = Array.isArray(event.file) ? event.file : [event.file];
    let fileListLen = fileList1.value.length;
    // lists.forEach((item: any) => {
    //     fileList1.value.push({
    //         ...item,
    //         status: 'uploading',
    //         message: '上传中'
    //     });
    // });
    // for (let i = 0; i < lists.length; i++) {
    //     const result = await uploadFilePromise(lists[i].url);
    //     let item = fileList1.value[fileListLen + i];
    //     fileList1.value.splice(fileListLen + i, 1, {
    //         ...item,
    //         status: 'success',
    //         message: '',
    //         url: result
    //     });
    // }
    lists.forEach((item: any) => {
        fetch(item.url)
            .then((response) => response.blob())
            .then((blob) => {
                const reader = new FileReader();
                reader.readAsDataURL(blob);
                reader.onloadend = () => {
                    const base64data = reader.result as string;
                    fileList1.value.push({
                        ...item,
                        status: 'local',
                        message: '本地已读取',
                        base64: base64data // 存储 Base64 编码
                    });

                    console.log('Base64:', base64data);
                    src.value = base64data;
                };
            })
            .catch((error) => {
                console.error('Error converting to Base64:', error);
            });
    });
};
const uploadFilePromise = (url: string) => {
    return new Promise((resolve, reject) => {
        uni.uploadFile({
            url: 'http://192.168.2.21:7001/upload', // 仅为示例，非真实的接口地址
            filePath: url,
            name: 'file',
            formData: {
                user: 'test'
            },
            success: (res) => {
                setTimeout(() => {
                    resolve(res.data);
                }, 1000);
            },
            fail: (err) => {
                reject(err);
            }
        });
    });
};

const randomString = (len: number) => {
    let $chars = 'ABCDEFGHJKMNPQRSTWXYZ2345678';
    let maxPos = $chars.length;
    let pwd = '';
    for (let i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
};

const chooseFile = () => {
    pingzheng.value?.click();
};

const fileChange = (e: Event) => {
    console.log(e);
    let file = (e.target as HTMLInputElement).files![0];
    console.log(file);

    let formdata = new FormData();
    formdata.append('图片的字段名', file);
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
        src.value = reader.result?.toString() || '';
    };
};

const ok = () => {
    if (money.value === '') {
        globalTool.showToast('请输入充值金额');
    } else if (src.value === '') {
        globalTool.showToast('请输入上传充值凭证');
    } else {
        bankRecharge(money.value, beizhu.value, src.value, '3').then((res) => {
            globalTool.showModal('提交成功', () => {
                uni.navigateBack();
            });
        });
    }
};
onMounted(() => {
    beizhu.value = randomString(6);
});
</script>
<style lang="scss" scoped>
.container {
    width: 100vw;
    min-height: 100vh;
    background: #f2f2f2;
}
.kef {
    width: 100%;
    margin: auto;
    display: block;
}
.cz {
    width: 90%;
    margin: 0 auto;
    margin-top: -48rpx;
    p {
        color: #000;
        font-size: 30rpx; /* 0.15rem * 200 */
        margin-bottom: 20rpx; /* 0.1rem * 200 */
        font-weight: 700;
    }
    input {
        width: 95%;
        line-height: 100rpx; /* 0.5rem * 200 */
        border: none;
        margin: auto;
        display: block;
        font-size: 28rpx; /* 0.14rem * 200 */
        padding-left: 40rpx; /* 0.2rem * 200 */
    }
}
.pz {
    width: 90%;
    margin: 20rpx auto; /* 0.1rem * 200 */
    display: block;
    p {
        color: #000;
        font-size: 30rpx; /* 0.15rem * 200 */
        font-weight: 700;
    }
    img {
        width: 45%;
        margin-top: 20rpx; /* 0.1rem * 200 */
    }
}
.ts {
    width: 90%;
    margin: auto;
    display: block;
    line-height: 40rpx; /* 0.2rem * 200 */
    img {
        width: 7.8%; /* 3.9% * 200 */
        vertical-align: middle;
    }
    span {
        font-size: 26rpx; /* 0.13rem * 200 */
        color: #000;
        vertical-align: middle;
        font-weight: 700;
    }
    p {
        font-size: 26rpx; /* 0.13rem * 200 */
        color: #474747;
    }
}
.zf {
    text-align: center;
    width: 90%;
    margin: 60rpx auto; /* 0.3rem * 200 */
    background: radial-gradient(75.86% 150%, #7582fc 0, #f355ff 100%);
    font-size: 32rpx; /* 0.16rem * 200 */
    color: #fff;
    line-height: 90rpx; /* 0.45rem * 200 */
    border-radius: 70rpx; /* 0.35rem * 200 */
}
.lxkfbtn {
    position: absolute;
    z-index: 5;
    left: 40rpx;
    top: 280rpx;
    border-radius: 50rpx;
    font-style: normal;
    color: #fff;
    padding: 12rpx 40rpx;
    background-color: #7948ea;
}
</style>
