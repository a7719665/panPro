<template>
    <div class="note_warp">
        <div class="login_bgg">
            <img src="@/static/img/logo1.png" alt="" />
            <p>鸿运</p>
        </div>
        <div class="zke" style="margin: 60rpx 0px">
            <div class="zk">
                <div>
                    <p @click="toLogin" style="font-size: 36rpx; font-weight: 500">登录</p>
                    <span style="background: none"></span>
                </div>
                <div>
                    <p>注册</p>
                    <span></span>
                </div>
            </div>
            <uv-form labelPosition="left" :model="info" ref="form">
                <uv-form-item label="" prop="usename">
                    <uv-input
                        color="#000"
                        shape="circle"
                        :customStyle="{
                            backgroundColor: '#f0f0f0' // 自定义背景色
                        }"
                        prefixIcon="account"
                        v-model="info.username"
                        placeholder="请输入手机号"
                    >
                    </uv-input>
                </uv-form-item>
                <!-- 图形验证码 -->
                <uv-form-item label="" prop="code">
                    <uv-input
                        color="#000"
                        shape="circle"
                        :customStyle="{
                            backgroundColor: '#f0f0f0' // 自定义背景色
                        }"
                        prefixIcon="account"
                        v-model="info.code"
                        placeholder="请输入图形码"
                        autocomplete="off"
                    >
                    </uv-input>
                </uv-form-item>
                <!-- 密码 -->
                <uv-form-item label="" prop="password">
                    <uv-input
                        color="#000"
                        password
                        shape="circle"
                        :customStyle="{
                            backgroundColor: '#f0f0f0' // 自定义背景色
                        }"
                        prefixIcon="lock"
                        v-model="info.password"
                        placeholder="请输入密码"
                    >
                    </uv-input>
                </uv-form-item>
                <!-- 确认密码 -->
                <uv-form-item label="" prop="password2">
                    <uv-input
                        color="#000"
                        password
                        shape="circle"
                        :customStyle="{
                            backgroundColor: '#f0f0f0' // 自定义背景色
                        }"
                        prefixIcon="lock"
                        v-model="info.password2"
                        placeholder="请输入确认密码"
                    ></uv-input>
                </uv-form-item>
                <!-- 邀请码 -->
                <uv-form-item label="" prop="childrenCode">
                    <uv-input
                        color="#000"
                        shape="circle"
                        placeholder="请输入邀请码"
                        :customStyle="{
                            backgroundColor: '#f0f0f0' // 自定义背景色
                        }"
                        v-model="info.childrenCode"
                    ></uv-input>
                </uv-form-item>
            </uv-form>
            <div class="zc">注册</div>
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
import { getpassword, userregister } from '@/api';
import globalTool from '@/utils/globalTool';
const info = ref({
    username: '', //手机号
    password: '', //密码
    password2: '',
    code: '', //验证码
    tjm: '', //推荐码
    choice: '1' //是否同意服务条款
});

const getpassTime = ref(180); //计时
const submitBtn = ref('获取验证码'); //发送按钮提示信息
const isClicked = ref(false); //发送按钮是否已点击
const isLogining = ref(false); //登录按钮是否已点击
const isLoading = ref(false);
const identifyCode = ref('');
const childrenCode = ref('');

const toLogin = () => {
    uni.navigateTo({
        url: '/pages/login/index'
    });
};

const getIdentifyCode = (code: any) => {
    childrenCode.value = code;
};

const timerun = () => {
    getpassTime.value--;
    if (getpassTime.value == -1) {
        submitBtn.value = '重新发送';
        getpassTime.value = 60;
        isClicked.value = false;
        return;
    }
    submitBtn.value = `${getpassTime.value} s`;
    setTimeout(timerun, 1000);
};

// const getPassword = () => {
//     if(info.value.username === ''){
//         sendMsg("请输入手机号");
//     } else if (info.value.username.length !== 11) {
//         sendMsg("请填写正确的电话号码！");
//     } else {
//         isClicked.value = false;
//         getPwd();
//     }
// };

// const getPwd = () => {
//     if(isClicked.value){
//         return;
//     }
//     getpassword(info.value.username).then((res) => {

