"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[45100],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,h=m["".concat(o,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},73598:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return o},toc:function(){return c},default:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),s={title:"Install Ingress APISIX on Azure AKS"},l=void 0,o={unversionedId:"deployments/azure",id:"deployments/azure",isDocsHomePage:!1,title:"Install Ingress APISIX on Azure AKS",description:"\x3c!--",source:"@site/docs/apisix-ingress-controller/deployments/azure.md",sourceDirName:"deployments",slug:"/deployments/azure",permalink:"/zh/docs/ingress-controller/deployments/azure",editUrl:"https://github.com/apache/apisix-ingress-controller/edit/master/docs/en/latest/deployments/azure.md",tags:[],version:"current",frontMatter:{title:"Install Ingress APISIX on Azure AKS"},sidebar:"docs",previous:{title:"Install Ingress APISIX on Amazon EKS",permalink:"/zh/docs/ingress-controller/deployments/aws"},next:{title:"Install Ingress APISIX on Google Cloud GKE",permalink:"/zh/docs/ingress-controller/deployments/gke"}},c=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Install APISIX and apisix-ingress-controller",id:"install-apisix-and-apisix-ingress-controller",children:[]}],p={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document explains how to install Ingress APISIX on ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/aks/intro-kubernetes#:~:text=Azure%20Kubernetes%20Service%20(AKS)%20makes,managed%20Kubernetes%20cluster%20in%20Azure.&text=The%20Kubernetes%20masters%20are%20managed,clusters%2C%20not%20for%20the%20masters."},"Azure AKS"),"."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create an Kubernetes Service on Azure."),(0,i.kt)("li",{parentName:"ul"},"Install ",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/cli/azure/#:~:text=The%20Azure%20command%2Dline%20interface,with%20an%20emphasis%20on%20automation."},"Azure CLI")," and download the credentials by running ",(0,i.kt)("inlineCode",{parentName:"li"},"az aks get-credentials"),"."),(0,i.kt)("li",{parentName:"ul"},"Install ",(0,i.kt)("a",{parentName:"li",href:"https://helm.sh/"},"Helm"),"."),(0,i.kt)("li",{parentName:"ul"},"Clone ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-helm-chart"},"Apache APISIX Charts"),"."),(0,i.kt)("li",{parentName:"ul"},"Make sure your target namespace exists, kubectl operations thorough this document will be executed in namespace ",(0,i.kt)("inlineCode",{parentName:"li"},"ingress-apisix"),".")),(0,i.kt)("h2",{id:"install-apisix-and-apisix-ingress-controller"},"Install APISIX and apisix-ingress-controller"),(0,i.kt)("p",null,"As the data plane of apisix-ingress-controller, ",(0,i.kt)("a",{parentName:"p",href:"http://apisix.apache.org/"},"Apache APISIX")," can be deployed at the same time using Helm chart."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cd /path/to/apisix-helm-chart\nhelm repo add bitnami https://charts.bitnami.com/bitnami\nhelm repo update\nkubectl create ns ingress-apisix\nhelm install apisix charts/apisix \\\n  --set gateway.type=LoadBalancer \\\n  --set ingress-controller.enabled=true \\\n  --namespace ingress-apisix\nkubectl get service --namespace ingress-apisix\n")),(0,i.kt)("p",null,"Five Service resources were created."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"apisix-gateway"),", which processes the real traffic;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"apisix-admin"),", which acts as the control plane to process all the configuration changes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"apisix-ingress-controller"),", which exposes apisix-ingress-controller's metrics."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"apisix-etcd")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"apisix-etcd-headless")," for etcd service and internal communication.")),(0,i.kt)("p",null,"The gateway service type is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"LoadBalancer"),", so that clients can access Apache APISIX through a load balancer IP. You can find the load balancer IP by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get service apisix-gateway --namespace ingress-apisix -o jsonpath='{.status.loadBalancer.ingress[].ip}'\n")),(0,i.kt)("p",null,"Now try to create some ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/tree/master/docs/en/latest/concepts"},"resources")," to verify the running status. As a minimalist example, see ",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/ingress-controller/practices/proxy-the-httpbin-service"},"proxy-the-httpbin-service")," to learn how to apply resources to drive the apisix-ingress-controller."))}u.isMDXComponent=!0}}]);