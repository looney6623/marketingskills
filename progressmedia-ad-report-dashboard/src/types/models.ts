export type Role='client'|'admin';
export type Channel='all'|'naver'|'meta';
export type NaverType='all'|'sa'|'da'|'gfa';
export type Medium='naver-sa'|'naver-da'|'naver-gfa'|'meta';
export interface ClientAccount { brandName:string; clientId:string; clientPassword:string; adminPassword:string; }
export interface Session { clientId:string; role:Role; brandName:string; }
export interface AdRecord { id:string; date:string; campaign:string; adGroup:string; impressions:number; clicks:number; cost:number; conversions:number; revenue:number; medium:Medium; campaignType:string; }
