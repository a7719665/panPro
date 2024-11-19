<template>
    <view class="my_warp content" style="height: 100%; overflow: scroll">
        <view class="my">
            <view class="content">
                <img src="@/static/img/logo1.png" alt="" style="height: 140rpx" />
                <view class="con clearfix">
                    <p>ID：{{ userInfo.phone }}<a href="https://my201hongy.zvrxw.com//html" target="_blank">下载APP</a></p>
                    <view @click="certificationClick"><span >{{ authentication }}</span>
                    </view>
                </view>
            </view>
            <view class="zichang_wrap">
                <view class="zi_zong">
                    <view>
                        <p>账户余额</p>
                        <span>{{ userInfo.benjin }}</span>
                    </view>
                    <view style="text-align: right; padding-top: 20rpx"><i @click="rechargeClick">充值</i> <i
                            style="background: rgb(100, 58, 184)" @click="withdraw">提现</i></view>
                </view>
                <view class="shuju_warp" style="text-align: left">
                    <view class="shuju">
                        <span>今日收益</span>
                        <p>￥{{ userInfo.shouyi }}</p>
                    </view>
                    <view class="shuju" style="text-align: center">
                        <span>个人分润</span>
                        <p>￥{{ userInfo.fenrun }}</p>
                    </view>
                    <view class="shuju" style="text-align: right">
                        <span>团队分润</span>
                        <p>￥{{ userInfo.teamfenrun }}</p>
                    </view>
                </view>
            </view>
        </view>
        <view class="used_warp">
            <span>常用功能</span> <i></i>
            <view class="used">
                <view class="us" @click="accountDetail">
                    <img src="@/static/img/my1.png" alt="" />
                    <p>账户明细</p>
                </view>
                <view class="us" @click="changepwdClick">
                    <img src="@/static/img/my2.png" alt="" />
                    <p>修改密码</p>
                </view>
                <view class="us" @click="rechargeDetail">
                    <img src="@/static/img/my3.png" alt="" />
                    <p>充值明细</p>
                </view>
                <view class="us" @click="withdrawDetail">
                    <img src="@/static/img/my4.png" alt="" />
                    <p>提现明细</p>
                </view>
            </view>
        </view>
        <view class="serve_warp">
            <p>我的服务</p>
            <span></span>
        </view>
        <img src="@/static/img/yqhyyqhy.png" class="hy" @click="spreadClick" />
        <view class="data_warp">
            <view class="ta2"><img src="@/static/img/hdzx.png" @click="infoClick(7)" /></view>
            <view class="data">
                <view class="da_warp_contenet"><img src="@/static/img/txsm.png" @click="infoClick(5)" /> <img
                        @click="illustrateClick(6)" src="@/static/img/my6.png" /></view>
                <view class="da_warp_contenet" style="margin-top: 10rpx"><img @click="platformClick"
                        src="@/static/img/my7.png" /> <img src="@/static/img/jfsm.png" @click="infoClick(6)" /></view>
            </view>
        </view>
        <view class="my_tui" @click="Logout">退出登录</view>
    </view>
