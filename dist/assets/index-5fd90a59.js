import{j as e,m as le,A as _e}from"./chart-vendor-d93d74c3.js";import{c as He,r as g,u as K,f as ce,R as Ee,B as Ne,h as Oe,i as v,j as Ae,N as U,L as z}from"./react-vendor-8031aaa9.js";import{b as J,i as Xe,a as q,c as Ye,d as D,e as Ge,u as W,f as H,g as Je,h as Ze,Q as et,j as tt}from"./utils-vendor-b26ce675.js";import{R as _,C as j,a as p,S as Q,T as G,b as k,B as y,F as T,M as st,c as h,I as F,d as b,E as nt,D as at,L as V,e as E,f as ue,g as rt,P as N,m as w,h as ze,i as it,j as Me,k as L,l as R,U as ot,n as he,o as ie,p as lt}from"./antd-core-b79000d8.js";import{aS as Le,aT as Re,aU as ct,aV as dt,aW as ut,aX as ht,aY as pe,aZ as xe,a_ as pt,a$ as xt,b0 as $e,b1 as Fe,b2 as mt,b3 as gt,b4 as yt,b5 as ft,b6 as jt,b7 as bt,b8 as vt,b9 as kt,ba as wt}from"./antd-extra-3f2d9d62.js";import{d as f}from"./style-vendor-2319f8b9.js";import{M as O,r as A}from"./markdown-vendor-b3e9444b.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const d of i)if(d.type==="childList")for(const o of d.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const d={};return i.integrity&&(d.integrity=i.integrity),i.referrerPolicy&&(d.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?d.credentials="include":i.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(i){if(i.ep)return;i.ep=!0;const d=n(i);fetch(i.href,d)}})();var oe={},me=He;oe.createRoot=me.createRoot,oe.hydrateRoot=me.hydrateRoot;const ge=[{type:"账户开立阶段-账户唯一性规则限制",value:20},{type:"材料预审阶段-影像质量问题",value:15},{type:"行为驱动归因-预约行为中断",value:10},{type:"账户开立阶段-开户条件不符合监管规定",value:5},{type:"尽职调查阶段-企业经营真实性存疑",value:8},{type:"预约资料提交阶段-影像资料提交问题",value:8},{type:"材料预审阶段-资料缺失或无效",value:12},{type:"标准电核阶段-电话无法接通",value:7},{type:"其他必要影像资料未上传，导致开户审核流程无法完成",value:9},{type:"营业执照及法人证件影像未上传或上传不合规，导致无法完成开户资料审核",value:11},{type:"法人未在规定时间内完成双录流程，导致开户失败",value:6},{type:"营业执照及法人证件影像资料未上传或上传错误，导致开户流程无法完成",value:13},{type:"客户预约的账户类型与实际开立需求不符（如核准类账户误预约、应为变更而非开户），导致开户申请被退回",value:4},{type:"客户重复提交预约信息导致系统中存在多条重复预约记录，影响开户流程",value:3},{type:"企业未满足银行账户设立的资质要求，导致开户申请被退回",value:2},{type:"客户在预约开户时选择的账户类型与实际需求不符，导致开户流程终止",value:1},{type:"客户错误选择账户类型，导致开户流程无法继续",value:0},{type:"提交的开户相关资料不齐全，导致无法完成开户流程",value:14}],Tt={"账户开立阶段-账户唯一性规则限制":[{branch:"北京分行",value:8},{branch:"上海分行",value:5},{branch:"广州分行",value:4},{branch:"深圳分行",value:3}],"材料预审阶段-影像质量问题":[{branch:"北京分行",value:2},{branch:"上海分行",value:6},{branch:"广州分行",value:4},{branch:"深圳分行",value:3}],"行为驱动归因-预约行为中断":[{branch:"北京分行",value:1},{branch:"上海分行",value:3},{branch:"广州分行",value:4},{branch:"深圳分行",value:2}],"账户开立阶段-开户条件不符合监管规定":[{branch:"北京分行",value:1},{branch:"上海分行",value:2},{branch:"广州分行",value:1},{branch:"深圳分行",value:1}],"尽职调查阶段-企业经营真实性存疑":[{branch:"北京分行",value:3},{branch:"上海分行",value:2},{branch:"广州分行",value:2},{branch:"深圳分行",value:1}],"预约资料提交阶段-影像资料提交问题":[{branch:"北京分行",value:3},{branch:"上海分行",value:2},{branch:"广州分行",value:2},{branch:"深圳分行",value:1}],"材料预审阶段-资料缺失或无效":[{branch:"北京分行",value:4},{branch:"上海分行",value:3},{branch:"广州分行",value:3},{branch:"深圳分行",value:2}],"标准电核阶段-电话无法接通":[{branch:"北京分行",value:2},{branch:"上海分行",value:2},{branch:"广州分行",value:1},{branch:"深圳分行",value:2}],"其他必要影像资料未上传，导致开户审核流程无法完成":[{branch:"北京分行",value:3},{branch:"上海分行",value:2},{branch:"广州分行",value:2},{branch:"深圳分行",value:2}],"营业执照及法人证件影像未上传或上传不合规，导致无法完成开户资料审核":[{branch:"北京分行",value:4},{branch:"上海分行",value:3},{branch:"广州分行",value:2},{branch:"深圳分行",value:2}],"法人未在规定时间内完成双录流程，导致开户失败":[{branch:"北京分行",value:2},{branch:"上海分行",value:1},{branch:"广州分行",value:2},{branch:"深圳分行",value:1}],"营业执照及法人证件影像资料未上传或上传错误，导致开户流程无法完成":[{branch:"北京分行",value:5},{branch:"上海分行",value:3},{branch:"广州分行",value:3},{branch:"深圳分行",value:2}],"客户预约的账户类型与实际开立需求不符（如核准类账户误预约、应为变更而非开户），导致开户申请被退回":[{branch:"北京分行",value:1},{branch:"上海分行",value:1},{branch:"广州分行",value:1},{branch:"深圳分行",value:1}],"客户重复提交预约信息导致系统中存在多条重复预约记录，影响开户流程":[{branch:"北京分行",value:1},{branch:"上海分行",value:1},{branch:"广州分行",value:0},{branch:"深圳分行",value:1}],"企业未满足银行账户设立的资质要求，导致开户申请被退回":[{branch:"北京分行",value:0},{branch:"上海分行",value:1},{branch:"广州分行",value:0},{branch:"深圳分行",value:1}],"客户在预约开户时选择的账户类型与实际需求不符，导致开户流程终止":[{branch:"北京分行",value:0},{branch:"上海分行",value:0},{branch:"广州分行",value:1},{branch:"深圳分行",value:0}],"客户错误选择账户类型，导致开户流程无法继续":[{branch:"北京分行",value:0},{branch:"上海分行",value:0},{branch:"广州分行",value:0},{branch:"深圳分行",value:0}],"提交的开户相关资料不齐全，导致无法完成开户流程":[{branch:"北京分行",value:5},{branch:"上海分行",value:4},{branch:"广州分行",value:3},{branch:"深圳分行",value:2}]},St=[{id:"CASE001",type:"账户开立阶段-账户唯一性规则限制",branch:"北京分行",description:"客户已在其他银行开立基本户，根据监管规定，同一企业只能开立一个基本户，无法在我行继续开立基本户。",status:"已解决"},{id:"CASE002",type:"账户开立阶段-账户唯一性规则限制",branch:"上海分行",description:"系统检测到该企业已在其他银行开立基本户，根据《人民币银行结算账户管理办法》规定，企业只能选择一家银行开立基本户，因此无法受理本次开户申请。",status:"处理中"},{id:"CASE003",type:"材料预审阶段-影像质量问题",branch:"广州分行",description:"客户上传的法人身份证照片存在严重模糊、反光等问题，导致系统无法准确识别身份证号码、姓名等关键信息，且照片边缘存在明显阴影，影响证件真实性判断，已通知客户重新上传清晰的身份证原件照片。",status:"处理中"},{id:"CASE004",type:"材料预审阶段-影像质量问题",branch:"深圳分行",description:"客户上传的营业执照影像不完整，仅包含企业名称和统一社会信用代码部分，缺少经营范围、注册资本、成立日期等关键信息，且影像边缘存在裁剪痕迹，影响证件真实性判断，已通知客户重新上传完整的营业执照原件照片。",status:"已解决"},{id:"CASE005",type:"行为驱动归因-预约行为中断",branch:"北京分行",description:"客户因临时出差，无法按时到网点办理，主动申请撤销本次开户。",status:"处理中"},{id:"CASE006",type:"行为驱动归因-预约行为中断",branch:"广州分行",description:"客户因公司内部决策调整，决定暂缓开户，已电话通知银行撤销。",status:"已解决"}],Ct=()=>{const[t,a]=g.useState(ge[0].type),[n,s]=g.useState(null),i=K(),d={data:ge,angleField:"value",colorField:"type",radius:.75,label:{type:"outer",content:"{percentage}"},legend:{position:"bottom",flipPage:!0,maxRow:3},tooltip:{formatter:c=>({name:c.type,value:c.value})},interactions:[{type:"element-active"}],onReady:c=>{c.on("element:click",r=>{const{type:l}=r.data.data;a(l),s(null)})}},o={data:Tt[t]||[],xField:"branch",yField:"value",label:{position:"middle",style:{fill:"#fff",opacity:.8}},color:c=>c.branch===n?"#f5222d":"#1890ff",meta:{branch:{alias:"分行"},value:{alias:"问题数量"}},tooltip:{formatter:c=>({name:c.branch,value:c.value+"个案例"})},interactions:[{type:"element-active"}],onReady:c=>{c.on("element:click",r=>{const l=r.data.data.branch;s(m=>m===l?null:l)})}},u=[{title:"案例编号",dataIndex:"id",key:"id"},{title:"分行",dataIndex:"branch",key:"branch"},{title:"问题类型",dataIndex:"type",key:"type",render:c=>e.jsx(k,{children:c})},{title:"问题描述",dataIndex:"description",key:"description"},{title:"状态",dataIndex:"status",key:"status",render:c=>e.jsx(k,{color:c==="已解决"?"success":"processing",children:c})},{title:"操作",key:"action",render:(c,r)=>e.jsx(y,{type:"link",onClick:()=>i(`/efficiency-score/${r.id}`),children:"查看效率评分"})}],x=St.filter(c=>{const r=c.type===t,l=n?c.branch===n:!0;return r&&l});return e.jsxs("div",{children:[e.jsxs(_,{gutter:[16,16],children:[e.jsx(j,{span:6,children:e.jsx(p,{children:e.jsx(Q,{title:"本月问题总数",value:42})})}),e.jsx(j,{span:6,children:e.jsx(p,{children:e.jsx(Q,{title:"已解决",value:28,valueStyle:{color:"#3f8600"}})})}),e.jsx(j,{span:6,children:e.jsx(p,{children:e.jsx(Q,{title:"处理中",value:14,valueStyle:{color:"#cf1322"}})})}),e.jsx(j,{span:6,children:e.jsx(p,{children:e.jsx(Q,{title:"平均解决时间",value:"2.5",suffix:"天"})})})]}),e.jsxs(_,{gutter:[16,16],style:{marginTop:"16px"},children:[e.jsx(j,{span:12,children:e.jsx(p,{title:"问题类型占比（点击可联动）",children:e.jsx(Le,{...d})})}),e.jsx(j,{span:12,children:e.jsx(p,{title:`"${t}"在各网点分布`,children:e.jsx(Re,{...o})})})]}),e.jsx(p,{title:"最近问题案例",style:{marginTop:"16px"},children:e.jsx(G,{columns:u,dataSource:x,rowKey:"id"})})]})},It=[{main:"客户信息不一致或缺失",sub:"企业名称不符",text:"预约填写的企业名称与营业执照登记名称不一致，或已完成工商变更但预约仍使用旧名称，无法继续开户"},{main:"客户信息不一致或缺失",sub:"法人/证件信息错误",text:"提交的法定代表人姓名、身份证号等证件信息与工商登记或影像资料不一致，或存在缺失、过期情况"},{main:"客户信息不一致或缺失",sub:"无法查到企业信息",text:"通过统一社会信用代码无法在工商系统查到企业登记信息，企业信息缺失或不在有效状态"},{main:"客户信息不一致或缺失",sub:"工商信息未更新",text:"企业已在工商系统完成变更（如法人变更、名称变更等），但预约信息仍为旧数据，导致信息不一致"},{main:"客户信息不一致或缺失",sub:"联系方式错误",text:"预约填写的法人或业务经办人手机号错误、无效或无法接通，导致无法联系进行核实"},{main:"客户信息不一致或缺失",sub:"营业执照过期",text:"所提交的营业执照已过期，或系统校验发现登记状态为无效、吊销，无法满足开户要求"},{main:"影像资料缺失或不合格",sub:"未上传影像资料",text:"客户未上传营业执照、法人证件等开户所需的影像资料"},{main:"影像资料缺失或不合格",sub:"影像模糊或不清晰",text:"上传的影像资料模糊、不清晰或不能识别"},{main:"影像资料缺失或不合格",sub:"上传影像与信息不符",text:"上传影像内容与预约填写信息存在明显不符"},{main:"已存在账户或重复提交",sub:"客户已开户",text:"客户已经在我行或其他行开立账户，不应重复预约"}],Z=["2023-12","2024-01","2024-02","2024-03","2024-04","2024-05"],ye="2024-05",fe="2024-04",X=[],qe={};It.forEach((t,a)=>{let n=0;Z.forEach(s=>{const i=20-a*2,d=Math.random()*10-5,o=Math.sin(Z.indexOf(s)/Z.length*Math.PI)*5,u=Math.max(5,Math.floor(i+d+o));X.push({month:s,value:u,problem:`${t.main} - ${t.sub}`,desc:t.text}),n+=u}),qe[`${t.main} - ${t.sub}`]=n});const Pt=Object.entries(qe).sort((t,a)=>a[1]-t[1]).map(([t])=>t),De=Pt.slice(0,5),_t=X.filter(t=>De.includes(t.problem)),Et={data:_t,xField:"month",yField:"value",seriesField:"problem",tooltip:{fields:["problem","desc","value","month"]},point:{size:5,shape:"diamond"},smooth:!0},We=[];De.forEach(t=>{const a=X.find(s=>s.problem===t&&s.month===ye),n=X.find(s=>s.problem===t&&s.month===fe);We.push({problem:t,month:fe,value:n?n.value:0},{problem:t,month:ye,value:a?a.value:0})});const Ot={data:We,isGroup:!0,xField:"problem",yField:"value",seriesField:"month",color:["#1890ff","#f5222d"],label:{formatter:t=>t.value,style:{fill:"#fff",opacity:.8}},meta:{problem:{alias:"问题类型"},value:{alias:"数量"},month:{alias:"月份"}},tooltip:{fields:["problem","month","value"]}},At=()=>e.jsxs("div",{children:[e.jsx(_,{gutter:[16,16],style:{marginBottom:"16px"}}),e.jsx(_,{gutter:[16,16],children:e.jsx(j,{span:24,children:e.jsx(p,{title:"高发问题趋势分析（前5）",children:e.jsx(ct,{...Et})})})}),e.jsx(_,{gutter:[16,16],style:{marginTop:"16px"},children:e.jsx(j,{span:24,children:e.jsx(p,{title:"高发问题本月/上月对比（前5）",children:e.jsx(Re,{...Ot})})})})]}),{TextArea:je}=F,zt=()=>{const[t,a]=g.useState(!1),[n]=T.useForm(),[s,i]=g.useState(null),d=[{title:"案例编号",dataIndex:"id",key:"id"},{title:"分行",dataIndex:"branch",key:"branch"},{title:"经办人",dataIndex:"handler",key:"handler"},{title:"问题类型",dataIndex:"type",key:"type",render:r=>e.jsx(k,{color:r==="电核"?"blue":r==="尽调"?"green":"orange",children:r})},{title:"一级分类",dataIndex:"mainType",key:"mainType"},{title:"子分类",dataIndex:"subType",key:"subType"},{title:"问题描述",dataIndex:"description",key:"description"},{title:"处理阶段",dataIndex:"stage",key:"stage",render:r=>e.jsx(k,{color:r==="预约"?"default":r==="电核"?"blue":r==="尽调"?"green":r==="面签"?"orange":r==="双录"?"purple":"cyan",children:r})},{title:"状态",dataIndex:"status",key:"status",render:r=>e.jsx(k,{color:r==="已解决"?"success":"processing",children:r})},{title:"解决方案",dataIndex:"solution",key:"solution"},{title:"创建时间",dataIndex:"createTime",key:"createTime"},{title:"操作",key:"action",render:(r,l)=>e.jsxs(b,{size:"middle",children:[e.jsx(y,{type:"text",icon:e.jsx(nt,{}),onClick:()=>u(l)}),e.jsx(y,{type:"text",danger:!0,icon:e.jsx(at,{}),onClick:()=>x(l)})]})}],o=[{id:"CASE001",type:"电核",mainType:"影像资料缺失或不合格",subType:"未上传影像资料",description:"北京某科技公司预约开户，但未上传营业执照和法人身份证件。电核人员多次联系客户，客户表示资料正在准备中。",status:"处理中",solution:"已发送资料上传指引，等待客户补充上传。",createTime:"2024-05-01",branch:"北京分行",handler:"张明",stage:"电核"},{id:"CASE002",type:"尽调",mainType:"影像资料缺失或不合格",subType:"影像模糊或不清晰",description:"上海某贸易公司上传的营业执照影像严重模糊，无法识别关键信息。尽调人员要求重新上传，但客户表示原件已丢失。",status:"已解决",solution:"建议客户先补办营业执照，再重新预约开户。",createTime:"2024-05-02",branch:"上海分行",handler:"李华",stage:"尽调"},{id:"CASE003",type:"面签",mainType:"已存在账户或重复提交",subType:"客户已开户",description:"广州某制造企业到网点面签时，系统提示该企业已在我行开立基本户。经核实，该企业确实已在其他支行完成开户。",status:"已解决",solution:"告知客户无需重复开户，建议使用已有账户。",createTime:"2024-05-03",branch:"广州分行",handler:"王芳",stage:"面签"},{id:"CASE004",type:"双录",mainType:"客户主动取消或未完成",subType:"客户未按时到场",description:"深圳某科技公司预约双录，但客户未按时到场。多次联系客户，客户表示临时有事无法到场，要求改期。",status:"处理中",solution:"重新预约双录时间，并发送预约提醒。",createTime:"2024-05-04",branch:"深圳分行",handler:"赵静",stage:"双录"},{id:"CASE005",type:"尽调",mainType:"账户不符合受理条件",subType:"黑名单客户",description:"成都某贸易公司在尽调阶段被发现其法人代表在反洗钱黑名单中。经核实，该法人确实存在可疑交易记录。",status:"已解决",solution:"根据反洗钱规定，拒绝开户申请。",createTime:"2024-05-05",branch:"成都分行",handler:"陈强",stage:"尽调"},{id:"CASE006",type:"预约",mainType:"账户不符合受理条件",subType:"材料不齐全_客户无真实开户资料",description:"杭州某科技公司在预约阶段无法提供营业执照原件，仅提供复印件。经核实，该企业营业执照已被吊销。",status:"已解决",solution:"告知客户需要先恢复营业执照有效性，再重新预约开户。",createTime:"2024-05-06",branch:"杭州分行",handler:"周明",stage:"预约"},{id:"CASE007",type:"电核",mainType:"已存在账户或重复提交",subType:"他行预约未完成",description:"南京某贸易公司在电核阶段被发现其正在其他银行办理开户手续。客户表示希望在我行开户，但其他银行流程未完成。",status:"处理中",solution:"建议客户先完成他行开户流程，再考虑在我行开户。",createTime:"2024-05-07",branch:"南京分行",handler:"吴婷",stage:"电核"},{id:"CASE008",type:"面签",mainType:"客户主动取消或未完成",subType:"客户联系不上",description:"武汉某制造企业预约面签后，经办人员多次联系客户，电话始终无人接听。通过其他渠道了解到客户已更换联系方式。",status:"处理中",solution:"通过企业工商登记信息中的其他联系方式尝试联系客户。",createTime:"2024-05-08",branch:"武汉分行",handler:"刘洋",stage:"面签"}],u=r=>{i(r),n.setFieldsValue(r),a(!0)},x=r=>{console.log("Delete:",r)},c=()=>{n.validateFields().then(r=>{console.log("Form values:",r),a(!1),n.resetFields(),i(null)})};return e.jsxs("div",{children:[e.jsx(p,{title:"案例管理",extra:e.jsx(y,{type:"primary",onClick:()=>a(!0),children:"新增案例"}),children:e.jsx(G,{columns:d,dataSource:o,scroll:{x:1500}})}),e.jsx(st,{title:s?"编辑案例":"新增案例",open:t,onOk:c,onCancel:()=>{a(!1),n.resetFields(),i(null)},width:800,children:e.jsxs(T,{form:n,layout:"vertical",children:[e.jsx(T.Item,{name:"branch",label:"分行",rules:[{required:!0,message:"请选择分行"}],children:e.jsxs(h,{children:[e.jsx(h.Option,{value:"北京分行",children:"北京分行"}),e.jsx(h.Option,{value:"上海分行",children:"上海分行"}),e.jsx(h.Option,{value:"广州分行",children:"广州分行"}),e.jsx(h.Option,{value:"深圳分行",children:"深圳分行"}),e.jsx(h.Option,{value:"成都分行",children:"成都分行"}),e.jsx(h.Option,{value:"杭州分行",children:"杭州分行"}),e.jsx(h.Option,{value:"南京分行",children:"南京分行"}),e.jsx(h.Option,{value:"武汉分行",children:"武汉分行"})]})}),e.jsx(T.Item,{name:"handler",label:"经办人",rules:[{required:!0,message:"请输入经办人"}],children:e.jsx(F,{})}),e.jsx(T.Item,{name:"type",label:"问题类型",rules:[{required:!0,message:"请选择问题类型"}],children:e.jsxs(h,{children:[e.jsx(h.Option,{value:"电核",children:"电核"}),e.jsx(h.Option,{value:"尽调",children:"尽调"}),e.jsx(h.Option,{value:"面签",children:"面签"}),e.jsx(h.Option,{value:"双录",children:"双录"})]})}),e.jsx(T.Item,{name:"mainType",label:"一级分类",rules:[{required:!0,message:"请选择一级分类"}],children:e.jsxs(h,{children:[e.jsx(h.Option,{value:"影像资料缺失或不合格",children:"影像资料缺失或不合格"}),e.jsx(h.Option,{value:"已存在账户或重复提交",children:"已存在账户或重复提交"}),e.jsx(h.Option,{value:"客户主动取消或未完成",children:"客户主动取消或未完成"}),e.jsx(h.Option,{value:"账户不符合受理条件",children:"账户不符合受理条件"})]})}),e.jsx(T.Item,{name:"subType",label:"子分类",rules:[{required:!0,message:"请选择子分类"}],children:e.jsxs(h,{children:[e.jsx(h.Option,{value:"未上传影像资料",children:"未上传影像资料"}),e.jsx(h.Option,{value:"影像模糊或不清晰",children:"影像模糊或不清晰"}),e.jsx(h.Option,{value:"上传影像与信息不符",children:"上传影像与信息不符"}),e.jsx(h.Option,{value:"客户已开户",children:"客户已开户"}),e.jsx(h.Option,{value:"多次提交相同预约",children:"多次提交相同预约"}),e.jsx(h.Option,{value:"他行预约未完成",children:"他行预约未完成"}),e.jsx(h.Option,{value:"客户明确取消",children:"客户明确取消"}),e.jsx(h.Option,{value:"客户未按时到场",children:"客户未按时到场"}),e.jsx(h.Option,{value:"客户联系不上",children:"客户联系不上"}),e.jsx(h.Option,{value:"黑名单客户",children:"黑名单客户"}),e.jsx(h.Option,{value:"材料不齐全_客户无真实开户资料",children:"材料不齐全_客户无真实开户资料"})]})}),e.jsx(T.Item,{name:"description",label:"问题描述",rules:[{required:!0,message:"请输入问题描述"}],children:e.jsx(je,{rows:4})}),e.jsx(T.Item,{name:"stage",label:"处理阶段",rules:[{required:!0,message:"请选择处理阶段"}],children:e.jsxs(h,{children:[e.jsx(h.Option,{value:"预约",children:"预约"}),e.jsx(h.Option,{value:"电核",children:"电核"}),e.jsx(h.Option,{value:"尽调",children:"尽调"}),e.jsx(h.Option,{value:"面签",children:"面签"}),e.jsx(h.Option,{value:"双录",children:"双录"}),e.jsx(h.Option,{value:"开发",children:"开发"})]})}),e.jsx(T.Item,{name:"status",label:"状态",rules:[{required:!0,message:"请选择状态"}],children:e.jsxs(h,{children:[e.jsx(h.Option,{value:"处理中",children:"处理中"}),e.jsx(h.Option,{value:"已解决",children:"已解决"})]})}),e.jsx(T.Item,{name:"solution",label:"解决方案",rules:[{required:!0,message:"请输入解决方案"}],children:e.jsx(je,{rows:4})})]})})]})},{TextArea:Mt}=F,{Text:ee}=E,Lt=()=>{const[t,a]=g.useState(""),[n,s]=g.useState([{id:"1",caseId:"CASE001",problem:"客户电话无法接通",aiAnalysis:"根据历史数据分析，此类问题通常与客户联系方式变更或信号问题有关。建议检查客户提供的其他联系方式，并尝试在不同时段联系。",suggestion:`1. 尝试使用备用联系方式
2. 在上午9-11点或下午2-4点时段联系
3. 发送短信提醒客户保持电话畅通`,feedback:null},{id:"2",caseId:"CASE002",problem:"企业地址信息不准确",aiAnalysis:"地址信息不准确通常与工商信息更新不及时或客户提供信息有误有关。建议核实最新工商信息，并与客户确认实际经营地址。",suggestion:`1. 查询最新工商信息
2. 要求客户提供实际经营地址证明
3. 安排实地考察确认`,feedback:null}]),i=()=>{if(!t.trim())return;const o={id:Date.now().toString(),caseId:`CASE${Math.floor(Math.random()*1e3)}`,problem:t,aiAnalysis:"AI 正在分析问题...",suggestion:"正在生成建议...",feedback:null};s([o,...n]),a(""),setTimeout(()=>{s(u=>u.map(x=>x.id===o.id?{...x,aiAnalysis:"根据历史数据分析，这是一个常见问题。建议从多个角度进行排查和解决。",suggestion:`1. 详细记录问题情况
2. 制定解决方案
3. 跟踪解决效果`}:x))},2e3)},d=(o,u)=>{s(x=>x.map(c=>c.id===o?{...c,feedback:u}:c))};return e.jsxs("div",{children:[e.jsx(p,{title:"AI 智能建议",style:{marginBottom:"16px"},children:e.jsxs(b.Compact,{style:{width:"100%"},children:[e.jsx(Mt,{value:t,onChange:o=>a(o.target.value),placeholder:"请输入您遇到的问题，AI 将为您提供分析和建议",autoSize:{minRows:2,maxRows:6}}),e.jsx(y,{type:"primary",icon:e.jsx(dt,{}),onClick:i,style:{height:"auto"},children:"发送"})]})}),e.jsx(V,{itemLayout:"vertical",dataSource:n,renderItem:o=>e.jsxs(V.Item,{actions:[e.jsx(y,{type:"text",icon:e.jsx(ut,{}),onClick:()=>d(o.id,"positive"),style:{color:o.feedback==="positive"?"#52c41a":void 0},children:"有帮助"}),e.jsx(y,{type:"text",icon:e.jsx(ht,{}),onClick:()=>d(o.id,"negative"),style:{color:o.feedback==="negative"?"#ff4d4f":void 0},children:"没帮助"})],children:[e.jsx(V.Item.Meta,{title:e.jsxs(b,{children:[e.jsx(k,{color:"blue",children:o.caseId}),e.jsx(ee,{strong:!0,children:o.problem})]})}),e.jsx(p,{size:"small",title:"AI 分析",style:{marginBottom:"8px"},children:e.jsx(ee,{children:o.aiAnalysis})}),e.jsx(p,{size:"small",title:"建议方案",children:e.jsx(ee,{children:o.suggestion})})]},o.id)})]})},{Title:be,Text:S,Paragraph:ve}=E,I={businessId:"20250605-001",customerName:"上海某科技有限公司",accountType:"基本户",channel:"手机银行",branch:"南京分行鼓楼支行",processingTime:"54小时",efficiencyScore:82.4},Rt=[{stage:"预约",duration:"2小时",status:"success"},{stage:"初审",duration:"4小时",status:"success"},{stage:"尽调",duration:"14小时",status:"error",delay:"+10h 超时"},{stage:"电核",duration:"8小时",status:"success"},{stage:"面签",duration:"12小时",status:"success"},{stage:"开户",duration:"14小时",status:"success"}],$t=[{factor:"账户类型为基本户",value:.05,status:"success",description:"基本户开户流程较复杂"},{factor:"外籍董事成员",value:.05,status:"success",description:"需要额外身份验证"},{factor:"命中失信名单",value:.1,status:"success",description:"需要额外风险审查"},{factor:"资料补传3轮",value:.03,status:"success",description:"资料补充次数较多"},{factor:"AI判定合理慢",value:.05,status:"success",description:"系统判定处理时间合理"}],Ft=[{dimension:"法人身份核查",checked:!0,highlighted:!1},{dimension:"企业工商信息",checked:!0,highlighted:!1},{dimension:"失信名单查询",checked:!0,highlighted:!0,details:"发现法人失信记录"},{dimension:"裁判文书查询",checked:!0,highlighted:!0,details:"发现相关诉讼记录"},{dimension:"法院公告查询",checked:!1,highlighted:!1},{dimension:"风险处置备注",checked:!1,highlighted:!1}],ke=()=>{const{id:t}=ce(),a=K(),[n,s]=g.useState([]);g.useEffect(()=>{console.log("Loading data for case:",t)},[t]);const i=o=>{s(u=>u.includes(o)?u.filter(x=>x!==o):[...u,o])},d={data:[{type:"得分",value:I.efficiencyScore},{type:"未得分",value:100-I.efficiencyScore}],angleField:"value",colorField:"type",radius:.8,innerRadius:.6,width:240,height:240,color:["#1890ff","#f0f0f0"],legend:!1,label:!1,statistic:{title:!1,content:{style:{fontSize:"40px",fontWeight:"bold",lineHeight:"1",color:"#1890ff"},formatter:()=>`${I.efficiencyScore}`}}};return e.jsxs("div",{style:{padding:"24px"},children:[e.jsx(y,{type:"link",onClick:()=>a("/"),style:{marginBottom:"16px"},children:"← 返回列表"}),e.jsx(p,{style:{marginBottom:"24px"},children:e.jsxs(_,{gutter:[24,24],children:[e.jsx(j,{span:16,children:e.jsxs(_,{gutter:[16,16],children:[e.jsxs(j,{span:8,children:[e.jsx(S,{type:"secondary",children:"业务编号"}),e.jsx("div",{children:I.businessId})]}),e.jsxs(j,{span:8,children:[e.jsx(S,{type:"secondary",children:"客户名称"}),e.jsx("div",{children:I.customerName})]}),e.jsxs(j,{span:8,children:[e.jsx(S,{type:"secondary",children:"账户类型"}),e.jsx("div",{children:I.accountType})]}),e.jsxs(j,{span:8,children:[e.jsx(S,{type:"secondary",children:"预约渠道"}),e.jsx("div",{children:I.channel})]}),e.jsxs(j,{span:8,children:[e.jsx(S,{type:"secondary",children:"开户网点"}),e.jsx("div",{children:I.branch})]}),e.jsxs(j,{span:8,children:[e.jsx(S,{type:"secondary",children:"处理时长"}),e.jsx("div",{children:I.processingTime})]})]})}),e.jsx(j,{span:8,children:e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(be,{level:4,children:"效率得分"}),e.jsx("div",{style:{width:"240px",height:"240px",margin:"0 auto"},children:e.jsx(Le,{...d,width:240,height:240})}),e.jsxs(S,{strong:!0,style:{fontSize:20},children:[I.efficiencyScore," / 100"]})]})})]})}),e.jsxs(_,{gutter:[24,24],children:[e.jsx(j,{span:24,children:e.jsx(p,{title:"时间效率得分（68 / 70）",extra:e.jsx(y,{type:"link",onClick:()=>i("time"),children:n.includes("time")?"收起":"展开"}),children:e.jsx(ue,{children:Rt.map((o,u)=>e.jsx(ue.Item,{color:o.status==="success"?"green":"red",children:e.jsxs(b,{children:[e.jsx(S,{children:o.stage}),e.jsx(S,{type:"secondary",children:o.duration}),o.delay&&e.jsx(k,{color:"red",children:o.delay})]})},u))})})}),e.jsx(j,{span:24,children:e.jsx(p,{title:"业务复杂度系数 C = 1.15",extra:e.jsx(y,{type:"link",onClick:()=>i("complexity"),children:n.includes("complexity")?"收起":"展开"}),children:e.jsx(_,{gutter:[16,16],children:$t.map((o,u)=>e.jsx(j,{span:12,children:e.jsx(rt,{title:o.description,children:e.jsx(p,{size:"small",children:e.jsxs(b,{children:[o.status==="success"?e.jsx(pe,{style:{color:"green"}}):e.jsx(xe,{style:{color:"red"}}),e.jsx(S,{children:o.factor}),e.jsxs(S,{type:"secondary",children:["+",o.value]})]})})})},u))})})}),e.jsx(j,{span:24,children:e.jsx(p,{title:"风控动作得分（10 / 20）",extra:e.jsx(y,{type:"link",onClick:()=>i("risk"),children:n.includes("risk")?"收起":"展开"}),children:e.jsx(G,{dataSource:Ft,columns:[{title:"核查维度",dataIndex:"dimension",key:"dimension"},{title:"状态",dataIndex:"checked",key:"checked",render:o=>o?e.jsx(pe,{style:{color:"green"}}):e.jsx(xe,{style:{color:"red"}})},{title:"详情",dataIndex:"details",key:"details",render:o=>o&&e.jsx(k,{color:"red",children:o})}],pagination:!1})})})]}),e.jsxs(p,{style:{marginTop:"24px"},children:[e.jsx(be,{level:4,children:"评分计算说明"}),e.jsxs(ve,{children:["EfficiencyScore = 时间效率得分 × C（复杂度系数） + 风控得分 + 模型合理性解释得分",e.jsx("br",{}),"EfficiencyScore = 68 × 1.15 + 10 + 3 = 82.2"]}),e.jsx(N,{percent:82.2,status:"active",strokeColor:{"0%":"#108ee9","100%":"#87d068"}}),e.jsx(ve,{style:{marginTop:"16px"},children:"客户为基本户 + 外资背景 + 风险命中后已尽调但未闭环，整体流程偏慢但合理。建议提升风控完整性。"}),e.jsxs(b,{style:{marginTop:"16px"},children:[e.jsx(y,{type:"primary",icon:e.jsx(pt,{}),children:"导出为PDF"}),e.jsx(y,{icon:e.jsx(xt,{}),children:"发送至邮箱"})]})]})]})},qt={lessThanXSeconds:{one:"不到 1 秒",other:"不到 {{count}} 秒"},xSeconds:{one:"1 秒",other:"{{count}} 秒"},halfAMinute:"半分钟",lessThanXMinutes:{one:"不到 1 分钟",other:"不到 {{count}} 分钟"},xMinutes:{one:"1 分钟",other:"{{count}} 分钟"},xHours:{one:"1 小时",other:"{{count}} 小时"},aboutXHours:{one:"大约 1 小时",other:"大约 {{count}} 小时"},xDays:{one:"1 天",other:"{{count}} 天"},aboutXWeeks:{one:"大约 1 个星期",other:"大约 {{count}} 个星期"},xWeeks:{one:"1 个星期",other:"{{count}} 个星期"},aboutXMonths:{one:"大约 1 个月",other:"大约 {{count}} 个月"},xMonths:{one:"1 个月",other:"{{count}} 个月"},aboutXYears:{one:"大约 1 年",other:"大约 {{count}} 年"},xYears:{one:"1 年",other:"{{count}} 年"},overXYears:{one:"超过 1 年",other:"超过 {{count}} 年"},almostXYears:{one:"将近 1 年",other:"将近 {{count}} 年"}},Dt=(t,a,n)=>{let s;const i=qt[t];return typeof i=="string"?s=i:a===1?s=i.one:s=i.other.replace("{{count}}",String(a)),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?s+"内":s+"前":s},Wt={full:"y'年'M'月'd'日' EEEE",long:"y'年'M'月'd'日'",medium:"yyyy-MM-dd",short:"yy-MM-dd"},Kt={full:"zzzz a h:mm:ss",long:"z a h:mm:ss",medium:"a h:mm:ss",short:"a h:mm"},Bt={full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},Qt={date:J({formats:Wt,defaultWidth:"full"}),time:J({formats:Kt,defaultWidth:"full"}),dateTime:J({formats:Bt,defaultWidth:"full"})};function we(t,a,n){const s="eeee p";return Xe(t,a,n)?s:t.getTime()>a.getTime()?"'下个'"+s:"'上个'"+s}const Vt={lastWeek:we,yesterday:"'昨天' p",today:"'今天' p",tomorrow:"'明天' p",nextWeek:we,other:"PP p"},Ut=(t,a,n,s)=>{const i=Vt[t];return typeof i=="function"?i(a,n,s):i},Ht={narrow:["前","公元"],abbreviated:["前","公元"],wide:["公元前","公元"]},Nt={narrow:["1","2","3","4"],abbreviated:["第一季","第二季","第三季","第四季"],wide:["第一季度","第二季度","第三季度","第四季度"]},Xt={narrow:["一","二","三","四","五","六","七","八","九","十","十一","十二"],abbreviated:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],wide:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]},Yt={narrow:["日","一","二","三","四","五","六"],short:["日","一","二","三","四","五","六"],abbreviated:["周日","周一","周二","周三","周四","周五","周六"],wide:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]},Gt={narrow:{am:"上",pm:"下",midnight:"凌晨",noon:"午",morning:"早",afternoon:"下午",evening:"晚",night:"夜"},abbreviated:{am:"上午",pm:"下午",midnight:"凌晨",noon:"中午",morning:"早晨",afternoon:"中午",evening:"晚上",night:"夜间"},wide:{am:"上午",pm:"下午",midnight:"凌晨",noon:"中午",morning:"早晨",afternoon:"中午",evening:"晚上",night:"夜间"}},Jt={narrow:{am:"上",pm:"下",midnight:"凌晨",noon:"午",morning:"早",afternoon:"下午",evening:"晚",night:"夜"},abbreviated:{am:"上午",pm:"下午",midnight:"凌晨",noon:"中午",morning:"早晨",afternoon:"中午",evening:"晚上",night:"夜间"},wide:{am:"上午",pm:"下午",midnight:"凌晨",noon:"中午",morning:"早晨",afternoon:"中午",evening:"晚上",night:"夜间"}},Zt=(t,a)=>{const n=Number(t);switch(a==null?void 0:a.unit){case"date":return n.toString()+"日";case"hour":return n.toString()+"时";case"minute":return n.toString()+"分";case"second":return n.toString()+"秒";default:return"第 "+n.toString()}},es={ordinalNumber:Zt,era:q({values:Ht,defaultWidth:"wide"}),quarter:q({values:Nt,defaultWidth:"wide",argumentCallback:t=>t-1}),month:q({values:Xt,defaultWidth:"wide"}),day:q({values:Yt,defaultWidth:"wide"}),dayPeriod:q({values:Gt,defaultWidth:"wide",formattingValues:Jt,defaultFormattingWidth:"wide"})},ts=/^(第\s*)?\d+(日|时|分|秒)?/i,ss=/\d+/i,ns={narrow:/^(前)/i,abbreviated:/^(前)/i,wide:/^(公元前|公元)/i},as={any:[/^(前)/i,/^(公元)/i]},rs={narrow:/^[1234]/i,abbreviated:/^第[一二三四]刻/i,wide:/^第[一二三四]刻钟/i},is={any:[/(1|一)/i,/(2|二)/i,/(3|三)/i,/(4|四)/i]},os={narrow:/^(一|二|三|四|五|六|七|八|九|十[二一])/i,abbreviated:/^(一|二|三|四|五|六|七|八|九|十[二一]|\d|1[12])月/i,wide:/^(一|二|三|四|五|六|七|八|九|十[二一])月/i},ls={narrow:[/^一/i,/^二/i,/^三/i,/^四/i,/^五/i,/^六/i,/^七/i,/^八/i,/^九/i,/^十(?!(一|二))/i,/^十一/i,/^十二/i],any:[/^一|1/i,/^二|2/i,/^三|3/i,/^四|4/i,/^五|5/i,/^六|6/i,/^七|7/i,/^八|8/i,/^九|9/i,/^十(?!(一|二))|10/i,/^十一|11/i,/^十二|12/i]},cs={narrow:/^[一二三四五六日]/i,short:/^[一二三四五六日]/i,abbreviated:/^周[一二三四五六日]/i,wide:/^星期[一二三四五六日]/i},ds={any:[/日/i,/一/i,/二/i,/三/i,/四/i,/五/i,/六/i]},us={any:/^(上午?|下午?|午夜|[中正]午|早上?|下午|晚上?|凌晨|)/i},hs={any:{am:/^上午?/i,pm:/^下午?/i,midnight:/^午夜/i,noon:/^[中正]午/i,morning:/^早上/i,afternoon:/^下午/i,evening:/^晚上?/i,night:/^凌晨/i}},ps={ordinalNumber:Ye({matchPattern:ts,parsePattern:ss,valueCallback:t=>parseInt(t,10)}),era:D({matchPatterns:ns,defaultMatchWidth:"wide",parsePatterns:as,defaultParseWidth:"any"}),quarter:D({matchPatterns:rs,defaultMatchWidth:"wide",parsePatterns:is,defaultParseWidth:"any",valueCallback:t=>t+1}),month:D({matchPatterns:os,defaultMatchWidth:"wide",parsePatterns:ls,defaultParseWidth:"any"}),day:D({matchPatterns:cs,defaultMatchWidth:"wide",parsePatterns:ds,defaultParseWidth:"any"}),dayPeriod:D({matchPatterns:us,defaultMatchWidth:"any",parsePatterns:hs,defaultParseWidth:"any"})},Y={code:"zh-CN",formatDistance:Dt,formatLong:Qt,formatRelative:Ut,localize:es,match:ps,options:{weekStartsOn:1,firstWeekContainsDate:4}},xs={BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}.VITE_API_BASE_URL||"/api",$={auth:{token:"/auth/token"},admin:{apiKeys:"/admin/api-keys",apiKeyLogs:"/admin/api-keys/logs"},task:{list:"/tasks",start:"/start_task",status:t=>`/task/${t}/status`,questions:t=>`/task/${t}/questions`,summary:t=>`/task/${t}/summary`},dueDiligence:{generateQuestions:t=>`/generate_questions/${t}`,getQuestions:t=>`/get_generate_questions/${t}`}},P=Ge.create({baseURL:xs,timeout:1e4});P.interceptors.request.use(t=>{var n;console.log("🚀 API请求:",{method:(n=t.method)==null?void 0:n.toUpperCase(),url:t.url,baseURL:t.baseURL,fullURL:`${t.baseURL}${t.url}`,headers:t.headers,data:t.data});const a=sessionStorage.getItem("auth_token");return a&&(t.headers=t.headers||{},t.headers.Authorization=`Bearer ${a}`),t},t=>(console.error("❌ API请求错误:",t),Promise.reject(t)));P.interceptors.response.use(t=>(console.log("✅ API响应:",{status:t.status,url:t.config.url,data:t.data}),t),t=>{var a,n,s,i;if(console.error("❌ API响应错误:",{status:(a=t.response)==null?void 0:a.status,url:(n=t.config)==null?void 0:n.url,message:t.message,response:(s=t.response)==null?void 0:s.data}),t.response)switch(t.response.status){case 401:w.error("认证Token无效或已过期"),sessionStorage.removeItem("auth_token"),window.location.href="/auth";break;case 403:w.error("权限不足");break;case 500:w.error("服务器内部错误");break;default:w.error(((i=t.response.data)==null?void 0:i.message)||"请求失败")}else w.error("网络错误，请检查网络连接");return Promise.reject(t)});const Ke=t=>{const{data:a,isLoading:n,error:s}=W({queryKey:["taskStatus",t],queryFn:async()=>{if(!t)throw new Error("No batch number provided");const r=await P.get($.task.status(t));return console.log("Main task response:",r.data),{id:r.data.id||0,batch_no:t,title:r.data.title||"企业尽调分析任务",status:r.data.status||"pending",created_at:r.data.created_at||new Date().toISOString(),completed_at:r.data.completed_at||null}},refetchInterval:r=>{const l=r.state.data;return(l==null?void 0:l.status)==="completed"||(l==null?void 0:l.status)==="failed"?!1:5e3},retry:3,retryDelay:r=>Math.min(1e3*2**r,3e4),enabled:!!t}),{data:i,isLoading:d,error:o}=W({queryKey:["taskQuestions",t],queryFn:async()=>{if(!t)throw new Error("No batch number provided");const r=await P.get($.task.questions(t));return console.log("Sub tasks response:",r.data),Array.isArray(r.data)?r.data.map(l=>({id:l.id||0,question_no:l.question_no||"",origin_question:l.origin_question||"",status:l.status||"pending",result:l.result||"",created_at:l.created_at||new Date().toISOString(),progress:l.status==="completed"?100:l.status==="running"?50:(l.status==="failed",0),has_valid_data:typeof l.has_valid_data<"u"?l.has_valid_data:void 0})):(console.warn("Unexpected sub tasks response format:",r.data),[])},refetchInterval:r=>{const l=r.state.data;return l&&l.length>0&&l.every(m=>m.status==="completed"||m.status==="failed")?!1:5e3},retry:3,retryDelay:r=>Math.min(1e3*2**r,3e4),enabled:!!t}),{data:u,isLoading:x,error:c}=W({queryKey:["taskSummary",t],queryFn:async()=>{if(!t)throw new Error("No batch number provided");const r=await P.get($.task.summary(t));return console.log("Summary response:",r.data),{summary_question:r.data.summary_question||"",summary_answer:r.data.summary_answer||"",status:r.data.status||"pending"}},refetchInterval:r=>{const l=r.state.data;return(l==null?void 0:l.status)==="completed"||(l==null?void 0:l.status)==="failed"?!1:5e3},retry:3,retryDelay:r=>Math.min(1e3*2**r,3e4),enabled:!!t&&(a==null?void 0:a.status)==="completed"});return console.log("Task polling state:",{mainTask:a,subTasks:i,summary:u,isLoading:n||d||x,error:s||o||c}),{mainTask:a,subTasks:i,summary:u,isLoading:n||d||x,error:s||o||c}},{Text:Te}=E,ms=f(p)`
  margin-bottom: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  }
