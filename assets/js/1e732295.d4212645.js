"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[413],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(r),f=o,m=p["".concat(s,".").concat(f)]||p[f]||u[f]||a;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6535:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],c={sidebar_position:3,description:"Django CMS and Divio"},s="CMS Part",l={unversionedId:"ProjectReview/cms",id:"ProjectReview/cms",title:"CMS Part",description:"Django CMS and Divio",source:"@site/docs/ProjectReview/cms.md",sourceDirName:"ProjectReview",slug:"/ProjectReview/cms",permalink:"/docs/ProjectReview/cms",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"Django CMS and Divio"},sidebar:"docs",previous:{title:"Front End Related",permalink:"/docs/ProjectReview/front-end-related"},next:{title:"Deploy and Cloud",permalink:"/docs/ProjectReview/deploy"}},d={},u=[],p={toc:u};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cms-part"},"CMS Part"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Django CMS has build-in admin page and permission system, and can intergrate Front-end enverionment for preview(currently native JS CSS and gulp, we can also use react, scss, webpack and so on as I tested). We write addon including model.py that generate SQL to update postgreSQL, and admin.py to edit CMS management page, and app.py for specific bussiness logic. Addons are small features that can be set to certain type articles, publisher can choose and edit them, for example, a sticky-footer addon can be used on common articles, after publisher edit and deploy content, django CMS will stored them to database follow model.py parttern, and then all data stored will be generate to a XML formated as setting and set to back-end.   "),(0,a.kt)("li",{parentName:"ul"},"We use docker to provide container service and doing packge through conmand docker-compose build, which will generate init.py. Divio cloud will take all package job, and all static resource like image will be intercepted after publisher deplopy articles, they will be sent to AWS target site for CDN. We also use rabbitMQ since we have several server(actually four), and add job like edit articles might be duplicated. We set up different CMS sites for each country, for common articles, they are stored in master site. Currently we use Urban Deploy and as metioned, static resource will be sent to AWS(will have cache issue) while others are updated to Back-end database.")))}f.isMDXComponent=!0}}]);