</template>
<script setup lang="ts">
import { getuserdetail, getAuthentication, getapistrade } from '@/api';
import globalTool from '@/utils/globalTool';
const certificationClick = () => {
    uni.navigateTo({
        url: '/pages/certification/index'
    });
};
const accountDetail = () => {
    uni.navigateTo({
        url: '/pages/accountDetail/index'
    });
};
const changepwdClick = () => {
    uni.navigateTo({
        url: '/pages/changepwd/index'
    });
};
const rechargeDetail = () => {
    uni.navigateTo({
        url: '/pages/rechargeDetail/index'
    });
};
const withdrawDetail = () => {
    uni.navigateTo({
        url: '/pages/withdrawDetail/index'
    });
};
const spreadClick = () => {
    uni.navigateTo({
        url: '/pages/spread/index'
    });
};
const infoClick = (type: number) => {
    uni.navigateTo({
        url: '/pages/info/index?type=' + type
    });
};
const illustrateClick = (type: number) => {
    uni.navigateTo({
        url: '/pages/illustrate/index?type=' + type
    });
};
const platformClick = () => {
    uni.navigateTo({
        url: '/pages/platform/index'
    });
};
const userInfo = ref<any>({}); //用户信息
const tousu = ref('');
const authentication = ref('');
const pay_pwd = ref(0);
const InitData = () => {
    const that = this;
    getuserdetail().then((res: any) => {
        //         {
        //   "result": "true",
        //   "uselevel": "1",
        //   "benjin": "0",
        //   "phone": "15623452345",
        //   "baozhengjin": "0",
        //   "benjin_keyong": "0",
        //   "pay_pwd": "1",
        //   "shouyi": "0.00",
        //   "fenrun": "0.00",
        //   "teamfenrun": "0.00",
        //   "yesfenrun": "0.00",
        //   "jinfenrun": "0.00"
        // }
        userInfo.value = res;
        uni.setStorageSync('pay_pwd', res.pay_pwd);
    });
};
const rechargeClick = () => {
    uni.navigateTo({
        url: '/pages/rechargeType/index'
    });
};
const withdraw = () => {
    uni.navigateTo({
        url: '/pages/withdraw/index'
    });
};
const toAuth = () => {
    const that = this;
    if (!authentication.value) {
        uni.navigateTo({
            url: '/pages/certification/index'
        });
    } else {
        const content = authentication.value == '未审核' ? '您已提交实名认证信息，等待审核' : '您已实名认证过！';
        globalTool.showModal(content, () => {
            uni.navigateTo({
                url: '/pages/certification/index'
            });
        });
    }
};
const getUrl = (type: string) => {
    const token = uni.getStorageSync('token');
    const url = `/api/kefu_url.php?token=${token}&type=${type}`;
    uni.navigateTo({
        url: '/pages/chatcon?url=' + url
    });
};
const team = () => {
    // this.$router.push("")
};
const pwd = () => {
    uni.navigateTo({
        url: '/pages/withdrawpwd?pay_pwd=' + userInfo.value.pay_pwd
    });
};
const getAuthenticationData = () => {
    getAuthentication()
        .then((res: any) => {
            authentication.value = res.msg;
        })
        .catch((err: any) => {
            authentication.value = err.data.msg;
        });
};
const getTousu = () => {
    getapistrade()
        .then((res: any) => {
            tousu.value = res.tousu;
        })
        .catch(() => {
            uni.navigateTo({
                url: '/pages/login'
            });
        });
};
const Logout = () => {
    globalTool.showModal('确定退出登录?', () => {
        uni.clearStorageSync();
        uni.navigateTo({
            url: '/pages/login/index'
        });
    });
};
onMounted(() => {
    InitData();
    getTousu();
    getAuthenticationData();
});
</script>
<style scoped lang="scss">
.my_warp {
    background: -webkit-gradient(linear, left top, left bottom, from(#24234c), to(#0f0f1c));
    background: linear-gradient(180deg, #24234c 0%, #0f0f1c 100%);
    height: 100%;
    padding-bottom: 160rpx;

    .my {
        position: relative;
        z-index: 3;

        .content {
            padding: 40rpx 40rpx 0 40rpx;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;

            .con {
                -webkit-box-flex: 1;
                -ms-flex: 1;
                flex: 1;
                padding-left: 20rpx;
                padding-top: 16rpx;
                line-height: 60rpx;

                p {
                    color: #ffffff;
                    font-size: 28rpx;

                    a {
                        color: #ffffff;
                        background: rgba(121, 72, 234, 0.22);
                        font-size: 24rpx;
                        border: solid #ffffff 0.02rpx;
                        width: 164rpx;
                        text-align: center;
                        border-radius: 30rpx;
                        float: right;
                    }
                }

                span {
                    color: #000000;
                    font-size: 24rpx;
                    background-color: #ffffff;
                    padding: 10rpx 30rpx;
                    border-radius: 30rpx;
                    font-weight: bold;
                }
            }
        }

        .zichang_wrap {
            background-color: #5b56ae;
            width: 90%;
            margin: auto;
            padding: 20rpx 40rpx;
            border-radius: 20rpx;
            margin-top: 20rpx;

            .zi_zong {
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                padding-top: 20rpx;
                padding-bottom: 20rpx;

                view {
                    -webkit-box-flex: 1;
                    -ms-flex: 1;
                    flex: 1;
                    display: inline-block;

                    p {
                        font-size: 24rpx;
                        color: #ffffff;
                    }

                    span {
                        font-size: 40rpx;
                        color: white;
                    }

                    i {
                        color: white;
                        display: inline-block;
                        width: 140rpx;
                        text-align: center;
                        font-style: normal;
                        height: 60rpx;
                        line-height: 60rpx;
                        border-radius: 200rpx;
                        border: 0.02rpx solid white;
                    }
                }
            }

            .shuju_warp {
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                border-top: solid rgba(255, 255, 255, 0.03) 6rpx;
                padding-top: 20rpx;
                padding-bottom: 20rpx;

                .shuju {
                    -webkit-box-flex: 1;
                    -ms-flex: 1;
                    flex: 1;

                    span {
                        font-size: 20rpx;
                        color: #ffffff;
                    }

                    p {
                        padding-top: 8rpx;
                        font-size: 40rpx;
                        color: #ffffff;
                    }
                }
            }
        }

        .shuju_con {
            width: 91%;
            margin: 50rpx auto 20rpx auto;
            padding: 20rpx 20rpx;
            border-radius: 10rpx;
            background-color: white;

            >p {
                font-size: 32rpx;
                color: #000000;
                font-weight: bold;
                line-height: 80rpx;
            }

            .data_warp {
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;

                .data {
                    -webkit-box-flex: 1;
                    -ms-flex: 1;
                    flex: 1;
                    text-align: center;
                    margin: auto;

                    span {
                        color: #cf6904;
                        font-size: 36rpx;
                        font-weight: bold;
                        margin-top: 20rpx;
                        display: inline-block;
                    }

                    p {
                        color: #383838;
                        font-size: 20rpx;
                    }
                }
            }
        }
    }

    .used_warp {
        width: 95%;
        margin: auto;
        margin-top: 20rpx;
        padding-bottom: 20rpx;
        border-radius: 20rpx;

        span {
            color: rgba(255, 255, 255, 0.9);
            font-size: 32rpx;
            padding-top: 20rpx;
            display: block;
            padding-left: 20rpx;
            font-weight: bold;
        }

        i {
            margin-left: 20rpx;
            background: linear-gradient(135deg, #f355ff 0%, rgba(255, 255, 255, 0.09) 100%);
            display: block;
            width: 130rpx;
            height: 10rpx;
        }

        .used {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;

            .us {
                -webkit-box-flex: 1;
                -ms-flex: 1;
                flex: 1;
                text-align: center;
                margin-top: 20rpx;

                img {
                    width: 100rpx;
                }

                p {
                    color: #ffffff;
                    font-size: 28rpx;
                    font-weight: bold;
                    padding-top: 10rpx;
                }
            }
        }
    }

    .serve_warp {
        padding-left: 40rpx;

        p {
            color: rgba(255, 255, 255, 0.9);
            font-size: 32rpx;
            padding-bottom: 8rpx;
        }

        span {
            background: linear-gradient(135deg, #f355ff 0%, rgba(255, 255, 255, 0.09) 100%);
            display: block;
            width: 130rpx;
            height: 10rpx;
        }
    }

    .hy {
        width: 100%;
        display: block;
        margin: auto;
    }

    .data_warp {
        width: 92%;
        margin: 20rpx auto;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;

        .ta2 {
            -webkit-box-flex: 1;
            -ms-flex: 1;
            flex: 1;
            margin-right: 6rpx;

            img {
                width: 100%;
            }
        }

        .data {
            -webkit-box-flex: 1.35;
            -ms-flex: 1.35;
            flex: 1.35;

            .da_warp_contenet {
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;

                img {
                    width: 48%;
                    margin: 0 1.5%;
                    border-radius: 16rpx;
                }
            }
        }
    }

    .my_tui {
        background: linear-gradient(112.43deg, #5b56ae 0%, #7948ea 100%);
        color: #fff;
        width: 95%;
        margin: 0 auto;
        text-align: center;
        line-height: 90rpx;
        border-radius: 16rpx;
        font-weight: bold;
        font-size: 28rpx;
        letter-spacing: 2rpx;
    }
}
</style>
