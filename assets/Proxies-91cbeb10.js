import{r as g,R as W,k as O,c as w,T as xe,j as o,b as i,B as b,i as f,U as ge,V as be,W as ne,X as re,e as C,Y as we,F as T,Z as Ce,$ as oe,a0 as H,y as D,a1 as ke,a2 as se,a3 as L,a4 as ae,a5 as U,a6 as q,a7 as Pe,a8 as Se,u as z,a9 as Ne,aa as Oe,ab as $e,h as le,C as ce,z as Z,ac as Ae,m as G,d as Le,ad as Te,ae as De,af as je,ag as Be}from"./index-e0b935df.js";import{C as Ie}from"./chevron-down-52299c94.js";import{F as Fe,p as Re,A as Ee,I as Me}from"./Fab-6ee68816.js";import{R as He,a as Ue,T as qe}from"./TextFitler-940f9b39.js";import{f as ze}from"./index-2a3ca6b4.js";import{S as Ke}from"./Select-1e19a714.js";import"./debounce-c1ba2006.js";function M(){return M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},M.apply(this,arguments)}function Ve(e,t){if(e==null)return{};var n=We(e,t),r,s;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)r=a[s],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function We(e,t){if(e==null)return{};var n={},r=Object.keys(e),s,a;for(a=0;a<r.length;a++)s=r[a],!(t.indexOf(s)>=0)&&(n[s]=e[s]);return n}var K=g.forwardRef(function(e,t){var n=e.color,r=n===void 0?"currentColor":n,s=e.size,a=s===void 0?24:s,l=Ve(e,["color","size"]);return W.createElement("svg",M({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),W.createElement("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"}))});K.propTypes={color:O.string,size:O.oneOfType([O.string,O.number])};K.displayName="Zap";const Y=K;function ie(e){const t=e.size||24,n=w({[xe.animate]:e.animate});return o("svg",{className:n,xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:o("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})})}const Ze="_FlexCenter_1380a_1",Ge={FlexCenter:Ze};function Ye({children:e}){return o("div",{className:Ge.FlexCenter,children:e})}const{useRef:X,useEffect:Xe}=f;function Je({onClickPrimaryButton:e,onClickSecondaryButton:t}){const n=X(null),r=X(null);return Xe(()=>{n.current.focus()},[]),i("div",{onKeyDown:a=>{a.keyCode===39?r.current.focus():a.keyCode===37&&n.current.focus()},children:[o("h2",{children:"Close Connections?"}),o("p",{children:'Click "Yes" to close those connections that are still using the old selected proxy in this group'}),o("div",{style:{height:30}}),i(Ye,{children:[o(b,{onClick:e,ref:n,children:"Yes"}),o("div",{style:{width:20}}),o(b,{onClick:t,ref:r,children:"No"})]})]})}const Qe="_header_1y9js_1",et="_arrow_1y9js_8",tt="_isOpen_1y9js_13",nt="_btn_1y9js_20",rt="_qty_1y9js_25",k={header:Qe,arrow:et,isOpen:tt,btn:nt,qty:rt};function ue({name:e,type:t,toggle:n,isOpen:r,qty:s}){const a=g.useCallback(l=>{l.preventDefault(),(l.key==="Enter"||l.key===" ")&&n()},[n]);return i("div",{className:k.header,onClick:n,style:{cursor:"pointer"},tabIndex:0,onKeyDown:a,role:"button",children:[o("div",{children:o(ge,{name:e,type:t})}),typeof s=="number"?o("span",{className:k.qty,children:s}):null,o(b,{kind:"minimal",onClick:n,className:k.btn,title:"Toggle collapsible section",children:o("span",{className:w(k.arrow,{[k.isOpen]:r}),children:o(Ie,{size:20})})})]})}const{useMemo:ot}=f;function st(e,t){return e.filter(n=>{const r=t[n];return r===void 0?!0:r.number!==0})}const $=(e,t)=>{if(e&&typeof e.number=="number"&&e.number>0)return e.number;const n=t&&t.type;return n&&re.indexOf(n)>-1?-1:999999},at={Natural:e=>e,LatencyAsc:(e,t,n)=>e.sort((r,s)=>{const a=$(t[r],n&&n[r]),l=$(t[s],n&&n[s]);return a-l}),LatencyDesc:(e,t,n)=>e.sort((r,s)=>{const a=$(t[r],n&&n[r]);return $(t[s],n&&n[s])-a}),NameAsc:e=>e.sort(),NameDesc:e=>e.sort((t,n)=>t>n?-1:t<n?1:0)};function lt(e,t){const n=t.toLowerCase().split(" ").map(r=>r.trim()).filter(r=>!!r);return n.length===0?e:e.filter(r=>{let s=0;for(;s<n.length;s++){const a=n[s];if(r.toLowerCase().indexOf(a)>-1)return!0}return!1})}function ct(e,t,n,r,s,a){let l=[...e];return n&&(l=st(e,t)),typeof r=="string"&&r!==""&&(l=lt(l,r)),at[s](l,t,a)}function de(e,t,n,r,s){const[a]=be(ne);return ot(()=>ct(e,t,n,a,r,s),[e,t,n,a,r,s])}const it="_header_5pmv2_1",ut="_groupHead_5pmv2_5",dt="_action_5pmv2_11",I={header:it,groupHead:ut,action:dt},pt="_proxy_ryc3j_1",ht="_now_ryc3j_25",yt="_error_ryc3j_29",ft="_selectable_ryc3j_32",mt="_proxyType_ryc3j_40",_t="_row_ryc3j_51",vt="_proxyName_ryc3j_57",xt="_proxySmall_ryc3j_66",m={proxy:pt,now:ht,error:yt,selectable:ft,proxyType:mt,row:_t,proxyName:vt,proxySmall:xt},gt="_proxyLatency_pw0sa_1",bt={proxyLatency:gt};function wt({number:e,color:t}){return o("span",{className:bt.proxyLatency,style:{color:t},children:typeof e=="number"&&e!==0?e+" ms":" "})}const{useMemo:N}=f,P={good:"#67c23a",normal:"#d4b75c",bad:"#e67f3c",na:"#909399"};function pe({number:e}={}){return e===0?P.na:e<200?P.good:e<400?P.normal:typeof e=="number"?P.bad:P.na}function Ct(e,t){return re.indexOf(t)>-1?{border:"1px dotted #777"}:{background:pe(e)}}function kt({now:e,name:t,proxy:n,latency:r,isSelectable:s,onClick:a}){const l=N(()=>Ct(r,n.type),[r,n]),c=N(()=>{let d=t;return r&&typeof r.number=="number"&&(d+=" "+r.number+" ms"),d},[t,r]),u=g.useCallback(()=>{s&&a&&a(t)},[t,a,s]),p=N(()=>w(m.proxySmall,{[m.now]:e,[m.selectable]:s}),[s,e]),h=g.useCallback(d=>{d.key==="Enter"&&u()},[u]);return o("div",{title:c,className:p,style:l,onClick:u,onKeyDown:h,role:s?"menuitem":""})}function Pt(e){return e==="Shadowsocks"?"SS":e}const St=e=>({left:e.left+window.scrollX-5,top:e.top+window.scrollY-38});function Nt({children:e,label:t,"aria-label":n}){const[r,s]=we();return i(T,{children:[g.cloneElement(e,r),o(Ce,{...s,label:t,"aria-label":n,position:St})]})}function Ot({now:e,name:t,proxy:n,latency:r,isSelectable:s,onClick:a}){const l=N(()=>pe(r),[r]),c=g.useCallback(()=>{s&&a&&a(t)},[t,a,s]),u=g.useCallback(h=>{h.key==="Enter"&&c()},[c]),p=N(()=>w(m.proxy,{[m.now]:e,[m.selectable]:s}),[s,e]);return i("div",{tabIndex:0,className:p,onClick:c,onKeyDown:u,role:s?"menuitem":"",children:[o("div",{className:m.proxyName,children:o(Nt,{label:t,"aria-label":"proxy name: "+t,children:o("span",{children:t})})}),i("div",{className:m.row,children:[o("span",{className:m.proxyType,style:{opacity:e?.6:.2},children:Pt(n.type)}),o(wt,{number:r==null?void 0:r.number,color:l})]})]})}const he=(e,{name:t})=>{const n=oe(e),r=H(e);return{proxy:n[t]||{name:t,type:"Unknown",history:[]},latency:r[t]}},$t=C(he)(Ot),At=C(he)(kt),Lt="_list_1oy7w_1",Tt="_listSummaryView_1oy7w_8",ye={list:Lt,listSummaryView:Tt};function fe({all:e,now:t,isSelectable:n,itemOnTapCallback:r}){const s=e;return o("div",{className:ye.list,children:s.map(a=>o($t,{onClick:r,isSelectable:n,name:a,now:a===t},a))})}function me({all:e,now:t,isSelectable:n,itemOnTapCallback:r}){return o("div",{className:ye.listSummaryView,children:e.map(s=>o(At,{onClick:r,isSelectable:n,name:s,now:s===t},s))})}const{createElement:Dt,useCallback:F,useMemo:jt}=f;function Bt({name:e,all:t,delay:n,hideUnavailableProxies:r,proxySortBy:s,proxies:a,type:l,now:c,isOpen:u,apiConfig:p,dispatch:h}){const d=de(t,n,r,s,a),v=jt(()=>l==="Selector",[l]),{app:{updateCollapsibleIsOpen:x},proxies:{requestDelayForProxies:y}}=D(),j=F(()=>{x("proxyGroup",e,!u)},[u,x,e]),B=F(V=>{v&&h(ke(p,e,V))},[p,h,e,v]),_=se(!1),ve=F(async()=>{if(!_.value){_.set(!0);try{await y(p,d)}catch{}_.set(!1)}},[d,p,y,_]);return i("div",{className:I.group,children:[i("div",{className:I.groupHead,children:[o(ue,{name:e,type:l,toggle:j,qty:d.length,isOpen:u}),o("div",{className:I.action,children:o(L,{label:"Test latency",children:o(b,{kind:"circular",onClick:ve,children:o(ie,{animate:_.value,size:16})})})})]}),Dt(u?fe:me,{all:d,now:c,isSelectable:v,itemOnTapCallback:B})]})}const It=C((e,{name:t,delay:n})=>{const r=oe(e),s=ae(e),a=U(e),l=q(e),c=r[t],{all:u,type:p,now:h}=c;return{all:u,delay:n,hideUnavailableProxies:l,proxySortBy:a,proxies:r,type:p,now:h,isOpen:s[`proxyGroup:${t}`]}})(Bt),{useCallback:_e,useState:Ft}=f;function Rt({dispatch:e,apiConfig:t,name:n}){return _e(()=>e(Pe(t,n)),[t,e,n])}function Et({dispatch:e,apiConfig:t,names:n}){const[r,s]=Ft(!1);return[_e(async()=>{if(!r){s(!0);try{await e(Se(t,n))}catch{}s(!1)}},[t,e,n,r]),r]}const{useState:Mt,useCallback:Ht}=f;function Ut({isLoading:e}){return e?o(Me,{children:o(Y,{width:16,height:16})}):o(Y,{width:16,height:16})}function qt({dispatch:e,apiConfig:t}){const[n,r]=Mt(!1);return[Ht(()=>{n||(r(!0),e(Ne(t)).then(()=>r(!1),()=>r(!1)))},[t,e,n]),n]}function zt({dispatch:e,apiConfig:t,proxyProviders:n}){const{t:r}=z(),[s,a]=qt({dispatch:e,apiConfig:t}),[l,c]=Et({apiConfig:t,dispatch:e,names:n.map(u=>u.name)});return o(Fe,{icon:o(Ut,{isLoading:a}),onClick:s,text:r("Test Latency"),style:Re,children:n.length>0?o(Ee,{text:r("update_all_proxy_provider"),onClick:l,children:o(He,{isRotating:c})}):null})}const Kt="_updatedAt_919yi_1",Vt="_main_919yi_8",Wt="_head_919yi_17",Zt="_action_919yi_23",Gt="_refresh_919yi_31",S={updatedAt:Kt,main:Vt,head:Wt,action:Zt,refresh:Gt},{useCallback:J}=f;function Yt({name:e,proxies:t,delay:n,hideUnavailableProxies:r,proxySortBy:s,vehicleType:a,updatedAt:l,isOpen:c,dispatch:u,apiConfig:p}){const h=de(t,n,r,s),d=se(!1),v=Rt({dispatch:u,apiConfig:p,name:e}),x=J(()=>{if(d.value)return;d.set(!0);const _=()=>d.set(!1);u(Oe(p,e)).then(_,_)},[p,u,e,d]),{app:{updateCollapsibleIsOpen:y}}=D(),j=J(()=>{y("proxyProvider",e,!c)},[c,y,e]),B=ze(new Date(l),new Date);return i("div",{className:S.main,children:[i("div",{className:S.head,children:[o(ue,{name:e,toggle:j,type:a,isOpen:c,qty:h.length}),i("div",{className:S.action,children:[o(L,{label:"Update",children:o(b,{kind:"circular",onClick:v,children:o(Qt,{})})}),o(L,{label:"Health Check",children:o(b,{kind:"circular",onClick:x,children:o(ie,{animate:d.value,size:16})})})]})]}),o("div",{className:S.updatedAt,children:i("small",{children:["Updated ",B," ago"]})}),c?o(fe,{all:h}):o(me,{all:h})]})}const Xt={rest:{scale:1},pressed:{scale:.95}},Jt={rest:{rotate:0},hover:{rotate:360,transition:{duration:.3}}};function Qt(){const t=$e.read().motion;return o(t.div,{className:S.refresh,variants:Xt,initial:"rest",whileHover:"hover",whileTap:"pressed",children:o(t.div,{className:"flexCenter",variants:Jt,children:o(Ue,{size:16})})})}const en=(e,{proxies:t,name:n})=>{const r=q(e),s=H(e),a=ae(e),l=le(e),c=U(e);return{apiConfig:l,proxies:t,delay:s,hideUnavailableProxies:r,proxySortBy:c,isOpen:a[`proxyProvider:${n}`]}},tn=C(en)(Yt);function nn({items:e}){return e.length===0?null:i(T,{children:[o(ce,{title:"Proxy Provider"}),o("div",{children:e.map(t=>o(tn,{name:t.name,proxies:t.proxies,type:t.type,vehicleType:t.vehicleType,updatedAt:t.updatedAt},t.name))})]})}const rn="_labeledInput_cmki0_1",R={labeledInput:rn},on=[["Natural","order_natural"],["LatencyAsc","order_latency_asc"],["LatencyDesc","order_latency_desc"],["NameAsc","order_name_asc"],["NameDesc","order_name_desc"]],{useCallback:Q}=f;function sn({appConfig:e}){const{app:{updateAppConfig:t}}=D(),n=Q(a=>{t("proxySortBy",a.target.value)},[t]),r=Q(a=>{t("hideUnavailableProxies",a)},[t]),{t:s}=z();return i(T,{children:[i("div",{className:R.labeledInput,children:[o("span",{children:s("sort_in_grp")}),o("div",{children:o(Ke,{options:on.map(a=>[a[0],s(a[1])]),selected:e.proxySortBy,onChange:n})})]}),o("hr",{}),i("div",{className:R.labeledInput,children:[o("span",{children:s("hide_unavail_proxies")}),o("div",{children:o(Z,{name:"hideUnavailableProxies",checked:e.hideUnavailableProxies,onChange:r})})]}),i("div",{className:R.labeledInput,children:[o("span",{children:s("auto_close_conns")}),o("div",{children:o(Z,{name:"autoCloseOldConns",checked:e.autoCloseOldConns,onChange:a=>t("autoCloseOldConns",a)})})]})]})}const an=e=>{const t=U(e),n=q(e),r=Ae(e);return{appConfig:{proxySortBy:t,hideUnavailableProxies:n,autoCloseOldConns:r}}},ln=C(an)(sn),cn="_overlay_uuk3b_1",un="_cnt_uuk3b_5",dn="_afterOpen_uuk3b_16",E={overlay:cn,cnt:un,afterOpen:dn},{useMemo:pn}=f;function ee({isOpen:e,onRequestClose:t,children:n}){const r=pn(()=>({base:w(G.content,E.cnt),afterOpen:E.afterOpen,beforeClose:""}),[]);return o(Le,{isOpen:e,onRequestClose:t,className:r,overlayClassName:w(G.overlay,E.overlay),children:n})}function hn({color:e="currentColor",size:t=24}){return i("svg",{fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:t,height:t,stroke:e,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o("path",{d:"M2 6h9M18.5 6H22"}),o("circle",{cx:"16",cy:"6",r:"2"}),o("path",{d:"M22 18h-9M6 18H2"}),o("circle",{r:"2",transform:"matrix(-1 0 0 1 8 18)"})]})}const yn="_topBar_16fpp_1",fn="_topBarRight_16fpp_13",mn="_textFilterContainer_16fpp_22",_n="_group_16fpp_29",A={topBar:yn,topBarRight:fn,textFilterContainer:mn,group:_n},{useState:vn,useEffect:xn,useCallback:te,useRef:gn}=f;function bn({dispatch:e,groupNames:t,delay:n,proxyProviders:r,apiConfig:s,showModalClosePrevConns:a}){const l=gn({}),c=te(()=>{l.current.startAt=Date.now(),e(Te(s)).then(()=>{l.current.completeAt=Date.now()})},[s,e]);xn(()=>{c();const y=()=>{l.current.startAt&&Date.now()-l.current.startAt>3e4&&c()};return window.addEventListener("focus",y,!1),()=>window.removeEventListener("focus",y,!1)},[c]);const[u,p]=vn(!1),h=te(()=>{p(!1)},[]),{proxies:{closeModalClosePrevConns:d,closePrevConnsAndTheModal:v}}=D(),{t:x}=z();return i(T,{children:[o(ee,{isOpen:u,onRequestClose:h,children:o(ln,{})}),i("div",{className:A.topBar,children:[o(ce,{title:x("Proxies")}),i("div",{className:A.topBarRight,children:[o("div",{className:A.textFilterContainer,children:o(qe,{textAtom:ne})}),o(L,{label:x("settings"),children:o(b,{kind:"minimal",onClick:()=>p(!0),children:o(hn,{size:16})})})]})]}),o("div",{children:t.map(y=>o("div",{className:A.group,children:o(It,{name:y,delay:n,apiConfig:s,dispatch:e})},y))}),o(nn,{items:r}),o("div",{style:{height:60}}),o(zt,{dispatch:e,apiConfig:s,proxyProviders:r}),o(ee,{isOpen:a,onRequestClose:d,children:o(Je,{onClickPrimaryButton:()=>v(s),onClickSecondaryButton:d})})]})}const wn=e=>({apiConfig:le(e),groupNames:De(e),proxyProviders:je(e),delay:H(e),showModalClosePrevConns:Be(e)}),An=C(wn)(bn);export{An as default};
