<template>
    <div class="container">
        <img src="@/static/img/xiugai.png" alt="" class="wjmm" />
        <p class="forget_mima">忘记密码</p>
        <view class="forget_warp">
            <uv-form labelPosition="left" :model="info" :rules="rules" ref="form" class="p-[20rpx]">
            <uv-form-item label="" :prop="info.mobile" >
                <uv-input
                    color="#000"
                    
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
                    
                    :customStyle="{
                        backgroundColor: '#f0f0f0' // 自定义背景色
                    }"
                    prefixIcon="lock"
                    v-model="info.password"
                    placeholder="请输入图形验证码"
                >
                </uv-input>
            </uv-form-item>
            <uv-form-item label="" prop="password">
                <uv-input
                    color="#000"
                    password
                    
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
                    
                    :customStyle="{
                        backgroundColor: '#f0f0f0' // 自定义背景色
                    }"
                    prefixIcon="lock"
                    v-model="info.password"
                    placeholder="密码(6-16位数字和子母组成)"
                >
                </uv-input>
            </uv-form-item>
            <uv-form-item label="" prop="password">
                <uv-input
                    color="#000"
                    password
                    
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
            <div class="login_btn">确认修改</div>
        </uv-form>
        </view>
       
    </div>
</template>
<script setup lang="ts">
const info = ref({
    mobile: '',
    password: '',
    remember: false
});
</script>
<style lang="scss" scoped>
.container {
    width: 100vw;
    height: 100vh;
    background: linear-gradient(180deg, #24234c, #0f0f1c);
}
.login_btn {
    width: 90%;
    text-align: center;
    background: radial-gradient(75.86% 100%, #7582fc 0, #f355ff 100%);
    border-radius: 60rpx;
    font-size: 40rpx;
    color: #fff;
    line-height: 88rpx;
    height: 88rpx;
    margin: 20rpx auto auto;
}
.wjmm {
    width: 60%;
    position: absolute;
    margin: auto;
    right: 0;
    left: 0;
    top: -100rpx;
}
.forget_warp {
    width: 90%;
    background: hsla(0, 0%, 100%, .28);
    border-radius: 20rpx;
    position: fixed;
    bottom: 0;
    padding: 10rpx 0;
    left: 5%;
}
 .forget_mima {
    text-align: center;
    color: #fff;
    font-size: 50rpx;
    position: relative;
    top: 400rpx;
    font-weight: 700;
}
</style>
