(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-18315958"],{"0849":function(t,e,n){"use strict";var i=n("4a70"),r=n.n(i);r.a},"0fd9":function(t,e,n){"use strict";n("99af"),n("4160"),n("caad"),n("13d5"),n("4ec9"),n("b64b"),n("d3b7"),n("ac1f"),n("2532"),n("3ca3"),n("5319"),n("159b"),n("ddb0");var i=n("ade3"),r=n("5530"),o=(n("4b85"),n("2b0e")),a=n("d9f7"),s=n("80d2"),l=["sm","md","lg","xl"],c=["start","end","center"];function u(t,e){return l.reduce((function(n,i){return n[t+Object(s["n"])(i)]=e(),n}),{})}var d=function(t){return[].concat(c,["baseline","stretch"]).includes(t)},f=u("align",(function(){return{type:String,default:null,validator:d}})),h=function(t){return[].concat(c,["space-between","space-around"]).includes(t)},v=u("justify",(function(){return{type:String,default:null,validator:h}})),p=function(t){return[].concat(c,["space-between","space-around","stretch"]).includes(t)},g=u("alignContent",(function(){return{type:String,default:null,validator:p}})),m={align:Object.keys(f),justify:Object.keys(v),alignContent:Object.keys(g)},b={align:"align",justify:"justify",alignContent:"align-content"};function w(t,e,n){var i=b[t];if(null!=n){if(e){var r=e.replace(t,"");i+="-".concat(r)}return i+="-".concat(n),i.toLowerCase()}}var y=new Map;e["a"]=o["a"].extend({name:"v-row",functional:!0,props:Object(r["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d}},f,{justify:{type:String,default:null,validator:h}},v,{alignContent:{type:String,default:null,validator:p}},g),render:function(t,e){var n=e.props,r=e.data,o=e.children,s="";for(var l in n)s+=String(n[l]);var c=y.get(s);return c||function(){var t,e;for(e in c=[],m)m[e].forEach((function(t){var i=n[t],r=w(e,t,i);r&&c.push(r)}));c.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(i["a"])(t,"align-".concat(n.align),n.align),Object(i["a"])(t,"justify-".concat(n.justify),n.justify),Object(i["a"])(t,"align-content-".concat(n.alignContent),n.alignContent),t)),y.set(s,c)}(),t(n.tag,Object(a["a"])(r,{staticClass:"row",class:c}),o)}})},"30b4":function(t,e,n){t.exports=n.p+"img/copy.5399c87b.png"},"3f4b":function(t,e,n){t.exports=n.p+"img/tape.8a3977de.png"},"4a70":function(t,e,n){},"4ec9":function(t,e,n){"use strict";var i=n("6d61"),r=n("6566");t.exports=i("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),r)},"62ad":function(t,e,n){"use strict";n("4160"),n("caad"),n("13d5"),n("45fc"),n("4ec9"),n("a9e3"),n("b64b"),n("d3b7"),n("ac1f"),n("3ca3"),n("5319"),n("2ca0"),n("159b"),n("ddb0");var i=n("ade3"),r=n("5530"),o=(n("4b85"),n("2b0e")),a=n("d9f7"),s=n("80d2"),l=["sm","md","lg","xl"],c=function(){return l.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),u=function(){return l.reduce((function(t,e){return t["offset"+Object(s["n"])(e)]={type:[String,Number],default:null},t}),{})}(),d=function(){return l.reduce((function(t,e){return t["order"+Object(s["n"])(e)]={type:[String,Number],default:null},t}),{})}(),f={col:Object.keys(c),offset:Object.keys(u),order:Object.keys(d)};function h(t,e,n){var i=t;if(null!=n&&!1!==n){if(e){var r=e.replace(t,"");i+="-".concat(r)}return"col"!==t||""!==n&&!0!==n?(i+="-".concat(n),i.toLowerCase()):i.toLowerCase()}}var v=new Map;e["a"]=o["a"].extend({name:"v-col",functional:!0,props:Object(r["a"])({cols:{type:[Boolean,String,Number],default:!1}},c,{offset:{type:[String,Number],default:null}},u,{order:{type:[String,Number],default:null}},d,{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,r=e.data,o=e.children,s=(e.parent,"");for(var l in n)s+=String(n[l]);var c=v.get(s);return c||function(){var t,e;for(e in c=[],f)f[e].forEach((function(t){var i=n[t],r=h(e,t,i);r&&c.push(r)}));var r=c.some((function(t){return t.startsWith("col-")}));c.push((t={col:!r||!n.cols},Object(i["a"])(t,"col-".concat(n.cols),n.cols),Object(i["a"])(t,"offset-".concat(n.offset),n.offset),Object(i["a"])(t,"order-".concat(n.order),n.order),Object(i["a"])(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),v.set(s,c)}(),t(n.tag,Object(a["a"])(r,{class:c}),o)}})},"63b7":function(t,e,n){},6566:function(t,e,n){"use strict";var i=n("9bf2").f,r=n("7c73"),o=n("e2cc"),a=n("0366"),s=n("19aa"),l=n("2266"),c=n("7dd0"),u=n("2626"),d=n("83ab"),f=n("f183").fastKey,h=n("69f3"),v=h.set,p=h.getterFor;t.exports={getConstructor:function(t,e,n,c){var u=t((function(t,i){s(t,u,e),v(t,{type:e,index:r(null),first:void 0,last:void 0,size:0}),d||(t.size=0),void 0!=i&&l(i,t[c],t,n)})),h=p(e),g=function(t,e,n){var i,r,o=h(t),a=m(t,e);return a?a.value=n:(o.last=a={index:r=f(e,!0),key:e,value:n,previous:i=o.last,next:void 0,removed:!1},o.first||(o.first=a),i&&(i.next=a),d?o.size++:t.size++,"F"!==r&&(o.index[r]=a)),t},m=function(t,e){var n,i=h(t),r=f(e);if("F"!==r)return i.index[r];for(n=i.first;n;n=n.next)if(n.key==e)return n};return o(u.prototype,{clear:function(){var t=this,e=h(t),n=e.index,i=e.first;while(i)i.removed=!0,i.previous&&(i.previous=i.previous.next=void 0),delete n[i.index],i=i.next;e.first=e.last=void 0,d?e.size=0:t.size=0},delete:function(t){var e=this,n=h(e),i=m(e,t);if(i){var r=i.next,o=i.previous;delete n.index[i.index],i.removed=!0,o&&(o.next=r),r&&(r.previous=o),n.first==i&&(n.first=r),n.last==i&&(n.last=o),d?n.size--:e.size--}return!!i},forEach:function(t){var e,n=h(this),i=a(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:n.first){i(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!m(this,t)}}),o(u.prototype,n?{get:function(t){var e=m(this,t);return e&&e.value},set:function(t,e){return g(this,0===t?0:t,e)}}:{add:function(t){return g(this,t=0===t?0:t,t)}}),d&&i(u.prototype,"size",{get:function(){return h(this).size}}),u},setStrong:function(t,e,n){var i=e+" Iterator",r=p(e),o=p(i);c(t,e,(function(t,e){v(this,{type:i,target:t,state:r(t),kind:e,last:void 0})}),(function(){var t=o(this),e=t.kind,n=t.last;while(n&&n.removed)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),u(e)}}},"6d61":function(t,e,n){"use strict";var i=n("23e7"),r=n("da84"),o=n("94ca"),a=n("6eeb"),s=n("f183"),l=n("2266"),c=n("19aa"),u=n("861d"),d=n("d039"),f=n("1c7e"),h=n("d44e"),v=n("7156");t.exports=function(t,e,n){var p=-1!==t.indexOf("Map"),g=-1!==t.indexOf("Weak"),m=p?"set":"add",b=r[t],w=b&&b.prototype,y=b,x={},C=function(t){var e=w[t];a(w,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(g&&!u(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return g&&!u(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(g&&!u(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})};if(o(t,"function"!=typeof b||!(g||w.forEach&&!d((function(){(new b).entries().next()})))))y=n.getConstructor(e,t,p,m),s.REQUIRED=!0;else if(o(t,!0)){var T=new y,j=T[m](g?{}:-0,1)!=T,S=d((function(){T.has(1)})),O=f((function(t){new b(t)})),k=!g&&d((function(){var t=new b,e=5;while(e--)t[m](e,e);return!t.has(-0)}));O||(y=e((function(e,n){c(e,y,t);var i=v(new b,e,y);return void 0!=n&&l(n,i[m],i,p),i})),y.prototype=w,w.constructor=y),(S||k)&&(C("delete"),C("has"),p&&C("get")),(k||j)&&C(m),g&&w.clear&&delete w.clear}return x[t]=y,i({global:!0,forced:y!=b},x),h(y,t),g||n.setStrong(y,t,p),y}},b3a0:function(t,e,n){t.exports=n.p+"img/transfar.a304da98.png"},b98e:function(t,e,n){t.exports=n.p+"img/pagecnt.925ccd53.png"},f820:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[n("v-layout",{attrs:{wrap:"","align-center":"","justify-space-around":""}},[n("v-flex",{attrs:{lg6:"",md8:"",xs10:""}},[n("v-card",[n("v-img",{staticClass:"bgImg",attrs:{src:t.item,position:"left top",alt:""}},[n("Aboutview")],1)],1)],1)],1)],1)},r=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-carousel",{attrs:{height:"100%","hide-delimiter-background":"","show-arrows-on-hover":""}},t._l(t.slides,(function(e){return n("v-carousel-item",{key:e.id},[n("v-sheet",{attrs:{light:"",color:"transparent"}},[n("v-container",{staticClass:"fill-height"},[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("div",{staticClass:"display-3 slideH"},[t._v(" "+t._s(e.title)+" ")])])],1),n("v-row",[n("v-col",{attrs:{cols:"4"}},[n("v-img",{staticClass:"bgImg",attrs:{src:e.src,contain:"",alt:""}})],1),n("v-col",{attrs:{cols:"8"}},[n("div",{staticClass:"display-1"},[t._v(" "+t._s(e.text)+" ")])])],1)],1)],1)],1)})),1)},a=[],s={name:"Aboutview",data:function(){return{slides:[{id:1,title:"First Slide",text:"this is First",src:n("3f4b")},{id:2,title:"Second Slide",text:"this is Second",src:n("30b4")},{id:3,title:"Third Slide",text:"this is Third",src:n("b3a0")}]}}},l=s,c=(n("0849"),n("2877")),u=n("6544"),d=n.n(u),f=(n("a9e3"),n("5530")),h=(n("63b7"),n("f665")),v=n("afdd"),p=n("9d26"),g=n("37c6"),m=n("604c"),b=m["a"].extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return m["a"].options.computed.classes.call(this)}},methods:{genData:m["a"].options.methods.genData}}),w=n("80d2"),y=n("d9bd"),x=h["a"].extend({name:"v-carousel",props:{continuous:{type:Boolean,default:!0},cycle:Boolean,delimiterIcon:{type:String,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:function(t){return t>0}},mandatory:{type:Boolean,default:!0},progress:Boolean,progressColor:String,showArrows:{type:Boolean,default:!0},verticalDelimiters:{type:String,default:void 0}},data:function(){return{internalHeight:this.height,slideTimeout:void 0}},computed:{classes:function(){return Object(f["a"])({},h["a"].options.computed.classes.call(this),{"v-carousel":!0,"v-carousel--hide-delimiter-background":this.hideDelimiterBackground,"v-carousel--vertical-delimiters":this.isVertical})},isDark:function(){return this.dark||!this.light},isVertical:function(){return null!=this.verticalDelimiters}},watch:{internalValue:"restartTimeout",interval:"restartTimeout",height:function(t,e){t!==e&&t&&(this.internalHeight=t)},cycle:function(t){t?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},created:function(){this.$attrs.hasOwnProperty("hide-controls")&&Object(y["a"])("hide-controls",':show-arrows="false"',this)},mounted:function(){this.startTimeout()},methods:{genControlIcons:function(){return this.isVertical?null:h["a"].options.methods.genControlIcons.call(this)},genDelimiters:function(){return this.$createElement("div",{staticClass:"v-carousel__controls",style:{left:"left"===this.verticalDelimiters&&this.isVertical?0:"auto",right:"right"===this.verticalDelimiters?0:"auto"}},[this.genItems()])},genItems:function(){for(var t=this,e=this.items.length,n=[],i=0;i<e;i++){var r=this.$createElement(v["a"],{staticClass:"v-carousel__controls__item",attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.ariaLabel.delimiter",i+1,e)},props:{icon:!0,small:!0,value:this.getValue(this.items[i],i)}},[this.$createElement(p["a"],{props:{size:18}},this.delimiterIcon)]);n.push(r)}return this.$createElement(b,{props:{value:this.internalValue,mandatory:this.mandatory},on:{change:function(e){t.internalValue=e}}},n)},genProgress:function(){return this.$createElement(g["a"],{staticClass:"v-carousel__progress",props:{color:this.progressColor,value:(this.internalIndex+1)/this.items.length*100}})},restartTimeout:function(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,window.requestAnimationFrame(this.startTimeout)},startTimeout:function(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))}},render:function(t){var e=h["a"].options.render.call(this,t);return e.data.style="height: ".concat(Object(w["d"])(this.height),";"),this.hideDelimiters||e.children.push(this.genDelimiters()),(this.progress||this.progressColor)&&e.children.push(this.genProgress()),e}}),C=n("2b0e"),T=C["a"].extend().extend({name:"bootable",props:{eager:Boolean},data:function(){return{isBooted:!1}},computed:{hasContent:function(){return this.isBooted||this.eager||this.isActive}},watch:{isActive:function(){this.isBooted=!0}},created:function(){"lazy"in this.$attrs&&Object(y["d"])("lazy",this)},methods:{showLazyContent:function(t){return this.hasContent&&t?t():[this.$createElement()]}}}),j=n("4e82"),S=n("c3f0"),O=n("58df"),k=Object(O["a"])(T,Object(j["a"])("windowGroup","v-window-item","v-window")),B=k.extend().extend().extend({name:"v-window-item",directives:{Touch:S["a"]},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(w["d"])(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(t){var e=this;this.inTransition&&this.$nextTick((function(){e.computedTransition&&e.inTransition&&(e.windowGroup.transitionHeight=Object(w["d"])(t.clientHeight))}))}},render:function(t){var e=this;return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[e.genWindowItem()]})))}}),$=n("adda"),E=n("1c87"),V=Object(O["a"])(B,E["a"]),_=V.extend({name:"v-carousel-item",inheritAttrs:!1,methods:{genDefaultSlot:function(){return[this.$createElement($["a"],{staticClass:"v-carousel__item",props:Object(f["a"])({},this.$attrs,{height:this.windowGroup.internalHeight}),on:this.$listeners,scopedSlots:{placeholder:this.$scopedSlots.placeholder}},Object(w["h"])(this))]},genWindowItem:function(){var t=this.generateRouteLink(),e=t.tag,n=t.data;return n.staticClass="v-window-item",n.directives.push({name:"show",value:this.isActive}),this.$createElement(e,n,this.genDefaultSlot())}}}),D=n("62ad"),I=n("a523"),A=n("0fd9"),G=n("8dd9"),z=Object(c["a"])(l,o,a,!1,null,null,null),L=z.exports;d()(z,{VCarousel:x,VCarouselItem:_,VCol:D["a"],VContainer:I["a"],VImg:$["a"],VRow:A["a"],VSheet:G["a"]});var H={name:"About",components:{Aboutview:L},data:function(){return{item:n("b98e")}}},N=H,F=n("b0af"),R=n("0e8f"),W=n("a722"),M=Object(c["a"])(N,i,r,!1,null,null,null);e["default"]=M.exports;d()(M,{VCard:F["a"],VContainer:I["a"],VFlex:R["a"],VImg:$["a"],VLayout:W["a"]})}}]);
//# sourceMappingURL=chunk-18315958.aa3c3ec3.js.map