`,gs=f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
`,ys=f.div`
  transition: transform 0.3s ease;
  color: #666;
  font-size: 12px;
`,fs=f.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
`,js=f.div`
  padding: 0 16px 16px;
  border-top: 1px solid #f0f0f0;
`,bs=f(k)`
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 4px;
  ${({status:t})=>{switch(t){case"pending":return"background-color: #f5f5f5; color: #666;";case"running":return"background-color: #e6f7ff; color: #1890ff;";case"completed":return"background-color: #f6ffed; color: #52c41a;";case"failed":return"background-color: #fff2f0; color: #ff4d4f;";default:return""}}}
`,vs=f.div`
  font-size: 14px;
  line-height: 1.8;
  margin-top: 8px;
  color: #333;
  
  h1, h2, h3, h4, h5, h6 {
    margin-top: 16px;
    margin-bottom: 12px;
    font-weight: 600;
    line-height: 1.25;
  }

  h1 { font-size: 1.8em; }
  h2 { font-size: 1.4em; }
  h3 { font-size: 1.2em; }
  h4 { font-size: 1em; }

  p {
    margin-bottom: 12px;
  }

  ul, ol {
    padding-left: 2em;
    margin-bottom: 12px;
  }

  li {
    margin-bottom: 6px;
  }

  blockquote {
    margin: 12px 0;
    padding: 0 1em;
    color: #6a737d;
    border-left: 0.25em solid #dfe2e5;
  }

  code {
    padding: 0.2em 0.4em;
    margin: 0;
    font-size: 85%;
    background-color: rgba(27,31,35,0.05);
    border-radius: 3px;
  }

  pre {
    padding: 12px;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    background-color: #f6f8fa;
    border-radius: 3px;
  }

  table {
    display: block;
    width: 100%;
    overflow: auto;
    margin-bottom: 12px;
    border-spacing: 0;
    border-collapse: collapse;
  }

  table th {
    font-weight: 600;
    padding: 6px 13px;
    border: 1px solid #dfe2e5;
  }

  table td {
    padding: 6px 13px;
    border: 1px solid #dfe2e5;
  }

  table tr {
    background-color: #fff;
    border-top: 1px solid #c6cbd1;
  }

  table tr:nth-child(2n) {
    background-color: #f6f8fa;
  }

  hr {
    height: 0.25em;
    padding: 0;
    margin: 16px 0;
    background-color: #e1e4e8;
    border: 0;
  }

  img {
    max-width: 100%;
    box-sizing: content-box;
  }
