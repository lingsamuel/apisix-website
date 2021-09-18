"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[89577],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),h=r,d=m["".concat(o,".").concat(h)]||m[h]||s[h]||l;return n?a.createElement(d,p(p({ref:t},u),{},{components:n})):a.createElement(d,p({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var c=2;c<l;c++)p[c]=n[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},49031:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return o},assets:function(){return c},toc:function(){return u},default:function(){return m}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),p={title:"Apache APISIX 2.8 \u6b63\u5f0f\u53d1\u5e03\uff0c\u5e26\u6765\u66f4\u591a\u65b0\u529f\u80fd\uff01",author:"spacewander",authorURL:"https://github.com/spacewander",authorImageURL:"https://avatars.githubusercontent.com/u/4161644?v=4",tags:["news"]},i=void 0,o={permalink:"/zh/blog/2021/07/28/release-apache-apisix-2.8",source:"@site/blog/2021-07-28-release-apache-apisix-2.8.md",title:"Apache APISIX 2.8 \u6b63\u5f0f\u53d1\u5e03\uff0c\u5e26\u6765\u66f4\u591a\u65b0\u529f\u80fd\uff01",description:"@spacewander, Core developer of Apache APISIX from Shenzhen Zhiliu Technology Co.",date:"2021-07-28T00:00:00.000Z",formattedDate:"2021\u5e747\u670828\u65e5",tags:[{label:"news",permalink:"/zh/blog/tags/news"}],readingTime:1.48,truncated:!0,authors:[{name:"spacewander",url:"https://github.com/spacewander",imageURL:"https://avatars.githubusercontent.com/u/4161644?v=4"}],prevItem:{title:"Release Apache APISIX 2.8.0",permalink:"/zh/blog/2021/07/28/release-apache-apisix-2.8-en"},nextItem:{title:"\u63d2\u4ef6\u7f16\u6392\u5728 Apache APISIX \u4e2d\u7684\u5e94\u7528\u4e0e\u5b9e\u8df5",permalink:"/zh/blog/2021/07/27/use-of-plugin-orchestration-in-Apache-APISIX"}},c={authorsImageUrls:[void 0]},u=[{value:"Release Notes",id:"release-notes",children:[{value:"\u65b0\u529f\u80fd\uff1a\u72ec\u7acb\u7684 Keepalive \u8fde\u63a5\u6c60",id:"\u65b0\u529f\u80fd\uff1a\u72ec\u7acb\u7684-keepalive-\u8fde\u63a5\u6c60",children:[]},{value:"\u65b0\u4f53\u9a8c\uff1astream \u4ee3\u7406\u529f\u80fd\u589e\u5f3a",id:"\u65b0\u4f53\u9a8c\uff1astream-\u4ee3\u7406\u529f\u80fd\u589e\u5f3a",children:[]},{value:"\u65b0\u63d2\u4ef6\uff1agzip \u63d2\u4ef6",id:"\u65b0\u63d2\u4ef6\uff1agzip-\u63d2\u4ef6",children:[]},{value:"\u65b0\u63d2\u4ef6\uff1aua-restriction",id:"\u65b0\u63d2\u4ef6\uff1aua-restriction",children:[]},{value:"\u65b0\u73a9\u6cd5\uff1a\u652f\u6301\u901a\u8fc7\u63d2\u4ef6\u7684\u65b9\u5f0f\u6267\u884c\u7279\u5b9a\u903b\u8f91",id:"\u65b0\u73a9\u6cd5\uff1a\u652f\u6301\u901a\u8fc7\u63d2\u4ef6\u7684\u65b9\u5f0f\u6267\u884c\u7279\u5b9a\u903b\u8f91",children:[]},{value:"\u65b0\u73a9\u6cd5\uff1a\u652f\u6301\u81ea\u5b9a\u4e49 balancer",id:"\u65b0\u73a9\u6cd5\uff1a\u652f\u6301\u81ea\u5b9a\u4e49-balancer",children:[]}]},{value:"\u4e0b\u8f7d",id:"\u4e0b\u8f7d",children:[]}],s={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/spacewander"},"@spacewander"),", Core developer of Apache APISIX from ",(0,l.kt)("a",{parentName:"p",href:"https://www.apiseven.com/"},"Shenzhen Zhiliu Technology Co."))),(0,l.kt)("p",null,"Apache APISIX 2.8 \u7248\u672c\u6b63\u5f0f\u53d1\u5e03\uff01\ud83c\udf89 \u8fd9\u4e2a\u7248\u672c\u6709 30+ \u5f00\u53d1\u8005\u53c2\u4e0e\uff0c\u5171\u63d0\u4ea4\u4e86 100+ PR\uff0c\u652f\u6301\u4e86 ",(0,l.kt)("strong",{parentName:"p"},"1 \u4e2a\u65b0\u529f\u80fd\u30011 \u4e2a\u65b0\u4f53\u9a8c\u30012 \u4e2a\u65b0\u63d2\u4ef6\u30012 \u4e2a\u65b0\u73a9\u6cd5"),"\uff0c\u5feb\u53bb\u9605\u8bfb\u4e86\u89e3 2.8 \u7248\u672c\u7684\u65b0\u7279\u6027\u5427\uff01"),(0,l.kt)("p",null,"\ud83d\udc47\ud83d\udc47\ud83d\udc47"),(0,l.kt)("h2",{id:"release-notes"},"Release Notes"),(0,l.kt)("h3",{id:"\u65b0\u529f\u80fd\uff1a\u72ec\u7acb\u7684-keepalive-\u8fde\u63a5\u6c60"},"\u65b0\u529f\u80fd\uff1a\u72ec\u7acb\u7684 Keepalive \u8fde\u63a5\u6c60"),(0,l.kt)("p",null,"\u4ece",(0,l.kt)("a",{parentName:"p",href:"https://apisix.apache.org/blog/2021/06/29/release-apache-apisix-2.7"},"2.7 \u7248\u672c"),"\u5f00\u59cb\u6dfb\u52a0 Apache APISIX \u81ea\u5df1\u7684\u8865\u4e01\u548c Nginx C \u6a21\u5757\uff0c\u589e\u5f3a\u539f\u751f Nginx \u7684\u529f\u80fd\uff0c\u5e0c\u671b\u80fd\u591f\u52a8\u6001\u8bbe\u7f6e\u8d8a\u6765\u8d8a\u591a\u7684 Nginx \u914d\u7f6e\u3002\u5728\u53d1\u5e03\u7684\u6700\u65b0\u7248\u672c\u4e2d\uff0cApache APISIX \u5df2\u7ecf\u652f\u6301\u5728 Upstream \u7ea7\u522b\u4e0a\u914d\u7f6e\u72ec\u7acb\u7684 Keepalive \u8fde\u63a5\u6c60\u3002"),(0,l.kt)("p",null,"\u76ee\u524d\u5305\u542b\u4e86\u4ee5\u4e0b\u529f\u80fd\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u52a8\u6001\u8bbe\u7f6e mTLS"),(0,l.kt)("li",{parentName:"ul"},"\u52a8\u6001\u8bbe\u7f6e client_max_body_size"),(0,l.kt)("li",{parentName:"ul"},"Upstream \u7684 keepalive\uff082.8 \u65b0\u529f\u80fd\uff09"),(0,l.kt)("li",{parentName:"ul"},"gzip \uff082.8 \u65b0\u63d2\u4ef6\uff09")),(0,l.kt)("p",null,"\u5728 Apache APISIX \u540e\u7eed\u7248\u672c\u4e2d\uff0c\u6211\u4eec\u4e5f\u4f1a\u9646\u7eed\u5141\u8bb8\u4e0b\u9762\u7684 Nginx \u914d\u7f6e\u80fd\u591f\u88ab\u52a8\u6001\u8bbe\u7f6e\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"real_ip"),(0,l.kt)("li",{parentName:"ul"},"proxy_max_temp_file_size"),(0,l.kt)("li",{parentName:"ul"},"\u2026\u2026")),(0,l.kt)("p",null,"Upstream \u7684\u914d\u7f6e\u4e3e\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n    "id": "backend",\n    "nodes": {"host:80": 100},\n    "type":"roundrobin",\n    "keepalive_pool": {\n        "size": 4,\n        "idle_timeout": 8,\n        "requests": 16\n    }\n}\n')),(0,l.kt)("h3",{id:"\u65b0\u4f53\u9a8c\uff1astream-\u4ee3\u7406\u529f\u80fd\u589e\u5f3a"},"\u65b0\u4f53\u9a8c\uff1astream \u4ee3\u7406\u529f\u80fd\u589e\u5f3a"),(0,l.kt)("p",null,"\u5728 2.8 \u7248\u672c\u4e2d\uff0c\u628a ",(0,l.kt)("a",{parentName:"p",href:"http://apisix.apache.org/docs/apisix/plugins/ip-restriction/"},"ip-restriction")," \u548c ",(0,l.kt)("a",{parentName:"p",href:"http://apisix.apache.org/docs/apisix/plugins/limit-conn/"},"limit-conn")," \u4e24\u4e2a\u63d2\u4ef6\u4ece HTTP \u90e8\u5206\u7684\u79fb\u690d\u5230\u4e86 stream \u90e8\u5206\uff0c\u8fd9\u4e48\u505a\u7684\u597d\u5904\u662f\u4e30\u5bcc\u7f51\u5173\u5728 stream \u4ee3\u7406\u7684\u529f\u80fd\uff0c\u589e\u52a0\u5bf9\u4e0a\u6e38\u670d\u52a1\u7684\u5b89\u5168\u6027\u4fdd\u969c\u3002"),(0,l.kt)("p",null,"ip-restriction \u53ef\u4ee5\u7528\u6765\u505a IP \u9ed1\u767d\u540d\u5355\u8fc7\u6ee4\uff0c\u4fdd\u8bc1\u53ea\u6709\u6765\u81ea\u7279\u5b9a IP \u7684\u8bf7\u6c42\u624d\u80fd\u8bbf\u95ee\u5230\u540e\u7aef\u670d\u52a1\u3002"),(0,l.kt)("p",null,"limit-conn \u53ef\u4ee5\u7528\u6765\u9650\u5236\u7279\u5b9a\u8def\u7531\u4e0a\u540c\u65f6\u5b58\u5728\u7684\u8fde\u63a5\u4e2a\u6570\uff0c\u9650\u5236\u5ba2\u6237\u7aef\u7684\u5e76\u53d1\u8bbf\u95ee\u91cf\u3002"),(0,l.kt)("h3",{id:"\u65b0\u63d2\u4ef6\uff1agzip-\u63d2\u4ef6"},"\u65b0\u63d2\u4ef6\uff1agzip \u63d2\u4ef6"),(0,l.kt)("p",null,"2.8 \u7248\u672c\u4e2d\u65b0\u589e\u4e86 gzip \u63d2\u4ef6\uff0c\u4f7f\u7528 gzip \u63d2\u4ef6\u53ef\u4ee5",(0,l.kt)("strong",{parentName:"p"},"\u52a8\u6001\u8bbe\u7f6e\u8def\u7531\u7ea7\u522b\u7684 gzip \u53c2\u6570"),"\u3002"),(0,l.kt)("p",null,"gzip \u914d\u7f6e\u4e3e\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n    "plugins": {\n        "gzip": {\n            "min_length": 20,\n            "http_version": 1.1,\n            "buffers": {\n                "number": 32,\n                "size": 4096\n            },\n            "types": [\n                "text/html"\n            ],\n            "comp_level": 1,\n            "vary": false\n        }\n    }\n}\n')),(0,l.kt)("h3",{id:"\u65b0\u63d2\u4ef6\uff1aua-restriction"},"\u65b0\u63d2\u4ef6\uff1aua-restriction"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ua-restriction")," \u63d2\u4ef6\u7528\u4e8e\u6821\u9a8c User-Agent \u662f\u5426\u5904\u4e8e\u9ed1\u767d\u540d\u5355\u4e2d\uff0c\u9ed1\u767d\u540d\u5355\u662f\u4e00\u4e2a\u975e\u5e38\u5e38\u89c1\u7684\u9700\u6c42\uff0c\u73b0\u5728\u53ef\u4ee5\u901a\u8fc7\u63d2\u4ef6\u7684\u65b9\u5f0f\u542f\u7528\u4e86\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ua-restriction")," \u914d\u7f6e\u4e3e\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n    "plugins": {\n        "ua-restriction": {\n            "denylist": [\n                "my-bot1",\n                "(Baiduspider)/(\\\\d+)\\\\.(\\\\d+)"\n            ]\n        }\n    }\n}\n')),(0,l.kt)("h3",{id:"\u65b0\u73a9\u6cd5\uff1a\u652f\u6301\u901a\u8fc7\u63d2\u4ef6\u7684\u65b9\u5f0f\u6267\u884c\u7279\u5b9a\u903b\u8f91"},"\u65b0\u73a9\u6cd5\uff1a\u652f\u6301\u901a\u8fc7\u63d2\u4ef6\u7684\u65b9\u5f0f\u6267\u884c\u7279\u5b9a\u903b\u8f91"),(0,l.kt)("p",null,"\u5f97\u76ca\u4e8e Apache APISIX \u67b6\u6784\uff0c\u8bb8\u591a\u529f\u80fd\u90fd\u662f\u901a\u8fc7\u63d2\u4ef6\u7684\u65b9\u5f0f\u5b9e\u73b0\u7684\u3002\u4ece 2.8 \u7248\u672c\u5f00\u59cb\uff0c\u63d2\u4ef6\u53c8\u6dfb\u52a0\u4e86\u65b0\u73a9\u6cd5\u3002",(0,l.kt)("strong",{parentName:"p"},"\u73b0\u5728 Apache APISIX \u652f\u6301\u5728\u9009\u62e9\u4e0a\u6e38\u8282\u70b9\u4e4b\u540e\uff0c\u901a\u8fc7\u63d2\u4ef6\u7684\u65b9\u5f0f\u6267\u884c\u7279\u5b9a\u903b\u8f91\u3002"),"  "),(0,l.kt)("p",null,"\u53ea\u9700\u8981\u5728\u63d2\u4ef6\u91cc\u5b9a\u4e49\u4e0b\u9762\u7684\u65b9\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Lua"},'function _M.balancer(conf, ctx)\n    core.log.notice("IP: ", ctx.balancer_ip, ", Port: ", ctx.balancer_port)\nend\n')),(0,l.kt)("p",null,"\u5728\u8fd9\u4e2a\u793a\u4f8b\u91cc\uff0c\u65e5\u5fd7\u4f1a\u8f93\u51fa\u4e0a\u6e38\u7684 IP \u548c Port\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4ec0\u4e48\u573a\u666f\u4e0b\u4f1a\u8fd0\u884c\u4e0a\u8ff0\u65b9\u6cd5\uff1f")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u9009\u62e9\u4e0a\u6e38\u8282\u70b9\u4e4b\u540e\uff0c\u8bbf\u95ee\u4e0a\u6e38\u4e4b\u524d"),(0,l.kt)("li",{parentName:"ol"},"\u6bcf\u6b21\u91cd\u8bd5\u4e4b\u524d")),(0,l.kt)("p",null,"\u51fa\u4e8e\u6027\u80fd\u8003\u8651\uff0c\u4e0a\u8ff0\u65b9\u6cd5\u9996\u6b21\u8fd0\u884c\u5728 OpenResty \u7684 access \u9636\u6bb5\uff08\u5b9e\u9645\u4e0a APISIX \u5728 access \u9636\u6bb5\u5c31\u9009\u597d\u4e86\u4e0a\u6e38\u8282\u70b9\uff09\uff0c\u8be5\u65b9\u6cd5\u5e76\u4e0d\u4e0e OpenResty \u7684\u540c\u540d\u9636\u6bb5\u91cd\u5408\u3002"),(0,l.kt)("h3",{id:"\u65b0\u73a9\u6cd5\uff1a\u652f\u6301\u81ea\u5b9a\u4e49-balancer"},"\u65b0\u73a9\u6cd5\uff1a\u652f\u6301\u81ea\u5b9a\u4e49 balancer"),(0,l.kt)("p",null,"\u4ece 2.8 \u7248\u672c\u5f00\u59cb\uff0c\u7528\u6237\u53ef\u4ee5\u81ea\u5b9a\u4e49 balancer\u3002",(0,l.kt)("strong",{parentName:"p"},"\u8fd9\u91cc\u7684 balancer\uff0c\u662f\u6307\u6700\u5c11\u8fde\u63a5\u6570\u3001\u8f6e\u8be2\u3001\u4e00\u81f4\u6027\u54c8\u5e0c\u7b49\u8d1f\u8f7d\u5747\u8861\u5668\u3002")),(0,l.kt)("p",null,"\u867d\u7136 Apache APISIX \u5df2\u7ecf\u63d0\u4f9b\u4e86\u4e30\u5bcc\u7684 balancer\uff0c\u4f46\u662f\u7528\u6237\u53ef\u80fd\u9700\u8981\u7528\u7684 balancer \u662f\u548c\u4e1a\u52a1\u7d27\u5bc6\u76f8\u5173\u7684 balancer\uff0c\u6bd4\u5982\uff1a\u9700\u8981\u8003\u8651\u673a\u623f\u3001\u53ef\u7528\u533a\u7b49\u7b49\u3002\u652f\u6301\u81ea\u5b9a\u4e49 balancer\uff0c\u7528\u6237\u53ef\u4ee5\u7f16\u5199\u81ea\u5df1\u7684 balancer\uff0c\u5e76\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},'require("apisix.balancer.your_balancer")'),"  \u52a0\u8f7d\u5230\u7a0b\u5e8f\u4e2d\u3002"),(0,l.kt)("p",null,"\u901a\u5e38\u81ea\u5b9a\u4e49\u7684 balancer \u9700\u8981 node \u63d0\u4f9b host/port \u4ee5\u5916\u7684\u6570\u636e\uff0c\u53ef\u4ee5\u628a\u6570\u636e\u653e\u5230 metadata \u91cc\u9762\uff0c\u4e3e\u4e2a\u4f8b\u5b50\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n    "nodes": [\n        { "host": "0.0.0.0", "port": 1980, "weight": 1, "metadata": {"b": 1} }\n    ]\n}\n')),(0,l.kt)("h2",{id:"\u4e0b\u8f7d"},"\u4e0b\u8f7d"),(0,l.kt)("p",null,"\u4e0b\u8f7d Apache APISIX 2.8"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6e90\u4ee3\u7801\uff1a\u8bf7\u8bbf\u95ee",(0,l.kt)("a",{parentName:"li",href:"https://apisix.apache.org/downloads/"},"\u4e0b\u8f7d\u9875\u9762")),(0,l.kt)("li",{parentName:"ul"},"\u4e8c\u8fdb\u5236\u5b89\u88c5\u5305\uff1a\u8bf7\u8bbf\u95ee",(0,l.kt)("a",{parentName:"li",href:"https://apisix.apache.org/zh/docs/apisix/how-to-build/"},"\u5b89\u88c5\u6307\u5357"))))}m.isMDXComponent=!0}}]);