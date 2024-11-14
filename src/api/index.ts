import { http } from '../utils/request';
import type { LoginData, SearchRequest } from './types';


//登录
export function login(data: any) {
    return http<any>({
        method: 'POST',
        url: `login.php?usename=${data.usename}&usepwd=${data.usepwd}`,
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


//获取短信验证码 
export function getpassword(mobile: string) {
    return http<any>({
        method: 'GET',
        url: `sms.php?tel=${mobile}`
    });
}

export function userregister(data: any) {
    return http<any>({
        method: 'POST',
        url: `reg.php?usename=${data.Mobile}&usepwd=${data.Password}&okpwd=${data.Password}&yzm=${data.SMSValidateCode}&bianhao=${data.bianhao}`,
        header: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    });
}

export function qiandaoDati() {
    return http<any>({
        method: 'GET',
        url: `qiandao_dati.php`
    });
}

export function qiandaoDatiok( da: string, id: string) {
    return http<any>({
        method: 'GET',
        url: `qiandao_datiok.php?da=${da}&id=${id}`
    });
}

export function userlogin(data: any) {
    return http<any>({
        method: 'POST',
        url: `login.php?usename=${data.UserName}&usepwd=${data.PassWord}`,
        header: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    });
}

export function modicash( newpwd: string) {
    return http<any>({
        method: 'POST',
        url: `pay_pwd.php?newpwd=${newpwd}&okpwd=${newpwd}`,
        header: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    });
}

export function withdrawals2( bankcode: string, bankname: string, bankuser: string, moneys: string, usepwd: string, tday: string, bankadd: string) {
    return http<any>({
        method: 'POST',
        url: `tixian2.php?bankadd=${bankadd}&bankcode=${bankcode}&bankname=${bankname}&bankuser=${bankuser}&moneys=${moneys}&usepwd=${usepwd}&tday=${tday}`,
        header: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    });
}

// ... continue refactoring other functions similarly ...
// ... existing code ...

export function modipaypwd(newpwd: string, usepwd: string) {
    return http<any>({
        method: 'POST',
        url: `mod_pay_pwd.php?newpwd=${newpwd}&okpwd=${newpwd}&usepwd=${usepwd}`,
        header: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    });
}

export function getrankings() {
    return http<any>({
        method: 'POST',
        url: `team.php`
    });
}

export function getbanner() {
    return http<any>({
        method: 'GET',
        url: `banner.php`
    });
}

export function getIndex() {
    return http<any>({
        method: 'GET',
        url: `index.php`
    });
}

export function getChatUrl() {
    return http<any>({
        method: 'GET',
        url: `api/kefu_url.php`
    });
}

export function getGreat() {
    return http<any>({
        method: 'POST',
        url: `great.php`
    });
}

export function postGreat( bianhao: string, moneys: string) {
    return http<any>({
        method: 'POST',
        url: `great_add.php?bianhao=${bianhao}&moneys=${moneys}`,
        header: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    });
}

export function intobalance( money: string) {
    return http<any>({
        method: 'POST',
        url: `yuebao_zhuanru.php?moneys=${money}`,
        header: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    });
}

export function outbalance( money: string) {
    return http<any>({
        method: 'POST',
        url: `yuebao_zhuanchu.php?moneys=${money}`,
        header: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    });
}

export function offlinelist() {
    return http<any>({
        method: 'POST',
        url: `user/offlinelist`,
        header: {
            'token': uni.getStorageSync('token')
        }
    });
}

export function getZixun( id: string) {
    return http<any>({
        method: 'POST',
        url: `zixun.php?id=${id}`
    });
}

export function getbankinfo() {
    return http<any>({
        method: 'POST',
        url: `usebank.php`
    });
}

export function getNotice() {
    return http<any>({
        method: 'GET',
        url: `gonggao.php`
    });
}

export function getguanyuwomen() {
    return http<any>({
        method: 'GET',
        url: `gonggao_women_q.php`
    });
}

export function getposition() {
    return http<any>({
        method: 'POST',
        url: `yuebao.php`
    });
}

export function withdrawals( bankcode: string, bankname: string, bankuser: string, moneys: string, usepwd: string, tday: string, bankadd: string) {
    return http<any>({
        method: 'POST',
        url: `tixian.php?bankadd=${bankadd}&bankcode=${bankcode}&bankname=${bankname}&bankuser=${bankuser}&moneys=${moneys}&usepwd=${usepwd}&tday=${tday}`,
        header: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    });
}

export function getuserdetail() {
    return http<any>({
        method: 'GET',
        url: `my.php`
    });
}

export function getstream() {
    return http<any>({
        method: 'GET',
        url: `record_chong.php`
    });
}

export function gettxstream() {
    return http<any>({
        method: 'GET',
        url: `record_tixian.php`
    });
}

export function getszstream() {
    return http<any>({
        method: 'GET',
        url: `record_mx.php`
    });
}

export function gethdstream() {
    return http<any>({
        method: 'GET',
        url: `record_huodong.php`
    });
}

export function getjfstream() {
    return http<any>({
        method: 'GET',
        url: `record_jifen.php`
    });
}

export function getAuthentication() {
    return http<any>({
        method: 'GET',
        url: `certification.php`
    });
}

export function authentication(data: any) {
    return http<any>({
        method: 'POST',
        url: `certification_ok.php`,
        data: {
            "token": data.token,
            "realname": data.realname,
            "usecode": data.usecode,
            "con": data.con,
            "con1": data.con1,
            "bankcode": data.bankcode,
            "bankuser": data.bankuser,
            "bankname": data.bankname,
            "bankadd": data.bankadd
        }
    });
}

export function setfollow() {
    return http<any>({
        method: 'POST',
        url: `qiandao.php`,
        header: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    });
}

export function getStrade() {
    return http<any>({
        method: 'POST',
        url: `record.php`
    });
}

export function getInvest() {
    return http<any>({
        method: 'GET',
        url: `invest.php`
    });
}

export function bankRecharge( moneys: string, beizhu: string, con: string, lx: string) {
    return http<any>({
        method: 'POST',
        url: `chong.php`,
        data: {
            token:uni.getStorageSync('token'),
            moneys,
            beizhu,
            con,
            lx
        }
    });
}

export function getXindai() {
    return http<any>({
        method: 'GET',
        url: `xindai.php`
    });
}

export function getLottery() {
    return http<any>({
        method: 'POST',
        url: `choujiang.php`
    });
}

export function postLottery() {
    return http<any>({
        method: 'GET',
        url: `choujiang_ok.php`
    });
}

export function getOrderInfo( bianhao: string) {
    return http<any>({
        method: 'GET',
        url: `order.php?dd_bianhao=${bianhao}`
    });
}

export function postOrder( bianhao: string, days: string, moneys: string, lilv: string) {
    return http<any>({
        method: 'POST',
        url: `order_ok.php?dd_bianhao=${bianhao}&days=${days}&moneys=${moneys}&lilv=${lilv}`,
        header: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    });
}

export function modifypwd( usepwd: string, newpwd: string) {
    return http<any>({
        method: 'POST',
        url: `mod_pwd.php?usepwd=${usepwd}&newpwd=${newpwd}&okpwd=${newpwd}`,
        header: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    });
}

export function getapistrade() {
    return http<any>({
        method: 'POST',
        url: `kefu_about.php`
    });
}

export function getAboutus() {
    return http<any>({
        method: 'GET',
        url: `aboutus.php`
    });
}

export function forgetpwd(usename: string, yzm: string, usepwd: string, yuan: string) {
    return http<any>({
        method: 'POST',
        url: `forget.php?usename=${usename}&usepwd=${usepwd}&okpwd=${usepwd}&yzm=${yzm}&yuan=${yuan}`,
        header: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    });
}

export function getagreement() {
    return http<any>({
        method: 'POST',
        url: `user/agreement`
    });
}

export function checkimg( input: string) {
    return http<any>({
        method: 'POST',
        url: `common/img/check?input=${input}`
    });
}

// ... existing code ...
