"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[918],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return p}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=s(n),p=r,v=u["".concat(c,".").concat(p)]||u[p]||d[p]||l;return n?a.createElement(v,o(o({ref:t},m),{},{components:n})):a.createElement(v,o({ref:t},m))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8066:function(e,t,n){n.d(t,{Z:function(){return A}});var a=n(7462),r=n(7294),l=n(6010),o={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i={Prism:n(7410).default,theme:o};function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}var m=/\r\n|\r|\n/,d=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},u=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},p=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=s({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=s({},n,{backgroundColor:null}),r};function v(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var g=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),c(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?p(e.theme,e.language):void 0;return t.themeDict=n})),c(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,l=s({},v(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),o=t.getThemeDict(t.props);return void 0!==o&&(l.style=o.plain),void 0!==r&&(l.style=void 0!==l.style?s({},l.style,r):r),void 0!==n&&(l.key=n),a&&(l.className+=" "+a),l})),c(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return l[n[0]];var o=a?{display:"inline-block"}:{},i=n.map((function(e){return l[e]}));return Object.assign.apply(Object,[o].concat(i))}})),c(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,l=e.token,o=s({},v(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==r&&(o.style=void 0!==o.style?s({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),c(this,"tokenize",(function(e,t,n,a){var r={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",r);var l=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,l=this.getThemeDict(this.props),o=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],l=0,o=0,i=[],c=[i];o>-1;){for(;(l=a[o]++)<r[o];){var s=void 0,p=t[o],v=n[o][l];if("string"==typeof v?(p=o>0?p:["plain"],s=v):(p=u(p,v.type),v.alias&&(p=u(p,v.alias)),s=v.content),"string"==typeof s){var g=s.split(m),h=g.length;i.push({types:p,content:g[0]});for(var f=1;f<h;f++)d(i),c.push(i=[]),i.push({types:p,content:g[f]})}else o++,t.push(p),n.push(s),a.push(0),r.push(s.length)}o--,t.pop(),n.pop(),a.pop(),r.pop()}return d(i),c}(void 0!==o?this.tokenize(t,a,o,n):[a]),className:"prism-code language-"+n,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),h=g,f=n(5979);var b=n(5999),y="copyButton_eDfN",E="copyButtonCopied_ljy5",k="copyButtonIcons_W9eQ",N="copyButtonIcon_XEyF",Z="copyButtonSuccessIcon_i9w9";function _(e){var t=e.code,n=(0,r.useState)(!1),a=n[0],o=n[1],i=(0,r.useRef)(void 0),c=(0,r.useCallback)((function(){!function(e,t){var n=(void 0===t?{}:t).target,a=void 0===n?document.body:n,r=document.createElement("textarea"),l=document.activeElement;r.value=e,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";var o=document.getSelection(),i=!1;o.rangeCount>0&&(i=o.getRangeAt(0)),a.append(r),r.select(),r.selectionStart=0,r.selectionEnd=e.length;var c=!1;try{c=document.execCommand("copy")}catch(s){}r.remove(),i&&(o.removeAllRanges(),o.addRange(i)),l&&l.focus()}(t),o(!0),i.current=window.setTimeout((function(){o(!1)}),1e3)}),[t]);return(0,r.useEffect)((function(){return function(){return window.clearTimeout(i.current)}}),[]),r.createElement("button",{type:"button","aria-label":a?(0,b.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,b.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,b.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,l.Z)(y,"clean-btn",a&&E),onClick:c},r.createElement("span",{className:k,"aria-hidden":"true"},r.createElement("svg",{className:N,viewBox:"0 0 24 24"},r.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),r.createElement("svg",{className:Z,viewBox:"0 0 24 24"},r.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}var L="codeBlockContainer_I0IT",T="codeBlockContent_wNvx",C="codeBlockTitle_BvAR",O="codeBlock_jd64",w="codeBlockStandalone_csWH",x="codeBlockLines_mRuA";function A(e){var t,n=e.children,o=e.className,c=void 0===o?"":o,s=e.metastring,m=e.title,d=e.language,u=(0,f.LU)().prism,p=(0,r.useState)(!1),v=p[0],g=p[1];(0,r.useEffect)((function(){g(!0)}),[]);var b=(0,f.bc)(s)||m,y=(0,f.pJ)();if(r.Children.toArray(n).some((function(e){return(0,r.isValidElement)(e)})))return r.createElement(h,(0,a.Z)({},i,{key:String(v),theme:y,code:"",language:"text"}),(function(e){var t=e.className,a=e.style;return r.createElement("pre",{tabIndex:0,className:(0,l.Z)(t,w,"thin-scrollbar",L,c,f.kM.common.codeBlock),style:a},r.createElement("code",{className:x},n))}));var E=Array.isArray(n)?n.join(""):n,k=null!=(t=null!=d?d:(0,f.Vo)(c))?t:u.defaultLanguage,N=(0,f.nZ)(E,s,k),Z=N.highlightLines,A=N.code;return r.createElement(h,(0,a.Z)({},i,{key:String(v),theme:y,code:A,language:null!=k?k:"text"}),(function(e){var t,n=e.className,o=e.style,i=e.tokens,s=e.getLineProps,m=e.getTokenProps;return r.createElement("div",{className:(0,l.Z)(L,c,(t={},t["language-"+k]=k&&!c.includes("language-"+k),t),f.kM.common.codeBlock)},b&&r.createElement("div",{style:o,className:C},b),r.createElement("div",{className:T,style:o},r.createElement("pre",{tabIndex:0,className:(0,l.Z)(n,O,"thin-scrollbar")},r.createElement("code",{className:x},i.map((function(e,t){1===e.length&&"\n"===e[0].content&&(e[0].content="");var n=s({line:e,key:t});return Z.includes(t)&&(n.className+=" docusaurus-highlight-code-line"),r.createElement("span",(0,a.Z)({key:t},n),e.map((function(e,t){return r.createElement("span",(0,a.Z)({key:t},m({token:e,key:t})))})),r.createElement("br",null))})))),r.createElement(_,{code:A})))}))}},4176:function(e,t,n){n.r(t),n.d(t,{default:function(){return Ne}});var a=n(7294),r=n(6010),l=n(7462),o=n(5999),i=n(9960);function c(e){var t=e.permalink,n=e.title,r=e.subLabel;return a.createElement(i.Z,{className:"pagination-nav__link",to:t},r&&a.createElement("div",{className:"pagination-nav__sublabel"},r),a.createElement("div",{className:"pagination-nav__label"},n))}function s(e){var t=e.previous,n=e.next;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},a.createElement("div",{className:"pagination-nav__item"},t&&a.createElement(c,(0,l.Z)({},t,{subLabel:a.createElement(o.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")}))),a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&a.createElement(c,(0,l.Z)({},n,{subLabel:a.createElement(o.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")}))))}var m=n(2263),d=n(5551),u=n(5979);var p={unreleased:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(o.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(o.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){var t=p[e.versionMetadata.banner];return a.createElement(t,e)}function g(e){var t=e.versionLabel,n=e.to,r=e.onClick;return a.createElement(o.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(i.Z,{to:n,onClick:r},a.createElement(o.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function h(e){var t,n=e.className,l=e.versionMetadata,o=(0,m.Z)().siteConfig.title,i=(0,d.gA)({failfast:!0}).pluginId,c=(0,u.J)(i).savePreferredVersionName,s=(0,d.Jo)(i),p=s.latestDocSuggestion,h=s.latestVersionSuggestion,f=null!=p?p:(t=h).docs.find((function(e){return e.id===t.mainDocId}));return a.createElement("div",{className:(0,r.Z)(n,u.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(v,{siteTitle:o,versionMetadata:l})),a.createElement("div",{className:"margin-top--md"},a.createElement(g,{versionLabel:h.label,to:f.path,onClick:function(){return c(h.name)}})))}function f(e){var t=e.className,n=(0,u.E6)();return n.banner?a.createElement(h,{className:t,versionMetadata:n}):null}function b(e){var t=e.className,n=(0,u.E6)();return n.badge?a.createElement("span",{className:(0,r.Z)(t,u.kM.docs.docVersionBadge,"badge badge--secondary")},a.createElement(o.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}function y(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt;return a.createElement(o.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function E(e){var t=e.lastUpdatedBy;return a.createElement(o.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function k(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt,r=e.lastUpdatedBy;return a.createElement("span",{className:u.kM.common.lastUpdated},a.createElement(o.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(y,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:r?a.createElement(E,{lastUpdatedBy:r}):""}},"Last updated{atDate}{byUser}"),!1)}var N=n(3366),Z="iconEdit_dcUD",_=["className"];function L(e){var t=e.className,n=(0,N.Z)(e,_);return a.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,r.Z)(Z,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function T(e){var t=e.editUrl;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.kM.common.editThisPage},a.createElement(L,null),a.createElement(o.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var C="tag_hD8n",O="tagRegular_D6E_",w="tagWithCount_i0QQ";function x(e){var t=e.permalink,n=e.name,l=e.count;return a.createElement(i.Z,{href:t,className:(0,r.Z)(C,l?w:O)},n,l&&a.createElement("span",null,l))}var A="tags_XVD_",U="tag_JSN8";function B(e){var t=e.tags;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(o.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,r.Z)(A,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,n=e.permalink;return a.createElement("li",{key:n,className:U},a.createElement(x,{name:t,permalink:n}))}))))}var P="lastUpdated_foO9";function M(e){return a.createElement("div",{className:(0,r.Z)(u.kM.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(B,e)))}function j(e){var t=e.editUrl,n=e.lastUpdatedAt,l=e.lastUpdatedBy,o=e.formattedLastUpdatedAt;return a.createElement("div",{className:(0,r.Z)(u.kM.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(T,{editUrl:t})),a.createElement("div",{className:(0,r.Z)("col",P)},(n||l)&&a.createElement(k,{lastUpdatedAt:n,formattedLastUpdatedAt:o,lastUpdatedBy:l})))}function S(e){var t=e.content.metadata,n=t.editUrl,l=t.lastUpdatedAt,o=t.formattedLastUpdatedAt,i=t.lastUpdatedBy,c=t.tags,s=c.length>0,m=!!(n||l||i);return s||m?a.createElement("footer",{className:(0,r.Z)(u.kM.docs.docFooter,"docusaurus-mt-lg")},s&&a.createElement(M,{tags:c}),m&&a.createElement(j,{editUrl:n,lastUpdatedAt:l,lastUpdatedBy:i,formattedLastUpdatedAt:o})):null}var D=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function H(e){var t=e.toc,n=e.className,r=e.linkClassName,l=e.isChild;return t.length?a.createElement("ul",{className:l?void 0:n},t.map((function(e){return a.createElement("li",{key:e.id},a.createElement("a",{href:"#"+e.id,className:null!=r?r:void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(H,{isChild:!0,toc:e.children,className:n,linkClassName:r}))}))):null}function I(e){var t=e.toc,n=e.className,r=void 0===n?"table-of-contents table-of-contents__left-border":n,o=e.linkClassName,i=void 0===o?"table-of-contents__link":o,c=e.linkActiveClassName,s=void 0===c?void 0:c,m=e.minHeadingLevel,d=e.maxHeadingLevel,p=(0,N.Z)(e,D),v=(0,u.LU)(),g=null!=m?m:v.tableOfContents.minHeadingLevel,h=null!=d?d:v.tableOfContents.maxHeadingLevel,f=(0,u.b9)({toc:t,minHeadingLevel:g,maxHeadingLevel:h}),b=(0,a.useMemo)((function(){if(i&&s)return{linkClassName:i,linkActiveClassName:s,minHeadingLevel:g,maxHeadingLevel:h}}),[i,s,g,h]);return(0,u.Si)(b),a.createElement(H,(0,l.Z)({toc:f,className:r,linkClassName:i},p))}var V="tableOfContents_cNA8",R=["className"];function F(e){var t=e.className,n=(0,N.Z)(e,R);return a.createElement("div",{className:(0,r.Z)(V,"thin-scrollbar",t)},a.createElement(I,(0,l.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}var z="tocCollapsible_jdIR",W="tocCollapsibleButton_Fzxq",X="tocCollapsibleContent_MpvI",J="tocCollapsibleExpanded_laf4";function Q(e){var t=e.toc,n=e.className,l=e.minHeadingLevel,i=e.maxHeadingLevel,c=(0,u.uR)({initialState:!0}),s=c.collapsed,m=c.toggleCollapsed;return a.createElement("div",{className:(0,r.Z)(z,!s&&J,n)},a.createElement("button",{type:"button",className:(0,r.Z)("clean-btn",W),onClick:m},a.createElement(o.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),a.createElement(u.zF,{lazy:!0,className:X,collapsed:s},a.createElement(I,{toc:t,minHeadingLevel:l,maxHeadingLevel:i})))}var q="anchorWithStickyNavbar_mojV",G="anchorWithHideOnScrollNavbar_R0VQ",K=["as","id"],Y=["as"];function $(e){var t=e.as,n=e.id,i=(0,N.Z)(e,K),c=(0,u.LU)().navbar.hideOnScroll;return n?a.createElement(t,(0,l.Z)({},i,{className:(0,r.Z)("anchor",c?G:q),id:n}),i.children,a.createElement("a",{className:"hash-link",href:"#"+n,title:(0,o.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):a.createElement(t,i)}function ee(e){var t=e.as,n=(0,N.Z)(e,Y);return"h1"===t?a.createElement("h1",(0,l.Z)({},n,{id:void 0}),n.children):a.createElement($,(0,l.Z)({as:t},n))}var te="docItemContainer_vinB",ne="docItemCol_DM6M",ae="tocMobile_TmEX",re={breadcrumbsContainer:"breadcrumbsContainer_Xlws"},le=n(4996);function oe(e){var t=e.children,n=e.href,r="breadcrumbs__link";return n?a.createElement(i.Z,{className:r,href:n,itemProp:"item"},a.createElement("span",{itemProp:"name"},t)):a.createElement("span",{className:r,itemProp:"item name"},t)}function ie(e){var t=e.children,n=e.active,l=e.index;return a.createElement("li",{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem",className:(0,r.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})},t,a.createElement("meta",{itemProp:"position",content:String(l+1)}))}function ce(){var e=(0,le.Z)("/");return a.createElement("li",{className:"breadcrumbs__item"},a.createElement(i.Z,{className:(0,r.Z)("breadcrumbs__link",re.breadcrumbsItemLink),href:e},"\ud83c\udfe0"))}function se(){var e=(0,u.s1)(),t=(0,u.Ns)();return e?a.createElement("nav",{className:(0,r.Z)(u.kM.docs.docBreadcrumbs,re.breadcrumbsContainer),"aria-label":"breadcrumbs"},a.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&a.createElement(ce,null),e.map((function(t,n){return a.createElement(ie,{key:n,active:n===e.length-1,index:n},a.createElement(oe,{href:n<e.length-1?t.href:void 0},t.label))})))):null}var me=n(3905),de=n(5742),ue=["mdxType","originalType"];var pe=n(8066);var ve="details_BAp3";function ge(e){var t=Object.assign({},e);return a.createElement(u.PO,(0,l.Z)({},t,{className:(0,r.Z)("alert alert--info",ve,t.className)}))}function he(e){return a.createElement(ee,e)}var fe="img_E7b_";var be={head:function(e){var t=a.Children.map(e.children,(function(e){return function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){var r=e.props,l=(r.mdxType,r.originalType,(0,N.Z)(r,ue));return a.createElement(e.props.originalType,l)}return e}(e)}));return a.createElement(de.Z,e,t)},code:function(e){var t=["a","b","big","i","span","em","strong","sup","sub","small"];return a.Children.toArray(e.children).every((function(e){return"string"==typeof e&&!e.includes("\n")||(0,a.isValidElement)(e)&&t.includes(e.props.mdxType)}))?a.createElement("code",e):a.createElement(pe.Z,e)},a:function(e){return a.createElement(i.Z,e)},pre:function(e){var t;return a.createElement(pe.Z,(0,a.isValidElement)(e.children)&&"code"===e.children.props.originalType?null==(t=e.children)?void 0:t.props:Object.assign({},e))},details:function(e){var t=a.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),r=a.createElement(a.Fragment,null,t.filter((function(e){return e!==n})));return a.createElement(ge,(0,l.Z)({},e,{summary:n}),r)},ul:function(e){return a.createElement("ul",(0,l.Z)({},e,{className:(t=e.className,(0,r.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&"contains-task-list_tsSF"))}));var t},img:function(e){return a.createElement("img",(0,l.Z)({loading:"lazy"},e,{className:(t=e.className,(0,r.Z)(t,fe))}));var t},h1:function(e){return a.createElement(he,(0,l.Z)({as:"h1"},e))},h2:function(e){return a.createElement(he,(0,l.Z)({as:"h2"},e))},h3:function(e){return a.createElement(he,(0,l.Z)({as:"h3"},e))},h4:function(e){return a.createElement(he,(0,l.Z)({as:"h4"},e))},h5:function(e){return a.createElement(he,(0,l.Z)({as:"h5"},e))},h6:function(e){return a.createElement(he,(0,l.Z)({as:"h6"},e))}};function ye(e){var t=e.children;return a.createElement(me.Zo,{components:be},t)}function Ee(e){var t,n=e.content,r=n.metadata,l=n.frontMatter,o=n.assets,i=l.keywords,c=r.description,s=r.title,m=null!=(t=o.image)?t:l.image;return a.createElement(u.d,{title:s,description:c,keywords:i,image:m})}function ke(e){var t=e.content,n=t.metadata,l=t.frontMatter,o=l.hide_title,i=l.hide_table_of_contents,c=l.toc_min_heading_level,m=l.toc_max_heading_level,d=n.title,p=!o&&void 0===t.contentTitle,v=(0,u.iP)(),g=!i&&t.toc&&t.toc.length>0,h=g&&("desktop"===v||"ssr"===v);return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,r.Z)("col",!i&&ne)},a.createElement(f,null),a.createElement("div",{className:te},a.createElement("article",null,a.createElement(se,null),a.createElement(b,null),g&&a.createElement(Q,{toc:t.toc,minHeadingLevel:c,maxHeadingLevel:m,className:(0,r.Z)(u.kM.docs.docTocMobile,ae)}),a.createElement("div",{className:(0,r.Z)(u.kM.docs.docMarkdown,"markdown")},p&&a.createElement("header",null,a.createElement(ee,{as:"h1"},d)),a.createElement(ye,null,a.createElement(t,null))),a.createElement(S,e)),a.createElement(s,{previous:n.previous,next:n.next}))),h&&a.createElement("div",{className:"col col--3"},a.createElement(F,{toc:t.toc,minHeadingLevel:c,maxHeadingLevel:m,className:u.kM.docs.docTocDesktop})))}function Ne(e){var t="docs-doc-id-"+e.content.metadata.unversionedId;return a.createElement(u.FG,{className:t},a.createElement(Ee,e),a.createElement(ke,e))}}}]);