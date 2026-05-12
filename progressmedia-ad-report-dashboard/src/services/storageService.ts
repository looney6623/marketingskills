import { AdRecord } from '../types/models';
const key=(id:string)=>`pm_data_${id}`;
export const storageService={
 getRecords:(clientId:string):AdRecord[]=>JSON.parse(localStorage.getItem(key(clientId))??'[]'),
 saveRecords:(clientId:string,records:AdRecord[])=>localStorage.setItem(key(clientId),JSON.stringify(records)),
 upsert:(clientId:string, rows:AdRecord[])=>{const cur=storageService.getRecords(clientId); storageService.saveRecords(clientId,[...cur,...rows]);},
 remove:(clientId:string,id:string)=>storageService.saveRecords(clientId,storageService.getRecords(clientId).filter(r=>r.id!==id))
};
