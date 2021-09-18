"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[12610],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(r),f=a,h=m["".concat(p,".").concat(f)]||m[f]||u[f]||i;return r?n.createElement(h,l(l({ref:t},c),{},{components:r})):n.createElement(h,l({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},90185:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return p},assets:function(){return s},toc:function(){return c},default:function(){return m}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),l={title:"Release Apache APISIX Ingress Controller 0.1.0"},o=void 0,p={permalink:"/zh/events/2020/12/23/release-apache-apisix-ingress-controller-0.1.0",source:"@site/events/2020-12-23-release-apache-apisix-ingress-controller-0.1.0.md",title:"Release Apache APISIX Ingress Controller 0.1.0",description:"This release mainly improve basic features, bugfix and adds test cases.",date:"2020-12-23T00:00:00.000Z",formattedDate:"2020\u5e7412\u670823\u65e5",tags:[],readingTime:.375,truncated:!0,authors:[],prevItem:{title:"Release Apache APISIX Ingress Controller 0.2.0",permalink:"/zh/events/2021/01/19/release-apache-apisix-ingress-controller-0.2.0"}},s={authorsImageUrls:[]},c=[{value:"Core",id:"core",children:[]},{value:"Test case",id:"test-case",children:[]},{value:"Bugfix",id:"bugfix",children:[]}],u={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This release mainly improve basic features, bugfix and adds test cases."),(0,i.kt)("h2",{id:"core"},"Core"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Enriched documentation."),(0,i.kt)("li",{parentName:"ul"},"CI Integration. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/75"},"#75")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/80"},"#80")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/84"},"#84")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/87"},"#87")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/89"},"#89")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/97"},"#97")),(0,i.kt)("li",{parentName:"ul"},"Support retry when sync failed. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/103"},"#103")),(0,i.kt)("li",{parentName:"ul"},"Support using kustomize install all resources. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/72"},"#72")),(0,i.kt)("li",{parentName:"ul"},"Support command line configuration. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/61"},"#61")),(0,i.kt)("li",{parentName:"ul"},"Support to define SSL by CRD. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/95"},"#95"))),(0,i.kt)("h2",{id:"test-case"},"Test case"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add E2E test environment. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/101"},"#101"))),(0,i.kt)("h2",{id:"bugfix"},"Bugfix"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"invalid memory address or nil pointer dereference. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/api7/seven/pull/9"},"#9"))))}m.isMDXComponent=!0}}]);