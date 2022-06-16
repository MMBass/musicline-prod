var ce=Object.defineProperty,de=Object.defineProperties;var pe=Object.getOwnPropertyDescriptors;var j=Object.getOwnPropertySymbols;var Y=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var K=(t,r,o)=>r in t?ce(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o,D=(t,r)=>{for(var o in r||(r={}))Y.call(r,o)&&K(t,o,r[o]);if(j)for(var o of j(r))Z.call(r,o)&&K(t,o,r[o]);return t},b=(t,r)=>de(t,pe(r));var k=(t,r)=>{var o={};for(var n in t)Y.call(t,n)&&r.indexOf(n)<0&&(o[n]=t[n]);if(t!=null&&j)for(var n of j(t))r.indexOf(n)<0&&Z.call(t,n)&&(o[n]=t[n]);return o};import{R as P,r as u,j as e,c as te,M as he,a as f,B as me,b as O,d as De,A as fe,s as S,L as re,N as G,e as ne,f as oe,g as ge,h as xe,i as R,I as Ee,k as ye,l as Ce,C as Se,T as be,m as A,n as ve,o as J,p as se,G as N,q as we,t as Le,u as Ne,D as Te,v as ke,w as Ae,x as ze,y as Be,z as Fe,E as Ie,F as Pe,H as $,J as ie,K as Me,O as Oe,P as Re,Q as $e,S as Q,U as je,V as _e,W as He,X as Je,Y as Ge,Z as qe}from"./vendor.47ea073b.js";const Ue=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&n(h)}).observe(document,{childList:!0,subtree:!0});function o(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerpolicy&&(l.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?l.credentials="include":i.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(i){if(i.ep)return;i.ep=!0;const l=o(i);fetch(i.href,l)}};Ue();const _=P.createContext(void 0);function Ve(t){const[r,o]=u.exports.useState({}),l={openDrawer:(h,a,d="temporary",s)=>{o({open:h,anchor:a,permanent:d,child:s})},closeDrawer:(h,a,d="temporary",s)=>{o({open:h,anchor:a,permanent:d,child:s})}};return e(_.Provider,{value:D(D({},r),l),children:t.children})}const H=P.createContext(void 0);function We(t){const[r,o]=u.exports.useState({main:{open:!1,color:"primary"},circular:{open:!1,color:"primary"}}),h={createLoader:(a,d)=>{r[a]&&o(b(D({},r),{[a]:void 0})),o(b(D({},r),{[a]:{open:!1,color:d||"primary"}}))},openLoader:a=>{r[a]?o(b(D({},r),{[a]:b(D({},r[a]),{open:!0})})):console.error("Loader does'nt exist. Name: "+a)},closeLoader:a=>{r[a]?o(b(D({},r),{[a]:b(D({},r[a]),{open:!1})})):console.error("Loader does'nt exist. Name: "+a)}};return e(H.Provider,{value:D(D({},r),h),children:t.children})}const M=P.createContext(void 0);function Ke(t){const[r,o]=u.exports.useState({main:{open:!0,severity:"warning",title:"\u05D4\u05D0\u05EA\u05E8 \u05D1\u05D1\u05E0\u05D9\u05D4",message:""},snackbar:{open:!1,severity:"success",title:"",message:"This is a Snackbar!"}}),h={createBanner:(a,d,s,p)=>{r[a]&&o(b(D({},r),{[a]:void 0})),o(b(D({},r),{[a]:{open:!0,severity:d||"success",title:s||"",message:p||""}}))},openBanner:a=>{r[a]?o(b(D({},r),{[a]:b(D({},r[a]),{open:!0})})):console.error("Banner does'nt exist. Name: "+a)},closeBanner:a=>{o({main:{open:!0,severity:"warning",title:"\u05D4\u05D0\u05EA\u05E8 \u05D1\u05D1\u05E0\u05D9\u05D4",message:""},snackbar:{open:!1,severity:"success",title:"",message:"This is a Snackbar!"}}),r[a]?o(b(D({},r),{[a]:b(D({},r[a]),{open:!1})})):console.error("Banner does'nt exist. Name: "+a)}};return e(M.Provider,{value:D(D({},r),h),children:t.children})}const ae=te({direction:"rtl",typography:{fontFamily:["Assistant","Roboto","sans-serif"].join(",")},palette:{primary:{main:"#CD5A91",light:"#ff8bc1",dark:"#AC4C7A"},secondary:{main:"#edf2ff",dark:"#737373",light:"#EBECF0"}}});function Ye(){const[t,r]=u.exports.useState(ae.palette.primary.main);return e("div",{className:"wrapper",children:e(he,{children:e("meta",{name:"theme-color",content:t})})})}const q=P.createContext(void 0);function Ze(t){const[r,o]=u.exports.useState({fontSize:{sm:Number(localStorage.getItem("font_sm"))||15,md:Number(localStorage.getItem("font_md"))||25},colors:"pink"}),n=()=>{r.fontSize.md<60&&(o(b(D({},r),{fontSize:{sm:r.fontSize.sm+1,md:r.fontSize.md+1}})),l())},i=()=>{r.fontSize.sm>2&&(o(b(D({},r),{fontSize:{sm:r.fontSize.sm-1,md:r.fontSize.md-1}})),l())};function l(){localStorage.setItem("font_md",r.fontSize.md),localStorage.setItem("font_sm",r.fontSize.sm)}function h(){localStorage.setItem("colors_mode",r.colors)}function a(s){o(b(D({},r),{colors:s})),h()}const d={reduceFontSize:i,increaseFontSize:n,setColors:a};return e(q.Provider,{value:D(D({},r),d),children:t.children})}function Qe({className:t}){const r=u.exports.useContext(q);return e("div",{id:"",className:t,children:f(me,{className:"button-group",children:[e(O,{"aria-label":"reduce",onClick:()=>{r.reduceFontSize()},children:e(De,{fontSize:"small"})}),e(O,{className:"font-size-disabled",disabled:!0,children:"\u05D2\u05D5\u05D3\u05DC \u05D4\u05D8\u05E7\u05E1\u05D8"}),e(O,{"aria-label":"increase",onClick:()=>{r.increaseFontSize()},children:e(fe,{fontSize:"small"})})]})})}const Xe=S(Qe)`
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

`,et=[];function tt(){return e(re,{children:et.map((t,r)=>e(G,{to:t.url,children:f(ne,{button:!0,children:[e(oe,{primary:t.name}),e(ge,{children:e(xe,{})})]},t.name)},r))})}S(tt)`
  
`;const z=P.createContext(void 0);function rt(t){const r=u.exports.useContext(H),o=u.exports.useContext(M),[n,i]=u.exports.useState(sessionStorage.getItem("currLines")&&sessionStorage.getItem("cuurSongTitle")||""),[l,h]=u.exports.useState(sessionStorage.getItem("currLines")||!1),[a,d]=u.exports.useState([]),[s,p]=u.exports.useState(JSON.parse(sessionStorage.getItem("currLines"))||[]),[x,y]=u.exports.useState(0),[L,B]=u.exports.useState(!1),F="https://musicline-backend.vercel.app",I=(E,m)=>{B(!0),r.openLoader("main"),fetch(`${F}/lyrics`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({currSong:E})}).then(c=>c.json()).then(c=>{if(r.closeLoader("main"),sessionStorage.removeItem("currLines"),c==null?void 0:c.lyrics){i(m);let g=c.lyrics,w=[];g.split(/(?:\r\n|\r|\n)/g).map(T=>{T.length>=2&&w.push({src:T,trans:""})}),p(w),h(g),d(g.split(" "));let v=document.querySelector(".gsst_a");v&&v.dispatchEvent(new Event("click")),B(!0)}else o.createBanner("error","error","\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0, \u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1 \u05D0\u05D5 \u05D7\u05E4\u05E9 \u05E9\u05D9\u05E8 \u05D0\u05D7\u05E8","")}).catch(c=>{console.log("ERRORR "+c),console.log(c),r.closeLoader("main"),o.createBanner("error","error","\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0, \u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1 \u05D0\u05D5 \u05D7\u05E4\u05E9 \u05E9\u05D9\u05E8 \u05D0\u05D7\u05E8",""),B(!0)})},C=()=>{let E=!1;for(let m=0;m<s.length;m++){let c=s[m];if(E===!0)break;if(c.trans.length<=1||c.trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."){E=!0,window.location.origin.includes("github")?V(c.src,m):U(c.src,m);break}else continue}},ue=()=>{var E;((E=s[0])==null?void 0:E.length)>=1?fetch(`${F}/line-trans`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({lines:s})}):console.error("'lines' empty")},U=(E,m)=>{fetch(`${F}/single-line-trans`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({line:encodeURI(E)})}).then(c=>c.json()).then(c=>{var g,w;if(c==null?void 0:c.trans){let v=s;console.log(c),v[m]={src:E,trans:c==null?void 0:c.trans},p(v),((g=s[s.length-1])==null?void 0:g.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(s)),sessionStorage.setItem("cuurSongTitle",n)),y(x+1)}else s[m].trans===void 0&&(newLines[m]={src:E,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),s[m].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(newLines[m]={src:E,trans:"[missing]"}),p(newLines),((w=s[s.length-1])==null?void 0:w.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(s)),sessionStorage.setItem("cuurSongTitle",n)),y(x+1)}).catch(c=>{var v;let g=s;s[m].trans===""&&(g[m]={src:E,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),s[m].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(g[m]={src:E,trans:"[missing]"}),p(g),((v=s[s.length-1])==null?void 0:v.trans).length>=1&&sessionStorage.setItem("currLines",JSON.stringify(s)),y(x+1),console.log(c)})},V=(E,m)=>{fetch(`${F}/line-trans`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({lines:s})}).then(c=>c.json()).then(c=>{var w,v;let g=s;(c==null?void 0:c.trans.length)?(c.trans.map((T,W)=>{g[W]={src:g[W].src,trans:T}}),p(g),sessionStorage.setItem("currLines",JSON.stringify(s)),sessionStorage.setItem("cuurSongTitle",n),y(x+1)):(c==null?void 0:c.trans)?(g[m]={src:E,trans:c==null?void 0:c.trans},p(g),((w=s[s.length-1])==null?void 0:w.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(s)),sessionStorage.setItem("cuurSongTitle",n)),y(x+1)):(s[m].trans===void 0&&(g[m]={src:E,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),s[m].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(g[m]={src:E,trans:"[missing]"}),p(g),((v=s[s.length-1])==null?void 0:v.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(s)),sessionStorage.setItem("cuurSongTitle",n)),y(x+1))}).catch(c=>{var v;let g=s;s[m].trans===""&&(g[m]={src:E,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),s[m].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(g[m]={src:E,trans:"[missing]"}),p(g),((v=s[s.length-1])==null?void 0:v.trans).length>=1&&sessionStorage.setItem("currLines",JSON.stringify(s)),y(x+1),console.log(c)})},le={getLines:I,getFullTrans:V,getPartlyTrans:ue,getSingleLineTrans:U,checkNextTrans:C};return e(z.Provider,{value:D({title:n,proccess:L,currLyrics:l,singles:a,lines:s,cou:x},le),children:t.children})}function nt({className:t}){return u.exports.useContext(z),e(R,{className:t,sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:[].map(o=>e(G,{to:o.url,children:e(O,{sx:{my:2},children:o.name})},o.name))})}S(nt)`
  
`;function ot({className:t}){return e("div",{id:"",className:t,children:e(Ee,{children:e(ye,{className:"mui-rounded-icon"})})})}S(ot)`
  .mui-rounded-icon{
    background-color: white;
    color: ${t=>"#595959"};
    border-radius: 12px;
  }
`;const st=o=>{var n=o,{className:t}=n,r=k(n,["className"]);var s,p,x,y;u.exports.useContext(_);const i=u.exports.useContext(z),l=u.exports.useContext(M),[h,a]=u.exports.useState(!1),d=function(){sessionStorage.removeItem("currLines")};return u.exports.useEffect(()=>{var L;a(((L=l.error)==null?void 0:L.open)&&!0)},[(s=l.error)==null?void 0:s.open]),f(Ce,{position:"sticky",className:t,children:[e(Se,{maxWidth:"xl",children:f(be,{disableGutters:!0,children:[e(G,{to:"/",onClick:()=>{d()},children:e(A,{variant:"h6",noWrap:!0,component:"h1",sx:{mr:2,display:"flex"},children:"\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 \u05DC\u05D9\u05D9\u05DF"})}),i.lines[0]&&e(Xe,{})]})}),e(ve,{in:(p=l.error)==null?void 0:p.open,children:f(J,{severity:"error",className:"error-alert",onClose:()=>{l.closeBanner("error")},children:[e(se,{children:(x=l.error)==null?void 0:x.title}),(y=l.error)==null?void 0:y.message]})})]})},it=S(st)`
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
`;function at(o){var n=o,{className:t}=n,r=k(n,["className"]);return e("div",{className:t,children:r.children})}const ut=S(at)`
  height: 100vh;
  height: fit-content;
  min-height: 700px;
  background-color: ${t=>t.theme.palette.primary.main};
`;function lt({className:t}){return e("div",{id:"FOOTER",className:t,children:e(N,{container:!0,rowSpacing:6,columnSpacing:2,children:e(N,{item:!0,xs:12,sm:4,children:f(re,{children:[e(we,{variant:"h5",component:"h5",children:"\u05DC\u05D3\u05D9\u05D5\u05D5\u05D7 \u05E2\u05DC \u05EA\u05E7\u05DC\u05D5\u05EA:"}),e(ne,{children:e(oe,{primary:"musicline@mail.com"})})]})})})})}const ct=S(lt)`
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

`;function dt(o){var n=o,{className:t}=n,r=k(n,["className"]);const i=u.exports.useContext(_);return e(Le,{className:t,anchor:i.anchor,open:i.open,variant:i.permanent,onClose:()=>{i.closeDrawer(!1)},children:e(R,{className:"drawer-layout",sx:{width:i.anchor==="top"||i.anchor==="bottom"?"auto":250},role:"presentation",onClick:()=>{i.closeDrawer(!1)},children:e(i.child,{})})})}const pt=S(dt)`
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
`;function ht({className:t}){const[r,o]=u.exports.useState(!0),n=()=>{o(!1)};return f(Ne,{id:"main-modal-root",className:t,open:r,onClose:n,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",sx:{zIndex:1500},children:[e(Te,{id:"alert-dialog-title",children:"\u05D1\u05E8\u05D5\u05DA \u05D4\u05D1\u05D0 \u05DC\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 \u05DC\u05D9\u05D9\u05DF"}),e(ke,{children:e(Ae,{id:"alert-dialog-description",children:"Built with love using Vite build tool, React and Mui UI library."})}),e(ze,{children:e(O,{onClick:n,children:"Close"})})]})}S(ht)`
  
`;function mt(o){var n=o,{className:t}=n,r=k(n,["className"]);const[i,l]=u.exports.useState(!0);return e(Be,{className:t,open:i,onClose:()=>{l(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:r.children})}S(mt)`
  #main-modal-root{
    z-index: 1500;
    background-color: #ffe607;
  }
`;function Dt({className:t}){return e("div",{id:"",className:t})}const ft=S(Dt)`
  visibility: hidden;
  height: 0px !important;
  width: 0px !important;
`;function gt({className:t}){const[r,o]=u.exports.useState(""),n=u.exports.useContext(z),i=u.exports.useContext(M);u.exports.useEffect(()=>{window.onload=()=>{const d=document.querySelectorAll("#___gcse_0 .gsc-results-wrapper-nooverlay")[0],s={childList:!1,attributes:!0,subtree:!1};function p(){h()}new MutationObserver(p).observe(d,s)}},[]),u.exports.useEffect(()=>{o(n.title)},[n.title]);function l(d){o(d.target.value),a(d)}const h=()=>{setTimeout(()=>{let d=document.querySelectorAll(".gs-title");document.querySelectorAll(".gsc-adBlock").forEach(p=>{p.parentNode.appendChild(p)}),d&&d.forEach((p,x)=>{if(p.innerText.includes("Lyrics")){let y=p.innerText.replace("Lyrics | Musixmatch"," ");p.innerText=y;const L={artistName:encodeURI(y.split("-")[0]),songName:encodeURI(y.split("-")[1])};p.addEventListener("click",B=>{n.proccess||(i.closeBanner("error"),n.getLines(L,y))})}else p.innerText.includes("Lyrics")||p.parentElement.parentElement.parentElement.className.includes("gsc-webResult")&&p.parentElement.parentElement.parentElement.remove()})},50)};function a(d){i.error&&i.closeBanner("error");let s=document.querySelector("#gsc-i-id1"),p=/^[~`!@#$%^&*()_+=[\]\{}|;':",.\/<>?a-zA-Z0-9- ]+$/;if(s)if(d.target.value.length<=1){let x=document.querySelector(".gsst_a");x&&x.dispatchEvent(new Event("click"))}else if(p.test(d.target.value)){s.value=d.target.value;let x=document.querySelectorAll(".gsc-search-box button")[0];x?setTimeout(()=>{x.dispatchEvent(new Event("click"))},50*Math.floor(Math.random()*4)):(i.createBanner("error","error","\u05DE\u05E9\u05D4\u05D5 \u05D4\u05E9\u05EA\u05D1\u05E9, \u05E0\u05E1\u05D4 \u05DC\u05E8\u05E2\u05E0\u05DF \u05D0\u05EA \u05D4\u05E2\u05DE\u05D5\u05D3","(no gsc loaded)"),console.error("no gsc loaded, try reload the page"))}else{i.createBanner("error","error","\u05D4\u05D6\u05DF \u05D0\u05E0\u05D2\u05DC\u05D9\u05EA \u05D1\u05DC\u05D1\u05D3","");return}else i.createBanner("error","error","\u05DE\u05E9\u05D4\u05D5 \u05D4\u05E9\u05EA\u05D1\u05E9, \u05E0\u05E1\u05D4 \u05DC\u05E8\u05E2\u05E0\u05DF \u05D0\u05EA \u05D4\u05E2\u05DE\u05D5\u05D3","(no gsc loaded)"),console.error("no gsc loaded, try reload the page")}return f("div",{id:"",className:t,children:[e(Fe,{id:"outlined-search",label:"\u05D7\u05E4\u05E9 \u05E9\u05D9\u05E8",type:"search",className:"main-input",onChange:l,autoFocus:!1,autoComplete:"off",value:r}),e("div",{className:"gcse-search"})]})}const X=S(gt)`

  *,::before,::after{
      background-color: '#ffffff0';
  }

  input, fieldset, label{
   color: white !important;
   border-color: white !important;
  }

`;function xt(o){var n=o,{className:t}=n,r=k(n,["className"]);const i=u.exports.useContext(z),[l,h]=u.exports.useState(!1),[a,d]=u.exports.useState(5e4),[s,p]=u.exports.useState([]);u.exports.useEffect(()=>{var C;((C=i.lines[i.lines.length-1])==null?void 0:C.trans).length>=1&&d(0)},[i.lines]);const x=()=>{var C;((C=i.lines[i.lines.length-1])==null?void 0:C.trans).length>=1&&(h(!0),L())},y=()=>{h(!1)},L=u.exports.useCallback(()=>{B()},[]);function B(){fetch("https://musicline-backend.vercel.app/single-trans",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({single:encodeURI(r.lyric)})}).then(C=>C.json()).then(C=>{(C==null?void 0:C.results[0])?p(C.results):p(["\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0"])}).catch(C=>{console.log(C)})}const F=()=>s[1]?s.map((I,C)=>f($,{children:[C>0&&e("hr",{}),e("p",{className:"tt-p",children:I})]})):e("p",{className:"tt-p",children:"\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0"});return e(Ie,{onClickAway:y,children:e(Pe,{className:t,title:f($,{children:[e(A,{color:"inherit",children:" \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD:"}),e("div",{className:"tt-body",style:{textAlign:"center",maxHeight:"110px",overflowY:"auto",direction:"ltr"},children:s[0]?e(F,{}):e(ie,{sx:{margin:"8px"},color:"primary"})})]}),arrow:!0,enterDelay:a,enterTouchDelay:a,leaveTouchDelay:60*1e3,leaveDelay:0,onOpen:()=>{L()},PopperProps:{disablePortal:!1},onClose:y,open:l,disableFocusListener:!0,disableTouchListener:!0,disableHoverListener:!0,children:f("p",{className:"single-lyric",onClick:x,children:["\xA0 ",r.lyric," "]})})})}const ee=S(xt)`

`;function Et(o){var n=o,{className:t}=n,r=k(n,["className"]);const i=u.exports.useContext(z);return u.exports.useContext(M),u.exports.useContext(H),u.exports.useEffect(()=>{i.checkNextTrans()},[i.cou]),e(R,{children:e(N,{container:!0,spacing:2,children:i.lines&&f("div",{id:"lyrics_body",className:t,children:[e(A,{variant:"h6",noWrap:!0,component:"h3",children:i.title&&i.title.split(" ").map((l,h)=>e(ee,{lyric:l},h))}),i.lines.map((l,h)=>{var a;return l.src.includes("[")&&(l.trans="   "),f("div",{children:[h>0&&l.src.includes("[")&&f($,{children:[e("br",{}),e("br",{})]}),e(N,{className:"lyrics-line en-line",item:!0,children:l.src.split(" ").map((d,s)=>e(ee,{lyric:d},s))},h.toString()+Math.floor(Math.random()*3e4)),e(N,{item:!0,className:"lyrics-line he-line",children:e($,{children:((a=l.trans)==null?void 0:a.length)>2?l.trans.split(" ").map((d,s)=>{if(l.trans!=="   ")return f("small",{onLoad:()=>{i.checkNextTrans()},className:"single-trans",children:[d," \xA0"]},s)}):e("small",{className:"single-trans",children:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD..."})})},h.toString()+Math.floor(Math.random()*3e4))]})})]})})})}const yt=S(Et)`
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

`;function Ct({className:t}){const r=u.exports.useContext(z),o=u.exports.useContext(q);u.exports.useEffect(()=>{},[o]);function n(i){i.preventDefault()}return f("div",{className:t,children:[e("div",{className:"home-top",children:!r.currLyrics&&f(N,{container:!0,className:"home-t-container",children:[e(N,{item:!0,xs:12,sm:6,children:f(A,{variant:"h2",className:"page-h2",children:["\u05E9\u05D9\u05E8\u05D9\u05DD \u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05DD",e("br",{}),"\u05E9\u05D5\u05E8\u05D4 \u05D1\u05E9\u05D5\u05E8\u05D4"]})}),f(N,{item:!0,xs:12,sm:6,children:[f(A,{variant:"h3",className:"page-h3",children:[e("span",{className:"h3-start h3-s-one",children:"\u05D7\u05E4\u05E9 \u05D1\u05D9\u05DF \u05DE\u05D9\u05DC\u05D9\u05D5\u05E0\u05D9 \u05E9\u05D9\u05E8\u05D9\u05DD \u05D1\u05D0\u05E0\u05D2\u05DC\u05D9\u05EA"}),e("br",{}),e("span",{className:"h3-start h3-s-two",children:"\u05D5\u05E7\u05D1\u05DC \u05D0\u05EA \u05D4\u05E9\u05D9\u05E8 \u05DE\u05EA\u05D5\u05E8\u05D2\u05DD \u05DC\u05E2\u05D1\u05E8\u05D9\u05EA"}),e("br",{}),e("p",{className:"small-one",children:"\u05DC\u05D0 \u05DE\u05E6\u05D0\u05EA? \u05E0\u05E1\u05D4 \u05DC\u05D7\u05E4\u05E9 \u05E2\u05DD \u05E9\u05DD \u05D4\u05D0\u05DE\u05DF"}),e("div",{className:"small-two",children:e("small",{children:"\u05DC\u05D7\u05D9\u05E6\u05D4 \u05E2\u05DC \u05DE\u05D9\u05DC\u05D4 \u05EA\u05E6\u05D9\u05D2 \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD"})})]}),e(R,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:n,children:e(X,{})})]})]})}),r.currLyrics&&e(R,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:n,className:"second-search-ctr",children:e(X,{})}),r.currLyrics&&e(yt,{className:"lyrics-body",fontSize:o.fontSize})]})}const St=S(Ct)`
    .home-top{
       padding: 0 35px;

       @media (max-width: 600px) {
        padding: 0 25px;
       }
    }

    .home-t-container{
        padding-top: 30px;
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
        width: 450px;
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

    .second-search-ctr{
       padding-inline-start: 10px;
    }
    
`;function bt({className:t}){return f("div",{id:"NO_MATCH_WRAPPER",className:t,children:[e(A,{variant:"h2",className:"page-h2",children:"404"}),e(A,{variant:"h3",className:"page-h3",children:"Nothing Here"})]})}const vt=S(bt)`

`;function wt({className:t}){const r=u.exports.useContext(_),o=u.exports.useContext(H),n=u.exports.useContext(M);u.exports.useRef(null);const i=Me({key:"muirtl",stylisPlugins:[He,Je]});function l(){h()}const h=()=>{const d=document.createElement("script");d.type="text/javascript",d.src="https://cse.google.com/cse.js?cx=a85c2374ffc8b8898",d.defer=!0,document.body.appendChild(d)};u.exports.useEffect(()=>{l()},[n]);const a=d=>{n.closeBanner(d)};return te({palette:{mode:"dark"}}),f("div",{className:t,children:[e(Oe,{value:i,children:f(Re,{children:[e(Ye,{}),e(it,{className:"header"}),n.main.open&&f(J,{severity:"warning",className:"main-alert",children:[e(se,{children:n.main.title}),n.main.message]}),e(ut,{children:f($e,{children:[e(Q,{path:"/",element:e(St,{className:"page"})}),e(Q,{path:"*",element:e(vt,{className:"page"})})]})}),r.open&&r.child&&e(pt,{className:"drawer"}),o.main.open&&e(ie,{color:o.main.color||"primary"}),o.circular.open&&e(je,{color:o.main.color||"primary"}),n.snackbar.open&&e(_e,{open:n.snackbar.open,autoHideDuration:6e3,onClose:()=>{},children:e(J,{onClose:()=>{a("snackbar")},severity:n.snackbar.severity,sx:{width:"100%"},children:n.snackbar.message})}),e(ct,{})]})}),e(ft,{})]})}const Lt=S(wt)`
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
      margin-top: 0px;
      font-size: 46px;
    }
  }

  .page-h3{
    margin: 40px 0px 0px  0px;
    font-size: 38px; // 29
    font-weight: 500;
    color: ${t=>t.theme.palette.secondary.main};

    small{
      letter-spacing: 1.4px;
    }

    @media (max-width: 600px) {
      margin: 15px 0px 0px  0px;
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
`,Nt=[Ze,Ve,Ke,We,rt];function Tt(t){return e($,{children:Nt.reduceRight((r,o)=>e(o,{children:r}),t.children)})}Ge.render(e(P.StrictMode,{children:e(Tt,{children:e(qe,{theme:ae,children:e(Lt,{className:"app"})})})}),document.getElementById("root"));
