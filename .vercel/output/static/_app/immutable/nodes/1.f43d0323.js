import{s as H,e as h,t as j,a as D,c as p,b as g,d as I,f as c,g as V,h as u,i as S,j as o,k as $,n as w,l as q}from"../chunks/scheduler.953cfe2b.js";import{S as C,i as z}from"../chunks/index.1fa04a18.js";import{p as A}from"../chunks/stores.43e929ac.js";function B(d){var y;let t,e,a,l=d[0].status+"",x,v,m,b,i,f=((y=d[0].error)==null?void 0:y.message)+"",_;return{c(){t=h("div"),e=h("div"),a=h("h1"),x=j(l),v=D(),m=h("div"),b=D(),i=h("h2"),_=j(f),this.h()},l(r){t=p(r,"DIV",{class:!0});var n=g(t);e=p(n,"DIV",{class:!0});var s=g(e);a=p(s,"H1",{class:!0});var k=g(a);x=I(k,l),k.forEach(c),v=V(s),m=p(s,"DIV",{class:!0}),g(m).forEach(c),b=V(s),i=p(s,"H2",{class:!0});var E=g(i);_=I(E,f),E.forEach(c),s.forEach(c),n.forEach(c),this.h()},h(){u(a,"class","mb-2 text-5xl font-semibold"),u(m,"class","-mx-8 my-2 h-px bg-gray-200 dark:bg-gray-700"),u(i,"class","max-w-sm text-lg"),u(e,"class","align-center -mt-24 flex flex-col justify-center rounded-xl border bg-white px-8 pb-2 pt-4 text-center dark:border-gray-700 dark:bg-gray-800"),u(t,"class","flex items-center justify-center bg-gradient-to-t from-gray-200 text-gray-800 dark:from-gray-700 dark:text-gray-300")},m(r,n){S(r,t,n),o(t,e),o(e,a),o(a,x),o(e,v),o(e,m),o(e,b),o(e,i),o(i,_)},p(r,[n]){var s;n&1&&l!==(l=r[0].status+"")&&$(x,l),n&1&&f!==(f=((s=r[0].error)==null?void 0:s.message)+"")&&$(_,f)},i:w,o:w,d(r){r&&c(t)}}}function F(d,t,e){let a;return q(d,A,l=>e(0,a=l)),[a]}class L extends C{constructor(t){super(),z(this,t,F,B,H,{})}}export{L as component};