`,Be=({task:t})=>{const[a,n]=g.useState(!1),s=()=>{n(!a)};return e.jsx(le.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.3},children:e.jsxs(ms,{onClick:s,children:[e.jsxs(gs,{children:[e.jsxs(fs,{children:[e.jsx(ys,{style:{transform:a?"rotate(0deg)":"rotate(-90deg)"},children:e.jsx(ze,{})}),e.jsx(Te,{strong:!0,style:{flex:1},children:t.origin_question})]}),e.jsx("div",{style:{display:"flex",alignItems:"center",gap:8},children:e.jsx(bs,{status:t.status,children:t.status})})]}),a&&e.jsxs(js,{children:[e.jsx(N,{percent:t.progress,size:"small",status:t.status==="failed"?"exception":void 0,style:{marginBottom:16}}),t.status==="completed"&&t.result&&e.jsx(vs,{children:e.jsx(O,{remarkPlugins:[A],children:t.result})}),t.status==="failed"&&t.error&&e.jsx(Te,{type:"danger",children:t.error})]})]})})},{Text:Se}=E,Ce=f(le.div)`
  margin-top: 16px;
`,M=f.div`
  font-size: 14px;
  line-height: 1.8;
  
  h1, h2, h3, h4, h5, h6 {
    margin-top: 24px;
    margin-bottom: 16px;
    font-weight: 600;
    line-height: 1.25;
  }

  h1 { font-size: 2em; }
  h2 { font-size: 1.5em; }
  h3 { font-size: 1.25em; }
  h4 { font-size: 1em; }

  p {
    margin-bottom: 16px;
  }

  ul, ol {
    padding-left: 2em;
    margin-bottom: 16px;
  }

  li {
    margin-bottom: 8px;
  }

  blockquote {
    margin: 16px 0;
    padding: 0 1em;
    color: #6a737d;
    border-left: 0.25em solid #dfe2e5;
  }

  code {
    padding: 0.2em 0.4em;
    margin: 0;
    font-size: 85%;
    background-color: rgba(27,31,35,0.05);
    border-radius: 3px;
  }

  pre {
    padding: 16px;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    background-color: #f6f8fa;
    border-radius: 3px;
  }

  table {
    display: block;
    width: 100%;
    overflow: auto;
    margin-bottom: 16px;
    border-spacing: 0;
    border-collapse: collapse;
  }

  table th {
    font-weight: 600;
    padding: 6px 13px;
    border: 1px solid #dfe2e5;
  }

  table td {
    padding: 6px 13px;
    border: 1px solid #dfe2e5;
  }

  table tr {
    background-color: #fff;
    border-top: 1px solid #c6cbd1;
  }

  table tr:nth-child(2n) {
    background-color: #f6f8fa;
  }

  hr {
    height: 0.25em;
    padding: 0;
    margin: 24px 0;
    background-color: #e1e4e8;
    border: 0;
  }

  img {
    max-width: 100%;
    box-sizing: content-box;
  }
