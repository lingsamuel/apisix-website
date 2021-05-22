(self.webpackChunk=self.webpackChunk||[]).push([[2215],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,d=u["".concat(l,".").concat(m)]||u[m]||h[m]||s;return a?n.createElement(d,i(i({ref:t},c),{},{components:a})):n.createElement(d,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<s;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9696:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return l},default:function(){return c}});var n=a(2122),r=a(9756),s=(a(7294),a(3905)),i={title:"Run Ingress APISIX on Amazon EKS",author:"Chao Zhang",authorURL:"https://github.com/tokers",authorImageURL:"https://avatars0.githubusercontent.com/u/10428333?s=60&v=4"},o={permalink:"/apisix-website/zh/blog/2021/01/21/run-ingress-apisix-on-amazon-eks",source:"@site/blog/2021-01-21-run-ingress-apisix-on-amazon-eks.md",title:"Run Ingress APISIX on Amazon EKS",description:"@Chao Zhang, Apache APISIX Committer from Shenzhen Zhiliu Technology Co.",date:"2021-01-21T00:00:00.000Z",formattedDate:"January 21, 2021",tags:[],readingTime:4.13,truncated:!0,prevItem:{title:"Stable Product Delivery with Cypress",permalink:"/apisix-website/zh/blog/2021/02/08/stable-product-delivery-with-cypress"},nextItem:{title:"\u521d\u63a2 Kubernetes Service APIs",permalink:"/apisix-website/zh/blog/2020/12/18/a-first-look-at-kubernetes-service-api"}},l=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Install Apache APISIX",id:"install-apache-apisix",children:[]},{value:"Install apisix-ingress-controller",id:"install-apisix-ingress-controller",children:[]},{value:"Test",id:"test",children:[]},{value:"See Also",id:"see-also",children:[]}],p={toc:l};function c(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("a",{parentName:"p",href:"https://github.com/tokers"},"@Chao Zhang"),", Apache APISIX Committer from ",(0,s.kt)("a",{parentName:"p",href:"https://www.apiseven.com/"},"Shenzhen Zhiliu Technology Co."))),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Source:"),(0,s.kt)("ul",{parentName:"blockquote"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix"},"https://github.com/apache/apisix")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-helm-chart"},"https://github.com/apache/apisix-helm-chart")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller"},"https://github.com/apache/apisix-ingress-controller")))),(0,s.kt)("p",null,"This post is based on ",(0,s.kt)("a",{parentName:"p",href:"http://apisix.apache.org/docs/ingress-controller/deployments/aws/"},"Install Ingress APISIX on Amazon EKS"),"."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"})),(0,s.kt)("p",null,"Amazon Elastic Kubernetes Service (",(0,s.kt)("a",{parentName:"p",href:"https://amazonaws-china.com/eks/?whats-new-cards.sort-by=item.additionalFields.postDateTime&whats-new-cards.sort-order=desc&eks-blogs.sort-by=item.additionalFields.createdDate&eks-blogs.sort-order=desc"},"Amazon EKS"),") gives you the flexibility to start, run, and scale Kubernetes applications in the AWS cloud or on-premises. This article explains how to run Ingress APISIX on it."),(0,s.kt)("p",null,"Ingress APISIX brings good features (traffic splitting, multiple protocols, authentication and etc) of Apache APISIX to Kubernetes, with a well-designed Controller component to drive it, which helps users to achieve complex demands for the north-south traffic."),(0,s.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,s.kt)("p",null,"Before you go ahead, make sure you have an available EKS cluster on Amazon AWS. If you don't have one, please create it according to the guide."),(0,s.kt)("p",null,"You shall have kubectl tool in your own environment, set the context to your EKS cluster by running:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"aws eks update-kubeconfig --name <your eks cluster name> --region <your region>\n")),(0,s.kt)("p",null,"After the Kubernetes cluster is ready, creating the namespace ingress-apisix, all subsequent resources will be created at this namespace."),(0,s.kt)("p",null,"kubectl create namespace ingress-apisix"),(0,s.kt)("p",null,"We use ",(0,s.kt)("a",{parentName:"p",href:"https://helm.sh/"},"Helm")," to deploy all components in Ingress APISIX (",(0,s.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix"},"Apache APISIX")," and ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller"},"apisix-ingress-controller"),"), so please also install Helm according to its installation guide. The helm charts for Apache APISIX and apisix-ingress-controller are in apache/apisix-helm-chart and apache/apisix-ingress-controller, clone them to get the charts."),(0,s.kt)("h2",{id:"install-apache-apisix"},"Install Apache APISIX"),(0,s.kt)("p",null,"Apache APISIX as the proxy plane of apisix-ingress-controller, should be deployed in advance."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'cd /path/to/apisix-helm-chart\nhelm repo add bitnami https://charts.bitnami.com/bitnami\nhelm dependency update ./chart/apisix\nhelm install apisix ./chart/apisix \\\n  --set gateway.type=LoadBalancer \\\n  --set allow.ipList="{0.0.0.0/0}" \\\n  --namespace ingress-apisix\nkubectl get service --namespace ingress-apisix\n')),(0,s.kt)("p",null,"The above commands created two Kubernetes Service resources, one is ",(0,s.kt)("inlineCode",{parentName:"p"},"apisix-gateway"),", which processes the real traffic; another is ",(0,s.kt)("inlineCode",{parentName:"p"},"apisix-admin"),", which acts as the control plane to process all the configuration changes. Here we created the ",(0,s.kt)("inlineCode",{parentName:"p"},"apisix-gateway")," as a ",(0,s.kt)("inlineCode",{parentName:"p"},"LoadBalancer")," type Service, which resorts the ",(0,s.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/elasticloadbalancing/latest/network/introduction.html"},"AWS Network Balancer")," to expose it to the Internet. You can find the load balancer hostname by the following command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get service apisix-gateway \\\n--namespace ingress-apisix \\\n-o jsonpath='{.status.loadBalancer.ingress[].hostname}'\n")),(0,s.kt)("p",null," Another thing should be concerned that the ",(0,s.kt)("inlineCode",{parentName:"p"},"allow.ipList")," field should be customized according to the ",(0,s.kt)("a",{parentName:"p",href:"https://amazonaws-china.com/premiumsupport/knowledge-center/eks-multiple-cidr-ranges/"},"EKS CIDR Ranges")," in your EKS cluster, so that the apisix-ingress-controller can be authorized by Apache APISIX (for the resources pushing)."),(0,s.kt)("p",null,"See ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-helm-chart/blob/master/charts/apisix/values.yaml"},"values.yaml")," to learn all the configuration items if you have other requirements."),(0,s.kt)("h2",{id:"install-apisix-ingress-controller"},"Install apisix-ingress-controller"),(0,s.kt)("p",null,"After Apache APISIX is deployed successfully, now it's time to install the controller component."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"cd /path/to/apisix-ingress-controller\n# install base resources, e.g. ServiceAccount.\nhelm install ingress-apisix-base -n ingress-apisix ./charts/base\n# install apisix-ingress-controller\nhelm install ingress-apisix ./charts/ingress-apisix \\\n  --set ingressController.image.tag=dev \\\n  --set ingressController.config.apisix.baseURL=http://apisix-admin:9180/apisix/admin \\\n  --set ingressController.config.apisix.adminKey={YOUR ADMIN KEY} \\\n  --namespace ingress-apisix\n")),(0,s.kt)("p",null,"The ingress-apisix-base chart installed some basic dependencies for apisix-ingress-controller, such as ServiceAccount, its exclusive CRDs and etc."),(0,s.kt)("p",null,"The ingress-apisix chart guides us how to install the controller itself, you can change the image tag to the desired release version, also the value of ",(0,s.kt)("inlineCode",{parentName:"p"},"ingressController.config.apisix.adminKey")," in above mentioned commands should be filled according to your practical usage (and be sure the admin key is same as the on in Apache APISIX deployment). See ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-helm-chart/blob/master/charts/apisix-ingress-controller/values.yaml"},"values.yaml")," to learn all the configuration items if you have other requirements."),(0,s.kt)("p",null,"Now try to open your EKS console, choosing your cluster and clicking the Workloads tag, you shall see all pods of Apache APISIX, etcd and apisix-ingress-controller are ready."),(0,s.kt)("h2",{id:"test"},"Test"),(0,s.kt)("p",null,"Now we have deployed all components in Ingress APISIX, it's important to check whether it runs well. We will deploy a httpbin service and ask Apache APISIX to route all requests with Host ",(0,s.kt)("inlineCode",{parentName:"p"},'"local.httpbin.org"')," to it."),(0,s.kt)("p",null,"The first step we should do is created the httpbin workload and expose it."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl run httpbin --image kennethreitz/httpbin --port 80\nkubectl expose pod httpbin --port 80\n")),(0,s.kt)("p",null,"In order to let Apache APISIX routes requests correctly, we need create an ApisixRoute resource to drive it."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"# ar-httpbin.yaml\napiVersion: apisix.apache.org/v1\nkind: ApisixRoute\nmetadata:\n  name: httpserver-route\nspec:\n  rules:\n  - host: local.httpbin.org\n    http:\n      paths:\n      - backend:\n          serviceName: httpbin\n          servicePort: 80\n        path: /*\n")),(0,s.kt)("p",null,"The above ApisixRoute resource asks Apache APISIX to route requests which Host header is ",(0,s.kt)("inlineCode",{parentName:"p"},'"local.httpbin.org"')," to the httpbin backend (the one we just created)."),(0,s.kt)("p",null,"Now try to apply it, note the service and the ApisixRoute resource should be put in the same namespace., crossing namespaces is not allowed in apisix-ingress-controller."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f ar-httpbin.yaml\n")),(0,s.kt)("p",null,"Test it by a simple curl call from a place where the Apache APISIX service is reachable."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://{apisix-gateway-ip}:{apisix-gateway-port}/headers -s -H \'Host: local.httpbin.org\'\n\n{\n  "headers": {\n    "Accept": "*/*",\n    "Host": "httpbin.org",\n    "User-Agent": "curl/7.64.1",\n    "X-Amzn-Trace-Id": "Root=1-5ffc3273-2928e0844e19c9810d1bbd8a"\n  }\n}\n')),(0,s.kt)("p",null,"If the Service type is ",(0,s.kt)("inlineCode",{parentName:"p"},"ClusterIP,")," you have to login to a pod in the EKS cluster, then accessing Apache APISIX with its ",(0,s.kt)("inlineCode",{parentName:"p"},"ClusterIP")," or Service FQDN. If it was exposed (no matter ",(0,s.kt)("inlineCode",{parentName:"p"},"NodePort")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"LoadBalancer"),"), just accessing its outside reachable endpoint."),(0,s.kt)("h2",{id:"see-also"},"See Also"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.apiseven.com/zh/blog/a-first-look-at-kubernetes-service-api"},"https://www.apiseven.com/zh/blog/a-first-look-at-kubernetes-service-api")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.apiseven.com/zh/blog/another-way-to-implement-envoy-filter"},"https://www.apiseven.com/zh/blog/another-way-to-implement-envoy-filter"))))}c.isMDXComponent=!0}}]);