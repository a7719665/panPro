<template>
        <div class="record_warp __web-inspector-hide-shortcut__">
            <div class="record_er">
                <p class="notdata" style="margin-top: 100rpx">暂无数据</p>
            </div>
        </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getstream } from '@/api';

const select = ref(1);
const wallet = ref([]);
const wallet2 = ref([]);
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
    const res: any = await getstream();
    if (res) {
        wallet.value = res.records;
        data.value = wallet.value;
    }
};

onMounted(() => {
    GetData();
});
</script>
<style lang="scss" scoped>
.record_warp {
    min-height: calc(100vh - 100rpx);
    width: 100%;
    overflow: scroll;
    background: linear-gradient(180deg, #24234c 0%, #0f0f1c 100%);
    position: relative;
    padding-top: 80rpx;

    .record_er {
        width: 90%;
        margin: auto;

        .record {
            display: flex;
            margin: 20rpx 0;
            padding: 20rpx 0;
            border-bottom: 1px solid #000000;

            .dui_re {
                margin: auto;

                img {
                    width: 80rpx;
                }
            }

            .reco {
                width: 60%;
                margin: auto;
                line-height: 40rpx;
                margin-left: 24rpx;

                p {
                    font-size: 28rpx;
                    font-weight: bold;
                    color: #fff;
                }

                span {
                    color: #808080;
                    font-size: 24rpx;
                }
            }

            .re {
                font-weight: bold;

                p {
                    color: #fff;
                    font-size: 32rpx;
                    padding-top: 20rpx;
                }
            }
        }
    }

    >img {
        width: 70%;
        position: absolute;
        bottom: 0;
        right: 0;
    }
}
</style>
