exports.ids=[11],exports.modules={123:function(t,e,r){"use strict";var o=r(1),n=r(0),c=r.n(n);e.a=c.a.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var t={},e=Object(o.a)(this.height),r=Object(o.a)(this.minHeight),n=Object(o.a)(this.minWidth),c=Object(o.a)(this.maxHeight),l=Object(o.a)(this.maxWidth),d=Object(o.a)(this.width);return e&&(t.height=e),r&&(t.minHeight=r),n&&(t.minWidth=n),c&&(t.maxHeight=c),l&&(t.maxWidth=l),d&&(t.width=d),t}}})},124:function(t,e,r){"use strict";var o=r(0),n=r.n(o);e.a=n.a.extend({name:"v-card-title",functional:!0,props:{primaryTitle:Boolean},render:function(t,e){var data=e.data,r=e.props,o=e.children;return data.staticClass=("v-card__title "+(data.staticClass||"")).trim(),r.primaryTitle&&(data.staticClass+=" v-card__title--primary"),t("div",data,o)}})},125:function(t,e,r){"use strict";r(126),r(128);var o=r(9),n=r(0);var c=r.n(n).a.extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation:function(){return this.elevation},elevationClasses:function(){return this.computedElevation?(t={},e="elevation-"+this.computedElevation,r=!0,e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t):{};var t,e,r}}}),l=r(123),d=r(8),h=r(3),v=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var e in source)Object.prototype.hasOwnProperty.call(source,e)&&(t[e]=source[e])}return t},f=Object(h.a)(o.a,c,l.a,d.a).extend({name:"v-sheet",props:{tag:{type:String,default:"div"},tile:Boolean},computed:{classes:function(){return v({"v-sheet":!0,"v-sheet--tile":this.tile},this.themeClasses,this.elevationClasses)},styles:function(){return this.measurableStyles}},render:function(t){var data={class:this.classes,style:this.styles,on:this.$listeners};return t(this.tag,this.setBackgroundColor(this.color,data),this.$slots.default)}}),m=r(20),x=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var e in source)Object.prototype.hasOwnProperty.call(source,e)&&(t[e]=source[e])}return t};e.a=Object(h.a)(m.a,f).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,raised:Boolean},computed:{classes:function(){return x({"v-card":!0,"v-card--flat":this.flat,"v-card--hover":this.hover},f.options.computed.classes.call(this))},styles:function(){var style=x({},f.options.computed.styles.call(this));return this.img&&(style.background='url("'+this.img+'") center center / cover no-repeat'),style}},render:function(t){var e=this.generateRouteLink(this.classes),r=e.tag,data=e.data;return data.style=this.styles,t(r,this.setBackgroundColor(this.color,data),this.$slots.default)}})},126:function(t,e,r){var content=r(127);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals),r(6).default("be70614c",content,!0)},127:function(t,e,r){(t.exports=r(5)(!1)).push([t.i,".theme--light.v-card{background-color:#fff;border-color:#fff;color:rgba(0,0,0,.87)}.theme--dark.v-card{background-color:#424242;border-color:#424242;color:#fff}.v-card{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);text-decoration:none}.v-card>:first-child:not(.v-btn):not(.v-chip){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-card--hover{cursor:pointer;transition:all .4s cubic-bezier(.25,.8,.25,1);transition-property:box-shadow}.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;padding:16px}.v-card__title--primary{padding-top:24px}.v-card__text{padding:16px;width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions .v-btn,.v-card__actions>*{margin:0}.v-card__actions .v-btn+.v-btn{margin-left:8px}",""])},128:function(t,e,r){var content=r(129);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals),r(6).default("74d835da",content,!0)},129:function(t,e,r){(t.exports=r(5)(!1)).push([t.i,".theme--light.v-sheet{background-color:#fff;border-color:#fff;color:rgba(0,0,0,.87)}.theme--dark.v-sheet{background-color:#424242;border-color:#424242;color:#fff}.v-sheet{display:block;border-radius:2px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-sheet--tile{border-radius:0}",""])},130:function(t,e,r){var content=r(131);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals),r(6).default("5470a08c",content,!0)},131:function(t,e,r){(t.exports=r(5)(!1)).push([t.i,".v-image{z-index:0}.v-image__image,.v-image__placeholder{z-index:-1;position:absolute;top:0;left:0;width:100%;height:100%}.v-image__image{background-repeat:no-repeat}.v-image__image--preload{-webkit-filter:blur(2px);filter:blur(2px)}.v-image__image--contain{background-size:contain}.v-image__image--cover{background-size:cover}",""])},132:function(t,e,r){var content=r(133);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals),r(6).default("27f0eb42",content,!0)},133:function(t,e,r){(t.exports=r(5)(!1)).push([t.i,".v-responsive{position:relative;overflow:hidden;flex:1 0 auto;display:flex}.v-responsive__content{flex:1 0 0px}.v-responsive__sizer{transition:padding-bottom .2s cubic-bezier(.25,.8,.5,1);flex:0 0 0px}",""])},134:function(t,e,r){"use strict";var o=r(4),component=Object(o.a)({},function(){var t=this.$createElement;return(this._self._c||t)("vue-particles",{attrs:{color:"#dedede",particleOpacity:1,particlesNumber:80,shapeType:"circle",particleSize:4,linesColor:"#dedede",linesWidth:1,lineLinked:!0,lineOpacity:.4,linesDistance:150,moveSpeed:3,hoverEffect:!0,hoverMode:"grab",clickEffect:!0,clickMode:"push"}})},[],!1,null,null,"745215c3");e.a=component.exports},135:function(t,e,r){"use strict";var o=r(1),n=r(125),c=(r(130),r(132),r(123)),l=r(3),d=Object(l.a)(c.a).extend({name:"v-responsive",props:{aspectRatio:[String,Number]},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content"},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),h=r(7),v=d.extend({name:"v-img",props:{alt:String,contain:Boolean,src:{type:[String,Object],default:""},gradient:String,lazySrc:String,srcset:String,sizes:String,position:{type:String,default:"center center"},transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0}},computed:{computedAspectRatio:function(){return this.normalisedSrc.aspect},normalisedSrc:function(){return"string"==typeof this.src?{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||this.calculatedAspectRatio)}:{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect||this.calculatedAspectRatio)}},__cachedImage:function(){if(!this.normalisedSrc.src&&!this.normalisedSrc.lazySrc)return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient("+this.gradient+")"),e&&t.push('url("'+e+'")');var image=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[image]):image}},watch:{src:function(){this.isLoading?this.loadImage():this.init()},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(){if(this.normalisedSrc.lazySrc){var t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src)},onError:function(){Object(h.a)("Image load failed\n\nsrc: "+this.normalisedSrc.src,this),this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,image=new Image;this.image=image,image.onload=function(){image.decode?image.decode().catch(function(e){Object(h.b)("Failed to decode image, trying to render anyway\n\nsrc: "+t.normalisedSrc.src+(e.message?"\nOriginal error: "+e.message:""),t)}).then(t.onLoad):t.onLoad()},image.onerror=this.onError,image.src=this.normalisedSrc.src,this.sizes&&(image.sizes=this.sizes),this.normalisedSrc.srcset&&(image.srcset=this.normalisedSrc.srcset),this.aspectRatio||this.pollForSize(image),this.getSrc()},pollForSize:function(img){var t=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;!function r(){var o=img.naturalHeight,n=img.naturalWidth;o||n?t.calculatedAspectRatio=n/o:null!=e&&setTimeout(r,e)}()},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{attrs:{name:this.transition}},t):t[0]}}},render:function(t){var e=d.options.render.call(this,t);return e.data.staticClass+=" v-image",e.data.attrs={role:this.alt?"img":void 0,"aria-label":this.alt},e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,e.data,e.children)}}).extend({name:"v-card-media",mounted:function(){Object(h.c)("v-card-media",this.src?"v-img":"v-responsive",this)}}),f=r(124);r.d(e,"a",function(){return m}),r.d(e,"b",function(){return x});var m=Object(o.c)("v-card__actions"),x=Object(o.c)("v-card__text");n.a,f.a},141:function(t,e,r){var content=r(159);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=r(6).default;t.exports.__inject__=function(t){o("2af277af",content,!0,t)}},158:function(t,e,r){"use strict";r.r(e);var o=r(141),n=r.n(o);for(var c in o)"default"!==c&&function(t){r.d(e,t,function(){return o[t]})}(c);e.default=n.a},159:function(t,e,r){(t.exports=r(5)(!1)).push([t.i,'.portfolio .middleone{background-image:url(/img/plans.jpg)}.portfolio .blank,.portfolio .middleone{background-position:top;background-repeat:no-repeat;background-size:cover}.portfolio .blank{background-color:#fff}.splash:after{background-image:linear-gradient(0deg,transparent 0,#000 170%);height:500px;margin-top:0;content:"";position:absolute;display:block;width:100%}.portfolio .sesheadline{font-size:20px;line-height:1;padding-top:0;text-shadow:2px 2px 2px #444;z-index:99}.portfolio .sesheadline,.portfolio .sessubheadline{font-weight:900;text-transform:uppercase;text-align:center;color:#eee}.portfolio .sessubheadline{font-size:18px}#more{color:#eee}.intro #more,.portfolio #more,.splash #more{position:absolute;top:85%;margin:0 auto;width:100%;text-align:center;text-decoration:none;font-weight:600;text-transform:uppercase;letter-spacing:2px}.middleone #more{top:90%;width:33%}.middleone #more,.middleone #moretop{position:absolute;bottom:0;margin:0 auto;text-align:center;text-decoration:none;font-weight:600;text-transform:uppercase;letter-spacing:2px}.middleone #moretop{top:15%;width:30%}.portfolio .sesheadline{font-size:55px;padding-bottom:10px;width:80%;margin:0 auto}.portfolio .sesheadlineblue{font-size:55px;color:#0047b3;padding-bottom:50px;width:80%;margin:0 auto}.portfolio .swipe{font-size:12px;bottom:70px}.portfolio .formore,.portfolio .swipe{font-weight:900;color:#000;position:absolute;padding-left:196px}.portfolio .formore{text-transform:uppercase;font-size:25px;bottom:90px}.intro #more .headline-more,.middleone #more .headline-more,.portfolio #more{color:#222}.fp-controlArrow.fp-next,.fp-controlArrow.fp-prev{display:none}.portfolio{background:#fff}#particles{z-index:9;position:absolute;width:100%;height:auto;display:block}',""])},176:function(t,e,r){"use strict";r.r(e);var o={layout:"front",components:{Particles:r(134).a}},n=r(4),c=r(10),l=r.n(c),d=r(125),h=r(135),v=r(42),f=r(43),m=r(44);var component=Object(n.a)(o,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("no-ssr",[r("div",[r("full-page",{ref:"fullpage",attrs:{id:"fullpage"}},[r("div",{staticClass:"section portfolio"},[r("div",{staticClass:"slide middleone text-xs-center"},[r("h1",{staticClass:"sesheadline"},[t._v("PORTFOLIO")]),t._v(" "),r("h2",{staticClass:"formore"},[t._v("More")]),t._v(" "),r("h4",{staticClass:"swipe"},[t._v("\n            <-- swipe --\x3e\n          ")]),t._v(" "),r("v-container",[r("div",{attrs:{id:"moretop"}},[r("div",{staticClass:"headline-more"})]),t._v(" "),r("div",{attrs:{id:"more"}},[r("div",{staticClass:"headline-more"})])])],1),t._v(" "),r("div",{staticClass:"section blank"},[r("div",{staticClass:"slide middletwo text-xs-center"},[r("h1",{staticClass:"sesheadlineblue"},[t._v("PORTFOLIO")]),t._v(" "),r("v-container",[r("div",{attrs:{id:"moretop"}},[r("div",{staticClass:"headline-more"},[r("v-container",{attrs:{"grid-list-md":"","text-xs-center":""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs6:""}},[r("v-card",{attrs:{dark:"",color:"secondary"}},[r("v-card-text",{staticClass:"px-0"},[t._v("Portfolio 1")])],1)],1),t._v(" "),r("v-flex",{attrs:{xs6:""}},[r("v-card",{attrs:{dark:"",color:"secondary"}},[r("v-card-text",{staticClass:"px-0"},[t._v("Portfolio 2")])],1)],1)],1),t._v(" "),r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs6:""}},[r("v-card",{attrs:{dark:"",color:"secondary"}},[r("v-card-text",{staticClass:"px-0"},[t._v("Portfolio 3")])],1)],1),t._v(" "),r("v-flex",{attrs:{xs6:""}},[r("v-card",{attrs:{dark:"",color:"secondary"}},[r("v-card-text",{staticClass:"px-0"},[t._v("Portfolio 4")])],1)],1)],1),t._v(" "),r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs6:""}},[r("v-card",{attrs:{dark:"",color:"secondary"}},[r("v-card-text",{staticClass:"px-0"},[t._v("Portfolio 5")])],1)],1),t._v(" "),r("v-flex",{attrs:{xs6:""}},[r("v-card",{attrs:{dark:"",color:"secondary"}},[r("v-card-text",{staticClass:"px-0"},[t._v("Portfolio 6")])],1)],1)],1)],1)],1)]),t._v(" "),r("div",{attrs:{id:"more"}})])],1)])])])],1)])},[],!1,function(t){var e=r(158);e.__inject__&&e.__inject__(t)},null,"567c801e");e.default=component.exports;l()(component,{VCard:d.a,VCardText:h.b,VContainer:v.a,VFlex:f.a,VLayout:m.a})}};
//# sourceMappingURL=f3d434c353d9aad72616.js.map