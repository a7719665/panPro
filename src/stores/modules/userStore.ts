import { defineStore } from 'pinia';
import { store } from '@/stores';
import { ref } from 'vue';
import globalTool from '@/utils/globalTool';

export const useUserStore = defineStore('user', () => {
    // state
    const userId = ref();
    let wxCode = ref(); //服务器用来获取用户搜索历史记录的唯一id
    const chanyeRange = ref<Array<Object>>([]); // 用户权限编码集合 → 判断按钮权限
    function getOpenID() {
        uni.login({
            provider: 'weixin', //使用微信登录
            success: function (res) {
                console.log(res);
                // getWxOpenId({ jsCode: res.code }).then((res: any) => {
                //     console.log(res);
                //     wxCode.value = res.data.openid;
                // });
            },
            fail: function (res) {
                console.log('err', res);
            }
        });
    }
    /**
     * @param {LoginData}
     * @returns
     */
    function reqChanyeNames() {
        return new Promise<void>((resolve, reject) => {
            console.log("项目启动-获取服务器基本信息")
            // getChanyeNames({})
            //     .then((response: any) => {
            //         chanyeRange.value = response.data;
            //         // sessionStorage.setItem('tokenName', response.data.tokenName);
            //         // sessionStorage.setItem('sessionid', response.data.sessionid);
            //         // router.push({
            //         //     path: '/'
            //         // });
            //         resolve();
            //     })
            //     .catch((error: any) => {
            //         reject(error);
            //     });
        });
    }
  
    return {
        chanyeRange,
        reqChanyeNames,
        userId,
        wxCode,
        getOpenID
    };
});

// 非setup
export function useUserStoreHook() {
    return useUserStore(store);
}
