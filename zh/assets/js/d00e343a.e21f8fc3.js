"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[38617],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var o=r.createContext({}),p=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):u(u({},e),t)),n},c=function(t){var e=p(t.components);return r.createElement(o.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},h=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,l=t.originalType,o=t.parentName,c=a(t,["components","mdxType","originalType","parentName"]),h=p(n),d=i,k=h["".concat(o,".").concat(d)]||h[d]||m[d]||l;return n?r.createElement(k,u(u({ref:e},c),{},{components:n})):r.createElement(k,u({ref:e},c))}));function d(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var l=n.length,u=new Array(l);u[0]=h;var a={};for(var o in e)hasOwnProperty.call(e,o)&&(a[o]=e[o]);a.originalType=t,a.mdxType="string"==typeof t?t:i,u[1]=a;for(var p=2;p<l;p++)u[p]=n[p];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},95152:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return u},contentTitle:function(){return a},metadata:function(){return o},assets:function(){return p},toc:function(){return c},default:function(){return h}});var r=n(87462),i=n(63366),l=(n(67294),n(3905)),u={title:"\u4e0d\u5199\u4ee3\u7801\uff0c\u5982\u4f55\u4e3a\u5f00\u6e90\u9879\u76ee\u505a\u8d21\u732e\uff1f",author:"Serendipity96",authorURL:"https://github.com/Serendipity96",authorImageURL:"https://avatars.githubusercontent.com/u/23514812?v=4",keywords:["\u5f00\u6e90\u9879\u76ee","\u8d21\u732e"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5f88\u591a\u4e0d\u5199\u4ee3\u7801\u4e3a\u5f00\u6e90\u9879\u76ee\u8d21\u732e\u7684\u65b9\u5f0f\uff0c\u53ef\u4ee5\u901a\u8fc7\u5199\u6587\u7ae0\u3001\u505a\u89c6\u9891\u3001\u5bf9\u5916\u5206\u4eab\u3001\u5efa\u7acb\u672c\u5730\u793e\u533a\u3001\u79ef\u6781\u53c2\u4e0e\u793e\u533a\u8ba8\u8bba\u7b49\u65b9\u5f0f\u53c2\u4e0e\u5230\u5f00\u6e90\u9879\u76ee\u4e2d\u3002",tags:["community"]},a=void 0,o={permalink:"/zh/blog/2021/09/09/how-to-contribute-to-an-OpenSource-without-coding",source:"@site/blog/2021-09-09-how-to-contribute-to-an-OpenSource-without-coding.md",title:"\u4e0d\u5199\u4ee3\u7801\uff0c\u5982\u4f55\u4e3a\u5f00\u6e90\u9879\u76ee\u505a\u8d21\u732e\uff1f",description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5f88\u591a\u4e0d\u5199\u4ee3\u7801\u4e3a\u5f00\u6e90\u9879\u76ee\u8d21\u732e\u7684\u65b9\u5f0f\uff0c\u53ef\u4ee5\u901a\u8fc7\u5199\u6587\u7ae0\u3001\u505a\u89c6\u9891\u3001\u5bf9\u5916\u5206\u4eab\u3001\u5efa\u7acb\u672c\u5730\u793e\u533a\u3001\u79ef\u6781\u53c2\u4e0e\u793e\u533a\u8ba8\u8bba\u7b49\u65b9\u5f0f\u53c2\u4e0e\u5230\u5f00\u6e90\u9879\u76ee\u4e2d\u3002",date:"2021-09-09T00:00:00.000Z",formattedDate:"2021\u5e749\u67089\u65e5",tags:[{label:"community",permalink:"/zh/blog/tags/community"}],readingTime:.75,truncated:!0,authors:[{name:"Serendipity96",url:"https://github.com/Serendipity96",imageURL:"https://avatars.githubusercontent.com/u/23514812?v=4"}],prevItem:{title:"\u7eb5\u89c2\u79fb\u52a8\u4e91\u5bf9\u8c61\u5b58\u50a8\u53d1\u5c55\u5386\u7a0b\uff0c\u4e5f\u5c11\u4e0d\u4e86 Apache APISIX \u7684\u80fd\u529b\u52a0\u6301",permalink:"/zh/blog/2021/09/13/china-mobile-cloud-usercase"},nextItem:{title:"\u4f7f\u7528 Apache APISIX \u8fdb\u884c\u96c6\u4e2d\u5f0f\u8eab\u4efd\u8ba4\u8bc1\u53ca\u8fdb\u9636\u73a9\u6cd5",permalink:"/zh/blog/2021/09/07/how-to-use-apisix-auth"}},p={authorsImageUrls:[void 0]},c=[{value:"\u975e\u4ee3\u7801\u65b9\u5f0f",id:"\u975e\u4ee3\u7801\u65b9\u5f0f",children:[{value:"\u5199\u6587\u7ae0",id:"\u5199\u6587\u7ae0",children:[]},{value:"\u5236\u4f5c\u89c6\u9891",id:"\u5236\u4f5c\u89c6\u9891",children:[]},{value:"\u5927\u4f1a\u5206\u4eab",id:"\u5927\u4f1a\u5206\u4eab",children:[]},{value:"\u5b8c\u5584\u6587\u6863",id:"\u5b8c\u5584\u6587\u6863",children:[]},{value:"\u5efa\u8bbe\u672c\u5730\u793e\u533a\uff0c\u7ec4\u7ec7/\u53c2\u4e0e\u6d3b\u52a8",id:"\u5efa\u8bbe\u672c\u5730\u793e\u533a\uff0c\u7ec4\u7ec7\u53c2\u4e0e\u6d3b\u52a8",children:[]},{value:"\u79ef\u6781\u53c2\u4e0e\u793e\u533a\u8ba8\u8bba",id:"\u79ef\u6781\u53c2\u4e0e\u793e\u533a\u8ba8\u8bba",children:[]}]},{value:"\u4ee3\u7801\u65b9\u5f0f",id:"\u4ee3\u7801\u65b9\u5f0f",children:[{value:"\u8d21\u732e\u529f\u80fd\u3001\u4fee\u590d bug",id:"\u8d21\u732e\u529f\u80fd\u3001\u4fee\u590d-bug",children:[]}]},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[]}],m={toc:c};function h(t){var e=t.components,n=(0,i.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/Serendipity96"},"@Serendipity96")," \uff0cApache APISIX contributor\u3002")),(0,l.kt)("p",null,"\u7b14\u8005\u4e3a\u5f00\u6e90\u9879\u76ee\u8d21\u732e\u8fc7\u51e0\u4e2a PR\uff0c\u63d0\u4ea4\u8fc7\u51e0\u4e2a issue\uff0c\u76f4\u5230\u73b0\u5728\u8fd8\u6e05\u6670\u8bb0\u5f97\u51e0\u5e74\u524d\u7b2c\u4e00\u4e2a PR \u88ab merge \u65f6\u7684\u5174\u594b\uff0c\u4f53\u9a8c\u5230\u4e86\u53c2\u4e0e\u5f00\u6e90\u7684\u4e50\u8da3\u3002\u4f46\u662f\u53ea\u505c\u7559\u5728\u4e86 contributor \u9636\u6bb5\uff0c\u6ca1\u6709\u4e0b\u6587\u4e86\uff0c\u56e0\u4e3a\u7b14\u8005\u540e\u6765\u4e0d\u505a\u7814\u53d1\u4e86\uff0c",(0,l.kt)("strong",{parentName:"p"},"\u8ba4\u4e3a\u4e0d\u719f\u6089\u4ee3\u7801\u3001\u4e0d\u80fd\u4fee bug \u5c31\u6ca1\u6709\u8d21\u732e\u7684\u673a\u4f1a\u4e86\u3002")),(0,l.kt)("p",null,"\u8fd9\u91cc\u662f\u6709\u4e00\u4e2a\u8bef\u533a\u7684\uff0c\u5e76\u975e\u53ea\u6709\u8d21\u732e\u4ee3\u7801\u3001\u4fee\u590d bug \u624d\u662f\u4e3a\u9879\u76ee\u505a\u8d21\u732e\u3002\u6210\u4e3a\u8d21\u732e\u8005\u53ea\u80fd\u901a\u8fc7\u8d21\u732e\u4ee3\u7801\u7684\u65b9\u5f0f\u5417\uff1f",(0,l.kt)("strong",{parentName:"p"},"\u5982\u679c\u6211\u4e0d\u4f1a\u5199\u4ee3\u7801\uff0c\u5e76\u975e\u5f00\u53d1\u8005\uff0c\u600e\u6837\u624d\u80fd\u6210\u4e3a\u4e00\u4e2a\u5f00\u6e90\u9879\u76ee\u7684\u8d21\u732e\u8005\uff0c\u751a\u81f3\u664b\u5347\u4e3a committer \u5462\uff1f")),(0,l.kt)("p",null,"\u7b14\u8005\u68b3\u7406\u4e4b\u540e\uff0c\u53d1\u73b0\u6709\u975e\u5e38\u591a\u7684\u65b9\u5f0f\uff0c\u5728\u8fd9\u91cc\u5206\u4eab\u7ed9\u5927\u5bb6\uff0c\u65e0\u8bba\u662f\u4e0d\u662f\u5f00\u53d1\u8005\uff0c\u90fd\u53ef\u4ee5\u5b9e\u8df5\u3002\uff08\u7b14\u8005\u4e5f\u5728\u5b9e\u8df5\u7684\u8def\u4e0a\uff09"),(0,l.kt)("h2",{id:"\u975e\u4ee3\u7801\u65b9\u5f0f"},"\u975e\u4ee3\u7801\u65b9\u5f0f"),(0,l.kt)("h3",{id:"\u5199\u6587\u7ae0"},"\u5199\u6587\u7ae0"),(0,l.kt)("p",null,"\u5199\u6587\u7ae0\u662f\u4e00\u4e2a\u5f88\u5bb9\u6613\u88ab\u5ffd\u7565\u7684\u65b9\u5f0f\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u6587\u7ae0\u6765\u5ba3\u4f20\u3001\u5e03\u9053\u67d0\u4e2a\u6280\u672f\u3002\u6bd4\u5982\u64b0\u5199\u67d0\u4e2a\u9879\u76ee\u7684\u4e0a\u624b\u6307\u5357\u3001\u8e29\u5751\u8bb0\u5f55\u3001\u67b6\u6784\u8bbe\u8ba1\u5206\u6790\u3001\u5b9e\u73b0\u539f\u7406\u7b49\u7b49\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u5f00\u59cb\u5199\u6587\u7ae0\u6bd4\u8f83\u56f0\u96be\uff0c\u53ef\u4ee5\u5148\u4ece\u7ffb\u8bd1\u505a\u8d77\uff0c\u65e0\u8bba\u662f\u4e2d\u8bd1\u82f1\u8fd8\u662f\u82f1\u8bd1\u4e2d\uff0c\u53ea\u8981\u662f\u5bf9\u8fd9\u4e2a\u9879\u76ee\u6709\u610f\u4e49\u7684\u5185\u5bb9\uff0c\u90fd\u662f\u5728\u4e3a\u5b83\u505a\u8d21\u732e\u3002"),(0,l.kt)("p",null,"\u4ea6\u6216\u662f\u4f60\u89c2\u770b\u4e86\u522b\u4eba\u7684\u6280\u672f\u5b9e\u6218\u5206\u4eab\uff0c\u628a\u522b\u4eba\u7684\u5206\u4eab\u6574\u7406\u6210\u6587\u5b57\u7248\uff0c\u5206\u4eab\u5230\u793e\u533a\u4e2d\uff0c\u5e2e\u52a9\u66f4\u591a\u4eba\u4e86\u89e3\u9879\u76ee\u3002"),(0,l.kt)("p",null,"\u7b14\u8005\u8fd8\u6ce8\u610f\u5230\uff0c\u6709\u4e9b\u8d21\u732e\u8005\u628a\u6587\u7ae0\u6574\u7406\u6210\u4e00\u672c\u5f00\u53d1\u5c0f\u518c\u3001\u6216\u8005\u4e00\u672c\u4e13\u4e1a\u4e66\u7c4d\uff0c\u7cfb\u7edf\u5730\u5411\u5176\u4ed6\u4eba\u4ecb\u7ecd\u67d0\u9879\u6280\u672f\u3002"),(0,l.kt)("h3",{id:"\u5236\u4f5c\u89c6\u9891"},"\u5236\u4f5c\u89c6\u9891"),(0,l.kt)("p",null,"\u5236\u4f5c\u89c6\u9891\u4e5f\u662f\u4e00\u4e2a\u4e0d\u9519\u7684\u65b9\u5f0f\u3002\u6211\u4eec\u53ef\u4ee5\u628a\u6587\u5b57\u7684\u65b9\u5f0f\u8f6c\u6362\u6210\u89c6\u9891\uff0c\u7528\u89c6\u9891\u7684\u65b9\u5f0f\u4ecb\u7ecd\u67d0\u4e2a\u5f00\u6e90\u9879\u76ee\uff0c\u5f55\u5236\u4e0a\u624b\u6307\u5357\u3001\u8e29\u5751\u8bb0\u5f55\u3001\u67b6\u6784\u8bbe\u8ba1\u5206\u6790\u3001\u5b9e\u73b0\u539f\u7406\u7b49\u7b49\u3002\u7b14\u8005\u4e5f\u770b\u5230\u4e86\u5f88\u591a\u9879\u76ee\u91c7\u7528\u89c6\u9891\u7684\u65b9\u5f0f\u4ecb\u7ecd\uff0c\u89c6\u9891\u53ef\u80fd\u662f\u52a8\u753b\u7684\u5f62\u5f0f\uff0c\u4e5f\u53ef\u80fd\u662f\u771f\u4eba\u8bb2\u89e3\uff0c\u65e0\u8bba\u54ea\u4e00\u79cd\uff0c\u89c6\u9891\u5728\u5448\u73b0\u4e0a\u4f1a\u6bd4\u6587\u5b57\u66f4\u751f\u52a8\u6709\u8da3\u4e00\u4e9b\u3002"),(0,l.kt)("p",null,"\u4e0d\u8fc7\u524d\u671f\u526a\u8f91\u89c6\u9891\u5bf9\u4e8e\u65b0\u624b\u6765\u8bf4\u5de5\u4f5c\u91cf\u53ef\u80fd\u6bd4\u8f83\u5927\u3002"),(0,l.kt)("h3",{id:"\u5927\u4f1a\u5206\u4eab"},"\u5927\u4f1a\u5206\u4eab"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u4e0d\u5bb3\u7f9e\u3001\u559c\u6b22\u5916\u5206\u4eab\uff0c\u90a3\u4e48\u53bb\u6280\u672f\u5927\u4f1a\u4e0a\u5206\u4eab\u3001\u5e03\u9053\u5f00\u6e90\u9879\u76ee\u4e5f\u662f\u4e00\u4e2a\u5f88\u4e0d\u9519\u7684\u9009\u62e9\u3002\u8fd9\u5bf9\u4e86\u89e3\u9879\u76ee\u7684\u65b0\u624b\u53ef\u80fd\u6709\u96be\u5ea6\uff0c\u5047\u4ee5\u65f6\u65e5\uff0c\u5f53\u6211\u4eec\u4ece\u5c0f\u767d\u8fdb\u9636\u6210\u719f\u6089\u8005\u65f6\uff0c\u53bb\u5206\u4eab\u5c31\u6bd4\u8f83\u5bb9\u6613\u8fbe\u6210\u4e86\u3002\u5206\u4eab\u53ef\u4ee5\u953b\u70bc\u81ea\u5df1\u7684\u8868\u8fbe\u80fd\u529b\u3001\u903b\u8f91\u601d\u7ef4\u80fd\u529b\uff0c\u8fd8\u53ef\u4ee5\u953b\u70bc\u81ea\u5df1\u7684\u80c6\u91cf~\uff08\u4e5f\u53ef\u80fd\u6536\u83b7\u5230\u6a44\u6984\u679d\uff09"),(0,l.kt)("h3",{id:"\u5b8c\u5584\u6587\u6863"},"\u5b8c\u5584\u6587\u6863"),(0,l.kt)("p",null,"\u5927\u591a\u6570\u5f00\u53d1\u8005\u5e76\u4e0d\u559c\u6b22\u5199\u6587\u6863\uff0c\u4f46\u662f\u6587\u6863\u662f\u5176\u4ed6\u4eba\u4e86\u89e3\u9879\u76ee\u3001\u4e0a\u624b\u9879\u76ee\u7684\u91cd\u8981\u9014\u5f84\u3002\u7b14\u8005\u66fe\u7ecf\u7684\u5f00\u53d1\u7ecf\u5386\u4e2d\uff0c\u5982\u679c\u9047\u5230\u4e00\u4efd\u6e05\u6670\u8be6\u7ec6\u7684\u6587\u6863\uff0c\u611f\u89c9\u662f\u975e\u5e38\u5e78\u8fd0\u7684\u4e8b\u60c5\uff0c\u4e0a\u624b\u9879\u76ee\u4f1a\u5feb\u5f88\u591a\u3002\u6587\u6863\u5185\u5bb9\u4e0d\u9650\u4e8e\u542f\u52a8\u8bf4\u660e\uff0c\u5982\u679c\u6709\u67b6\u6784\u8bbe\u8ba1\u3001\u539f\u7406\u4ecb\u7ecd\u518d\u597d\u4e0d\u8fc7\u4e86\u3002"),(0,l.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u4e3a\u611f\u5174\u8da3\u7684\u5f00\u6e90\u9879\u76ee\u63d0\u4ea4\u6587\u6863\uff0c\u751a\u81f3\u662f\u4fee\u590d\u6587\u6863\uff0c\u6bd4\u5982\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4ee3\u7801\u66f4\u65b0\uff0c\u6587\u6863\u6ca1\u6709\u540c\u6b65\u66f4\u65b0"),(0,l.kt)("li",{parentName:"ul"},"\u4fee\u590d\u9519\u8bef\u7684\u4e0b\u8f7d\u94fe\u63a5\u3001\u6587\u6863\u94fe\u63a5"),(0,l.kt)("li",{parentName:"ul"},"\u4f18\u5316\u6587\u6863\uff0c\u4fee\u6539\u6587\u6863\u63cf\u8ff0\uff0c\u4f7f\u5176\u66f4\u6613\u7406\u89e3"),(0,l.kt)("li",{parentName:"ul"},"\u63d0\u4ea4\u67b6\u6784\u8bbe\u8ba1\u3001\u539f\u7406\u4ecb\u7ecd\u6587\u6863")),(0,l.kt)("h3",{id:"\u5efa\u8bbe\u672c\u5730\u793e\u533a\uff0c\u7ec4\u7ec7\u53c2\u4e0e\u6d3b\u52a8"},"\u5efa\u8bbe\u672c\u5730\u793e\u533a\uff0c\u7ec4\u7ec7/\u53c2\u4e0e\u6d3b\u52a8"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u5bf9\u4e00\u4e2a\u9879\u76ee\u5f88\u611f\u5174\u8da3\uff0c\u53c2\u4e0e\u5230\u672c\u5730\u7684\u793e\u533a\u4e2d\uff0c\u548c\u5fd7\u540c\u9053\u5408\u7684\u4eba\u4ea4\u6d41\u3001\u7ec4\u7ec7\u5f53\u5730\u7684\u6d3b\u52a8\uff0c\u4e3a\u9879\u76ee\u53d1\u5c55\u505a\u8d21\u732e\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u6ca1\u6709\u672c\u5730\u793e\u533a\uff0c\u4f60\u53ef\u4ee5\u4f5c\u4e3a\u53d1\u8d77\u4eba\u5efa\u8bbe\u672c\u5730\u793e\u533a\u3002\u7b14\u8005\u4e86\u89e3\u5230 Apache \u8f6f\u4ef6\u57fa\u91d1\u4f1a\u9f13\u52b1\u5927\u5bb6\u5efa\u8bbe Local Community\uff0c\u6bd4\u5982 ALC Beijing\u3002\u50cf\u5176\u4ed6\u7684\u6280\u672f\u793e\u533a\uff0c\u5982\uff1aKubeSphere\u3001\u4e91\u539f\u751f\u793e\u533a\u90fd\u5728\u79ef\u6781\u53d1\u5c55\u672c\u5730\u793e\u533a\u3002"),(0,l.kt)("h3",{id:"\u79ef\u6781\u53c2\u4e0e\u793e\u533a\u8ba8\u8bba"},"\u79ef\u6781\u53c2\u4e0e\u793e\u533a\u8ba8\u8bba"),(0,l.kt)("h4",{id:"\u6d3b\u8dc3\u5728-apache-mail-list"},"\u6d3b\u8dc3\u5728 Apache mail list"),(0,l.kt)("p",null,"Apache \u6587\u5316\u9f13\u52b1\u5927\u5bb6\u901a\u8fc7\u90ae\u4ef6\u5217\u8868\u7684\u5f62\u5f0f\u8ba8\u8bba\u95ee\u9898\u3001\u505a\u51b3\u7b56\uff0c\u6240\u6709\u7684\u4e8b\u9879\u90fd\u8981\u6709\u6240\u8bb0\u5f55\u3002\u6bcf\u4e00\u4e2a Apache \u9879\u76ee\u90fd\u6709\u81ea\u5df1\u4e13\u5c5e\u7684\u90ae\u4ef6\u5217\u8868\uff0c\u5982\u679c\u5bf9\u9879\u76ee\u6709\u4ec0\u4e48\u60f3\u6cd5\uff0c\u793e\u533a\u975e\u5e38\u9f13\u52b1\u5927\u5bb6\u5230\u90ae\u4ef6\u5217\u8868\u8ba8\u8bba\u3002"),(0,l.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e3a\u9879\u76ee\u53d1\u7248\u6295\u7968"),(0,l.kt)("li",{parentName:"ul"},"\u56de\u590d\u5176\u4ed6\u4eba\u53d1\u8d77\u7684\u8ba8\u8bba\uff0c\u8868\u8fbe\u81ea\u5df1\u7684\u89c2\u70b9"),(0,l.kt)("li",{parentName:"ul"},"\u53d1\u8d77\u4e00\u6b21\u8ba8\u8bba")),(0,l.kt)("p",null,"\u4e3a\u4ec0\u4e48\u662f\u90ae\u4ef6\u5217\u8868\uff1f"),(0,l.kt)("p",null,"\u90ae\u4ef6\u5217\u8868\u7ed9\u6211\u7684\u611f\u89c9\u5f88\u53e4\u8001\uff0c\u7b14\u8005\u53bb\u4e86\u89e3\u4e86 Apache \u8f6f\u4ef6\u57fa\u91d1\u4f1a\u53d1\u5c55\u5386\u53f2\uff0c\u6700\u521d\u57fa\u91d1\u4f1a\u7684\u521b\u59cb\u4eba\u662f\u901a\u8fc7\u90ae\u4ef6\u5217\u8868\u7684\u65b9\u5f0f\u8ba8\u8bba\u95ee\u9898\uff0c\u96be\u9053\u662f\u53e4\u8001\u6587\u5316\u7684\u4fdd\u7559\uff1f"),(0,l.kt)("p",null,"\u867d\u7136\u4e92\u8054\u7f51\u53d1\u5c55\u8fc5\u901f\uff0c\u4f46\u662f\u4e16\u754c\u4e0a\u4ecd\u6709\u63a5\u6536\u56fe\u7247\u56f0\u96be\u3001\u4f7f\u7528\u5176\u4ed6\u8f6f\u4ef6\u7684\u56f0\u96be\uff0c\u5c3d\u7ba1\u662f\u6211\u4eec\u719f\u77e5\u7684 wechat\u3001Twitter \u4f7f\u7528\u8005\u4e5f\u6ca1\u6709\u8986\u76d6\u5168\u7403\uff0c\u4f46\u662f\u4f7f\u7528\u90ae\u4ef6\u80fd\u591f\u4ee5\u6700\u5c0f\u95e8\u69db\u7684\u65b9\u5f0f\u4e0e\u4ed6\u4eba\u5efa\u7acb\u8054\u7cfb\uff0c\u4fdd\u969c\u5168\u4e16\u754c\u5404\u5730\u7684\u4eba\u90fd\u80fd\u53c2\u52a0\u5230\u793e\u533a\u8ba8\u8bba\u4e2d\uff0c\u8fd9\u5c31\u662f Apache \u8f6f\u4ef6\u57fa\u91d1\u4f1a\u4fdd\u7559\u90ae\u4ef6\u5217\u8868\u65b9\u5f0f\u7684\u521d\u8877\u3002"),(0,l.kt)("h4",{id:"\u6d3b\u8dc3\u5728-github"},"\u6d3b\u8dc3\u5728 Github"),(0,l.kt)("p",null,"Github \u662f\u5f00\u53d1\u8005\u6700\u5e38\u901b\u7684\u7f51\u7ad9\u4e86\uff0c\u5927\u591a\u6570\u7684\u5f00\u6e90\u9879\u76ee\u90fd\u6258\u7ba1\u5728 Github \u4e0a\u3002\u6211\u53ef\u4ee5\u5728\u611f\u5174\u8da3\u7684\u9879\u76ee\u4e0b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u63d0 issue \u8bf4\u51fa\u6211\u7684\u60f3\u6cd5\uff0c\u9879\u76ee\u7684\u6539\u8fdb\u65b9\u5411"),(0,l.kt)("li",{parentName:"ul"},"\u63d0\u4ea4\u4e00\u4e2a bug report"),(0,l.kt)("li",{parentName:"ul"},"review \u5176\u4ed6\u5c0f\u4f19\u4f34\u63d0\u4ea4\u7684 pr")),(0,l.kt)("p",null,"\u8fd9\u4e9b\u90fd\u662f\u4e3a\u5f00\u6e90\u9879\u76ee\u505a\u8d21\u732e\u7684\u65b9\u5f0f\u3002"),(0,l.kt)("h4",{id:"apache-mail-list-vs-github"},"Apache mail list vs Github"),(0,l.kt)("p",null,"\u6709 Github \u4e3a\u4ec0\u4e48\u8fd8\u8981\u4f7f\u7528\u90ae\u4ef6\u5217\u8868\uff1f\u4ee3\u7801\u6258\u7ba1\u5728 Github \uff0c\u770b\u8d77\u6765\u793e\u533a\u7684\u534f\u4f5c\u5de5\u4f5c\u597d\u50cf\u90fd\u662f\u5728 Github \u4e0a\u5b8c\u6210\u7684\u5440\uff1f"),(0,l.kt)("p",null,"\u5728\u90ae\u4ef6\u5217\u8868\u91cc\u8ba8\u8bba\u95ee\u9898\uff0c\u5982\u679c\u5927\u5bb6\u6ca1\u6709\u63d0\u51fa\u53cd\u5bf9\u610f\u89c1\uff0c\u53ef\u4ee5\u9ed8\u8bb8\u4e3a\u5927\u5bb6\u901a\u8fc7\u63d0\u8bae\u3002\u5982\u679c\u6709\u53cd\u5bf9\u610f\u89c1\uff0c\u5927\u5bb6\u4f1a\u5145\u5206\u8ba8\u8bba\uff0c\u6700\u7ec8\u8fbe\u6210\u4e00\u81f4\u6216\u6401\u7f6e\u3002"),(0,l.kt)("p",null,"\u4f7f\u7528\u90ae\u4ef6\u5217\u8868\u7684\u65b9\u5f0f\u8ba8\u8bba\uff0c\u4e5f\u662f\u5bf9 Apache \u6587\u5316\u7684\u8ba4\u540c\u3002\u9075\u5faa Apache \u89c4\u5219\u7684\u9879\u76ee\uff0c\u90ae\u4ef6\u5217\u8868\u662f\u662f\u793e\u533a\u7684\u9996\u8981\u9635\u5730\uff0cGithub \u662f\u4e00\u4e2a\u65b9\u4fbf\u7684\u534f\u540c\u5de5\u5177\u3002"),(0,l.kt)("h2",{id:"\u4ee3\u7801\u65b9\u5f0f"},"\u4ee3\u7801\u65b9\u5f0f"),(0,l.kt)("h3",{id:"\u8d21\u732e\u529f\u80fd\u3001\u4fee\u590d-bug"},"\u8d21\u732e\u529f\u80fd\u3001\u4fee\u590d bug"),(0,l.kt)("p",null,"\u5f53\u7136\u4e86\uff0c\u5f00\u6e90\u9879\u76ee\u80af\u5b9a\u662f\u79bb\u4e0d\u5f00\u4ee3\u7801\u7684\u3002\u5982\u679c\u5f00\u6e90\u9879\u76ee\u7684\u6280\u672f\u6808\u4f60\u5f88\u719f\u6089\uff0c\u5f88\u5feb\u5c31\u80fd\u4e0a\u624b\u8d21\u732e\u4ee3\u7801\uff0c\u548c\u793e\u533a\u5c0f\u4f19\u4f34\u4eec\u4e00\u8d77\u5b8c\u5584\u76f8\u5173\u529f\u80fd\u3001\u4fee\u590d bug\uff0c\u6301\u7eed\u8d21\u732e\uff0c\u6210\u4e3a\u9879\u76ee contributor\uff0c\u8fdb\u4e00\u6b65\u63d0\u540d\u6210\u4e3a committer\u3001PMC \u662f\u5f88\u5bb9\u6613\u7684\u4e8b\u60c5\u3002\u5927\u591a\u6570\u7684\u8d21\u732e\u8005\u90fd\u662f\u901a\u8fc7\u63d0\u4ea4\u4ee3\u7801\u7684\u65b9\u5f0f\u6210\u4e3a committer \u7684\uff0c\u4f46\u662f\u4f5c\u4e3a\u50cf\u7b14\u8005\u8fd9\u6837\u4e0d\u719f\u6089\u4ee3\u7801\u7684\u5c0f\u4f19\u4f34\uff0c\u8fd9\u4e00\u6761\u5c31\u4e0d\u9002\u5408\u4e86\u3002"),(0,l.kt)("p",null,"\u8fd9\u91cc\u9700\u8981\u6ce8\u610f\u4e00\u70b9\uff0ccommitter \u662f\u5bf9\u8d21\u732e\u8005\u8fc7\u5f80\u8d21\u732e\u7684\u80af\u5b9a\uff0c\u4e0d\u4f1a\u56e0\u4e3a\u672a\u6765\u4e0d\u518d\u8d21\u732e\u800c\u53bb\u9664 committer \u8eab\u4efd\uff0c\u4e5f\u4e0d\u4f1a\u56e0\u4e3a\u662f committer \u800c\u6709\u66f4\u5927\u7684\u6743\u5229\uff0c\u793e\u533a\u4e2d\u4eba\u4eba\u5e73\u7b49\u3002"),(0,l.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,l.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u4e86\u5f88\u591a\u6210\u4e3a\u5f00\u6e90\u9879\u8d21\u732e\u7684\u9014\u5f84\uff0c\u5982\u679c\u4f60\u6709\u5f88\u611f\u5174\u8da3\u7684\u5f00\u6e90\u9879\u76ee\u5374\u4e0d\u719f\u6089\u4ee3\u7801\uff0c\u53c8\u60f3\u53c2\u4e0e\u5230\u5f00\u6e90\u793e\u533a\u4e2d\uff0c\u5199\u6587\u7ae0\u3001\u505a\u89c6\u9891\u3001\u5bf9\u5916\u5206\u4eab\u3001\u5efa\u7acb\u672c\u5730\u793e\u533a\u3001\u79ef\u6781\u53c2\u4e0e\u793e\u533a\u8ba8\u8bba\u90fd\u662f\u5f88\u4e0d\u9519\u65b9\u5f0f\u54e6\uff0c\u6b22\u8fce\u5b9e\u8df5\u3002"))}h.isMDXComponent=!0}}]);