"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8592],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),m=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=m(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=m(n),f=l,p=s["".concat(c,".").concat(f)]||s[f]||u[f]||a;return n?r.createElement(p,o(o({ref:t},d),{},{components:n})):r.createElement(p,o({ref:t},d))}));function p(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:l,o[1]=i;for(var m=2;m<a;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3612:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(7294),l=n(6010),a=n(5281),o=n(5999);const i={admonition:"admonition_LlT9",admonitionHeading:"admonitionHeading_tbUL",admonitionIcon:"admonitionIcon_kALy",admonitionContent:"admonitionContent_S0QG"};const c={note:{infimaClassName:"secondary",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:r.createElement(o.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:r.createElement(o.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:r.createElement(o.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:r.createElement(o.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 16 16"},r.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:r.createElement(o.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},m={secondary:"note",important:"info",success:"tip",warning:"danger"};function d(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=r.Children.toArray(e),n=t.find((e=>r.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),l=r.createElement(r.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:l}}(e.children);return{...e,title:e.title??t,children:n}}function s(e){const{children:t,type:n,title:o,icon:s}=d(e),u=function(e){const t=m[e]??e,n=c[t];return n||(console.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),c.info)}(n),f=o??u.label,{iconComponent:p}=u,E=s??r.createElement(p,null);return r.createElement("div",{className:(0,l.Z)(a.k.common.admonition,a.k.common.admonitionType(e.type),"alert",`alert--${u.infimaClassName}`,i.admonition)},r.createElement("div",{className:i.admonitionHeading},r.createElement("span",{className:i.admonitionIcon},E),f),r.createElement("div",{className:i.admonitionContent},t))}},2463:(e,t,n)=>{n.d(t,{RL:()=>k,dn:()=>x,nU:()=>O,nM:()=>T,p4:()=>R,CW:()=>N,DJ:()=>P});var r=n(7294),l=n(3612);const a="entryField_LQuR",o="name_R6gP",i="header_odoB";var c=n(2949);const m={badge:"badge_JMXK"};function d(e){let{name:t,color:n}=e;const l="dark"===(0,c.I)().colorMode,a=l?`${n}CC`:`${n}44`,o=l?"white":n;return r.createElement("span",{style:{backgroundColor:a,color:o},className:m.badge},t)}var s=n(9960);const u=()=>r.createElement(d,{name:"Required",color:"#ff3838"}),f=()=>r.createElement(d,{name:"Inherited",color:"#a83dff"}),p=()=>r.createElement(d,{name:"Optional",color:"#3191f7"}),E=()=>r.createElement(d,{name:"List",color:"#20bf7c"}),h=()=>r.createElement(d,{name:"Deprecated",color:"#fa9d2a"}),g=()=>r.createElement(d,{name:"Colored",color:"#ff8e42"}),b=()=>r.createElement(d,{name:"Multi-Line",color:"#b39e00"}),v=()=>r.createElement(d,{name:"Regex",color:"#f731d6"}),y=()=>r.createElement(d,{name:"Placeholders",color:"#00b300"}),C=()=>r.createElement(d,{name:"Reference",color:"#b21fde"}),w=()=>r.createElement(d,{name:"Segment",color:"#1fde99"}),O=e=>r.createElement("div",{className:a},r.createElement("div",{className:i},r.createElement("h2",{className:o},e.name),e.required&&r.createElement(u,null),e.inherited&&r.createElement(f,null),e.optional&&r.createElement(p,null),e.multiple&&r.createElement(E,null),e.deprecated&&r.createElement(h,null),e.colored&&r.createElement(g,null),e.multiline&&r.createElement(b,null),e.regex&&r.createElement(v,null),e.placeholders&&r.createElement(y,null),e.reference&&r.createElement(C,null),e.segment&&r.createElement(w,null)),r.createElement("div",{className:""},e.children,e.colored&&r.createElement(M,null),e.regex&&r.createElement(z,null),e.placeholders&&r.createElement(A,null),e.duration&&r.createElement(j,null),e.segment&&r.createElement(S,null))),x=()=>r.createElement(O,{name:"Criteria",inherited:!0,multiple:!0},"A list of facts that must be met by the player before this entry can be triggered."),T=()=>r.createElement(O,{name:"Modifiers",inherited:!0,multiple:!0},"A list of facts that will be modified for the player when this entry is triggered."),P=()=>r.createElement(O,{name:"Triggers",inherited:!0,multiple:!0},"A list of entries that will be triggered after this entry is triggered."),N=()=>r.createElement(O,{name:"Speaker",inherited:!0},"A reference to a speaker that will be used."),k=()=>r.createElement(O,{name:"Comment",optional:!0,inherited:!0},"A comment to keep track of what this fact is used for."),M=()=>r.createElement("div",null,r.createElement("br",null),"Colors and formatting from the"," ",r.createElement(s.Z,{to:"https://docs.advntr.dev/minimessage/format.html"},r.createElement("code",null,"MiniMessage Adventure Api"))," ","can be used. So for example, you can use ",r.createElement("code",null,"<red>Some Text</red>")," for red text."),A=()=>r.createElement("div",null,r.createElement("br",null),"Placeholders from the"," ",r.createElement(s.Z,{to:"https://github.com/PlaceholderAPI/PlaceholderAPI/wiki"},r.createElement("code",null,"PlaceholderApi"))," ","can be used. So for example, you can use ",r.createElement("code",null,"%player_name%")," for the player name."),j=()=>r.createElement("div",null,r.createElement("br",null),"Durations can be specified in the following format: ",r.createElement("code",null,"1d 2h 3m 4s"),". The following units are supported: ",r.createElement("code",null,"d")," for days, ",r.createElement("code",null,"h")," for hours,",r.createElement("code",null,"m")," for minutes and ",r.createElement("code",null,"s")," for seconds."),z=()=>r.createElement("div",null,r.createElement("br",null),r.createElement(s.Z,{to:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions"},r.createElement("code",null,"Regular expressions"))," ","can be used to match a pattern. For example, ",r.createElement("code",null,"^.*$")," will match any string."),R=()=>r.createElement("div",null,r.createElement("br",null),"This fact can only be ",r.createElement("b",null,"read"),", not written to. Hence, it is only suitable for criteria."),S=()=>r.createElement("div",null,r.createElement("br",null),"Segments are time frames in a cinematic. During a segment can take actions or display information.",r.createElement("br",null),r.createElement(l.Z,{type:"info"},"Segments cannot overlap. If you need overlapping segments, create a new entry."))}}]);