const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/browser-Cf7Xp1K2.js","assets/index-O7RRn4Et.js","assets/index-Ddtvp70f.css","assets/qr-code-styling-CCmCgsqr.js"])))=>i.map(i=>d[i]);
import{c as v}from"./createLucideIcon-PZRLLas3.js";import{_ as u}from"./index-O7RRn4Et.js";const b=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],F=v("circle",b);const O=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Q=v("download",O);const C=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],k=v("square",C),w=512,x=30,L=40,D=24,A=25,R={errorCorrectionLevel:"M",margin:0,color:{dark:"#000000",light:"#ffffff"}},$={shape:"circle",dotsOptions:{color:"#000000",type:"extra-rounded"},cornersSquareOptions:{color:"#000000",type:"extra-rounded"},cornersDotOptions:{color:"#000000",type:"dot"},backgroundOptions:{color:"#ffffff"},imageOptions:{crossOrigin:"anonymous",margin:0},qrOptions:{errorCorrectionLevel:"H"}};async function B(e){return await(await u(async()=>{const{default:t}=await import("./browser-Cf7Xp1K2.js").then(n=>n.b);return{default:t}},__vite__mapDeps([0,1,2]))).default.toString(e,{...R,type:"svg",margin:1})}async function H(e){const a=(await u(async()=>{const{default:c}=await import("./qr-code-styling-CCmCgsqr.js").then(o=>o.q);return{default:c}},__vite__mapDeps([3,1,2]))).default,n=await new a({width:w,height:w,data:e,type:"svg",...$}).getRawData("svg");if(!n)throw new Error("Failed to generate SVG");return n instanceof Blob?await n.text():n.toString()}async function M(e,a=w){const t=(await u(async()=>{const{default:o}=await import("./qr-code-styling-CCmCgsqr.js").then(l=>l.q);return{default:o}},__vite__mapDeps([3,1,2]))).default,c=await new t({width:a,height:a,data:e,type:"canvas",...$}).getRawData("png");if(!c)throw new Error("Failed to generate PNG");if(!(c instanceof Blob))throw new Error("Expected Blob but got Buffer");return new Promise((o,l)=>{const s=new FileReader;s.onloadend=()=>{typeof s.result=="string"?o(s.result):l(new Error("Failed to convert blob to data URL"))},s.onerror=()=>l(new Error("Failed to read blob")),s.readAsDataURL(c)})}async function N(e,a,t=w){const c=await(await u(async()=>{const{default:m}=await import("./browser-Cf7Xp1K2.js").then(T=>T.b);return{default:m}},__vite__mapDeps([0,1,2]))).default.toString(e,{...R,type:"svg"}),s=new DOMParser().parseFromString(c,"image/svg+xml").documentElement,y=s.getAttribute("viewBox")?.split(" ").map(Number)||[0,0,100,100],[,,p,f]=y,r=s.innerHTML,d=x,_=L,i=t+d*2,g=t+d*2+_,h=t/p,S=t/f;return`
<svg xmlns="http://www.w3.org/2000/svg" width="${i}" height="${g}" viewBox="0 0 ${i} ${g}">
  <rect width="${i}" height="${g}" fill="#ffffff"/>
  <g transform="translate(${d}, ${d}) scale(${h}, ${S})">
    ${r}
  </g>
  <text
    x="${i/2}"
    y="${t+d+_*.7}"
    font-family="system-ui, -apple-system, sans-serif"
    font-size="${D}"
    font-weight="600"
    fill="#000000"
    text-anchor="middle"
  >
    ${q(a)}
  </text>
</svg>`.trim()}async function U(e,a,t=w){const n=(await u(async()=>{const{default:E}=await import("./qr-code-styling-CCmCgsqr.js").then(m=>m.q);return{default:E}},__vite__mapDeps([3,1,2]))).default,o=await new n({width:t,height:t,data:e,type:"svg",...$}).getRawData("svg");if(!o)throw new Error("Failed to generate SVG");const l=o instanceof Blob?await o.text():o.toString(),p=new DOMParser().parseFromString(l,"image/svg+xml").documentElement.innerHTML,f=x,r=t+f*2,d=r/2,_=r/2,i=t/2+A,g=`textPath_${Date.now()}_${Math.random().toString(36).slice(2,9)}`,h=`M ${d-i},${_} A ${i},${i} 0 0 0 ${d+i},${_}`;return`
<svg xmlns="http://www.w3.org/2000/svg" width="${r}" height="${r}" viewBox="0 0 ${r} ${r}">
  <rect width="${r}" height="${r}" fill="#ffffff"/>
  <g transform="translate(${f}, ${f})">
    ${p}
  </g>
  <defs>
    <path id="${g}" d="${h}" fill="none" />
  </defs>
  <text
    font-family="system-ui, -apple-system, sans-serif"
    font-size="${D}"
    font-weight="600"
    fill="#000000"
  >
    <textPath href="#${g}" startOffset="50%" text-anchor="middle">
      ${q(a)}
    </textPath>
  </text>
</svg>`.trim()}function q(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}export{F as C,Q as D,k as S,B as a,M as b,U as c,N as d,H as m};
