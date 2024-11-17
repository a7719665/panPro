<template>
    <view class="container">
        <div class="record" v-for="(item,index) in wallet" :key="index">
            <div class="record_content"><p>{{item.res}}</p></div>
            <div class="record_content_time"><span>申请时间：{{item.addtime}}</span> <span>提现{{item.moneys}} （{{item.days}}）</span></div>
            <div class="record_content_money"><i>{{item.sxmoneys}}</i></div>
        </div>
        <div class="notdata" v-if="wallet.length == 0">暂无数据</div>
    </view>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { gettxstream } from '@/api';

const select = ref(1);
const wallet = ref<any>([]);
const wallet2 = ref<any>([]);
const page = ref({
    PageSize: 10,
    PageNumber: 1
});
const notdata = ref(false);
const datacount = ref(7);
const show_load = ref(false);
const type = ref('zj');
const title = ref('充值明细');
const data = ref([]);

const GetData = async () => {
    const res: any = await gettxstream();
//     {
//   "res": "已到账",
//   "lx": "现金",
//   "shuoming": "提现",
//   "moneys": "100.00",
//   "addtime": "2024-11-17 17:03:39",
//   "days": "T+3",
//   "sxmoneys": "99.00"
// }
    wallet.value = res.records;
};

onMounted(() => {
    GetData();
});
</script>
<style scoped lang="scss">

  .record {
    position: relative;
    margin: auto;
    width: 92%;
    background: #f9fef7;
    border: 1px solid #ddfad2;
    border-radius: 10rpx; // 0.05rem * 200
    top: 80rpx; // 0.4rem * 200
    padding-bottom: 20rpx; // 0.1rem * 200
    margin-bottom: 20rpx; // 0.1rem * 200
    .record_content {
      margin: 20rpx 20rpx; // 0.1rem * 200
      p {
        width: 94px;
        background: #ecfae1;
        font-size: 24rpx; // 0.12rem * 200
        font-weight: bold;
        color: #000000;
        text-align: center;
        line-height: 60rpx; // 0.3rem * 200
        border-radius: 12rpx; // 0.06rem * 200
      }
    }
    .record_content_time {
      font-size: 24rpx; // 0.12rem * 200
      color: #404040;
      margin-left: 30rpx; // 0.15rem * 200
      span {
        display: block;
      }
    }
    .record_content_money {
      width: 96%;
      margin: auto;
      position: absolute;
      z-index: 5;
      top: 60rpx; // 0.3rem * 200
      i {
        font-style: normal;
        text-align: right;
        display: block;
        font-size: 44rpx; // 0.22rem * 200
        color: #57a300;
      }
    }
  }

</style>
