import{ai as Le,aZ as S,aa as Ae,ad as G,ae as ee,ab as de,ac as ue,d as A,al as $e,A as te,a_ as je,s as z,Q as Ue,R as Te,ag as Ne,aw as qe,ak as We,S as Ve,T as B,U as O,a$ as Fe,aq as De,b0 as Ie,ar as Ke,J as Ge,v as ke,y as ze,b1 as Je,o as r,g as $,w as H,b as x,j as V,t as w,e as t,h as C,Y as Qe,c as f,i as n,k as Re,F as oe,r as se,z as Ye,D as pe,b2 as Ze,aC as Xe,f as Be,aB as et,l as Me,b3 as tt,a1 as re,$ as ge,B as me,b4 as ot,a0 as Ce,a2 as xe,n as st,a as Oe,u as nt,H as at,I as rt,L as lt,b5 as ct}from"./D2h1M-6X.js";import{_ as it,a as dt,b as Se,c as ut,d as gt}from"./CZIV6eAH.js";import{_ as He}from"./DM4cFtrS.js";import{S as Y,P as Pe}from"./B35ZW4wC.js";import{_ as mt}from"./5Eo_AKUy.js";import{_ as pt,a as ht}from"./12ETnUMg.js";import{_ as vt}from"./Dfp1UtsB.js";const ft={closeIconSizeTiny:"12px",closeIconSizeSmall:"12px",closeIconSizeMedium:"14px",closeIconSizeLarge:"14px",closeSizeTiny:"16px",closeSizeSmall:"16px",closeSizeMedium:"18px",closeSizeLarge:"18px",padding:"0 7px",closeMargin:"0 0 0 4px"};function bt(e){const{textColor2:a,primaryColorHover:s,primaryColorPressed:d,primaryColor:l,infoColor:u,successColor:c,warningColor:i,errorColor:p,baseColor:y,borderColor:v,opacityDisabled:k,tagColor:R,closeIconColor:g,closeIconColorHover:o,closeIconColorPressed:m,borderRadiusSmall:h,fontSizeMini:T,fontSizeTiny:j,fontSizeSmall:I,fontSizeMedium:P,heightMini:J,heightTiny:M,heightSmall:N,heightMedium:q,closeColorHover:ne,closeColorPressed:Q,buttonColor2Hover:ae,buttonColor2Pressed:F,fontWeightStrong:Z}=e;return Object.assign(Object.assign({},ft),{closeBorderRadius:h,heightTiny:J,heightSmall:M,heightMedium:N,heightLarge:q,borderRadius:h,opacityDisabled:k,fontSizeTiny:T,fontSizeSmall:j,fontSizeMedium:I,fontSizeLarge:P,fontWeightStrong:Z,textColorCheckable:a,textColorHoverCheckable:a,textColorPressedCheckable:a,textColorChecked:y,colorCheckable:"#0000",colorHoverCheckable:ae,colorPressedCheckable:F,colorChecked:l,colorCheckedHover:s,colorCheckedPressed:d,border:`1px solid ${v}`,textColor:a,color:R,colorBordered:"rgb(250, 250, 252)",closeIconColor:g,closeIconColorHover:o,closeIconColorPressed:m,closeColorHover:ne,closeColorPressed:Q,borderPrimary:`1px solid ${S(l,{alpha:.3})}`,textColorPrimary:l,colorPrimary:S(l,{alpha:.12}),colorBorderedPrimary:S(l,{alpha:.1}),closeIconColorPrimary:l,closeIconColorHoverPrimary:l,closeIconColorPressedPrimary:l,closeColorHoverPrimary:S(l,{alpha:.12}),closeColorPressedPrimary:S(l,{alpha:.18}),borderInfo:`1px solid ${S(u,{alpha:.3})}`,textColorInfo:u,colorInfo:S(u,{alpha:.12}),colorBorderedInfo:S(u,{alpha:.1}),closeIconColorInfo:u,closeIconColorHoverInfo:u,closeIconColorPressedInfo:u,closeColorHoverInfo:S(u,{alpha:.12}),closeColorPressedInfo:S(u,{alpha:.18}),borderSuccess:`1px solid ${S(c,{alpha:.3})}`,textColorSuccess:c,colorSuccess:S(c,{alpha:.12}),colorBorderedSuccess:S(c,{alpha:.1}),closeIconColorSuccess:c,closeIconColorHoverSuccess:c,closeIconColorPressedSuccess:c,closeColorHoverSuccess:S(c,{alpha:.12}),closeColorPressedSuccess:S(c,{alpha:.18}),borderWarning:`1px solid ${S(i,{alpha:.35})}`,textColorWarning:i,colorWarning:S(i,{alpha:.15}),colorBorderedWarning:S(i,{alpha:.12}),closeIconColorWarning:i,closeIconColorHoverWarning:i,closeIconColorPressedWarning:i,closeColorHoverWarning:S(i,{alpha:.12}),closeColorPressedWarning:S(i,{alpha:.18}),borderError:`1px solid ${S(p,{alpha:.23})}`,textColorError:p,colorError:S(p,{alpha:.1}),colorBorderedError:S(p,{alpha:.08}),closeIconColorError:p,closeIconColorHoverError:p,closeIconColorPressedError:p,closeColorHoverError:S(p,{alpha:.12}),closeColorPressedError:S(p,{alpha:.18})})}const _t={name:"Tag",common:Le,self:bt},yt={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},xt=Ae("tag",`
 --n-close-margin: var(--n-close-margin-top) var(--n-close-margin-right) var(--n-close-margin-bottom) var(--n-close-margin-left);
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[G("strong",`
 font-weight: var(--n-font-weight-strong);
 `),ee("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),ee("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),ee("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),ee("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),G("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[ee("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),ee("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),G("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),G("icon, avatar",[G("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),G("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),G("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[de("disabled",[ue("&:hover","background-color: var(--n-color-hover-checkable);",[de("checked","color: var(--n-text-color-hover-checkable);")]),ue("&:active","background-color: var(--n-color-pressed-checkable);",[de("checked","color: var(--n-text-color-pressed-checkable);")])]),G("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[de("disabled",[ue("&:hover","background-color: var(--n-color-checked-hover);"),ue("&:active","background-color: var(--n-color-checked-pressed);")])])])]),Ct=Object.assign(Object.assign(Object.assign({},Te.props),yt),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),kt=We("n-tag"),St=A({name:"Tag",props:Ct,setup(e){const a=z(null),{mergedBorderedRef:s,mergedClsPrefixRef:d,inlineThemeDisabled:l,mergedRtlRef:u}=Ue(e),c=Te("Tag","-tag",xt,_t,e,d);Ne(kt,{roundRef:qe(e,"round")});function i(){if(!e.disabled&&e.checkable){const{checked:g,onCheckedChange:o,onUpdateChecked:m,"onUpdate:checked":h}=e;m&&m(!g),h&&h(!g),o&&o(!g)}}function p(g){if(e.triggerClickOnClose||g.stopPropagation(),!e.disabled){const{onClose:o}=e;o&&Ke(o,g)}}const y={setTextContent(g){const{value:o}=a;o&&(o.textContent=g)}},v=Ve("Tag",u,d),k=B(()=>{const{type:g,size:o,color:{color:m,textColor:h}={}}=e,{common:{cubicBezierEaseInOut:T},self:{padding:j,closeMargin:I,borderRadius:P,opacityDisabled:J,textColorCheckable:M,textColorHoverCheckable:N,textColorPressedCheckable:q,textColorChecked:ne,colorCheckable:Q,colorHoverCheckable:ae,colorPressedCheckable:F,colorChecked:Z,colorCheckedHover:b,colorCheckedPressed:_,closeBorderRadius:U,fontWeightStrong:W,[O("colorBordered",g)]:D,[O("closeSize",o)]:E,[O("closeIconSize",o)]:K,[O("fontSize",o)]:X,[O("height",o)]:le,[O("color",g)]:he,[O("textColor",g)]:ve,[O("border",g)]:fe,[O("closeIconColor",g)]:ce,[O("closeIconColorHover",g)]:be,[O("closeIconColorPressed",g)]:_e,[O("closeColorHover",g)]:ye,[O("closeColorPressed",g)]:ie}}=c.value,L=Fe(I);return{"--n-font-weight-strong":W,"--n-avatar-size-override":`calc(${le} - 8px)`,"--n-bezier":T,"--n-border-radius":P,"--n-border":fe,"--n-close-icon-size":K,"--n-close-color-pressed":ie,"--n-close-color-hover":ye,"--n-close-border-radius":U,"--n-close-icon-color":ce,"--n-close-icon-color-hover":be,"--n-close-icon-color-pressed":_e,"--n-close-icon-color-disabled":ce,"--n-close-margin-top":L.top,"--n-close-margin-right":L.right,"--n-close-margin-bottom":L.bottom,"--n-close-margin-left":L.left,"--n-close-size":E,"--n-color":m||(s.value?D:he),"--n-color-checkable":Q,"--n-color-checked":Z,"--n-color-checked-hover":b,"--n-color-checked-pressed":_,"--n-color-hover-checkable":ae,"--n-color-pressed-checkable":F,"--n-font-size":X,"--n-height":le,"--n-opacity-disabled":J,"--n-padding":j,"--n-text-color":h||ve,"--n-text-color-checkable":M,"--n-text-color-checked":ne,"--n-text-color-hover-checkable":N,"--n-text-color-pressed-checkable":q}}),R=l?De("tag",B(()=>{let g="";const{type:o,size:m,color:{color:h,textColor:T}={}}=e;return g+=o[0],g+=m[0],h&&(g+=`a${Ie(h)}`),T&&(g+=`b${Ie(T)}`),s.value&&(g+="c"),g}),k,e):void 0;return Object.assign(Object.assign({},y),{rtlEnabled:v,mergedClsPrefix:d,contentRef:a,mergedBordered:s,handleClick:i,handleCloseClick:p,cssVars:l?void 0:k,themeClass:R==null?void 0:R.themeClass,onRender:R==null?void 0:R.onRender})},render(){var e,a;const{mergedClsPrefix:s,rtlEnabled:d,closable:l,color:{borderColor:u}={},round:c,onRender:i,$slots:p}=this;i==null||i();const y=$e(p.avatar,k=>k&&te("div",{class:`${s}-tag__avatar`},k)),v=$e(p.icon,k=>k&&te("div",{class:`${s}-tag__icon`},k));return te("div",{class:[`${s}-tag`,this.themeClass,{[`${s}-tag--rtl`]:d,[`${s}-tag--strong`]:this.strong,[`${s}-tag--disabled`]:this.disabled,[`${s}-tag--checkable`]:this.checkable,[`${s}-tag--checked`]:this.checkable&&this.checked,[`${s}-tag--round`]:c,[`${s}-tag--avatar`]:y,[`${s}-tag--icon`]:v,[`${s}-tag--closable`]:l}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},v||y,te("span",{class:`${s}-tag__content`,ref:"contentRef"},(a=(e=this.$slots).default)===null||a===void 0?void 0:a.call(e)),!this.checkable&&l?te(je,{clsPrefix:s,class:`${s}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:c,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?te("div",{class:`${s}-tag__border`,style:{borderColor:u}}):null)}}),wt=e=>{const a=Object.create(null);for(const s in e){const d=e[s];d!==void 0&&(a[s]=d)}return a},we=(e,a)=>(s,d)=>(Ge(()=>e({...wt(s),...d.attrs},d)),()=>{var l,u;return a?(u=(l=d.slots).default)==null?void 0:u.call(l):null}),Ee={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:[String,Object,Array],contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},$t=A({name:"Link",inheritAttrs:!1,props:{...Ee,as:String,crossorigin:String,disabled:Boolean,fetchpriority:String,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String,body:Boolean,renderPriority:[String,Number]},setup:we(e=>({link:[e]}))}),It=A({name:"Title",inheritAttrs:!1,setup:we((e,{slots:a})=>{var s,d,l;return{title:((l=(d=(s=a.default)==null?void 0:s.call(a))==null?void 0:d[0])==null?void 0:l.children)||null}})}),Pt=A({name:"Meta",inheritAttrs:!1,props:{...Ee,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:we(e=>{const a={...e};return a.httpEquiv&&(a["http-equiv"]=a.httpEquiv,delete a.httpEquiv),{meta:[a]}})}),Tt=A({name:"Head",inheritAttrs:!1,setup:(e,a)=>()=>{var s,d;return(d=(s=a.slots).default)==null?void 0:d.call(s)}});var zt={};const Rt=A({__name:"SEOHead",props:{info:{type:Object,required:!0}},setup(e){var h;const{frontEndUrl:a,wooNuxtSEO:s,stripHtml:d}=ke(),{path:l}=ze(),u=e.info.name,c=`${a}${l}`,i=zt.SITE_TITLE??"WooNuxt",p=Je(),y=a,v=((h=e.info.image)==null?void 0:h.sourceUrl)??"/images/placeholder.jpg",k=y+p.getSizes(v,{width:1200,height:630}).src,R=y+p.getSizes(v,{width:1600,height:900}).src,g=e.info.shortDescription||e.info.description?d(e.info.shortDescription):d(e.info.description),o=(s==null?void 0:s.find(T=>T.provider==="facebook"))??null,m=(s==null?void 0:s.find(T=>T.provider==="twitter"))??null;return(T,j)=>{const I=It,P=Pt,J=$t,M=Tt;return r(),$(M,null,{default:H(()=>{var N,q;return[x(I,null,{default:H(()=>[V(w(t(u)),1)]),_:1}),t(g)?(r(),$(P,{key:0,name:"description",hid:"description",content:t(g)},null,8,["content"])):C("",!0),x(P,{name:"image",hid:"image",content:k}),x(P,{property:"og:site_name",hid:"og:site_name",content:t(i)},null,8,["content"]),x(P,{property:"og:url",hid:"og:url",content:c}),e.info.name?(r(),$(P,{key:1,property:"og:title",hid:"og:title",content:e.info.name},null,8,["content"])):C("",!0),t(g)?(r(),$(P,{key:2,property:"og:description",hid:"og:description",content:t(g)},null,8,["content"])):C("",!0),x(P,{property:"og:image",hid:"og:image",content:k}),(N=t(o))!=null&&N.url?(r(),$(P,{key:3,property:"article:publisher",hid:"article:publisher",content:t(o).url},null,8,["content"])):C("",!0),x(P,{name:"twitter:card",hid:"twitter:card",content:"summary_large_image"}),(q=t(m))!=null&&q.handle?(r(),$(P,{key:4,name:"twitter:site",hid:"twitter:site",content:t(m).handle},null,8,["content"])):C("",!0),e.info.name?(r(),$(P,{key:5,name:"twitter:title",hid:"twitter:title",content:e.info.name},null,8,["content"])):C("",!0),t(g)?(r(),$(P,{key:6,name:"twitter:description",hid:"twitter:description",content:t(g)},null,8,["content"])):C("",!0),x(P,{name:"twitter:image",hid:"twitter:image",content:R}),x(P,{name:"twitter:url",hid:"twitter:url",content:c}),x(J,{rel:"canonical",hid:"canonical",href:c})]}),_:1})}}}),Bt={class:"flex text-sm leading-none text-gray-400 gap-1 items-center"},Mt={key:2},Ot=A({__name:"Breadcrumb",props:{product:{}},setup(e){var u;const a=Qe(),s=((u=a==null?void 0:a.public)==null?void 0:u.PRODUCT_CATEGORY_PERMALINK)||"/product-category/",d=B(()=>{var c;return(c=e.product.productCategories)==null?void 0:c.nodes[0]}),l=B(()=>{var c,i;return[{name:"Products",slug:"/products"},{name:(c=d.value)==null?void 0:c.name,slug:`${String(s)}${(i=d.value)==null?void 0:i.slug}`},{name:e.product.name}]});return(c,i)=>{const p=Re,y=it;return r(),f("div",Bt,[n("span",null,[x(p,{to:"/",class:"hover:text-primary"},{default:H(()=>[V(w(c.$t("messages.general.home")),1)]),_:1}),i[0]||(i[0]=n("span",null," >",-1))]),(r(!0),f(oe,null,se(t(l),(v,k)=>(r(),f("span",{key:v.name||k},[v.slug?(r(),$(p,{key:0,to:decodeURIComponent(v.slug),class:"hover:text-primary"},{default:H(()=>[V(w(v.name),1)]),_:2},1032,["to"])):(r(),$(y,{key:1,style:{"max-width":"150px"},class:"text-gray-800"},{default:H(()=>[V(w(v.name),1)]),_:2},1024)),k+1<t(l).length?(r(),f("span",Mt," >")):C("",!0)]))),128))])}}}),Ht={key:0,class:"my-4 gallery-images"},Et=A({__name:"ProductImageGallery",props:{mainImage:{type:Object,required:!0},gallery:{type:Object,required:!0},node:{type:Object,required:!0},activeVariation:{type:Object,required:!1}},setup(e){const{fallbackImage:a}=ke(),s=e,d=B(()=>({sourceUrl:s.mainImage.sourceUrl||a,title:s.mainImage.title,altText:s.mainImage.altText,databaseId:s.mainImage.databaseId})),l=z(d.value),u=B(()=>[d.value,...s.gallery.nodes].filter((i,p,y)=>p===y.findIndex(v=>(v==null?void 0:v.databaseId)===(i==null?void 0:i.databaseId)))),c=i=>{i&&(l.value=i)};return Ye(()=>s.activeVariation,i=>{if(i!=null&&i.image){const p=u.value.find(y=>{var v;return y.databaseId===((v=i.image)==null?void 0:v.databaseId)});p&&(l.value=p)}}),(i,p)=>{const y=dt,v=He;return r(),f("div",null,[x(y,{node:e.node,class:"absolute text-base top-4 right-4"},null,8,["node"]),x(v,{class:"rounded-xl object-contain w-full min-w-[350px]",width:"640",height:"640",alt:t(l).altText||e.node.name,title:t(l).title||e.node.name,src:t(l).sourceUrl||t(a),sizes:"100vw lg:640px",fetchpriority:"high",placeholder:"","placeholder-class":"blur-xl"},null,8,["alt","title","src"]),e.gallery.nodes.length?(r(),f("div",Ht,[(r(!0),f(oe,null,se(t(u),k=>(r(),$(v,{key:k.databaseId,class:"cursor-pointer rounded-xl",width:"640",height:"640",src:k.sourceUrl,alt:k.altText||e.node.name,title:k.title||e.node.name,sizes:"100vw lg:640px",placeholder:"","placeholder-class":"blur-xl",loading:"lazy",onClick:R=>c(k)},null,8,["src","alt","title","onClick"]))),128))])):C("",!0)])}}}),Lt=pe(Et,[["__scopeId","data-v-42e5fc3a"]]),At=A({__name:"StockStatus",props:{stockStatus:{type:String,required:!1}},setup(e){const a={[Y.IN_STOCK]:{text:"messages.shop.inStock",type:"success"},[Y.OUT_OF_STOCK]:{text:"messages.shop.outOfStock",type:"error"},[Y.ON_BACKORDER]:{text:"messages.shop.onBackorder",type:"warning"},default:{text:"Loading",type:"info"}};return(s,d)=>{var u,c;const l=Ze;return r(),$(l,{value:s.$t(((u=a[e.stockStatus])==null?void 0:u.text)||a.default.text),type:((c=a[e.stockStatus])==null?void 0:c.type)||a.default.type},null,8,["value","type"])}}}),jt=A({__name:"WishlistButton",props:{product:{}},setup(e){const{addToWishlist:a,removeFromWishlist:s,isInList:d}=Xe(),l=B(()=>e.product.databaseId?d(e.product.databaseId):!1),u=()=>l.value&&e.product.databaseId?s(e.product.databaseId):a(e.product);return(c,i)=>{const p=Be;return r(),f("button",{type:"button",class:"cursor-pointer flex mt-4 text-sm text-gray-400 gap-2 items-center",onClick:u},[t(l)?(r(),$(p,{key:0,name:"ion:heart",size:"18",class:"text-red-400"})):(r(),$(p,{key:1,name:"ion:heart-outline",size:"18"})),n("span",null,w(t(l)?c.$t("messages.shop.wishlistRemove"):c.$t("messages.shop.wishlistAdd")),1)])}}}),Ut={key:0,class:"font-semibold text-sm text-2xl text-gray-900"},Nt={key:1,class:"font-semibold text-sm text-2xl text-gray-900"},qt={key:2,class:"my-2"},Wt={class:"text-sm"},Vt={class:"my-4 bars"},Ft={class:"flex text-sm gap-1 items-center"},Dt={class:"flex-1 relative"},Kt={class:"mt-10 text-xl mb-2 text-gray-900"},Gt={class:"text-sm mb-4"},Jt={class:"w-full text-gray-500"},Qt={class:"p-5 mt-3 grid gap-2 border rounded-lg"},Yt={class:"block text-center mb-1.5"},Zt={class:"text-center text-sm block relative m-auto"},Xt={class:"gap-1 flex justify-center mt-2 relative"},eo=["onMouseover"],to=["value"],oo={class:"w-full col-span-full"},so={for:"content",class:"text-sm mb-0.5"},no={class:"w-full col-span-full"},ao={for:"author",class:"text-sm mb-0.5"},ro=["innerHTML"],lo=["innerHTML"],co={class:"w-full col-span-full text-center mt-3"},io={class:"flex gap-4 justify-center items-center transition font-semibold rounded-md w-full p-2 bg-amber-300 text-amber-900 hover:bg-amber-400",type:"submit"},uo={__name:"ReviewsScore",props:{reviews:{type:Object,default:null},productId:{type:Number,default:null},size:{type:Number,default:21}},setup(e){const a=e,s=B(()=>{const o=[0,0,0,0,0];a.reviews.edges.forEach(h=>{o[h.rating-1]+=1});const m=o.reduce((h,T)=>h+T,0);return o.map((h,T)=>{const j=h/m*100;return{count:h,percentage:j,rating:T+1}}).reverse()}),d=z(!1),l=z(0),u=z(null),c=z(null),i=z(null),p=z(""),y=z(""),v=z(!1);function k(o){l.value=o}function R(){l.value=0}async function g(){var m;const o={commentOn:a.productId,author:i.value.split("@")[0],content:c.value,rating:u.value,authorEmail:i.value};try{v.value=!0,await tt(o),y.value="Your review is awaiting approval",setTimeout(()=>{y.value="",d.value=!1},4e3)}catch(h){p.value=(m=h==null?void 0:h.gqlErrors)==null?void 0:m[0].message,setTimeout(()=>{p.value=""},5e3)}finally{v.value=!1}}return(o,m)=>{const h=Se,T=Be,j=st;return r(),f("div",null,[e.reviews.edges.length?(r(),f("h4",Ut,w(o.$t("messages.shop.customerReviews")),1)):(r(),f("h4",Nt,w(o.$t("messages.shop.noReviews")),1)),e.reviews.edges.length?(r(),f("div",qt,[x(h,{rating:e.reviews.averageRating,"hide-count":!0,class:"text-sm mr-2"},null,8,["rating"]),n("span",Wt,w(o.$t("messages.general.basedOn"))+" "+w(e.reviews.edges.length)+" "+w(o.$t("messages.shop.reviews")),1)])):C("",!0),n("div",Vt,[(r(!0),f(oe,null,se(t(s),I=>(r(),f("div",{key:I,class:"flex gap-4 items-center"},[n("div",Ft,[V(w(I.rating)+" ",1),x(T,{class:"text-yellow-400",name:"ion:star"})]),n("div",Dt,[m[4]||(m[4]=n("div",{class:"rounded-full bg-gray-200 h-2.5 w-full"},null,-1)),n("div",{class:"rounded-full bg-yellow-400 h-2.5 top-0 left-0 absolute",style:et({width:I.percentage+"%"})},null,4)])]))),128))]),n("div",Kt,w(o.$t("messages.shop.rateReview")),1),n("div",Gt,w(o.$t("messages.shop.rateContent")),1),n("button",{onClick:m[0]||(m[0]=I=>d.value=!t(d)),class:"border rounded-lg text-center w-full p-2"},w(t(d)?o.$t("messages.shop.close"):o.$t("messages.shop.writeReview")),1),x(xe,{class:"ease-in-out transform transition-all",name:"scale-y"},{default:H(()=>[t(d)?(r(),f("form",{key:0,onSubmit:Me(g,["prevent"]),class:"writeReview"},[n("div",Jt,[n("div",Qt,[n("div",Yt,[n("label",Zt,[V(w(o.$t("messages.shop.rateReview"))+" ",1),m[5]||(m[5]=n("span",{class:"text-red-500"},"*",-1))]),n("div",Xt,[(r(),f(oe,null,se(5,I=>n("label",{key:I,class:re(["grid p-1 rounded",t(u)<I&&I>t(l)?"disable-star":"checked-star"]),onMouseover:P=>k(I),onMouseout:R},[ge(n("input",{type:"radio",class:"overflow-hidden appearance-none opacity-0 absolute",name:"rating",value:I,"onUpdate:modelValue":m[1]||(m[1]=P=>me(u)?u.value=P:null),required:""},null,8,to),[[ot,t(u)]]),x(T,{name:"ion:star",size:e.size+""},null,8,["size"])],42,eo)),64))])]),n("div",oo,[n("label",so,[V(w(o.$t("messages.shop.rateContent"))+" ",1),m[6]||(m[6]=n("span",{class:"text-red-500"},"*",-1))]),ge(n("textarea",{class:"w-full",id:"content",placeholder:"Great Quality","onUpdate:modelValue":m[2]||(m[2]=I=>me(c)?c.value=I:null),required:""},null,512),[[Ce,t(c)]])]),n("div",no,[n("label",ao,[V(w(o.$t("messages.shop.rateEmail"))+" ",1),m[7]||(m[7]=n("span",{class:"text-red-500"},"*",-1))]),ge(n("input",{class:"w-full",id:"author",placeholder:"example@example.com",type:"email",pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$","onUpdate:modelValue":m[3]||(m[3]=I=>me(i)?i.value=I:null),required:""},null,512),[[Ce,t(i)]])]),x(xe,{name:"scale-y",mode:"out-in"},{default:H(()=>[t(p)?(r(),f("div",{key:0,class:"my-4 text-sm text-red-500",innerHTML:t(p)},null,8,ro)):C("",!0)]),_:1}),x(xe,{name:"scale-y",mode:"out-in"},{default:H(()=>[t(y)?(r(),f("div",{key:0,class:"my-4 text-sm text-green-500",innerHTML:t(y)},null,8,lo)):C("",!0)]),_:1}),n("div",co,[n("button",io,[t(v)?(r(),$(j,{key:0,stroke:"4",size:"16",color:"#78350F"})):C("",!0),n("span",null,w(o.$t("messages.shop.submit")),1)])])])])],32)):C("",!0)]),_:1})])}}},go=pe(uo,[["__scopeId","data-v-bb692257"]]),mo={class:"flex flex-wrap gap-32 items-start"},po={class:"flex max-w-sm gap-4 prose"},ho={key:0,class:"divide-y flex-1"},vo={class:"flex gap-4 items-center"},fo=["src"],bo={class:"grid gap-1"},_o={class:"text-sm"},yo={class:"font-semibold"},xo={class:"italic text-gray-400"},Co=["innerHTML"],ko={__name:"ProductReviews",props:{product:{type:Object,default:null}},setup(e){return(a,s)=>{var u;const d=go,l=Se;return r(),f("div",mo,[n("div",po,[e.product.reviews?(r(),$(d,{key:0,reviews:e.product.reviews,productId:e.product.databaseId},null,8,["reviews","productId"])):C("",!0)]),(u=e.product.reviews)!=null&&u.edges&&e.product.reviews.edges.length?(r(),f("div",ho,[(r(!0),f(oe,null,se(e.product.reviews.edges,c=>(r(),f("div",{key:c.id,class:"my-2 py-8"},[n("div",vo,[c.node.author.node.avatar?(r(),f("img",{key:0,src:c.node.author.node.avatar.url,class:"rounded-full h-12 w-12"},null,8,fo)):C("",!0),n("div",bo,[n("div",_o,[n("span",yo,w(c.node.author.node.name),1),n("span",xo," – "+w(new Date(c.node.date).toLocaleString(a.$t("messages.general.langCode"),{month:"long",day:"numeric",year:"numeric"})),1)]),x(l,{rating:c.rating,"hide-count":!0,class:"text-sm"},null,8,["rating"])])]),n("div",{class:"mt-4 text-gray-700 italic prose-sm",innerHTML:c.node.content},null,8,Co)]))),128))])):C("",!0)])}}},So=["innerHTML"],wo=A({__name:"ProductTabs",props:{product:{type:Object,required:!0}},setup(e){const{storeSettings:a}=Oe(),s=e.product.description?0:1;return z(s),(d,l)=>{const u=pt,c=ko,i=ht;return r(),$(i,{type:"segment",animated:""},{default:H(()=>[e.product.description?(r(),$(u,{key:0,name:"description",tab:d.$t("messages.shop.productDescription")},{default:H(()=>[n("div",{innerHTML:e.product.description,class:"font-light mt-8 prose"},null,8,So)]),_:1},8,["tab"])):C("",!0),t(a).showReviews?(r(),$(u,{key:1,name:"reviews",tab:`${d.$t("messages.shop.reviews")} (${e.product.reviewCount})`},{default:H(()=>[x(c,{product:e.product},null,8,["product"])]),_:1},8,["tab"])):C("",!0)]),_:1})}}}),$o=pe(wo,[["__scopeId","data-v-6515b59b"]]),Io={class:"flex flex-col gap-10 md:flex-row md:justify-between lg:gap-24"},Po={class:"lg:max-w-md xl:max-w-lg md:py-2 w-full"},To={class:"flex justify-between mb-4"},zo={class:"flex-1"},Ro={class:"flex flex-col justify-end gap-2"},Bo={class:"grid gap-2 text-sm"},Mo={key:0,class:"flex items-center gap-2"},Oo={class:"text-gray-400"},Ho=["innerHTML"],Eo={key:0},Lo={class:"grid gap-2 my-8 text-sm"},Ao={class:"flex items-center gap-2"},jo={class:"text-gray-400"},Uo={key:0,class:"product-categories"},No={class:"flex flex-wrap gap-4"},qo={key:1,class:"my-8"},Wo={class:"mb-4 text-xl font-semibold"},Vo=A({__name:"[slug]",async setup(e){var Z;let a,s;const d=ze(),{storeSettings:l}=Oe(),{arraysEqual:u,formatArray:c,checkForVariationTypeOfAny:i}=ke(),{addToCart:p,isUpdatingCart:y}=nt(),v=d.params.slug,k=z(""),R=async b=>{y.value=!0,k.value="";try{await p(b)}catch(_){console.error("Error adding item to cart:",_),k.value=_||"There was an error adding the item to your cart. Please try again."}finally{y.value=!1}},{data:g}=([a,s]=at(()=>rt("getProduct",{slug:v})),a=await a,s(),a),o=z((Z=g==null?void 0:g.value)==null?void 0:Z.product),m=z(1),h=z(null),T=z([]),j=z([]),I=z(),P=B(()=>{var b;return((b=o.value)==null?void 0:b.type)===Pe.SIMPLE}),J=B(()=>{var b;return((b=o.value)==null?void 0:b.type)===Pe.VARIABLE}),M=B(()=>h.value||o.value),N=B(()=>{var b;return{productId:(b=M.value)==null?void 0:b.databaseId,quantity:m.value}}),q=b=>{var _,U,W;o.value.stockStatus=b.stockStatus??((_=o.value)==null?void 0:_.stockStatus),(W=(U=b.variations)==null?void 0:U.nodes)==null||W.forEach((D,E)=>{var K,X;(X=(K=o.value)==null?void 0:K.variations)!=null&&X.nodes[E]&&(o.value.variations.nodes[E].stockStatus=D.stockStatus)})};lt(async()=>{var b;try{const{product:_}=await ct({slug:v});_&&q(_)}catch(_){const U=(b=_==null?void 0:_.gqlErrors)==null?void 0:b[0].message;U&&console.error(U)}o.value.variations&&j.value.push(...i(o.value))});const ne=b=>{var W,D;if(!o.value.variations)return;I.value=b.map(E=>({attributeName:E.name,attributeValue:E.value}));const _=JSON.parse(JSON.stringify(b)),U=(W=o.value.variations)==null?void 0:W.nodes.filter(E=>{if(E.attributes)return j.value.forEach(K=>_[K].value=""),u(c(E.attributes.nodes),c(_))});h.value=U[0],N.value.variationId=((D=h.value)==null?void 0:D.databaseId)??null,N.value.variation=h.value?I.value:null,T.value=b},Q=B(()=>{var b,_;return J.value?((b=h.value)==null?void 0:b.stockStatus)||Y.OUT_OF_STOCK:((_=M.value)==null?void 0:_.stockStatus)||Y.OUT_OF_STOCK}),ae=B(()=>P.value?!M.value||Q.value===Y.OUT_OF_STOCK||y.value:!M.value||Q.value===Y.OUT_OF_STOCK||!h.value||y.value),F=l.isNative;return(b,_)=>{var ie;const U=Rt,W=Ot,D=Lt,E=He,K=Se,X=At,le=mt,he=ut,ve=gt,fe=St,ce=Re,be=jt,_e=$o,ye=vt;return t(o)?(r(),f("main",{key:0,class:re(["py-6 xl:max-w-7xl",t(F)?"myglass relative px-4":"container relative"])},[x(U,{info:t(o)},null,8,["info"]),t(l).showBreadcrumbOnSingleProduct&&!t(F)?(r(),$(W,{key:0,product:t(o),class:"mb-6"},null,8,["product"])):C("",!0),n("div",Io,[t(o).image?(r(),$(D,{key:0,class:"relative flex-1","main-image":t(o).image,gallery:t(o).galleryImages,node:t(M),activeVariation:t(h)||{}},null,8,["main-image","gallery","node","activeVariation"])):(r(),$(E,{key:1,class:"relative flex-1 skeleton",src:"/images/placeholder.jpg",alt:((ie=t(o))==null?void 0:ie.name)||"Product"},null,8,["alt"])),n("div",Po,[n("div",To,[n("div",zo,[n("div",Ro,[t(l).showReviews?(r(),$(K,{key:0,rating:t(o).averageRating||0,count:t(o).reviewCount||0},null,8,["rating","count"])):C("",!0),x(X,{stockStatus:t(Q),onUpdated:q},null,8,["stockStatus"])])]),x(le,{class:"text-xl","sale-price":t(M).salePrice,"regular-price":t(M).regularPrice},null,8,["sale-price","regular-price"])]),n("div",Bo,[t(l).showSKU?(r(),f("div",Mo,[n("span",Oo,w(b.$t("messages.shop.sku"))+": ",1),n("span",null,w(t(o).sku||"N/A"),1)])):C("",!0)]),n("div",{class:"mb-4 font-light prose",innerHTML:t(o).shortDescription||t(o).description},null,8,Ho),_[3]||(_[3]=n("hr",null,null,-1)),n("form",{onSubmit:_[1]||(_[1]=Me(L=>R(t(N)),["prevent"]))},[t(o).type=="VARIABLE"&&t(o).attributes&&t(o).variations?(r(),$(he,{key:0,class:"mt-8 mb-8",attributes:t(o).attributes.nodes,defaultAttributes:t(o).defaultAttributes,variations:t(o).variations.nodes,onAttrsChanged:ne},null,8,["attributes","defaultAttributes","variations"])):C("",!0),n("div",{class:re(["fixed bottom-0 left-0 z-10 flex items-center w-full gap-4 p-4 mt-12 bg-white md:static md:bg-transparent bg-opacity-90 md:p-0",t(F)?"sticky  left-0":""])},[ge(n("input",{"onUpdate:modelValue":_[0]||(_[0]=L=>me(m)?m.value=L:null),type:"number",min:"1","aria-label":"Quantity",class:"bg-white border rounded-lg flex text-left p-2.5 w-20 gap-4 items-center justify-center focus:outline-none"},null,512),[[Ce,t(m)]]),x(ve,{class:re(["flex-1 w-full md:max-w-xs",{loading:t(y)}]),disabled:t(ae)},null,8,["disabled","class"])],2)],32),t(l).showProductCategoriesOnSingleProduct?(r(),f("div",Eo,[n("div",Lo,[n("div",Ao,[n("span",jo,w(b.$t("messages.shop.category",2))+":",1),t(o).productCategories?(r(),f("div",Uo,[(r(!0),f(oe,null,se(t(o).productCategories.nodes,L=>(r(),$(ce,{key:L.slug,to:`/product-category/${decodeURIComponent(L.slug)}`,class:"hover:text-primary",title:L.name},{default:H(()=>[x(fe,{round:""},{default:H(()=>[V(w(L.name),1)]),_:2},1024)]),_:2},1032,["to","title"]))),128))])):C("",!0)])]),_[2]||(_[2]=n("hr",null,null,-1))])):C("",!0),n("div",No,[x(be,{product:t(o)},null,8,["product"])])])]),t(o).description||t(o).reviews?(r(),f("div",qo,[x(_e,{product:t(o)},null,8,["product"])])):C("",!0),t(o).related&&t(l).showRelatedProducts?(r(),f("div",{key:2,class:re(t(F)?"mb-0":"my-24")},[n("div",Wo,w(b.$t("messages.shop.youMayLike")),1),x(ye,{products:t(o).related.nodes,class:"grid-cols-2 md:grid-cols-4 lg:grid-cols-5"},null,8,["products"])],2)):C("",!0)],2)):C("",!0)}}}),Zo=pe(Vo,[["__scopeId","data-v-ca908440"]]);export{Zo as default};