//         isClicked.value = true;
//         submitBtn.value = `${getpassTime.value} s`;
//         timerun();
//     }).catch(() => {
//         globalTool.showToast('验证码发送失败');
//     });
// };

const register = () => {
    if (info.value.username === '') {
        sendMsg('请输入手机号');
    } else if (info.value.username.length !== 11) {
        sendMsg('请填写正确的电话号码！');
    } else if (info.value.password === '') {
        sendMsg('请输入密码');
    } else if (info.value.password !== info.value.password2) {
        sendMsg('请确保两次密码输入一致');
    } else if (info.value.code === '') {
        sendMsg('请输入验证码');
    } else if (info.value.code === '' || info.value.code.toUpperCase() !== childrenCode.value) {
        sendMsg('请输入正确的验证码');
    } else if (info.value.tjm === '') {
        sendMsg('请输入推荐码');
    } else if (info.value.choice === '0') {
        sendMsg('请阅读并同意服务条款');
    } else if (info.value.password.length < 6 || info.value.password.length > 16) {
        sendMsg('密码长度为6-16位');
    } else {
        const params = {
            Mobile: info.value.username,
            Password: info.value.password,
            SMSValidateCode: info.value.code,
            bianhao: info.value.tjm
        };
        userregister(params)
            .then((res) => {
                globalTool.showModal('注册成功', () => {
                    uni.navigateTo({
                        url: '/pages/login/index'
                    });
                });
            })
            .catch(() => {
                globalTool.showToast('注册失败');
            });
    }
};

const getagreement = () => {
    window.location.href = '#/pages/agreement?data=3';
};

onLoad((options: any) => {
    info.value.tjm = options.bianhao;
    console.log(options);
});

onMounted(() => {
    console.log(info.value);
});
</script>
<style lang="scss" scoped>
.note_warp {
    background: -webkit-gradient(linear, left top, left bottom, from(#24234c), to(#0f0f1c));
    background: linear-gradient(180deg, #24234c 0%, #0f0f1c 100%);
    min-height: 100vh;
    padding-top: 100rpx;
    .login_bgg {
        img {
            width: 35%;
            display: block;
            margin: auto;
            border-radius: 200rpx;
        }
        p {
            font-size: 72rpx;
            font-weight: bold;
            letter-spacing: 2rpx;
            line-height: 84.68rpx;
            color: #fff;
            text-align: center;
            margin-top: 30rpx;
        }
    }
    .zke {
        border-radius: 60rpx 60rpx 0 0;
        background: rgba(255, 255, 255, 0.02);
        -webkit-box-shadow: inset 0px 4rpx 8rpx rgba(255, 255, 255, 0.25);
        box-shadow: inset 0px 4rpx 8rpx rgba(255, 255, 255, 0.25);
        width: 100%;
        padding: 0 40rpx;
        position: absolute;
        bottom: 0;
        margin: 300rpx 0 100rpx;
        .zk {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            width: 60%;
            margin-top: 40rpx;
            div {
                margin: auto;
                p {
                    color: #fff;
                    font-size: 48rpx;
                    font-weight: bold;
                }
                span {
                    display: inline-block;
                    background: #7948ea;
                    width: 60rpx;
                    height: 14rpx;
                    margin-left: 8rpx;
                    border-radius: 60rpx;
                }
            }
        }
        .register {
            input {
                width: 90%;
                display: block;
                margin: 30rpx auto;
                height: 100rpx;
                border-radius: 100rpx;
                border: 0;
                padding-left: 100rpx;
            }
            ::-webkit-input-placeholder {
                color: #999999;
            }
            img {
                width: 8%;
                position: absolute;
                z-index: 3;
                left: 90rpx;
                margin-top: 30rpx;
            }
        }
        .password_control {
            width: 90%;
            margin: auto;
            span {
                font-size: 28rpx;
                color: #666666;
                img {
                    width: 32rpx;
                    vertical-align: middle;
                }
            }
            .jizhu {
                float: right;
            }
        }
        .zc {
            width: 90%;
            margin: auto;
            text-align: center;
            background: radial-gradient(75.86% 100%, #7582fc 0%, #f355ff 100%);
            border-radius: 60rpx;
            font-size: 40rpx;
            color: #ffffff;
            line-height: 108rpx;
            height: 108rpx;
            margin-top: 40rpx;
        }
    }
}
</style>