`,Qe=({summary:t})=>{let a=null;try{a=JSON.parse(t.summary_answer)}catch(s){console.error("Failed to parse summary as JSON:",s)}if(!a)return e.jsx(Ce,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.3},children:e.jsx(p,{children:e.jsxs(b,{direction:"vertical",style:{width:"100%"},children:[e.jsx(Se,{strong:!0,children:"结构性分析："}),e.jsx(M,{children:e.jsx(O,{remarkPlugins:[A],children:t.summary_answer})})]})})});const n=[{key:"core_strengths",label:"核心优势",children:e.jsx(M,{children:e.jsx(O,{remarkPlugins:[A],children:a.core_strengths||"暂无数据"})})},{key:"major_risks",label:"主要风险",children:e.jsx(M,{children:e.jsx(O,{remarkPlugins:[A],children:a.major_risks||"暂无数据"})})},{key:"risk_table",label:"风险表格",children:e.jsx(M,{children:e.jsx(O,{remarkPlugins:[A],children:a.risk_table||"暂无数据"})})},{key:"score_table",label:"评分表格",children:e.jsx(M,{children:e.jsx(O,{remarkPlugins:[A],children:a.score_table||"暂无数据"})})},{key:"conclusion_advice",label:"结论建议",children:e.jsx(M,{children:e.jsx(O,{remarkPlugins:[A],children:a.conclusion_advice||"暂无数据"})})},{key:"account_limit_suggestion",label:"开户额度建议",children:e.jsx(M,{children:e.jsx(O,{remarkPlugins:[A],children:a.account_limit_suggestion||"暂无数据"})})}];return e.jsx(Ce,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.3},children:e.jsx(p,{children:e.jsxs(b,{direction:"vertical",style:{width:"100%"},children:[e.jsx(Se,{strong:!0,children:"结构性分析："}),e.jsx(it,{defaultActiveKey:"core_strengths",items:n,size:"small",tabPosition:"top",style:{marginTop:16}})]})})})},ks=f(p)`
  margin-bottom: 24px;
