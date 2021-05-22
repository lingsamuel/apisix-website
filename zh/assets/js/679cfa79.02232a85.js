(self.webpackChunk=self.webpackChunk||[]).push([[3388],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return u},kt:function(){return k}});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),m=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=m(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=m(a),k=l,c=d["".concat(i,".").concat(k)]||d[k]||s[k]||r;return a?n.createElement(c,o(o({ref:t},u),{},{components:a})):n.createElement(c,o({ref:t},u))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:l,o[1]=p;for(var m=2;m<r;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},915:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return o},metadata:function(){return p},toc:function(){return i},default:function(){return u}});var n=a(2122),l=a(9756),r=(a(7294),a(3905)),o={title:"i18n User Guide"},p={unversionedId:"I18N_USER_GUIDE",id:"I18N_USER_GUIDE",isDocsHomePage:!1,title:"i18n User Guide",description:"\x3c!--",source:"@site/docs/apisix-dashboard/I18N_USER_GUIDE.md",sourceDirName:".",slug:"/I18N_USER_GUIDE",permalink:"/apisix-website/zh/docs/dashboard/I18N_USER_GUIDE",editUrl:"https://github.com/apache/apisix-dashboard/edit/master/docs/en/latest/I18N_USER_GUIDE.md",version:"current",frontMatter:{title:"i18n User Guide"},sidebar:"docs",previous:{title:"Development Guide",permalink:"/apisix-website/zh/docs/dashboard/develop"},next:{title:"Frontend E2E",permalink:"/apisix-website/zh/docs/dashboard/front-end-e2e"}},i=[{value:"Location of locale configuration",id:"location-of-locale-configuration",children:[]},{value:"How to name the key for each locale filed",id:"how-to-name-the-key-for-each-locale-filed",children:[]},{value:"Global locale keys",id:"global-locale-keys",children:[]},{value:"Recommended subkey naming",id:"recommended-subkey-naming",children:[]}],m={toc:i};function u(e){var t=e.components,a=(0,l.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Apache APISIX Dashboard uses ",(0,r.kt)("a",{parentName:"p",href:"https://umijs.org/plugins/plugin-locale"},"@umijs/plugin-locale")," to solve the i18n issues, in order to make the i18n more clear and reasonable, we would recommend to obey the following rules"),(0,r.kt)("h2",{id:"location-of-locale-configuration"},"Location of locale configuration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Please put ",(0,r.kt)("strong",{parentName:"li"},"the global locales")," under ",(0,r.kt)("inlineCode",{parentName:"li"},"src/locales"),"."),(0,r.kt)("li",{parentName:"ul"},"Please put ",(0,r.kt)("strong",{parentName:"li"},"each page's locale file")," under ",(0,r.kt)("inlineCode",{parentName:"li"},"src/pages/$PAGE/locales")," folder."),(0,r.kt)("li",{parentName:"ul"},"Please put ",(0,r.kt)("strong",{parentName:"li"},"the Component's locale file")," under ",(0,r.kt)("inlineCode",{parentName:"li"},"src/components/$COMPONENT/locales")," folder, and we ",(0,r.kt)("strong",{parentName:"li"},"MUST")," import them manually")),(0,r.kt)("h2",{id:"how-to-name-the-key-for-each-locale-filed"},"How to name the key for each locale filed"),(0,r.kt)("p",null,"the key can be like this : ","[basicModule]",".","[moduleName]",".","[elementName]",".","[...desc]"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"what's the first tow levels? e.g: ",(0,r.kt)("inlineCode",{parentName:"p"},"app.pwa"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"page.consumer"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"component.actionBar"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The subkeys are divided into $element + $description style e.g: ",(0,r.kt)("inlineCode",{parentName:"p"},"app.pwa.message.offline"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"component.actionBar.button.nextStep")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If the the text is the part of a element, we can use ","[elementNameProps]"," e.g: ",(0,r.kt)("inlineCode",{parentName:"li"},"page.consumer.proTableColumns.username"),"."),(0,r.kt)("li",{parentName:"ul"},"If there are two or more same level part locales of a element, we can add number suffix e.g: ",(0,r.kt)("inlineCode",{parentName:"li"},"page.route.form.itemRulesExtraMessage1.path"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"page.route.form.itemRulesExtraMessage2.path"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"common texts, we should not repeat in other part, and the common locale key omit ","[elementName]"," would be better."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If the text is used in two or more places inside the module, we would recommend sharing the text in the module, e.g:",(0,r.kt)("inlineCode",{parentName:"li"},"page.route.parameterPosition"),"."),(0,r.kt)("li",{parentName:"ul"},"If the text is used in two or more places between modules, we would recommend sharing the text globally, and add",(0,r.kt)("inlineCode",{parentName:"li"},"global"),"as the moduleName,git e.g:",(0,r.kt)("inlineCode",{parentName:"li"},"component.global.confirm"),".")))),(0,r.kt)("h2",{id:"global-locale-keys"},"Global locale keys"),(0,r.kt)("p",null,"we have already defined many global keys, before you do i18n, you can refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-dashboard/blob/master/web/src/locales/zh-CN/component.ts"},"those"),"."),(0,r.kt)("h2",{id:"recommended-subkey-naming"},"Recommended subkey naming"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Form"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"element"),(0,r.kt)("th",{parentName:"tr",align:null},"props"),(0,r.kt)("th",{parentName:"tr",align:null},"locale subKey"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Form.Item"),(0,r.kt)("td",{parentName:"tr",align:null},"label"),(0,r.kt)("td",{parentName:"tr",align:null},"form.itemLabel")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Form.Item"),(0,r.kt)("td",{parentName:"tr",align:null},"rules.required"),(0,r.kt)("td",{parentName:"tr",align:null},"form.itemRulesRequiredMessage")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Form.Item"),(0,r.kt)("td",{parentName:"tr",align:null},"rules.pattern"),(0,r.kt)("td",{parentName:"tr",align:null},"form.itemRulesPatternMessage")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Form.Item"),(0,r.kt)("td",{parentName:"tr",align:null},"extra"),(0,r.kt)("td",{parentName:"tr",align:null},"form.itemExtraMessage")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"'page.route.form.itemRulesExtraMessage.parameterName': '\u4ec5\u652f\u6301\u5b57\u6bcd\u548c\u6570\u5b57\uff0c\u4e14\u53ea\u80fd\u4ee5\u5b57\u6bcd\u5f00\u5934',\n'page.route.form.itemRulesPatternMessage.apiNameRule': '\u6700\u5927\u957f\u5ea6100\uff0c\u4ec5\u652f\u6301\u5b57\u6bcd\u3001\u6570\u5b57\u3001- \u548c _\uff0c\u4e14\u53ea\u80fd\u4ee5\u5b57\u6bcd\u5f00\u5934',\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Input"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"element"),(0,r.kt)("th",{parentName:"tr",align:null},"props"),(0,r.kt)("th",{parentName:"tr",align:null},"locale subKey"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Input"),(0,r.kt)("td",{parentName:"tr",align:null},"placeholder"),(0,r.kt)("td",{parentName:"tr",align:null},"input.placeholder")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"'page.route.input.placeholder.parameterNameHttpHeader': '\u8bf7\u6c42\u5934\u952e\u540d\uff0c\u4f8b\u5982\uff1aHOST',\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Button"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"element"),(0,r.kt)("th",{parentName:"tr",align:null},"props"),(0,r.kt)("th",{parentName:"tr",align:null},"locale subKey"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Button"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"button")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"'page.route.button.returnList': '\u8fd4\u56de\u8def\u7531\u5217\u8868',\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Steps"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"element"),(0,r.kt)("th",{parentName:"tr",align:null},"props"),(0,r.kt)("th",{parentName:"tr",align:null},"locale subKey"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Steps.step"),(0,r.kt)("td",{parentName:"tr",align:null},"title"),(0,r.kt)("td",{parentName:"tr",align:null},"steps.stepTitle")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"'page.route.steps.stepTitle.defineApiRequest': '\u8bbe\u7f6e\u8def\u7531\u4fe1\u606f',\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Select"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"element"),(0,r.kt)("th",{parentName:"tr",align:null},"props"),(0,r.kt)("th",{parentName:"tr",align:null},"locale subKey"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Select.Option"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"select.option")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"'page.route.select.option.enableHttps': '\u542f\u7528 HTTPS',\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Radio"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"element"),(0,r.kt)("th",{parentName:"tr",align:null},"props"),(0,r.kt)("th",{parentName:"tr",align:null},"locale subKey"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Radio"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"radio")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"'page.route.radio.staySame': '\u4fdd\u6301\u539f\u6837',\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ProTable"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"element"),(0,r.kt)("th",{parentName:"tr",align:null},"props"),(0,r.kt)("th",{parentName:"tr",align:null},"locale subKey"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ProTable"),(0,r.kt)("td",{parentName:"tr",align:null},"columns.title"),(0,r.kt)("td",{parentName:"tr",align:null},"proTable.columnsTitle")))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"ProTable usually appears in conjunction with forms, and columns title are same with form item label, so we recommend these title keys to be the common key in modules.")))}u.isMDXComponent=!0}}]);