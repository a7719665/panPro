<template>
    <view class="repayment_warp">
        <!-- 列表为空的缺省状态 -->
         <view v-if="list.length <= 0" class="no_record">
            无
         </view>
        <view class="record_banner" v-for="(item, index) in list" :key="index">
            <!---->
            <view class="repayment">
                <p>惠*树<span style="margin-left: 40rpx">{{ item.bankcode }}</span><i>{{ item.isok }}</i></p>
                <view class="xiao">
                    <view class="xi">
                        <p>代还金额</p>
                        <span>￥{{ item.moneys }}</span>
                    </view>
                    <view class="xi">
                        <p>代还天数</p>
                        <span>{{ item.days }}</span>
                    </view>
                    <view class="xi">
                        <p>每日分润</p>
                        <span>￥{{ item.lixi }}</span>
                    </view>
                </view>
                <view class="xiao">
                    <view class="xi">
                        <p>总分润</p>
                        <span>￥{{ item.zfenrun }}</span>
                    </view>
                    <view class="xi">
                        <p>交易截止时间</p>
                        <span>{{ item.date }}</span>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>
<script setup lang="ts">
import { getStrade } from '@/api';

const list = ref<any[]>([]);
onMounted(() => {
    getStrade().then((res: any) => {
        // bankcode: "623225 **** 400",
        // bankname: "招商银行",
        // bankuser: "惠*树",
        // date: "2024-08-20 11:56:56",
        // days: "24小时",
        // isok: "已完成",
        // lixi: "13.00",
        // moneys: 1000,
        // zfenrun: "13.00",
        // zmoneys: 1013
        list.value = res.dingdan;
    });
});
</script>
<style scoped lang="scss">
.no_record {
    text-align: center;
    color: #fff;
    margin-top: 300rpx;
    font-size: 32rpx;
}
.container {
    position: relative;
    padding-bottom: 300rpx;
    background: linear-gradient(180deg, #24234c, #0f0f1c);
}

.repayment_warp {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: -webkit-gradient(linear, left top, left bottom, from(#24234c), to(#0f0f1c));
  background: linear-gradient(180deg, #24234c 0%, #0f0f1c 100%);
  padding-top: 10rpx; /* 0.7rem * 200 */
  padding-bottom: 120rpx; /* 0.6rem * 200 */
}
.repayment_warp .record_banner .repayment {
  background-color: rgba(255, 255, 255, 0.25);
  width: 90%;
  margin: auto;
  border-radius: 0.1rem; /* 0.1rem * 200 = 20rpx */
  padding: 40rpx; /* 0.2rem * 200 */
  margin-bottom: 40rpx; /* 0.2rem * 200 */
}
.repayment_warp .record_banner .repayment p {
  font-size: 32rpx; /* 0.16rem * 200 */
  color: #ffffff;
}
.repayment_warp .record_banner .repayment p i {
  float: right;
  color: #000000;
  font-size: 20rpx; /* 0.1rem * 200 */
  font-style: normal;
  background-color: #fffde8;
  padding: 8rpx 30rpx; /* 0.04rem * 200, 0.15rem * 200 */
  border-radius: 50rpx; /* 0.25rem * 200 */
  position: relative;
  left: 18rpx; /* 0.09rem * 200 */
  font-weight: bold;
}
.repayment_warp .record_banner .repayment .xiao {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  border-bottom: 1px solid #707070;
  padding: 20rpx 0; /* 0.1rem * 200 */
}
.repayment_warp .record_banner .repayment .xiao .xi {
  -webkit-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
  margin-top: 20rpx; /* 0.1rem * 200 */
  padding-bottom: 14rpx; /* 0.07rem * 200 */
}
.repayment_warp .record_banner .repayment .xiao .xi p {
  color: #ffffff;
  font-size: 24rpx; /* 0.12rem * 200 */
  text-align: center;
}
.repayment_warp .record_banner .repayment .xiao .xi span {
  color: #ffffff;
  font-size: 28rpx; /* 0.14rem * 200 */
  display: block;
  text-align: center;
}
.repayment_warp .record_banner .repayment .dai {
  margin-top: 20rpx; /* 0.1rem * 200 */
}
.repayment_warp .record_banner .repayment .dai p span {
  color: #ffffff;
  font-size: 28rpx; /* 0.14rem * 200 */
  float: right;
  border: solid #ffffff 4rpx; /* 0.02rem * 200 */
  padding: 10rpx 40rpx; /* 0.05rem * 200, 0.2rem * 200 */
  display: block;
  border-radius: 70rpx; /* 0.35rem * 200 */
  margin-top: 30rpx; /* 0.15rem * 200 */
}
.repayment_warp .record_banner .repayment .dai i {
  color: #fff27a;
  display: block;
  font-style: normal;
  margin-top: 20rpx; /* 0.1rem * 200 */
  font-size: 36rpx; /* 0.18rem * 200 */
}
</style>
