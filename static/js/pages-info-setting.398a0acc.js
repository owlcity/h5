(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-info-setting"],{"0693":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniTitle",props:{type:{type:String,default:""},title:{type:String,default:""},subTitle:{type:String,default:""}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};e.default=n},"2e58":function(t,e,i){var n=i("8d47");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("1b34c902",n,!0,{sourceMap:!1,shadowMode:!1})},"420f":function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-section"},[t.type?i("v-uni-view",{staticClass:"uni-section__head"},[i("v-uni-view",{staticClass:"uni-section__head-tag",class:t.type})],1):t._e(),i("v-uni-view",{staticClass:"uni-section__content"},[i("v-uni-text",{staticClass:"uni-section__content-title",class:{distraction:!t.subTitle}},[t._v(t._s(t.title))]),t.subTitle?i("v-uni-text",{staticClass:"uni-section__content-sub"},[t._v(t._s(t.subTitle))]):t._e()],1),t._t("default")],2)},o=[];i.d(e,"b",function(){return a}),i.d(e,"c",function(){return o}),i.d(e,"a",function(){return n})},"6e60":function(t,e,i){"use strict";i.r(e);var n=i("ba94"),a=i("78be");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("71db");var r,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"40a1cd7c",null,!1,n["a"],r);e["default"]=c.exports},"71db":function(t,e,i){"use strict";var n=i("2e58"),a=i.n(n);a.a},"77a2":function(t,e,i){"use strict";i.r(e);var n=i("0693"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},"78be":function(t,e,i){"use strict";i.r(e);var n=i("8844"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},8844:function(t,e,i){"use strict";var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a,o=n(i("f0cf")),r=n(i("f808")),s=n(i("820e")),c=n(i("b9ac")),u={components:{uniSection:o.default,uniList:r.default,uniListItem:s.default,uniIcons:c.default},data:function(){return{index:0,array:["男","女"]}},onLoad:function(){},methods:{bindTextAreaBlur:function(t){console.log(t.detail.value)},bindPickerChange:function(t){console.log("picker发送选择改变，携带值为",t.target.value),this.index=t.target.value},upload:function(){a=this,console.log("upload"),uni.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album"],success:function(t){var e=t.tempFilePaths;console.log(t);var i=uni.uploadFile({url:"https://demo.hcoder.net/index.php?c=uperTest",filePath:e[0],name:"file",formData:{user:"test"},success:function(t){console.log(t.data)}});i.onProgressUpdate(function(t){a.percent=t.progress,console.log("上传进度"+t.progress),console.log("已经上传的数据长度"+t.totalBytesSent),console.log("预期需要上传的数据总长度"+t.totalBytesExpectedToSend)})},error:function(t){console.log(t)}})}}};e.default=u},"8d47":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.m-list[data-v-40a1cd7c]{margin-top:%?20?%;border-bottom:1px solid #f9eaea}.margin-0[data-v-40a1cd7c]{margin-top:0}.m-avatar[data-v-40a1cd7c]{padding:%?20?% 0}.example-info[data-v-40a1cd7c]{display:block;padding:15px;color:#3b4144;background-color:#fff;font-size:14px;line-height:20px}.textarea uni-textarea[data-v-40a1cd7c]{min-height:%?80?%}.submit[data-v-40a1cd7c]{padding:%?40?%}',""])},ba94:function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"page"},[i("v-uni-view",{staticClass:"m-list border-top margin-0"},[i("uni-list",{staticClass:"m-avatar"},[i("uni-list-item",{attrs:{title:"牛爱花 20岁",thumb:"../../static/carousel/avator.png"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.upload.apply(void 0,arguments)}}})],1)],1),i("v-uni-view",{staticClass:"m-list border-top"},[i("uni-list",[i("uni-list-item",{attrs:{title:"行医资格证",rightText:"上传"}})],1)],1),i("v-uni-view",{staticClass:"m-list border-top"},[i("uni-list",[i("v-uni-view",{staticClass:"list-input"},[i("v-uni-text",[t._v("真实姓名")]),i("v-uni-view",{staticClass:"input"},[i("v-uni-input",{attrs:{type:"text",placeholder:"请输入姓名"}})],1),i("uni-icons",{attrs:{size:20,color:"#bbb",type:"arrowright"}})],1),i("v-uni-view",{staticClass:"list-input"},[i("v-uni-text",[t._v("性别")]),i("v-uni-view",{staticClass:"input"},[i("v-uni-picker",{attrs:{value:t.index,range:t.array},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindPickerChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.array[t.index]))])],1)],1),i("uni-icons",{attrs:{size:20,color:"#bbb",type:"arrowright"}})],1),i("v-uni-view",{staticClass:"list-input"},[i("v-uni-text",[t._v("手机号")]),i("v-uni-view",{staticClass:"input"},[i("v-uni-input",{attrs:{type:"text",placeholder:"请输入手机号"}})],1),i("uni-icons",{attrs:{size:20,color:"#bbb",type:"arrowright"}})],1),i("v-uni-view",{staticClass:"list-input"},[i("v-uni-text",[t._v("医生职称")]),i("v-uni-view",{staticClass:"input"},[i("v-uni-input",{attrs:{type:"text",placeholder:"请输入职称"}})],1),i("uni-icons",{attrs:{size:20,color:"#bbb",type:"arrowright"}})],1)],1)],1),i("uni-section",{attrs:{title:"简介",type:"line"}}),i("v-uni-view",{staticClass:"example-info textarea border-bottom"},[i("v-uni-view",{staticClass:"uni-textarea"},[i("v-uni-textarea",{attrs:{"auto-height":!0,placeholder:"请输入简介"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.bindTextAreaBlur.apply(void 0,arguments)}}})],1)],1),i("uni-section",{attrs:{title:"擅长",type:"line"}}),i("v-uni-view",{staticClass:"example-info textarea border-bottom"},[i("v-uni-view",{staticClass:"uni-textarea"},[i("v-uni-textarea",{attrs:{"auto-height":!0,placeholder:"请输入擅长"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.bindTextAreaBlur.apply(void 0,arguments)}}})],1)],1),i("uni-section",{attrs:{title:"收货地址",type:"line"}}),i("v-uni-view",{staticClass:"example-info textarea border-bottom"},[i("v-uni-view",{staticClass:"uni-textarea"},[i("v-uni-textarea",{attrs:{"auto-height":!0,placeholder:"请输入收货地址"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.bindTextAreaBlur.apply(void 0,arguments)}}})],1)],1),i("v-uni-view",{staticClass:"submit"},[i("v-uni-button",{attrs:{type:"primary"}},[t._v("保存")])],1)],1)},o=[];i.d(e,"b",function(){return a}),i.d(e,"c",function(){return o}),i.d(e,"a",function(){return n})},bf00:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'.uni-section[data-v-e2177daa]{position:relative;\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\tmargin-top:10px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 10px;height:50px;background-color:#f8f8f8;\n\tfont-weight:400}\n\n.uni-section[data-v-e2177daa]:after{position:absolute;bottom:0;right:0;left:0;height:1px;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5}\n\n.uni-section__head[data-v-e2177daa]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-right:10px}.line[data-v-e2177daa]{height:15px;background-color:silver;border-radius:5px;width:3px}.circle[data-v-e2177daa]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:silver}.uni-section__content[data-v-e2177daa]{-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#333}.uni-section__content-title[data-v-e2177daa]{font-size:%?28?%;color:#333}.distraction[data-v-e2177daa]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-section__content-sub[data-v-e2177daa]{font-size:%?24?%;color:#999}',""])},c96f:function(t,e,i){"use strict";var n=i("e1d6"),a=i.n(n);a.a},e1d6:function(t,e,i){var n=i("bf00");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("acc1c49a",n,!0,{sourceMap:!1,shadowMode:!1})},f0cf:function(t,e,i){"use strict";i.r(e);var n=i("420f"),a=i("77a2");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("c96f");var r,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"e2177daa",null,!1,n["a"],r);e["default"]=c.exports}}]);