var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(t,n){t.appendChild(n)}function s(t,n,e){t.insertBefore(n,e||null)}function i(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function l(){return f(" ")}let d;function h(t){d=t}const p=[],$=[],m=[],g=[],b=Promise.resolve();let y=!1;function _(t){m.push(t)}const x=new Set;let w=0;function k(){const t=d;do{for(;w<p.length;){const t=p[w];w++,h(t),v(t.$$)}for(h(null),p.length=0,w=0;$.length;)$.pop()();for(let t=0;t<m.length;t+=1){const n=m[t];x.has(n)||(x.add(n),n())}m.length=0}while(p.length);for(;g.length;)g.pop()();y=!1,x.clear(),h(t)}function v(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(_)}}const E=new Set;function j(t,n){t&&t.i&&(E.delete(t),t.i(n))}function T(t,e,c,u){const{fragment:s,on_mount:i,on_destroy:a,after_update:f}=t.$$;s&&s.m(e,c),u||_((()=>{const e=i.map(n).filter(r);a?a.push(...e):o(e),t.$$.on_mount=[]})),f.forEach(_)}function C(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function N(t,n){-1===t.$$.dirty[0]&&(p.push(t),y||(y=!0,b.then(k)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function O(n,r,c,u,s,a,f,l=[-1]){const p=d;h(n);const $=n.$$={fragment:null,ctx:null,props:a,update:t,not_equal:s,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(p?p.$$.context:[])),callbacks:e(),dirty:l,skip_bound:!1,root:r.target||p.$$.root};f&&f($.root);let m=!1;if($.ctx=c?c(n,r.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return $.ctx&&s($.ctx[t],$.ctx[t]=r)&&(!$.skip_bound&&$.bound[t]&&$.bound[t](r),m&&N(n,t)),e})):[],$.update(),m=!0,o($.before_update),$.fragment=!!u&&u($.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);$.fragment&&$.fragment.l(t),t.forEach(i)}else $.fragment&&$.fragment.c();r.intro&&j(n.$$.fragment),T(n,r.target,r.anchor,r.customElement),k()}h(p)}class P{$destroy(){C(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function q(n){let e,o,r,c,d,h,p,$;return{c(){e=a("p"),e.textContent="Below is a button which makes a request to an HTTP API and shows the response.",o=l(),r=a("button"),c=f("Response, for a fifth time. "),d=f(n[0]),h=f(".")},m(t,i){var a,f,l,m;s(t,e,i),s(t,o,i),s(t,r,i),u(r,c),u(r,d),u(r,h),p||(a=r,f="click",l=n[1],a.addEventListener(f,l,m),$=()=>a.removeEventListener(f,l,m),p=!0)},p(t,[n]){1&n&&function(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}(d,t[0])},i:t,o:t,d(t){t&&i(e),t&&i(o),t&&i(r),p=!1,$()}}}function A(t,n,e){let o=0;return[o,function(){fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007").then((t=>t.json())).then((t=>{console.log(t),e(0,o=t)})).catch((t=>(console.log("My error was "+t),e(0,o=t),[])))}]}class B extends P{constructor(t){super(),O(this,t,A,q,c,{})}}function L(n){let e,o,r,c,u,f,d,h;return d=new B({}),{c(){var t;e=a("br"),o=a("br"),r=a("br"),c=a("br"),u=a("br"),f=l(),(t=d.$$.fragment)&&t.c()},m(t,n){s(t,e,n),s(t,o,n),s(t,r,n),s(t,c,n),s(t,u,n),s(t,f,n),T(d,t,n),h=!0},p:t,i(t){h||(j(d.$$.fragment,t),h=!0)},o(t){!function(t,n,e,o){if(t&&t.o){if(E.has(t))return;E.add(t),(void 0).c.push((()=>{E.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}(d.$$.fragment,t),h=!1},d(t){t&&i(e),t&&i(o),t&&i(r),t&&i(c),t&&i(u),t&&i(f),C(d,t)}}}return new class extends P{constructor(t){super(),O(this,t,null,L,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
