import { http } from '../utils/request';
import type { LoginData, SearchRequest } from './types';

/**
 * 模糊检索行业
 *
 * @param data
 * @returns
 */
export function searchIndustry(params: SearchRequest) {
    return http<any>({
        method: 'GET',
        url: '/searHy',
        data: params
    });
}
/**
 * 获得所有产业名称
 * @returns
 */
export function getChanyeNames(data: any) {
    return http<any>({
        method: 'GET',
        url: '/getChanyeNames',
        data
    });
}
/**
 * 通过产业代码获得产业详细信息
 * @returns
 */
export function getChanyeByCode(data: any) {
    return http<any>({
        method: 'POST',
        url: '/getChanyeByCode',
        data,
        dataType: 'json'
    });
}
/**
 * 获取用户历史查询关键字
 * wxCode 微信号
 * way 页面标志（1:行业查询，2:产业查询，3:职业查询，4:区划查询）
 * @returns
 */
export function getKeyWords(data: any) {
    return http<any>({
        method: 'GET',
        url: '/getKeyWords',
        data
    });
}
/**
 * 重置用户历史检索关键字
 * wxCode 微信号
 * way 页面标志（1:行业查询，2:产业查询，3:职业查询，4:区划查询）
 * @returns
 */
export function resetKeyword(data: any) {
    return http<any>({
        method: 'GET',
        url: '/resetKeyword',
        data
    });
}
/**
 * 模糊检索产业
 *
 * @param data
 * @returns
 */
export function searchCy(params: SearchRequest) {
    return http<any>({
        method: 'GET',
        url: '/searchCy',
        data: params
    });
}
/**
 * 通过行业代码获得行业详细信息
 * @returns
 */
export function getHangyeByCode(data: any) {
    return http<any>({
        method: 'POST',
        url: '/getHangyeByCode',
        data,
        dataType: 'json'
    });
}
/**
 * 通过行业代码获得行业详细信息
 * relationCode   父级编码
 * @returns
 */
export function getPzhiye(data: any) {
    return http<any>({
        method: 'GET',
        url: '/getPzhiye',
        data
    });
}
/**
 * 模糊检索职业
 *
 * @param data
 * @returns
 */
export function searchZhiye(params: SearchRequest) {
    return http<any>({
        method: 'GET',
        url: '/searchZhiye',
        data: params
    });
}

/**
 * 模糊检索行政区划
 *
 * @param data
 * @returns
 */
export function searchArea(params: SearchRequest) {
    return http<any>({
        method: 'GET',
        url: '/searchArea',
        data: params
    });
}

/**
 * 目录-国民经济行业搜索
 * @param data
 * @returns
 *   */
export function muluSearchHy(params: SearchRequest) {
    return http<any>({
        method: 'GET',
        url: '/muluSearchHy',
        data: params
    });
}
/**
 * 目录-国家职业分类大典
 * @param data
 * @returns
 *   */
export function muluSearchZhiye(params: SearchRequest) {
    return http<any>({
        method: 'GET',
        url: '/muluSearchZhiye',
        data: params
    });
}
/**
 * 目录-行政区划模糊检索
 * @param data
 * @returns
 *   */
export function muluSearchArea(params: any) {
    return http<any>({
        method: 'GET',
        url: '/muluSearchArea',
        data: params
    });
}
/**
 * 目录-产业搜索
 * @param data
 * @returns
 *   */
export function muluSearchChanye(params: SearchRequest) {
    return http<any>({
        method: 'GET',
        url: '/muluSearchChanye',
        data: params
    });
}
//获取openid
export function getWxOpenId(data: any) {
    return http<any>({
        method: 'GET',
        url: '/getWxOpenId',
        data
    });
}
//获取理财列表
export function getGreatList(data: any) {
    return http<any>({
        method: 'POST',
        url: 'great.php',
        data
    });
}
//登录
export function login(data: any) {
    return http<any>({
        method: 'POST',
        url: `/api/login.php?usename=${data.usename}&usepwd=${data.usepwd}`,
        // header: {
        //     'Content-Type': 'application/x-www-form-urlencoded'
        // }
    });
}

export function register(deviceId:string="c0052900cb78e23d56a6585838caeae0",inviter:string="1002") {
    return http<any>({
        method: 'POST',
        url: `/v1/login/register`,
        data: {
            deviceId,
            inviter
          }
    });

  }
