"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[79059],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),f=p(r),h=i,d=f["".concat(l,".").concat(h)]||f[h]||s[h]||a;return r?n.createElement(d,c(c({ref:t},u),{},{components:r})):n.createElement(d,c({ref:t},u))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,c=new Array(a);c[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var p=2;p<a;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},86117:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return o},metadata:function(){return l},assets:function(){return p},toc:function(){return u},default:function(){return f}});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),c={title:"\u4f7f\u7528 Apache APISIX \u5b9e\u73b0\u9650\u6d41\u9650\u901f",date:new Date("2021-08-06T13:30:00.000Z"),keywords:["APISIX","ApacheCon","\u9650\u6d41\u9650\u901f","Nginx"],description:"\u672c\u6b21\u5206\u4eab\u5c06\u5e26\u6765\u5982\u4f55\u4f7f\u7528 Apache APISIX \u6765\u5b9e\u73b0\u52a8\u6001\u3001\u7cbe\u7ec6\u5316\u3001\u5206\u5e03\u5f0f\u7684\u9650\u6d41\u9650\u901f\uff0c\u4ee5\u53ca\u5982\u4f55\u901a\u8fc7\u63d2\u4ef6\u7f16\u6392\u6765\u5b9e\u73b0\u66f4\u7b26\u5408\u4e1a\u52a1\u9700\u6c42\u7684\u9650\u6d41\u9650\u901f\u3002"},o=void 0,l={permalink:"/articles/Speed-Limiting-With-Apache-APISIX",source:"@site/articles/Speed-Limiting-With-Apache-APISIX.md",title:"\u4f7f\u7528 Apache APISIX \u5b9e\u73b0\u9650\u6d41\u9650\u901f",description:"\u672c\u6b21\u5206\u4eab\u5c06\u5e26\u6765\u5982\u4f55\u4f7f\u7528 Apache APISIX \u6765\u5b9e\u73b0\u52a8\u6001\u3001\u7cbe\u7ec6\u5316\u3001\u5206\u5e03\u5f0f\u7684\u9650\u6d41\u9650\u901f\uff0c\u4ee5\u53ca\u5982\u4f55\u901a\u8fc7\u63d2\u4ef6\u7f16\u6392\u6765\u5b9e\u73b0\u66f4\u7b26\u5408\u4e1a\u52a1\u9700\u6c42\u7684\u9650\u6d41\u9650\u901f\u3002",date:"2021-08-06T13:30:00.000Z",formattedDate:"August 6, 2021",tags:[],readingTime:.295,truncated:!1,authors:[],prevItem:{title:"\u7528 Chaos Mesh \u6d4b\u8bd5 Apache APISIX \u7684\u6062\u590d\u80fd\u529b ",permalink:"/articles/Test-Apache-APISIX-Resilience-With-Chaos-Mesh"}},p={authorsImageUrls:[]},u=[{value:"\u5206\u4eab\u4eba\u7b80\u4ecb",id:"\u5206\u4eab\u4eba\u7b80\u4ecb",children:[]},{value:"\u5206\u4eab\u4e3b\u9898\u4ecb\u7ecd",id:"\u5206\u4eab\u4e3b\u9898\u4ecb\u7ecd",children:[]},{value:"PPT \u4e0b\u8f7d",id:"ppt-\u4e0b\u8f7d",children:[]}],s={toc:u};function f(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("iframe",{src:"//player.bilibili.com/player.html?aid=674805891&bvid=BV19U4y177Vh&cid=388403877&page=1",frameborder:"0",scrolling:"no",allowfullscreen:"true",style:{width:"100%",maxHeight:"calc(100vw / 5 * 3)",height:"calc(100vh / 5 * 3)"}}),(0,a.kt)("h2",{id:"\u5206\u4eab\u4eba\u7b80\u4ecb"},"\u5206\u4eab\u4eba\u7b80\u4ecb"),(0,a.kt)("p",null,"\u9648\u519b\u65ed\uff0c\u4e92\u8054\u7f51\u8001\u5175\uff0c\u66fe\u4efb\u804c\u4e8e\u65b0\u6d6a\u3001\u8fc5\u96f7\u3001360 \u7b49\u77e5\u540d\u4e92\u8054\u7f51\u516c\u53f8\u3002 \u6700\u8fd1\u4e24\u5e74\u5f00\u59cb\u6df1\u5ea6\u53c2\u4e0e\u5f00\u6e90\uff0c\u70ed\u7231\u5f00\u6e90\u3002\u76ee\u524d\u4ece\u4e8b\u5f00\u6e90\u5546\u4e1a\u5316\u521b\u4e1a\u3002"),(0,a.kt)("h2",{id:"\u5206\u4eab\u4e3b\u9898\u4ecb\u7ecd"},"\u5206\u4eab\u4e3b\u9898\u4ecb\u7ecd"),(0,a.kt)("p",null,"\u8c08\u5230\u9650\u6d41\u9650\u901f\uff0c\u4eba\u4eec\u5f80\u5f80\u6700\u5148\u60f3\u5230\u7684\u662f Nginx \u3002\u7136\u800c Nginx \u901a\u8fc7\u914d\u7f6e\u6587\u4ef6\u7684\u65b9\u5f0f\u5b9e\u73b0\uff0c\u6bcf\u6b21\u53d8\u66f4\u90fd\u9700\u8981 reload \uff0c\u8fd9\u8ba9\u8fd0\u7ef4\u5de5\u4f5c\u6781\u5176\u7e41\u6742\u3002\u53e6\u4e00\u65b9\u9762\uff0c\u9650\u901f\u7684\u6761\u4ef6\u88ab\u9650\u5236\u5728 Nginx \u7684\u53d8\u91cf\u8303\u56f4\u5185\uff0c\u4f7f\u5f97 Nginx \u96be\u4ee5\u5b9e\u73b0\u4e1a\u52a1\u4e0a\u7cbe\u7ec6\u5316\u7684\u9650\u6d41\u9650\u901f\u9700\u6c42\u3002"),(0,a.kt)("p",null,"\u672c\u6b21\u5206\u4eab\u5c06\u5e26\u6765\u5982\u4f55\u4f7f\u7528 Apache APISIX \u6765\u5b9e\u73b0\u52a8\u6001\u3001\u7cbe\u7ec6\u5316\u3001\u5206\u5e03\u5f0f\u7684\u9650\u6d41\u9650\u901f\uff0c\u4ee5\u53ca\u5982\u4f55\u901a\u8fc7\u63d2\u4ef6\u7f16\u6392\u6765\u5b9e\u73b0\u66f4\u7b26\u5408\u4e1a\u52a1\u9700\u6c42\u7684\u9650\u6d41\u9650\u901f\u3002"),(0,a.kt)("h2",{id:"ppt-\u4e0b\u8f7d"},"PPT \u4e0b\u8f7d"),(0,a.kt)("p",null,"\u5173\u6ce8 Apache APISIX \u516c\u4f17\u53f7\uff0c\u56de\u590d\u201cApacheCon\u201d\u4e0b\u8f7d PPT\u3002"),(0,a.kt)("img",{src:"../img/blog_img/APISIX-wechat.png",alt:"Apache APISIX WeChat",style:{width:"200px"}}))}f.isMDXComponent=!0}}]);