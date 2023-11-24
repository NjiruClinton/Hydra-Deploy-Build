import{_ as ce}from"../chunks/preload-helper.a4192956.js";import{s as fe,m as W,e as de,a as me,o as pe,c as he,f as N,g as ue,h as j,j as ge,i as we,p as K,l as T,q as _e,r as M}from"../chunks/scheduler.953cfe2b.js";import{S as ye,i as be,b as z,c as Se,a as Me,m as Ee,t as Ae,d as Ce,e as ke}from"../chunks/index.1fa04a18.js";import{f as B,C as Oe,p as F,w as Te,a as Pe,r as q}from"../chunks/pendingMessage.222e6aac.js";import{p as Ie}from"../chunks/stores.43e929ac.js";import{g as V,e as h,E as J,i as Q}from"../chunks/forms.82fa1d22.js";import{b as P}from"../chunks/singletons.436fc0cf.js";import{s as Ue,t as Y,U as Z}from"../chunks/titleUpdate.65574de5.js";function Le(t){let _,e,b,a,p,d,u;document.title=_=t[8];function I(r){t[13](r)}function f(r){t[14](r)}let o={loading:t[5],pending:t[6],messages:t[2],shared:t[0].shared,preprompt:t[0].preprompt,models:t[0].models,currentModel:B([...t[0].models,...t[0].oldModels],t[0].model),settings:t[0].settings};return t[4]!==void 0&&(o.webSearchMessages=t[4]),t[7]!==void 0&&(o.files=t[7]),a=new Oe({props:o}),W.push(()=>z(a,"webSearchMessages",I)),W.push(()=>z(a,"files",f)),a.$on("message",t[10]),a.$on("retry",t[11]),a.$on("vote",t[15]),a.$on("share",t[16]),a.$on("stop",t[17]),{c(){e=de("link"),b=me(),Se(a.$$.fragment),this.h()},l(r){const n=pe("svelte-626amo",document.head);e=he(n,"LINK",{rel:!0,href:!0,integrity:!0,crossorigin:!0}),n.forEach(N),b=ue(r),Me(a.$$.fragment,r),this.h()},h(){j(e,"rel","stylesheet"),j(e,"href","https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css"),j(e,"integrity","sha384-GvrOXuhMATgEsSwCs4smul74iXGOixntILdUW9XmUC6+HX0sLNAK3q71HotJqlAn"),j(e,"crossorigin","anonymous")},m(r,n){ge(document.head,e),we(r,b,n),Ee(a,r,n),u=!0},p(r,[n]){(!u||n&256)&&_!==(_=r[8])&&(document.title=_);const l={};n&32&&(l.loading=r[5]),n&64&&(l.pending=r[6]),n&4&&(l.messages=r[2]),n&1&&(l.shared=r[0].shared),n&1&&(l.preprompt=r[0].preprompt),n&1&&(l.models=r[0].models),n&1&&(l.currentModel=B([...r[0].models,...r[0].oldModels],r[0].model)),n&1&&(l.settings=r[0].settings),!p&&n&16&&(p=!0,l.webSearchMessages=r[4],K(()=>p=!1)),!d&&n&128&&(d=!0,l.files=r[7],K(()=>d=!1)),a.$set(l)},i(r){u||(Ae(a.$$.fragment,r),u=!0)},o(r){Ce(a.$$.fragment,r),u=!1},d(r){r&&N(b),N(e),ke(a,r)}}}function Re(t,_,e){let b,a,p,d,u,I;T(t,Ie,s=>e(1,a=s)),T(t,F,s=>e(18,p=s)),T(t,h,s=>e(19,d=s)),T(t,Y,s=>e(20,u=s)),T(t,Te,s=>e(21,I=s));let{data:f}=_,o=f.messages,r=f.messages,n=!1,l=[],y=!1,A=!1,S=[];async function D(){try{e(5,y=!0);const s=await fetch(`${P}/conversation`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fromShare:a.params.id,model:f.model})});if(!s.ok){h.set("Error while creating conversation, try again."),console.error("Error while creating conversation: "+await s.text());return}const{conversationId:m}=await s.json();return m}catch(s){throw h.set(J.default),console.error(String(s)),s}}async function C(s,m=q()){var U,k;if(s.trim())try{e(3,n=!1),e(5,y=!0),e(6,A=!0);let i=o.findIndex(w=>w.id===m);const L=i!==-1;L||(i=o.length);const ae=await ce(()=>import("../chunks/index.8a46ea8d.js").then(w=>w.i),["..\\chunks\\index.8a46ea8d.js","..\\chunks\\_commonjsHelpers.39b5b250.js"],import.meta.url),G=await Promise.all(S.map(async w=>await ae.readAndCompressImage(w,{maxHeight:224,maxWidth:224,quality:1}).then(async R=>await Pe(R))));e(2,o=[...o.slice(0,i),{from:"user",content:s,id:m,files:L?o[i].files:G}]),e(7,S=[]);const ne=q(),E=await fetch(`${P}/conversation/${a.params.id}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({inputs:s,id:m,response_id:ne,is_retry:L,web_search:I.useSearch,files:L?void 0:G})});if(e(7,S=[]),!E.body)throw new Error("Body not defined");if(!E.ok){h.set((U=await E.json())==null?void 0:U.message);return}const oe=new TextDecoderStream,g=(k=E==null?void 0:E.body)==null?void 0:k.pipeThrough(oe).getReader();let H="";for(;H==="";){if(await new Promise(w=>setTimeout(w,25)),n){g==null||g.cancel();break}await(g==null?void 0:g.read().then(async({done:w,value:R})=>{if(w){g.cancel();return}if(!R)return;R.split(`
`).forEach(async ie=>{try{const c=JSON.parse(ie);if(c.type==="finalAnswer")H=c.text,g.cancel(),e(5,y=!1),e(6,A=!1),Q(Z.Conversation);else if(c.type==="stream"){e(6,A=!1);let O=o[o.length-1];O.from!=="assistant"?e(2,o=[...o,{from:"assistant",id:q(),content:c.token}]):(O.content+=c.token,e(2,o=[...o]))}else if(c.type==="webSearch")e(4,l=[...l,c]);else if(c.type==="status")if(c.status==="title"&&c.message){const O=f.conversations.find(({id:le})=>le===a.params.id);O&&(O.title=c.message,M(Y,u={title:c.message,convId:a.params.id},u))}else c.status==="error"&&M(h,d=c.message??"An error has occurred",d);else c.type==="error"&&(h.set(c.message),g.cancel())}catch{return}})}))}e(4,l=[]),await Q(Z.ConversationList)}catch(i){i instanceof Error&&i.message.includes("overloaded")?M(h,d="Too much traffic, please try again.",d):i instanceof Error&&i.message.includes("429")?M(h,d=J.rateLimited,d):i instanceof Error?M(h,d=i.message,d):M(h,d=J.default,d),console.error(i)}finally{e(5,y=!1),e(6,A=!1)}}async function X(s,m){let U=a.params.id,k;e(2,o=o.map(i=>i.id===m?(k=i.score,{...i,score:s}):i));try{await fetch(`${P}/conversation/${U}/message/${m}/vote`,{method:"POST",body:JSON.stringify({score:s})})}catch{e(2,o=o.map(i=>i.id!==m?i:{...i,score:k}))}}_e(async()=>{p&&(e(7,S=p.files),await C(p.content),M(F,p=void 0,p))});async function v(s){f.shared?D().then(async m=>{await V(`${P}/conversation/${m}`,{invalidateAll:!0})}).then(()=>C(s.detail)).finally(()=>e(5,y=!1)):C(s.detail)}async function x(s){f.shared?D().then(async m=>{await V(`${P}/conversation/${m}`,{invalidateAll:!0})}).then(()=>C(s.detail.content,s.detail.id)).finally(()=>e(5,y=!1)):C(s.detail.content,s.detail.id)}function $(s){l=s,e(4,l)}function ee(s){S=s,e(7,S)}const se=s=>X(s.detail.score,s.detail.id),te=()=>Ue(a.params.id,f.title),re=()=>e(3,n=!0);return t.$$set=s=>{"data"in s&&e(0,f=s.data)},t.$$.update=()=>{var s;t.$$.dirty&4097&&f.messages!==r&&(e(2,o=f.messages),e(12,r=f.messages)),t.$$.dirty&2&&(a.params.id,e(3,n=!0),e(5,y=!1)),t.$$.dirty&3&&e(8,b=((s=f.conversations.find(m=>m.id===a.params.id))==null?void 0:s.title)??f.title)},[f,a,o,n,l,y,A,S,b,X,v,x,r,$,ee,se,te,re]}class Ke extends ye{constructor(_){super(),be(this,_,Re,Le,fe,{data:0})}}export{Ke as component};
