<template>
    <view class="container">
        <div class="customer_warp">
 
            <div class="customer_con">
                <div class="customer" style="padding-top: 80rpx">
                    <div class="cust">
                        <div @click="changeLoginPwd" class="cust_warp" style="width: 100%; padding: 10rpx">
                            <span style="margin-top: 0px">修改登录密码 </span>
                         </div>
                    </div>
                    <div class="cust">
                        <div @click="changePayPwd" class="cust_warp" style="width: 100%; padding: 10rpx">
                            <span style="margin-top: 0px">修改支付密码 </span>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    </view>
</template>
<script setup lang="ts">
const changeLoginPwd = () => {
    uni.navigateTo({
        url: '/pages/loginpwd/index'
    });
};
const changePayPwd = () => {
    uni.navigateTo({
        url: '/pages/withdrawpwd/index'
    });
};
</script>
<style scoped lang="scss">
.customer_warp {
    background: -webkit-gradient(linear, left top, left bottom, from(#24234c), to(#0f0f1c));
    background: linear-gradient(180deg, #24234c 0%, #0f0f1c 100%);
    height: 100%;
    .vux-header {
        background: none !important;
    }
    .customer_bg {
        position: absolute;
        top: 0;
        width: 100%;
    }
    .customer_con {
        position: relative;
        .customer {
            width: 90%;
            margin-left: 5%;
            z-index: 3;
            .cust {
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                background-color: #ffffff;
                width: 100%;
                margin: auto;
                padding: 20rpx 0 20rpx 20rpx;
                border-radius: 20rpx;
                margin-top: 40rpx;
                img {
                    width: 120rpx;
                }
                .cust_warp {
                    width: 75%;
                    padding-left: 20rpx;
                    span {
                        font-size: 32rpx;
                        color: #000000;
                        margin-top: 8rpx;
                        display: inline-block;
                    }
                    i {
                        color: #000000;
                        font-size: 24rpx;
                        border: solid #000000 2rpx;
                        font-style: normal;
                        float: right;
                        padding: 10rpx 30rpx;
                        border-radius: 40rpx;
                        margin-top: -80rpx;
                    }
                    p {
                        font-size: 24rpx;
                        color: #aaaaaa;
                    }
                }
            }
        }
        .doubt_warp {
            background-color: #ffffff;
            width: 95%;
            margin: 40rpx auto;
            .chat_content_nav {
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                .active {
                    font-weight: bold;
                    position: relative;
                    font-size: 32rpx;
                    i {
                        display: block;
                        width: 60rpx;
                        height: 8rpx;
                        position: absolute;
                        border-radius: 20rpx;
                        left: 40rpx;
                        background: #4d89f7;
                    }
                }
                p {
                    -webkit-box-flex: 1;
                    -ms-flex: 1;
                    flex: 1;
                    text-align: center;
                    line-height: 100rpx;
                    margin: 0 10rpx;
                }
            }
            .doubt {
                padding: 30rpx 10rpx;
                border-radius: 20rpx;
                .dou_warp {
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    text-align: center;
                    border-bottom: solid #f2f2f2 2rpx;
                    padding-bottom: 20rpx;
                    .dou {
                        -webkit-box-flex: 1;
                        -ms-flex: 1;
                        flex: 1;
                        p {
                            font-size: 32rpx;
                            border-bottom: solid #3a79f7 6rpx;
                            padding-bottom: 20rpx;
                            font-weight: 700;
                        }
                    }
                    span {
                        font-size: 28rpx;
                        color: #999999;
                        display: inline-block;
                        margin-top: 6rpx;
                    }
                }
                .consult_warp {
                    .consult {
                        font-size: 28rpx;
                        color: #000000;
                        padding-left: 20rpx;
                        font-weight: 700;
                        padding-bottom: 20rpx;
                        p {
                            border-bottom: 2rpx solid #f2f2f2;
                            line-height: 100rpx;
                        }
                    }
                }
            }
        }
    }
}
</style>
