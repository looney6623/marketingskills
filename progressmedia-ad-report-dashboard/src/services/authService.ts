import { Session } from '../types/models';
import { clientService } from './clientService';
const KEY='pm_session_v1';
export const authService={
  login:(clientId:string, clientPassword:string, asAdmin:boolean, adminPassword?:string):Session=>{const c=clientService.getByClientId(clientId); if(!c||c.clientPassword!==clientPassword) throw new Error('로그인 실패'); if(asAdmin&&c.adminPassword!==adminPassword) throw new Error('관리자 비밀번호 오류'); const s={clientId,brandName:c.brandName,role:asAdmin?'admin':'client'} as Session; localStorage.setItem(KEY,JSON.stringify(s)); return s;},
  logout:()=>localStorage.removeItem(KEY),
  getSession:():Session|null=>JSON.parse(localStorage.getItem(KEY)??'null')
};
