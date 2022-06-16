var le=Object.defineProperty,ce=Object.defineProperties;var de=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var Y=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var K=(t,r,o)=>r in t?le(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o,D=(t,r)=>{for(var o in r||(r={}))Y.call(r,o)&&K(t,o,r[o]);if(_)for(var o of _(r))Z.call(r,o)&&K(t,o,r[o]);return t},b=(t,r)=>ce(t,de(r));var k=(t,r)=>{var o={};for(var n in t)Y.call(t,n)&&r.indexOf(n)<0&&(o[n]=t[n]);if(t!=null&&_)for(var n of _(t))r.indexOf(n)<0&&Z.call(t,n)&&(o[n]=t[n]);return o};import{R as I,r as u,j as e,c as te,M as pe,a as f,B as he,b as R,d as me,A as De,s as S,L as re,N as G,e as ne,f as oe,g as fe,h as ge,i as O,I as xe,k as Ee,l as ye,C as Ce,T as Se,m as A,n as be,o as J,p as se,G as N,q as ve,t as we,u as Le,D as Ne,v as Te,w as ke,x as Ae,y as ze,z as Be,E as Fe,F as Ie,H as $,J as ie,K as Pe,O as Me,P as Re,Q as Oe,S as Q,U as $e,V as _e,W as je,X as He,Y as Je,Z as Ge}from"./vendor.47ea073b.js";const qe=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&n(h)}).observe(document,{childList:!0,subtree:!0});function o(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerpolicy&&(l.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?l.credentials="include":s.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(s){if(s.ep)return;s.ep=!0;const l=o(s);fetch(s.href,l)}};qe();const j=I.createContext(void 0);function Ue(t){const[r,o]=u.exports.useState({}),l={openDrawer:(h,a,d="temporary",i)=>{o({open:h,anchor:a,permanent:d,child:i})},closeDrawer:(h,a,d="temporary",i)=>{o({open:h,anchor:a,permanent:d,child:i})}};return e(j.Provider,{value:D(D({},r),l),children:t.children})}const H=I.createContext(void 0);function Ve(t){const[r,o]=u.exports.useState({main:{open:!1,color:"primary"},circular:{open:!1,color:"primary"}}),h={createLoader:(a,d)=>{r[a]&&o(b(D({},r),{[a]:void 0})),o(b(D({},r),{[a]:{open:!1,color:d||"primary"}}))},openLoader:a=>{r[a]?o(b(D({},r),{[a]:b(D({},r[a]),{open:!0})})):console.error("Loader does'nt exist. Name: "+a)},closeLoader:a=>{r[a]?o(b(D({},r),{[a]:b(D({},r[a]),{open:!1})})):console.error("Loader does'nt exist. Name: "+a)}};return e(H.Provider,{value:D(D({},r),h),children:t.children})}const P=I.createContext(void 0);function We(t){const[r,o]=u.exports.useState({main:{open:!0,severity:"warning",title:"\u05D4\u05D0\u05EA\u05E8 \u05D1\u05D1\u05E0\u05D9\u05D4",message:""},snackbar:{open:!1,severity:"success",title:"",message:"This is a Snackbar!"}}),h={createBanner:(a,d,i,p)=>{r[a]&&o(b(D({},r),{[a]:void 0})),o(b(D({},r),{[a]:{open:!0,severity:d||"success",title:i||"",message:p||""}}))},openBanner:a=>{r[a]?o(b(D({},r),{[a]:b(D({},r[a]),{open:!0})})):console.error("Banner does'nt exist. Name: "+a)},closeBanner:a=>{o({main:{open:!0,severity:"warning",title:"\u05D4\u05D0\u05EA\u05E8 \u05D1\u05D1\u05E0\u05D9\u05D4",message:""},snackbar:{open:!1,severity:"success",title:"",message:"This is a Snackbar!"}}),r[a]?o(b(D({},r),{[a]:b(D({},r[a]),{open:!1})})):console.error("Banner does'nt exist. Name: "+a)}};return e(P.Provider,{value:D(D({},r),h),children:t.children})}const ae=te({direction:"rtl",typography:{fontFamily:["Assistant","Roboto","sans-serif"].join(",")},palette:{primary:{main:"#CD5A91",light:"#ff8bc1",dark:"#AC4C7A"},secondary:{main:"#edf2ff",dark:"#737373",light:"#EBECF0"}}});function Ke(){const[t,r]=u.exports.useState(ae.palette.primary.main);return e("div",{className:"wrapper",children:e(pe,{children:e("meta",{name:"theme-color",content:t})})})}const q=I.createContext(void 0);function Ye(t){const[r,o]=u.exports.useState({fontSize:{sm:Number(localStorage.getItem("font_sm"))||15,md:Number(localStorage.getItem("font_md"))||25},colors:"pink"}),n=()=>{r.fontSize.md<60&&(o(b(D({},r),{fontSize:{sm:r.fontSize.sm+1,md:r.fontSize.md+1}})),l())},s=()=>{r.fontSize.sm>2&&(o(b(D({},r),{fontSize:{sm:r.fontSize.sm-1,md:r.fontSize.md-1}})),l())};function l(){localStorage.setItem("font_md",r.fontSize.md),localStorage.setItem("font_sm",r.fontSize.sm)}function h(){localStorage.setItem("colors_mode",r.colors)}function a(i){o(b(D({},r),{colors:i})),h()}const d={reduceFontSize:s,increaseFontSize:n,setColors:a};return e(q.Provider,{value:D(D({},r),d),children:t.children})}function Ze({className:t}){const r=u.exports.useContext(q);return e("div",{id:"",className:t,children:f(he,{className:"button-group",children:[e(R,{"aria-label":"reduce",onClick:()=>{r.reduceFontSize()},children:e(me,{fontSize:"small"})}),e(R,{className:"font-size-disabled",disabled:!0,children:"\u05D2\u05D5\u05D3\u05DC \u05D4\u05D8\u05E7\u05E1\u05D8"}),e(R,{"aria-label":"increase",onClick:()=>{r.increaseFontSize()},children:e(De,{fontSize:"small"})})]})})}const Qe=S(Ze)`
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

`,Xe=[];function et(){return e(re,{children:Xe.map((t,r)=>e(G,{to:t.url,children:f(ne,{button:!0,children:[e(oe,{primary:t.name}),e(fe,{children:e(ge,{})})]},t.name)},r))})}S(et)`
  
`;const z=I.createContext(void 0);function tt(t){const r=u.exports.useContext(H),o=u.exports.useContext(P),[n,s]=u.exports.useState(sessionStorage.getItem("currLines")&&sessionStorage.getItem("cuurSongTitle")||""),[l,h]=u.exports.useState(sessionStorage.getItem("currLines")||!1),[a,d]=u.exports.useState([]),[i,p]=u.exports.useState(JSON.parse(sessionStorage.getItem("currLines"))||[]),[x,E]=u.exports.useState(0),[L,B]=u.exports.useState(!1),M="https://musicline-backend.vercel.app",F=(C,m)=>{B(!0),r.openLoader("main"),fetch(`${M}/lyrics`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({currSong:C})}).then(c=>c.json()).then(c=>{if(r.closeLoader("main"),sessionStorage.removeItem("currLines"),c==null?void 0:c.lyrics){s(m);let g=c.lyrics,w=[];g.split(/(?:\r\n|\r|\n)/g).map(T=>{T.length>=2&&w.push({src:T,trans:""})}),p(w),h(g),d(g.split(" "));let v=document.querySelector(".gsst_a");v&&v.dispatchEvent(new Event("click")),B(!0)}else o.createBanner("error","error","\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0, \u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1 \u05D0\u05D5 \u05D7\u05E4\u05E9 \u05E9\u05D9\u05E8 \u05D0\u05D7\u05E8","")}).catch(c=>{console.log("ERRORR "+c),console.log(c),r.closeLoader("main"),o.createBanner("error","error","\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0, \u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1 \u05D0\u05D5 \u05D7\u05E4\u05E9 \u05E9\u05D9\u05E8 \u05D0\u05D7\u05E8",""),B(!0)})},y=()=>{let C=!1;for(let m=0;m<i.length;m++){let c=i[m];if(C===!0)break;if(c.trans.length<=1||c.trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."){C=!0,window.location.origin.includes("github")?V(c.src,m):U(c.src,m);break}else continue}},U=(C,m)=>{fetch(`${M}/single-line-trans`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({line:encodeURI(C)})}).then(c=>c.json()).then(c=>{var g,w;if(c==null?void 0:c.trans){let v=i;console.log(c),v[m]={src:C,trans:c==null?void 0:c.trans},p(v),((g=i[i.length-1])==null?void 0:g.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(i)),sessionStorage.setItem("cuurSongTitle",n)),E(x+1)}else i[m].trans===void 0&&(newLines[m]={src:C,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),i[m].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(newLines[m]={src:C,trans:"[missing]"}),p(newLines),((w=i[i.length-1])==null?void 0:w.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(i)),sessionStorage.setItem("cuurSongTitle",n)),E(x+1)}).catch(c=>{var v;let g=i;i[m].trans===""&&(g[m]={src:C,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),i[m].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(g[m]={src:C,trans:"[missing]"}),p(g),((v=i[i.length-1])==null?void 0:v.trans).length>=1&&sessionStorage.setItem("currLines",JSON.stringify(i)),E(x+1),console.log(c)})},V=(C,m)=>{fetch(`${M}/line-trans`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({lines:i})}).then(c=>c.json()).then(c=>{var w,v;let g=i;(c==null?void 0:c.trans.length)?(c.trans.map((T,W)=>{g[W]={src:g[W].src,trans:T}}),p(g),sessionStorage.setItem("currLines",JSON.stringify(i)),sessionStorage.setItem("cuurSongTitle",n),E(x+1)):(c==null?void 0:c.trans)?(g[m]={src:C,trans:c==null?void 0:c.trans},p(g),((w=i[i.length-1])==null?void 0:w.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(i)),sessionStorage.setItem("cuurSongTitle",n)),E(x+1)):(i[m].trans===void 0&&(g[m]={src:C,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),i[m].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(g[m]={src:C,trans:"[missing]"}),p(g),((v=i[i.length-1])==null?void 0:v.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(i)),sessionStorage.setItem("cuurSongTitle",n)),E(x+1))}).catch(c=>{var v;let g=i;i[m].trans===""&&(g[m]={src:C,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),i[m].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(g[m]={src:C,trans:"[missing]"}),p(g),((v=i[i.length-1])==null?void 0:v.trans).length>=1&&sessionStorage.setItem("currLines",JSON.stringify(i)),E(x+1),console.log(c)})},ue={getLines:F,getFullTrans:V,getPartlyTrans:U,checkNextTrans:y};return e(z.Provider,{value:D({title:n,proccess:L,currLyrics:l,singles:a,lines:i,cou:x},ue),children:t.children})}function rt({className:t}){return u.exports.useContext(z),e(O,{className:t,sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:[].map(o=>e(G,{to:o.url,children:e(R,{sx:{my:2},children:o.name})},o.name))})}S(rt)`
  
`;function nt({className:t}){return e("div",{id:"",className:t,children:e(xe,{children:e(Ee,{className:"mui-rounded-icon"})})})}S(nt)`
  .mui-rounded-icon{
    background-color: white;
    color: ${t=>"#595959"};
    border-radius: 12px;
  }
`;const ot=o=>{var n=o,{className:t}=n,r=k(n,["className"]);var i,p,x,E;u.exports.useContext(j);const s=u.exports.useContext(z),l=u.exports.useContext(P),[h,a]=u.exports.useState(!1),d=function(){sessionStorage.removeItem("currLines")};return u.exports.useEffect(()=>{var L;a(((L=l.error)==null?void 0:L.open)&&!0)},[(i=l.error)==null?void 0:i.open]),f(ye,{position:"sticky",className:t,children:[e(Ce,{maxWidth:"xl",children:f(Se,{disableGutters:!0,children:[e(G,{to:"/",onClick:()=>{d()},children:e(A,{variant:"h6",noWrap:!0,component:"h1",sx:{mr:2,display:"flex"},children:"\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 \u05DC\u05D9\u05D9\u05DF"})}),s.lines[0]&&e(Qe,{})]})}),e(be,{in:(p=l.error)==null?void 0:p.open,children:f(J,{severity:"error",className:"error-alert",onClose:()=>{l.closeBanner("error")},children:[e(se,{children:(x=l.error)==null?void 0:x.title}),(E=l.error)==null?void 0:E.message]})})]})},st=S(ot)`
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
`;function it(o){var n=o,{className:t}=n,r=k(n,["className"]);return e("div",{className:t,children:r.children})}const at=S(it)`
  height: 100vh;
  height: fit-content;
  min-height: 700px;
  background-color: ${t=>t.theme.palette.primary.main};
`;function ut({className:t}){return e("div",{id:"FOOTER",className:t,children:e(N,{container:!0,rowSpacing:6,columnSpacing:2,children:e(N,{item:!0,xs:12,sm:4,children:f(re,{children:[e(ve,{variant:"h5",component:"h5",children:"\u05DC\u05D3\u05D9\u05D5\u05D5\u05D7 \u05E2\u05DC \u05EA\u05E7\u05DC\u05D5\u05EA:"}),e(ne,{children:e(oe,{primary:"musicline@mail.com"})})]})})})})}const lt=S(ut)`
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

`;function ct(o){var n=o,{className:t}=n,r=k(n,["className"]);const s=u.exports.useContext(j);return e(we,{className:t,anchor:s.anchor,open:s.open,variant:s.permanent,onClose:()=>{s.closeDrawer(!1)},children:e(O,{className:"drawer-layout",sx:{width:s.anchor==="top"||s.anchor==="bottom"?"auto":250},role:"presentation",onClick:()=>{s.closeDrawer(!1)},children:e(s.child,{})})})}const dt=S(ct)`
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
`;function pt({className:t}){const[r,o]=u.exports.useState(!0),n=()=>{o(!1)};return f(Le,{id:"main-modal-root",className:t,open:r,onClose:n,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",sx:{zIndex:1500},children:[e(Ne,{id:"alert-dialog-title",children:"\u05D1\u05E8\u05D5\u05DA \u05D4\u05D1\u05D0 \u05DC\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 \u05DC\u05D9\u05D9\u05DF"}),e(Te,{children:e(ke,{id:"alert-dialog-description",children:"Built with love using Vite build tool, React and Mui UI library."})}),e(Ae,{children:e(R,{onClick:n,children:"Close"})})]})}S(pt)`
  
`;function ht(o){var n=o,{className:t}=n,r=k(n,["className"]);const[s,l]=u.exports.useState(!0);return e(ze,{className:t,open:s,onClose:()=>{l(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:r.children})}S(ht)`
  #main-modal-root{
    z-index: 1500;
    background-color: #ffe607;
  }
`;function mt({className:t}){return e("div",{id:"",className:t})}const Dt=S(mt)`
  visibility: hidden;
  height: 0px !important;
  width: 0px !important;
`;function ft({className:t}){const[r,o]=u.exports.useState(""),n=u.exports.useContext(z),s=u.exports.useContext(P);u.exports.useEffect(()=>{window.onload=()=>{const d=document.querySelectorAll("#___gcse_0 .gsc-results-wrapper-nooverlay")[0],i={childList:!1,attributes:!0,subtree:!1};function p(){h()}new MutationObserver(p).observe(d,i)}},[]),u.exports.useEffect(()=>{o(n.title)},[n.title]);function l(d){o(d.target.value),a(d)}const h=()=>{setTimeout(()=>{let d=document.querySelectorAll(".gs-title");document.querySelectorAll(".gsc-adBlock").forEach(p=>{p.parentNode.appendChild(p)}),d&&d.forEach((p,x)=>{if(p.innerText.includes("Lyrics")){let E=p.innerText.replace("Lyrics | Musixmatch"," ");p.innerText=E;const L={artistName:encodeURI(E.split("-")[0]),songName:encodeURI(E.split("-")[1])};p.addEventListener("click",B=>{n.proccess||(s.closeBanner("error"),n.getLines(L,E))})}else p.innerText.includes("Lyrics")||p.parentElement.parentElement.parentElement.className.includes("gsc-webResult")&&p.parentElement.parentElement.parentElement.remove()})},50)};function a(d){s.error&&s.closeBanner("error");let i=document.querySelector("#gsc-i-id1"),p=/^[~`!@#$%^&*()_+=[\]\{}|;':",.\/<>?a-zA-Z0-9- ]+$/;if(i)if(d.target.value.length<=1){let x=document.querySelector(".gsst_a");x&&x.dispatchEvent(new Event("click"))}else if(p.test(d.target.value)){i.value=d.target.value;let x=document.querySelectorAll(".gsc-search-box button")[0];x?setTimeout(()=>{x.dispatchEvent(new Event("click"))},50*Math.floor(Math.random()*4)):(s.createBanner("error","error","\u05DE\u05E9\u05D4\u05D5 \u05D4\u05E9\u05EA\u05D1\u05E9, \u05E0\u05E1\u05D4 \u05DC\u05E8\u05E2\u05E0\u05DF \u05D0\u05EA \u05D4\u05E2\u05DE\u05D5\u05D3","(no gsc loaded)"),console.error("no gsc loaded, try reload the page"))}else{s.createBanner("error","error","\u05D4\u05D6\u05DF \u05D0\u05E0\u05D2\u05DC\u05D9\u05EA \u05D1\u05DC\u05D1\u05D3","");return}else s.createBanner("error","error","\u05DE\u05E9\u05D4\u05D5 \u05D4\u05E9\u05EA\u05D1\u05E9, \u05E0\u05E1\u05D4 \u05DC\u05E8\u05E2\u05E0\u05DF \u05D0\u05EA \u05D4\u05E2\u05DE\u05D5\u05D3","(no gsc loaded)"),console.error("no gsc loaded, try reload the page")}return f("div",{id:"",className:t,children:[e(Be,{id:"outlined-search",label:"\u05D7\u05E4\u05E9 \u05E9\u05D9\u05E8",type:"search",className:"main-input",onChange:l,autoFocus:!1,autoComplete:"off",value:r}),e("div",{className:"gcse-search"})]})}const X=S(ft)`

  *,::before,::after{
      background-color: '#ffffff0';
  }

  input, fieldset, label{
   color: white !important;
   border-color: white !important;
  }

`;function gt(o){var n=o,{className:t}=n,r=k(n,["className"]);const s=u.exports.useContext(z),[l,h]=u.exports.useState(!1),[a,d]=u.exports.useState(5e4),[i,p]=u.exports.useState([]);u.exports.useEffect(()=>{var y;((y=s.lines[s.lines.length-1])==null?void 0:y.trans).length>=1&&d(0)},[s.lines]);const x=()=>{var y;((y=s.lines[s.lines.length-1])==null?void 0:y.trans).length>=1&&(h(!0),L())},E=()=>{h(!1)},L=u.exports.useCallback(()=>{B()},[]);function B(){fetch("https://musicline-backend.vercel.app/single-trans",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({single:encodeURI(r.lyric)})}).then(y=>y.json()).then(y=>{(y==null?void 0:y.results[0])?p(y.results):p(["\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0"])}).catch(y=>{console.log(y)})}const M=()=>i[1]?i.map((F,y)=>f($,{children:[y>0&&e("hr",{}),e("p",{className:"tt-p",children:F})]})):e("p",{className:"tt-p",children:"\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0"});return e(Fe,{onClickAway:E,children:e(Ie,{className:t,title:f($,{children:[e(A,{color:"inherit",children:" \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD:"}),e("div",{className:"tt-body",style:{textAlign:"center",maxHeight:"110px",overflowY:"auto",direction:"ltr"},children:i[0]?e(M,{}):e(ie,{sx:{margin:"8px"},color:"primary"})})]}),arrow:!0,enterDelay:a,enterTouchDelay:a,leaveTouchDelay:60*1e3,leaveDelay:0,onOpen:()=>{L()},PopperProps:{disablePortal:!1},onClose:E,open:l,disableFocusListener:!0,disableTouchListener:!0,disableHoverListener:!0,children:f("p",{className:"single-lyric",onClick:x,children:["\xA0 ",r.lyric," "]})})})}const ee=S(gt)`

`;function xt(o){var n=o,{className:t}=n,r=k(n,["className"]);const s=u.exports.useContext(z);return u.exports.useContext(P),u.exports.useContext(H),u.exports.useEffect(()=>{s.checkNextTrans()},[s.cou]),e(O,{children:e(N,{container:!0,spacing:2,children:s.lines&&f("div",{id:"lyrics_body",className:t,children:[e(A,{variant:"h6",noWrap:!0,component:"h3",children:s.title&&s.title.split(" ").map((l,h)=>e(ee,{lyric:l},h))}),s.lines.map((l,h)=>{var a;return l.src.includes("[")&&(l.trans="   "),f("div",{children:[h>0&&l.src.includes("[")&&f($,{children:[e("br",{}),e("br",{})]}),e(N,{className:"lyrics-line en-line",item:!0,children:l.src.split(" ").map((d,i)=>e(ee,{lyric:d},i))},h.toString()+Math.floor(Math.random()*3e4)),e(N,{item:!0,className:"lyrics-line he-line",children:e($,{children:((a=l.trans)==null?void 0:a.length)>2?l.trans.split(" ").map((d,i)=>{if(l.trans!=="   ")return f("small",{onLoad:()=>{s.checkNextTrans()},className:"single-trans",children:[d," \xA0"]},i)}):e("small",{className:"single-trans",children:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD..."})})},h.toString()+Math.floor(Math.random()*3e4))]})})]})})})}const Et=S(xt)`
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

`;function yt({className:t}){const r=u.exports.useContext(z),o=u.exports.useContext(q);u.exports.useEffect(()=>{},[o]);function n(s){s.preventDefault()}return f("div",{className:t,children:[e("div",{className:"home-top",children:!r.currLyrics&&f(N,{container:!0,className:"home-t-container",children:[e(N,{item:!0,xs:12,sm:6,children:f(A,{variant:"h2",className:"page-h2",children:["\u05E9\u05D9\u05E8\u05D9\u05DD \u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05DD",e("br",{}),"\u05E9\u05D5\u05E8\u05D4 \u05D1\u05E9\u05D5\u05E8\u05D4"]})}),f(N,{item:!0,xs:12,sm:6,children:[f(A,{variant:"h3",className:"page-h3",children:[e("span",{className:"h3-start h3-s-one",children:"\u05D7\u05E4\u05E9 \u05D1\u05D9\u05DF \u05DE\u05D9\u05DC\u05D9\u05D5\u05E0\u05D9 \u05E9\u05D9\u05E8\u05D9\u05DD \u05D1\u05D0\u05E0\u05D2\u05DC\u05D9\u05EA"}),e("br",{}),e("span",{className:"h3-start h3-s-two",children:"\u05D5\u05E7\u05D1\u05DC \u05D0\u05EA \u05D4\u05E9\u05D9\u05E8 \u05DE\u05EA\u05D5\u05E8\u05D2\u05DD \u05DC\u05E2\u05D1\u05E8\u05D9\u05EA"}),e("br",{}),e("p",{className:"small-one",children:"\u05DC\u05D0 \u05DE\u05E6\u05D0\u05EA? \u05E0\u05E1\u05D4 \u05DC\u05D7\u05E4\u05E9 \u05E2\u05DD \u05E9\u05DD \u05D4\u05D0\u05DE\u05DF"}),e("div",{className:"small-two",children:e("small",{children:"\u05DC\u05D7\u05D9\u05E6\u05D4 \u05E2\u05DC \u05DE\u05D9\u05DC\u05D4 \u05EA\u05E6\u05D9\u05D2 \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD"})})]}),e(O,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:n,children:e(X,{})})]})]})}),r.currLyrics&&e(O,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:n,className:"second-search-ctr",children:e(X,{})}),r.currLyrics&&e(Et,{className:"lyrics-body",fontSize:o.fontSize})]})}const Ct=S(yt)`
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
    
`;function St({className:t}){return f("div",{id:"NO_MATCH_WRAPPER",className:t,children:[e(A,{variant:"h2",className:"page-h2",children:"404"}),e(A,{variant:"h3",className:"page-h3",children:"Nothing Here"})]})}const bt=S(St)`

`;function vt({className:t}){const r=u.exports.useContext(j),o=u.exports.useContext(H),n=u.exports.useContext(P);u.exports.useRef(null);const s=Pe({key:"muirtl",stylisPlugins:[je,He]});function l(){h()}const h=()=>{const d=document.createElement("script");d.type="text/javascript",d.src="https://cse.google.com/cse.js?cx=a85c2374ffc8b8898",d.defer=!0,document.body.appendChild(d)};u.exports.useEffect(()=>{l()},[n]);const a=d=>{n.closeBanner(d)};return te({palette:{mode:"dark"}}),f("div",{className:t,children:[e(Me,{value:s,children:f(Re,{children:[e(Ke,{}),e(st,{className:"header"}),n.main.open&&f(J,{severity:"warning",className:"main-alert",children:[e(se,{children:n.main.title}),n.main.message]}),e(at,{children:f(Oe,{children:[e(Q,{path:"/",element:e(Ct,{className:"page"})}),e(Q,{path:"*",element:e(bt,{className:"page"})})]})}),r.open&&r.child&&e(dt,{className:"drawer"}),o.main.open&&e(ie,{color:o.main.color||"primary"}),o.circular.open&&e($e,{color:o.main.color||"primary"}),n.snackbar.open&&e(_e,{open:n.snackbar.open,autoHideDuration:6e3,onClose:()=>{},children:e(J,{onClose:()=>{a("snackbar")},severity:n.snackbar.severity,sx:{width:"100%"},children:n.snackbar.message})}),e(lt,{})]})}),e(Dt,{})]})}const wt=S(vt)`
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
`,Lt=[Ye,Ue,We,Ve,tt];function Nt(t){return e($,{children:Lt.reduceRight((r,o)=>e(o,{children:r}),t.children)})}Je.render(e(I.StrictMode,{children:e(Nt,{children:e(Ge,{theme:ae,children:e(wt,{className:"app"})})})}),document.getElementById("root"));
