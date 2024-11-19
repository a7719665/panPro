<template>
    <view class="Verified_warp">

        <view class="Verified_one">
            <view>
                <p>实名认证</p>
                <span>请您绑定您的真实信息</span>
            </view>
            <view><img src="@/static/img/shim.png" alt="" /></view>
        </view>

        <view class="Verified_content clearfix">
            <view class="Verified">
                <p>姓名</p>
                <input v-model="realname" border="none" placeholder="请输入姓名" customStyle="margin:auto"></input>
            </view>
            <view class="Verified">
                <p>身份证号</p>
                <input v-model="usecode" border="none" placeholder="请输入身份证" customStyle="margin:auto"></input>
            </view>
            <view class="Verified">
                <p>银行卡号</p>
                <input v-model="bankcode" border="none" placeholder="请输入银行卡号" customStyle="margin:auto"></input>
            </view>
            <view class="Verified">
                <p>银行名称</p>
                <input v-model="bankname" border="none" placeholder="请输入开户行" customStyle="margin:auto"></input>
            </view>
            <view class="Verified">
                <p>开户地址</p>
                <input v-model="bankadd" border="none" placeholder="请输入开户地址" customStyle="margin:auto"></input>
            </view>
            <view class="pz_warp">
                <view class="p"><span>身份证照片</span></view>
                <view class="pz">
                     <uv-upload :fileList="fileList1" name="src1" @afterRead="afterRead($event,1)" @delete="deletePic(1)" :maxCount="1" width="147" height="95">
                         <img src="@/static/imgs/zhengmian.png" /> 
                    </uv-upload>
                    <uv-upload :fileList="fileList2" name="src2" @afterRead="afterRead($event,2)" @delete="deletePic(2)" :maxCount="1" width="147" height="95">
                        <img src="@/static/imgs/fanmian.png" />
                    </uv-upload>
                </view>
            </view>
        </view>
        <view class="Verified_btn" @click="ok">提交</view>
        
    </view>
</template>
<script setup lang="ts">
import { authentication } from '@/api';
import globalTool from '@/utils/globalTool';
import { ref } from 'vue';
const fileList1 = ref<any>([]);
const fileList2 = ref<any>([]);

const realname = ref('彭琼玲'); //真实姓名
const usecode = ref('422825196912080022'); //身份证号
const show = ref(false);
const msg = ref('');
const isClicked = ref(false); //发送按钮是否已点击
const isLogining = ref(false); //登录按钮是否已点击
const user = ref({});
const src1 = ref('');
const bankcode = ref('6217003240030130481');
const bankname = ref('广东中山开户支行');
const bankadd = ref('中山坦洲支行');
const src2 = ref('');

// 删除图片
const deletePic = (index:number) => {
    if(index === 1){
        fileList1.value.splice(0, 1);
        src1.value = '';
    }else{
        fileList2.value.splice(0, 1);
        src2.value = '';
    }
};
// 新增图片
const afterRead = async (event: any,index:number) => {
    // 当设置 multiple 为 true 时, file 为数组格式，否则为对象格式
    let lists = Array.isArray(event.file) ? event.file : [event.file];
    let fileListLen = fileList1.value.length;
    lists.forEach((item: any) => {
        fetch(item.url)
            .then(response => response.blob())
            .then(blob => {
                const reader = new FileReader();
                reader.readAsDataURL(blob);
                reader.onloadend = () => {
                    const base64data = reader.result as string;
                    if(index === 1){
                        fileList1.value.push({
                            ...item,
                            status: 'local',
                            message: '本地已读取',
                            base64: base64data // 存储 Base64 编码
                        });
                    }else{
                        fileList2.value.push({
                            ...item,
                            status: 'local',
                            message: '本地已读取',
                            base64: base64data // 存储 Base64 编码
                        });
                    }

                    console.log('Base64:', base64data);
                    if(index === 1){
                        src1.value = base64data;
                    }else{
                        src2.value = base64data;
                    }
                };
            })
            .catch(error => {
                console.error('Error converting to Base64:', error);
            });
    });
};


const ok = () => {
    if(realname.value === ""){
        globalTool.showToast("请输入您的真实姓名");
    }else if(usecode.value === ""){
        globalTool.showToast("请输入您的身份证号");
    }else if(usecode.value.length !== 18){
        globalTool.showToast("请输入正确的身份证号");
    }else if(/^\d{16,19}$/.test(bankcode.value) === false){
        globalTool.showToast("请输入正确的银行卡号");
    }else if(bankname.value === ""){
        globalTool.showToast("请输入开户行");
    }else if(bankadd.value === ""){
        globalTool.showToast("请输入开户支行");
    }else{
        const params = {
            realname: realname.value,
            usecode: usecode.value,
            con: src1.value,
            con1: src2.value,
            bankcode: bankcode.value,
            bankuser: realname.value,
            bankname: bankname.value,
            bankadd: bankadd.value
        };
        authentication(params).then((res:any) => {
                globalTool.showToast("实名认证成功");
            window.location.href = "/pages/home/my";
        }).catch(() => {
            globalTool.showToast("实名认证失败");
        });
    }
}

</script>
<style scoped lang="scss">
.container {
    height: 100vh;
    background-color: linear-gradient(112.43deg, #5b56ae 0%, #7948ea 100%);
}

.Verified_warp {
    background: linear-gradient(180deg, #24234c 0%, #0f0f1c 100%);
    height: 100%;
    padding-bottom: 60rpx;
    width: 100%;
    padding-top: 0rpx;
    .vux-header {
        background: none !important;
    }
    .Verified_one {
        display: flex;
        position: relative;
        top: 40rpx;
        view {
            color: #fff;
            flex: 1;
            margin: auto;
            text-align: center;
            font-weight: bold;
            img {
                width: 100%;
            }
            p {
                font-size: 80rpx;
            }
            span {
                display: block;
                font-size: 28rpx;
            }
        }
    }
    .Verified_content {
        width: 92%;
        background: #47465e;
        margin: auto;
        box-shadow: 0px 40rpx 80rpx rgba(0, 0, 0, 0.1);
        border-radius: 10rpx;
        position: relative;
        padding: 30rpx 0;
        .Verified {
            border-bottom: 2rpx solid #000000;
            padding: 30rpx 0;
            width: 90%;
            margin: auto;
            display: flex;
            align-items: center;
            p {
                margin-top: 14rpx;
                text-align: left;
                width: 20%;
                color: #fff;
                font-size: 28rpx;
                font-weight: bold;
            }
            
            input {
                background: none;
                border: 0;
                font-size: 28rpx;
                display: block;
                margin: auto;
                &::placeholder {
                    color: rgba(255, 255, 255, 0.5);
                }
                color: #fff;
            }
        }
        .pz_warp {
            position: relative;
            width: 90%;
            margin: 40rpx auto 0;
            .p span {
                font-weight: bold;
                color: #fff;
                font-size: 28rpx;
            }
            .pz {
                display: flex;
                justify-content: space-between;
                margin-top: 30rpx;
                .uv-upload {
                    width: 370rpx;
                    img{
                        margin: 20rpx;
                        width: 294rpx;
                        height: 190rpx;
                    }
                }
            }
        }
    }
    .Verified_btn {
        background: radial-gradient(80% 70%, #7582fc 0%, #f355ff 100%);
        border-radius: 60rpx;
        font-size: 32rpx;
        color: #ffffff;
        text-align: center;
        width: 94%;
        margin: 60rpx auto 0;
        height: 90rpx;
        line-height: 90rpx;
    }
}
</style>
