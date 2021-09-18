"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[84989],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return I}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),h=p(r),I=a,f=h["".concat(l,".").concat(I)]||h[I]||s[I]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function I(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},80823:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},assets:function(){return p},toc:function(){return u},default:function(){return h}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i={title:"\u7528 Chaos Mesh \u6d4b\u8bd5 Apache APISIX \u7684\u6062\u590d\u80fd\u529b ",date:new Date("2021-08-06T14:50:00.000Z"),keywords:["APISIX","Chaos Mesh","\u6df7\u6c8c\u5de5\u7a0b","API \u7f51\u5173","CI"],description:"Apache APISIX \u662f\u9886\u5148\u7684 API \u7f51\u5173 OSS \u4e4b\u4e00\u3002APISIX \u4f7f\u7528\u4e86\u4e0d\u540c\u79cd\u7c7b\u7684\u6d4b\u8bd5\uff0c\u5305\u62ec\u5355\u5143\u3001e2e \u548c\u6a21\u7cca\u6d4b\u8bd5\uff0c\u5f53\u4e00\u4e9b\u4e0d\u6b63\u5e38\u4f46\u4e0d\u53ef\u907f\u514d\u7684\u60c5\u51b5\u53d1\u751f\u65f6\uff0c\u4f8b\u5982\u7f51\u7edc\u6545\u969c\u3001IO \u538b\u529b\u6216 pod \u6545\u969c\uff0cAPISIX \u4f1a\u5982\u4f55\u8868\u73b0\u3002\u56e0\u6b64\uff0c\u5728\u8fd9\u91cc\u6211\u4eec\u4f7f\u7528 Chaos Mesh\uff0c\u4e00\u4e2a\u57fa\u4e8e Kubernetes \u7684\u6df7\u6c8c\u5de5\u7a0b\u5e73\u53f0\uff0c\u53ef\u4ee5\u987a\u5229\u5730\u6ce8\u5165\u4e0d\u540c\u79cd\u7c7b\u7684\u6df7\u6c8c\uff0c\u5e76\u5c06\u5176\u6574\u5408\u5230\u6211\u4eec\u7684 CI \u7ba1\u9053\u4e2d\u3002\u5728\u8fd9\u4e2a\u8bb2\u5ea7\u7684\u6700\u540e\uff0c\u542c\u4f17\u4f1a\u4e86\u89e3\u5230\u6df7\u6c8c\u5de5\u7a0b\u4f1a\u5728\u54ea\u4e9b\u65b9\u9762\u7ed9 API \u7f51\u5173\u5e26\u6765\u597d\u5904\uff0c\u4ee5\u53ca\u5982\u4f55\u5c06\u6df7\u6c8c\u7f51\u6574\u5408\u5230\u4f60\u81ea\u5df1\u7684\u6d4b\u8bd5\u7ba1\u9053\u4e2d\u3002"},c=void 0,l={permalink:"/articles/Test-Apache-APISIX-Resilience-With-Chaos-Mesh",source:"@site/articles/Test-Apache-APISIX-Resilience-With-Chaos-Mesh.md",title:"\u7528 Chaos Mesh \u6d4b\u8bd5 Apache APISIX \u7684\u6062\u590d\u80fd\u529b ",description:"Apache APISIX \u662f\u9886\u5148\u7684 API \u7f51\u5173 OSS \u4e4b\u4e00\u3002APISIX \u4f7f\u7528\u4e86\u4e0d\u540c\u79cd\u7c7b\u7684\u6d4b\u8bd5\uff0c\u5305\u62ec\u5355\u5143\u3001e2e \u548c\u6a21\u7cca\u6d4b\u8bd5\uff0c\u5f53\u4e00\u4e9b\u4e0d\u6b63\u5e38\u4f46\u4e0d\u53ef\u907f\u514d\u7684\u60c5\u51b5\u53d1\u751f\u65f6\uff0c\u4f8b\u5982\u7f51\u7edc\u6545\u969c\u3001IO \u538b\u529b\u6216 pod \u6545\u969c\uff0cAPISIX \u4f1a\u5982\u4f55\u8868\u73b0\u3002\u56e0\u6b64\uff0c\u5728\u8fd9\u91cc\u6211\u4eec\u4f7f\u7528 Chaos Mesh\uff0c\u4e00\u4e2a\u57fa\u4e8e Kubernetes \u7684\u6df7\u6c8c\u5de5\u7a0b\u5e73\u53f0\uff0c\u53ef\u4ee5\u987a\u5229\u5730\u6ce8\u5165\u4e0d\u540c\u79cd\u7c7b\u7684\u6df7\u6c8c\uff0c\u5e76\u5c06\u5176\u6574\u5408\u5230\u6211\u4eec\u7684 CI \u7ba1\u9053\u4e2d\u3002\u5728\u8fd9\u4e2a\u8bb2\u5ea7\u7684\u6700\u540e\uff0c\u542c\u4f17\u4f1a\u4e86\u89e3\u5230\u6df7\u6c8c\u5de5\u7a0b\u4f1a\u5728\u54ea\u4e9b\u65b9\u9762\u7ed9 API \u7f51\u5173\u5e26\u6765\u597d\u5904\uff0c\u4ee5\u53ca\u5982\u4f55\u5c06\u6df7\u6c8c\u7f51\u6574\u5408\u5230\u4f60\u81ea\u5df1\u7684\u6d4b\u8bd5\u7ba1\u9053\u4e2d\u3002",date:"2021-08-06T14:50:00.000Z",formattedDate:"August 6, 2021",tags:[],readingTime:.39,truncated:!1,authors:[],prevItem:{title:"\u4f7f\u7528 Apache APISIX \u8fdb\u884c\u8ba4\u8bc1\u548c\u6388\u6743",permalink:"/articles/Using-Apache-APISIX-To-Do-Authentication-and-Authorization"},nextItem:{title:"\u4f7f\u7528 Apache APISIX \u5b9e\u73b0\u9650\u6d41\u9650\u901f",permalink:"/articles/Speed-Limiting-With-Apache-APISIX"}},p={authorsImageUrls:[]},u=[{value:"\u5206\u4eab\u4eba\u7b80\u4ecb",id:"\u5206\u4eab\u4eba\u7b80\u4ecb",children:[]},{value:"\u5206\u4eab\u4e3b\u9898\u4ecb\u7ecd",id:"\u5206\u4eab\u4e3b\u9898\u4ecb\u7ecd",children:[]},{value:"PPT \u4e0b\u8f7d",id:"ppt-\u4e0b\u8f7d",children:[]}],s={toc:u};function h(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("iframe",{src:"//player.bilibili.com/player.html?aid=334774886&bvid=BV1JA411w7w8&cid=388417850&page=1",frameborder:"0",scrolling:"no",allowfullscreen:"true",style:{width:"100%",maxHeight:"calc(100vw / 5 * 3)",height:"calc(100vh / 5 * 3)"}}),(0,o.kt)("h2",{id:"\u5206\u4eab\u4eba\u7b80\u4ecb"},"\u5206\u4eab\u4eba\u7b80\u4ecb"),(0,o.kt)("p",null,"\u5434\u8212\u65f8\uff0cApache APISIX \u548c Chaos Mesh \u7684\u63d0\u4ea4\u8005\uff0c\u76ee\u524d\u5728 API7 \u62c5\u4efb\u5b9e\u4e60\u8f6f\u4ef6\u5de5\u7a0b\u5e08\u3002\u4ed6\u9886\u5bfc\u4e86 Chaos Mesh \u4e0e Apache APISIX CI \u7684\u6574\u5408\u5de5\u4f5c\u3002"),(0,o.kt)("h2",{id:"\u5206\u4eab\u4e3b\u9898\u4ecb\u7ecd"},"\u5206\u4eab\u4e3b\u9898\u4ecb\u7ecd"),(0,o.kt)("p",null,"Apache APISIX \u662f\u9886\u5148\u7684 API \u7f51\u5173 OSS \u4e4b\u4e00\u3002\u4e3a\u4e86\u786e\u4fdd\u4e00\u5207\u6309\u8ba1\u5212\u8fdb\u884c\uff0cAPISIX \u4f7f\u7528\u4e86\u4e0d\u540c\u79cd\u7c7b\u7684\u6d4b\u8bd5\uff0c\u5305\u62ec\u5355\u5143\u3001e2e \u548c\u6a21\u7cca\u6d4b\u8bd5\u3002\u7136\u800c\uff0c\u6211\u4eec\u4ecd\u7136\u4e0d\u786e\u5b9a\uff0c\u5f53\u4e00\u4e9b\u4e0d\u6b63\u5e38\u4f46\u4e0d\u53ef\u907f\u514d\u7684\u60c5\u51b5\u53d1\u751f\u65f6\uff0c\u4f8b\u5982\u7f51\u7edc\u6545\u969c\u3001IO \u538b\u529b\u6216 pod \u6545\u969c\uff0cAPISIX \u4f1a\u5982\u4f55\u8868\u73b0\u3002"),(0,o.kt)("p",null,"\u56e0\u6b64\uff0c\u5728\u8fd9\u91cc\u6211\u4eec\u4f7f\u7528 Chaos Mesh\uff0c\u4e00\u4e2a\u57fa\u4e8e Kubernetes \u7684\u6df7\u6c8c\u5de5\u7a0b\u5e73\u53f0\uff0c\u53ef\u4ee5\u987a\u5229\u5730\u6ce8\u5165\u4e0d\u540c\u79cd\u7c7b\u7684\u6df7\u6c8c\uff0c\u5e76\u5c06\u5176\u6574\u5408\u5230\u6211\u4eec\u7684 CI \u7ba1\u9053\u4e2d\u3002\u5728\u8fd9\u4e2a\u8bb2\u5ea7\u7684\u6700\u540e\uff0c\u542c\u4f17\u4f1a\u4e86\u89e3\u5230\u6df7\u6c8c\u5de5\u7a0b\u4f1a\u5728\u54ea\u4e9b\u65b9\u9762\u7ed9 API \u7f51\u5173\u5e26\u6765\u597d\u5904\uff0c\u4ee5\u53ca\u5982\u4f55\u5c06\u6df7\u6c8c\u7f51\u6574\u5408\u5230\u4f60\u81ea\u5df1\u7684\u6d4b\u8bd5\u7ba1\u9053\u4e2d\u3002"),(0,o.kt)("h2",{id:"ppt-\u4e0b\u8f7d"},"PPT \u4e0b\u8f7d"),(0,o.kt)("p",null,"\u5173\u6ce8 Apache APISIX \u516c\u4f17\u53f7\uff0c\u56de\u590d\u201cApacheCon\u201d\u4e0b\u8f7d PPT\u3002"),(0,o.kt)("img",{src:"../img/blog_img/APISIX-wechat.png",alt:"Apache APISIX WeChat",style:{width:"200px"}}))}h.isMDXComponent=!0}}]);