import{d as ne,y as le,X as re,v as de,x as ie,s as _,T as u,a6 as ce,L as ue,aX as me,o as r,c as d,e as t,g as U,n as pe,F as v,i as e,b as c,w as X,f as _e,k as fe,t as o,h as i,r as ge}from"./D2h1M-6X.js";import{_ as he,a as ye}from"./1J1ejxz4.js";import{_ as xe}from"./DM4cFtrS.js";import{O as ve}from"./B35ZW4wC.js";import{u as be}from"./hrPMgQTE.js";const we={class:"w-full min-h-[600px] flex items-center p-8 text-gray-800 md:bg-white md:rounded-xl md:mx-auto md:shadow-lg md:my-24 md:mt-8 md:max-w-3xl md:p-16 flex-col"},ke={class:"w-full"},Ie={key:0,class:"flex items-center gap-4"},$e={class:"text-xl font-semibold"},Te={class:"flex items-center justify-between w-full mb-2"},je={class:"text-xl font-semibold"},Le={key:0,class:"flex-1 w-full"},Me={class:"flex items-center justify-between"},Ce={class:"mb-2 text-xs text-gray-400 uppercase"},De={class:"leading-none"},Be={class:"mb-2 text-xs text-gray-400 uppercase"},Oe={class:"leading-none"},Pe={class:"mb-2 text-xs text-gray-400 uppercase"},Se={class:"mb-2 text-xs text-gray-400 uppercase"},Ee={class:"leading-none"},Ne={class:"grid gap-2"},Re={class:"flex-1 leading-tight"},qe={class:"text-sm text-gray-600"},Fe={class:"text-sm font-semibold"},Ge={key:0},He={class:"flex justify-between"},Ve={class:"flex justify-between"},ze={class:"flex justify-between"},Ue={key:0,class:"flex justify-between text-primary"},Xe={class:"flex justify-between"},Ae={class:""},Qe={class:"font-semibold"},Je={key:1,class:"flex flex-col items-center justify-center flex-1 w-full gap-4 text-center"},Ke=["innerHTML"],We=2500,as=ne({__name:"order-summary",setup(Ye){const{query:m,params:A,name:b}=le(),{customer:Q}=re(),{formatDate:J,formatPrice:K}=de(),{t:w}=ie(),n=_({}),W=_(m.fetch_delay==="true"),f=_(!1),p=_(""),Y=u(()=>{var s;return!((s=Q.value)!=null&&s.databaseId)}),k=u(()=>b==="order-summary"),g=u(()=>b==="order-received"),h=u(()=>{var s;return((s=n.value)==null?void 0:s.status)!==ve.COMPLETED}),Z=u(()=>{var s;return!!parseFloat(((s=n.value)==null?void 0:s.rawDiscountTotal)||"0")}),I=u(()=>{var s,a;return((a=(s=n.value)==null?void 0:s.downloadableItems)==null?void 0:a.nodes)||[]});ce(()=>{g.value&&(m.cancel_order||m.from_paypal||m.PayerID)&&window.close()}),ue(async()=>{await y(),g.value&&W.value&&h.value&&setTimeout(()=>{y()},We)});async function y(){var s;try{const a=await me({id:A.orderId});a.order&&(n.value=a.order)}catch(a){p.value=((s=a==null?void 0:a.gqlErrors)==null?void 0:s[0].message)||"Could not find order"}f.value=!0}const ee=async()=>{f.value=!1,await y()};return be({title(){return k.value?w("messages.shop.orderSummary"):w("messages.shop.orderReceived")}}),(s,a)=>{const se=pe,x=_e,$=fe,te=he,oe=xe,ae=ye;return r(),d("div",we,[t(f)?(r(),d(v,{key:1},[e("div",ke,[t(k)?(r(),d("div",Ie,[c($,{to:"/my-account?tab=orders",class:"inline-flex items-center justify-center p-2 border rounded-md",title:"Back to orders","aria-label":"Back to orders"},{default:X(()=>[c(x,{name:"ion:chevron-back-outline"})]),_:1}),e("h1",$e,o(s.$t("messages.shop.orderSummary")),1)])):t(g)?(r(),d(v,{key:1},[e("div",Te,[e("h1",je,o(s.$t("messages.shop.orderReceived")),1),t(h)?(r(),d("button",{key:0,type:"button",class:"inline-flex items-center justify-center p-2 bg-white border rounded-md",title:"Refresh order","aria-label":"Refresh order",onClick:ee},[c(x,{name:"ion:refresh-outline"})])):i("",!0)]),e("p",null,o(s.$t("messages.shop.orderThanks")),1)],64)):i("",!0),a[0]||(a[0]=e("hr",{class:"my-8"},null,-1))]),t(n)&&!t(Y)?(r(),d("div",Le,[e("div",Me,[e("div",null,[e("div",Ce,o(s.$t("messages.shop.order")),1),e("div",De,"#"+o(t(n).databaseId),1)]),e("div",null,[e("div",Be,o(s.$t("messages.general.date")),1),e("div",Oe,o(t(J)(t(n).date)),1)]),e("div",null,[e("div",Pe,o(s.$t("messages.general.status")),1),c(te,{order:t(n)},null,8,["order"])]),e("div",null,[e("div",Se,o(s.$t("messages.general.paymentMethod")),1),e("div",Ee,o(t(n).paymentMethodTitle),1)])]),a[3]||(a[3]=e("hr",{class:"my-8"},null,-1)),e("div",Ne,[t(n).lineItems?(r(!0),d(v,{key:0},ge(t(n).lineItems.nodes,l=>{var T,j,L,M;return r(),d("div",{key:l.id,class:"flex items-center justify-between gap-8"},[(T=l.product)!=null&&T.node?(r(),U($,{key:0,to:`/product/${l.product.node.slug}`},{default:X(()=>{var C,D,B,O,P,S,E,N,R,q,F,G,H,V,z;return[c(oe,{class:"w-16 h-16 rounded-xl",src:((B=(D=(C=l.variation)==null?void 0:C.node)==null?void 0:D.image)==null?void 0:B.sourceUrl)||((P=(O=l.product.node)==null?void 0:O.image)==null?void 0:P.sourceUrl)||"/images/placeholder.png",alt:((N=(E=(S=l.variation)==null?void 0:S.node)==null?void 0:E.image)==null?void 0:N.altText)||((q=(R=l.product.node)==null?void 0:R.image)==null?void 0:q.altText)||"Product image",title:((H=(G=(F=l.variation)==null?void 0:F.node)==null?void 0:G.image)==null?void 0:H.title)||((z=(V=l.product.node)==null?void 0:V.image)==null?void 0:z.title)||"Product image",width:"64",height:"64",loading:"lazy"},null,8,["src","alt","title"])]}),_:2},1032,["to"])):i("",!0),e("div",Re,o(l.variation?(L=(j=l.variation)==null?void 0:j.node)==null?void 0:L.name:(M=l.product)==null?void 0:M.node.name),1),e("div",qe,"Qty. "+o(l.quantity),1),e("span",Fe,o(t(K)(l.total)),1)])}),128)):i("",!0)]),a[4]||(a[4]=e("hr",{class:"my-8"},null,-1)),t(I).length&&!t(h)?(r(),d("div",Ge,[c(ae,{downloadableItems:t(I)},null,8,["downloadableItems"]),a[1]||(a[1]=e("hr",{class:"my-8"},null,-1))])):i("",!0),e("div",null,[e("div",He,[e("span",null,o(s.$t("messages.shop.subtotal")),1),e("span",null,o(t(n).subtotal),1)]),e("div",Ve,[e("span",null,o(s.$t("messages.general.tax")),1),e("span",null,o(t(n).totalTax),1)]),e("div",ze,[e("span",null,o(s.$t("messages.general.shipping")),1),e("span",null,o(t(n).shippingTotal),1)]),t(Z)?(r(),d("div",Ue,[e("span",null,o(s.$t("messages.shop.discount")),1),e("span",null,"- "+o(t(n).discountTotal),1)])):i("",!0),a[2]||(a[2]=e("hr",{class:"my-8"},null,-1)),e("div",Xe,[e("span",Ae,o(s.$t("messages.shop.total")),1),e("span",Qe,o(t(n).total),1)])])])):t(p)?(r(),d("div",Je,[c(x,{name:"ion:sad-outline",size:"96",class:"text-gray-700"}),a[5]||(a[5]=e("h1",{class:"text-xl font-semibold"},"Error",-1)),t(p)?(r(),d("div",{key:0,class:"text-sm text-red-500",innerHTML:t(p)},null,8,Ke)):i("",!0)])):i("",!0)],64)):(r(),U(se,{key:0,class:"flex-1"}))])}}});export{as as default};