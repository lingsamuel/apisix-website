"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[90369],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(r),h=a,f=m["".concat(s,".").concat(h)]||m[h]||u[h]||l;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},30485:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return s},assets:function(){return p},toc:function(){return c},default:function(){return m}});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),i={title:"Release Apache APISIX Ingress Controller 0.1.0",tags:["APISIX Ingress Controller"]},o=void 0,s={permalink:"/releases/2020/12/23/release-apache-apisix-ingress-controller-0.1.0",source:"@site/releases/2020-12-23-release-apache-apisix-ingress-controller-0.1.0.md",title:"Release Apache APISIX Ingress Controller 0.1.0",description:"This release mainly improve basic features, bugfix and adds test cases.",date:"2020-12-23T00:00:00.000Z",formattedDate:"December 23, 2020",tags:[{label:"APISIX Ingress Controller",permalink:"/releases/tags/apisix-ingress-controller"}],readingTime:.385,truncated:!1,authors:[],prevItem:{title:"Release Apache APISIX 2.2",permalink:"/releases/2021/1/8/release-apache-apisix-2.2"},nextItem:{title:"Release Apache APISIX Dashboard 2.2",permalink:"/releases/2020/12/16/release-apache-apisix-dashboard-2.2"}},p={authorsImageUrls:[]},c=[{value:"Core",id:"core",children:[]},{value:"Test case",id:"test-case",children:[]},{value:"Bugfix",id:"bugfix",children:[]}],u={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This release mainly improve basic features, bugfix and adds test cases."),(0,l.kt)("h2",{id:"core"},"Core"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Enriched documentation."),(0,l.kt)("li",{parentName:"ul"},"CI Integration. ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/75"},"#75")," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/80"},"#80")," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/84"},"#84")," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/87"},"#87")," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/89"},"#89")," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/97"},"#97")),(0,l.kt)("li",{parentName:"ul"},"Support retry when sync failed. ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/103"},"#103")),(0,l.kt)("li",{parentName:"ul"},"Support using kustomize install all resources. ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/72"},"#72")),(0,l.kt)("li",{parentName:"ul"},"Support command line configuration. ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/61"},"#61")),(0,l.kt)("li",{parentName:"ul"},"Support to define SSL by CRD. ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/95"},"#95"))),(0,l.kt)("h2",{id:"test-case"},"Test case"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Add E2E test environment. ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/101"},"#101"))),(0,l.kt)("h2",{id:"bugfix"},"Bugfix"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"invalid memory address or nil pointer dereference. ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/api7/seven/pull/9"},"#9"))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"#table-of-contents"},"Back to TOC")))}m.isMDXComponent=!0}}]);