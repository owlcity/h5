(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-qrcode-patient"],{"1bac":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={name:"shareQrcode",props:{url:{type:String,default:""},title:{type:String,default:""}},data:function(){return{}}};e.default=r},"229e":function(t,e,n){"use strict";n.r(e);var r=n("5006"),a=n("45fe");for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);n("5bee");var c,u=n("f0c5"),o=Object(u["a"])(a["default"],r["b"],r["c"],!1,null,"2dd1aa84",null,!1,r["a"],c);e["default"]=o.exports},"45fe":function(t,e,n){"use strict";n.r(e);var r=n("1bac"),a=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);e["default"]=a.a},5006:function(t,e,n){"use strict";var r,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"qrcode"},[n("v-uni-view",{staticClass:"qrcode-img"},[n("v-uni-image",{attrs:{src:t.url}})],1),n("v-uni-view",{staticClass:"qrcode-con"},[n("v-uni-view",{staticClass:"qrcode-title"},[t._v(t._s(t.title))]),n("v-uni-view",{staticClass:"qrcode-text"},[t._v("点击右上角分享")])],1)],1)},i=[];n.d(e,"b",function(){return a}),n.d(e,"c",function(){return i}),n.d(e,"a",function(){return r})},5666:function(t,e,n){var r=n("a85e");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=n("4f06").default;a("542438d0",r,!0,{sourceMap:!1,shadowMode:!1})},"5bee":function(t,e,n){"use strict";var r=n("5666"),a=n.n(r);a.a},"5d82":function(t,e,n){"use strict";var r=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n("229e")),i={components:{shareQrcode:a.default},data:function(){return{}},methods:{}};e.default=i},"7fa0":function(t,e,n){"use strict";n.r(e);var r=n("d456"),a=n("852a");for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);var c,u=n("f0c5"),o=Object(u["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],c);e["default"]=o.exports},"852a":function(t,e,n){"use strict";n.r(e);var r=n("5d82"),a=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);e["default"]=a.a},a85e:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.qrcode[data-v-2dd1aa84]{background-color:#fff;width:%?510?%;height:%?720?%;padding:0 %?30?%;border-radius:%?16?%;margin:%?150?% auto 0;text-align:center}.qrcode .qrcode-img[data-v-2dd1aa84]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;height:%?530?%;border-bottom:1px dashed #ccc}.qrcode .qrcode-img uni-image[data-v-2dd1aa84]{width:%?350?%;height:%?350?%}.qrcode .qrcode-con .qrcode-title[data-v-2dd1aa84]{color:#58b3f8;font-size:16px;padding-top:%?40?%}',""])},d456:function(t,e,n){"use strict";var r,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"page"},[n("share-qrcode",{attrs:{url:"../../static/carousel/qrcode.png",title:"请患者扫描二维码"}})],1)},i=[];n.d(e,"b",function(){return a}),n.d(e,"c",function(){return i}),n.d(e,"a",function(){return r})}}]);