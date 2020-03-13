(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{102:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return o})),t.d(r,"rightToc",(function(){return a})),t.d(r,"default",(function(){return c}));var l=t(1),n=(t(0),t(109));const i={id:"border-width",title:"Border Width",sidebar_label:"Border Width"},o={id:"border-width",title:"Border Width",description:"Utilities for controlling the width of an element's borders.",source:"@site/docs/border-width.md",permalink:"/littlegiant/docs/border-width",editUrl:"https://github.com/ClearTax/littlegiant/edit/master/docs/docs/border-width.md",sidebar_label:"Border Width",sidebar:"docs",previous:{title:"Border Radius",permalink:"/littlegiant/docs/border-radius"}},a=[],d={rightToc:a};function c({components:e,...r}){return Object(n.b)("wrapper",Object(l.a)({},d,r,{components:e,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Utilities for controlling the width of an element's borders."),Object(n.b)("pre",null,Object(n.b)("code",Object(l.a)({parentName:"pre"},{className:"language-html",metastring:"live",live:!0}),'<>\n  <div class="lil-flex">\n    <div class="lil-border-sm lil-w-3/12 lil-m-2  lil-p-2 lil-bg-green-100">sm - 1px</div>\n    <div class="lil-border-md lil-w-3/12 lil-m-2  lil-p-2 lil-bg-green-100">md - 2px</div>\n    <div class="lil-border-lg lil-w-3/12 lil-m-2  lil-p-2 lil-bg-green-100">lg - 3px</div>\n    <div class="lil-border-xl lil-w-3/12 lil-m-2  lil-p-2 lil-bg-green-100">xl - 4px</div>\n  </div>\n</>\n')),Object(n.b)("p",null,"Border widths can also be applied to individual side by following the convention ",Object(n.b)("inlineCode",{parentName:"p"},"lil-border-{t|b|l|r}-{size}")),Object(n.b)("pre",null,Object(n.b)("code",Object(l.a)({parentName:"pre"},{className:"language-html",metastring:"live",live:!0}),'<>\n  <div class="lil-flex">\n    <div class="lil-border-t-md lil-w-3/12 lil-m-2  lil-p-2 lil-bg-green-100">top border</div>\n    <div class="lil-border-b-md lil-w-3/12 lil-m-2  lil-p-2 lil-bg-green-100">border bottom</div>\n    <div class="lil-border-l-md lil-w-3/12 lil-m-2  lil-p-2 lil-bg-green-100">left border</div>\n    <div class="lil-border-r-md lil-w-3/12 lil-m-2  lil-p-2 lil-bg-green-100">right border</div>\n  </div>\n</>\n')))}c.isMDXComponent=!0},109:function(e,r,t){"use strict";t.d(r,"a",(function(){return b})),t.d(r,"b",(function(){return m}));var l=t(0),n=t.n(l);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);r&&(l=l.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,l)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r){if(null==e)return{};var t,l,n=function(e,r){if(null==e)return{};var t,l,n={},i=Object.keys(e);for(l=0;l<i.length;l++)t=i[l],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)t=i[l],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=n.a.createContext({}),s=function(e){var r=n.a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a({},r,{},e)),t},b=function(e){var r=s(e.components);return n.a.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.a.createElement(n.a.Fragment,{},r)}},u=Object(l.forwardRef)((function(e,r){var t=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),b=s(t),u=l,m=b["".concat(o,".").concat(u)]||b[u]||p[u]||i;return t?n.a.createElement(m,a({ref:r},c,{components:t})):n.a.createElement(m,a({ref:r},c))}));function m(e,r){var t=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var i=t.length,o=new Array(i);o[0]=u;var a={};for(var d in r)hasOwnProperty.call(r,d)&&(a[d]=r[d]);a.originalType=e,a.mdxType="string"==typeof e?e:l,o[1]=a;for(var c=2;c<i;c++)o[c]=t[c];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);