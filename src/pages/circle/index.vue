<template>
    <div class="dial_wrap">
        <img src="@/static/img/chou1.png" class="chou1" />
        <div class="dial_who">
            <div class="dial_one">
                <div>
                    <img src="@/static/img/chou3.png" />
                    <p>八等奖</p>
                </div>
                <div>
                    <img src="@/static/img/chou3.png" />
                    <p>三等奖</p>
                </div>
                <div>
                    <img src="@/static/img/chou3.png" />
                    <p>六等奖</p>
                </div>
            </div>
            <div class="dial_one">
                <div>
                    <img src="@/static/img/chou3.png" />
                    <p>四等奖</p>
                </div>
                <div class="dial_liji" @click="getLotteryData">
                    <p>立即</p>
                    <p>抽奖</p>
                </div>
                <div>
                    <img src="@/static/img/chou3.png" />
                    <p>二等奖</p>
                </div>
            </div>
            <div class="dial_one">
                <div>
                    <img src="@/static/img/chou3.png" />
                    <p>七等奖</p>
                </div>
                <div>
                    <img src="@/static/img/chou3.png" />
                    <p>五等奖</p>
                </div>
                <div>
                    <img src="@/static/img/chou3.png" />
                    <p>一等奖</p>
                </div>
            </div>
        </div>
        <div class="dial_gui clearfix">
            <p v-for="(item, index) in rule" :key="index">{{ item.jlevel }}: {{ item.jiangname }}</p>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getLottery, postLottery } from '@/api';
import globalTool from '@/utils/globalTool';

const LuckyClick = ref(100);
const colorCircleFirst = ref('#FE4D32'); //圆点颜色
const colorCircleSecond = ref('#fff'); //圆点颜色
const cat = ref(45); //总共8个扇形区域，每个区域约45度
const isAllowClick = ref(true); //是否能够点击
const rotate_deg = ref('rotate(0deg)'); //指针旋转的角度
const rotate_transition = ref('transform 3s ease-in-out'); //初始化选中的过度属性控
const rule = ref<any[]>([]);
const show = ref(false);
const msg = ref('');

const getData = async () => {
    const res: any = await getLottery();
    rule.value = res.jiangpin;
};

const getLotteryData = async () => {
    const res: any = await postLottery();

    rotate_transition.value = 'transform 3s ease-in-out';
    let rand_circle = 4;
    let winningIndex = res.level === '一等奖' ? 7 : res.level === '二等奖' ? 3 : res.level === '三等奖' ? 4.4 : res.level === '八等奖' ? 6 : res.level === '四等奖' ? 8 : res.level === '五等奖' ? 2 : res.level === '六等奖' ? 5.5 : res.level === '七等奖' ? 3.5 : 0;
    let randomDeg = 360 - winningIndex * 50;
    let deg = rand_circle * 360 + randomDeg;
    rotate_deg.value = `rotate(${deg}deg)`;
    setTimeout(() => {
        globalTool.showToast(`恭喜您获得${res.level}`);
    }, 3500);
    setTimeout(() => {
        rotate_deg.value = `rotate(0deg)`;
        rotate_transition.value = '';
    }, 5000);
};

onMounted(() => {
    getData();
});
</script>
<style scoped lang="scss">
.dial_wrap {
    position: relative;
    z-index: 10;
    .chou1 {
        width: 100%;
        display: block;
        position: absolute;
    }
    .dial_who {
        position: relative;
        top: 532rpx;
        right: 6.4rpx;
        width: 74%;
        margin: auto;
        .dial_one {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            .dial_liji {
                background: hsl(49.57deg 100% 63.92%);
                border-radius: 30rpx;
                p {
                    color: hsl(354.92deg 100% 34.71%);
                    font-size: 40rpx;
                    font-weight: bold;
                }
            }
            div {
                background: hsl(36.84deg 100% 88.82%);
                border-bottom: 1px solid #ffab61;
                padding: 22.4rpx 0;
                border-radius: 20rpx;

                flex: 1;
                margin: 4rpx 0.7%;
                p {
                    text-align: center;
                    font-size: 28rpx;
                    color: #bf0000;
                    font-weight: bold;
                }
                img {
                    width: 80rpx;
                    display: block;
                    margin: auto;
                }
            }
        }
    }
    .dial_gui {
        position: relative;
        top: 720rpx;
        color: #fff;
        font-size: 28rpx;
        width: 85%;
        margin: auto;
        p {
            width: 46%;
            line-height: 60rpx;
            float: left;
            margin: 0 2%;
        }
    }
}
</style>