`,ws=({onStartTask:t})=>{const[a,n]=g.useState(""),[s,i]=g.useState(!1),d=g.useRef(null),o=g.useRef(""),u=async c=>{i(!0);try{console.log("Sending request to:",`/start_task/?company_name=${encodeURIComponent(c)}`);const r=await P.get(`/start_task/?company_name=${encodeURIComponent(c)}`,{baseURL:""});console.log("Success response:",r.data),w.success("任务已开始执行"),t(r.data.batch_no),o.current=c}catch(r){console.error("Task start error:",r),r instanceof Error&&!r.message.includes("401")&&w.error(r.message||"启动任务失败，请重试")}finally{i(!1)}},x=g.useCallback(()=>{const c=a.trim();if(!c){w.warning("请输入企业名称或统一社会信用代码");return}if(s){w.info("正在处理中，请稍等...");return}if(o.current===c){w.warning("该企业的尽调建议已经在处理中或已完成，请避免重复提交");return}d.current&&clearTimeout(d.current),d.current=setTimeout(()=>{u(c)},500),w.info("正在启动任务，请稍等...")},[a,s]);return Ee.useEffect(()=>()=>{d.current&&clearTimeout(d.current)},[]),e.jsx(ks,{children:e.jsxs(b.Compact,{style:{width:"100%"},children:[e.jsx(F,{placeholder:"请输入企业名称或统一社会信用代码",value:a,onChange:c=>n(c.target.value),onPressEnter:x,style:{width:"calc(100% - 120px)"}}),e.jsx(y,{type:"primary",icon:e.jsx(Me,{}),onClick:x,loading:s,style:{width:"120px"},children:"尽调建议"})]})})},{Title:te,Text:Ie}=E,Ts=f.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
`,Ss=f(k)`
  font-size: 14px;
  padding: 4px 8px;
  border-radius: 4px;
  ${({status:t})=>{switch(t){case"pending":return"background-color: #f5f5f5; color: #666;";case"running":return"background-color: #e6f7ff; color: #1890ff;";case"completed":return"background-color: #f6ffed; color: #52c41a;";case"failed":return"background-color: #fff2f0; color: #ff4d4f;";default:return""}}}
`,Cs=()=>{const[t,a]=g.useState(null),{mainTask:n,subTasks:s,summary:i,isLoading:d,error:o}=Ke(t||""),u=x=>{a(x)};return e.jsxs(Ts,{children:[e.jsx(ws,{onStartTask:u}),t&&e.jsx(p,{children:e.jsxs(b,{direction:"vertical",size:"large",style:{width:"100%"},children:[d&&e.jsx("div",{style:{textAlign:"center",padding:"20px"},children:e.jsx(L,{size:"large"})}),o&&e.jsx(R,{message:"加载失败",description:o.message,type:"error",action:e.jsx(y,{size:"small",type:"primary",onClick:()=>window.location.reload(),children:"重试"})}),n&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsx(te,{level:4,children:n.title}),e.jsxs(b,{children:[e.jsxs(Ie,{children:["批次号：",n.batch_no]}),e.jsxs(Ss,{status:n.status,children:[n.status==="running"&&e.jsx(L,{size:"small",style:{marginRight:8}}),n.status]}),e.jsxs(Ie,{children:["创建时间：",H(new Date(n.created_at),"yyyy-MM-dd HH:mm:ss",{locale:Y})]})]})]}),e.jsxs("div",{children:[e.jsx(te,{level:5,children:"子任务列表"}),e.jsx(_e,{children:s==null?void 0:s.filter(x=>x.has_valid_data!==0).map(x=>e.jsx(Be,{task:x},x.id))})]}),n.status==="completed"&&i&&e.jsxs("div",{children:[e.jsx(te,{level:5,children:"汇总结果"}),e.jsx(Qe,{summary:i})]}),n.status==="failed"&&e.jsx(R,{message:"任务执行失败",description:"请检查任务配置或联系管理员",type:"error",showIcon:!0})]})]})})]})},se="auth_token",de=()=>{const[t,a]=g.useState(null),[n,s]=g.useState(null),[i,d]=g.useState(!1);g.useEffect(()=>{const c=sessionStorage.getItem(se);c&&s(c)},[]);const o=g.useCallback(c=>{s(c),sessionStorage.setItem(se,c),window.location.href="/dashboard"},[]),u=g.useCallback(()=>{a(null),s(null),sessionStorage.removeItem(se)},[]),x=g.useCallback(async c=>{d(!0);try{const r=await P.post($.auth.token,null,{headers:{"X-API-Key":c}});if(r.data&&r.data.token)return a(c),o(r.data.token),w.success("登录成功"),!0;throw new Error("Invalid response format")}catch(r){return w.error(r instanceof Error?r.message:"登录失败"),!1}finally{d(!1)}},[o]);return{apiKey:t,authToken:n,isLoading:i,validateApiKey:x,removeApiKey:u}},{Title:Is,Text:Ps}=E,_s=()=>{const[t,a]=g.useState(""),{validateApiKey:n,isLoading:s}=de(),i=async()=>{t.trim()&&await n(t)};return e.jsx("div",{style:{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",background:"#f0f2f5"},children:e.jsx(p,{style:{width:400,boxShadow:"0 4px 12px rgba(0,0,0,0.1)"},children:e.jsxs(b,{direction:"vertical",size:"large",style:{width:"100%"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(Is,{level:2,children:"用户认证"}),e.jsx(Ps,{type:"secondary",children:"请输入您的 API Key，系统将为您生成访问令牌"})]}),e.jsx(F.Password,{placeholder:"请输入 API Key",value:t,onChange:d=>a(d.target.value),onPressEnter:i}),e.jsx(y,{type:"primary",block:!0,onClick:i,loading:s,children:"验证"})]})})})},{Title:ne,Text:Pe}=E,Es=f.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
`,Os=f(p)`
  margin-bottom: 24px;
`,As=f(k)`
  font-size: 14px;
  padding: 4px 8px;
  border-radius: 4px;
  ${({status:t})=>{switch(t){case"pending":return"background-color: #f5f5f5; color: #666;";case"running":return"background-color: #e6f7ff; color: #1890ff;";case"completed":return"background-color: #f6ffed; color: #52c41a;";case"failed":return"background-color: #fff2f0; color: #ff4d4f;";default:return""}}}
`,zs=f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  cursor: pointer;
  padding: 8px 0;
  
  &:hover {
    color: #1890ff;
  }
`,Ms=()=>{const{batchNo:t}=ce(),a=K(),{mainTask:n,subTasks:s,summary:i,isLoading:d,error:o}=Ke(t||""),[u,x]=g.useState(!1);return g.useEffect(()=>{(n||s||i)&&console.log("Data received:",{mainTask:n,subTasks:s,summary:i})},[n,s,i]),e.jsxs(Es,{children:[e.jsx(Os,{children:e.jsxs(b,{direction:"horizontal",size:"middle",children:[e.jsx(y,{icon:e.jsx($e,{}),onClick:()=>a("/task-list"),children:"返回列表"}),e.jsxs(Pe,{strong:!0,children:["批次号：",t]})]})}),e.jsx(p,{children:e.jsxs(b,{direction:"vertical",size:"large",style:{width:"100%"},children:[d&&e.jsx("div",{style:{textAlign:"center",padding:"20px"},children:e.jsx(L,{size:"large"})}),o&&e.jsx(R,{message:"加载失败",description:o.message,type:"error",action:e.jsx(y,{size:"small",type:"primary",onClick:()=>window.location.reload(),children:"重试"})}),n&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsx(ne,{level:4,children:n.title}),e.jsxs(b,{children:[e.jsxs(As,{status:n.status,children:[n.status==="running"&&e.jsx(L,{size:"small",style:{marginRight:8}}),n.status]}),e.jsxs(Pe,{children:["创建时间：",H(new Date(n.created_at),"yyyy-MM-dd HH:mm:ss",{locale:Y})]})]})]}),Array.isArray(s)&&s.filter(c=>c.has_valid_data!==0).length>0?e.jsxs("div",{children:[e.jsxs(zs,{onClick:()=>x(!u),children:[e.jsxs(ne,{level:5,style:{margin:0},children:["子任务列表 (",s.filter(c=>c.has_valid_data!==0).length,")"]}),e.jsx(y,{type:"text",icon:u?e.jsx(ot,{}):e.jsx(ze,{}),size:"small"})]}),u&&e.jsx(_e,{children:s.filter(c=>c.has_valid_data!==0).map(c=>e.jsx(Be,{task:c},c.id))})]}):e.jsx(R,{message:"暂无子任务数据",type:"info",showIcon:!0}),n.status==="completed"&&i&&e.jsxs("div",{children:[e.jsx(ne,{level:5,children:"汇总结果"}),e.jsx(Qe,{summary:i})]}),n.status==="failed"&&e.jsx(R,{message:"任务执行失败",description:"请检查任务配置或联系管理员",type:"error",showIcon:!0})]})]})}),t&&e.jsx(p,{style:{marginTop:"24px",textAlign:"center"},children:e.jsx(y,{type:"primary",size:"large",icon:e.jsx(Fe,{}),onClick:()=>a(`/due-diligence/${t}`),style:{minWidth:"160px"},children:"尽调建议"})})]})},{Title:Ls}=E,Rs=f.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
`,$s=f(p)`
  margin-bottom: 24px;
