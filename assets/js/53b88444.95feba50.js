"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4053],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),g=u(n),f=a,m=g["".concat(p,".").concat(f)]||g[f]||s[f]||o;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7639:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return u},toc:function(){return l},default:function(){return g}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i={title:"\u5982\u4f55\u5229\u7528 Apache APISX \u63d0\u5347 Nginx \u7684\u53ef\u89c2\u6d4b\u6027",author:"gxthrj",authorURL:"https://github.com/gxthrj",authorImageURL:"https://avatars.githubusercontent.com/u/4413028?v=4",keywords:["API \u7f51\u5173","APISIX","Apache APISIX","Nginx","\u53ef\u89c2\u6d4b\u6027"],description:"\u6700\u4f73\u5b9e\u8df5\uff1a\u672c\u6587\u5c06\u4ece Nginx \u53ef\u89c2\u6d4b\u6027\u3001Apache APISIX \u4e0e Nginx \u7684\u5173\u7cfb\u3001Apache APISIX \u53ef\u89c2\u6d4b\u6027\uff0c\u4ee5\u53ca\u7ed3\u5408 Apache SkyWalking \u8fdb\u4e00\u6b65\u63d0\u5347\u53ef\u89c2\u6d4b\u6027\u8fd9\u4e9b\u65b9\u9762\u5206\u4eab\u5173\u4e8e\u53ef\u89c2\u6d4b\u6027\u7684\u65b9\u6848\u4e0e\u5b9e\u8df5\u3002",tags:["technology","practical case"]},c=void 0,p={permalink:"/blog/2021/08/06/using-apache-apisix-to-improve-the-observability-of-nginx",source:"@site/blog/2021-08-06-using-apache-apisix-to-improve-the-observability-of-nginx.md",title:"\u5982\u4f55\u5229\u7528 Apache APISX \u63d0\u5347 Nginx \u7684\u53ef\u89c2\u6d4b\u6027",description:"\u6700\u4f73\u5b9e\u8df5\uff1a\u672c\u6587\u5c06\u4ece Nginx \u53ef\u89c2\u6d4b\u6027\u3001Apache APISIX \u4e0e Nginx \u7684\u5173\u7cfb\u3001Apache APISIX \u53ef\u89c2\u6d4b\u6027\uff0c\u4ee5\u53ca\u7ed3\u5408 Apache SkyWalking \u8fdb\u4e00\u6b65\u63d0\u5347\u53ef\u89c2\u6d4b\u6027\u8fd9\u4e9b\u65b9\u9762\u5206\u4eab\u5173\u4e8e\u53ef\u89c2\u6d4b\u6027\u7684\u65b9\u6848\u4e0e\u5b9e\u8df5\u3002",date:"2021-08-06T00:00:00.000Z",formattedDate:"August 6, 2021",tags:[{label:"technology",permalink:"/blog/tags/technology"},{label:"practical case",permalink:"/blog/tags/practical-case"}],readingTime:3.66,truncated:!0,authors:[{name:"gxthrj",url:"https://github.com/gxthrj",imageURL:"https://avatars.githubusercontent.com/u/4413028?v=4"}],prevItem:{title:"\u820d\u5f03 Kong \u548c Nginx\uff0cApache APISIX \u5728\u8da3\u94fe\u79d1\u6280 BaaS \u5e73\u53f0\u7684\u843d\u5730\u5b9e\u8df5",permalink:"/blog/2021/08/09/Apache-APISIX-in-Quliankeji"},nextItem:{title:"Kong-To-APISIX \u8fc1\u79fb\u5de5\u5177",permalink:"/blog/2021/08/05/Kong-to-APISIX"}},u={authorsImageUrls:[void 0]},l=[],s={toc:l};function g(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/gxthrj"},"@gxthrj"),", Apache APISIX PMC from ",(0,o.kt)("a",{parentName:"p",href:"https://www.apiseven.com/"},"api7.ai"))))}g.isMDXComponent=!0}}]);