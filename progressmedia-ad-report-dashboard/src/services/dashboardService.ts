import { AdRecord } from '../types/models';
const sum=(arr:number[])=>arr.reduce((a,b)=>a+b,0);
export const dashboardService={
 kpis:(rows:AdRecord[])=>{const imp=sum(rows.map(r=>r.impressions));const clicks=sum(rows.map(r=>r.clicks));const cost=sum(rows.map(r=>r.cost));const conv=sum(rows.map(r=>r.conversions));const rev=sum(rows.map(r=>r.revenue)); return {imp,clicks,cost,conv,rev,ctr:imp?clicks/imp:0,cpc:clicks?cost/clicks:0,cvr:clicks?conv/clicks:0,roas:cost?rev/cost:0};},
 byMedium:(rows:AdRecord[])=>Object.entries(rows.reduce((a,r)=>{a[r.medium]=(a[r.medium]??0)+r.cost;return a;},{} as Record<string,number>)).map(([name,cost])=>({name,cost})),
 byCampaign:(rows:AdRecord[])=>Object.entries(rows.reduce((a,r)=>{a[r.campaign]=(a[r.campaign]??0)+r.revenue;return a;},{} as Record<string,number>)).map(([name,revenue])=>({name,revenue})).sort((a,b)=>b.revenue-a.revenue)
};
