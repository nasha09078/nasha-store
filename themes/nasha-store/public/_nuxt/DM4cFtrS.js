import{T as n,bt as d,b1 as m,d as S,s as g,J as b,bu as z,L as w,A}from"./D2h1M-6X.js";function _(e){var i;(i=performance==null?void 0:performance.mark)==null||i.call(performance,"mark_feature_usage",{detail:{feature:e}})}const k={src:{type:String,default:void 0},format:{type:String,default:void 0},quality:{type:[Number,String],default:void 0},background:{type:String,default:void 0},fit:{type:String,default:void 0},modifiers:{type:Object,default:void 0},preset:{type:String,default:void 0},provider:{type:String,default:void 0},sizes:{type:[Object,String],default:void 0},densities:{type:String,default:void 0},preload:{type:[Boolean,Object],default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},alt:{type:String,default:void 0},referrerpolicy:{type:String,default:void 0},usemap:{type:String,default:void 0},longdesc:{type:String,default:void 0},ismap:{type:Boolean,default:void 0},loading:{type:String,default:void 0,validator:e=>["lazy","eager"].includes(e)},crossorigin:{type:[Boolean,String],default:void 0,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,default:void 0,validator:e=>["async","auto","sync"].includes(e)},nonce:{type:[String],default:void 0}},p=e=>{const i=n(()=>({provider:e.provider,preset:e.preset})),u=n(()=>({width:d(e.width),height:d(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding,nonce:e.nonce})),a=m(),l=n(()=>({...e.modifiers,width:d(e.width),height:d(e.height),format:e.format,quality:e.quality||a.options.quality,background:e.background,fit:e.fit}));return{options:i,attrs:u,modifiers:l}},N={...k,placeholder:{type:[Boolean,String,Number,Array],default:void 0},placeholderClass:{type:String,default:void 0}},I=S({name:"NuxtImg",props:N,emits:["load","error"],setup:(e,i)=>{const u=m(),a=p(e),l=g(!1),s=g(),r=n(()=>u.getSizes(e.src,{...a.options.value,sizes:e.sizes,densities:e.densities,modifiers:{...a.modifiers.value,width:d(e.width),height:d(e.height)}})),y=n(()=>{const t={...a.attrs.value,"data-nuxt-img":""};return(!e.placeholder||l.value)&&(t.sizes=r.value.sizes,t.srcset=r.value.srcset),t}),c=n(()=>{let t=e.placeholder;if(t===""&&(t=!0),!t||l.value)return!1;if(typeof t=="string")return t;const o=Array.isArray(t)?t:typeof t=="number"?[t,t]:[10,10];return u(e.src,{...a.modifiers.value,width:o[0],height:o[1],quality:o[2]||50,blur:o[3]||3},a.options.value)}),v=n(()=>e.sizes?r.value.src:u(e.src,a.modifiers.value,a.options.value)),f=n(()=>c.value?c.value:v.value);if(e.preload){const t=Object.values(r.value).every(o=>o);b({link:[{rel:"preload",as:"image",nonce:e.nonce,...t?{href:r.value.src,imagesizes:r.value.sizes,imagesrcset:r.value.srcset}:{href:f.value},...typeof e.preload!="boolean"&&e.preload.fetchPriority?{fetchpriority:e.preload.fetchPriority}:{}}]})}const h=z().isHydrating;return w(()=>{if(c.value){const t=new Image;t.src=v.value,e.sizes&&(t.sizes=r.value.sizes||"",t.srcset=r.value.srcset),t.onload=o=>{l.value=!0,i.emit("load",o)},_("nuxt-image");return}s.value&&(s.value.complete&&h&&(s.value.getAttribute("data-error")?i.emit("error",new Event("error")):i.emit("load",new Event("load"))),s.value.onload=t=>{i.emit("load",t)},s.value.onerror=t=>{i.emit("error",t)})}),()=>A("img",{ref:s,...y.value,...i.attrs,class:e.placeholder&&!l.value?[e.placeholderClass]:void 0,src:f.value})}});export{I as _};
