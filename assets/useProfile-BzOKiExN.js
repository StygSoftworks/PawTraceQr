import{c as M}from"./createLucideIcon-Te5DWUAa.js";import{c as q,u as w,a as _,s as k}from"./index-LiyORjfY.js";import{u as b}from"./useQuery-BWUsH6HQ.js";import{u as g}from"./useMutation-CFcSmhg3.js";/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],F=M("moon",S);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],N=M("sun",x);function T(){const e=q.c(19),{user:t}=w(),m=_(),d=t?.id;let s;e[0]!==d?(s=["profile",d],e[0]=d,e[1]=s):s=e[1];const p=!!t;let o;e[2]!==t?(o=async()=>{const{data:i,error:l}=await k.from("profiles").select("*").eq("id",t.id).maybeSingle();if(l)throw l;return i},e[2]=t,e[3]=o):o=e[3];let c;e[4]!==s||e[5]!==p||e[6]!==o?(c={queryKey:s,enabled:p,queryFn:o,staleTime:3e5,gcTime:18e5},e[4]=s,e[5]=p,e[6]=o,e[7]=c):c=e[7];const f=b(c);let a;e[8]!==t?(a=async i=>{const{data:l,error:h}=await k.from("profiles").upsert({id:t.id,...i}).select().maybeSingle();if(h)throw h;return l},e[8]=t,e[9]=a):a=e[9];let r;e[10]!==m||e[11]!==t?.id?(r=i=>m.setQueryData(["profile",t?.id],i),e[10]=m,e[11]=t?.id,e[12]=r):r=e[12];let n;e[13]!==a||e[14]!==r?(n={mutationFn:a,onSuccess:r},e[13]=a,e[14]=r,e[15]=n):n=e[15];const y=g(n);let u;return e[16]!==f||e[17]!==y?(u={...f,update:y},e[16]=f,e[17]=y,e[18]=u):u=e[18],u}export{F as M,N as S,T as u};
