(self.webpackChunk=self.webpackChunk||[]).push([[4267],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),f=a,h=m["".concat(l,".").concat(f)]||m[f]||u[f]||i;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2944:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l},default:function(){return c}});var n=r(2122),a=r(9756),i=(r(7294),r(3905)),o={title:"Release Apache APISIX Ingress Controller 0.4.0"},s={permalink:"/apisix-website/events/2021/03/12/release-apache-apisix-ingress-controller-0.4.0",source:"@site/events/2021-03-12-release-apache-apisix-ingress-controller-0.4.0.md",title:"Release Apache APISIX Ingress Controller 0.4.0",description:"This release mainly improves the program robustness and adds some features.",date:"2021-03-12T00:00:00.000Z",formattedDate:"March 12, 2021",tags:[],readingTime:.24,truncated:!0,prevItem:{title:"Release Apache APISIX 2.5",permalink:"/apisix-website/events/2021/04/05/release-apache-apisix-2.5"},nextItem:{title:"Release Apache APISIX 2.4",permalink:"/apisix-website/events/2021/03/05/release-apache-apisix-2.4"}},l=[{value:"Core",id:"core",children:[]},{value:"Test",id:"test",children:[]}],p={toc:l};function c(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This release mainly improves the program robustness and adds some features."),(0,i.kt)("h2",{id:"core"},"Core"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Support Kubernetes Ingress resources ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/250"},"#250")),(0,i.kt)("li",{parentName:"ul"},"Support ApisixRoute v2alpha1 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/262"},"#262")),(0,i.kt)("li",{parentName:"ul"},"Support healthchecks definition ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/issues/117"},"#117")),(0,i.kt)("li",{parentName:"ul"},"Support secret controller ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/284"},"#284")),(0,i.kt)("li",{parentName:"ul"},"Project optimization ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/issues/92"},"#92"))),(0,i.kt)("h2",{id:"test"},"Test"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add test cases for pkg/kube ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/issues/99"},"#99"))))}c.isMDXComponent=!0}}]);