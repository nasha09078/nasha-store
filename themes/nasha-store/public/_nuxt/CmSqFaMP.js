const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./D8H3A8FT.js","./D2h1M-6X.js","./entry.GX258iR9.css","./DvU2Yq2X.js","./Di8atcbM.js","./LoginAndRegister.BKcflOn6.css"])))=>i.map(i=>d[i]);
import{d as M,X as P,u as R,y as W,T as C,o as t,c as m,e,b as a,n as q,F,g as n,E as O,G as S,i as s,h as w,t as c,f as G,w as g,j as u,a1 as f,k as U,D as X}from"./D2h1M-6X.js";import{_ as H,a as J,b as K}from"./DRUDvgYb.js";import{_ as Q}from"./2vGwMb1P.js";import{u as Y}from"./hrPMgQTE.js";import"./GQHXd0SH.js";import"./DvU2Yq2X.js";import"./1J1ejxz4.js";import"./5Eo_AKUy.js";const Z=O(()=>S(()=>import("./D8H3A8FT.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url).then(y=>y.default||y)),ee={class:"container h-full"},te={key:0,class:"flex flex-col min-h-[500px]"},se={key:1,class:"flex flex-col items-start justify-between w-full lg:gap-12 mb-24 lg:flex-row"},oe={class:"mt-2 lg:sticky top-16 w-full lg:max-w-[260px]"},ae={class:"my-8 flex gap-4 items-start justify-center w-full"},ne=["src"],le={class:"flex-1 text-balance leading-tight w-full text-ellipsis overflow-hidden"},ie={class:"text-lg font-semibold"},ce=["title"],re={class:"flex text-gray-700 lg:grid flex-wrap w-full gap-1.5 my-8 min-w-[240px] lg:w-auto items-start"},me={class:"hidden lg:block"},de={class:"flex-1 w-full lg:my-8 rounded-lg max-w-screen-lg lg:sticky top-24"},ue=M({__name:"my-account",setup(y){const{logoutUser:_,viewer:i,customer:A,isPending:k,avatar:v}=P(),{cart:D}=R(),N=W(),l=C(()=>N.query.tab||"my-details"),V=C(()=>!i&&!A);return Y({title:"My Account"}),(d,o)=>{var b,z,L,$;const x=q,B=Z,r=G,p=U,E=H,I=J,T=K,j=Q;return t(),m("div",ee,[e(V)&&!e(D)?(t(),m("div",te,[a(x,{class:"m-auto"})])):(t(),m(F,{key:1},[e(i)?(t(),m("div",se,[s("div",oe,[s("section",ae,[e(v)?(t(),m("img",{key:0,src:e(v),class:"rounded-full aspect-square border border-white",alt:"user-image",width:"48",height:"48"},null,8,ne)):w("",!0),s("div",le,[s("div",ie,"Welcome, "+c((b=e(i))==null?void 0:b.firstName),1),(z=e(i))!=null&&z.email?(t(),m("span",{key:0,class:"text-gray-400 font-light",title:(L=e(i))==null?void 0:L.email},c(($=e(i))==null?void 0:$.email),9,ce)):w("",!0)]),s("button",{class:"flex text-gray-700 items-center flex-col p-2 px-4 rounded-lg hover:bg-white hover:text-red-700 lg:hidden",onClick:o[0]||(o[0]=(...h)=>e(_)&&e(_)(...h))},[e(k)?(t(),n(x,{key:0,size:"22"})):(t(),n(r,{key:1,name:"ion:log-out-outline",size:"22"})),s("small",null,c(d.$t("messages.account.logout")),1)])]),o[4]||(o[4]=s("hr",{class:"my-8"},null,-1)),s("nav",re,[a(p,{to:"/my-account?tab=my-details",class:f(["flex items-center gap-4 p-2 px-4",{active:e(l)=="my-details"}])},{default:g(()=>[a(r,{name:"ion:information-circle-outline",size:"22"}),u(" "+c(d.$t("messages.general.myDetails")),1)]),_:1},8,["class"]),a(p,{to:"/my-account?tab=orders",class:f(["flex items-center gap-4 p-2 px-4",{active:e(l)=="orders"}])},{default:g(()=>[a(r,{name:"ion:bag-check-outline",size:"22"}),u(" "+c(d.$t("messages.shop.order",2)),1)]),_:1},8,["class"]),a(p,{to:"/my-account?tab=downloads",class:f(["flex items-center gap-4 p-2 px-4",{active:e(l)=="downloads"}])},{default:g(()=>[a(r,{name:"ion:cloud-download-outline",size:"22"}),u(" "+c(d.$t("messages.general.downloads")),1)]),_:1},8,["class"]),a(p,{to:"/my-account?tab=wishlist",class:f(["flex items-center gap-4 p-2 px-4",{active:e(l)=="wishlist"}])},{default:g(()=>[a(r,{name:"ion:heart-outline",size:"22"}),o[2]||(o[2]=u(" Wishlist "))]),_:1},8,["class"])]),s("template",me,[o[3]||(o[3]=s("hr",{class:"my-8"},null,-1)),s("button",{class:"flex text-gray-700 items-center gap-4 p-2 px-4 w-full rounded-lg hover:bg-white hover:text-red-700",onClick:o[1]||(o[1]=(...h)=>e(_)&&e(_)(...h))},[e(k)?(t(),n(x,{key:0,size:"22"})):(t(),n(r,{key:1,name:"ion:log-out-outline",size:"22"})),u(" "+c(d.$t("messages.account.logout")),1)])])]),s("main",de,[e(l)==="my-details"?(t(),n(E,{key:0,user:e(i)},null,8,["user"])):e(l)==="orders"?(t(),n(I,{key:1})):e(l)==="downloads"?(t(),n(T,{key:2})):e(l)==="wishlist"?(t(),n(j,{key:3})):w("",!0)])])):(t(),n(B,{key:0}))],64))])}}}),ke=X(ue,[["__scopeId","data-v-4ff0b485"]]);export{ke as default};