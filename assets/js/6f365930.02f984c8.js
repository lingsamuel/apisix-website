(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(142)),s={title:"Install Ingress APISIX on K3S and Rancher RKE"},o={unversionedId:"deployments/k3s-rke",id:"deployments/k3s-rke",isDocsHomePage:!1,title:"Install Ingress APISIX on K3S and Rancher RKE",description:"\x3c!--",source:"@site/docs/apisix-ingress-controller/deployments/k3s-rke.md",slug:"/deployments/k3s-rke",permalink:"/docs/ingress-controller/deployments/k3s-rke",version:"current",sidebar:"docs",previous:{title:"Install Ingress APISIX on Google Cloud GKE",permalink:"/docs/ingress-controller/deployments/gke"},next:{title:"Install Ingress APISIX on KubeSphere",permalink:"/docs/ingress-controller/deployments/kubesphere"}},c=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Install APISIX",id:"install-apisix",children:[]},{value:"Install apisix-ingress-controller",id:"install-apisix-ingress-controller",children:[]}],l={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This document explains how to install Ingress APISIX on ",Object(i.b)("a",{parentName:"p",href:"https://k3s.io/"},"k3S")," and ",Object(i.b)("a",{parentName:"p",href:"https://rancher.com/products/rke/"},"Rancher RKE"),"."),Object(i.b)("p",null,"K3S is a certified Kubernetes distribution built for IoT and Edge computing, whilst ",Object(i.b)("a",{parentName:"p",href:"https://apisix.apache.org"},"Apache APISIX")," is also good at IoT (See ",Object(i.b)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/doc/plugins/mqtt-proxy.md"},"MQTT plugin"),") and runs well on ARM architecture.\nIt's a good choice to use Ingress APISIX as the north-south API gateway in K3S."),Object(i.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Install ",Object(i.b)("a",{parentName:"li",href:"https://rancher.com/docs/k3s/latest/en/installation/"},"K3S")," or ",Object(i.b)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/installation/"},"Rancher RKE"),"."),Object(i.b)("li",{parentName:"ul"},"Install ",Object(i.b)("a",{parentName:"li",href:"https://helm.sh/"},"Helm"),"."),Object(i.b)("li",{parentName:"ul"},"Clone ",Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/apisix-helm-chart"},"Apache APISIX Charts"),"."),Object(i.b)("li",{parentName:"ul"},"Make sure your target namespace exists, kubectl operations thorough this document will be executed in namespace ",Object(i.b)("inlineCode",{parentName:"li"},"ingress-apisix"),".")),Object(i.b)("h2",{id:"install-apisix"},"Install APISIX"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"http://apisix.apache.org/"},"Apache APISIX")," as the proxy plane of apisix-ingress-controller, should be deployed in advance."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},'cd /path/to/apisix-helm-chart\nhelm repo add bitnami https://charts.bitnami.com/bitnami\nhelm dependency update ./charts/apisix\nhelm install apisix ./charts/apisix \\\n  --set gateway.type=NodePort \\\n  --set allow.ipList="{0.0.0.0/0}" \\\n  --namespace ingress-apisix \\\n  --kubeconfig /etc/rancher/k3s/k3s.yaml\nkubectl get service --namespace ingress-apisix\n')),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"If you are using K3S, the default kubeconfig file is in /etc/rancher/k3s and root permission may required.")),Object(i.b)("p",null,"Two Service resources were created, one is ",Object(i.b)("inlineCode",{parentName:"p"},"apisix-gateway"),", which processes the real traffic; another is ",Object(i.b)("inlineCode",{parentName:"p"},"apisix-admin"),", which acts as the control plane to process all the configuration changes."),Object(i.b)("p",null,"The gateway service type is set to ",Object(i.b)("inlineCode",{parentName:"p"},"NodePort"),", so that clients can access Apache APISIX through the Node IPs and the assigned port.\nIf you are using K3S and you want to expose a ",Object(i.b)("inlineCode",{parentName:"p"},"LoadBalancer")," service, try to use ",Object(i.b)("a",{parentName:"p",href:"https://github.com/k3s-io/klipper-lb"},"Klipper"),"."),Object(i.b)("p",null,"Another thing should be concerned that the ",Object(i.b)("inlineCode",{parentName:"p"},"allow.ipList")," field should be customized according to the Pod CIDR settings(see ",Object(i.b)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/installation/install-options/server-config/#networking"},"K3S")," or ",Object(i.b)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.x/en/cluster-provisioning/rke-clusters/options/#cluster-config-file"},"Rancher RKE"),", so that the apisix-ingress-controller instances can access the APISIX instances (resources pushing)."),Object(i.b)("h2",{id:"install-apisix-ingress-controller"},"Install apisix-ingress-controller"),Object(i.b)("p",null,"You can also install apisix-ingress-controller by Helm Charts, it's recommended to install it in the same namespace with Apache APISIX."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"cd /path/to/apisix-helm-chart\n# install apisix-ingress-controller\nhelm install apisix-ingress-controller ./charts/apisix-ingress-controller \\\n  --set image.tag=dev \\\n  --set config.apisix.baseURL=http://apisix-admin:9180/apisix/admin \\\n  --set config.apisix.adminKey=edd1c9f034335f136f87ad84b625c8f1 \\\n  --namespace ingress-apisix \\\n  --kubeconfig /etc/rancher/k3s/k3s.yaml\n")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"If you are using K3S, the default kubeconfig file is in /etc/rancher/k3s and root permission may required.")),Object(i.b)("p",null,"The admin key used in abovementioned commands is the default one, if you change the admin key configuration when you deployed APISIX, please remember to change it here."),Object(i.b)("p",null,"Change the ",Object(i.b)("inlineCode",{parentName:"p"},"image.tag")," to the apisix-ingress-controller version that you desire. You have to wait for while until the correspdoning pods are running."),Object(i.b)("p",null,"Now try to create some ",Object(i.b)("a",{parentName:"p",href:"/docs/ingress-controller/CRD-specification"},"resources")," to verify the running status. As a minimalist example, see ",Object(i.b)("a",{parentName:"p",href:"/docs/ingress-controller/samples/proxy-the-httpbin-service"},"proxy-the-httpbin-service")," to learn how to apply resources to drive the apisix-ingress-controller."))}p.isMDXComponent=!0},142:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,d=u["".concat(s,".").concat(b)]||u[b]||h[b]||i;return n?a.a.createElement(d,o(o({ref:t},l),{},{components:n})):a.a.createElement(d,o({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);