`,Fs=()=>{const t=K(),[a,n]=g.useState(""),[s,i]=g.useState(1),[d,o]=g.useState(20),{data:u,isLoading:x}=W({queryKey:["taskList",s,d,a],queryFn:async()=>{const l=new URLSearchParams({page:s.toString(),page_size:d.toString()});return a&&l.append("search",a),(await P.get(`${$.task.list}?${l.toString()}`)).data}}),c=[{title:"批次号",dataIndex:"batch_no",key:"batch_no",render:l=>e.jsx(y,{type:"link",onClick:()=>t(`/batch-query/${l}`),children:l})},{title:"任务名称",dataIndex:"title",key:"title"},{title:"状态",dataIndex:"status",key:"status",render:l=>{const m={pending:{color:"default",text:"等待中"},running:{color:"processing",text:"进行中"},completed:{color:"success",text:"已完成"},failed:{color:"error",text:"失败"}},B=m[l]||m.pending;return e.jsx(k,{color:B.color,children:B.text})}},{title:"创建时间",dataIndex:"created_at",key:"created_at",render:l=>H(new Date(l),"yyyy-MM-dd HH:mm:ss",{locale:Y})},{title:"完成时间",dataIndex:"completed_at",key:"completed_at",render:l=>l?H(new Date(l),"yyyy-MM-dd HH:mm:ss",{locale:Y}):"-"}],r=()=>{i(1)};return e.jsxs(Rs,{children:[e.jsx(Ls,{level:4,children:"任务列表"}),e.jsx($s,{children:e.jsxs(b,{direction:"horizontal",size:"middle",children:[e.jsx(F,{placeholder:"搜索批次号或任务名称",value:a,onChange:l=>n(l.target.value),style:{width:300},onPressEnter:r}),e.jsx(y,{type:"primary",icon:e.jsx(Me,{}),onClick:r,children:"搜索"})]})}),e.jsx(p,{children:e.jsx(G,{columns:c,dataSource:u==null?void 0:u.data,rowKey:"id",loading:x,pagination:{current:s,pageSize:d,total:(u==null?void 0:u.total)||0,showSizeChanger:!0,showQuickJumper:!0,showTotal:l=>`共 ${l} 条记录`,onChange:(l,m)=>{i(l),o(m)}}})})]})},{Title:ae,Text:C,Paragraph:qs}=E,Ds=f.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
`,Ws=f(p)`
  margin-bottom: 24px;
`,Ks=f(p)`
  margin-bottom: 16px;
  border-left: 4px solid #1890ff;
`,re=f.div`
  text-align: center;
  padding: 40px 20px;
`,Bs=()=>{const{batchNo:t}=ce(),a=K(),n=Je(),{data:s,isLoading:i,error:d,refetch:o}=W({queryKey:["dueDiligenceQuestions",t],queryFn:async()=>{var l;if(!t)throw new Error("批次号不能为空");try{const m=await P.get($.dueDiligence.getQuestions(t));return!m.data||!m.data.status?{status:"not_found",questions:null}:m.data}catch(m){if(((l=m.response)==null?void 0:l.status)===404)return{status:"not_found",questions:null};throw m}},refetchInterval:l=>{const m=l.state.data;return(m==null?void 0:m.status)==="created"||(m==null?void 0:m.status)==="running"?5e3:!1},enabled:!!t}),u=Ze({mutationFn:async()=>{if(!t)throw new Error("批次号不能为空");return(await P.get($.dueDiligence.generateQuestions(t))).data},onSuccess:()=>{setTimeout(()=>{n.invalidateQueries({queryKey:["dueDiligenceQuestions",t]})},5e3)}});g.useEffect(()=>{(s==null?void 0:s.status)==="created"||(s==null?void 0:s.status)==="running"?console.log("Task is running"):console.log("Task is not running")},[s==null?void 0:s.status]);const x=()=>{u.mutate()},c=l=>e.jsx(V,{dataSource:l,renderItem:(m,B)=>e.jsx(le.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:B*.1},children:e.jsx(Ks,{size:"small",children:e.jsxs(b,{direction:"vertical",style:{width:"100%"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsxs(C,{strong:!0,children:["问题 ",m.seq+1]}),e.jsx(k,{color:"blue",children:m.topic})]}),e.jsx(qs,{style:{margin:0,fontSize:"16px"},children:m.question}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsxs("div",{children:[e.jsx(C,{type:"secondary",children:"询问对象："}),e.jsx(C,{children:m.person})]}),e.jsxs("div",{children:[e.jsx(C,{type:"secondary",children:"核实动作："}),e.jsx(C,{children:m.action})]})]}),m.risk_tag&&m.risk_tag.length>0&&e.jsxs("div",{children:[e.jsx(C,{type:"secondary",style:{marginRight:8},children:"风险标签："}),e.jsx(b,{size:4,wrap:!0,children:m.risk_tag.map((Ve,Ue)=>e.jsx(k,{color:"red",children:Ve},Ue))})]})]})})},m.seq)}),r=()=>i?e.jsxs(re,{children:[e.jsx(L,{size:"large"}),e.jsx("div",{style:{marginTop:16},children:e.jsx(C,{children:"正在获取问题数据..."})})]}):d?e.jsx(R,{message:"获取问题失败",description:d.message,type:"error",action:e.jsx(y,{size:"small",type:"primary",onClick:()=>o(),children:"重试"})}):!s||s.status==="not_found"?e.jsx(p,{children:e.jsx(he,{image:he.PRESENTED_IMAGE_SIMPLE,description:"暂无尽调问题",children:e.jsx(y,{type:"primary",size:"large",icon:e.jsx(Fe,{}),onClick:x,loading:u.isPending,children:"生成建议"})})}):s.status==="running"?e.jsx(p,{children:e.jsxs(re,{children:[e.jsx(L,{size:"large"}),e.jsxs("div",{style:{marginTop:16},children:[e.jsx(ae,{level:4,children:"正在生成尽调问题..."}),e.jsx(N,{percent:void 0,status:"active"}),e.jsx(C,{type:"secondary",children:"任务执行中，系统正在自动生成问题，请耐心等待"})]})]})}):s.status==="created"?e.jsx(p,{children:e.jsxs(re,{children:[e.jsx(L,{size:"large"}),e.jsxs("div",{style:{marginTop:16},children:[e.jsx(ae,{level:4,children:"任务已创建..."}),e.jsx(N,{percent:void 0,status:"active"}),e.jsx(C,{type:"secondary",children:"任务已触发，等待系统准备数据后开始生成"})]})]})}):s.status==="completed"&&s.questions?e.jsxs(p,{children:[e.jsxs("div",{style:{marginBottom:24,textAlign:"center"},children:[e.jsx(ae,{level:4,children:"尽调建议问题清单"}),e.jsxs(C,{type:"secondary",children:["共 ",s.questions.length," 个问题"]}),e.jsx("div",{style:{marginTop:16},children:e.jsx(y,{icon:e.jsx(mt,{}),onClick:x,loading:u.isPending,children:"重新生成"})})]}),c(s.questions)]}):s.status==="failed"?e.jsx(R,{message:"问题生成失败",description:"请重试或联系管理员",type:"error",action:e.jsx(y,{type:"primary",onClick:x,children:"重新生成"})}):null;return e.jsxs(Ds,{children:[e.jsx(Ws,{children:e.jsxs(b,{direction:"horizontal",size:"middle",children:[e.jsx(y,{icon:e.jsx($e,{}),onClick:()=>a(`/batch-query/${t}`),children:"返回详情"}),e.jsxs(C,{strong:!0,children:["尽调建议 - 批次号：",t]})]})}),r()]})},{Header:Qs,Content:Vs,Sider:Us}=ie,Hs=[{key:"/dashboard",icon:e.jsx(yt,{}),label:e.jsx(z,{to:"/dashboard",children:"首页"})},{key:"/trend",icon:e.jsx(ft,{}),label:e.jsx(z,{to:"/trend",children:"趋势分析"})},{key:"/case",icon:e.jsx(jt,{}),label:e.jsx(z,{to:"/case",children:"案例管理"})},{key:"/ai",icon:e.jsx(bt,{}),label:e.jsx(z,{to:"/ai",children:"AI推荐"})},{key:"/efficiency",icon:e.jsx(vt,{}),label:e.jsx(z,{to:"/efficiency",children:"效率评分"})},{key:"/task",icon:e.jsx(kt,{}),label:e.jsx(z,{to:"/task",children:"任务监控"})},{key:"/task-list",icon:e.jsx(wt,{}),label:e.jsx(z,{to:"/task-list",children:"任务列表"})}],Ns=({children:t})=>{const{authToken:a}=de(),n=Ae();return!a&&n.pathname!=="/auth"?e.jsx(U,{to:"/auth",replace:!0}):a&&n.pathname==="/auth"?e.jsx(U,{to:"/dashboard",replace:!0}):e.jsx(e.Fragment,{children:t})};function Xs(){const t=Ae(),a=t.pathname.split("/")[1]||"dashboard",n=t.pathname.startsWith("/efficiency-score/"),s=t.pathname.startsWith("/task/"),i=t.pathname.startsWith("/batch-query/"),d=t.pathname.startsWith("/task-list"),{removeApiKey:o}=de(),u=()=>{o(),window.location.href="/auth"};return e.jsxs(ie,{style:{minHeight:"100vh"},children:[e.jsxs(Us,{children:[e.jsx("div",{style:{height:32,margin:16,color:"#fff",fontWeight:"bold",fontSize:18},children:"开户问题归因系统"}),e.jsx(lt,{theme:"dark",mode:"inline",selectedKeys:[n?"/efficiency":s?"/task":i||d?"/task-list":`/${a}`],items:Hs})]}),e.jsxs(ie,{children:[e.jsx(Qs,{style:{background:"#fff",padding:"0 16px",display:"flex",justifyContent:"flex-end",alignItems:"center"},children:e.jsx(gt,{onClick:u,style:{fontSize:"18px",cursor:"pointer"}})}),e.jsx(Vs,{style:{margin:"16px"},children:e.jsxs(Oe,{children:[e.jsx(v,{path:"/",element:e.jsx(U,{to:"/dashboard"})}),e.jsx(v,{path:"/dashboard",element:e.jsx(Ct,{})}),e.jsx(v,{path:"/trend",element:e.jsx(At,{})}),e.jsx(v,{path:"/case",element:e.jsx(zt,{})}),e.jsx(v,{path:"/ai",element:e.jsx(Lt,{})}),e.jsx(v,{path:"/efficiency",element:e.jsx(ke,{})}),e.jsx(v,{path:"/efficiency-score/:id",element:e.jsx(ke,{})}),e.jsx(v,{path:"/task",element:e.jsx(Cs,{})}),e.jsx(v,{path:"/task-list",element:e.jsx(Fs,{})}),e.jsx(v,{path:"/batch-query/:batchNo",element:e.jsx(Ms,{})}),e.jsx(v,{path:"/due-diligence/:batchNo",element:e.jsx(Bs,{})}),e.jsx(v,{path:"*",element:e.jsx(U,{to:"/dashboard",replace:!0})})]})})]})]})}const Ys=()=>e.jsx(Ne,{children:e.jsx(Ns,{children:e.jsxs(Oe,{children:[e.jsx(v,{path:"/auth",element:e.jsx(_s,{})}),e.jsx(v,{path:"/*",element:e.jsx(Xs,{})})]})})});const Gs=new et({defaultOptions:{queries:{refetchOnWindowFocus:!1,retry:1}}});oe.createRoot(document.getElementById("root")).render(e.jsx(Ee.StrictMode,{children:e.jsx(tt,{client:Gs,children:e.jsx(Ys,{})})}));
