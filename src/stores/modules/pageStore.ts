import { defineStore } from 'pinia';
// import { loginApi } from '../../api';
import { store } from '@/stores';
import { ref } from 'vue';

export const usePageStore = defineStore('page', () => {
    // state
    const cyCodes = ref([]); //产业代码
    const setCyCodes = (data: any) => {
        cyCodes.value = data;
    };
    const getCyCodes = () => {
        return cyCodes.value;
    };
    const hyCodes = ref([]); //行业代码
    const setHyCodes = (data: any) => {
        hyCodes.value = data;
    };
    const getHyCodes = () => {
        return hyCodes.value;
    };
    const qyTitle = ref(''); //名录区划页面的标题
    const setQyTitle = (data: any) => {
        qyTitle.value = data;
    };
    const getQyTitle = () => {
        return qyTitle.value;
    };
    

    /**
     * 登录调用
     *
     * @param {LoginData}
     * @returns
     */
    function login(loginData: any) {
        return new Promise<void>((resolve, reject) => {
            // loginApi(loginData)
            //     .then((response: any) => {
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
        setCyCodes,
        getCyCodes,
        setHyCodes,
        getHyCodes,
 
        getQyTitle,
        setQyTitle,
     
    };
});

// 非setup
export function usePageStoreHook() {
    return usePageStore(store);
}
