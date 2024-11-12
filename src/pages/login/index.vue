<template>
    <div class="container">
        <div class="note_warp">
            <div class="login_bgg">
                <img src="@/static/img/logo1.png" alt="" />
                <p>鸿运</p>
            </div>

            <div class="botpanel">
                <div class="zk">
                    <div>
                        <p class="login_title">登录</p>
                        <span></span>
                    </div>
                    <div>
                        <p class="register_title">注册</p>
                        <span style="background: none"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            phone: '',
            password: '',
            rememberMe: false
        };
    },
    methods: {
        handleLogin() {
            // 处理登录逻辑
            console.log('手机号:', this.phone);
            console.log('密码:', this.password);
            console.log('记住密码:', this.rememberMe);
        }
    }
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
}
.zk {
    display: flex;
    align-items: center;
    width: 60%;
    margin-top: 40rpx;
    margin-left: 60rpx;
    gap: 100rpx;
    .login_title {
        color: #fff;
        font-size: 48rpx;
        font-weight: 700;
    }
    span {
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
}
</style>
