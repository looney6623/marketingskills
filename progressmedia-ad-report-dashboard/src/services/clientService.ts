import { ClientAccount } from '../types/models';
const KEY='pm_clients_v1';
const getAll=():ClientAccount[]=>JSON.parse(localStorage.getItem(KEY)??'[]');
const save=(items:ClientAccount[])=>localStorage.setItem(KEY,JSON.stringify(items));
export const clientService={
  register:(a:ClientAccount)=>{const items=getAll(); if(items.some(i=>i.clientId===a.clientId)) throw new Error('이미 존재하는 광고주 ID입니다.'); items.push(a); save(items);},
  getByClientId:(id:string)=>getAll().find(i=>i.clientId===id),
  update:(id:string,patch:Partial<ClientAccount>)=>{const items=getAll().map(i=>i.clientId===id?{...i,...patch}:i); save(items);}
};
