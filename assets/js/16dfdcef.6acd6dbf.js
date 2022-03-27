"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[914],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,f=m["".concat(i,".").concat(d)]||m[d]||c[d]||o;return r?n.createElement(f,u(u({ref:t},p),{},{components:r})):n.createElement(f,u({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,u=new Array(o);u[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,u[1]=l;for(var s=2;s<o;s++)u[s]=r[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4026:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),u=["components"],l={title:"Router",sidebar_label:"Router"},i=void 0,s={unversionedId:"router",id:"router",title:"Router",description:"The following cover the API exposed by a Router (check out how to create one).",source:"@site/docs/router.md",sourceDirName:".",slug:"/router",permalink:"/chicane/router",editUrl:"https://github.com/swan-io/chicane/edit/main/docs/docs/router.md",tags:[],version:"current",frontMatter:{title:"Router",sidebar_label:"Router"},sidebar:"docs",previous:{title:"Top-level API",permalink:"/chicane/top-level-api"},next:{title:"Components",permalink:"/chicane/components"}},p={},c=[{value:"Router.{RouteName}",id:"routerroutename",level:2},{value:"Router.useRoute",id:"routeruseroute",level:2},{value:"Router.push",id:"routerpush",level:2},{value:"Router.replace",id:"routerreplace",level:2}],m={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The following cover the API exposed by a ",(0,o.kt)("strong",{parentName:"p"},"Router")," (",(0,o.kt)("a",{parentName:"p",href:"/creating-your-router"},"check out how to create one"),")."),(0,o.kt)("h2",{id:"routerroutename"},"Router.{RouteName}"),(0,o.kt)("p",null,"The Router has one per route. Takes the route params (if it has some), and returns a build URL."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"params"),": Required params for the route.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'Router.UserDetail({ userId: "123" }); // "/users/123"\n')),(0,o.kt)("h2",{id:"routeruseroute"},"Router.useRoute"),(0,o.kt)("p",null,"Takes an array of routes to listen to (a subset of the router), and returns the route and its params if one matches."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"routes")," (",(0,o.kt)("strong",{parentName:"li"},"required"),"): ",(0,o.kt)("inlineCode",{parentName:"li"},"RouteName[]"))),(0,o.kt)("p",null,"Returns a route match (or ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")," if nothing matches):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"name"),": a route name"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"params"),": its associated params")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const route = Router.useRoute(["Home", "UserArea"]);\n\n// then match on the route\n')),(0,o.kt)("h2",{id:"routerpush"},"Router.push"),(0,o.kt)("p",null,"Takes a route name and its associated params and navigates to it"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"name"),": a route name"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"params"),": its associated params")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'Router.push("Home");\nRouter.push("UserDetail", { userId: "123" });\n')),(0,o.kt)("h2",{id:"routerreplace"},"Router.replace"),(0,o.kt)("p",null,"Takes a route name and its associated params and navigates to it ",(0,o.kt)("strong",{parentName:"p"},"without")," creating a new entry in the browser history."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"name"),": a route name"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"params"),": its associated params")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'Router.replace("Home");\nRouter.replace("UserDetail", { userId: "123" });\n')))}d.isMDXComponent=!0}}]);