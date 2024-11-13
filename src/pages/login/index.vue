<template>
    <div class="container">
        <div class="note_warp">
            <div class="login_bgg">
                <img src="@/static/img/logo1.png" alt="" />
                <p>鸿运</p>
            </div>

            <div class="botpanel" v-if="isLogin">
                <div class="zk">
                    <div @click="isLogin = true">
                        <p class="login_title">登录</p>
                        <span class="login_span"></span>
                    </div>
                    <div @click="isLogin = false">
                        <p class="register_title  mb-40rpx">注册</p>
                        <span style="background: none"></span>
                    </div>
                </div>
                <uv-form labelPosition="left" :model="info" :rules="rules" ref="form">
                    <uv-form-item label="" :prop="info.mobile">
                        <uv-input
                            color="#000"
                            shape="circle"
                            :customStyle="{
                                backgroundColor: '#f0f0f0' // 自定义背景色
                            }"
                            prefixIcon="account"
                            v-model="info.mobile"
                            placeholder="请输入手机号"
                        >
                        </uv-input>
                    </uv-form-item>
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
                    <view class="flex justify-between color-#666">
                        <uv-checkbox-group v-model="checkboxValue" shape="circle">
                            <uv-checkbox v-model="info.remember" :customStyle="{ marginBottom: '8px' }" name="记住密码">记住密码</uv-checkbox>
                        </uv-checkbox-group>
                        <span class="forget_password" @click="toForgetPassword">忘记密码？</span>
                    </view>
                    <!-- <uv-button type="primary" text="登录" @click="submit"></uv-button> -->
                    <div class="login_btn">登录</div>
                </uv-form>
            </div>
            <div class="botpanel_register" v-else>
                <div class="zk">
                    <div @click="isLogin = true">
                        <p class="register_title mb-40rpx">登录</p>
                        <span style="background: none"></span>
                    </div>
                    <div @click="isLogin = false">
                        <p class="login_title">注册</p>
                        <span class="login_span"></span>
                    </div>
                </div>
                <uv-form labelPosition="left" :model="info" :rules="rules" ref="form">
                    <uv-form-item label="" :prop="info.mobile">
                        <uv-input
                            color="#000"
                            shape="circle"
                            :customStyle="{
                                backgroundColor: '#f0f0f0' // 自定义背景色
                            }"
                            prefixIcon="account"
                            v-model="info.mobile"
                            placeholder="请输入手机号"
                        >
                        </uv-input>
                    </uv-form-item>
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
                            placeholder="请输入图形码"
                        >
                        </uv-input>
                    </uv-form-item>
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
                            placeholder="请输入登录密码"
                        >
                        </uv-input>
                    </uv-form-item>
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
                            placeholder="请确认登录密码"
                        >
                        </uv-input>
                    </uv-form-item>
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
                            placeholder="请输入邀请码"
                        >
                        </uv-input>
                    </uv-form-item>
                   
                    <!-- <uv-button type="primary" text="登录" @click="submit"></uv-button> -->
                    <div class="login_btn">注册</div>
                </uv-form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const info = ref({
    mobile: '',
    password: '',
    remember: false
});
const checkboxValue = ref(['记住密码']);
//显示登录还是显示注册
const isLogin = ref(false);
const toForgetPassword = () => {
    uni.navigateTo({
        url: '/pages/login/ForgetPassword'
    });
};
</script>

<style scoped lang="scss">
.container {
    width: 100vw;
    height: 100vh;
    background: linear-gradient(180deg, #24234c, #0f0f1c);
}
.note_warp {
    min-height: 100vw;
    padding-top: 100rpx;
}
.note_warp .login_bgg img {
    width: 35%;
    display: block;
    margin: auto;
    border-radius: 200rpx;
}
.note_warp .login_bgg p {
    font-size: 36px;
    font-weight: 700;
    letter-spacing: 1px;
    line-height: 42.34px;
    color: #fff;
    text-align: center;
    margin-top: 30rpx;
}
.botpanel {
    border-radius: 60rpx 60rpx 0 0;
    background: hsla(0, 0%, 100%, 0.02);
    box-shadow: inset 0px 2px 4px rgba(255, 255, 255, 0.25);
    width: 100%;
    position: absolute;
    bottom: 0;
    // margin: 300rpx 0 100rpx;
    height: 686rpx;
    padding: 40rpx;
}
.zk {
    display: flex;
    align-items: center;
    width: 60%;
    margin-top: 10rpx;
    margin-left: 10rpx;
    gap: 100rpx;
}
.login_title {
    color: #fff;
    font-size: 48rpx;
    font-weight: 700;
}
.login_span {
    display: inline-block;
    background: #7948ea;
    width: 60rpx;
    height: 14rpx;
    margin-left: 8rpx;
    border-radius: 6rpx;
}

.register_title {
    color: #fff;
    font-size: 36rpx;
    font-weight: 700;
}
.forget_password {
    font-size: 28rpx;
    color: #666;
}
.login_btn {
    width: 90%;
    text-align: center;
    background: radial-gradient(75.86% 100%, #7582fc 0, #f355ff 100%);
    border-radius: 60rpx;
    font-size: 40rpx;
    color: #fff;
    line-height: 108rpx;
    height: 108rpx;
    margin: 40rpx auto auto;
}

.botpanel_register {
    border-radius: 60rpx 60rpx 0 0;
    background: hsla(0, 0%, 100%, 0.02);
    box-shadow: inset 0px 2px 4px rgba(255, 255, 255, 0.25);
    width: 100%;
    position: absolute;
    bottom: 0;
    // margin: 300rpx 0 100rpx;
    height: 950rpx;
    padding: 40rpx;
}
</style>
