import{b as s,w as i}from"./singletons.436fc0cf.js";import{e as a,E as c}from"./forms.82fa1d22.js";import{p as l}from"./stores.43e929ac.js";import{A as h}from"./scheduler.953cfe2b.js";function e(r,t){navigator.share?navigator.share({url:r,title:t}):prompt("Copy this public url to share:",r)}function p(r,t){return`${`${r.origin}${s}`}/r/${t}`}async function w(r,t){try{if(r.length===7){const o=h(l).url;e(p(o,r),t)}else{const o=await fetch(`${s}/conversation/${r}/share`,{method:"POST",headers:{"Content-Type":"application/json"}});if(!o.ok){a.set("Error while sharing conversation, try again."),console.error("Error while sharing conversation: "+await o.text());return}const{url:n}=await o.json();e(n,t)}}catch(o){a.set(c.default),console.error(o)}}var u=(r=>(r.ConversationList="conversation:list",r.Conversation="conversation",r))(u||{});const E=i(null);export{u as U,w as s,E as t};
