import{S as e,i as t,s as n,r as a,j as r,e as s,t as c,F as l,d as i,k as o,c as u,a as h,b as d,f,g as m,h as $,l as p,m as g,o as v,p as E,q as b,G as w,E as D,u as T,n as _,v as L,w as A,x as S,y as O,z as y,A as x}from"./client.52cb7ab7.js";import{c as H,a as C,h as M,L as R}from"./createOctokit.f8716c38.js";function I(e,t,n){const a=e.slice();return a[9]=t[n],a}function N(e){let t,n,l,p,g,v=e[4].title+"",E=("closed"===e[4].state?a.i18n.incidentFixed:a.i18n.incidentOngoing)+"";return{c(){t=c(v),n=r(),l=s("span"),p=c(E),this.h()},l(e){t=d(e,v),n=o(e),l=u(e,"SPAN",{class:!0});var a=h(l);p=d(a,E),a.forEach(i),this.h()},h(){f(l,"class",g=D(`tag ${e[4].state}`)+" svelte-4o16l6")},m(e,a){m(e,t,a),m(e,n,a),m(e,l,a),$(l,p)},p(e,n){16&n&&v!==(v=e[4].title+"")&&T(t,v),16&n&&E!==(E=("closed"===e[4].state?a.i18n.incidentFixed:a.i18n.incidentOngoing)+"")&&T(p,E),16&n&&g!==(g=D(`tag ${e[4].state}`)+" svelte-4o16l6")&&f(l,"class",g)},d(e){e&&i(t),e&&i(n),e&&i(l)}}}function F(e){let t,n=a.i18n.incidentDetails+"";return{c(){t=c(n)},l(e){t=d(e,n)},m(e,n){m(e,t,n)},p:_,d(e){e&&i(t)}}}function P(e){let t,n,l,p,g,v,E,b,w,D,S,O,y,x,H,C,M,R,N,F=a.i18n.incidentOpenedAt+"",P=new Date(e[4].created_at).toLocaleString()+"",U=a.i18n.incidentSubscribe+"",k=a.i18n.incidentViewOnGitHub+"",B=e[4].closed_at&&V(e),G=e[3],q=[];for(let t=0;t<G.length;t+=1)q[t]=j(I(e,G,t));return{c(){t=s("div"),n=s("dl"),l=s("dt"),p=c(F),g=s("dd"),v=c(P),B&&B.c(),E=r(),b=s("div"),w=s("p"),D=s("a"),S=c(U),y=r(),x=s("p"),H=s("a"),C=c(k),R=r();for(let e=0;e<q.length;e+=1)q[e].c();N=L(),this.h()},l(e){t=u(e,"DIV",{class:!0});var a=h(t);n=u(a,"DL",{});var r=h(n);l=u(r,"DT",{});var s=h(l);p=d(s,F),s.forEach(i),g=u(r,"DD",{});var c=h(g);v=d(c,P),c.forEach(i),B&&B.l(r),r.forEach(i),E=o(a),b=u(a,"DIV",{class:!0});var f=h(b);w=u(f,"P",{class:!0});var m=h(w);D=u(m,"A",{href:!0});var $=h(D);S=d($,U),$.forEach(i),m.forEach(i),y=o(f),x=u(f,"P",{class:!0});var T=h(x);H=u(T,"A",{href:!0});var _=h(H);C=d(_,k),_.forEach(i),T.forEach(i),f.forEach(i),a.forEach(i),R=o(e);for(let t=0;t<q.length;t+=1)q[t].l(e);N=L(),this.h()},h(){f(D,"href",O=`https://github.com/${a.owner}/${a.repo}/issues/${e[0]}`),f(w,"class","svelte-4o16l6"),f(H,"href",M=`https://github.com/${a.owner}/${a.repo}/issues/${e[0]}`),f(x,"class","svelte-4o16l6"),f(b,"class","r svelte-4o16l6"),f(t,"class","f")},m(e,a){m(e,t,a),$(t,n),$(n,l),$(l,p),$(n,g),$(g,v),B&&B.m(n,null),$(t,E),$(t,b),$(b,w),$(w,D),$(D,S),$(b,y),$(b,x),$(x,H),$(H,C),m(e,R,a);for(let t=0;t<q.length;t+=1)q[t].m(e,a);m(e,N,a)},p(e,t){if(16&t&&P!==(P=new Date(e[4].created_at).toLocaleString()+"")&&T(v,P),e[4].closed_at?B?B.p(e,t):(B=V(e),B.c(),B.m(n,null)):B&&(B.d(1),B=null),1&t&&O!==(O=`https://github.com/${a.owner}/${a.repo}/issues/${e[0]}`)&&f(D,"href",O),1&t&&M!==(M=`https://github.com/${a.owner}/${a.repo}/issues/${e[0]}`)&&f(H,"href",M),40&t){let n;for(G=e[3],n=0;n<G.length;n+=1){const a=I(e,G,n);q[n]?q[n].p(a,t):(q[n]=j(a),q[n].c(),q[n].m(N.parentNode,N))}for(;n<q.length;n+=1)q[n].d(1);q.length=G.length}},i:_,o:_,d(e){e&&i(t),B&&B.d(),e&&i(R),A(q,e),e&&i(N)}}}function U(e){let t,n;return t=new R({}),{c(){S(t.$$.fragment)},l(e){O(t.$$.fragment,e)},m(e,a){y(t,e,a),n=!0},p:_,i(e){n||(E(t.$$.fragment,e),n=!0)},o(e){g(t.$$.fragment,e),n=!1},d(e){x(t,e)}}}function V(e){let t,n,r,l,o=a.i18n.incidentClosedAt+"",f=new Date(e[4].closed_at).toLocaleString()+"";return{c(){t=s("dt"),n=c(o),r=s("dd"),l=c(f)},l(e){t=u(e,"DT",{});var a=h(t);n=d(a,o),a.forEach(i),r=u(e,"DD",{});var s=h(r);l=d(s,f),s.forEach(i)},m(e,a){m(e,t,a),$(t,n),m(e,r,a),$(r,l)},p(e,t){16&t&&f!==(f=new Date(e[4].closed_at).toLocaleString()+"")&&T(l,f)},d(e){e&&i(t),e&&i(r)}}}function j(e){let t,n,c,l,d,p=e[5](e[9].body)+"",g=a.i18n.incidentCommentSummary.replace(/\$DATE/,`<a href=${e[9].html_url}>${new Date(e[9].created_at).toLocaleString()}</a>`).replace(/\$AUTHOR/,`<a href=${e[9].user.html_url}>@${e[9].user.login}</a>`)+"";return{c(){t=s("article"),n=s("p"),c=r(),l=s("div"),d=r(),this.h()},l(e){t=u(e,"ARTICLE",{});var a=h(t);n=u(a,"P",{class:!0}),h(n).forEach(i),c=o(a),l=u(a,"DIV",{}),h(l).forEach(i),d=o(a),a.forEach(i),this.h()},h(){f(n,"class","svelte-4o16l6")},m(e,a){m(e,t,a),$(t,n),n.innerHTML=p,$(t,c),$(t,l),l.innerHTML=g,$(t,d)},p(e,t){8&t&&p!==(p=e[5](e[9].body)+"")&&(n.innerHTML=p),8&t&&g!==(g=a.i18n.incidentCommentSummary.replace(/\$DATE/,`<a href=${e[9].html_url}>${new Date(e[9].created_at).toLocaleString()}</a>`).replace(/\$AUTHOR/,`<a href=${e[9].user.html_url}>@${e[9].user.login}</a>`)+"")&&(l.innerHTML=g)},d(e){e&&i(t)}}}function k(e){let t,n,b,w,D,T,_,L,A,S,O,y,x=a.i18n.incidentBack+"";function H(e,t){return e[2]?F:N}document.title=t=a.i18n.incidentTitle.replace("$NUMBER",e[0]);let C=H(e),M=C(e);const R=[U,P],I=[];function V(e,t){return e[1]?0:1}return T=V(e),_=I[T]=R[T](e),{c(){n=r(),b=s("h2"),M.c(),w=r(),D=s("section"),_.c(),L=r(),A=s("footer"),S=s("a"),O=c(x),this.h()},l(e){l('[data-svelte="svelte-1txp228"]',document.head).forEach(i),n=o(e),b=u(e,"H2",{class:!0});var t=h(b);M.l(t),t.forEach(i),w=o(e),D=u(e,"SECTION",{});var a=h(D);_.l(a),a.forEach(i),L=o(e),A=u(e,"FOOTER",{class:!0});var r=h(A);S=u(r,"A",{href:!0});var s=h(S);O=d(s,x),s.forEach(i),r.forEach(i),this.h()},h(){f(b,"class","svelte-4o16l6"),f(S,"href",a.path),f(A,"class","svelte-4o16l6")},m(e,t){m(e,n,t),m(e,b,t),M.m(b,null),m(e,w,t),m(e,D,t),I[T].m(D,null),m(e,L,t),m(e,A,t),$(A,S),$(S,O),y=!0},p(e,[n]){(!y||1&n)&&t!==(t=a.i18n.incidentTitle.replace("$NUMBER",e[0]))&&(document.title=t),C===(C=H(e))&&M?M.p(e,n):(M.d(1),M=C(e),M&&(M.c(),M.m(b,null)));let r=T;T=V(e),T===r?I[T].p(e,n):(p(),g(I[r],1,1,(()=>{I[r]=null})),v(),_=I[T],_?_.p(e,n):(_=I[T]=R[T](e),_.c()),E(_,1),_.m(D,null))},i(e){y||(E(_),y=!0)},o(e){g(_),y=!1},d(e){e&&i(n),e&&i(b),M.d(),e&&i(w),e&&i(D),I[T].d(),e&&i(L),e&&i(A)}}}function B(e,t,n){let{number:r}=t,s=w,c=!0,l=!0;const i=H(),o=a.owner,u=a.repo;let h=[],d={};return b((async()=>{try{n(4,d=(await C(`issue-${o}-${u}-${r}`,(()=>i.issues.get({owner:o,repo:u,issue_number:r,sort:"created",direction:"desc"})))).data)}catch(e){M(e)}n(2,l=!1);try{n(3,h=(await C(`issue-comments-${o}-${u}-${r}`,(()=>i.issues.listComments({owner:o,repo:u,issue_number:r})))).data.reverse())}catch(e){M(e)}n(1,c=!1)})),e.$$set=e=>{"number"in e&&n(0,r=e.number)},[r,c,l,h,d,s]}class G extends e{constructor(e){super(),t(this,e,B,k,n,{number:0})}}function q(e){let t,n;return t=new G({props:{number:e[0]}}),{c(){S(t.$$.fragment)},l(e){O(t.$$.fragment,e)},m(e,a){y(t,e,a),n=!0},p(e,[n]){const a={};1&n&&(a.number=e[0]),t.$set(a)},i(e){n||(E(t.$$.fragment,e),n=!0)},o(e){g(t.$$.fragment,e),n=!1},d(e){x(t,e)}}}async function z(e){const{number:t}=e.params;return{number:t}}function J(e,t,n){let{number:a}=t;return e.$$set=e=>{"number"in e&&n(0,a=e.number)},[a]}export default class extends e{constructor(e){super(),t(this,e,J,q,n,{number:0})}}export{z as preload};
