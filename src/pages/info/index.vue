<template>
    <view class="news_con_wrap">
        <div class="rule_bg">
            <div class="jin"><!---->
                <div class="zi" v-if="type == 7">
                    <p>
                    <p>一 级：15%二级：7%三级：3%</p>
                    <p>本平台0投资开启三级会员团队代理模式，三级是指，会员代理能获取三级团队会员代理所得的分润，超过三级的部分不能获得分润。<br><br><br><br>例如你是本平台的代理会员A，进行了代还任务之后即有代理权，系统将自动形成你的会员中心、推广专属邀请码。分享专属邀请码给B通过专属邀请码，注册成为代理会员，进行了代还任务之后，A将获得B的分润15%，与此同时，系统也将自动形成B的专属邀请码。，C通过B的专属邀请码注册成为代理会员，进行了代还任务之后，B将获得C的分润15%。A可得C的分润7%；以此类推，D通过C成为会员，C得15%，B得7%，A得3%。<br><br><br><br>温馨提示:所有团队代理下级的会员产生的分润奖励均为鸿运平台出资，不影响所有团队代理以及下级代理会员的分润！
                    </p>
                    </p>
                </div>

                <div class="zi" v-if="type == 6">
                    <p>
                    <p>积分说明<br>预存200赠送2积分<br>预存500赠送5积分<br>预存1000赠送10积分<br>预存2000赠送20积分<br>预存3000赠送30积分<br>预存5000赠送50积分<br>预存10000赠送100积分<br>预存20000赠送200积分<br>预存50000赠送500积分<br>预存100000赠送1000积分<br>预存多少赠送预存金额的1%<br>邀请1位有效会员充值200赠送10积分<br>邀请1位有效会员充值500赠送30积分<br>邀请1位有效会员充值1000赠送50积分<br>邀请1位有效会员充值2000赠送70积分<br>邀请1位有效会员充值3000赠100积分<br>邀请1位有效会员充值5000赠送200积分<br>邀请1位有效会员充值10000赠送400积分<br>邀请1位有效会员充值20000赠送600积分<br>邀请1位有效会员充值50000赠送1000积分<br>邀请1位有效会员充值100000赠送3000积分<br>每天签到即可领取2积分<br>每天代还即可领取5积分<br>累积一定积分即可兑换商品<br>鸿运用户所有商品均可折现，<br>折现以实物价格60%例：实物价格10000元，<br>折现为6000元，如需积分折现找平台客服助<br>理申请兑换即可<br>注：VIP1专区以上的代理会员才可以进行兑换，每日仅兑换一次商品<br>积分扣除说明<br>提款1000以下的扣5%<br>提款1000-10000的扣10%<br>提款10000以上扣20%
                    </p>
                    </p>
                </div>
                <div class="zi" v-if="type == 5">
                    <p>
                    <p>提现说明：</p>
                    <p>选择T+1提现手续费为2%<br>选择T+3提现手续费为1%<br>选择T+7提现免手续费<br></p>
                    <p>周六日银行休息时间如有延迟请耐心等待，提现最低金额为50元<br>每日仅可提现一次，提现时间为每周一至周五上午9：00到晚上21：00前截止。<br><br></p>
                    </p>
                </div>
            </div>
        </div>
    </view>
</template>
<script setup lang="ts">
//规则type
const type = ref('');
onLoad((options: any) => {
    // 获取传递的 type 参数
    type.value = options.type;
    console.log('接收到的 type 参数:', type.value);
    switch(type.value){
        case '5':
            uni.setNavigationBarTitle({
                title: '提现说明'
            });
            break;
        case '6':
            uni.setNavigationBarTitle({
                title: '积分说明'
            });
            break;
        case '7':
            uni.setNavigationBarTitle({
                title: '代理说明'
            });
            break;
    }
});

onMounted((options: any) => {

});
</script>
<style scoped lang="scss">
.news_con_wrap {
    margin-top: 0 !important;
    position: relative;
    padding-bottom: 60rpx; // 0.2rem * 200 = 40rpx
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(180deg, #ffffff 0%, #99bcfe 100%);

    .rule_bg {
        .imgs img {
            width: 100%;
        }

        .news_bg {
            position: absolute;
            display: block;
            line-height: 66.4rpx; // 0.33rem * 200 = 66.4rpx
            border-radius: 40rpx; // 0.2rem * 200 = 40rpx
            width: 55%;
            margin: auto;
            right: 0;
            left: 0;
            background: linear-gradient(180deg, #4447ed 0%, #6165f3 100%);

            .i p {
                text-align: center;
                color: #fff;
                font-size: 30rpx; // 0.15rem * 200 = 30rpx
                font-weight: bold;
            }
        }

        .jin {
            background-color: hsl(220deg 100% 94.71%);
            width: 90%;
            margin: 40rpx auto 0; // 0.2rem * 200 = 40rpx
            padding: 40rpx 30rpx; // 0.2rem * 200 = 40rpx, 0.15rem * 200 = 30rpx
            border-radius: 32rpx; // 0.16rem * 200 = 32rpx
            box-shadow: 0px 10.64rpx 22.94rpx rgba(58, 62, 233, 0.49); // 0.53px * 200 = 10.64rpx, 11.47px * 200 = 22.94rpx

            .zi {
                font-weight: bold;

                p {
                    color: #000000;
                    font-size: 28rpx; // 0.14rem * 200 = 28rpx
                    line-height: 50rpx; // 0.25rem * 200 = 50rpx
                }

                span {
                    color: #5e5e5e;
                    font-size: 20rpx; // 0.1rem * 200 = 20rpx
                }
            }
        }
    }
}
</style>
