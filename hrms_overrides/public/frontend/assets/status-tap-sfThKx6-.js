var d=(o,r,n)=>new Promise((s,t)=>{var i=e=>{try{a(n.next(e))}catch(c){t(c)}},l=e=>{try{a(n.throw(e))}catch(c){t(c)}},a=e=>e.done?s(e.value):Promise.resolve(e.value).then(i,l);a((n=n.apply(o,r)).next())});import{v as w,w as m,x as p,y as h,z as y}from"./index-EIkbBE6I.js";import"./frappe-ui-X7q4Y2QI.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const u=()=>{const o=window;o.addEventListener("statusTap",()=>{w(()=>{const r=o.innerWidth,n=o.innerHeight,s=document.elementFromPoint(r/2,n/2);if(!s)return;const t=m(s);t&&new Promise(i=>p(t,i)).then(()=>{h(()=>d(void 0,null,function*(){t.style.setProperty("--overflow","hidden"),yield y(t,300),t.style.removeProperty("--overflow")}))})})})};export{u as startStatusTap};
//# sourceMappingURL=status-tap-sfThKx6-.js.map
