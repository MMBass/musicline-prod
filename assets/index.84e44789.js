var pe=Object.defineProperty,De=Object.defineProperties;var he=Object.getOwnPropertyDescriptors;var j=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var Z=(t,n,o)=>n in t?pe(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,g=(t,n)=>{for(var o in n||(n={}))Q.call(n,o)&&Z(t,o,n[o]);if(j)for(var o of j(n))X.call(n,o)&&Z(t,o,n[o]);return t},L=(t,n)=>De(t,he(n));var A=(t,n)=>{var o={};for(var s in t)Q.call(t,s)&&n.indexOf(s)<0&&(o[s]=t[s]);if(t!=null&&j)for(var s of j(t))n.indexOf(s)<0&&X.call(t,s)&&(o[s]=t[s]);return o};import{R as P,r as u,j as e,c as re,M as me,a as f,B as ge,b as R,d as fe,A as xe,s as v,L as se,N as q,e as oe,f as ie,g as Ee,h as ye,i as $,I as Se,k as Ce,l as be,C as ve,T as we,m as k,n as Le,o as U,p as ae,G as N,q as Te,t as Ne,u as Ae,D as ke,v as ze,w as Ie,x as Be,y as Fe,z as Oe,E as Pe,F as Me,H as _,J as ue,K as Re,O as $e,P as _e,Q as je,S as ee,U as Je,V as He,W as Ge,X as Ue,Y as qe,Z as Ve}from"./vendor.47ea073b.js";const We=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const m of l.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&s(m)}).observe(document,{childList:!0,subtree:!0});function o(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerpolicy&&(l.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?l.credentials="include":i.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(i){if(i.ep)return;i.ep=!0;const l=o(i);fetch(i.href,l)}};We();const J=P.createContext(void 0);function Ke(t){const[n,o]=u.exports.useState({}),l={openDrawer:(m,a,p="temporary",r)=>{o({open:m,anchor:a,permanent:p,child:r})},closeDrawer:(m,a,p="temporary",r)=>{o({open:m,anchor:a,permanent:p,child:r})}};return e(J.Provider,{value:g(g({},n),l),children:t.children})}const H=P.createContext(void 0);function Ye(t){const[n,o]=u.exports.useState({main:{open:!1,color:"primary"},circular:{open:!1,color:"primary"}}),m={createLoader:(a,p)=>{n[a]&&o(L(g({},n),{[a]:void 0})),o(L(g({},n),{[a]:{open:!1,color:p||"primary"}}))},openLoader:a=>{n[a]?o(L(g({},n),{[a]:L(g({},n[a]),{open:!0})})):console.error("Loader does'nt exist. Name: "+a)},closeLoader:a=>{n[a]?o(L(g({},n),{[a]:L(g({},n[a]),{open:!1})})):console.error("Loader does'nt exist. Name: "+a)}};return e(H.Provider,{value:g(g({},n),m),children:t.children})}const M=P.createContext(void 0);function Ze(t){const[n,o]=u.exports.useState({main:{open:!0,severity:"warning",title:"\u05D4\u05D0\u05EA\u05E8 \u05D1\u05D1\u05E0\u05D9\u05D4",message:""},click_ad:{open:!0,severity:"warning",title:"",message:"\u05E8\u05D5\u05E6\u05D4 \u05DC\u05E7\u05D1\u05DC \u05EA\u05E8\u05D2\u05D5\u05DD \u05D9\u05E2\u05D9\u05DC \u05D5\u05DE\u05D4\u05D9\u05E8 \u05D9\u05D5\u05EA\u05E8? \u05D4\u05E7\u05DC\u05E7 \u05E2\u05DC \u05E4\u05E8\u05E1\u05D5\u05DE\u05EA"},snackbar:{open:!1,severity:"success",title:"",message:"This is a Snackbar!"}}),m={createBanner:(a,p,r,h)=>{n[a]&&o(L(g({},n),{[a]:void 0})),o(L(g({},n),{[a]:{open:!0,severity:p||"success",title:r||"",message:h||""}}))},openBanner:a=>{n[a]?o(L(g({},n),{[a]:L(g({},n[a]),{open:!0})})):console.error("Banner does'nt exist. Name: "+a)},closeBanner:a=>{o({main:{open:!0,severity:"warning",title:"\u05D4\u05D0\u05EA\u05E8 \u05D1\u05D1\u05E0\u05D9\u05D4",message:""},snackbar:{open:!1,severity:"success",title:"",message:"This is a Snackbar!"}}),n[a]?o(L(g({},n),{[a]:L(g({},n[a]),{open:!1})})):console.error("Banner does'nt exist. Name: "+a)}};return e(M.Provider,{value:g(g({},n),m),children:t.children})}const le=re({direction:"rtl",typography:{fontFamily:["Assistant","Roboto","sans-serif"].join(",")},palette:{primary:{main:"#CD5A91",light:"#ff8bc1",dark:"#AC4C7A"},secondary:{main:"#edf2ff",dark:"#737373",light:"#EBECF0"}}});function Qe(){const[t,n]=u.exports.useState(le.palette.primary.main);return e("div",{className:"wrapper",children:e(me,{children:e("meta",{name:"theme-color",content:t})})})}const V=P.createContext(void 0);function Xe(t){const[n,o]=u.exports.useState({fontSize:{sm:Number(localStorage.getItem("font_sm"))||15,md:Number(localStorage.getItem("font_md"))||25},colors:"pink"}),s=()=>{n.fontSize.md<60&&(o(L(g({},n),{fontSize:{sm:n.fontSize.sm+1,md:n.fontSize.md+1}})),l())},i=()=>{n.fontSize.sm>2&&(o(L(g({},n),{fontSize:{sm:n.fontSize.sm-1,md:n.fontSize.md-1}})),l())};function l(){localStorage.setItem("font_md",n.fontSize.md),localStorage.setItem("font_sm",n.fontSize.sm)}function m(){localStorage.setItem("colors_mode",n.colors)}function a(r){o(L(g({},n),{colors:r})),m()}const p={reduceFontSize:i,increaseFontSize:s,setColors:a};return e(V.Provider,{value:g(g({},n),p),children:t.children})}function et({className:t}){const n=u.exports.useContext(V);return e("div",{id:"",className:t,children:f(ge,{className:"button-group",children:[e(R,{"aria-label":"reduce",onClick:()=>{n.reduceFontSize()},children:e(fe,{fontSize:"small"})}),e(R,{className:"font-size-disabled",disabled:!0,children:"\u05D2\u05D5\u05D3\u05DC \u05D4\u05D8\u05E7\u05E1\u05D8"}),e(R,{"aria-label":"increase",onClick:()=>{n.increaseFontSize()},children:e(xe,{fontSize:"small"})})]})})}const tt=v(et)`
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

`,nt=[];function rt(){return e(se,{children:nt.map((t,n)=>e(q,{to:t.url,children:f(oe,{button:!0,children:[e(ie,{primary:t.name}),e(Ee,{children:e(ye,{})})]},t.name)},n))})}v(rt)`
  
`;const z=P.createContext(void 0);function st(t){const n=u.exports.useContext(H),o=u.exports.useContext(M),[s,i]=u.exports.useState(sessionStorage.getItem("currLines")&&sessionStorage.getItem("cuurSongTitle")||""),[l,m]=u.exports.useState(sessionStorage.getItem("currLines")||!1),[a,p]=u.exports.useState([]),[r,h]=u.exports.useState(JSON.parse(sessionStorage.getItem("currLines"))||[]),[x,S]=u.exports.useState(0),[T,I]=u.exports.useState(!1),B="https://musicline-backend.vercel.app",F=(E,d)=>{I(!0),n.openLoader("main"),fetch(`${B}/lyrics`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({currSong:E})}).then(c=>c.json()).then(c=>{if(n.closeLoader("main"),sessionStorage.removeItem("currLines"),c==null?void 0:c.lyrics){i(d);let D=c.lyrics,y=[];D.split(/(?:\r\n|\r|\n)/g).map(w=>{w.length>=2&&y.push({src:w.replace(".",""),trans:""})}),h(y),m(D),p(D.split(" "));let C=document.querySelector(".gsst_a");C&&C.dispatchEvent(new Event("click")),I(!0)}else o.createBanner("error","error","\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0, \u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1 \u05D0\u05D5 \u05D7\u05E4\u05E9 \u05E9\u05D9\u05E8 \u05D0\u05D7\u05E8","")}).catch(c=>{console.log("ERRORR "+c),console.log(c),n.closeLoader("main"),o.createBanner("error","error","\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0, \u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1 \u05D0\u05D5 \u05D7\u05E4\u05E9 \u05E9\u05D9\u05E8 \u05D0\u05D7\u05E8",""),I(!0)})},b=()=>{let E=!1;for(let d=0;d<r.length;d++){let c=r[d];if(E===!0)break;if(c.trans.length<=1||c.trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD..."){E=!0,window.location.origin.includes("github")?K(c.src,d):W(c.src,d);break}else continue}},ce=(E,d)=>{let c="";for(let D=d;D<r.length;D++){const y=r[D];if(c.length>=1600)break;y.trans==="   "&&(c+=y.src+" $. "),y.trans!="   "&&(c+=` ${D} ${y.src} . `)}fetch(`${B}/single-line-trans`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({line:encodeURI(c)})}).then(D=>D.json()).then(D=>{var y,C;if((D==null?void 0:D.trans.length)>=1){let w=r;D.trans.split(".").map(O=>{try{if(console.log(O),O.includes("$")||O.includes("["))w[d].trans="   ";else{let Y=Number(O.match(/\d+/)[0].replaceAll(".",""));w[Y].trans=O.replace(Y,"")}}catch{O.includes("$")&&(w[d].trans="   ")}d++}),h(w),((y=r[r.length-1])==null?void 0:y.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(r)),sessionStorage.setItem("cuurSongTitle",s)),S(x+1)}else r[d].trans===void 0&&(newLines[d]={src:E,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),r[d].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(newLines[d]={src:E,trans:"[missing]"}),h(newLines),((C=r[r.length-1])==null?void 0:C.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(r)),sessionStorage.setItem("cuurSongTitle",s)),S(x+1)}).catch(D=>{var w;let y=r;r[d].trans===""&&(y[d]={src:E,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),r[d].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(y[d]={src:E,trans:"[missing]"}),h(y),((w=r[r.length-1])==null?void 0:w.trans).length>=1&&sessionStorage.setItem("currLines",JSON.stringify(r)),S(x+1),console.log(D)})},W=(E,d)=>{fetch(`${B}/single-line-trans`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({line:encodeURI(E)})}).then(c=>c.json()).then(c=>{var D,y;if(c==null?void 0:c.trans){let C=r;C[d]={src:E,trans:c==null?void 0:c.trans},h(C),((D=r[r.length-1])==null?void 0:D.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(r)),sessionStorage.setItem("cuurSongTitle",s)),S(x+1)}else r[d].trans===void 0&&(newLines[d]={src:E,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),r[d].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(newLines[d]={src:E,trans:"[missing]"}),h(newLines),((y=r[r.length-1])==null?void 0:y.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(r)),sessionStorage.setItem("cuurSongTitle",s)),S(x+1)}).catch(c=>{var C;let D=r;r[d].trans===""&&(D[d]={src:E,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),r[d].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(D[d]={src:E,trans:"[missing]"}),h(D),((C=r[r.length-1])==null?void 0:C.trans).length>=1&&sessionStorage.setItem("currLines",JSON.stringify(r)),S(x+1),console.log(c)})},K=(E,d)=>{fetch(`${B}/line-trans`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({lines:r})}).then(c=>c.json()).then(c=>{var y,C;let D=r;(c==null?void 0:c.trans.length)?(c.trans.map((w,G)=>{D[G]={src:D[G].src,trans:w}}),h(D),sessionStorage.setItem("currLines",JSON.stringify(r)),sessionStorage.setItem("cuurSongTitle",s),S(x+1)):(c==null?void 0:c.trans)?(D[d]={src:E,trans:c==null?void 0:c.trans},h(D),((y=r[r.length-1])==null?void 0:y.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(r)),sessionStorage.setItem("cuurSongTitle",s)),S(x+1)):(r[d].trans===void 0&&(D[d]={src:E,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),r[d].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(D[d]={src:E,trans:"[missing]"}),h(D),((C=r[r.length-1])==null?void 0:C.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(r)),sessionStorage.setItem("cuurSongTitle",s)),S(x+1))}).catch(c=>{var C;let D=r;r[d].trans===""&&(D[d]={src:E,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),r[d].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(D[d]={src:E,trans:"[missing]"}),h(D),((C=r[r.length-1])==null?void 0:C.trans).length>=1&&sessionStorage.setItem("currLines",JSON.stringify(r)),S(x+1),console.log(c)})},de={getLines:F,getFullTrans:K,getPartlyTrans:ce,getSingleLineTrans:W,checkNextTrans:b};return e(z.Provider,{value:g({title:s,proccess:T,currLyrics:l,singles:a,lines:r,cou:x},de),children:t.children})}function ot({className:t}){return u.exports.useContext(z),e($,{className:t,sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:[].map(o=>e(q,{to:o.url,children:e(R,{sx:{my:2},children:o.name})},o.name))})}v(ot)`
  
`;function it({className:t}){return e("div",{id:"",className:t,children:e(Se,{children:e(Ce,{className:"mui-rounded-icon"})})})}v(it)`
  .mui-rounded-icon{
    background-color: white;
    color: ${t=>"#595959"};
    border-radius: 12px;
  }
`;const at=o=>{var s=o,{className:t}=s,n=A(s,["className"]);var r,h,x,S;u.exports.useContext(J);const i=u.exports.useContext(z),l=u.exports.useContext(M),[m,a]=u.exports.useState(!1),p=function(){sessionStorage.removeItem("currLines")};return u.exports.useEffect(()=>{var T;a(((T=l.error)==null?void 0:T.open)&&!0)},[(r=l.error)==null?void 0:r.open]),f(be,{position:"sticky",className:t,children:[e(ve,{maxWidth:"xl",children:f(we,{disableGutters:!0,children:[e(q,{to:"/",onClick:()=>{p()},children:e(k,{variant:"h6",noWrap:!0,component:"h1",sx:{mr:2,display:"flex"},children:"\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 \u05DC\u05D9\u05D9\u05DF"})}),i.lines[0]&&e(tt,{})]})}),e(Le,{in:(h=l.error)==null?void 0:h.open,children:f(U,{severity:"error",className:"error-alert",onClose:()=>{l.closeBanner("error")},children:[e(ae,{children:(x=l.error)==null?void 0:x.title}),(S=l.error)==null?void 0:S.message]})})]})},ut=v(at)`
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
`;function lt(o){var s=o,{className:t}=s,n=A(s,["className"]);return e("div",{className:t,children:n.children})}const ct=v(lt)`
  height: 100vh;
  height: fit-content;
  min-height: 700px;
  background-color: ${t=>t.theme.palette.primary.main};
`;function dt({className:t}){return e("div",{id:"FOOTER",className:t,children:e(N,{container:!0,rowSpacing:6,columnSpacing:2,children:e(N,{item:!0,xs:12,sm:4,children:f(se,{children:[e(Te,{variant:"h5",component:"h5",children:"\u05DC\u05D3\u05D9\u05D5\u05D5\u05D7 \u05E2\u05DC \u05EA\u05E7\u05DC\u05D5\u05EA:"}),e(oe,{children:e(ie,{primary:"musicline@mail.com"})})]})})})})}const pt=v(dt)`
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

`;function Dt(o){var s=o,{className:t}=s,n=A(s,["className"]);const i=u.exports.useContext(J);return e(Ne,{className:t,anchor:i.anchor,open:i.open,variant:i.permanent,onClose:()=>{i.closeDrawer(!1)},children:e($,{className:"drawer-layout",sx:{width:i.anchor==="top"||i.anchor==="bottom"?"auto":250},role:"presentation",onClick:()=>{i.closeDrawer(!1)},children:e(i.child,{})})})}const ht=v(Dt)`
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
`;function mt({className:t}){const[n,o]=u.exports.useState(!0),s=()=>{o(!1)};return f(Ae,{id:"main-modal-root",className:t,open:n,onClose:s,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",sx:{zIndex:1500},children:[e(ke,{id:"alert-dialog-title",children:"\u05D1\u05E8\u05D5\u05DA \u05D4\u05D1\u05D0 \u05DC\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 \u05DC\u05D9\u05D9\u05DF"}),e(ze,{children:e(Ie,{id:"alert-dialog-description",children:"Built with love using Vite build tool, React and Mui UI library."})}),e(Be,{children:e(R,{onClick:s,children:"Close"})})]})}v(mt)`
  
`;function gt(o){var s=o,{className:t}=s,n=A(s,["className"]);const[i,l]=u.exports.useState(!0);return e(Fe,{className:t,open:i,onClose:()=>{l(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:n.children})}v(gt)`
  #main-modal-root{
    z-index: 1500;
    background-color: #ffe607;
  }
`;function ft({className:t}){return e("div",{id:"",className:t})}const xt=v(ft)`
  visibility: hidden;
  height: 0px !important;
  width: 0px !important;
`;function Et({className:t}){const[n,o]=u.exports.useState(""),s=u.exports.useContext(z),i=u.exports.useContext(M);u.exports.useEffect(()=>{window.onload=()=>{const p=document.querySelectorAll("#___gcse_0 .gsc-results-wrapper-nooverlay")[0],r={childList:!1,attributes:!0,subtree:!1};function h(){m()}new MutationObserver(h).observe(p,r)}},[]),u.exports.useEffect(()=>{o(s.title)},[s.title]);function l(p){o(p.target.value),a(p)}const m=()=>{setTimeout(()=>{let p=document.querySelectorAll(".gs-title");document.querySelectorAll(".gsc-adBlock").forEach(h=>{h.parentNode.appendChild(h)}),p&&p.forEach((h,x)=>{if(h.innerText.includes("Lyrics")){let S=h.innerText.replace("Lyrics | Musixmatch"," ");h.innerText=S;const T={artistName:encodeURI(S.split("-")[0]),songName:encodeURI(S.split("-")[1])};h.addEventListener("click",I=>{s.proccess||(i.closeBanner("error"),s.getLines(T,S))})}else h.innerText.includes("Lyrics")||h.parentElement.parentElement.parentElement.className.includes("gsc-webResult")&&h.parentElement.parentElement.parentElement.remove()})},50)};function a(p){i.error&&i.closeBanner("error");let r=document.querySelector("#gsc-i-id1"),h=/^[~`!@#$%^&*()_+=[\]\{}|;':",.\/<>?a-zA-Z0-9- ]+$/;if(r)if(p.target.value.length<=1){let x=document.querySelector(".gsst_a");x&&x.dispatchEvent(new Event("click"))}else if(h.test(p.target.value)){r.value=p.target.value;let x=document.querySelectorAll(".gsc-search-box button")[0];x?setTimeout(()=>{x.dispatchEvent(new Event("click"))},50*Math.floor(Math.random()*4)):(i.createBanner("error","error","\u05DE\u05E9\u05D4\u05D5 \u05D4\u05E9\u05EA\u05D1\u05E9, \u05E0\u05E1\u05D4 \u05DC\u05E8\u05E2\u05E0\u05DF \u05D0\u05EA \u05D4\u05E2\u05DE\u05D5\u05D3","(no gsc loaded)"),console.error("no gsc loaded, try reload the page"))}else{i.createBanner("error","error","\u05D4\u05D6\u05DF \u05D0\u05E0\u05D2\u05DC\u05D9\u05EA \u05D1\u05DC\u05D1\u05D3","");return}else i.createBanner("error","error","\u05DE\u05E9\u05D4\u05D5 \u05D4\u05E9\u05EA\u05D1\u05E9, \u05E0\u05E1\u05D4 \u05DC\u05E8\u05E2\u05E0\u05DF \u05D0\u05EA \u05D4\u05E2\u05DE\u05D5\u05D3","(no gsc loaded)"),console.error("no gsc loaded, try reload the page")}return f("div",{id:"",className:t,children:[e(Oe,{id:"outlined-search",label:"\u05D7\u05E4\u05E9 \u05E9\u05D9\u05E8",type:"search",className:"main-input",onChange:l,autoFocus:!1,autoComplete:"off",value:n}),e("div",{className:"gcse-search"})]})}const te=v(Et)`

  *,::before,::after{
      background-color: '#ffffff0';
  }

  input, fieldset, label{
   color: white !important;
   border-color: white !important;
  }

`;function yt(o){var s=o,{className:t}=s,n=A(s,["className"]);const i=u.exports.useContext(z),[l,m]=u.exports.useState(!1),[a,p]=u.exports.useState(5e4),[r,h]=u.exports.useState([]);u.exports.useEffect(()=>{var b;((b=i.lines[i.lines.length-1])==null?void 0:b.trans).length>=1&&p(0)},[i.lines]);const x=()=>{var b;((b=i.lines[i.lines.length-1])==null?void 0:b.trans).length>=1&&(m(!0),T())},S=()=>{m(!1)},T=u.exports.useCallback(()=>{I()},[]);function I(){fetch("https://musicline-backend.vercel.app/single-trans",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({single:encodeURI(n.lyric)})}).then(b=>b.json()).then(b=>{(b==null?void 0:b.results[0])?h(b.results):h(["\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0"])}).catch(b=>{console.log(b)})}const B=()=>r[1]?r.map((F,b)=>f(_,{children:[b>0&&e("hr",{}),e("p",{className:"tt-p",children:F})]})):e("p",{className:"tt-p",children:"\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0"});return e(Pe,{onClickAway:S,children:e(Me,{className:t,title:f(_,{children:[e(k,{color:"inherit",children:" \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD:"}),e("div",{className:"tt-body",style:{textAlign:"center",maxHeight:"110px",overflowY:"auto",direction:"ltr"},children:r[0]?e(B,{}):e(ue,{sx:{margin:"8px"},color:"primary"})})]}),arrow:!0,enterDelay:a,enterTouchDelay:a,leaveTouchDelay:60*1e3,leaveDelay:0,onOpen:()=>{T()},PopperProps:{disablePortal:!1},onClose:S,open:l,disableFocusListener:!0,disableTouchListener:!0,disableHoverListener:!0,children:f("p",{className:"single-lyric",onClick:x,children:["\xA0 ",n.lyric," "]})})})}const ne=v(yt)`

`;function St(o){var s=o,{className:t}=s,n=A(s,["className"]);const i=u.exports.useContext(z);return u.exports.useContext(M),u.exports.useContext(H),u.exports.useEffect(()=>{i.checkNextTrans()},[i.cou]),e($,{children:e(N,{container:!0,spacing:2,children:i.lines&&f("div",{id:"lyrics_body",className:t,children:[e(k,{variant:"h6",noWrap:!0,component:"h3",children:i.title&&i.title.split(" ").map((l,m)=>e(ne,{lyric:l},m))}),i.lines.map((l,m)=>{var a;return l.src.includes("[")&&(l.trans="   "),f("div",{children:[m>0&&l.src.includes("[")&&f(_,{children:[e("br",{}),e("br",{})]}),e(N,{className:"lyrics-line en-line",item:!0,children:l.src.split(" ").map((p,r)=>e(ne,{lyric:p},r))},m.toString()+Math.floor(Math.random()*3e4)),e(N,{item:!0,className:"lyrics-line he-line",children:e(_,{children:((a=l.trans)==null?void 0:a.length)>2?l.trans.split(" ").map((p,r)=>{if(l.trans!=="   ")return f("small",{onLoad:()=>{i.checkNextTrans()},className:"single-trans",children:[p," \xA0"]},r)}):e("small",{className:"single-trans",children:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD..."})})},m.toString()+Math.floor(Math.random()*3e4))]})})]})})})}const Ct=v(St)`
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

`;function bt({className:t}){const n=u.exports.useContext(z),o=u.exports.useContext(V);u.exports.useEffect(()=>{},[o]);function s(i){i.preventDefault()}return f("div",{className:t,children:[e("div",{className:"home-top",children:!n.currLyrics&&f(N,{container:!0,className:"home-t-container",children:[e(N,{item:!0,xs:12,sm:6,children:f(k,{variant:"h2",className:"page-h2",children:["\u05E9\u05D9\u05E8\u05D9\u05DD \u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05DD",e("br",{}),"\u05E9\u05D5\u05E8\u05D4 \u05D1\u05E9\u05D5\u05E8\u05D4"]})}),f(N,{item:!0,xs:12,sm:6,children:[f(k,{variant:"h3",className:"page-h3",children:[e("span",{className:"h3-start h3-s-one",children:"\u05D7\u05E4\u05E9 \u05D1\u05D9\u05DF \u05DE\u05D9\u05DC\u05D9\u05D5\u05E0\u05D9 \u05E9\u05D9\u05E8\u05D9\u05DD \u05D1\u05D0\u05E0\u05D2\u05DC\u05D9\u05EA"}),e("br",{}),e("span",{className:"h3-start h3-s-two",children:"\u05D5\u05E7\u05D1\u05DC \u05D0\u05EA \u05D4\u05E9\u05D9\u05E8 \u05DE\u05EA\u05D5\u05E8\u05D2\u05DD \u05DC\u05E2\u05D1\u05E8\u05D9\u05EA"}),e("br",{}),e("p",{className:"small-one",children:"\u05DC\u05D0 \u05DE\u05E6\u05D0\u05EA? \u05E0\u05E1\u05D4 \u05DC\u05D7\u05E4\u05E9 \u05E2\u05DD \u05E9\u05DD \u05D4\u05D0\u05DE\u05DF"}),e("div",{className:"small-two",children:e("small",{children:"\u05DC\u05D7\u05D9\u05E6\u05D4 \u05E2\u05DC \u05DE\u05D9\u05DC\u05D4 \u05EA\u05E6\u05D9\u05D2 \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD"})})]}),e($,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:s,children:e(te,{})})]})]})}),n.currLyrics&&e($,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:s,className:"second-search-ctr",children:e(te,{})}),n.currLyrics&&e(Ct,{className:"lyrics-body",fontSize:o.fontSize})]})}const vt=v(bt)`
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
    
`;function wt({className:t}){return f("div",{id:"NO_MATCH_WRAPPER",className:t,children:[e(k,{variant:"h2",className:"page-h2",children:"404"}),e(k,{variant:"h3",className:"page-h3",children:"Nothing Here"})]})}const Lt=v(wt)`

`;function Tt({className:t}){const n=u.exports.useContext(J),o=u.exports.useContext(H),s=u.exports.useContext(M);u.exports.useRef(null);const i=Re({key:"muirtl",stylisPlugins:[Ge,Ue]});function l(){m()}const m=()=>{const p=document.createElement("script");p.type="text/javascript",p.src="https://cse.google.com/cse.js?cx=a85c2374ffc8b8898",p.defer=!0,document.body.appendChild(p)};u.exports.useEffect(()=>{l()},[s]);const a=p=>{s.closeBanner(p)};return re({palette:{mode:"dark"}}),f("div",{className:t,children:[e($e,{value:i,children:f(_e,{children:[e(Qe,{}),e(ut,{className:"header"}),s.click_ad.open&&f(U,{severity:"warning",className:"main-alert",children:[e(ae,{children:s.click_ad.title}),s.click_ad.message]}),e(ct,{children:f(je,{children:[e(ee,{path:"/",element:e(vt,{className:"page"})}),e(ee,{path:"*",element:e(Lt,{className:"page"})})]})}),n.open&&n.child&&e(ht,{className:"drawer"}),o.main.open&&e(ue,{color:o.main.color||"primary"}),o.circular.open&&e(Je,{color:o.main.color||"primary"}),s.snackbar.open&&e(He,{open:s.snackbar.open,autoHideDuration:6e3,onClose:()=>{},children:e(U,{onClose:()=>{a("snackbar")},severity:s.snackbar.severity,sx:{width:"100%"},children:s.snackbar.message})}),e(pt,{})]})}),e(xt,{})]})}const Nt=v(Tt)`
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

    @media (min-width: 600px) {
      letter-spacing: 0.5px;
      word-spacing: 0.5px;
    }
  }

  .loader{
      padding: 20px;
  }
`,At=[Xe,Ke,Ze,Ye,st];function kt(t){return e(_,{children:At.reduceRight((n,o)=>e(o,{children:n}),t.children)})}qe.render(e(P.StrictMode,{children:e(kt,{children:e(Ve,{theme:le,children:e(Nt,{className:"app"})})})}),document.getElementById("root"));
