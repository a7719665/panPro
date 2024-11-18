<template>
    <div class="platform_warp">
        <div class="vux-header">
            <div class="vux-header-left"><a class="vux-header-back"></a>
                <div class="left-arrow"></div>
            </div>
            <h1 class="vux-header-title"><span style="display: none;"></span></h1> <!---->
            <div class="vux-header-right"><!----> </div>
        </div> <img src="@/static/img/shao.png" class="platform_shao">
        <div class="introduce">
            <div class="imgs"><img src="@/static/img/tai.png" alt=""></div>
            <div class="bei">
                <p>
                <p><br>鸿运金融于2017年成立于香港，早期业务从跨境交易服务起步，专注为跨境服务提供配套服务。面向企业・项目的金融事业，全球零售金融事业（信用卡、汽车贷款、贷款），保险中介事业，再保险事业，信用担保事业等服务和CAPEX相关的资产交易/融资/再融资/表外等跨境服务，鸿运金融历经几年的风雨沧桑，不断成长发展，集团管理基金规模及累计对外投资已超100亿港币。<br>鸿运金融将以“清点世界财富，让货币安全快捷流通”为企业愿景，公司将始终牢记“受人之托，代人理财”这一初心，坚持专业投研驱动，合规风控为本，科技创新为翼的经营理念，进一步扩大丰富公司队伍，增加金融产品供给，肩负起为实体经济和金融市场服务的职责。<br>公司的产品和服务已经被上千家企业采用，覆盖电信、金融、保险、速递物流、广电、教育、电子商务、生产制造、信用卡代还、公共事业等众多领域。<br>鸿运金融打造的以数据驱动的供应链金融科技平台，是互联网金融机构，具有最完整的风控措施，也是所有金融模式中，最安全且收益最稳定的互联网项目。最大限度的利用了分散风险的方式杜绝了来自产品源的风险，收益也十分吸引眼球，项目的推出很符合大众化的投资思维，操作简单、易懂已成为行业合规发展的标杆更快捷、更智能、更安全、站在时代的节点迎接新的征程。为确保妥善并且高效地执行业务，在提高决策透明度的同时致力于构建一个赋有确切监视•监督功能的经营体制。鸿运金融服务有限公司全员团结一致，彻底致力于合规活动，努力提升和保证信用。通过不断的重新评估持续改善内部控制系统，努力构建更好、更高效的体制。<br>鸿运金融服务有限公司诚邀天下有志之士共创辉煌。<br>
                </p>
                </p>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">

</script>
<style scoped lang="scss">
.platform_warp {
  background: linear-gradient(180deg, #ffffff 0%, #99bcfe 100%);
  min-height: 100%;
  position: relative;
  .vux-header .vux-header-left .left-arrow:before {
    border-color: #000 !important;
  }
  .platform_shao {
    position: absolute;
    top: 0;
    width: 100%;
  }
  .introduce {
    position: relative;
    top: 848rpx; // 4.2rem * 200 = 848rpx
    .imgs img {
      width: 35%;
      position: relative;
      left: 60rpx; // 0.3rem * 200 = 60rpx
      top: 24rpx; // 0.12rem * 200 = 24rpx
    }
    .bei {
      background-color: #ebeced;
      width: 90%;
      margin: auto;
      font-weight: bold;
      padding: 30rpx 30rpx; // 0.15rem * 200 = 30rpx
      border-radius: 32rpx; // 0.16rem * 200 = 32rpx
      box-shadow: 0px 106.94rpx 229.4rpx rgba(58, 62, 233, 0.49); // 0.53px * 200 = 106.94rpx, 11.47px * 200 = 229.4rpx
      p {
        color: #000000;
        font-size: 28rpx; // 0.14rem * 200 = 28rpx
        line-height: 50rpx; // 0.25rem * 200 = 50rpx
      }
    }
  }
}
</style>