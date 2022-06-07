var ae=Object.defineProperty,le=Object.defineProperties;var ue=Object.getOwnPropertyDescriptors;var $=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var W=(t,r,n)=>r in t?ae(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n,m=(t,r)=>{for(var n in r||(r={}))K.call(r,n)&&W(t,n,r[n]);if($)for(var n of $(r))Y.call(r,n)&&W(t,n,r[n]);return t},y=(t,r)=>le(t,ue(r));var L=(t,r)=>{var n={};for(var o in t)K.call(t,o)&&r.indexOf(o)<0&&(n[o]=t[o]);if(t!=null&&$)for(var o of $(t))r.indexOf(o)<0&&Y.call(t,o)&&(n[o]=t[o]);return n};import{R as F,r as a,j as e,c as Z,M as ce,a as D,B as de,b as M,d as pe,A as he,s as g,L as ee,N as q,e as te,f as re,g as me,h as De,i as _,I as fe,k as ge,l as xe,C as Ee,T as ye,m as k,n as Ce,o as G,p as ne,G as P,q as Se,t as be,u as ve,D as we,v as Le,w as ke,x as Ne,y as Te,z as Ae,E as ze,F as Be,H as R,J as oe,K as Fe,O as Ie,P as Me,Q as Pe,S as Q,U as Re,V as Oe,W as $e,X as _e,Y as je,Z as He}from"./vendor.47ea073b.js";const Ge=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const p of l.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&o(p)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerpolicy&&(l.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?l.credentials="include":s.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}};Ge();const j=F.createContext(void 0);function qe(t){const[r,n]=a.exports.useState({}),l={openDrawer:(p,i,c="temporary",u)=>{n({open:p,anchor:i,permanent:c,child:u})},closeDrawer:(p,i,c="temporary",u)=>{n({open:p,anchor:i,permanent:c,child:u})}};return e(j.Provider,{value:m(m({},r),l),children:t.children})}const H=F.createContext(void 0);function Je(t){const[r,n]=a.exports.useState({main:{open:!1,color:"primary"},circular:{open:!1,color:"primary"}}),p={createLoader:(i,c)=>{r[i]&&n(y(m({},r),{[i]:void 0})),n(y(m({},r),{[i]:{open:!1,color:c||"primary"}}))},openLoader:i=>{r[i]?n(y(m({},r),{[i]:y(m({},r[i]),{open:!0})})):console.error("Loader does'nt exist. Name: "+i)},closeLoader:i=>{r[i]?n(y(m({},r),{[i]:y(m({},r[i]),{open:!1})})):console.error("Loader does'nt exist. Name: "+i)}};return e(H.Provider,{value:m(m({},r),p),children:t.children})}const I=F.createContext(void 0);function Ue(t){const[r,n]=a.exports.useState({main:{open:!0,severity:"warning",title:"\u05D4\u05D0\u05EA\u05E8 \u05D1\u05D1\u05E0\u05D9\u05D4",message:""},snackbar:{open:!1,severity:"success",title:"",message:"This is a Snackbar!"}}),p={createBanner:(i,c,u,d)=>{r[i]&&n(y(m({},r),{[i]:void 0})),n(y(m({},r),{[i]:{open:!0,severity:c||"success",title:u||"",message:d||""}}))},openBanner:i=>{r[i]?n(y(m({},r),{[i]:y(m({},r[i]),{open:!0})})):console.error("Banner does'nt exist. Name: "+i)},closeBanner:i=>{n({main:{open:!0,severity:"warning",title:"\u05D4\u05D0\u05EA\u05E8 \u05D1\u05D1\u05E0\u05D9\u05D4",message:""},snackbar:{open:!1,severity:"success",title:"",message:"This is a Snackbar!"}}),r[i]?n(y(m({},r),{[i]:y(m({},r[i]),{open:!1})})):console.error("Banner does'nt exist. Name: "+i)}};return e(I.Provider,{value:m(m({},r),p),children:t.children})}const se=Z({direction:"rtl",typography:{fontFamily:["Assistant","Roboto","sans-serif"].join(",")},palette:{primary:{main:"#CD5A91",light:"#CD5A91",dark:"#AC4C7A"},secondary:{main:"#edf2ff",dark:"#737373",light:"#EBECF0"}}});function Ve(){const[t,r]=a.exports.useState(se.palette.primary.light);return e("div",{className:"wrapper",children:e(ce,{children:e("meta",{name:"theme-color",content:t})})})}const J=F.createContext(void 0);function We(t){const[r,n]=a.exports.useState({fontSize:{sm:Number(localStorage.getItem("font_sm"))||15,md:Number(localStorage.getItem("font_md"))||25},colors:"pink"}),o=()=>{r.fontSize.md<60&&(n(y(m({},r),{fontSize:{sm:r.fontSize.sm+1,md:r.fontSize.md+1}})),l())},s=()=>{r.fontSize.sm>2&&(n(y(m({},r),{fontSize:{sm:r.fontSize.sm-1,md:r.fontSize.md-1}})),l())};function l(){localStorage.setItem("font_md",r.fontSize.md),localStorage.setItem("font_sm",r.fontSize.sm)}function p(){localStorage.setItem("colors_mode",r.colors)}function i(u){n(y(m({},r),{colors:u})),p()}const c={reduceFontSize:s,increaseFontSize:o,setColors:i};return e(J.Provider,{value:m(m({},r),c),children:t.children})}function Ke({className:t}){const r=a.exports.useContext(J);return e("div",{id:"",className:t,children:D(de,{className:"button-group",children:[e(M,{"aria-label":"reduce",onClick:()=>{r.reduceFontSize()},children:e(pe,{fontSize:"small"})}),e(M,{className:"font-size-disabled",disabled:!0,children:"\u05D2\u05D5\u05D3\u05DC \u05D4\u05D8\u05E7\u05E1\u05D8"}),e(M,{"aria-label":"increase",onClick:()=>{r.increaseFontSize()},children:e(he,{fontSize:"small"})})]})})}const Ye=g(Ke)`
  text-align: end;
  margin-inline-end: 25px;
  height: 30px;
  flex-grow: 2;

  .MuiButtonGroup-root{
    height: 30px;
  }

  button{
    background-color: #eeeded94;
    color: #5b91ff;
    padding: unset;
  }

  .font-size-disabled{
    color: white !important;
    font-size: 12px;
    padding: 0 10px;
    background: #ffffff47;
  }

`,Qe=[];function Xe(){return e(ee,{children:Qe.map((t,r)=>e(q,{to:t.url,children:D(te,{button:!0,children:[e(re,{primary:t.name}),e(me,{children:e(De,{})})]},t.name)},r))})}g(Xe)`
  
`;const N=F.createContext(void 0);function Ze(t){const r=a.exports.useContext(H),n=a.exports.useContext(I),[o,s]=a.exports.useState(sessionStorage.getItem("currLines")&&sessionStorage.getItem("cuurSongTitle")||""),[l,p]=a.exports.useState(sessionStorage.getItem("currLines")||!1),[i,c]=a.exports.useState([]),[u,d]=a.exports.useState(JSON.parse(sessionStorage.getItem("currLines"))||[]),[S,C]=a.exports.useState(0),[v,T]=a.exports.useState(!1),O="https://musicline-backend-basssites.vercel.app",A=(b,x)=>{T(!0),r.openLoader("main"),fetch(`${O}/lyrics`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({currSong:b})}).then(h=>h.json()).then(h=>{if(r.closeLoader("main"),sessionStorage.removeItem("currLines"),h==null?void 0:h.lyrics){s(x);let E=h.lyrics,z=[];E.split(/(?:\r\n|\r|\n)/g).map(B=>{B.length>=2&&z.push({src:B,trans:""})}),d(z),p(E),c(E.split(" "));let w=document.querySelector(".gsst_a");w&&w.dispatchEvent(new Event("click")),T(!0)}else n.createBanner("error","error","\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0, \u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1 \u05D0\u05D5 \u05D7\u05E4\u05E9 \u05E9\u05D9\u05E8 \u05D0\u05D7\u05E8","")}).catch(h=>{console.log(h),r.closeLoader("main"),n.createBanner("error","error","\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0, \u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1 \u05D0\u05D5 \u05D7\u05E4\u05E9 \u05E9\u05D9\u05E8 \u05D0\u05D7\u05E8",""),T(!0)})},f=()=>{let b=!1;for(let x=0;x<u.length;x++){let h=u[x];if(b===!0)break;if(h.trans.length<=1||h.trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."){b=!0,U(h.src,x);break}else continue}},U=(b,x)=>{fetch(`${O}/line-trans`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({lines:u})}).then(h=>h.json()).then(h=>{var z,w;let E=u;(h==null?void 0:h.trans.length)?(h.trans.map((B,V)=>{E[V]={src:E[V].src,trans:B}}),d(E),sessionStorage.setItem("currLines",JSON.stringify(u)),sessionStorage.setItem("cuurSongTitle",o),C(S+1)):(h==null?void 0:h.trans)?(E[x]={src:b,trans:h==null?void 0:h.trans},d(E),((z=u[u.length-1])==null?void 0:z.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(u)),sessionStorage.setItem("cuurSongTitle",o)),C(S+1)):(u[x].trans===void 0&&(E[x]={src:b,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),u[x].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(E[x]={src:b,trans:"[missing]"}),d(E),((w=u[u.length-1])==null?void 0:w.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(u)),sessionStorage.setItem("cuurSongTitle",o)),C(S+1))}).catch(h=>{var w;let E=u;u[x].trans===""&&(E[x]={src:b,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),u[x].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(E[x]={src:b,trans:"[missing]"}),d(E),((w=u[u.length-1])==null?void 0:w.trans).length>=1&&sessionStorage.setItem("currLines",JSON.stringify(u)),C(S+1),console.log(h)})},ie={getLines:A,getLinesTrans:U,checkNextTrans:f};return e(N.Provider,{value:m({title:o,proccess:v,currLyrics:l,singles:i,lines:u,cou:S},ie),children:t.children})}function et({className:t}){return a.exports.useContext(N),e(_,{className:t,sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:[].map(n=>e(q,{to:n.url,children:e(M,{sx:{my:2},children:n.name})},n.name))})}g(et)`
  
`;function tt({className:t}){return e("div",{id:"",className:t,children:e(fe,{children:e(ge,{className:"mui-rounded-icon"})})})}g(tt)`
  .mui-rounded-icon{
    background-color: white;
    color: ${t=>"#595959"};
    border-radius: 12px;
  }
`;const rt=n=>{var o=n,{className:t}=o,r=L(o,["className"]);var u,d,S,C;a.exports.useContext(j);const s=a.exports.useContext(N),l=a.exports.useContext(I),[p,i]=a.exports.useState(!1),c=function(){sessionStorage.removeItem("currLines")};return a.exports.useEffect(()=>{var v;i(((v=l.error)==null?void 0:v.open)&&!0)},[(u=l.error)==null?void 0:u.open]),D(xe,{position:"sticky",className:t,children:[e(Ee,{maxWidth:"xl",children:D(ye,{disableGutters:!0,children:[e(q,{to:"/",onClick:()=>{c()},children:e(k,{variant:"h6",noWrap:!0,component:"h1",sx:{mr:2,display:"flex"},children:"\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 \u05DC\u05D9\u05D9\u05DF"})}),s.lines[0]&&e(Ye,{})]})}),e(Ce,{in:(d=l.error)==null?void 0:d.open,children:D(G,{severity:"error",className:"error-alert",onClose:()=>{l.closeBanner("error")},children:[e(ne,{children:(S=l.error)==null?void 0:S.title}),(C=l.error)==null?void 0:C.message]})})]})},nt=g(rt)`
  background-color: ${t=>t.theme.palette.primary.dark};
  color: ${t=>t.theme.palette.secondary.main};

  button{
    color: ${t=>t.theme.palette.secondary.main};
  }

  .MuiBox-root{
    justify-content: flex-end;
  }

  .MuiButtonBase-root{
    padding-inline-start: 0;
  }

  .error-alert{
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;
    border-radius: unset;

    button{
      color: rgb(95, 33, 32);
    }
  }
`;function ot(n){var o=n,{className:t}=o,r=L(o,["className"]);return e("div",{className:t,children:r.children})}const st=g(ot)`
  height: 100vh;
  height: fit-content;
  min-height: 700px;
  background-color: ${t=>t.theme.palette.primary.light};
`;function it({className:t}){return e("div",{id:"FOOTER",className:t,children:e(P,{container:!0,rowSpacing:6,columnSpacing:2,children:e(P,{item:!0,xs:12,sm:4,children:D(ee,{children:[e(Se,{variant:"h5",component:"h5",children:"\u05DC\u05D3\u05D9\u05D5\u05D5\u05D7 \u05E2\u05DC \u05EA\u05E7\u05DC\u05D5\u05EA:"}),e(te,{children:e(re,{primary:"musicline@mail.com"})})]})})})})}const at=g(it)`
  color: ${t=>t.theme.palette.secondary.dark};
  background-color: #f8f8f8;
  padding: 25px 30px 30px 25px;
  text-align: start;
  
  li span{
    color: ${t=>t.theme.palette.secondary.dark};
    font-size: 15px;
  }

  h5{
    background-color: unset;
    font-weight: 500;
    font-size: 17px;
    color: #303030;
    margin: unset;
  }

`;function lt(n){var o=n,{className:t}=o,r=L(o,["className"]);const s=a.exports.useContext(j);return e(be,{className:t,anchor:s.anchor,open:s.open,variant:s.permanent,onClose:()=>{s.closeDrawer(!1)},children:e(_,{className:"drawer-layout",sx:{width:s.anchor==="top"||s.anchor==="bottom"?"auto":250},role:"presentation",onClick:()=>{s.closeDrawer(!1)},children:e(s.child,{})})})}const ut=g(lt)`
  color: #F4F5F7;
  
  .MuiDrawer-paper {
    background-color: ${t=>t.theme.palette.primary.main};
    color: ${t=>t.theme.palette.secondary.main};
  }

  svg{
    color: ${t=>t.theme.palette.secondary.main};
  }

  a{
    color: ${t=>t.theme.palette.secondary.main};
    text-decoration: none;
  }
`;function ct({className:t}){const[r,n]=a.exports.useState(!0),o=()=>{n(!1)};return D(ve,{id:"main-modal-root",className:t,open:r,onClose:o,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",sx:{zIndex:1500},children:[e(we,{id:"alert-dialog-title",children:"\u05D1\u05E8\u05D5\u05DA \u05D4\u05D1\u05D0 \u05DC\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 \u05DC\u05D9\u05D9\u05DF"}),e(Le,{children:e(ke,{id:"alert-dialog-description",children:"Built with love using Vite build tool, React and Mui UI library."})}),e(Ne,{children:e(M,{onClick:o,children:"Close"})})]})}g(ct)`
  
`;function dt(n){var o=n,{className:t}=o,r=L(o,["className"]);const[s,l]=a.exports.useState(!0);return e(Te,{className:t,open:s,onClose:()=>{l(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:r.children})}g(dt)`
  #main-modal-root{
    z-index: 1500;
    background-color: #ffe607;
  }
`;function pt({className:t}){return e("div",{id:"",className:t})}const ht=g(pt)`
  visibility: hidden;
  height: 0px !important;
  width: 0px !important;
`;function mt({className:t}){const[r,n]=a.exports.useState(""),o=a.exports.useContext(N),s=a.exports.useContext(I);a.exports.useEffect(()=>{window.onload=()=>{const c=document.querySelectorAll("#___gcse_0 .gsc-results-wrapper-nooverlay")[0],u={childList:!1,attributes:!0,subtree:!1};function d(){p()}new MutationObserver(d).observe(c,u)}},[]),a.exports.useEffect(()=>{n(o.title)},[o.title]);function l(c){n(c.target.value),i(c)}const p=()=>{setTimeout(()=>{let c=document.querySelectorAll(".gs-title");document.querySelectorAll(".gsc-adBlock").forEach(d=>{d.parentNode.appendChild(d)}),c&&c.forEach((d,S)=>{if(d.innerText.includes("Lyrics")){let C=d.innerText.replace("Lyrics | Musixmatch"," ");d.innerText=C;const v={artistName:encodeURI(C.split("-")[0]),songName:encodeURI(C.split("-")[1])};d.addEventListener("click",T=>{o.proccess||(s.closeBanner("error"),o.getLines(v,C))})}else d.innerText.includes("Lyrics")||d.parentElement.parentElement.parentElement.className.includes("gsc-webResult")&&d.parentElement.parentElement.parentElement.remove()})},50)};function i(c){let u=document.querySelector("#gsc-i-id1");if(u)if(c.target.value.length<=1){let d=document.querySelector(".gsst_a");d&&d.dispatchEvent(new Event("click"))}else{u.value=c.target.value;let d=document.querySelectorAll(".gsc-search-box button")[0];d?setTimeout(()=>{d.dispatchEvent(new Event("click"))},50*Math.floor(Math.random()*4)):(s.createBanner("error","error","\u05DE\u05E9\u05D4\u05D5 \u05D4\u05E9\u05EA\u05D1\u05E9, \u05E0\u05E1\u05D4 \u05DC\u05E8\u05E2\u05E0\u05DF \u05D0\u05EA \u05D4\u05E2\u05DE\u05D5\u05D3","(no gsc loaded)"),console.error("no gsc loaded, try reload the page"))}else s.createBanner("error","error","\u05DE\u05E9\u05D4\u05D5 \u05D4\u05E9\u05EA\u05D1\u05E9, \u05E0\u05E1\u05D4 \u05DC\u05E8\u05E2\u05E0\u05DF \u05D0\u05EA \u05D4\u05E2\u05DE\u05D5\u05D3","(no gsc loaded)"),console.error("no gsc loaded, try reload the page")}return D("div",{id:"",className:t,children:[e(Ae,{id:"outlined-search",label:"\u05D7\u05E4\u05E9 \u05E9\u05D9\u05E8",type:"search",className:"main-input",onChange:l,autoFocus:!1,autoComplete:"off",value:r}),e("div",{className:"gcse-search"})]})}const Dt=g(mt)`
  *,::before,::after{
      background-color: '#ffffff0';
  }

  input, fieldset, label{
   color: white !important;
   border-color: white !important;
  }

`;function ft(n){var o=n,{className:t}=o,r=L(o,["className"]);const s=a.exports.useContext(N),[l,p]=a.exports.useState(!1),[i,c]=a.exports.useState(5e4),[u,d]=a.exports.useState([]);a.exports.useEffect(()=>{var f;((f=s.lines[s.lines.length-1])==null?void 0:f.trans).length>=1&&c(0)},[s.lines]);const S=()=>{var f;((f=s.lines[s.lines.length-1])==null?void 0:f.trans).length>=1&&(p(!0),v())},C=()=>{p(!1)},v=a.exports.useCallback(()=>{T()},[]);function T(){fetch("https://musicline-backend-basssites.vercel.app/single-trans",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({single:encodeURI(r.lyric)})}).then(f=>f.json()).then(f=>{(f==null?void 0:f.results[0])?d(f.results):d(["\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0"])}).catch(f=>{console.log(f)})}const O=()=>u[1]?u.map((A,f)=>D(R,{children:[f>0&&e("hr",{}),e("p",{className:"tt-p",children:A})]})):e("p",{className:"tt-p",children:"\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0"});return e(ze,{onClickAway:C,children:e(Be,{className:t,title:D(R,{children:[e(k,{color:"inherit",children:" \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD:"}),e("div",{className:"tt-body",style:{textAlign:"center",maxHeight:"110px",overflowY:"auto",direction:"ltr"},children:u[0]?e(O,{}):e(oe,{sx:{margin:"8px"},color:"primary"})})]}),arrow:!0,enterDelay:i,enterTouchDelay:i,leaveTouchDelay:60*1e3,leaveDelay:0,onOpen:()=>{v()},PopperProps:{disablePortal:!1},onClose:C,open:l,disableFocusListener:!0,disableTouchListener:!0,disableHoverListener:!0,children:D("p",{className:"single-lyric",onClick:S,children:["\xA0 ",r.lyric," "]})})})}const X=g(ft)`

`;function gt(n){var o=n,{className:t}=o,r=L(o,["className"]);const s=a.exports.useContext(N);return a.exports.useContext(I),a.exports.useContext(H),a.exports.useEffect(()=>{s.checkNextTrans()},[s,s.cou]),e(_,{children:e(P,{container:!0,spacing:2,children:s.lines&&D("div",{id:"lyrics_body",className:t,children:[e(k,{variant:"h6",noWrap:!0,component:"h3",children:s.title&&s.title.split(" ").map((l,p)=>e(X,{lyric:l},p))}),s.lines.map((l,p)=>{var i;return l.src.includes("[")&&(l.trans="   "),D("div",{children:[p>0&&l.src.includes("[")&&D(R,{children:[e("br",{}),e("br",{})]}),e(P,{className:"lyrics-line en-line",item:!0,children:l.src.split(" ").map((c,u)=>e(X,{lyric:c},u))},p.toString()+Math.floor(Math.random()*3e4)),e(P,{item:!0,className:"lyrics-line he-line",children:e(R,{children:((i=l.trans)==null?void 0:i.length)>2?l.trans.split(" ").map((c,u)=>{if(l.trans!=="   ")return D("small",{onLoad:()=>{s.checkNextTrans()},className:"single-trans",children:[c," \xA0"]},u)}):e("small",{className:"single-trans",children:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD..."})})},p.toString()+Math.floor(Math.random()*3e4))]})})]})})})}const xt=g(gt)`
  font-family: 'Assistant','Roboto', 'sans-serif';
  /* max-width: 90%; */
  font-size: 20px;
  margin: 25px;
  margin-inline-end: 10px;
  padding: 15px 50px;
  padding-bottom: 40px;
  padding-inline-start: 50px;
  margin-top: 55px;

  background-color: #f8f8f8;
  color: #172B4D;
  border-radius: 10px;

  @media (max-width: 600px) {
    padding-inline-start: 15px;
    padding-inline-end: 15px;
  }
  
  h3{
    text-align: center;
    margin-top: 30px;
    margin-bottom: 40px;
    white-space: break-spaces;

    @media (max-width: 600px) {
      font-size: 19px;
    }
  }

  .en-line p, .he-line small{
    margin: unset;
    display: inline-block;
  }

  .lyrics-line{
    padding: 6px 0px;
    max-width: 98%;
  }

  .single-lyric, .single-trans{
    display: inline;
    min-width:unset;
    padding: 0px 2px;
    text-transform: none;
  }

  .single-lyric{
    cursor: pointer;
  }

  .he-line{
      font-size: ${t=>t.fontSize.md-5+"px"};
  }

  .en-line{
      margin-top: 8px;
      direction: rtl;
      text-align: left;
      font-size: ${t=>t.fontSize.md+"px"};
  }

  @media (max-width: 600px) {
      .he-line{
        font-size: ${t=>t.fontSize.md-5+"px"};
      }

      .en-line{
        font-size: ${t=>t.fontSize.md+"px"};
      }
  }

`;function Et({className:t}){const r=a.exports.useContext(N),n=a.exports.useContext(J);a.exports.useEffect(()=>{},[n]);function o(s){s.preventDefault()}return D("div",{className:t,children:[D("div",{className:"home-top",children:[!r.currLyrics&&D("div",{children:[D(k,{variant:"h2",className:"page-h2",children:["\u05E9\u05D9\u05E8\u05D9\u05DD \u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05DD",e("br",{}),"\u05E9\u05D5\u05E8\u05D4 \u05D1\u05E9\u05D5\u05E8\u05D4"]}),D(k,{variant:"h3",className:"page-h3",children:[e("span",{className:"h3-start h3-s-one",children:"\u05D7\u05E4\u05E9 \u05D1\u05D9\u05DF \u05DE\u05D9\u05DC\u05D9\u05D5\u05E0\u05D9 \u05E9\u05D9\u05E8\u05D9\u05DD \u05D1\u05D0\u05E0\u05D2\u05DC\u05D9\u05EA"}),e("br",{}),e("span",{className:"h3-start h3-s-two",children:"\u05D5\u05E7\u05D1\u05DC \u05D0\u05EA \u05D4\u05E9\u05D9\u05E8 \u05DE\u05EA\u05D5\u05E8\u05D2\u05DD \u05DC\u05E2\u05D1\u05E8\u05D9\u05EA"}),e("br",{}),e("p",{className:"small-one",children:"\u05DC\u05D0 \u05DE\u05E6\u05D0\u05EA? \u05E0\u05E1\u05D4 \u05DC\u05D7\u05E4\u05E9 \u05E2\u05DD \u05E9\u05DD \u05D4\u05D0\u05DE\u05DF"}),e("div",{className:"small-two",children:e("small",{children:"\u05DC\u05D7\u05D9\u05E6\u05D4 \u05E2\u05DC \u05DE\u05D9\u05DC\u05D4 \u05EA\u05E6\u05D9\u05D2 \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD"})})]})]}),e(_,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:o,children:e(Dt,{})})]}),r.currLyrics&&e(xt,{className:"lyrics-body",fontSize:n.fontSize})]})}const yt=g(Et)`
    .home-top{
       padding: 0 35px;

       @media (max-width: 600px) {
        padding: 0 25px;
       }
    }
    
    .h3-s-one{
        @media (min-width: 600px) {
            word-spacing: 9px;
            letter-spacing: 0.5px;
        }

        @media (max-width: 600px) {
            font-size: 24px;
            word-spacing: 1px;
        }
   
    }

    .h3-s-two{
        @media (min-width: 600px) {
            word-spacing: 9px;
            letter-spacing: 0.3px;
        }

        @media (max-width: 600px) {
            font-size: 24px;
        }
   
    }

    .small-one{
        @media (max-width: 600px) {
            font-size: 16px;
        }

        font-size: 25px;
        margin-bottom: 15px;
    }

    .small-two{
        word-spacing: -0.5px;
    }

    .MuiTextField-root { 
        margin-top: 35px;
        /* margin-inline-start: 10px; */
        width: 480px;
        border-color: white;

        @media (max-width: 600px) {
            width: 95%;
        }
    };

    .MuiTextField-root * { 
        color: white;
        border-color: white;
    }

    .lyrics-body, .MuiGrid-root, .muirtl-mhc70k-MuiGrid-root{
        direction: ltr;
    }
    
`;function Ct({className:t}){return D("div",{id:"NO_MATCH_WRAPPER",className:t,children:[e(k,{variant:"h2",className:"page-h2",children:"404"}),e(k,{variant:"h3",className:"page-h3",children:"Nothing Here"})]})}const St=g(Ct)`

`;function bt({className:t}){const r=a.exports.useContext(j),n=a.exports.useContext(H),o=a.exports.useContext(I);a.exports.useRef(null);const s=Fe({key:"muirtl",stylisPlugins:[$e,_e]});function l(){p()}const p=()=>{const c=document.createElement("script");c.type="text/javascript",c.src="https://cse.google.com/cse.js?cx=a85c2374ffc8b8898",c.defer=!0,document.body.appendChild(c)};a.exports.useEffect(()=>{l()},[o]);const i=c=>{o.closeBanner(c)};return Z({palette:{mode:"dark"}}),D("div",{className:t,children:[e(Ie,{value:s,children:D(Me,{children:[e(Ve,{}),e(nt,{className:"header"}),o.main.open&&D(G,{severity:"warning",className:"main-alert",children:[e(ne,{children:o.main.title}),o.main.message]}),e(st,{children:D(Pe,{children:[e(Q,{path:"/",element:e(yt,{className:"page"})}),e(Q,{path:"*",element:e(St,{className:"page"})})]})}),r.open&&r.child&&e(ut,{className:"drawer"}),n.main.open&&e(oe,{color:n.main.color||"primary"}),n.circular.open&&e(Re,{color:n.main.color||"primary"}),o.snackbar.open&&e(Oe,{open:o.snackbar.open,autoHideDuration:6e3,onClose:()=>{},children:e(G,{onClose:()=>{i("snackbar")},severity:o.snackbar.severity,sx:{width:"100%"},children:o.snackbar.message})}),e(at,{})]})}),e(ht,{})]})}const vt=g(bt)`
  height: 100vh;
  height: fit-content;
  min-height: 700px;
  color: ${t=>t.theme.palette.secondary.main};

  a{
      color: #fff;
      &hover{
        color: #fff;
      }
  }

  .page-h2{
    padding: 30px 0px 0px 0px;
    font-size: 80px; 
    font-weight: 400;
    color: ${t=>t.theme.palette.secondary.main};
    @media (max-width: 600px) {
      font-size: 46px;
    }
  }

  .page-h3{
    margin: 15px 0px 0px  0px;
    font-size: 38px; // 29
    font-weight: 500;
    color: ${t=>t.theme.palette.secondary.main};

    small{
      letter-spacing: 1.4px;
    }

    @media (max-width: 600px) {
      font-size: 22px;

      small{
      letter-spacing: 0.7px;
    }
    }
  }

  a {
    text-decoration: none;
  }

  .MuiLinearProgress-root{
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3000;
  }

  .main-alert{
    color: #fff;
    background-color: #2D4260;
    border-radius: unset;
  }

  .loader{
      padding: 20px;
  }
`,wt=[We,qe,Ue,Je,Ze];function Lt(t){return e(R,{children:wt.reduceRight((r,n)=>e(n,{children:r}),t.children)})}je.render(e(F.StrictMode,{children:e(Lt,{children:e(He,{theme:se,children:e(vt,{className:"app"})})})}),document.getElementById("root"));
