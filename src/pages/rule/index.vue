<template>
    <div class="news_con_wrap">
  
        <div class="rule_bg">
            <div class="imgs"><img src="@/static/img/dai.png" alt="">
                <div class="news_bg">
                    <div class="i">
                        <p>• 信用卡专区•</p>
                    </div>
                </div>
            </div>
            <div class="jin">
                <div class="zi">
                    <p>
                    <p>体验劵专区，注册赠送5000体验劵，日利率1%，代还1天自动扣回5000体验劵。<br><br>普通会员：代还金额要求200，最高10000，日利率1%，代还天数为1天。每天可获得一次代还机会。<br><br>VIP1：代还金额要求5000，最高50000，日利率1.3%，代还天数为3天。需推荐好友1人。每天可获得一次代还机会。<br><br>VIP2：代还金额要求10000，最高100000，日利率1.6%,代还天数为7天。需推荐好友3人。每天可获得一次代还机会。<br><br>VIP3：代还金额要求20000，最高200000，日利率2.0%，代还天数为15天。需推荐好友8人。每天可获得一次代还机会。<br><br>VIP4：代还金额要求50000，最高500000，日利率2.5%，代还天数为30天。需推荐好友15人。每天可获得一次代还机会。<br><br>VIP5:
                        代还金额要求100000，最高2000000，日利率3.0%，代还天数为30天。需推荐好友30人。每天可获得一次代还机会。</p>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">

</script>
<style scoped lang="scss">
.news_con_wrap {
  position: relative;
  padding-bottom: 40rpx; /* 0.2rem * 200 = 40rpx */
  width: 100%;
  min-height: 100%;
  background: linear-gradient(180deg, #ffffff 0%, #99bcfe 100%);
  
  .vux-header .vux-header-left .left-arrow:before {
    border-color: #000 !important;
  }
  
  .rule_bg {
    .imgs {
      img {
        width: 100%;
      }
    }
    
    .news_bg {
      position: absolute;
      display: block;
      line-height: 66.4rpx; /* 0.33rem * 200 = 66.4rpx */
      border-radius: 40rpx; /* 0.2rem * 200 = 40rpx */
      width: 55%;
      margin: auto;
      right: 0;
      left: 0;
      background: linear-gradient(180deg, #4447ed 0%, #6165f3 100%);
      
      .i {
        p {
          text-align: center;
          color: #fff;
          font-size: 30rpx; /* 0.15rem * 200 = 30rpx */
          font-weight: bold;
        }
      }
    }
    
    .jin {
      background-color: hsl(220deg 100% 94.71%);
      width: 90%;
      margin: 40rpx auto 0; /* 0.2rem * 200 = 40rpx */
      padding: 40rpx 30rpx; /* 0.2rem * 200 = 40rpx, 0.15rem * 200 = 30rpx */
      border-radius: 32rpx; /* 0.16rem * 200 = 32rpx */
      box-shadow: 0px 106.8rpx 229.4rpx rgba(58, 62, 233, 0.49); /* 0.53px * 200 = 106.8rpx, 11.47px * 200 = 229.4rpx */
      
      .zi {
        font-weight: bold;
        
        p {
          color: #000000;
          font-size: 28rpx; /* 0.14rem * 200 = 28rpx */
          line-height: 50rpx; /* 0.25rem * 200 = 50rpx */
        }
        
        span {
          color: #5e5e5e;
          font-size: 20rpx; /* 0.1rem * 200 = 20rpx */
        }
      }
    }
  }
}
</style>