(this.webpackJsonplink=this.webpackJsonplink||[]).push([[0],{21:function(e,t,n){e.exports=n(45)},26:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(14),c=n.n(l),u=n(15),i=n(16),p=n(20),s=n(19),m=function(){return r.a.createElement("nav",{className:"navbar bg-primary"},r.a.createElement("h1",null,r.a.createElement("i",null)," Medicines"),r.a.createElement("ul",null,r.a.createElement("p",null,"Search....")))},o=n(2),d=Object(a.createContext)(),E=function(e){var t=e.d,n=t.doctorPrescriptionName,a=t.mrp,l=t.manufacturer,c=t.maxQuantity,u=t.minQuantity,i=t.packSize,p=t.unit,s=t.primarilyUsedFor,m=t.uses;return r.a.createElement("div",{className:"card",style:{border:"solid black 1px"}},r.a.createElement("h3",null,n),r.a.createElement("span",null,r.a.createElement("b",null,"Description: ")),r.a.createElement("span",null,m.replace(/<p>/gi," ").replace(/<\/p>/gi," ").replace(/<ul>/gi," ").replace(/<li>/gi," ").replace(/<\/ul>/gi," ").replace(/<\/li>/gi," ").slice(0,200))," ",r.a.createElement("p",null),r.a.createElement("strong",null,"Package size: "),i,r.a.createElement("p",null," ",r.a.createElement("strong",null,"Manufacturer By: "),l),r.a.createElement("span",null,r.a.createElement("strong",null,"minQuantity = "),u,r.a.createElement("strong",null,", maxQuantity = "),c),r.a.createElement("br",null),r.a.createElement("span",null,r.a.createElement("strong",null,"Unit: "),p),r.a.createElement("br",null),r.a.createElement("span",null,r.a.createElement("strong",null,"PrimarilyUsed: "),s),r.a.createElement("br",null),r.a.createElement("strong",null,"MRP = ")," ",r.a.createElement("span",null,a)," ",r.a.createElement("strong",null,"Rs."))},g={display:"grid",gridTemplateColumns:"repeat(4,1fr)",gridGap:"1rem"},b=function(){var e=Object(a.useContext)(d),t=e.current,n=e.getmed,l=Object(a.useState)(0),c=Object(o.a)(l,2),u=c[0],i=c[1],p=Object(a.useState)(10),s=Object(o.a)(p,1)[0];if(u<0)i(0);else if(!t)return r.a.createElement("p",{className:"text-center"},"Loading...");return n(s,u),r.a.createElement("div",null,r.a.createElement("div",{style:g},t.map((function(e){return r.a.createElement(E,{key:e._id,d:e})}))),r.a.createElement("div",{className:"text-center",style:{marginTop:"30px",marginBottom:"60px"}},r.a.createElement("p",null,"Page No. ",u),r.a.createElement("button",{className:"btn-primary btn:hover",style:{padding:"8px 35px 8px 35px",marginTop:"5px",marginRight:"10px",border:"transparent",borderRadius:"5px"},onClick:function(){return i(u-1)}},"Previous"),r.a.createElement("button",{className:"btn-primary btn:hover",style:{padding:"8px 35px 8px 35px",marginTop:"5px",marginLeft:"10px",border:"transparent",borderRadius:"5px"},onClick:function(){return i(u+1)}},"Next")))},x=(n(26),n(3)),y=n.n(x),f=n(17),v=n(18),h=n.n(v),j=n(4),O=function(e,t){switch(t.type){case"GET_MED":return Object(j.a)(Object(j.a)({},e),{},{current:t.payload});default:return e}},k=function(e){var t=Object(a.useReducer)(O,{current:[]}),n=Object(o.a)(t,2),l=n[0],c=n[1],u=function(){var e=Object(f.a)(y.a.mark((function e(t,n){var a,r,l;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{"Content-Type":"application/json"}},r={limit:t,skip:n},e.prev=2,e.next=5,h.a.post("https://api.emetroplus.com/drug/data",r,a);case 5:l=e.sent,console.log(l),c({type:"GET_MED",payload:l.data.data}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t,n){return e.apply(this,arguments)}}();return r.a.createElement(d.Provider,{value:{current:l.current,getmed:u}},e.children)},N=function(e){Object(p.a)(n,e);var t=Object(s.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement(k,null,r.a.createElement("div",{className:"App"},r.a.createElement(m,null),r.a.createElement("div",{style:{margin:"0px 100px 0px 100px"}},r.a.createElement(b,null))))}}]),n}(a.Component);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.7f016ec6.chunk.js.map