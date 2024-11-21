import{N as Lt,aD as Ot,aE as Ft,ai as ut,aF as dt,a7 as Ht,ak as Xt,a9 as Kt,ag as Ut,d as W,A as C,aG as Wt,Q as ce,s as U,aH as Yt,T as h,L as Me,aI as ft,aa as pt,ae as d,ac as T,ad as p,O as Zt,aJ as qe,aK as Qe,$ as qt,a4 as Qt,a2 as Gt,aL as Ge,aM as Jt,aw as en,aB as tn,aN as nn,aO as re,aP as Je,aQ as on,z as xe,aR as an,aS as ie,R as _e,aq as sn,aT as rn,aU as ln,F as we,U as cn,aV as et,D as Le,o as D,c as L,i as S,t as Z,j as je,b as V,v as mt,g as le,w as Be,e as K,k as gt,h as Ae,a as tt,x as un,K as dn,aW as fn,a1 as nt,r as Te}from"./D2h1M-6X.js";import{_ as vt}from"./DM4cFtrS.js";import{_ as pn}from"./Dfp1UtsB.js";import{u as mn}from"./hrPMgQTE.js";import{c as gn}from"./Di8atcbM.js";import"./CZIV6eAH.js";import"./5Eo_AKUy.js";import"./B35ZW4wC.js";let ot=!1;function vn(){if(Lt&&window.CSS&&!ot&&(ot=!0,"registerProperty"in(window==null?void 0:window.CSS)))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}function hn(e){return Ot(Ft(e).toLowerCase())}var at=gn(function(e,n,a){return n=n.toLowerCase(),e+(a?hn(n):n)});function xn(){return{dotSize:"8px",dotColor:"rgba(255, 255, 255, .3)",dotColorActive:"rgba(255, 255, 255, 1)",dotColorFocus:"rgba(255, 255, 255, .5)",dotLineWidth:"16px",dotLineWidthActive:"24px",arrowColor:"#eee"}}const bn={name:"Carousel",common:ut,self:xn};function wn(e){const{length:n}=e;return n>1&&(e.push(st(e[0],0,"append")),e.unshift(st(e[n-1],n-1,"prepend"))),e}function st(e,n,a){return dt(e,{key:`carousel-item-duplicate-${n}-${a}`})}function rt(e,n,a){return n===1?0:a?e===0?n-3:e===n-1?0:e-1:e}function Ve(e,n){return n?e+1:e}function yn(e,n,a){return e<0?null:e===0?a?n-1:null:e-1}function _n(e,n,a){return e>n-1?null:e===n-1?a?0:null:e+1}function Sn(e,n){return n&&e>3?e-2:e}function it(e){return window.TouchEvent&&e instanceof window.TouchEvent}function lt(e,n){let{offsetWidth:a,offsetHeight:s}=e;if(n){const i=getComputedStyle(e);a=a-Number.parseFloat(i.getPropertyValue("padding-left"))-Number.parseFloat(i.getPropertyValue("padding-right")),s=s-Number.parseFloat(i.getPropertyValue("padding-top"))-Number.parseFloat(i.getPropertyValue("padding-bottom"))}return{width:a,height:s}}function be(e,n,a){return e<n?n:e>a?a:e}function Cn(e){if(e===void 0)return 0;if(typeof e=="number")return e;const n=/^((\d+)?\.?\d+?)(ms|s)?$/,a=e.match(n);if(a){const[,s,,i="ms"]=a;return Number(s)*(i==="ms"?1:1e3)}return 0}const ht=Xt("n-carousel-methods");function kn(e){Ut(ht,e)}function Oe(e="unknown",n="component"){const a=Ht(ht);return a||Kt(e,`\`${n}\` must be placed inside \`n-carousel\`.`),a}const Pn={total:{type:Number,default:0},currentIndex:{type:Number,default:0},dotType:{type:String,default:"dot"},trigger:{type:String,default:"click"},keyboard:Boolean},$n=W({name:"CarouselDots",props:Pn,setup(e){const{mergedClsPrefixRef:n}=ce(e),a=U([]),s=Oe();function i(x,f){switch(x.key){case"Enter":case" ":x.preventDefault(),s.to(f);return}e.keyboard&&g(x)}function m(x){e.trigger==="hover"&&s.to(x)}function w(x){e.trigger==="click"&&s.to(x)}function g(x){var f;if(x.shiftKey||x.altKey||x.ctrlKey||x.metaKey)return;const v=(f=document.activeElement)===null||f===void 0?void 0:f.nodeName.toLowerCase();if(v==="input"||v==="textarea")return;const{code:P}=x,I=P==="PageUp"||P==="ArrowUp",A=P==="PageDown"||P==="ArrowDown",b=P==="PageUp"||P==="ArrowRight",$=P==="PageDown"||P==="ArrowLeft",z=s.isVertical(),N=z?I:b,O=z?A:$;!N&&!O||(x.preventDefault(),N&&!s.isNextDisabled()?(s.next(),_(s.currentIndexRef.value)):O&&!s.isPrevDisabled()&&(s.prev(),_(s.currentIndexRef.value)))}function _(x){var f;(f=a.value[x])===null||f===void 0||f.focus()}return Yt(()=>a.value.length=0),{mergedClsPrefix:n,dotEls:a,handleKeydown:i,handleMouseenter:m,handleClick:w}},render(){const{mergedClsPrefix:e,dotEls:n}=this;return C("div",{class:[`${e}-carousel__dots`,`${e}-carousel__dots--${this.dotType}`],role:"tablist"},Wt(this.total,a=>{const s=a===this.currentIndex;return C("div",{"aria-selected":s,ref:i=>n.push(i),role:"button",tabindex:"0",class:[`${e}-carousel__dot`,s&&`${e}-carousel__dot--active`],key:a,onClick:()=>{this.handleClick(a)},onMouseenter:()=>{this.handleMouseenter(a)},onKeydown:i=>{this.handleKeydown(i,a)}})}))}}),zn=C("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},C("g",{fill:"none"},C("path",{d:"M10.26 3.2a.75.75 0 0 1 .04 1.06L6.773 8l3.527 3.74a.75.75 0 1 1-1.1 1.02l-4-4.25a.75.75 0 0 1 0-1.02l4-4.25a.75.75 0 0 1 1.06-.04z",fill:"currentColor"}))),Rn=C("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},C("g",{fill:"none"},C("path",{d:"M5.74 3.2a.75.75 0 0 0-.04 1.06L9.227 8L5.7 11.74a.75.75 0 1 0 1.1 1.02l4-4.25a.75.75 0 0 0 0-1.02l-4-4.25a.75.75 0 0 0-1.06-.04z",fill:"currentColor"}))),In=W({name:"CarouselArrow",setup(e){const{mergedClsPrefixRef:n}=ce(e),{isVertical:a,isPrevDisabled:s,isNextDisabled:i,prev:m,next:w}=Oe();return{mergedClsPrefix:n,isVertical:a,isPrevDisabled:s,isNextDisabled:i,prev:m,next:w}},render(){const{mergedClsPrefix:e}=this;return C("div",{class:`${e}-carousel__arrow-group`},C("div",{class:[`${e}-carousel__arrow`,this.isPrevDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.prev},zn),C("div",{class:[`${e}-carousel__arrow`,this.isNextDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.next},Rn))}}),ye="CarouselItem";function Nn(e){var n;return((n=e.type)===null||n===void 0?void 0:n.name)===ye}const Dn=W({name:ye,setup(e){const{mergedClsPrefixRef:n}=ce(e),a=Oe(at(ye),`n-${at(ye)}`),s=U(),i=h(()=>{const{value:f}=s;return f?a.getSlideIndex(f):-1}),m=h(()=>a.isPrev(i.value)),w=h(()=>a.isNext(i.value)),g=h(()=>a.isActive(i.value)),_=h(()=>a.getSlideStyle(i.value));Me(()=>{a.addSlide(s.value)}),ft(()=>{a.removeSlide(s.value)});function x(f){const{value:v}=i;v!==void 0&&(a==null||a.onCarouselItemClick(v,f))}return{mergedClsPrefix:n,selfElRef:s,isPrev:m,isNext:w,isActive:g,index:i,style:_,handleClick:x}},render(){var e;const{$slots:n,mergedClsPrefix:a,isPrev:s,isNext:i,isActive:m,index:w,style:g}=this,_=[`${a}-carousel__slide`,{[`${a}-carousel__slide--current`]:m,[`${a}-carousel__slide--prev`]:s,[`${a}-carousel__slide--next`]:i}];return C("div",{ref:"selfElRef",class:_,role:"option",tabindex:"-1","data-index":w,"aria-hidden":!m,style:g,onClickCapture:this.handleClick},(e=n.default)===null||e===void 0?void 0:e.call(n,{isPrev:s,isNext:i,isActive:m,index:w}))}}),Tn=pt("carousel",`
 position: relative;
 width: 100%;
 height: 100%;
 touch-action: pan-y;
 overflow: hidden;
`,[d("slides",`
 display: flex;
 width: 100%;
 height: 100%;
 transition-timing-function: var(--n-bezier);
 transition-property: transform;
 `,[d("slide",`
 flex-shrink: 0;
 position: relative;
 width: 100%;
 height: 100%;
 outline: none;
 overflow: hidden;
 `,[T("> img",`
 display: block;
 `)])]),d("dots",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `,[p("dot",[d("dot",`
 height: var(--n-dot-size);
 width: var(--n-dot-size);
 background-color: var(--n-dot-color);
 border-radius: 50%;
 cursor: pointer;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[T("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),p("active",`
 background-color: var(--n-dot-color-active);
 `)])]),p("line",[d("dot",`
 border-radius: 9999px;
 width: var(--n-dot-line-width);
 height: 4px;
 background-color: var(--n-dot-color);
 cursor: pointer;
 transition:
 width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[T("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),p("active",`
 width: var(--n-dot-line-width-active);
 background-color: var(--n-dot-color-active);
 `)])])]),d("arrow",`
 transition: background-color .3s var(--n-bezier);
 cursor: pointer;
 height: 28px;
 width: 28px;
 display: flex;
 align-items: center;
 justify-content: center;
 background-color: rgba(255, 255, 255, .2);
 color: var(--n-arrow-color);
 border-radius: 8px;
 user-select: none;
 -webkit-user-select: none;
 font-size: 18px;
 `,[T("svg",`
 height: 1em;
 width: 1em;
 `),T("&:hover",`
 background-color: rgba(255, 255, 255, .3);
 `)]),p("vertical",`
 touch-action: pan-x;
 `,[d("slides",`
 flex-direction: column;
 `),p("fade",[d("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%);
 `)]),p("card",[d("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%) translateZ(-400px);
 `,[p("current",`
 transform: translateY(-50%) translateZ(0);
 `),p("prev",`
 transform: translateY(-100%) translateZ(-200px);
 `),p("next",`
 transform: translateY(0%) translateZ(-200px);
 `)])])]),p("usercontrol",[d("slides",[T(">",[T("div",`
 position: absolute;
 top: 50%;
 left: 50%;
 width: 100%;
 height: 100%;
 transform: translate(-50%, -50%);
 `)])])]),p("left",[d("dots",`
 transform: translateY(-50%);
 top: 50%;
 left: 12px;
 flex-direction: column;
 `,[p("line",[d("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[p("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),d("dot",`
 margin: 4px 0;
 `)]),d("arrow-group",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `),p("vertical",[d("arrow",`
 transform: rotate(90deg);
 `)]),p("show-arrow",[p("bottom",[d("dots",`
 transform: translateX(0);
 bottom: 18px;
 left: 18px;
 `)]),p("top",[d("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),p("left",[d("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),p("right",[d("dots",`
 transform: translateX(0);
 top: 18px;
 right: 18px;
 `)])]),p("left",[d("arrow-group",`
 bottom: 12px;
 left: 12px;
 flex-direction: column;
 `,[T("> *:first-child",`
 margin-bottom: 12px;
 `)])]),p("right",[d("dots",`
 transform: translateY(-50%);
 top: 50%;
 right: 12px;
 flex-direction: column;
 `,[p("line",[d("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[p("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),d("dot",`
 margin: 4px 0;
 `),d("arrow-group",`
 bottom: 12px;
 right: 12px;
 flex-direction: column;
 `,[T("> *:first-child",`
 margin-bottom: 12px;
 `)])]),p("top",[d("dots",`
 transform: translateX(-50%);
 top: 12px;
 left: 50%;
 `,[p("line",[d("dot",`
 margin: 0 4px;
 `)])]),d("dot",`
 margin: 0 4px;
 `),d("arrow-group",`
 top: 12px;
 right: 12px;
 `,[T("> *:first-child",`
 margin-right: 12px;
 `)])]),p("bottom",[d("dots",`
 transform: translateX(-50%);
 bottom: 12px;
 left: 50%;
 `,[p("line",[d("dot",`
 margin: 0 4px;
 `)])]),d("dot",`
 margin: 0 4px;
 `),d("arrow-group",`
 bottom: 12px;
 right: 12px;
 `,[T("> *:first-child",`
 margin-right: 12px;
 `)])]),p("fade",[d("slide",`
 position: absolute;
 opacity: 0;
 transition-property: opacity;
 pointer-events: none;
 `,[p("current",`
 opacity: 1;
 pointer-events: auto;
 `)])]),p("card",[d("slides",`
 perspective: 1000px;
 `),d("slide",`
 position: absolute;
 left: 50%;
 opacity: 0;
 transform: translateX(-50%) translateZ(-400px);
 transition-property: opacity, transform;
 `,[p("current",`
 opacity: 1;
 transform: translateX(-50%) translateZ(0);
 z-index: 1;
 `),p("prev",`
 opacity: 0.4;
 transform: translateX(-100%) translateZ(-200px);
 `),p("next",`
 opacity: 0.4;
 transform: translateX(0%) translateZ(-200px);
 `)])])]),Vn=["transitionDuration","transitionTimingFunction"],En=Object.assign(Object.assign({},_e.props),{defaultIndex:{type:Number,default:0},currentIndex:Number,showArrow:Boolean,dotType:{type:String,default:"dot"},dotPlacement:{type:String,default:"bottom"},slidesPerView:{type:[Number,String],default:1},spaceBetween:{type:Number,default:0},centeredSlides:Boolean,direction:{type:String,default:"horizontal"},autoplay:Boolean,interval:{type:Number,default:5e3},loop:{type:Boolean,default:!0},effect:{type:String,default:"slide"},showDots:{type:Boolean,default:!0},trigger:{type:String,default:"click"},transitionStyle:{type:Object,default:()=>({transitionDuration:"300ms"})},transitionProps:Object,draggable:Boolean,prevSlideStyle:[Object,String],nextSlideStyle:[Object,String],touchable:{type:Boolean,default:!0},mousewheel:Boolean,keyboard:Boolean,"onUpdate:currentIndex":Function,onUpdateCurrentIndex:Function});let Ee=!1;const jn=W({name:"Carousel",props:En,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:a}=ce(e),s=U(null),i=U(null),m=U([]),w={value:[]},g=h(()=>e.direction==="vertical"),_=h(()=>g.value?"height":"width"),x=h(()=>g.value?"bottom":"right"),f=h(()=>e.effect==="slide"),v=h(()=>e.loop&&e.slidesPerView===1&&f.value),P=h(()=>e.effect==="custom"),I=h(()=>!f.value||e.centeredSlides?1:e.slidesPerView),A=h(()=>P.value?1:e.slidesPerView),b=h(()=>I.value==="auto"||e.slidesPerView==="auto"&&e.centeredSlides),$=U({width:0,height:0}),z=h(()=>{const{value:t}=m;if(!t.length)return[];const{value:o}=b;if(o)return t.map(k=>lt(k));const{value:r}=A,{value:c}=$,{value:u}=_;let l=c[u];if(r!=="auto"){const{spaceBetween:k}=e,E=l-(r-1)*k,he=1/Math.max(1,r);l=E*he}const y=Object.assign(Object.assign({},c),{[u]:l});return t.map(()=>y)}),N=h(()=>{const{value:t}=z;if(!t.length)return[];const{centeredSlides:o,spaceBetween:r}=e,{value:c}=_,{[c]:u}=$.value;let l=0;return t.map(({[c]:y})=>{let k=l;return o&&(k+=(y-u)/2),l+=y+r,k})}),O=U(!1),F=h(()=>{const{transitionStyle:t}=e;return t?Ge(t,Vn):{}}),H=h(()=>P.value?0:Cn(F.value.transitionDuration)),ue=h(()=>{const{value:t}=m;if(!t.length)return[];const o=!(b.value||A.value===1),r=y=>{if(o){const{value:k}=_;return{[k]:`${z.value[y][k]}px`}}};if(P.value)return t.map((y,k)=>r(k));const{effect:c,spaceBetween:u}=e,{value:l}=x;return t.reduce((y,k,E)=>{const he=Object.assign(Object.assign({},r(E)),{[`margin-${l}`]:`${u}px`});return y.push(he),O.value&&(c==="fade"||c==="card")&&Object.assign(he,F.value),y},[])}),R=h(()=>{const{value:t}=I,{length:o}=m.value;if(t!=="auto")return Math.max(o-t,0)+1;{const{value:r}=z,{length:c}=r;if(!c)return o;const{value:u}=N,{value:l}=_,y=$.value[l];let k=r[r.length-1][l],E=c;for(;E>1&&k<y;)E--,k+=u[E]-u[E-1];return be(E+1,1,c)}}),te=h(()=>Sn(R.value,v.value)),bt=Ve(e.defaultIndex,v.value),Se=U(rt(bt,R.value,v.value)),M=Jt(en(e,"currentIndex"),Se),j=h(()=>Ve(M.value,v.value));function ne(t){var o,r;t=be(t,0,R.value-1);const c=rt(t,R.value,v.value),{value:u}=M;c!==M.value&&(Se.value=c,(o=e["onUpdate:currentIndex"])===null||o===void 0||o.call(e,c,u),(r=e.onUpdateCurrentIndex)===null||r===void 0||r.call(e,c,u))}function Ce(t=j.value){return yn(t,R.value,e.loop)}function ke(t=j.value){return _n(t,R.value,e.loop)}function wt(t){const o=Q(t);return o!==null&&Ce()===o}function yt(t){const o=Q(t);return o!==null&&ke()===o}function Fe(t){return j.value===Q(t)}function _t(t){return M.value===t}function He(){return Ce()===null}function Xe(){return ke()===null}let q=0;function Pe(t){const o=be(Ve(t,v.value),0,R.value);(t!==M.value||o!==j.value)&&ne(o)}function de(){const t=Ce();t!==null&&(q=-1,ne(t))}function oe(){const t=ke();t!==null&&(q=1,ne(t))}let B=!1;function St(){(!B||!v.value)&&de()}function Ct(){(!B||!v.value)&&oe()}let Y=0;const $e=U({});function fe(t,o=0){$e.value=Object.assign({},F.value,{transform:g.value?`translateY(${-t}px)`:`translateX(${-t}px)`,transitionDuration:`${o}ms`})}function ae(t=0){f.value?ze(j.value,t):Y!==0&&(!B&&t>0&&(B=!0),fe(Y=0,t))}function ze(t,o){const r=Ke(t);r!==Y&&o>0&&(B=!0),Y=Ke(j.value),fe(r,o)}function Ke(t){let o;return t>=R.value-1?o=Ue():o=N.value[t]||0,o}function Ue(){if(I.value==="auto"){const{value:t}=_,{[t]:o}=$.value,{value:r}=N,c=r[r.length-1];let u;if(c===void 0)u=o;else{const{value:l}=z;u=c+l[l.length-1][t]}return u-o}else{const{value:t}=N;return t[R.value-1]||0}}const se={currentIndexRef:M,to:Pe,prev:St,next:Ct,isVertical:()=>g.value,isHorizontal:()=>!g.value,isPrev:wt,isNext:yt,isActive:Fe,isPrevDisabled:He,isNextDisabled:Xe,getSlideIndex:Q,getSlideStyle:$t,addSlide:kt,removeSlide:Pt,onCarouselItemClick:zt};kn(se);function kt(t){t&&m.value.push(t)}function Pt(t){if(!t)return;const o=Q(t);o!==-1&&m.value.splice(o,1)}function Q(t){return typeof t=="number"?t:t?m.value.indexOf(t):-1}function $t(t){const o=Q(t);if(o!==-1){const r=[ue.value[o]],c=se.isPrev(o),u=se.isNext(o);return c&&r.push(e.prevSlideStyle||""),u&&r.push(e.nextSlideStyle||""),tn(r)}}let Re=0,Ie=0,X=0,Ne=0,pe=!1,De=!1;function zt(t,o){let r=!B&&!pe&&!De;e.effect==="card"&&r&&!Fe(t)&&(Pe(t),r=!1),r||(o.preventDefault(),o.stopPropagation())}let me=null;function ge(){me&&(clearInterval(me),me=null)}function G(){ge(),!e.autoplay||te.value<2||(me=window.setInterval(oe,e.interval))}function We(t){var o;if(Ee||!(!((o=i.value)===null||o===void 0)&&o.contains(an(t))))return;Ee=!0,pe=!0,De=!1,Ne=Date.now(),ge(),t.type!=="touchstart"&&!t.target.isContentEditable&&t.preventDefault();const r=it(t)?t.touches[0]:t;g.value?Ie=r.clientY:Re=r.clientX,e.touchable&&(ie("touchmove",document,ve),ie("touchend",document,J),ie("touchcancel",document,J)),e.draggable&&(ie("mousemove",document,ve),ie("mouseup",document,J))}function ve(t){const{value:o}=g,{value:r}=_,c=it(t)?t.touches[0]:t,u=o?c.clientY-Ie:c.clientX-Re,l=$.value[r];X=be(u,-l,l),t.cancelable&&t.preventDefault(),f.value&&fe(Y-X,0)}function J(){const{value:t}=j;let o=t;if(!B&&X!==0&&f.value){const r=Y-X,c=[...N.value.slice(0,R.value-1),Ue()];let u=null;for(let l=0;l<c.length;l++){const y=Math.abs(c[l]-r);if(u!==null&&u<y)break;u=y,o=l}}if(o===t){const r=Date.now()-Ne,{value:c}=_,u=$.value[c];X>u/2||X/r>.4?de():(X<-u/2||X/r<-.4)&&oe()}o!==null&&o!==t?(De=!0,ne(o),Je(()=>{(!v.value||Se.value!==M.value)&&ae(H.value)})):ae(H.value),Ye(),G()}function Ye(){pe&&(Ee=!1),pe=!1,Re=0,Ie=0,X=0,Ne=0,re("touchmove",document,ve),re("touchend",document,J),re("touchcancel",document,J),re("mousemove",document,ve),re("mouseup",document,J)}function Rt(){if(f.value&&B){const{value:t}=j;ze(t,0)}else G();f.value&&($e.value.transitionDuration="0ms"),B=!1}function It(t){if(t.preventDefault(),B)return;let{deltaX:o,deltaY:r}=t;t.shiftKey&&!o&&(o=r);const c=-1,u=1,l=(o||r)>0?u:c;let y=0,k=0;g.value?k=l:y=l;const E=10;(k*r>=E||y*o>=E)&&(l===u&&!Xe()?oe():l===c&&!He()&&de())}function Nt(){$.value=lt(s.value,!0),G()}function Dt(){var t,o;b.value&&((o=(t=z.effect).scheduler)===null||o===void 0||o.call(t),z.effect.run())}function Tt(){e.autoplay&&ge()}function Vt(){e.autoplay&&G()}Me(()=>{nn(G),requestAnimationFrame(()=>O.value=!0)}),ft(()=>{Ye(),ge()}),on(()=>{const{value:t}=m,{value:o}=w,r=new Map,c=l=>r.has(l)?r.get(l):-1;let u=!1;for(let l=0;l<t.length;l++){const y=o.findIndex(k=>k.el===t[l]);y!==l&&(u=!0),r.set(t[l],y)}u&&t.sort((l,y)=>c(l)-c(y))}),xe(j,(t,o)=>{if(t===o){q=0;return}if(G(),f.value){if(v.value){const{value:r}=R;q===-1&&o===1&&t===r-2?t=0:q===1&&o===r-2&&t===1&&(t=r-1)}ze(t,H.value)}else ae();q=0},{immediate:!0}),xe([v,I],()=>void Je(()=>{ne(j.value)})),xe(N,()=>{f.value&&ae()},{deep:!0}),xe(f,t=>{t?ae():(B=!1,fe(Y=0))});const Et=h(()=>({onTouchstartPassive:e.touchable?We:void 0,onMousedown:e.draggable?We:void 0,onWheel:e.mousewheel?It:void 0})),jt=h(()=>Object.assign(Object.assign({},Ge(se,["to","prev","next","isPrevDisabled","isNextDisabled"])),{total:te.value,currentIndex:M.value})),Bt=h(()=>({total:te.value,currentIndex:M.value,to:se.to})),At={getCurrentIndex:()=>M.value,to:Pe,prev:de,next:oe},Mt=_e("Carousel","-carousel",Tn,bn,e,n),Ze=h(()=>{const{common:{cubicBezierEaseInOut:t},self:{dotSize:o,dotColor:r,dotColorActive:c,dotColorFocus:u,dotLineWidth:l,dotLineWidthActive:y,arrowColor:k}}=Mt.value;return{"--n-bezier":t,"--n-dot-color":r,"--n-dot-color-focus":u,"--n-dot-color-active":c,"--n-dot-size":o,"--n-dot-line-width":l,"--n-dot-line-width-active":y,"--n-arrow-color":k}}),ee=a?sn("carousel",void 0,Ze,e):void 0;return Object.assign(Object.assign({mergedClsPrefix:n,selfElRef:s,slidesElRef:i,slideVNodes:w,duplicatedable:v,userWantsControl:P,autoSlideSize:b,realIndex:j,slideStyles:ue,translateStyle:$e,slidesControlListeners:Et,handleTransitionEnd:Rt,handleResize:Nt,handleSlideResize:Dt,handleMouseenter:Tt,handleMouseleave:Vt,isActive:_t,arrowSlotProps:jt,dotSlotProps:Bt},At),{cssVars:a?void 0:Ze,themeClass:ee==null?void 0:ee.themeClass,onRender:ee==null?void 0:ee.onRender})},render(){var e;const{mergedClsPrefix:n,showArrow:a,userWantsControl:s,slideStyles:i,dotType:m,dotPlacement:w,slidesControlListeners:g,transitionProps:_={},arrowSlotProps:x,dotSlotProps:f,$slots:{default:v,dots:P,arrow:I}}=this,A=v&&Zt(v())||[];let b=Bn(A);return b.length||(b=A.map($=>C(Dn,null,{default:()=>dt($)}))),this.duplicatedable&&(b=wn(b)),this.slideVNodes.value=b,this.autoSlideSize&&(b=b.map($=>C(qe,{onResize:this.handleSlideResize},{default:()=>$}))),(e=this.onRender)===null||e===void 0||e.call(this),C("div",Object.assign({ref:"selfElRef",class:[this.themeClass,`${n}-carousel`,this.direction==="vertical"&&`${n}-carousel--vertical`,this.showArrow&&`${n}-carousel--show-arrow`,`${n}-carousel--${w}`,`${n}-carousel--${this.direction}`,`${n}-carousel--${this.effect}`,s&&`${n}-carousel--usercontrol`],style:this.cssVars},g,{onMouseenter:this.handleMouseenter,onMouseleave:this.handleMouseleave}),C(qe,{onResize:this.handleResize},{default:()=>C("div",{ref:"slidesElRef",class:`${n}-carousel__slides`,role:"listbox",style:this.translateStyle,onTransitionend:this.handleTransitionEnd},s?b.map(($,z)=>C("div",{style:i[z],key:z},qt(C(Gt,Object.assign({},_),{default:()=>$}),[[Qt,this.isActive(z)]]))):b)}),this.showDots&&f.total>1&&Qe(P,f,()=>[C($n,{key:m+w,total:f.total,currentIndex:f.currentIndex,dotType:m,trigger:this.trigger,keyboard:this.keyboard})]),a&&Qe(I,x,()=>[C(In,null)]))}});function Bn(e){return e.reduce((n,a)=>(Nn(a)&&n.push(a),n),[])}function An(e){const{heightSmall:n,heightMedium:a,heightLarge:s,borderRadius:i}=e;return{color:"#eee",colorEnd:"#ddd",borderRadius:i,heightSmall:n,heightMedium:a,heightLarge:s}}const Mn={common:ut,self:An},Ln=T([pt("skeleton",`
 height: 1em;
 width: 100%;
 transition:
 --n-color-start .3s var(--n-bezier),
 --n-color-end .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 animation: 2s skeleton-loading infinite cubic-bezier(0.36, 0, 0.64, 1);
 background-color: var(--n-color-start);
 `),T("@keyframes skeleton-loading",`
 0% {
 background: var(--n-color-start);
 }
 40% {
 background: var(--n-color-end);
 }
 80% {
 background: var(--n-color-start);
 }
 100% {
 background: var(--n-color-start);
 }
 `)]),On=Object.assign(Object.assign({},_e.props),{text:Boolean,round:Boolean,circle:Boolean,height:[String,Number],width:[String,Number],size:String,repeat:{type:Number,default:1},animated:{type:Boolean,default:!0},sharp:{type:Boolean,default:!0}}),xt=W({name:"Skeleton",inheritAttrs:!1,props:On,setup(e){vn();const{mergedClsPrefixRef:n}=ce(e),a=_e("Skeleton","-skeleton",Ln,Mn,e,n);return{mergedClsPrefix:n,style:h(()=>{var s,i;const m=a.value,{common:{cubicBezierEaseInOut:w}}=m,g=m.self,{color:_,colorEnd:x,borderRadius:f}=g;let v;const{circle:P,sharp:I,round:A,width:b,height:$,size:z,text:N,animated:O}=e;z!==void 0&&(v=g[cn("height",z)]);const F=P?(s=b??$)!==null&&s!==void 0?s:v:b,H=(i=P?b??$:$)!==null&&i!==void 0?i:v;return{display:N?"inline-block":"",verticalAlign:N?"-0.125em":"",borderRadius:P?"50%":A?"4096px":I?"":f,width:typeof F=="number"?et(F):F,height:typeof H=="number"?et(H):H,animation:O?"":"none","--n-bezier":w,"--n-color-start":_,"--n-color-end":x}})}},render(){const{repeat:e,style:n,mergedClsPrefix:a,$attrs:s}=this,i=C("div",rn({class:`${a}-skeleton`,style:n},s));return e>1?C(we,null,ln(e,null).map(m=>[i,`
`])):i}}),Fn={name:"Dropdown",data(){return{state:!1,menuItems:[{title:"Features",path:"javascript:void(0)"},{title:"Integrations",path:"javascript:void(0)"},{title:"Customers",path:"javascript:void(0)"},{title:"Pricing",path:"javascript:void(0)"}]}},methods:{toggleState(){this.state=!this.state}}},Hn={class:"relative"},Xn={class:"relative"},Kn={class:"max-w-screen-xl mx-auto px-4 py-4 md:pt-8 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex"},Un={class:"flex-none space-y-5 text-center md:text-left max-w-xl"},Wn={class:"mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight"},Yn={class:"flex flex-col gap-y-3 md:flex-row items-center gap-x-3 sm:text-sm"},Zn={href:"/apk/nashast-store.apk",class:"flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex"},qn={class:"flex-1 hidden md:block"};function Qn(e,n,a,s,i,m){const w=vt;return D(),L("div",Hn,[n[1]||(n[1]=S("div",{class:"absolute inset-0 blur-xl h-[580px] bg-grad",style:{background:"linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)"}},null,-1)),S("div",Xn,[S("section",null,[S("div",Kn,[S("div",Un,[S("h1",Wn,[S("span",null,Z(e.$t("messages.general.startShopping")),1)]),S("p",null,Z(e.$t("messages.general.shopDescription")),1),S("div",Yn,[S("a",Zn,[je(Z(e.$t("messages.general.downloadDirect"))+" ",1),n[0]||(n[0]=S("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"w-5 h-5"},[S("path",{fillRule:"evenodd",d:"M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z",clipRule:"evenodd"})],-1))])])]),S("div",qn,[V(w,{class:"max-w-xl",src:"/images/hero.webp",alt:"Hero image",loading:"eager",sizes:"sm:100vw lg:1400px",fetchpriority:"high",preload:"",placeholder:"","placeholder-class":"blur-xl"})])])])])])}const Gn=Le(Fn,[["render",Qn]]),Jn={class:"flex flex-col items-center justify-center w-full"},eo=W({__name:"CategoryCardSkeleton",props:{text:{type:Boolean,default:!1}},setup(e){return(n,a)=>{const s=xt;return D(),L("div",Jn,[V(s,{circle:"",width:"80px",height:"80px",animated:""}),V(s,{width:"60%",height:"20px",class:"mt-4",animated:""})])}}}),to={class:"flex flex-col gap-2 justify-center items-center"},no=["innerHTML"],ct=220,oo=W({__name:"CategoryCard",props:{node:{type:Object,required:!0},imageLoading:{type:String,default:"lazy"}},setup(e){const{fallbackImage:n}=mt();return(a,s)=>{const i=vt,m=gt;return e.node?(D(),le(m,{key:0,to:`/product-category/${decodeURIComponent(e.node.slug)}`},{default:Be(()=>{var w,g,_;return[S("div",to,[V(i,{width:"60px",height:"60px",class:"rounded-full",src:((w=e.node.image)==null?void 0:w.sourceUrl)||K(n),alt:((g=e.node.image)==null?void 0:g.altText)||e.node.name,title:((_=e.node.image)==null?void 0:_.title)||e.node.name,loading:e.imageLoading,sizes:`${ct/2}px md:${ct}px`,placeholder:"","placeholder-class":"blur-xl"},null,8,["src","alt","title","loading","sizes"]),S("span",{class:"relative z-10 mt-auto mb-2 text-sm font-semibold capitalize md:text-base md:mb-4",innerHTML:e.node.name},null,8,no)])]}),_:1},8,["to"])):Ae("",!0)}}}),ao=Le(oo,[["__scopeId","data-v-ea5c2152"]]),so={class:"product-card min-h-[400px] w-full max-w-xs p-2 flex flex-col justify-between rounded-lg border border-gray-100 bg-white shadow-md"},ro={class:"w-full mt-1 p-2"},io=W({__name:"ProductCardSkeleton",props:{animated:{type:Boolean,default:!0}},setup(e){return(n,a)=>{const s=xt;return D(),L("div",so,[V(s,{width:"100%",height:"300px",animated:""}),S("div",ro,[V(s,{width:"80%",height:"20px",animated:""}),V(s,{width:"60%",height:"15px",class:"mt-2",animated:""}),V(s,{width:"50%",height:"20px",class:"mt-2",animated:""})])])}}}),lo={class:"m-4 mt-2 space-y-3"},co={class:"flex items-end justify-between"},uo={class:"text-lg font-semibold md:text-2xl"},fo={key:0,class:"grid justify-center grid-cols-3 gap-4 mt-8 md:grid-cols-3 lg:grid-cols-6"},po={key:1,class:"grid justify-center grid-cols-3 gap-4 mt-8 md:grid-cols-3 lg:grid-cols-6"},mo={class:"container mt-8"},go={class:"flex items-end justify-between"},vo={class:"text-lg font-semibold md:text-2xl"},ho={key:0,class:"grid gap-2 grid-cols-2 md:grid-cols-4 lg:grid-cols-5 mt-8"},xo=W({__name:"index",setup(e){const{siteName:n,description:a,shortDescription:s,siteImage:i}=tt();mt();const{storeSettings:m}=tt(),{t:w}=un(),{isNative:g}=m,{productCategories:_,popularProducts:x,fetchData:f,isLoadingCategories:v,isLoadingProducts:P}=dn();return Me(async()=>{await f()}),mn({title:"Home",ogTitle:w("messages.general.siteName"),description:w("messages.general.description"),ogDescription:w("messages.general.shortDescription"),ogImage:i,twitterCard:"summary_large_image"}),(I,A)=>{const b=fn,$=Gn,z=jn,N=gt,O=eo,F=ao,H=io,ue=pn;return D(),L("main",null,[S("div",lo,[K(g)?(D(),le(b,{key:0,class:"flex w-full"})):Ae("",!0),K(g)?Ae("",!0):(D(),le($,{key:1})),V(z,{class:nt([K(g)?"":"mt-4","rounded-md"]),"show-arrow":"",autoplay:""},null,8,["class"])]),S("section",{class:nt(K(g)?"container my-12 mx-2":"container my-11")},[S("div",co,[S("h2",uo,Z(I.$t("messages.shop.shopByCategory")),1),V(N,{class:"text-primary",to:"/categories"},{default:Be(()=>[je(Z(I.$t("messages.general.viewAll")),1)]),_:1})]),K(v)?(D(),L("div",fo,[(D(),L(we,null,Te(6,R=>V(O,{key:R})),64))])):(D(),L("div",po,[(D(!0),L(we,null,Te(K(_),(R,te)=>(D(),le(F,{key:te,class:"w-full",node:R},null,8,["node"]))),128))]))],2),S("section",mo,[S("div",go,[S("h2",vo,Z(I.$t("messages.shop.popularProducts")),1),V(N,{class:"text-primary",to:"/products"},{default:Be(()=>[je(Z(I.$t("messages.general.viewAll")),1)]),_:1})]),K(P)?(D(),L("div",ho,[(D(),L(we,null,Te(5,R=>V(H,{key:R})),64))])):(D(),le(ue,{key:1,products:K(x),class:"grid-cols-2 md:grid-cols-4 lg:grid-cols-5 mt-8"},null,8,["products"]))])])}}}),$o=Le(xo,[["__scopeId","data-v-a19babef"]]);export{$o as default};
