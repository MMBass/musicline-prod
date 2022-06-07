var ae=Object.defineProperty,ue=Object.defineProperties;var le=Object.getOwnPropertyDescriptors;var $=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var W=(t,n,r)=>n in t?ae(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,D=(t,n)=>{for(var r in n||(n={}))K.call(n,r)&&W(t,r,n[r]);if($)for(var r of $(n))Y.call(n,r)&&W(t,r,n[r]);return t},S=(t,n)=>ue(t,le(n));var N=(t,n)=>{var r={};for(var s in t)K.call(t,s)&&n.indexOf(s)<0&&(r[s]=t[s]);if(t!=null&&$)for(var s of $(t))n.indexOf(s)<0&&Y.call(t,s)&&(r[s]=t[s]);return r};import{R as I,r as u,j as e,c as Z,M as ce,a as f,B as de,b as P,d as pe,A as he,s as C,L as ee,N as G,e as te,f as ne,g as me,h as De,i as j,I as fe,k as ge,l as xe,C as Ee,T as ye,m as k,n as Ce,o as J,p as re,G as O,q as Se,t as be,u as ve,D as we,v as Le,w as Te,x as Ne,y as ke,z as Ae,E as ze,F as Be,H as R,J as se,K as Ie,O as Fe,P as Me,Q as Pe,S as Q,U as Oe,V as Re,W as $e,X as je,Y as _e,Z as He}from"./vendor.47ea073b.js";const Je=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function r(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerpolicy&&(l.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?l.credentials="include":i.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(i){if(i.ep)return;i.ep=!0;const l=r(i);fetch(i.href,l)}};Je();const _=I.createContext(void 0);function Ge(t){const[n,r]=u.exports.useState({}),l={openDrawer:(h,a,d="temporary",o)=>{r({open:h,anchor:a,permanent:d,child:o})},closeDrawer:(h,a,d="temporary",o)=>{r({open:h,anchor:a,permanent:d,child:o})}};return e(_.Provider,{value:D(D({},n),l),children:t.children})}const H=I.createContext(void 0);function qe(t){const[n,r]=u.exports.useState({main:{open:!1,color:"primary"},circular:{open:!1,color:"primary"}}),h={createLoader:(a,d)=>{n[a]&&r(S(D({},n),{[a]:void 0})),r(S(D({},n),{[a]:{open:!1,color:d||"primary"}}))},openLoader:a=>{n[a]?r(S(D({},n),{[a]:S(D({},n[a]),{open:!0})})):console.error("Loader does'nt exist. Name: "+a)},closeLoader:a=>{n[a]?r(S(D({},n),{[a]:S(D({},n[a]),{open:!1})})):console.error("Loader does'nt exist. Name: "+a)}};return e(H.Provider,{value:D(D({},n),h),children:t.children})}const F=I.createContext(void 0);function Ue(t){const[n,r]=u.exports.useState({main:{open:!0,severity:"warning",title:"\u05D4\u05D0\u05EA\u05E8 \u05D1\u05D1\u05E0\u05D9\u05D4",message:""},snackbar:{open:!1,severity:"success",title:"",message:"This is a Snackbar!"}}),h={createBanner:(a,d,o,p)=>{n[a]&&r(S(D({},n),{[a]:void 0})),r(S(D({},n),{[a]:{open:!0,severity:d||"success",title:o||"",message:p||""}}))},openBanner:a=>{n[a]?r(S(D({},n),{[a]:S(D({},n[a]),{open:!0})})):console.error("Banner does'nt exist. Name: "+a)},closeBanner:a=>{r({main:{open:!0,severity:"warning",title:"\u05D4\u05D0\u05EA\u05E8 \u05D1\u05D1\u05E0\u05D9\u05D4",message:""},snackbar:{open:!1,severity:"success",title:"",message:"This is a Snackbar!"}}),n[a]?r(S(D({},n),{[a]:S(D({},n[a]),{open:!1})})):console.error("Banner does'nt exist. Name: "+a)}};return e(F.Provider,{value:D(D({},n),h),children:t.children})}const oe=Z({direction:"rtl",typography:{fontFamily:["Assistant","Roboto","sans-serif"].join(",")},palette:{primary:{main:"#CD5A91",light:"#CD5A91",dark:"#AC4C7A"},secondary:{main:"#edf2ff",dark:"#737373",light:"#EBECF0"}}});function Ve(){const[t,n]=u.exports.useState(oe.palette.primary.light);return e("div",{className:"wrapper",children:e(ce,{children:e("meta",{name:"theme-color",content:t})})})}const q=I.createContext(void 0);function We(t){const[n,r]=u.exports.useState({fontSize:{sm:Number(localStorage.getItem("font_sm"))||15,md:Number(localStorage.getItem("font_md"))||25},colors:"pink"}),s=()=>{n.fontSize.md<60&&(r(S(D({},n),{fontSize:{sm:n.fontSize.sm+1,md:n.fontSize.md+1}})),l())},i=()=>{n.fontSize.sm>2&&(r(S(D({},n),{fontSize:{sm:n.fontSize.sm-1,md:n.fontSize.md-1}})),l())};function l(){localStorage.setItem("font_md",n.fontSize.md),localStorage.setItem("font_sm",n.fontSize.sm)}function h(){localStorage.setItem("colors_mode",n.colors)}function a(o){r(S(D({},n),{colors:o})),h()}const d={reduceFontSize:i,increaseFontSize:s,setColors:a};return e(q.Provider,{value:D(D({},n),d),children:t.children})}function Ke({className:t}){const n=u.exports.useContext(q);return e("div",{id:"",className:t,children:f(de,{className:"button-group",children:[e(P,{"aria-label":"reduce",onClick:()=>{n.reduceFontSize()},children:e(pe,{fontSize:"small"})}),e(P,{className:"font-size-disabled",disabled:!0,children:"\u05D2\u05D5\u05D3\u05DC \u05D4\u05D8\u05E7\u05E1\u05D8"}),e(P,{"aria-label":"increase",onClick:()=>{n.increaseFontSize()},children:e(he,{fontSize:"small"})})]})})}const Ye=C(Ke)`
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

`,Qe=[];function Xe(){return e(ee,{children:Qe.map((t,n)=>e(G,{to:t.url,children:f(te,{button:!0,children:[e(ne,{primary:t.name}),e(me,{children:e(De,{})})]},t.name)},n))})}C(Xe)`
  
`;const A=I.createContext(void 0);function Ze(t){const n=u.exports.useContext(H),r=u.exports.useContext(F),[s,i]=u.exports.useState(sessionStorage.getItem("currLines")&&sessionStorage.getItem("cuurSongTitle")||""),[l,h]=u.exports.useState(sessionStorage.getItem("currLines")||!1),[a,d]=u.exports.useState([]),[o,p]=u.exports.useState(JSON.parse(sessionStorage.getItem("currLines"))||[]),[b,x]=u.exports.useState(0),[L,z]=u.exports.useState(!1),M="https://musicline-backend-basssites.vercel.app",B=(y,m)=>{z(!0),n.openLoader("main"),fetch(`${M}/lyrics`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({currSong:y})}).then(c=>c.json()).then(c=>{if(n.closeLoader("main"),sessionStorage.removeItem("currLines"),c==null?void 0:c.lyrics){i(m);let g=c.lyrics,w=[];g.split(/(?:\r\n|\r|\n)/g).map(T=>{T.length>=2&&w.push({src:T,trans:""})}),p(w),h(g),d(g.split(" "));let v=document.querySelector(".gsst_a");v&&v.dispatchEvent(new Event("click")),z(!0)}else r.createBanner("error","error","\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0, \u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1 \u05D0\u05D5 \u05D7\u05E4\u05E9 \u05E9\u05D9\u05E8 \u05D0\u05D7\u05E8","")}).catch(c=>{console.log(c),n.closeLoader("main"),r.createBanner("error","error","\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0, \u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1 \u05D0\u05D5 \u05D7\u05E4\u05E9 \u05E9\u05D9\u05E8 \u05D0\u05D7\u05E8",""),z(!0)})},E=()=>{let y=!1;for(let m=0;m<o.length;m++){let c=o[m];if(y===!0)break;if(c.trans.length<=1||c.trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."){y=!0,U(c.src,m);break}else continue}},U=(y,m)=>{fetch(`${M}/single-line-trans`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({line:encodeURI(y)})}).then(c=>c.json()).then(c=>{var g,w;if(c==null?void 0:c.trans){let v=o;console.log(c),v[m]={src:y,trans:c==null?void 0:c.trans},p(v),((g=o[o.length-1])==null?void 0:g.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(o)),sessionStorage.setItem("cuurSongTitle",s)),x(b+1)}else o[m].trans===void 0&&(newLines[m]={src:y,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),o[m].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(newLines[m]={src:y,trans:"[missing]"}),p(newLines),((w=o[o.length-1])==null?void 0:w.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(o)),sessionStorage.setItem("cuurSongTitle",s)),x(b+1)}).catch(c=>{var v;let g=o;o[m].trans===""&&(g[m]={src:y,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),o[m].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(g[m]={src:y,trans:"[missing]"}),p(g),((v=o[o.length-1])==null?void 0:v.trans).length>=1&&sessionStorage.setItem("currLines",JSON.stringify(o)),x(b+1),console.log(c)})},ie={getLines:B,getLinesTrans:(y,m)=>{fetch(`${M}/line-trans`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({lines:o})}).then(c=>c.json()).then(c=>{var w,v;let g=o;(c==null?void 0:c.trans.length)?(c.trans.map((T,V)=>{g[V]={src:g[V].src,trans:T}}),p(g),sessionStorage.setItem("currLines",JSON.stringify(o)),sessionStorage.setItem("cuurSongTitle",s),x(b+1)):(c==null?void 0:c.trans)?(g[m]={src:y,trans:c==null?void 0:c.trans},p(g),((w=o[o.length-1])==null?void 0:w.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(o)),sessionStorage.setItem("cuurSongTitle",s)),x(b+1)):(o[m].trans===void 0&&(g[m]={src:y,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),o[m].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(g[m]={src:y,trans:"[missing]"}),p(g),((v=o[o.length-1])==null?void 0:v.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(o)),sessionStorage.setItem("cuurSongTitle",s)),x(b+1))}).catch(c=>{var v;let g=o;o[m].trans===""&&(g[m]={src:y,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),o[m].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(g[m]={src:y,trans:"[missing]"}),p(g),((v=o[o.length-1])==null?void 0:v.trans).length>=1&&sessionStorage.setItem("currLines",JSON.stringify(o)),x(b+1),console.log(c)})},getLineTrans:U,checkNextTrans:E};return e(A.Provider,{value:D({title:s,proccess:L,currLyrics:l,singles:a,lines:o,cou:b},ie),children:t.children})}function et({className:t}){return u.exports.useContext(A),e(j,{className:t,sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:[].map(r=>e(G,{to:r.url,children:e(P,{sx:{my:2},children:r.name})},r.name))})}C(et)`
  
`;function tt({className:t}){return e("div",{id:"",className:t,children:e(fe,{children:e(ge,{className:"mui-rounded-icon"})})})}C(tt)`
  .mui-rounded-icon{
    background-color: white;
    color: ${t=>"#595959"};
    border-radius: 12px;
  }
`;const nt=r=>{var s=r,{className:t}=s,n=N(s,["className"]);var o,p,b,x;u.exports.useContext(_);const i=u.exports.useContext(A),l=u.exports.useContext(F),[h,a]=u.exports.useState(!1),d=function(){sessionStorage.removeItem("currLines")};return u.exports.useEffect(()=>{var L;a(((L=l.error)==null?void 0:L.open)&&!0)},[(o=l.error)==null?void 0:o.open]),f(xe,{position:"sticky",className:t,children:[e(Ee,{maxWidth:"xl",children:f(ye,{disableGutters:!0,children:[e(G,{to:"/",onClick:()=>{d()},children:e(k,{variant:"h6",noWrap:!0,component:"h1",sx:{mr:2,display:"flex"},children:"\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 \u05DC\u05D9\u05D9\u05DF"})}),i.lines[0]&&e(Ye,{})]})}),e(Ce,{in:(p=l.error)==null?void 0:p.open,children:f(J,{severity:"error",className:"error-alert",onClose:()=>{l.closeBanner("error")},children:[e(re,{children:(b=l.error)==null?void 0:b.title}),(x=l.error)==null?void 0:x.message]})})]})},rt=C(nt)`
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
`;function st(r){var s=r,{className:t}=s,n=N(s,["className"]);return e("div",{className:t,children:n.children})}const ot=C(st)`
  height: 100vh;
  height: fit-content;
  min-height: 700px;
  background-color: ${t=>t.theme.palette.primary.light};
`;function it({className:t}){return e("div",{id:"FOOTER",className:t,children:e(O,{container:!0,rowSpacing:6,columnSpacing:2,children:e(O,{item:!0,xs:12,sm:4,children:f(ee,{children:[e(Se,{variant:"h5",component:"h5",children:"\u05DC\u05D3\u05D9\u05D5\u05D5\u05D7 \u05E2\u05DC \u05EA\u05E7\u05DC\u05D5\u05EA:"}),e(te,{children:e(ne,{primary:"musicline@mail.com"})})]})})})})}const at=C(it)`
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

`;function ut(r){var s=r,{className:t}=s,n=N(s,["className"]);const i=u.exports.useContext(_);return e(be,{className:t,anchor:i.anchor,open:i.open,variant:i.permanent,onClose:()=>{i.closeDrawer(!1)},children:e(j,{className:"drawer-layout",sx:{width:i.anchor==="top"||i.anchor==="bottom"?"auto":250},role:"presentation",onClick:()=>{i.closeDrawer(!1)},children:e(i.child,{})})})}const lt=C(ut)`
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
`;function ct({className:t}){const[n,r]=u.exports.useState(!0),s=()=>{r(!1)};return f(ve,{id:"main-modal-root",className:t,open:n,onClose:s,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",sx:{zIndex:1500},children:[e(we,{id:"alert-dialog-title",children:"\u05D1\u05E8\u05D5\u05DA \u05D4\u05D1\u05D0 \u05DC\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 \u05DC\u05D9\u05D9\u05DF"}),e(Le,{children:e(Te,{id:"alert-dialog-description",children:"Built with love using Vite build tool, React and Mui UI library."})}),e(Ne,{children:e(P,{onClick:s,children:"Close"})})]})}C(ct)`
  
`;function dt(r){var s=r,{className:t}=s,n=N(s,["className"]);const[i,l]=u.exports.useState(!0);return e(ke,{className:t,open:i,onClose:()=>{l(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:n.children})}C(dt)`
  #main-modal-root{
    z-index: 1500;
    background-color: #ffe607;
  }
`;function pt({className:t}){return e("div",{id:"",className:t})}const ht=C(pt)`
  visibility: hidden;
  height: 0px !important;
  width: 0px !important;
`;function mt({className:t}){const[n,r]=u.exports.useState(""),s=u.exports.useContext(A),i=u.exports.useContext(F);u.exports.useEffect(()=>{window.onload=()=>{const d=document.querySelectorAll("#___gcse_0 .gsc-results-wrapper-nooverlay")[0],o={childList:!1,attributes:!0,subtree:!1};function p(){h()}new MutationObserver(p).observe(d,o)}},[]),u.exports.useEffect(()=>{r(s.title)},[s.title]);function l(d){r(d.target.value),a(d)}const h=()=>{setTimeout(()=>{let d=document.querySelectorAll(".gs-title");document.querySelectorAll(".gsc-adBlock").forEach(p=>{p.parentNode.appendChild(p)}),d&&d.forEach((p,b)=>{if(p.innerText.includes("Lyrics")){let x=p.innerText.replace("Lyrics | Musixmatch"," ");p.innerText=x;const L={artistName:encodeURI(x.split("-")[0]),songName:encodeURI(x.split("-")[1])};p.addEventListener("click",z=>{s.proccess||(i.closeBanner("error"),s.getLines(L,x))})}else p.innerText.includes("Lyrics")||p.parentElement.parentElement.parentElement.className.includes("gsc-webResult")&&p.parentElement.parentElement.parentElement.remove()})},50)};function a(d){let o=document.querySelector("#gsc-i-id1");if(o)if(d.target.value.length<=1){let p=document.querySelector(".gsst_a");p&&p.dispatchEvent(new Event("click"))}else{o.value=d.target.value;let p=document.querySelectorAll(".gsc-search-box button")[0];p?setTimeout(()=>{p.dispatchEvent(new Event("click"))},50*Math.floor(Math.random()*4)):(i.createBanner("error","error","\u05DE\u05E9\u05D4\u05D5 \u05D4\u05E9\u05EA\u05D1\u05E9, \u05E0\u05E1\u05D4 \u05DC\u05E8\u05E2\u05E0\u05DF \u05D0\u05EA \u05D4\u05E2\u05DE\u05D5\u05D3","(no gsc loaded)"),console.error("no gsc loaded, try reload the page"))}else i.createBanner("error","error","\u05DE\u05E9\u05D4\u05D5 \u05D4\u05E9\u05EA\u05D1\u05E9, \u05E0\u05E1\u05D4 \u05DC\u05E8\u05E2\u05E0\u05DF \u05D0\u05EA \u05D4\u05E2\u05DE\u05D5\u05D3","(no gsc loaded)"),console.error("no gsc loaded, try reload the page")}return f("div",{id:"",className:t,children:[e(Ae,{id:"outlined-search",label:"\u05D7\u05E4\u05E9 \u05E9\u05D9\u05E8",type:"search",className:"main-input",onChange:l,autoFocus:!1,autoComplete:"off",value:n}),e("div",{className:"gcse-search"})]})}const Dt=C(mt)`
  *,::before,::after{
      background-color: '#ffffff0';
  }

  input, fieldset, label{
   color: white !important;
   border-color: white !important;
  }

`;function ft(r){var s=r,{className:t}=s,n=N(s,["className"]);const i=u.exports.useContext(A),[l,h]=u.exports.useState(!1),[a,d]=u.exports.useState(5e4),[o,p]=u.exports.useState([]);u.exports.useEffect(()=>{var E;((E=i.lines[i.lines.length-1])==null?void 0:E.trans).length>=1&&d(0)},[i.lines]);const b=()=>{var E;((E=i.lines[i.lines.length-1])==null?void 0:E.trans).length>=1&&(h(!0),L())},x=()=>{h(!1)},L=u.exports.useCallback(()=>{z()},[]);function z(){fetch("https://musicline-backend-basssites.vercel.app/single-trans",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({single:encodeURI(n.lyric)})}).then(E=>E.json()).then(E=>{(E==null?void 0:E.results[0])?p(E.results):p(["\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0"])}).catch(E=>{console.log(E)})}const M=()=>o[1]?o.map((B,E)=>f(R,{children:[E>0&&e("hr",{}),e("p",{className:"tt-p",children:B})]})):e("p",{className:"tt-p",children:"\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0"});return e(ze,{onClickAway:x,children:e(Be,{className:t,title:f(R,{children:[e(k,{color:"inherit",children:" \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD:"}),e("div",{className:"tt-body",style:{textAlign:"center",maxHeight:"110px",overflowY:"auto",direction:"ltr"},children:o[0]?e(M,{}):e(se,{sx:{margin:"8px"},color:"primary"})})]}),arrow:!0,enterDelay:a,enterTouchDelay:a,leaveTouchDelay:60*1e3,leaveDelay:0,onOpen:()=>{L()},PopperProps:{disablePortal:!1},onClose:x,open:l,disableFocusListener:!0,disableTouchListener:!0,disableHoverListener:!0,children:f("p",{className:"single-lyric",onClick:b,children:["\xA0 ",n.lyric," "]})})})}const X=C(ft)`

`;function gt(r){var s=r,{className:t}=s,n=N(s,["className"]);const i=u.exports.useContext(A);return u.exports.useContext(F),u.exports.useContext(H),u.exports.useEffect(()=>{i.checkNextTrans()},[i.cou]),e(j,{children:e(O,{container:!0,spacing:2,children:i.lines&&f("div",{id:"lyrics_body",className:t,children:[e(k,{variant:"h6",noWrap:!0,component:"h3",children:i.title&&i.title.split(" ").map((l,h)=>e(X,{lyric:l},h))}),i.lines.map((l,h)=>{var a;return l.src.includes("[")&&(l.trans="   "),f("div",{children:[h>0&&l.src.includes("[")&&f(R,{children:[e("br",{}),e("br",{})]}),e(O,{className:"lyrics-line en-line",item:!0,children:l.src.split(" ").map((d,o)=>e(X,{lyric:d},o))},h.toString()+Math.floor(Math.random()*3e4)),e(O,{item:!0,className:"lyrics-line he-line",children:e(R,{children:((a=l.trans)==null?void 0:a.length)>2?l.trans.split(" ").map((d,o)=>{if(l.trans!=="   ")return f("small",{onLoad:()=>{i.checkNextTrans()},className:"single-trans",children:[d," \xA0"]},o)}):e("small",{className:"single-trans",children:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD..."})})},h.toString()+Math.floor(Math.random()*3e4))]})})]})})})}const xt=C(gt)`
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

`;function Et({className:t}){const n=u.exports.useContext(A),r=u.exports.useContext(q);u.exports.useEffect(()=>{},[r]);function s(i){i.preventDefault()}return f("div",{className:t,children:[f("div",{className:"home-top",children:[!n.currLyrics&&f("div",{children:[f(k,{variant:"h2",className:"page-h2",children:["\u05E9\u05D9\u05E8\u05D9\u05DD \u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05DD",e("br",{}),"\u05E9\u05D5\u05E8\u05D4 \u05D1\u05E9\u05D5\u05E8\u05D4"]}),f(k,{variant:"h3",className:"page-h3",children:[e("span",{className:"h3-start h3-s-one",children:"\u05D7\u05E4\u05E9 \u05D1\u05D9\u05DF \u05DE\u05D9\u05DC\u05D9\u05D5\u05E0\u05D9 \u05E9\u05D9\u05E8\u05D9\u05DD \u05D1\u05D0\u05E0\u05D2\u05DC\u05D9\u05EA"}),e("br",{}),e("span",{className:"h3-start h3-s-two",children:"\u05D5\u05E7\u05D1\u05DC \u05D0\u05EA \u05D4\u05E9\u05D9\u05E8 \u05DE\u05EA\u05D5\u05E8\u05D2\u05DD \u05DC\u05E2\u05D1\u05E8\u05D9\u05EA"}),e("br",{}),e("p",{className:"small-one",children:"\u05DC\u05D0 \u05DE\u05E6\u05D0\u05EA? \u05E0\u05E1\u05D4 \u05DC\u05D7\u05E4\u05E9 \u05E2\u05DD \u05E9\u05DD \u05D4\u05D0\u05DE\u05DF"}),e("div",{className:"small-two",children:e("small",{children:"\u05DC\u05D7\u05D9\u05E6\u05D4 \u05E2\u05DC \u05DE\u05D9\u05DC\u05D4 \u05EA\u05E6\u05D9\u05D2 \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD"})})]})]}),e(j,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:s,children:e(Dt,{})})]}),n.currLyrics&&e(xt,{className:"lyrics-body",fontSize:r.fontSize})]})}const yt=C(Et)`
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
    
`;function Ct({className:t}){return f("div",{id:"NO_MATCH_WRAPPER",className:t,children:[e(k,{variant:"h2",className:"page-h2",children:"404"}),e(k,{variant:"h3",className:"page-h3",children:"Nothing Here"})]})}const St=C(Ct)`

`;function bt({className:t}){const n=u.exports.useContext(_),r=u.exports.useContext(H),s=u.exports.useContext(F);u.exports.useRef(null);const i=Ie({key:"muirtl",stylisPlugins:[$e,je]});function l(){h()}const h=()=>{const d=document.createElement("script");d.type="text/javascript",d.src="https://cse.google.com/cse.js?cx=a85c2374ffc8b8898",d.defer=!0,document.body.appendChild(d)};u.exports.useEffect(()=>{l()},[s]);const a=d=>{s.closeBanner(d)};return Z({palette:{mode:"dark"}}),f("div",{className:t,children:[e(Fe,{value:i,children:f(Me,{children:[e(Ve,{}),e(rt,{className:"header"}),s.main.open&&f(J,{severity:"warning",className:"main-alert",children:[e(re,{children:s.main.title}),s.main.message]}),e(ot,{children:f(Pe,{children:[e(Q,{path:"/",element:e(yt,{className:"page"})}),e(Q,{path:"*",element:e(St,{className:"page"})})]})}),n.open&&n.child&&e(lt,{className:"drawer"}),r.main.open&&e(se,{color:r.main.color||"primary"}),r.circular.open&&e(Oe,{color:r.main.color||"primary"}),s.snackbar.open&&e(Re,{open:s.snackbar.open,autoHideDuration:6e3,onClose:()=>{},children:e(J,{onClose:()=>{a("snackbar")},severity:s.snackbar.severity,sx:{width:"100%"},children:s.snackbar.message})}),e(at,{})]})}),e(ht,{})]})}const vt=C(bt)`
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
`,wt=[We,Ge,Ue,qe,Ze];function Lt(t){return e(R,{children:wt.reduceRight((n,r)=>e(r,{children:n}),t.children)})}_e.render(e(I.StrictMode,{children:e(Lt,{children:e(He,{theme:oe,children:e(vt,{className:"app"})})})}),document.getElementById("root"));
