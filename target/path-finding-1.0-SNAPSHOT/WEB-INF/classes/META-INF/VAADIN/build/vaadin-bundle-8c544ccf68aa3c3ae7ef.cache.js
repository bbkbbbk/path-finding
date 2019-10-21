!function(e){var t={};function i(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(n,s,function(t){return e[t]}.bind(null,s));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=21)}({11:function(e,t,i){"use strict";t.a=".wall{\n    animation-name: wallAnimation;\n    animation-duration: 0.4s;\n    animation-timing-function: ease-out;\n    animation-delay: 0ms;\n    animation-direction: alternate;\n    animation-iteration-count: 1;\n    animation-fill-mode: forwards;\n    animation-play-state: running;\n    border: 1px solid rgb(12, 53, 71);\n}\n\n@keyframes wallAnimation {\n    0% {\n        transform: scale(.3);\n        background-color: rgb(12, 53, 71);\n    }\n\n    50% {\n        transform: scale(1.2);\n        background-color: rgb(12, 53, 71);\n    }\n\n    100% {\n        transform: scale(1.0);\n        background-color: rgb(12, 53, 71);\n        border: 1px solid rgb(12, 53, 71);\n    }\n}\n\n.unvisited {\n    background: white;\n    border: 1px solid rgb(175, 216, 248);\n}\n\n.visited {\n    background: lightgreen;\n    border: 1px solid rgb(175, 216, 248);\n}\n\n.shadow {\n    background: rgb(175, 216, 248);\n    border: 1px solid rgb(175, 216, 248);\n}\n\n.start {\n    background: yellow;\n    border: 1px solid rgb(175, 216, 248);\n}\n\n.target {\n    background: red;\n    border: 1px solid rgb(175, 216, 248);\n}\n\n.blue {\n    background: deepskyblue;\n    border: 1px solid rgb(175, 216, 248);\n}\n/*.unvisited:active:hover {*/\n/*    background: orange;*/\n/*}*/"},13:function(e,t){window.Vaadin.Flow.Legacy=window.Vaadin.Flow.Legacy||{},window.Vaadin.Flow.comboBoxConnector={initLazy:function(e){if(e.$connector)return;if(window.Polymer)window.Vaadin.Flow.Legacy.Debouncer=window.Vaadin.Flow.Legacy.Debouncer||Polymer.Debouncer,window.Vaadin.Flow.Legacy.timeOut=window.Vaadin.Flow.Legacy.timeOut||Polymer.Async.timeOut;else if(!window.Vaadin.Flow.Legacy.Debouncer)return void console.log("ComboBox is unable to load Polymer helpers.");const t=window.Vaadin.Flow.Legacy.Debouncer,i=window.Vaadin.Flow.Legacy.timeOut;e.$connector={};let n={},s={},o="";const r=new Vaadin.ComboBoxPlaceholder,a=Math.max(2*e.pageSize,500);let l;const d=(t=Object.keys(n))=>{t.forEach(t=>{n[t]([],e.size),delete n[t];const i=parseInt(t)*e.pageSize,s=i+e.pageSize;for(let t=i;t<s;t++)t<e.filteredItems.length&&(e.filteredItems[t]=r)})};e.dataProvider=function(r,c){if(r.pageSize!=e.pageSize)throw"Invalid pageSize";if(e._clientSideFilter){if(s[0])return void _(s[0],c);r.filter=""}if(r.filter!==o)return s={},o=r.filter,void(this._debouncer=t.debounce(this._debouncer,i.after(500),()=>{d(),e.clearCache(),""===r.filter&&e.$server.resetDataCommunicator()}));if(s[r.page])m(r.page,c);else{n[r.page]=c;const s=Object.keys(n).map(e=>parseInt(e)),o=Math.min(...s),h=Math.max(...s);if(s.length*r.pageSize>a)r.page===o?d([String(h)]):d([String(o)]),e.dataProvider(r,c);else if(h-o+1!==s.length)d();else{const n=r.pageSize*o,s=r.pageSize*(h+1)-n;l=()=>e.$server.setRequestedRange(n,s,r.filter),this._debouncer&&this._debouncer.isActive()||(l(),l=null),this._debouncer=t.debounce(this._debouncer,i.after(200),()=>l&&l())}}},e.$connector.filter=function(t,i){return i=i?i.toString().toLowerCase():"",e._getItemLabel(t).toString().toLowerCase().indexOf(i)>-1},e.$connector.set=function(t,i,r){if(r!=o)return;if(t%e.pageSize!=0)throw"Got new data to index "+t+" which is not aligned with the page size of "+e.pageSize;if(0===t&&0===i.length&&n[0])return void(s[0]=[]);const a=t/e.pageSize,l=Math.ceil(i.length/e.pageSize);for(let t=0;t<l;t++){let n=a+t,o=i.slice(t*e.pageSize,(t+1)*e.pageSize);s[n]=o}},e.$connector.updateData=function(t){for(let i=0;i<t.length;i++){let n=t[i];for(let t=0;t<e.filteredItems.length;t++)if(e.filteredItems[t].key===n.key){e.set("filteredItems."+t,n);break}}},e.$connector.updateSize=function(t){e._clientSideFilter||(e.size=t)},e.$connector.reset=function(){d(),s={},e.clearCache()},e.$connector.confirm=function(t,i){if(i!=o)return;let r=Object.getOwnPropertyNames(n);for(let e=0;e<r.length;e++){let t=r[e];s[t]&&m(t,n[t])}e.$server.confirmUpdate(t),e.selectedItem&&e._selectedKey&&(e.value=e.selectedItem.key=e._selectedKey)},e.$connector.enableClientValidation=function(t){let i=null;e.$&&(i=e.$.input),i?t?(p(e),u(i)):(c(e),h(i,e)):setTimeout((function(){e.$connector.enableClientValidation(t)}),10)};const c=function(e){void 0===e.$checkValidity&&(e.$checkValidity=e.checkValidity,e.checkValidity=function(){return!0}),void 0===e.$validate&&(e.$validate=e.validate,e.validate=function(){return!0})},h=function(e,t){void 0===e.$checkValidity&&(e.$checkValidity=e.checkValidity,e.checkValidity=function(){return!t.invalid})},u=function(e){e.$checkValidity&&(e.checkValidity=e.$checkValidity,delete e.$checkValidity)},p=function(e){e.$checkValidity&&(e.checkValidity=e.$checkValidity,delete e.$checkValidity),e.$validate&&(e.validate=e.$validate,delete e.$validate)},m=function(t,i){let n=s[t];e._clientSideFilter?_(n,i):(delete s[t],i(n,e.size))},_=function(t,i){let n=t;e.filter&&(n=t.filter(t=>e.$connector.filter(t,e.filter))),i(n,n.length)};e.addEventListener("opened-changed",t=>t.detail.value&&(e.$.overlay._selector._manageFocus=()=>{})),e.addEventListener("custom-value-set",e=>e.preventDefault())}}},21:function(e,t,i){"use strict";i.r(t);var n=i(11);class s extends HTMLElement{static get version(){return"1.5.0"}}customElements.define("vaadin-lumo-styles",s);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let o,r=null,a=window.HTMLImports&&window.HTMLImports.whenReady||null;function l(e){requestAnimationFrame((function(){a?a(e):(r||(r=new Promise(e=>{o=e}),"complete"===document.readyState?o():document.addEventListener("readystatechange",()=>{"complete"===document.readyState&&o()})),r.then((function(){e&&e()})))}))}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const d="__seenByShadyCSS",c="__shadyCSSCachedStyle";let h=null,u=null;class p{constructor(){this.customStyles=[],this.enqueued=!1,l(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){!this.enqueued&&u&&(this.enqueued=!0,l(u))}addCustomStyle(e){e[d]||(e[d]=!0,this.customStyles.push(e),this.enqueueDocumentValidation())}getStyleForCustomStyle(e){if(e[c])return e[c];let t;return t=e.getStyle?e.getStyle():e}processStyles(){const e=this.customStyles;for(let t=0;t<e.length;t++){const i=e[t];if(i[c])continue;const n=this.getStyleForCustomStyle(i);if(n){const e=n.__appliedElement||n;h&&h(e),i[c]=e}}return e}}p.prototype.addCustomStyle=p.prototype.addCustomStyle,p.prototype.getStyleForCustomStyle=p.prototype.getStyleForCustomStyle,p.prototype.processStyles=p.prototype.processStyles,Object.defineProperties(p.prototype,{transformCallback:{get:()=>h,set(e){h=e}},validateCallback:{get:()=>u,set(e){let t=!1;u||(t=!0),u=e,t&&this.enqueueDocumentValidation()}}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const m=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,_=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,f=/@media\s(.*)/;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function y(e,t){for(let i in t)null===i?e.style.removeProperty(i):e.style.setProperty(i,t[i])}function g(e,t){const i=window.getComputedStyle(e).getPropertyValue(t);return i?i.trim():""}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const v=!(window.ShadyDOM&&window.ShadyDOM.inUse);let b,w;function x(e){b=(!e||!e.shimcssproperties)&&(v||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(w=window.ShadyCSS.cssBuild);const C=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?b=window.ShadyCSS.nativeCss:window.ShadyCSS?(x(window.ShadyCSS),window.ShadyCSS=void 0):x(window.WebComponents&&window.WebComponents.flags);const S=b,I=new p;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.ShadyCSS||(window.ShadyCSS={prepareTemplate(e,t,i){},prepareTemplateDom(e,t){},prepareTemplateStyles(e,t,i){},styleSubtree(e,t){I.processStyles(),y(e,t)},styleElement(e){I.processStyles()},styleDocument(e){I.processStyles(),y(document.body,e)},getComputedStyleValue:(e,t)=>g(e,t),flushCustomStyles(){},nativeCss:S,nativeShadow:v,cssBuild:w,disableRuntime:C}),window.ShadyCSS.CustomStyleInterface=I,
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
window.JSCompiler_renameProperty=function(e,t){return e};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let P,E,A=/(url\()([^)]*)(\))/g,T=/(^\/)|(^#)|(^[\w-\d]*:)/;function k(e,t){if(e&&T.test(e))return e;if(void 0===P){P=!1;try{const e=new URL("b","http://a");e.pathname="c%20d",P="http://a/c%20d"===e.href}catch(e){}}return t||(t=document.baseURI||window.location.href),P?new URL(e,t).href:(E||((E=document.implementation.createHTMLDocument("temp")).base=E.createElement("base"),E.head.appendChild(E.base),E.anchor=E.createElement("a"),E.body.appendChild(E.anchor)),E.base.href=t,E.anchor.href=e,E.anchor.href||e)}function z(e,t){return e.replace(A,(function(e,i,n,s){return i+"'"+k(n.replace(/["']/g,""),t)+"'"+s}))}function O(e){return e.substring(0,e.lastIndexOf("/")+1)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const L=!window.ShadyDOM;Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss),window.customElements.polyfillWrapFlushCallback;let N=O(document.baseURI||window.location.href);let R=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;let M=!1;let V=!1;let F=!1;let D=!1;let B=!1;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let H={},$={};function j(e,t){H[e]=$[e.toLowerCase()]=t}function q(e){return H[e]||$[e.toLowerCase()]}class Y extends HTMLElement{static get observedAttributes(){return["id"]}static import(e,t){if(e){let i=q(e);return i&&t?i.querySelector(t):i}return null}attributeChangedCallback(e,t,i,n){t!==i&&this.register()}get assetpath(){if(!this.__assetpath){const e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,t=k(this.getAttribute("assetpath")||"",e.baseURI);this.__assetpath=O(t)}return this.__assetpath}register(e){if(e=e||this.id){if(V&&void 0!==q(e))throw j(e,null),new Error(`strictTemplatePolicy: dom-module ${e} re-registered`);this.id=e,j(e,this),(t=this).querySelector("style")&&console.warn("dom-module %s has style outside template",t.id)}var t}}Y.prototype.modules=H,customElements.define("dom-module",Y);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const U="link[rel=import][type~=css]",W="include",G="shady-unscoped";function K(e){return Y.import(e)}function J(e){const t=z((e.body?e.body:e).textContent,e.baseURI),i=document.createElement("style");return i.textContent=t,i}function X(e){const t=e.trim().split(/\s+/),i=[];for(let e=0;e<t.length;e++)i.push(...Z(t[e]));return i}function Z(e){const t=K(e);if(!t)return console.warn("Could not find style data in module named",e),[];if(void 0===t._styles){const e=[];e.push(...ee(t));const i=t.querySelector("template");i&&e.push(...Q(i,t.assetpath)),t._styles=e}return t._styles}function Q(e,t){if(!e._styles){const i=[],n=e.content.querySelectorAll("style");for(let e=0;e<n.length;e++){let s=n[e],o=s.getAttribute(W);o&&i.push(...X(o).filter((function(e,t,i){return i.indexOf(e)===t}))),t&&(s.textContent=z(s.textContent,t)),i.push(s)}e._styles=i}return e._styles}function ee(e){const t=[],i=e.querySelectorAll(U);for(let e=0;e<i.length;e++){let n=i[e];if(n.import){const e=n.import,i=n.hasAttribute(G);if(i&&!e._unscopedStyle){const t=J(e);t.setAttribute(G,""),e._unscopedStyle=t}else e._style||(e._style=J(e));t.push(i?e._unscopedStyle:e._style)}}return t}function te(e){let t=K(e);if(t&&void 0===t._cssText){let e=ie(t),i=t.querySelector("template");i&&(e+=function(e,t){let i="";const n=Q(e,t);for(let e=0;e<n.length;e++){let t=n[e];t.parentNode&&t.parentNode.removeChild(t),i+=t.textContent}return i}(i,t.assetpath)),t._cssText=e||null}return t||console.warn("Could not find style data in module named",e),t&&t._cssText||""}function ie(e){let t="",i=ee(e);for(let e=0;e<i.length;e++)t+=i[e].textContent;return t}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ne="include",se=window.ShadyCSS.CustomStyleInterface;class oe extends HTMLElement{constructor(){super(),this._style=null,se.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const e=this.querySelector("style");if(!e)return null;this._style=e;const t=e.getAttribute(ne);return t&&(e.removeAttribute(ne),e.textContent=function(e){let t=e.trim().split(/\s+/),i="";for(let e=0;e<t.length;e++)i+=te(t[e]);return i}(t)+e.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}window.customElements.define("custom-style",oe);const re=document.createElement("template");re.innerHTML='<custom-style>\n  <style>\n    html {\n      /* Base (background) */\n      --lumo-base-color: #FFF;\n\n      /* Tint */\n      --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);\n      --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);\n      --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);\n      --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);\n      --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);\n      --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);\n      --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);\n      --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);\n      --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);\n      --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);\n      --lumo-tint: #FFF;\n\n      /* Shade */\n      --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);\n      --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);\n      --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);\n      --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);\n      --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);\n      --lumo-shade-50pct: hsla(214, 45%, 20%, 0.5);\n      --lumo-shade-60pct: hsla(214, 43%, 19%, 0.61);\n      --lumo-shade-70pct: hsla(214, 42%, 18%, 0.72);\n      --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);\n      --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);\n      --lumo-shade: hsl(214, 35%, 15%);\n\n      /* Contrast */\n      --lumo-contrast-5pct: var(--lumo-shade-5pct);\n      --lumo-contrast-10pct: var(--lumo-shade-10pct);\n      --lumo-contrast-20pct: var(--lumo-shade-20pct);\n      --lumo-contrast-30pct: var(--lumo-shade-30pct);\n      --lumo-contrast-40pct: var(--lumo-shade-40pct);\n      --lumo-contrast-50pct: var(--lumo-shade-50pct);\n      --lumo-contrast-60pct: var(--lumo-shade-60pct);\n      --lumo-contrast-70pct: var(--lumo-shade-70pct);\n      --lumo-contrast-80pct: var(--lumo-shade-80pct);\n      --lumo-contrast-90pct: var(--lumo-shade-90pct);\n      --lumo-contrast: var(--lumo-shade);\n\n      /* Text */\n      --lumo-header-text-color: var(--lumo-contrast);\n      --lumo-body-text-color: var(--lumo-contrast-90pct);\n      --lumo-secondary-text-color: var(--lumo-contrast-70pct);\n      --lumo-tertiary-text-color: var(--lumo-contrast-50pct);\n      --lumo-disabled-text-color: var(--lumo-contrast-30pct);\n\n      /* Primary */\n      --lumo-primary-color: hsl(214, 90%, 52%);\n      --lumo-primary-color-50pct: hsla(214, 90%, 52%, 0.5);\n      --lumo-primary-color-10pct: hsla(214, 90%, 52%, 0.1);\n      --lumo-primary-text-color: var(--lumo-primary-color);\n      --lumo-primary-contrast-color: #FFF;\n\n      /* Error */\n      --lumo-error-color: hsl(3, 100%, 61%);\n      --lumo-error-color-50pct: hsla(3, 100%, 60%, 0.5);\n      --lumo-error-color-10pct: hsla(3, 100%, 60%, 0.1);\n      --lumo-error-text-color: hsl(3, 92%, 53%);\n      --lumo-error-contrast-color: #FFF;\n\n      /* Success */\n      --lumo-success-color: hsl(145, 80%, 42%); /* hsl(144,82%,37%); */\n      --lumo-success-color-50pct: hsla(145, 76%, 44%, 0.55);\n      --lumo-success-color-10pct: hsla(145, 76%, 44%, 0.12);\n      --lumo-success-text-color: hsl(145, 100%, 32%);\n      --lumo-success-contrast-color: #FFF;\n    }\n  </style>\n</custom-style><dom-module id="lumo-color">\n  <template>\n    <style>\n      [theme~="dark"] {\n        /* Base (background) */\n        --lumo-base-color: hsl(214, 35%, 21%);\n\n        /* Tint */\n        --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);\n        --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);\n        --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);\n        --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);\n        --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);\n        --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);\n        --lumo-tint-60pct: hsla(214, 82%, 90%, 0.6);\n        --lumo-tint-70pct: hsla(214, 87%, 92%, 0.7);\n        --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);\n        --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);\n        --lumo-tint: hsl(214, 100%, 98%);\n\n        /* Shade */\n        --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);\n        --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);\n        --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);\n        --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);\n        --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);\n        --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);\n        --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);\n        --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);\n        --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);\n        --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);\n        --lumo-shade: hsl(214, 33%, 13%);\n\n        /* Contrast */\n        --lumo-contrast-5pct: var(--lumo-tint-5pct);\n        --lumo-contrast-10pct: var(--lumo-tint-10pct);\n        --lumo-contrast-20pct: var(--lumo-tint-20pct);\n        --lumo-contrast-30pct: var(--lumo-tint-30pct);\n        --lumo-contrast-40pct: var(--lumo-tint-40pct);\n        --lumo-contrast-50pct: var(--lumo-tint-50pct);\n        --lumo-contrast-60pct: var(--lumo-tint-60pct);\n        --lumo-contrast-70pct: var(--lumo-tint-70pct);\n        --lumo-contrast-80pct: var(--lumo-tint-80pct);\n        --lumo-contrast-90pct: var(--lumo-tint-90pct);\n        --lumo-contrast: var(--lumo-tint);\n\n        /* Text */\n        --lumo-header-text-color: var(--lumo-contrast);\n        --lumo-body-text-color: var(--lumo-contrast-90pct);\n        --lumo-secondary-text-color: var(--lumo-contrast-70pct);\n        --lumo-tertiary-text-color: var(--lumo-contrast-50pct);\n        --lumo-disabled-text-color: var(--lumo-contrast-30pct);\n\n        /* Primary */\n        --lumo-primary-color: hsl(214, 86%, 55%);\n        --lumo-primary-color-50pct: hsla(214, 86%, 55%, 0.5);\n        --lumo-primary-color-10pct: hsla(214, 90%, 63%, 0.1);\n        --lumo-primary-text-color: hsl(214, 100%, 70%);\n        --lumo-primary-contrast-color: #FFF;\n\n        /* Error */\n        --lumo-error-color: hsl(3, 90%, 63%);\n        --lumo-error-color-50pct: hsla(3, 90%, 63%, 0.5);\n        --lumo-error-color-10pct: hsla(3, 90%, 63%, 0.1);\n        --lumo-error-text-color: hsl(3, 100%, 67%);\n\n        /* Success */\n        --lumo-success-color: hsl(145, 65%, 42%);\n        --lumo-success-color-50pct: hsla(145, 65%, 42%, 0.5);\n        --lumo-success-color-10pct: hsla(145, 65%, 42%, 0.1);\n        --lumo-success-text-color: hsl(145, 85%, 47%);\n      }\n\n      html {\n        color: var(--lumo-body-text-color);\n        background-color: var(--lumo-base-color);\n      }\n\n      [theme~="dark"] {\n        color: var(--lumo-body-text-color);\n        background-color: var(--lumo-base-color);\n      }\n\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6 {\n        color: var(--lumo-header-text-color);\n      }\n\n      a {\n        color: var(--lumo-primary-text-color);\n      }\n\n      blockquote {\n        color: var(--lumo-secondary-text-color);\n      }\n\n      code,\n      pre {\n        background-color: var(--lumo-contrast-10pct);\n        border-radius: var(--lumo-border-radius-m);\n      }\n    </style>\n  </template>\n</dom-module><dom-module id="lumo-color-legacy">\n  <template>\n    <style include="lumo-color">\n      :host {\n        color: var(--lumo-body-text-color) !important;\n        background-color: var(--lumo-base-color) !important;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(re.content);const ae=document.createElement("template");ae.innerHTML='<custom-style>\n  <style>\n    html {\n      /* Font families */\n      --lumo-font-family: -apple-system, BlinkMacSystemFont, "Roboto", "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n\n      /* Font sizes */\n      --lumo-font-size-xxs: .75rem;\n      --lumo-font-size-xs: .8125rem;\n      --lumo-font-size-s: .875rem;\n      --lumo-font-size-m: 1rem;\n      --lumo-font-size-l: 1.125rem;\n      --lumo-font-size-xl: 1.375rem;\n      --lumo-font-size-xxl: 1.75rem;\n      --lumo-font-size-xxxl: 2.5rem;\n\n      /* Line heights */\n      --lumo-line-height-xs: 1.25;\n      --lumo-line-height-s: 1.375;\n      --lumo-line-height-m: 1.625;\n    }\n\n  </style>\n</custom-style><dom-module id="lumo-typography">\n  <template>\n    <style>\n      html {\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size, var(--lumo-font-size-m));\n        line-height: var(--lumo-line-height-m);\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      /* Can’t combine with the above selector because that doesn’t work in browsers without native shadow dom */\n      :host {\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size, var(--lumo-font-size-m));\n        line-height: var(--lumo-line-height-m);\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      small,\n      [theme~="font-size-s"] {\n        font-size: var(--lumo-font-size-s);\n        line-height: var(--lumo-line-height-s);\n      }\n\n      [theme~="font-size-xs"] {\n        font-size: var(--lumo-font-size-xs);\n        line-height: var(--lumo-line-height-xs);\n      }\n\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6 {\n        font-weight: 600;\n        line-height: var(--lumo-line-height-xs);\n        margin-top: 1.25em;\n      }\n\n      h1 {\n        font-size: var(--lumo-font-size-xxxl);\n        margin-bottom: 0.75em;\n      }\n\n      h2 {\n        font-size: var(--lumo-font-size-xxl);\n        margin-bottom: 0.5em;\n      }\n\n      h3 {\n        font-size: var(--lumo-font-size-xl);\n        margin-bottom: 0.5em;\n      }\n\n      h4 {\n        font-size: var(--lumo-font-size-l);\n        margin-bottom: 0.5em;\n      }\n\n      h5 {\n        font-size: var(--lumo-font-size-m);\n        margin-bottom: 0.25em;\n      }\n\n      h6 {\n        font-size: var(--lumo-font-size-xs);\n        margin-bottom: 0;\n        text-transform: uppercase;\n        letter-spacing: 0.03em;\n      }\n\n      p,\n      blockquote {\n        margin-top: 0.5em;\n        margin-bottom: 0.75em;\n      }\n\n      a {\n        text-decoration: none;\n      }\n\n      a:hover {\n        text-decoration: underline;\n      }\n\n      hr {\n        display: block;\n        align-self: stretch;\n        height: 1px;\n        border: 0;\n        padding: 0;\n        margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);\n        background-color: var(--lumo-contrast-10pct);\n      }\n\n      blockquote {\n        border-left: 2px solid var(--lumo-contrast-30pct);\n      }\n\n      b,\n      strong {\n        font-weight: 600;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(ae.content);const le=document.createElement("template");le.innerHTML="<custom-style>\n  <style>\n    html {\n      --lumo-size-xs: 1.625rem;\n      --lumo-size-s: 1.875rem;\n      --lumo-size-m: 2.25rem;\n      --lumo-size-l: 2.75rem;\n      --lumo-size-xl: 3.5rem;\n\n      /* Icons */\n      --lumo-icon-size-s: 1.25em;\n      --lumo-icon-size-m: 1.5em;\n      --lumo-icon-size-l: 2.25em;\n      /* For backwards compatibility */\n      --lumo-icon-size: var(--lumo-icon-size-m);\n    }\n  </style>\n</custom-style>",document.head.appendChild(le.content);const de=document.createElement("template");de.innerHTML="<custom-style>\n  <style>\n    html {\n      /* Square */\n      --lumo-space-xs: 0.25rem;\n      --lumo-space-s: 0.5rem;\n      --lumo-space-m: 1rem;\n      --lumo-space-l: 1.5rem;\n      --lumo-space-xl: 2.5rem;\n\n      /* Wide */\n      --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);\n      --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);\n      --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);\n      --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);\n      --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);\n\n      /* Tall */\n      --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);\n      --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);\n      --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);\n      --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);\n      --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);\n    }\n  </style>\n</custom-style>",document.head.appendChild(de.content);const ce=document.createElement("template");ce.innerHTML="<custom-style>\n  <style>\n    html {\n      /* Border radius */\n      --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */\n      --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */\n      --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */\n      --lumo-border-radius: 0.25em; /* Deprecated */\n\n      /* Shadow */\n      --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);\n      --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);\n      --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);\n      --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);\n      --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);\n\n      /* Clickable element cursor */\n      --lumo-clickable-cursor: default;\n    }\n  </style>\n</custom-style>",document.head.appendChild(ce.content);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class he{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function ue(e){return function e(t,i){let n=i.substring(t.start,t.end-1);t.parsedCssText=t.cssText=n.trim();if(t.parent){let e=t.previous?t.previous.end:t.parent.start;n=(n=(n=function(e){return e.replace(/\\([0-9a-f]{1,6})\s/gi,(function(){let e=arguments[1],t=6-e.length;for(;t--;)e="0"+e;return"\\"+e}))}(n=i.substring(e,t.start-1))).replace(ye.multipleSpaces," ")).substring(n.lastIndexOf(";")+1);let s=t.parsedSelector=t.selector=n.trim();t.atRule=0===s.indexOf(be),t.atRule?0===s.indexOf(ve)?t.type=me.MEDIA_RULE:s.match(ye.keyframesRule)&&(t.type=me.KEYFRAMES_RULE,t.keyframesName=t.selector.split(ye.multipleSpaces).pop()):0===s.indexOf(ge)?t.type=me.MIXIN_RULE:t.type=me.STYLE_RULE}let s=t.rules;if(s)for(let t,n=0,o=s.length;n<o&&(t=s[n]);n++)e(t,i);return t}(function(e){let t=new he;t.start=0,t.end=e.length;let i=t;for(let n=0,s=e.length;n<s;n++)if(e[n]===_e){i.rules||(i.rules=[]);let e=i,t=e.rules[e.rules.length-1]||null;(i=new he).start=n+1,i.parent=e,i.previous=t,e.rules.push(i)}else e[n]===fe&&(i.end=n+1,i=i.parent||t);return t}(e=e.replace(ye.comments,"").replace(ye.port,"")),e)}function pe(e,t,i=""){let n="";if(e.cssText||e.rules){let i=e.rules;if(i&&!function(e){let t=e[0];return Boolean(t)&&Boolean(t.selector)&&0===t.selector.indexOf(ge)}(i))for(let e,s=0,o=i.length;s<o&&(e=i[s]);s++)n=pe(e,t,n);else(n=(n=t?e.cssText:function(e){return function(e){return e.replace(ye.mixinApply,"").replace(ye.varApply,"")}(e=function(e){return e.replace(ye.customProp,"").replace(ye.mixinProp,"")}(e))}(e.cssText)).trim())&&(n="  "+n+"\n")}return n&&(e.selector&&(i+=e.selector+" "+_e+"\n"),i+=n,e.selector&&(i+=fe+"\n\n")),i}const me={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},_e="{",fe="}",ye={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},ge="--",ve="@media",be="@",we=new Set,xe="shady-unscoped";function Ce(e){const t=e.textContent;if(!we.has(t)){we.add(t);const i=e.cloneNode(!0);document.head.appendChild(i)}}function Se(e){return e.hasAttribute(xe)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Ie(e,t){return e?("string"==typeof e&&(e=ue(e)),t&&Ee(e,t),pe(e,S)):""}function Pe(e){return!e.__cssRules&&e.textContent&&(e.__cssRules=ue(e.textContent)),e.__cssRules||null}function Ee(e,t,i,n){if(!e)return;let s=!1,o=e.type;if(n&&o===me.MEDIA_RULE){let t=e.selector.match(f);t&&(window.matchMedia(t[1]).matches||(s=!0))}o===me.STYLE_RULE?t(e):i&&o===me.KEYFRAMES_RULE?i(e):o===me.MIXIN_RULE&&(s=!0);let r=e.rules;if(r&&!s)for(let e,s=0,o=r.length;s<o&&(e=r[s]);s++)Ee(e,t,i,n)}function Ae(e,t){let i=0;for(let n=t,s=e.length;n<s;n++)if("("===e[n])i++;else if(")"===e[n]&&0==--i)return n;return-1}window.ShadyDOM&&window.ShadyDOM.wrap;const Te="css-build";function ke(e){if(void 0!==w)return w;if(void 0===e.__cssBuild){const t=e.getAttribute(Te);if(t)e.__cssBuild=t;else{const t=function(e){const t="template"===e.localName?e.content.firstChild:e.firstChild;if(t instanceof Comment){const e=t.textContent.trim().split(":");if(e[0]===Te)return e[1]}return""}(e);""!==t&&function(e){const t="template"===e.localName?e.content.firstChild:e.firstChild;t.parentNode.removeChild(t)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/(e),e.__cssBuild=t}}return e.__cssBuild||""}function ze(e){return""!==ke(e)}const Oe=/;\s*/m,Le=/^\s*(initial)|(inherit)\s*$/,Ne=/\s*!important/,Re="_-_";class Me{constructor(){this._map={}}set(e,t){e=e.trim(),this._map[e]={properties:t,dependants:{}}}get(e){return e=e.trim(),this._map[e]||null}}let Ve=null;class Fe{constructor(){this._currentElement=null,this._measureElement=null,this._map=new Me}detectMixin(e){return function(e){const t=_.test(e)||m.test(e);return _.lastIndex=0,m.lastIndex=0,t}(e)}gatherStyles(e){const t=function(e){const t=[],i=e.querySelectorAll("style");for(let e=0;e<i.length;e++){const n=i[e];Se(n)?v||(Ce(n),n.parentNode.removeChild(n)):(t.push(n.textContent),n.parentNode.removeChild(n))}return t.join("").trim()}(e.content);if(t){const i=document.createElement("style");return i.textContent=t,e.content.insertBefore(i,e.content.firstChild),i}return null}transformTemplate(e,t){void 0===e._gatheredStyle&&(e._gatheredStyle=this.gatherStyles(e));const i=e._gatheredStyle;return i?this.transformStyle(i,t):null}transformStyle(e,t=""){let i=Pe(e);return this.transformRules(i,t),e.textContent=Ie(i),i}transformCustomStyle(e){let t=Pe(e);return Ee(t,e=>{":root"===e.selector&&(e.selector="html"),this.transformRule(e)}),e.textContent=Ie(t),t}transformRules(e,t){this._currentElement=t,Ee(e,e=>{this.transformRule(e)}),this._currentElement=null}transformRule(e){e.cssText=this.transformCssText(e.parsedCssText,e),":root"===e.selector&&(e.selector=":host > *")}transformCssText(e,t){return e=e.replace(m,(e,i,n,s)=>this._produceCssProperties(e,i,n,s,t)),this._consumeCssProperties(e,t)}_getInitialValueForProperty(e){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(e)}_fallbacksFromPreviousRules(e){let t=e;for(;t.parent;)t=t.parent;const i={};let n=!1;return Ee(t,t=>{(n=n||t===e)||t.selector===e.selector&&Object.assign(i,this._cssTextToMap(t.parsedCssText))}),i}_consumeCssProperties(e,t){let i=null;for(;i=_.exec(e);){let n=i[0],s=i[1],o=i.index,r=o+n.indexOf("@apply"),a=o+n.length,l=e.slice(0,r),d=e.slice(a),c=t?this._fallbacksFromPreviousRules(t):{};Object.assign(c,this._cssTextToMap(l));let h=this._atApplyToCssProperties(s,c);e=`${l}${h}${d}`,_.lastIndex=o+h.length}return e}_atApplyToCssProperties(e,t){e=e.replace(Oe,"");let i=[],n=this._map.get(e);if(n||(this._map.set(e,{}),n=this._map.get(e)),n){let s,o,r;this._currentElement&&(n.dependants[this._currentElement]=!0);const a=n.properties;for(s in a)r=t&&t[s],o=[s,": var(",e,Re,s],r&&o.push(",",r.replace(Ne,"")),o.push(")"),Ne.test(a[s])&&o.push(" !important"),i.push(o.join(""))}return i.join("; ")}_replaceInitialOrInherit(e,t){let i=Le.exec(t);return i&&(t=i[1]?this._getInitialValueForProperty(e):"apply-shim-inherit"),t}_cssTextToMap(e,t=!1){let i,n,s=e.split(";"),o={};for(let e,r,a=0;a<s.length;a++)(e=s[a])&&(r=e.split(":")).length>1&&(i=r[0].trim(),n=r.slice(1).join(":"),t&&(n=this._replaceInitialOrInherit(i,n)),o[i]=n);return o}_invalidateMixinEntry(e){if(Ve)for(let t in e.dependants)t!==this._currentElement&&Ve(t)}_produceCssProperties(e,t,i,n,s){if(i&&function e(t,i){let n=t.indexOf("var(");if(-1===n)return i(t,"","","");let s=Ae(t,n+3),o=t.substring(n+4,s),r=t.substring(0,n),a=e(t.substring(s+1),i),l=o.indexOf(",");return-1===l?i(r,o.trim(),"",a):i(r,o.substring(0,l).trim(),o.substring(l+1).trim(),a)}(i,(e,t)=>{t&&this._map.get(t)&&(n=`@apply ${t};`)}),!n)return e;let o=this._consumeCssProperties(""+n,s),r=e.slice(0,e.indexOf("--")),a=this._cssTextToMap(o,!0),l=a,d=this._map.get(t),c=d&&d.properties;c?l=Object.assign(Object.create(c),a):this._map.set(t,l);let h,u,p=[],m=!1;for(h in l)void 0===(u=a[h])&&(u="initial"),!c||h in c||(m=!0),p.push(`${t}${Re}${h}: ${u}`);return m&&this._invalidateMixinEntry(d),d&&(d.properties=l),i&&(r=`${e};${r}`),`${r}${p.join("; ")};`}}Fe.prototype.detectMixin=Fe.prototype.detectMixin,Fe.prototype.transformStyle=Fe.prototype.transformStyle,Fe.prototype.transformCustomStyle=Fe.prototype.transformCustomStyle,Fe.prototype.transformRules=Fe.prototype.transformRules,Fe.prototype.transformRule=Fe.prototype.transformRule,Fe.prototype.transformTemplate=Fe.prototype.transformTemplate,Fe.prototype._separator=Re,Object.defineProperty(Fe.prototype,"invalidCallback",{get:()=>Ve,set(e){Ve=e}});var De=Fe;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var Be={};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const He="_applyShimCurrentVersion",$e="_applyShimNextVersion",je="_applyShimValidatingVersion",qe=Promise.resolve();function Ye(e){let t=Be[e];t&&function(e){e[He]=e[He]||0,e[je]=e[je]||0,e[$e]=(e[$e]||0)+1}(t)}function Ue(e){return e[He]===e[$e]}function We(e){return!Ue(e)&&e[je]===e[$e]}function Ge(e){e[je]=e[$e],e._validating||(e._validating=!0,qe.then((function(){e[He]=e[$e],e._validating=!1})))}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const Ke=new De;class Je{constructor(){this.customStyleInterface=null,Ke.invalidCallback=Ye}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=e=>{Ke.transformCustomStyle(e)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})})}prepareTemplate(e,t){if(this.ensure(),ze(e))return;Be[t]=e;let i=Ke.transformTemplate(e,t);e._styleAst=i}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let e=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let t=0;t<e.length;t++){let i=e[t],n=this.customStyleInterface.getStyleForCustomStyle(i);n&&Ke.transformCustomStyle(n)}this.customStyleInterface.enqueued=!1}}styleSubtree(e,t){if(this.ensure(),t&&y(e,t),e.shadowRoot){this.styleElement(e);let t=e.shadowRoot.children||e.shadowRoot.childNodes;for(let e=0;e<t.length;e++)this.styleSubtree(t[e])}else{let t=e.children||e.childNodes;for(let e=0;e<t.length;e++)this.styleSubtree(t[e])}}styleElement(e){this.ensure();let{is:t}=function(e){let t=e.localName,i="",n="";return t?t.indexOf("-")>-1?i=t:(n=t,i=e.getAttribute&&e.getAttribute("is")||""):(i=e.is,n=e.extends),{is:i,typeExtension:n}}(e),i=Be[t];if((!i||!ze(i))&&i&&!Ue(i)){We(i)||(this.prepareTemplate(i,t),Ge(i));let n=e.shadowRoot;if(n){let e=n.querySelector("style");e&&(e.__cssRules=i._styleAst,e.textContent=Ie(i._styleAst))}}}styleDocument(e){this.ensure(),this.styleSubtree(document.body,e)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const e=new Je;let t=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(t,i,n){e.flushCustomStyles(),e.prepareTemplate(t,i)},prepareTemplateStyles(e,t,i){window.ShadyCSS.prepareTemplate(e,t,i)},prepareTemplateDom(e,t){},styleSubtree(t,i){e.flushCustomStyles(),e.styleSubtree(t,i)},styleElement(t){e.flushCustomStyles(),e.styleElement(t)},styleDocument(t){e.flushCustomStyles(),e.styleDocument(t)},getComputedStyleValue:(e,t)=>g(e,t),flushCustomStyles(){e.flushCustomStyles()},nativeCss:S,nativeShadow:v,cssBuild:w,disableRuntime:C},t&&(window.ShadyCSS.CustomStyleInterface=t)}window.ShadyCSS.ApplyShim=Ke;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let Xe=0;function Ze(){}Ze.prototype.__mixinApplications,Ze.prototype.__mixinSet;const Qe=function(e){let t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);let i=Xe++;return function(n){let s=n.__mixinSet;if(s&&s[i])return n;let o=t,r=o.get(n);r||(r=e(n),o.set(n,r));let a=Object.create(r.__mixinSet||s||null);return a[i]=!0,r.__mixinSet=a,r}},et=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:e=>e;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function tt(e){return e.indexOf(".")>=0}function it(e){let t=e.indexOf(".");return-1===t?e:e.slice(0,t)}function nt(e,t){return 0===e.indexOf(t+".")}function st(e,t){return 0===t.indexOf(e+".")}function ot(e,t,i){return t+i.slice(e.length)}function rt(e,t){return e===t||nt(e,t)||st(e,t)}function at(e){if(Array.isArray(e)){let t=[];for(let i=0;i<e.length;i++){let n=e[i].toString().split(".");for(let e=0;e<n.length;e++)t.push(n[e])}return t.join(".")}return e}function lt(e){return Array.isArray(e)?at(e).split("."):e.toString().split(".")}function dt(e,t,i){let n=e,s=lt(t);for(let e=0;e<s.length;e++){if(!n)return;n=n[s[e]]}return i&&(i.path=s.join(".")),n}function ct(e,t,i){let n=e,s=lt(t),o=s[s.length-1];if(s.length>1){for(let e=0;e<s.length-1;e++){if(!(n=n[s[e]]))return}n[o]=i}else n[t]=i;return s.join(".")}const ht={},ut=/-[a-z]/g,pt=/([A-Z])/g;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function mt(e){return ht[e]||(ht[e]=e.indexOf("-")<0?e:e.replace(ut,e=>e[1].toUpperCase()))}function _t(e){return ht[e]||(ht[e]=e.replace(pt,"-$1").toLowerCase())}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let ft=0,yt=0,gt=[],vt=0,bt=document.createTextNode("");new window.MutationObserver((function(){const e=gt.length;for(let t=0;t<e;t++){let e=gt[t];if(e)try{e()}catch(e){setTimeout(()=>{throw e})}}gt.splice(0,e),yt+=e})).observe(bt,{characterData:!0});const wt={after:e=>({run:t=>window.setTimeout(t,e),cancel(e){window.clearTimeout(e)}}),run:(e,t)=>window.setTimeout(e,t),cancel(e){window.clearTimeout(e)}},xt={run:e=>window.requestAnimationFrame(e),cancel(e){window.cancelAnimationFrame(e)}},Ct={run:e=>window.requestIdleCallback?window.requestIdleCallback(e):window.setTimeout(e,16),cancel(e){window.cancelIdleCallback?window.cancelIdleCallback(e):window.clearTimeout(e)}},St={run:e=>(bt.textContent=vt++,gt.push(e),ft++),cancel(e){const t=e-yt;if(t>=0){if(!gt[t])throw new Error("invalid async handle: "+e);gt[t]=null}}},It=St,Pt=Qe(e=>{return class extends e{static createProperties(e){const t=this.prototype;for(let i in e)i in t||t._createPropertyAccessor(i)}static attributeNameForProperty(e){return e.toLowerCase()}static typeForProperty(e){}_createPropertyAccessor(e,t){this._addPropertyToAttributeMap(e),this.hasOwnProperty("__dataHasAccessor")||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[e]||(this.__dataHasAccessor[e]=!0,this._definePropertyAccessor(e,t))}_addPropertyToAttributeMap(e){if(this.hasOwnProperty("__dataAttributes")||(this.__dataAttributes=Object.assign({},this.__dataAttributes)),!this.__dataAttributes[e]){const t=this.constructor.attributeNameForProperty(e);this.__dataAttributes[t]=e}}_definePropertyAccessor(e,t){Object.defineProperty(this,e,{get(){return this._getProperty(e)},set:t?function(){}:function(t){this._setProperty(e,t)}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let e in this.__dataHasAccessor)this.hasOwnProperty(e)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[e]=this[e],delete this[e])}_initializeInstanceProperties(e){Object.assign(this,e)}_setProperty(e,t){this._setPendingProperty(e,t)&&this._invalidateProperties()}_getProperty(e){return this.__data[e]}_setPendingProperty(e,t,i){let n=this.__data[e],s=this._shouldPropertyChange(e,t,n);return s&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),!this.__dataOld||e in this.__dataOld||(this.__dataOld[e]=n),this.__data[e]=t,this.__dataPending[e]=t),s}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,It.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){const e=this.__data,t=this.__dataPending,i=this.__dataOld;this._shouldPropertiesChange(e,t,i)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(e,t,i))}_shouldPropertiesChange(e,t,i){return Boolean(t)}_propertiesChanged(e,t,i){}_shouldPropertyChange(e,t,i){return i!==t&&(i==i||t==t)}attributeChangedCallback(e,t,i,n){t!==i&&this._attributeToProperty(e,i),super.attributeChangedCallback&&super.attributeChangedCallback(e,t,i,n)}_attributeToProperty(e,t,i){if(!this.__serializing){const n=this.__dataAttributes,s=n&&n[e]||e;this[s]=this._deserializeValue(t,i||this.constructor.typeForProperty(s))}}_propertyToAttribute(e,t,i){this.__serializing=!0,i=arguments.length<3?this[e]:i,this._valueToNodeAttribute(this,i,t||this.constructor.attributeNameForProperty(e)),this.__serializing=!1}_valueToNodeAttribute(e,t,i){const n=this._serializeValue(t);void 0===n?e.removeAttribute(i):("class"!==i&&"name"!==i&&"slot"!==i||(e=et(e)),e.setAttribute(i,n))}_serializeValue(e){switch(typeof e){case"boolean":return e?"":void 0;default:return null!=e?e.toString():void 0}}_deserializeValue(e,t){switch(t){case Boolean:return null!==e;case Number:return Number(e);default:return e}}}}),Et={};let At=HTMLElement.prototype;for(;At;){let e=Object.getOwnPropertyNames(At);for(let t=0;t<e.length;t++)Et[e[t]]=!0;At=Object.getPrototypeOf(At)}const Tt=Qe(e=>{const t=Pt(e);return class extends t{static createPropertiesForAttributes(){let e=this.observedAttributes;for(let t=0;t<e.length;t++)this.prototype._createPropertyAccessor(mt(e[t]))}static attributeNameForProperty(e){return _t(e)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(e){for(let t in e)this._setProperty(t,e[t])}_ensureAttribute(e,t){const i=this;i.hasAttribute(e)||this._valueToNodeAttribute(i,t,e)}_serializeValue(e){switch(typeof e){case"object":if(e instanceof Date)return e.toString();if(e)try{return JSON.stringify(e)}catch(e){return""}default:return super._serializeValue(e)}}_deserializeValue(e,t){let i;switch(t){case Object:try{i=JSON.parse(e)}catch(t){i=e}break;case Array:try{i=JSON.parse(e)}catch(t){i=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${e}`)}break;case Date:i=isNaN(e)?String(e):Number(e),i=new Date(i);break;default:i=super._deserializeValue(e,t)}return i}_definePropertyAccessor(e,t){!function(e,t){if(!Et[t]){let i=e[t];void 0!==i&&(e.__data?e._setPendingProperty(t,i):(e.__dataProto?e.hasOwnProperty(JSCompiler_renameProperty("__dataProto",e))||(e.__dataProto=Object.create(e.__dataProto)):e.__dataProto={},e.__dataProto[t]=i))}}(this,e),super._definePropertyAccessor(e,t)}_hasAccessor(e){return this.__dataHasAccessor&&this.__dataHasAccessor[e]}_isPropertyPending(e){return Boolean(this.__dataPending&&e in this.__dataPending)}}}),kt=document.createTreeWalker(document,NodeFilter.SHOW_ALL,null,!1),zt={"dom-if":!0,"dom-repeat":!0};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Ot(e){let t=e.getAttribute("is");if(t&&zt[t]){let i=e;for(i.removeAttribute("is"),e=i.ownerDocument.createElement(t),i.parentNode.replaceChild(e,i),e.appendChild(i);i.attributes.length;)e.setAttribute(i.attributes[0].name,i.attributes[0].value),i.removeAttribute(i.attributes[0].name)}return e}function Lt(e,t){let i=t.parentInfo&&Lt(e,t.parentInfo);if(!i)return e;kt.currentNode=i;for(let e=kt.firstChild(),i=0;e;e=kt.nextSibling())if(t.parentIndex===i++)return e}function Nt(e,t,i,n){n.id&&(t[n.id]=i)}function Rt(e,t,i){if(i.events&&i.events.length)for(let n,s=0,o=i.events;s<o.length&&(n=o[s]);s++)e._addMethodEventListenerToNode(t,n.name,n.value,e)}function Mt(e,t,i){i.templateInfo&&(t._templateInfo=i.templateInfo)}const Vt=Qe(e=>{return class extends e{static _parseTemplate(e,t){if(!e._templateInfo){let i=e._templateInfo={};i.nodeInfoList=[],i.stripWhiteSpace=t&&t.stripWhiteSpace||e.hasAttribute("strip-whitespace"),this._parseTemplateContent(e,i,{parent:null})}return e._templateInfo}static _parseTemplateContent(e,t,i){return this._parseTemplateNode(e.content,t,i)}static _parseTemplateNode(e,t,i){let n,s=e;return"template"!=s.localName||s.hasAttribute("preserve-content")?"slot"===s.localName&&(t.hasInsertionPoint=!0):n=this._parseTemplateNestedTemplate(s,t,i)||n,kt.currentNode=s,kt.firstChild()&&(n=this._parseTemplateChildNodes(s,t,i)||n),s.hasAttributes&&s.hasAttributes()&&(n=this._parseTemplateNodeAttributes(s,t,i)||n),n}static _parseTemplateChildNodes(e,t,i){if("script"!==e.localName&&"style"!==e.localName){kt.currentNode=e;for(let n,s=kt.firstChild(),o=0;s;s=n){if("template"==s.localName&&(s=Ot(s)),kt.currentNode=s,n=kt.nextSibling(),s.nodeType===Node.TEXT_NODE){let i=n;for(;i&&i.nodeType===Node.TEXT_NODE;)s.textContent+=i.textContent,n=kt.nextSibling(),e.removeChild(i),i=n;if(t.stripWhiteSpace&&!s.textContent.trim()){e.removeChild(s);continue}}let r={parentIndex:o,parentInfo:i};this._parseTemplateNode(s,t,r)&&(r.infoIndex=t.nodeInfoList.push(r)-1),kt.currentNode=s,kt.parentNode()&&o++}}}static _parseTemplateNestedTemplate(e,t,i){let n=this._parseTemplate(e,t);return(n.content=e.content.ownerDocument.createDocumentFragment()).appendChild(e.content),i.templateInfo=n,!0}static _parseTemplateNodeAttributes(e,t,i){let n=!1,s=Array.from(e.attributes);for(let o,r=s.length-1;o=s[r];r--)n=this._parseTemplateNodeAttribute(e,t,i,o.name,o.value)||n;return n}static _parseTemplateNodeAttribute(e,t,i,n,s){return"on-"===n.slice(0,3)?(e.removeAttribute(n),i.events=i.events||[],i.events.push({name:n.slice(3),value:s}),!0):"id"===n&&(i.id=s,!0)}static _contentForTemplate(e){let t=e._templateInfo;return t&&t.content||e.content}_stampTemplate(e){e&&!e.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(e);let t=this.constructor._parseTemplate(e),i=t.nodeInfoList,n=t.content||e.content,s=document.importNode(n,!0);s.__noInsertionPoint=!t.hasInsertionPoint;let o=s.nodeList=new Array(i.length);s.$={};for(let e,t=0,n=i.length;t<n&&(e=i[t]);t++){let i=o[t]=Lt(s,e);Nt(0,s.$,i,e),Mt(0,i,e),Rt(this,i,e)}return s=s}_addMethodEventListenerToNode(e,t,i,n){let s=function(e,t,i){return e=e._methodHost||e,function(t){e[i]?e[i](t,t.detail):console.warn("listener method `"+i+"` not defined")}}(n=n||e,0,i);return this._addEventListenerToNode(e,t,s),s}_addEventListenerToNode(e,t,i){e.addEventListener(t,i)}_removeEventListenerFromNode(e,t,i){e.removeEventListener(t,i)}}});
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let Ft=0;const Dt={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},Bt=/[A-Z]/;function Ht(e,t){let i=e[t];if(i){if(!e.hasOwnProperty(t)){i=e[t]=Object.create(e[t]);for(let e in i){let t=i[e],n=i[e]=Array(t.length);for(let e=0;e<t.length;e++)n[e]=t[e]}}}else i=e[t]={};return i}function $t(e,t,i,n,s,o){if(t){let r=!1,a=Ft++;for(let l in i)jt(e,t,a,l,i,n,s,o)&&(r=!0);return r}return!1}function jt(e,t,i,n,s,o,r,a){let l=!1,d=t[r?it(n):n];if(d)for(let t,c=0,h=d.length;c<h&&(t=d[c]);c++)t.info&&t.info.lastRun===i||r&&!qt(n,t.trigger)||(t.info&&(t.info.lastRun=i),t.fn(e,n,s,o,t.info,r,a),l=!0);return l}function qt(e,t){if(t){let i=t.name;return i==e||!(!t.structured||!nt(i,e))||!(!t.wildcard||!st(i,e))}return!0}function Yt(e,t,i,n,s){let o="string"==typeof s.method?e[s.method]:s.method,r=s.property;o?o.call(e,e.__data[r],n[r]):s.dynamicFn||console.warn("observer method `"+s.method+"` not defined")}function Ut(e,t,i){let n=it(t);if(n!==t){return Wt(e,_t(n)+"-changed",i[t],t),!0}return!1}function Wt(e,t,i,n){let s={value:i,queueProperty:!0};n&&(s.path=n),et(e).dispatchEvent(new CustomEvent(t,{detail:s}))}function Gt(e,t,i,n,s,o){let r=(o?it(t):t)!=t?t:null,a=r?dt(e,r):e.__data[t];r&&void 0===a&&(a=i[t]),Wt(e,s.eventName,a,r)}function Kt(e,t,i,n,s){let o=e.__data[t];R&&(o=R(o,s.attrName,"attribute",e)),e._propertyToAttribute(t,s.attrName,o)}function Jt(e,t,i,n,s){let o=ni(e,t,i,n,s),r=s.methodInfo;e.__dataHasAccessor&&e.__dataHasAccessor[r]?e._setPendingProperty(r,o,!0):e[r]=o}function Xt(e,t,i,n,s,o,r){i.bindings=i.bindings||[];let a={kind:n,target:s,parts:o,literal:r,isCompound:1!==o.length};if(i.bindings.push(a),function(e){return Boolean(e.target)&&"attribute"!=e.kind&&"text"!=e.kind&&!e.isCompound&&"{"===e.parts[0].mode}(a)){let{event:e,negate:t}=a.parts[0];a.listenerEvent=e||_t(s)+"-changed",a.listenerNegate=t}let l=t.nodeInfoList.length;for(let i=0;i<a.parts.length;i++){let n=a.parts[i];n.compoundIndex=i,Zt(e,t,a,n,l)}}function Zt(e,t,i,n,s){if(!n.literal)if("attribute"===i.kind&&"-"===i.target[0])console.warn("Cannot set attribute "+i.target+' because "-" is not a valid attribute starting character');else{let o=n.dependencies,r={index:s,binding:i,part:n,evaluator:e};for(let i=0;i<o.length;i++){let n=o[i];"string"==typeof n&&((n=li(n)).wildcard=!0),e._addTemplatePropertyEffect(t,n.rootProperty,{fn:Qt,info:r,trigger:n})}}}function Qt(e,t,i,n,s,o,r){let a=r[s.index],l=s.binding,d=s.part;if(o&&d.source&&t.length>d.source.length&&"property"==l.kind&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let n=i[t];t=ot(d.source,l.target,t),a._setPendingPropertyOrPath(t,n,!1,!0)&&e._enqueueClient(a)}else{!function(e,t,i,n,s){s=function(e,t,i,n){if(i.isCompound){let s=e.__dataCompoundStorage[i.target];s[n.compoundIndex]=t,t=s.join("")}"attribute"!==i.kind&&("textContent"!==i.target&&("value"!==i.target||"input"!==e.localName&&"textarea"!==e.localName)||(t=null==t?"":t));return t}(t,s,i,n),R&&(s=R(s,i.target,i.kind,t));if("attribute"==i.kind)e._valueToNodeAttribute(t,s,i.target);else{let n=i.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[n]?t[Dt.READ_ONLY]&&t[Dt.READ_ONLY][n]||t._setPendingProperty(n,s)&&e._enqueueClient(t):e._setUnmanagedPropertyToNode(t,n,s)}}(e,a,l,d,s.evaluator._evaluateBinding(e,d,t,i,n,o))}}function ei(e,t){if(t.isCompound){let i=e.__dataCompoundStorage||(e.__dataCompoundStorage={}),n=t.parts,s=new Array(n.length);for(let e=0;e<n.length;e++)s[e]=n[e].literal;let o=t.target;i[o]=s,t.literal&&"property"==t.kind&&(e[o]=t.literal)}}function ti(e,t,i){if(i.listenerEvent){let n=i.parts[0];e.addEventListener(i.listenerEvent,(function(e){!function(e,t,i,n,s){let o,r=e.detail,a=r&&r.path;a?(n=ot(i,n,a),o=r&&r.value):o=e.currentTarget[i],o=s?!o:o,t[Dt.READ_ONLY]&&t[Dt.READ_ONLY][n]||!t._setPendingPropertyOrPath(n,o,!0,Boolean(a))||r&&r.queueProperty||t._invalidateProperties()}(e,t,i.target,n.source,n.negate)}))}}function ii(e,t,i,n,s,o){o=t.static||o&&("object"!=typeof o||o[t.methodName]);let r={methodName:t.methodName,args:t.args,methodInfo:s,dynamicFn:o};for(let s,o=0;o<t.args.length&&(s=t.args[o]);o++)s.literal||e._addPropertyEffect(s.rootProperty,i,{fn:n,info:r,trigger:s});o&&e._addPropertyEffect(t.methodName,i,{fn:n,info:r})}function ni(e,t,i,n,s){let o=e._methodHost||e,r=o[s.methodName];if(r){let n=e._marshalArgs(s.args,t,i);return r.apply(o,n)}s.dynamicFn||console.warn("method `"+s.methodName+"` not defined")}const si=[],oi=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*))*)?)\\)\\s*)?)(?:]]|}})","g");function ri(e){let t="";for(let i=0;i<e.length;i++){t+=e[i].literal||""}return t}function ai(e){let t=e.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let e={methodName:t[1],static:!0,args:si};if(t[2].trim()){return function(e,t){return t.args=e.map((function(e){let i=li(e);return i.literal||(t.static=!1),i}),this),t}(t[2].replace(/\\,/g,"&comma;").split(","),e)}return e}return null}function li(e){let t=e.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),i={name:t,value:"",literal:!1},n=t[0];switch("-"===n&&(n=t[1]),n>="0"&&n<="9"&&(n="#"),n){case"'":case'"':i.value=t.slice(1,-1),i.literal=!0;break;case"#":i.value=Number(t),i.literal=!0}return i.literal||(i.rootProperty=it(t),i.structured=tt(t),i.structured&&(i.wildcard=".*"==t.slice(-2),i.wildcard&&(i.name=t.slice(0,-2)))),i}function di(e,t,i){let n=dt(e,i);return void 0===n&&(n=t[i]),n}function ci(e,t,i,n){e.notifyPath(i+".splices",{indexSplices:n}),e.notifyPath(i+".length",t.length)}function hi(e,t,i,n,s,o){ci(e,t,i,[{index:n,addedCount:s,removed:o,object:t,type:"splice"}])}const ui=Qe(e=>{const t=Vt(Tt(e));return class extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataCounter=0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo}get PROPERTY_EFFECT_TYPES(){return Dt}_initializeProperties(){super._initializeProperties(),pi.registerHost(this),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_initializeProtoProperties(e){this.__data=Object.create(e),this.__dataPending=Object.create(e),this.__dataOld={}}_initializeInstanceProperties(e){let t=this[Dt.READ_ONLY];for(let i in e)t&&t[i]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[i]=this.__dataPending[i]=e[i])}_addPropertyEffect(e,t,i){this._createPropertyAccessor(e,t==Dt.READ_ONLY);let n=Ht(this,t)[e];n||(n=this[t][e]=[]),n.push(i)}_removePropertyEffect(e,t,i){let n=Ht(this,t)[e],s=n.indexOf(i);s>=0&&n.splice(s,1)}_hasPropertyEffect(e,t){let i=this[t];return Boolean(i&&i[e])}_hasReadOnlyEffect(e){return this._hasPropertyEffect(e,Dt.READ_ONLY)}_hasNotifyEffect(e){return this._hasPropertyEffect(e,Dt.NOTIFY)}_hasReflectEffect(e){return this._hasPropertyEffect(e,Dt.REFLECT)}_hasComputedEffect(e){return this._hasPropertyEffect(e,Dt.COMPUTE)}_setPendingPropertyOrPath(e,t,i,n){if(n||it(Array.isArray(e)?e[0]:e)!==e){if(!n){let i=dt(this,e);if(!(e=ct(this,e,t))||!super._shouldPropertyChange(e,t,i))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(e,t,i))return function(e,t,i){let n=e.__dataLinkedPaths;if(n){let s;for(let o in n){let r=n[o];st(o,t)?(s=ot(o,r,t),e._setPendingPropertyOrPath(s,i,!0,!0)):st(r,t)&&(s=ot(r,o,t),e._setPendingPropertyOrPath(s,i,!0,!0))}}}(this,e,t),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[e])return this._setPendingProperty(e,t,i);this[e]=t}return!1}_setUnmanagedPropertyToNode(e,t,i){i===e[t]&&"object"!=typeof i||(e[t]=i)}_setPendingProperty(e,t,i){let n=this.__dataHasPaths&&tt(e),s=n?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(e,t,s[e])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),e in this.__dataOld||(this.__dataOld[e]=this.__data[e]),n?this.__dataTemp[e]=t:this.__data[e]=t,this.__dataPending[e]=t,(n||this[Dt.NOTIFY]&&this[Dt.NOTIFY][e])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[e]=i),!0)}_setProperty(e,t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(e){this.__dataPendingClients=this.__dataPendingClients||[],e!==this&&this.__dataPendingClients.push(e)}_flushProperties(){this.__dataCounter++,super._flushProperties(),this.__dataCounter--}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let e=this.__dataPendingClients;if(e){this.__dataPendingClients=null;for(let t=0;t<e.length;t++){let i=e[t];i.__dataEnabled?i.__dataPending&&i._flushProperties():i._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(e,t){for(let i in e)!t&&this[Dt.READ_ONLY]&&this[Dt.READ_ONLY][i]||this._setPendingPropertyOrPath(i,e[i],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(e,t,i){let n=this.__dataHasPaths;this.__dataHasPaths=!1,function(e,t,i,n){let s=e[Dt.COMPUTE];if(s){let o=t;for(;$t(e,s,o,i,n);)Object.assign(i,e.__dataOld),Object.assign(t,e.__dataPending),o=e.__dataPending,e.__dataPending=null}}(this,t,i,n);let s=this.__dataToNotify;this.__dataToNotify=null,this._propagatePropertyChanges(t,i,n),this._flushClients(),$t(this,this[Dt.REFLECT],t,i,n),$t(this,this[Dt.OBSERVE],t,i,n),s&&function(e,t,i,n,s){let o,r,a=e[Dt.NOTIFY],l=Ft++;for(let r in t)t[r]&&(a&&jt(e,a,l,r,i,n,s)?o=!0:s&&Ut(e,r,i)&&(o=!0));o&&(r=e.__dataHost)&&r._invalidateProperties&&r._invalidateProperties()}(this,s,t,i,n),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(e,t,i){this[Dt.PROPAGATE]&&$t(this,this[Dt.PROPAGATE],e,t,i);let n=this.__templateInfo;for(;n;)$t(this,n.propertyEffects,e,t,i,n.nodeList),n=n.nextTemplateInfo}linkPaths(e,t){e=at(e),t=at(t),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[e]=t}unlinkPaths(e){e=at(e),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[e]}notifySplices(e,t){let i={path:""};ci(this,dt(this,e,i),i.path,t)}get(e,t){return dt(t||this,e)}set(e,t,i){i?ct(i,e,t):this[Dt.READ_ONLY]&&this[Dt.READ_ONLY][e]||this._setPendingPropertyOrPath(e,t,!0)&&this._invalidateProperties()}push(e,...t){let i={path:""},n=dt(this,e,i),s=n.length,o=n.push(...t);return t.length&&hi(this,n,i.path,s,t.length,[]),o}pop(e){let t={path:""},i=dt(this,e,t),n=Boolean(i.length),s=i.pop();return n&&hi(this,i,t.path,i.length,0,[s]),s}splice(e,t,i,...n){let s,o={path:""},r=dt(this,e,o);return t<0?t=r.length-Math.floor(-t):t&&(t=Math.floor(t)),s=2===arguments.length?r.splice(t):r.splice(t,i,...n),(n.length||s.length)&&hi(this,r,o.path,t,n.length,s),s}shift(e){let t={path:""},i=dt(this,e,t),n=Boolean(i.length),s=i.shift();return n&&hi(this,i,t.path,0,0,[s]),s}unshift(e,...t){let i={path:""},n=dt(this,e,i),s=n.unshift(...t);return t.length&&hi(this,n,i.path,0,t.length,[]),s}notifyPath(e,t){let i;if(1==arguments.length){let n={path:""};t=dt(this,e,n),i=n.path}else i=Array.isArray(e)?at(e):e;this._setPendingPropertyOrPath(i,t,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(e,t){var i;this._addPropertyEffect(e,Dt.READ_ONLY),t&&(this["_set"+(i=e,i[0].toUpperCase()+i.substring(1))]=function(t){this._setProperty(e,t)})}_createPropertyObserver(e,t,i){let n={property:e,method:t,dynamicFn:Boolean(i)};this._addPropertyEffect(e,Dt.OBSERVE,{fn:Yt,info:n,trigger:{name:e}}),i&&this._addPropertyEffect(t,Dt.OBSERVE,{fn:Yt,info:n,trigger:{name:t}})}_createMethodObserver(e,t){let i=ai(e);if(!i)throw new Error("Malformed observer expression '"+e+"'");ii(this,i,Dt.OBSERVE,ni,null,t)}_createNotifyingProperty(e){this._addPropertyEffect(e,Dt.NOTIFY,{fn:Gt,info:{eventName:_t(e)+"-changed",property:e}})}_createReflectedProperty(e){let t=this.constructor.attributeNameForProperty(e);"-"===t[0]?console.warn("Property "+e+" cannot be reflected to attribute "+t+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(e,Dt.REFLECT,{fn:Kt,info:{attrName:t}})}_createComputedProperty(e,t,i){let n=ai(t);if(!n)throw new Error("Malformed computed expression '"+t+"'");ii(this,n,Dt.COMPUTE,Jt,e,i)}_marshalArgs(e,t,i){const n=this.__data,s=[];for(let o=0,r=e.length;o<r;o++){let{name:r,structured:a,wildcard:l,value:d,literal:c}=e[o];if(!c)if(l){const e=st(r,t),s=di(n,i,e?t:r);d={path:e?t:r,value:s,base:e?dt(n,r):s}}else d=a?di(n,i,r):n[r];s[o]=d}return s}static addPropertyEffect(e,t,i){this.prototype._addPropertyEffect(e,t,i)}static createPropertyObserver(e,t,i){this.prototype._createPropertyObserver(e,t,i)}static createMethodObserver(e,t){this.prototype._createMethodObserver(e,t)}static createNotifyingProperty(e){this.prototype._createNotifyingProperty(e)}static createReadOnlyProperty(e,t){this.prototype._createReadOnlyProperty(e,t)}static createReflectedProperty(e){this.prototype._createReflectedProperty(e)}static createComputedProperty(e,t,i){this.prototype._createComputedProperty(e,t,i)}static bindTemplate(e){return this.prototype._bindTemplate(e)}_bindTemplate(e,t){let i=this.constructor._parseTemplate(e),n=this.__templateInfo==i;if(!n)for(let e in i.propertyEffects)this._createPropertyAccessor(e);if(t&&((i=Object.create(i)).wasPreBound=n,!n&&this.__templateInfo)){let e=this.__templateInfoLast||this.__templateInfo;return this.__templateInfoLast=e.nextTemplateInfo=i,i.previousTemplateInfo=e,i}return this.__templateInfo=i}static _addTemplatePropertyEffect(e,t,i){(e.hostProps=e.hostProps||{})[t]=!0;let n=e.propertyEffects=e.propertyEffects||{};(n[t]=n[t]||[]).push(i)}_stampTemplate(e){pi.beginHosting(this);let t=super._stampTemplate(e);pi.endHosting(this);let i=this._bindTemplate(e,!0);if(i.nodeList=t.nodeList,!i.wasPreBound){let e=i.childNodes=[];for(let i=t.firstChild;i;i=i.nextSibling)e.push(i)}return t.templateInfo=i,function(e,t){let{nodeList:i,nodeInfoList:n}=t;if(n.length)for(let t=0;t<n.length;t++){let s=n[t],o=i[t],r=s.bindings;if(r)for(let t=0;t<r.length;t++){let i=r[t];ei(o,i),ti(o,e,i)}o.__dataHost=e}}(this,i),this.__dataReady&&$t(this,i.propertyEffects,this.__data,null,!1,i.nodeList),t}_removeBoundDom(e){let t=e.templateInfo;t.previousTemplateInfo&&(t.previousTemplateInfo.nextTemplateInfo=t.nextTemplateInfo),t.nextTemplateInfo&&(t.nextTemplateInfo.previousTemplateInfo=t.previousTemplateInfo),this.__templateInfoLast==t&&(this.__templateInfoLast=t.previousTemplateInfo),t.previousTemplateInfo=t.nextTemplateInfo=null;let i=t.childNodes;for(let e=0;e<i.length;e++){let t=i[e];t.parentNode.removeChild(t)}}static _parseTemplateNode(e,t,i){let n=super._parseTemplateNode(e,t,i);if(e.nodeType===Node.TEXT_NODE){let s=this._parseBindings(e.textContent,t);s&&(e.textContent=ri(s)||" ",Xt(this,t,i,"text","textContent",s),n=!0)}return n}static _parseTemplateNodeAttribute(e,t,i,n,s){let o=this._parseBindings(s,t);if(o){let s=n,r="property";Bt.test(n)?r="attribute":"$"==n[n.length-1]&&(n=n.slice(0,-1),r="attribute");let a=ri(o);return a&&"attribute"==r&&("class"==n&&e.hasAttribute("class")&&(a+=" "+e.getAttribute(n)),e.setAttribute(n,a)),"input"===e.localName&&"value"===s&&e.setAttribute(s,""),e.removeAttribute(s),"property"===r&&(n=mt(n)),Xt(this,t,i,r,n,o,a),!0}return super._parseTemplateNodeAttribute(e,t,i,n,s)}static _parseTemplateNestedTemplate(e,t,i){let n=super._parseTemplateNestedTemplate(e,t,i),s=i.templateInfo.hostProps;for(let e in s){Xt(this,t,i,"property","_host_"+e,[{mode:"{",source:e,dependencies:[e]}])}return n}static _parseBindings(e,t){let i,n=[],s=0;for(;null!==(i=oi.exec(e));){i.index>s&&n.push({literal:e.slice(s,i.index)});let o=i[1][0],r=Boolean(i[2]),a=i[3].trim(),l=!1,d="",c=-1;"{"==o&&(c=a.indexOf("::"))>0&&(d=a.substring(c+2),a=a.substring(0,c),l=!0);let h=ai(a),u=[];if(h){let{args:e,methodName:i}=h;for(let t=0;t<e.length;t++){let i=e[t];i.literal||u.push(i)}let n=t.dynamicFns;(n&&n[i]||h.static)&&(u.push(i),h.dynamicFn=!0)}else u.push(a);n.push({source:a,mode:o,negate:r,customEvent:l,signature:h,dependencies:u,event:d}),s=oi.lastIndex}if(s&&s<e.length){let t=e.substring(s);t&&n.push({literal:t})}return n.length?n:null}static _evaluateBinding(e,t,i,n,s,o){let r;return r=t.signature?ni(e,i,n,0,t.signature):i!=t.source?dt(e,t.source):o&&tt(i)?dt(e,i):e.__data[i],t.negate&&(r=!r),r}}});const pi=new class{constructor(){this.stack=[]}registerHost(e){if(this.stack.length){this.stack[this.stack.length-1]._enqueueClient(e)}}beginHosting(e){this.stack.push(e)}endHosting(e){let t=this.stack.length;t&&this.stack[t-1]==e&&this.stack.pop()}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const mi=[];const _i=Qe(e=>{const t=Pt(e);function i(e){const t=Object.getPrototypeOf(e);return t.prototype instanceof s?t:null}function n(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",e))){let t=null;if(e.hasOwnProperty(JSCompiler_renameProperty("properties",e))){const i=e.properties;i&&(t=
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function(e){const t={};for(let i in e){const n=e[i];t[i]="function"==typeof n?{type:n}:n}return t}(i))}e.__ownProperties=t}return e.__ownProperties}class s extends t{static get observedAttributes(){if(!this.hasOwnProperty("__observedAttributes")){e=this.prototype,mi.push(e);const t=this._properties;this.__observedAttributes=t?Object.keys(t).map(e=>this.attributeNameForProperty(e)):[]}var e;return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const e=i(this);e&&e.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const e=n(this);e&&this.createProperties(e)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const e=i(this);this.__properties=Object.assign({},e&&e._properties,n(this))}return this.__properties}static typeForProperty(e){const t=this._properties[e];return t&&t.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return s}),fi="3.2.0",yi=window.ShadyCSS&&window.ShadyCSS.cssBuild,gi=Qe(e=>{const t=_i(ui(e));function i(e,t,i,n){if(!yi){const s=t.content.querySelectorAll("style"),o=Q(t),r=function(e){let t=K(e);return t?ee(t):[]}(i),a=t.content.firstElementChild;for(let i=0;i<r.length;i++){let s=r[i];s.textContent=e._processStyleText(s.textContent,n),t.content.insertBefore(s,a)}let l=0;for(let t=0;t<o.length;t++){let i=o[t],r=s[l];r!==i?(i=i.cloneNode(!0),r.parentNode.insertBefore(i,r)):l++,i.textContent=e._processStyleText(i.textContent,n)}}window.ShadyCSS&&window.ShadyCSS.prepareTemplate(t,i)}return class extends t{static get polymerElementVersion(){return fi}static _finalizeClass(){super._finalizeClass();const e=((t=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",t))||(t.__ownObservers=t.hasOwnProperty(JSCompiler_renameProperty("observers",t))?t.observers:null),t.__ownObservers);var t;e&&this.createObservers(e,this._properties),this._prepareTemplate()}static _prepareTemplate(){let e=this.template;e&&("string"==typeof e?(console.error("template getter must return HTMLTemplateElement"),e=null):D||(e=e.cloneNode(!0))),this.prototype._template=e}static createProperties(e){for(let o in e)t=this.prototype,i=o,n=e[o],s=e,n.computed&&(n.readOnly=!0),n.computed&&(t._hasReadOnlyEffect(i)?console.warn(`Cannot redefine computed property '${i}'.`):t._createComputedProperty(i,n.computed,s)),n.readOnly&&!t._hasReadOnlyEffect(i)?t._createReadOnlyProperty(i,!n.computed):!1===n.readOnly&&t._hasReadOnlyEffect(i)&&console.warn(`Cannot make readOnly property '${i}' non-readOnly.`),n.reflectToAttribute&&!t._hasReflectEffect(i)?t._createReflectedProperty(i):!1===n.reflectToAttribute&&t._hasReflectEffect(i)&&console.warn(`Cannot make reflected property '${i}' non-reflected.`),n.notify&&!t._hasNotifyEffect(i)?t._createNotifyingProperty(i):!1===n.notify&&t._hasNotifyEffect(i)&&console.warn(`Cannot make notify property '${i}' non-notify.`),n.observer&&t._createPropertyObserver(i,n.observer,s[n.observer]),t._addPropertyToAttributeMap(i);var t,i,n,s}static createObservers(e,t){const i=this.prototype;for(let n=0;n<e.length;n++)i._createMethodObserver(e[n],t)}static get template(){return this.hasOwnProperty(JSCompiler_renameProperty("_template",this))||(this._template=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:function(e){let t=null;if(e&&(!V||F)&&(t=Y.import(e,"template"),V&&!t))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${e}`);return t}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template),this._template}static set template(e){this._template=e}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const e=this.importMeta;if(e)this._importPath=O(e.url);else{const e=Y.import(this.is);this._importPath=e&&e.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=N,this.importPath=this.constructor.importPath;let e=function(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",e))){e.__propertyDefaults=null;let t=e._properties;for(let i in t){let n=t[i];"value"in n&&(e.__propertyDefaults=e.__propertyDefaults||{},e.__propertyDefaults[i]=n)}}return e.__propertyDefaults}(this.constructor);if(e)for(let t in e){let i=e[t];if(!this.hasOwnProperty(t)){let e="function"==typeof i.value?i.value.call(this):i.value;this._hasAccessor(t)?this._setPendingProperty(t,e,!0):this[t]=e}}}static _processStyleText(e,t){return z(e,t)}static _finalizeTemplate(e){const t=this.prototype._template;if(t&&!t.__polymerFinalized){t.__polymerFinalized=!0;const n=this.importPath;i(this,t,e,n?k(n):""),this.prototype._bindTemplate(t)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(e){const t=et(this);if(t.attachShadow)return e?(t.shadowRoot||t.attachShadow({mode:"open"}),t.shadowRoot.appendChild(e),B&&window.ShadyDOM&&ShadyDOM.flushInitial(t.shadowRoot),t.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(e){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,e)}resolveUrl(e,t){return!t&&this.importPath&&(t=k(this.importPath)),k(e,t)}static _parseTemplateContent(e,t,i){return t.dynamicFns=t.dynamicFns||this._properties,super._parseTemplateContent(e,t,i)}static _addTemplatePropertyEffect(e,t,i){return!D||t in this._properties||console.warn(`Property '${t}' used in template but not declared in 'properties'; `+"attribute will not be observed."),super._addTemplatePropertyEffect(e,t,i)}}});
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class vi{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,t){this._asyncModule=e,this._callback=t,this._timer=this._asyncModule.run(()=>{this._timer=null,bi.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),bi.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(e,t,i){return e instanceof vi?e._cancelAsync():e=new vi,e.setConfig(t,i),e}}let bi=new Set;const wi=function(e){bi.add(e)},xi=function(){const e=Boolean(bi.size);return bi.forEach(e=>{try{e.flush()}catch(e){setTimeout(()=>{throw e})}}),e};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let Ci="string"==typeof document.head.style.touchAction,Si="__polymerGestures",Ii="__polymerGesturesHandled",Pi="__polymerGesturesTouchAction",Ei=25,Ai=5,Ti=2500,ki=["mousedown","mousemove","mouseup","click"],zi=[0,1,4,2],Oi=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(e){return!1}}();function Li(e){return ki.indexOf(e)>-1}let Ni=!1;function Ri(e){if(!Li(e)&&"touchend"!==e)return Ci&&Ni&&M?{passive:!0}:void 0}!function(){try{let e=Object.defineProperty({},"passive",{get(){Ni=!0}});window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(e){}}();let Mi=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const Vi=[],Fi={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},Di={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function Bi(e){let t=Array.prototype.slice.call(e.labels||[]);if(!t.length){t=[];let i=e.getRootNode();if(e.id){let n=i.querySelectorAll(`label[for = ${e.id}]`);for(let e=0;e<n.length;e++)t.push(n[e])}}return t}let Hi=function(e){let t=e.sourceCapabilities;var i;if((!t||t.firesTouchEvents)&&(e[Ii]={skip:!0},"click"===e.type)){let t=!1,n=Wi(e);for(let e=0;e<n.length;e++){if(n[e].nodeType===Node.ELEMENT_NODE)if("label"===n[e].localName)Vi.push(n[e]);else if(i=n[e],Fi[i.localName]){let i=Bi(n[e]);for(let e=0;e<i.length;e++)t=t||Vi.indexOf(i[e])>-1}if(n[e]===qi.mouse.target)return}if(t)return;e.preventDefault(),e.stopPropagation()}};function $i(e){let t=Mi?["click"]:ki;for(let i,n=0;n<t.length;n++)i=t[n],e?(Vi.length=0,document.addEventListener(i,Hi,!0)):document.removeEventListener(i,Hi,!0)}function ji(e){let t=e.type;if(!Li(t))return!1;if("mousemove"===t){let t=void 0===e.buttons?1:e.buttons;return e instanceof window.MouseEvent&&!Oi&&(t=zi[e.which]||0),Boolean(1&t)}return 0===(void 0===e.button?0:e.button)}let qi={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function Yi(e,t,i){e.movefn=t,e.upfn=i,document.addEventListener("mousemove",t),document.addEventListener("mouseup",i)}function Ui(e){document.removeEventListener("mousemove",e.movefn),document.removeEventListener("mouseup",e.upfn),e.movefn=null,e.upfn=null}document.addEventListener("touchend",(function(e){qi.mouse.mouseIgnoreJob||$i(!0),qi.mouse.target=Wi(e)[0],qi.mouse.mouseIgnoreJob=vi.debounce(qi.mouse.mouseIgnoreJob,wt.after(Ti),(function(){$i(),qi.mouse.target=null,qi.mouse.mouseIgnoreJob=null}))}),!!Ni&&{passive:!0});const Wi=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:e=>e.composedPath&&e.composedPath()||[],Gi={},Ki=[];function Ji(e){const t=Wi(e);return t.length>0?t[0]:e.target}function Xi(e){let t,i=e.type,n=e.currentTarget[Si];if(!n)return;let s=n[i];if(s){if(!e[Ii]&&(e[Ii]={},"touch"===i.slice(0,5))){let t=(e=e).changedTouches[0];if("touchstart"===i&&1===e.touches.length&&(qi.touch.id=t.identifier),qi.touch.id!==t.identifier)return;Ci||"touchstart"!==i&&"touchmove"!==i||function(e){let t=e.changedTouches[0],i=e.type;if("touchstart"===i)qi.touch.x=t.clientX,qi.touch.y=t.clientY,qi.touch.scrollDecided=!1;else if("touchmove"===i){if(qi.touch.scrollDecided)return;qi.touch.scrollDecided=!0;let i=function(e){let t="auto",i=Wi(e);for(let e,n=0;n<i.length;n++)if((e=i[n])[Pi]){t=e[Pi];break}return t}(e),n=!1,s=Math.abs(qi.touch.x-t.clientX),o=Math.abs(qi.touch.y-t.clientY);e.cancelable&&("none"===i?n=!0:"pan-x"===i?n=o>s:"pan-y"===i&&(n=s>o)),n?e.preventDefault():sn("track")}}(e)}if(!(t=e[Ii]).skip){for(let i,n=0;n<Ki.length;n++)s[(i=Ki[n]).name]&&!t[i.name]&&i.flow&&i.flow.start.indexOf(e.type)>-1&&i.reset&&i.reset();for(let n,o=0;o<Ki.length;o++)s[(n=Ki[o]).name]&&!t[n.name]&&(t[n.name]=!0,n[i](e))}}}function Zi(e,t,i){return!!Gi[t]&&(function(e,t,i){let n=Gi[t],s=n.deps,o=n.name,r=e[Si];r||(e[Si]=r={});for(let t,i,n=0;n<s.length;n++)t=s[n],Mi&&Li(t)&&"click"!==t||((i=r[t])||(r[t]=i={_count:0}),0===i._count&&e.addEventListener(t,Xi,Ri(t)),i[o]=(i[o]||0)+1,i._count=(i._count||0)+1);e.addEventListener(t,i),n.touchAction&&tn(e,n.touchAction)}(e,t,i),!0)}function Qi(e,t,i){return!!Gi[t]&&(function(e,t,i){let n=Gi[t],s=n.deps,o=n.name,r=e[Si];if(r)for(let t,i,n=0;n<s.length;n++)t=s[n],(i=r[t])&&i[o]&&(i[o]=(i[o]||1)-1,i._count=(i._count||1)-1,0===i._count&&e.removeEventListener(t,Xi,Ri(t)));e.removeEventListener(t,i)}(e,t,i),!0)}function en(e){Ki.push(e);for(let t=0;t<e.emits.length;t++)Gi[e.emits[t]]=e}function tn(e,t){Ci&&e instanceof HTMLElement&&St.run(()=>{e.style.touchAction=t}),e[Pi]=t}function nn(e,t,i){let n=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(n.detail=i,et(e).dispatchEvent(n),n.defaultPrevented){let e=i.preventer||i.sourceEvent;e&&e.preventDefault&&e.preventDefault()}}function sn(e){let t=function(e){for(let t,i=0;i<Ki.length;i++){t=Ki[i];for(let i,n=0;n<t.emits.length;n++)if((i=t.emits[n])===e)return t}return null}(e);t.info&&(t.info.prevent=!0)}function on(e,t,i,n){t&&nn(t,e,{x:i.clientX,y:i.clientY,sourceEvent:i,preventer:n,prevent:function(e){return sn(e)}})}function rn(e,t,i){if(e.prevent)return!1;if(e.started)return!0;let n=Math.abs(e.x-t),s=Math.abs(e.y-i);return n>=Ai||s>=Ai}function an(e,t,i){if(!t)return;let n,s=e.moves[e.moves.length-2],o=e.moves[e.moves.length-1],r=o.x-e.x,a=o.y-e.y,l=0;s&&(n=o.x-s.x,l=o.y-s.y),nn(t,"track",{state:e.state,x:i.clientX,y:i.clientY,dx:r,dy:a,ddx:n,ddy:l,sourceEvent:i,hover:function(){return function(e,t){let i=document.elementFromPoint(e,t),n=i;for(;n&&n.shadowRoot&&!window.ShadyDOM;){if(n===(n=n.shadowRoot.elementFromPoint(e,t)))break;n&&(i=n)}return i}(i.clientX,i.clientY)}})}function ln(e,t,i){let n=Math.abs(t.clientX-e.x),s=Math.abs(t.clientY-e.y),o=Ji(i||t);!o||Di[o.localName]&&o.hasAttribute("disabled")||(isNaN(n)||isNaN(s)||n<=Ei&&s<=Ei||function(e){if("click"===e.type){if(0===e.detail)return!0;let t=Ji(e);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;let i=t.getBoundingClientRect(),n=e.pageX,s=e.pageY;return!(n>=i.left&&n<=i.right&&s>=i.top&&s<=i.bottom)}return!1}(t))&&(e.prevent||nn(o,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:i}))}en({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){Ui(this.info)},mousedown:function(e){if(!ji(e))return;let t=Ji(e),i=this;Yi(this.info,(function(e){ji(e)||(on("up",t,e),Ui(i.info))}),(function(e){ji(e)&&on("up",t,e),Ui(i.info)})),on("down",t,e)},touchstart:function(e){on("down",Ji(e),e.changedTouches[0],e)},touchend:function(e){on("up",Ji(e),e.changedTouches[0],e)}}),en({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(e){this.moves.length>2&&this.moves.shift(),this.moves.push(e)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,Ui(this.info)},mousedown:function(e){if(!ji(e))return;let t=Ji(e),i=this,n=function(e){let n=e.clientX,s=e.clientY;rn(i.info,n,s)&&(i.info.state=i.info.started?"mouseup"===e.type?"end":"track":"start","start"===i.info.state&&sn("tap"),i.info.addMove({x:n,y:s}),ji(e)||(i.info.state="end",Ui(i.info)),t&&an(i.info,t,e),i.info.started=!0)};Yi(this.info,n,(function(e){i.info.started&&n(e),Ui(i.info)})),this.info.x=e.clientX,this.info.y=e.clientY},touchstart:function(e){let t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove:function(e){let t=Ji(e),i=e.changedTouches[0],n=i.clientX,s=i.clientY;rn(this.info,n,s)&&("start"===this.info.state&&sn("tap"),this.info.addMove({x:n,y:s}),an(this.info,t,i),this.info.state="track",this.info.started=!0)},touchend:function(e){let t=Ji(e),i=e.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:i.clientX,y:i.clientY}),an(this.info,t,i))}}),en({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(e){ji(e)&&(this.info.x=e.clientX,this.info.y=e.clientY)},click:function(e){ji(e)&&ln(this.info,e)},touchstart:function(e){const t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend:function(e){ln(this.info,e.changedTouches[0],e)}});const dn=Qe(e=>{return class extends e{_addEventListenerToNode(e,t,i){Zi(e,t,i)||super._addEventListenerToNode(e,t,i)}_removeEventListenerFromNode(e,t,i){Qi(e,t,i)||super._removeEventListenerFromNode(e,t,i)}}}),cn=/:host\(:dir\((ltr|rtl)\)\)/g,hn=':host([dir="$1"])',un=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,pn=':host([dir="$2"]) $1',mn=/:dir\((?:ltr|rtl)\)/,_n=Boolean(window.ShadyDOM&&window.ShadyDOM.inUse),fn=[];let yn=null,gn="";function vn(){gn=document.documentElement.getAttribute("dir")}function bn(e){if(!e.__autoDirOptOut){e.setAttribute("dir",gn)}}function wn(){vn(),gn=document.documentElement.getAttribute("dir");for(let e=0;e<fn.length;e++)bn(fn[e])}const xn=Qe(e=>{_n||yn||(vn(),(yn=new MutationObserver(wn)).observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const t=Tt(e);class i extends t{static _processStyleText(e,t){return e=super._processStyleText(e,t),!_n&&mn.test(e)&&(e=this._replaceDirInCssText(e),this.__activateDir=!0),e}static _replaceDirInCssText(e){let t=e;return t=(t=t.replace(cn,hn)).replace(un,pn)}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){t.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(yn&&yn.takeRecords().length&&wn(),fn.push(this),bn(this))}disconnectedCallback(){if(t.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const e=fn.indexOf(this);e>-1&&fn.splice(e,1)}}}return i.__activateDir=!1,i});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Cn=!1,Sn=[],In=[];function Pn(){Cn=!0,requestAnimationFrame((function(){Cn=!1,En(Sn),setTimeout((function(){!function(e){for(let t=0,i=e.length;t<i;t++)An(e.shift())}(In)}))}))}function En(e){for(;e.length;)An(e.shift())}function An(e){const t=e[0],i=e[1],n=e[2];try{i.apply(t,n)}catch(e){setTimeout(()=>{throw e})}}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function Tn(){document.body.removeAttribute("unresolved")}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function kn(e,t,i){return{index:e,removed:t,addedCount:i}}"interactive"===document.readyState||"complete"===document.readyState?Tn():window.addEventListener("DOMContentLoaded",Tn);const zn=0,On=1,Ln=2,Nn=3;function Rn(e,t,i,n,s,o){let r,a=0,l=0,d=Math.min(i-t,o-s);if(0==t&&0==s&&(a=function(e,t,i){for(let n=0;n<i;n++)if(!Vn(e[n],t[n]))return n;return i}(e,n,d)),i==e.length&&o==n.length&&(l=function(e,t,i){let n=e.length,s=t.length,o=0;for(;o<i&&Vn(e[--n],t[--s]);)o++;return o}(e,n,d-a)),s+=a,o-=l,(i-=l)-(t+=a)==0&&o-s==0)return[];if(t==i){for(r=kn(t,[],0);s<o;)r.removed.push(n[s++]);return[r]}if(s==o)return[kn(t,[],i-t)];let c=function(e){let t=e.length-1,i=e[0].length-1,n=e[t][i],s=[];for(;t>0||i>0;){if(0==t){s.push(Ln),i--;continue}if(0==i){s.push(Nn),t--;continue}let o,r=e[t-1][i-1],a=e[t-1][i],l=e[t][i-1];(o=a<l?a<r?a:r:l<r?l:r)==r?(r==n?s.push(zn):(s.push(On),n=r),t--,i--):o==a?(s.push(Nn),t--,n=a):(s.push(Ln),i--,n=l)}return s.reverse(),s}(function(e,t,i,n,s,o){let r=o-s+1,a=i-t+1,l=new Array(r);for(let e=0;e<r;e++)l[e]=new Array(a),l[e][0]=e;for(let e=0;e<a;e++)l[0][e]=e;for(let i=1;i<r;i++)for(let o=1;o<a;o++)if(Vn(e[t+o-1],n[s+i-1]))l[i][o]=l[i-1][o-1];else{let e=l[i-1][o]+1,t=l[i][o-1]+1;l[i][o]=e<t?e:t}return l}(e,t,i,n,s,o));r=void 0;let h=[],u=t,p=s;for(let e=0;e<c.length;e++)switch(c[e]){case zn:r&&(h.push(r),r=void 0),u++,p++;break;case On:r||(r=kn(u,[],0)),r.addedCount++,u++,r.removed.push(n[p]),p++;break;case Ln:r||(r=kn(u,[],0)),r.addedCount++,u++;break;case Nn:r||(r=kn(u,[],0)),r.removed.push(n[p]),p++}return r&&h.push(r),h}function Mn(e,t){return Rn(e,0,e.length,t,0,t.length)}function Vn(e,t){return e===t}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Fn(e){return"slot"===e.localName}let Dn=class{static getFlattenedNodes(e){const t=et(e);return Fn(e)?(e=e,t.assignedNodes({flatten:!0})):Array.from(t.childNodes).map(e=>Fn(e)?et(e=e).assignedNodes({flatten:!0}):[e]).reduce((e,t)=>e.concat(t),[])}constructor(e,t){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=e,this.callback=t,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){Fn(this._target)?this._listenSlots([this._target]):et(this._target).children&&(this._listenSlots(et(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=ShadyDOM.observeChildren(this._target,e=>{this._processMutations(e)}):(this._nativeChildrenObserver=new MutationObserver(e=>{this._processMutations(e)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){Fn(this._target)?this._unlistenSlots([this._target]):et(this._target).children&&(this._unlistenSlots(et(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,St.run(()=>this.flush()))}_processMutations(e){this._processSlotMutations(e),this.flush()}_processSlotMutations(e){if(e)for(let t=0;t<e.length;t++){let i=e[t];i.addedNodes&&this._listenSlots(i.addedNodes),i.removedNodes&&this._unlistenSlots(i.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let e={target:this._target,addedNodes:[],removedNodes:[]},t=this.constructor.getFlattenedNodes(this._target),i=Mn(t,this._effectiveNodes);for(let t,n=0;n<i.length&&(t=i[n]);n++)for(let i,n=0;n<t.removed.length&&(i=t.removed[n]);n++)e.removedNodes.push(i);for(let n,s=0;s<i.length&&(n=i[s]);s++)for(let i=n.index;i<n.index+n.addedCount;i++)e.addedNodes.push(t[i]);this._effectiveNodes=t;let n=!1;return(e.addedNodes.length||e.removedNodes.length)&&(n=!0,this.callback.call(this._target,e)),n}_listenSlots(e){for(let t=0;t<e.length;t++){let i=e[t];Fn(i)&&i.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(e){for(let t=0;t<e.length;t++){let i=e[t];Fn(i)&&i.removeEventListener("slotchange",this._boundSchedule)}}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Bn=function(){let e,t;do{e=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),t=xi()}while(e||t)},Hn=Element.prototype,$n=Hn.matches||Hn.matchesSelector||Hn.mozMatchesSelector||Hn.msMatchesSelector||Hn.oMatchesSelector||Hn.webkitMatchesSelector,jn=function(e,t){return $n.call(e,t)};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class qn{constructor(e){this.node=e}observeNodes(e){return new Dn(this.node,e)}unobserveNodes(e){e.disconnect()}notifyObserver(){}deepContains(e){if(et(this.node).contains(e))return!0;let t=e,i=e.ownerDocument;for(;t&&t!==i&&t!==this.node;)t=et(t).parentNode||et(t).host;return t===this.node}getOwnerRoot(){return et(this.node).getRootNode()}getDistributedNodes(){return"slot"===this.node.localName?et(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let e=[],t=et(this.node).assignedSlot;for(;t;)e.push(t),t=et(t).assignedSlot;return e}importNode(e,t){let i=this.node instanceof Document?this.node:this.node.ownerDocument;return et(i).importNode(e,t)}getEffectiveChildNodes(){return Dn.getFlattenedNodes(this.node)}queryDistributedElements(e){let t=this.getEffectiveChildNodes(),i=[];for(let n,s=0,o=t.length;s<o&&(n=t[s]);s++)n.nodeType===Node.ELEMENT_NODE&&jn(n,e)&&i.push(n);return i}get activeElement(){let e=this.node;return void 0!==e._activeElement?e._activeElement:e.activeElement}}function Yn(e,t){for(let i=0;i<t.length;i++){let n=t[i];Object.defineProperty(e,n,{get:function(){return this.node[n]},configurable:!0})}}class Un{constructor(e){this.event=e}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}qn.prototype.cloneNode,qn.prototype.appendChild,qn.prototype.insertBefore,qn.prototype.removeChild,qn.prototype.replaceChild,qn.prototype.setAttribute,qn.prototype.removeAttribute,qn.prototype.querySelector,qn.prototype.querySelectorAll,qn.prototype.parentNode,qn.prototype.firstChild,qn.prototype.lastChild,qn.prototype.nextSibling,qn.prototype.previousSibling,qn.prototype.firstElementChild,qn.prototype.lastElementChild,qn.prototype.nextElementSibling,qn.prototype.previousElementSibling,qn.prototype.childNodes,qn.prototype.children,qn.prototype.classList,qn.prototype.textContent,qn.prototype.innerHTML;let Wn=qn;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class e extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(qn.prototype).forEach(t=>{"activeElement"!=t&&(e.prototype[t]=qn.prototype[t])}),Yn(e.prototype,["classList"]),Wn=e,Object.defineProperties(Un.prototype,{localTarget:{get(){return this.event.currentTarget},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else!function(e,t){for(let i=0;i<t.length;i++){let n=t[i];e[n]=function(){return this.node[n].apply(this.node,arguments)}}}(qn.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll"]),Yn(qn.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList"]),function(e,t){for(let i=0;i<t.length;i++){let n=t[i];Object.defineProperty(e,n,{get:function(){return this.node[n]},set:function(e){this.node[n]=e},configurable:!0})}}(qn.prototype,["textContent","innerHTML"]);const Gn=function(e){if((e=e||document)instanceof Wn)return e;if(e instanceof Un)return e;let t=e.__domApi;return t||(t=e instanceof Event?new Un(e):new Wn(e),e.__domApi=t),t};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let Kn=window.ShadyCSS;const Jn=Qe(e=>{const t=xn(dn(gi(e))),i={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class n extends t{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers}static get importMeta(){return this.prototype.importMeta}created(){}connectedCallback(){super.connectedCallback(),this.isAttached=!0,this.attached()}attached(){}disconnectedCallback(){super.disconnectedCallback(),this.isAttached=!1,this.detached()}detached(){}attributeChangedCallback(e,t,i,n){t!==i&&(super.attributeChangedCallback(e,t,i,n),this.attributeChanged(e,t,i))}attributeChanged(e,t,i){}_initializeProperties(){let e=Object.getPrototypeOf(this);e.hasOwnProperty("__hasRegisterFinished")||(this._registered(),e.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),this._applyListeners()}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(e){return this._serializeValue(e)}deserialize(e,t){return this._deserializeValue(e,t)}reflectPropertyToAttribute(e,t,i){this._propertyToAttribute(e,t,i)}serializeValueToAttribute(e,t,i){this._valueToNodeAttribute(i||this,e,t)}extend(e,t){if(!e||!t)return e||t;let i=Object.getOwnPropertyNames(t);for(let n,s=0;s<i.length&&(n=i[s]);s++){let i=Object.getOwnPropertyDescriptor(t,n);i&&Object.defineProperty(e,n,i)}return e}mixin(e,t){for(let i in t)e[i]=t[i];return e}chainObject(e,t){return e&&t&&e!==t&&(e.__proto__=t),e}instanceTemplate(e){let t=this.constructor._contentForTemplate(e);return document.importNode(t,!0)}fire(e,t,i){i=i||{},t=null==t?{}:t;let n=new Event(e,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});n.detail=t;let s=i.node||this;return et(s).dispatchEvent(n),n}listen(e,t,i){e=e||this;let n=this.__boundListeners||(this.__boundListeners=new WeakMap),s=n.get(e);s||(s={},n.set(e,s));let o=t+i;s[o]||(s[o]=this._addMethodEventListenerToNode(e,t,i,this))}unlisten(e,t,i){e=e||this;let n=this.__boundListeners&&this.__boundListeners.get(e),s=t+i,o=n&&n[s];o&&(this._removeEventListenerFromNode(e,t,o),n[s]=null)}setScrollDirection(e,t){tn(t||this,i[e]||"auto")}$$(e){return this.root.querySelector(e)}get domHost(){let e=et(this).getRootNode();return e instanceof DocumentFragment?e.host:e}distributeContent(){const e=Gn(this);window.ShadyDOM&&e.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return Gn(this).getEffectiveChildNodes()}queryDistributedElements(e){return Gn(this).queryDistributedElements(e)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter((function(e){return e.nodeType===Node.ELEMENT_NODE}))}getEffectiveTextContent(){let e=this.getEffectiveChildNodes(),t=[];for(let i,n=0;i=e[n];n++)i.nodeType!==Node.COMMENT_NODE&&t.push(i.textContent);return t.join("")}queryEffectiveChildren(e){let t=this.queryDistributedElements(e);return t&&t[0]}queryAllEffectiveChildren(e){return this.queryDistributedElements(e)}getContentChildNodes(e){let t=this.root.querySelector(e||"slot");return t?Gn(t).getDistributedNodes():[]}getContentChildren(e){return this.getContentChildNodes(e).filter((function(e){return e.nodeType===Node.ELEMENT_NODE}))}isLightDescendant(e){return this!==e&&et(this).contains(e)&&et(this).getRootNode()===et(e).getRootNode()}isLocalDescendant(e){return this.root===et(e).getRootNode()}scopeSubtree(e,t){}getComputedStyleValue(e){return Kn.getComputedStyleValue(this,e)}debounce(e,t,i){return this._debouncers=this._debouncers||{},this._debouncers[e]=vi.debounce(this._debouncers[e],i>0?wt.after(i):St,t.bind(this))}isDebouncerActive(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];return!(!t||!t.isActive())}flushDebouncer(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];t&&t.flush()}cancelDebouncer(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];t&&t.cancel()}async(e,t){return t>0?wt.run(e.bind(this),t):~St.run(e.bind(this))}cancelAsync(e){e<0?St.cancel(~e):wt.cancel(e)}create(e,t){let i=document.createElement(e);if(t)if(i.setProperties)i.setProperties(t);else for(let e in t)i[e]=t[e];return i}elementMatches(e,t){return jn(t||this,e)}toggleAttribute(e,t){let i=this;return 3===arguments.length&&(i=arguments[2]),1==arguments.length&&(t=!i.hasAttribute(e)),t?(et(i).setAttribute(e,""),!0):(et(i).removeAttribute(e),!1)}toggleClass(e,t,i){i=i||this,1==arguments.length&&(t=!i.classList.contains(e)),t?i.classList.add(e):i.classList.remove(e)}transform(e,t){(t=t||this).style.webkitTransform=e,t.style.transform=e}translate3d(e,t,i,n){n=n||this,this.transform("translate3d("+e+","+t+","+i+")",n)}arrayDelete(e,t){let i;if(Array.isArray(e)){if((i=e.indexOf(t))>=0)return e.splice(i,1)}else{if((i=dt(this,e).indexOf(t))>=0)return this.splice(e,i,1)}return null}_logger(e,t){switch(Array.isArray(t)&&1===t.length&&Array.isArray(t[0])&&(t=t[0]),e){case"log":case"warn":case"error":console[e](...t)}}_log(...e){this._logger("log",e)}_warn(...e){this._logger("warn",e)}_error(...e){this._logger("error",e)}_logf(e,...t){return["[%s::%s]",this.is,e,...t]}}return n.prototype.is="",n}),Xn={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},Zn={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},Qn=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},Zn);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function es(e,t,i,n){!function(e,t,i){const n=e._noAccessors,s=Object.getOwnPropertyNames(e);for(let o=0;o<s.length;o++){let r=s[o];if(!(r in i))if(n)t[r]=e[r];else{let i=Object.getOwnPropertyDescriptor(e,r);i&&(i.configurable=!0,Object.defineProperty(t,r,i))}}}(t,e,n);for(let e in Xn)t[e]&&(i[e]=i[e]||[],i[e].push(t[e]))}function ts(e,t){for(const i in t){const n=e[i],s=t[i];e[i]=!("value"in s)&&n&&"value"in n?Object.assign({value:n.value},s):s}}function is(e,t,i){let n;const s={};class o extends t{static _finalizeClass(){if(this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this))){if(n)for(let e,t=0;t<n.length;t++)(e=n[t]).properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties);e.properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties),this._prepareTemplate()}else super._finalizeClass()}static get properties(){const t={};if(n)for(let e=0;e<n.length;e++)ts(t,n[e].properties);return ts(t,e.properties),t}static get observers(){let t=[];if(n)for(let e,i=0;i<n.length;i++)(e=n[i]).observers&&(t=t.concat(e.observers));return e.observers&&(t=t.concat(e.observers)),t}created(){super.created();const e=s.created;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}_registered(){const e=o.prototype;if(!e.hasOwnProperty("__hasRegisterFinished")){e.__hasRegisterFinished=!0,super._registered(),D&&r(e);const t=Object.getPrototypeOf(this);let i=s.beforeRegister;if(i)for(let e=0;e<i.length;e++)i[e].call(t);if(i=s.registered)for(let e=0;e<i.length;e++)i[e].call(t)}}_applyListeners(){super._applyListeners();const e=s.listeners;if(e)for(let t=0;t<e.length;t++){const i=e[t];if(i)for(let e in i)this._addMethodEventListenerToNode(this,e,i[e])}}_ensureAttributes(){const e=s.hostAttributes;if(e)for(let t=e.length-1;t>=0;t--){const i=e[t];for(let e in i)this._ensureAttribute(e,i[e])}super._ensureAttributes()}ready(){super.ready();let e=s.ready;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}attached(){super.attached();let e=s.attached;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}detached(){super.detached();let e=s.detached;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}attributeChanged(e,t,i){super.attributeChanged();let n=s.attributeChanged;if(n)for(let s=0;s<n.length;s++)n[s].call(this,e,t,i)}}if(i){Array.isArray(i)||(i=[i]);let e=t.prototype.behaviors;n=function e(t,i,n){i=i||[];for(let s=t.length-1;s>=0;s--){let o=t[s];o?Array.isArray(o)?e(o,i):i.indexOf(o)<0&&(!n||n.indexOf(o)<0)&&i.unshift(o):console.warn("behavior is null, check for missing or 404 import")}return i}(i,null,e),o.prototype.behaviors=e?e.concat(i):n}const r=t=>{n&&function(e,t,i){for(let n=0;n<t.length;n++)es(e,t[n],i,Qn)}(t,n,s),es(t,e,s,Zn)};return D||r(o.prototype),o.generatedFrom=e,o}const ns=function(e){let t;return t="function"==typeof e?e:ns.Class(e),customElements.define(t.is,t),t};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function ss(e,t,i,n,s){let o;s&&(o="object"==typeof i&&null!==i)&&(n=e.__dataTemp[t]);let r=n!==i&&(n==n||i==i);return o&&r&&(e.__dataTemp[t]=i),r}ns.Class=function(e,t){e||console.warn("Polymer.Class requires `info` argument");let i=t?t(Jn(HTMLElement)):Jn(HTMLElement);return(i=is(e,i,e.behaviors)).is=i.prototype.is=e.is,i};const os=Qe(e=>{return class extends e{_shouldPropertyChange(e,t,i){return ss(this,e,t,i,!0)}}}),rs=Qe(e=>{return class extends e{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(e,t,i){return ss(this,e,t,i,this.mutableData)}}});os._mutablePropertyChange=ss;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let as=null;function ls(){return as}ls.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:ls,writable:!0}});const ds=ui(ls),cs=os(ds);const hs=ui(class{});class us extends hs{constructor(e){super(),this._configureProperties(e),this.root=this._stampTemplate(this.__dataHost);let t=this.children=[];for(let e=this.root.firstChild;e;e=e.nextSibling)t.push(e),e.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let i=this.__templatizeOptions;(e&&i.instanceProps||!i.instanceProps)&&this._enableProperties()}_configureProperties(e){if(this.__templatizeOptions.forwardHostProp)for(let e in this.__hostProps)this._setPendingProperty(e,this.__dataHost["_host_"+e]);for(let t in e)this._setPendingProperty(t,e[t])}forwardHostProp(e,t){this._setPendingPropertyOrPath(e,t,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(e,t,i){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(e,t,e=>{e.model=this,i(e)});else{let n=this.__dataHost.__dataHost;n&&n._addEventListenerToNode(e,t,i)}}_showHideChildren(e){let t=this.children;for(let i=0;i<t.length;i++){let n=t[i];if(Boolean(e)!=Boolean(n.__hideTemplateChildren__))if(n.nodeType===Node.TEXT_NODE)e?(n.__polymerTextContent__=n.textContent,n.textContent=""):n.textContent=n.__polymerTextContent__;else if("slot"===n.localName)if(e)n.__polymerReplaced__=document.createComment("hidden-slot"),et(et(n).parentNode).replaceChild(n.__polymerReplaced__,n);else{const e=n.__polymerReplaced__;e&&et(et(e).parentNode).replaceChild(n,e)}else n.style&&(e?(n.__polymerDisplay__=n.style.display,n.style.display="none"):n.style.display=n.__polymerDisplay__);n.__hideTemplateChildren__=e,n._showHideChildren&&n._showHideChildren(e)}}_setUnmanagedPropertyToNode(e,t,i){e.__hideTemplateChildren__&&e.nodeType==Node.TEXT_NODE&&"textContent"==t?e.__polymerTextContent__=i:super._setUnmanagedPropertyToNode(e,t,i)}get parentModel(){let e=this.__parentModel;if(!e){let t;e=this;do{e=e.__dataHost.__dataHost}while((t=e.__templatizeOptions)&&!t.parentModel);this.__parentModel=e}return e}dispatchEvent(e){return!0}}us.prototype.__dataHost,us.prototype.__templatizeOptions,us.prototype._methodHost,us.prototype.__templatizeOwner,us.prototype.__hostProps;const ps=os(us);function ms(e){let t=e.__dataHost;return t&&t._methodHost||t}function _s(e,t,i){let n=i.mutableData?ps:us;vs.mixin&&(n=vs.mixin(n));let s=class extends n{};return s.prototype.__templatizeOptions=i,s.prototype._bindTemplate(e),function(e,t,i,n){let s=i.hostProps||{};for(let t in n.instanceProps){delete s[t];let i=n.notifyInstanceProp;i&&e.prototype._addPropertyEffect(t,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:gs(t,i)})}if(n.forwardHostProp&&t.__dataHost)for(let t in s)e.prototype._addPropertyEffect(t,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:function(e,t,i){e.__dataHost._setPendingPropertyOrPath("_host_"+t,i[t],!0,!0)}})}(s,e,t,i),s}function fs(e,t,i){let n=i.forwardHostProp;if(n){let s=t.templatizeTemplateClass;if(!s){let e=i.mutableData?cs:ds;s=t.templatizeTemplateClass=class extends e{};let o=t.hostProps;for(let e in o)s.prototype._addPropertyEffect("_host_"+e,s.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:ys(e,n)}),s.prototype._createNotifyingProperty("_host_"+e)}!function(e,t){as=e,Object.setPrototypeOf(e,t.prototype),new t,as=null}(e,s),e.__dataProto&&Object.assign(e.__data,e.__dataProto),e.__dataTemp={},e.__dataPending=null,e.__dataOld=null,e._enableProperties()}}function ys(e,t){return function(e,i,n){t.call(e.__templatizeOwner,i.substring("_host_".length),n[i])}}function gs(e,t){return function(e,i,n){t.call(e.__templatizeOwner,e,i,n[i])}}function vs(e,t,i){if(V&&!ms(e))throw new Error("strictTemplatePolicy: template owner not trusted");if(i=i||{},e.__templatizeOwner)throw new Error("A <template> can only be templatized once");e.__templatizeOwner=t;let n=(t?t.constructor:us)._parseTemplate(e),s=n.templatizeInstanceClass;s||(s=_s(e,n,i),n.templatizeInstanceClass=s),fs(e,n,i);let o=class extends s{};return o.prototype._methodHost=ms(e),o.prototype.__dataHost=e,o.prototype.__templatizeOwner=t,o.prototype.__hostProps=n.hostProps,o=o}function bs(e,t){let i;for(;t;)if(i=t.__templatizeInstance){if(i.__dataHost==e)return i;t=i.__dataHost}else t=et(t).parentNode;return null}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ws={templatize(e,t){this._templatizerTemplate=e,this.ctor=vs(e,this,{mutableData:Boolean(t),parentModel:this._parentModel,instanceProps:this._instanceProps,forwardHostProp:this._forwardHostPropV2,notifyInstanceProp:this._notifyInstancePropV2})},stamp(e){return new this.ctor(e)},modelForElement(e){return bs(this._templatizerTemplate,e)}},xs=dn(rs(ui(HTMLElement)));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/customElements.define("dom-bind",class extends xs{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),V)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}attributeChangedCallback(){this.mutableData=!0}connectedCallback(){this.style.display="none",this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){et(et(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let e=0;e<this.__children.length;e++)this.root.appendChild(this.__children[e])}render(){let e;if(!this.__children){if(!(e=e||this.querySelector("template"))){let t=new MutationObserver(()=>{if(!(e=this.querySelector("template")))throw new Error("dom-bind requires a <template> child");t.disconnect(),this.render()});return void t.observe(this,{childList:!0})}this.root=this._stampTemplate(e),this.$=this.root.$,this.__children=[];for(let e=this.root.firstChild;e;e=e.nextSibling)this.__children[this.__children.length]=e;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class Cs{constructor(e){this.value=e.toString()}toString(){return this.value}}function Ss(e){if(e instanceof Cs)return e.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${e}`)}const Is=function(e,...t){const i=document.createElement("template");return i.innerHTML=t.reduce((t,i,n)=>t+function(e){if(e instanceof HTMLTemplateElement)return e.innerHTML;if(e instanceof Cs)return Ss(e);throw new Error(`non-template value passed to Polymer's html function: ${e}`)}(i)+e[n+1],e[0]),i},Ps=gi(HTMLElement),Es=rs(Ps);class As extends Es{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!0,readOnly:!0},initialCount:{type:Number,observer:"__initializeChunking"},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__limit=1/0,this.__pool=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__lastChunkTime=null,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let e=0;e<this.__instances.length;e++)this.__detachInstance(e)}connectedCallback(){if(super.connectedCallback(),this.style.display="none",this.__isDetached){this.__isDetached=!1;let e=et(et(this).parentNode);for(let t=0;t<this.__instances.length;t++)this.__attachInstance(t,e)}}__ensureTemplatized(){if(!this.__ctor){let e=this.template=this.querySelector("template");if(!e){let e=new MutationObserver(()=>{if(!this.querySelector("template"))throw new Error("dom-repeat requires a <template> child");e.disconnect(),this.__render()});return e.observe(this,{childList:!0}),!1}let t={};t[this.as]=!0,t[this.indexAs]=!0,t[this.itemsIndexAs]=!0,this.__ctor=vs(e,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:t,forwardHostProp:function(e,t){let i=this.__instances;for(let n,s=0;s<i.length&&(n=i[s]);s++)n.forwardHostProp(e,t)},notifyInstanceProp:function(e,t,i){if(rt(this.as,t)){let n=e[this.itemsIndexAs];t==this.as&&(this.items[n]=i);let s=ot(this.as,`${JSCompiler_renameProperty("items",this)}.${n}`,t);this.notifyPath(s,i)}}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(e){if("string"==typeof e){let t=e,i=this.__getMethodHost();return function(){return i[t].apply(i,arguments)}}return e}__sortChanged(e){this.__sortFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__filterChanged(e){this.__filterFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(e){return Math.ceil(1e3/e)}__initializeChunking(){this.initialCount&&(this.__limit=this.initialCount,this.__chunkCount=this.initialCount,this.__lastChunkTime=performance.now())}__tryRenderChunk(){this.items&&this.__limit<this.items.length&&this.__debounceRender(this.__requestRenderChunk)}__requestRenderChunk(){requestAnimationFrame(()=>this.__renderChunk())}__renderChunk(){let e=performance.now(),t=this._targetFrameTime/(e-this.__lastChunkTime);this.__chunkCount=Math.round(this.__chunkCount*t)||1,this.__limit+=this.__chunkCount,this.__lastChunkTime=e,this.__debounceRender(this.__render)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__itemsChanged(e){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(e.path,e.value)||(this.__initializeChunking(),this.__debounceRender(this.__render))}__handleObservedPaths(e){if(this.__sortFn||this.__filterFn)if(e){if(this.__observePaths){let t=this.__observePaths;for(let i=0;i<t.length;i++)0===e.indexOf(t[i])&&this.__debounceRender(this.__render,this.delay)}}else this.__debounceRender(this.__render,this.delay)}__debounceRender(e,t=0){this.__renderDebouncer=vi.debounce(this.__renderDebouncer,t>0?wt.after(t):St,e.bind(this)),wi(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),Bn()}__render(){this.__ensureTemplatized()&&(this.__applyFullRefresh(),this.__pool.length=0,this._setRenderedItemCount(this.__instances.length),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this.__tryRenderChunk())}__applyFullRefresh(){let e=this.items||[],t=new Array(e.length);for(let i=0;i<e.length;i++)t[i]=i;this.__filterFn&&(t=t.filter((t,i,n)=>this.__filterFn(e[t],i,n))),this.__sortFn&&t.sort((t,i)=>this.__sortFn(e[t],e[i]));const i=this.__itemsIdxToInstIdx={};let n=0;const s=Math.min(t.length,this.__limit);for(;n<s;n++){let s=this.__instances[n],o=t[n],r=e[o];i[o]=n,s?(s._setPendingProperty(this.as,r),s._setPendingProperty(this.indexAs,n),s._setPendingProperty(this.itemsIndexAs,o),s._flushProperties()):this.__insertInstance(r,n,o)}for(let e=this.__instances.length-1;e>=n;e--)this.__detachAndRemoveInstance(e)}__detachInstance(e){let t=this.__instances[e];const i=et(t.root);for(let e=0;e<t.children.length;e++){let n=t.children[e];i.appendChild(n)}return t}__attachInstance(e,t){let i=this.__instances[e];t.insertBefore(i.root,this)}__detachAndRemoveInstance(e){let t=this.__detachInstance(e);t&&this.__pool.push(t),this.__instances.splice(e,1)}__stampInstance(e,t,i){let n={};return n[this.as]=e,n[this.indexAs]=t,n[this.itemsIndexAs]=i,new this.__ctor(n)}__insertInstance(e,t,i){let n=this.__pool.pop();n?(n._setPendingProperty(this.as,e),n._setPendingProperty(this.indexAs,t),n._setPendingProperty(this.itemsIndexAs,i),n._flushProperties()):n=this.__stampInstance(e,t,i);let s=this.__instances[t+1],o=s?s.children[0]:this;return et(et(this).parentNode).insertBefore(n.root,o),this.__instances[t]=n,n}_showHideChildren(e){for(let t=0;t<this.__instances.length;t++)this.__instances[t]._showHideChildren(e)}__handleItemPath(e,t){let i=e.slice(6),n=i.indexOf("."),s=n<0?i:i.substring(0,n);if(s==parseInt(s,10)){let e=n<0?"":i.substring(n+1);this.__handleObservedPaths(e);let o=this.__itemsIdxToInstIdx[s],r=this.__instances[o];if(r){let i=this.as+(e?"."+e:"");r._setPendingPropertyOrPath(i,t,!1,!0),r._flushProperties()}return!0}}itemForElement(e){let t=this.modelForElement(e);return t&&t[this.as]}indexForElement(e){let t=this.modelForElement(e);return t&&t[this.indexAs]}modelForElement(e){return bs(this.template,e)}}customElements.define(As.is,As);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class Ts extends Ps{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"}}}constructor(){super(),this.__renderDebouncer=null,this.__invalidProps=null,this.__instance=null,this._lastIf=!1,this.__ctor=null,this.__hideTemplateChildren__=!1}__debounceRender(){this.__renderDebouncer=vi.debounce(this.__renderDebouncer,St,()=>this.__render()),wi(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const e=et(this).parentNode;e&&(e.nodeType!=Node.DOCUMENT_FRAGMENT_NODE||et(e).host)||this.__teardownInstance()}connectedCallback(){super.connectedCallback(),this.style.display="none",this.if&&this.__debounceRender()}render(){Bn()}__render(){if(this.if){if(!this.__ensureInstance())return;this._showHideChildren()}else this.restamp&&this.__teardownInstance();!this.restamp&&this.__instance&&this._showHideChildren(),this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__ensureInstance(){let e=et(this).parentNode;if(e){if(!this.__ctor){let e=et(this).querySelector("template");if(!e){let e=new MutationObserver(()=>{if(!et(this).querySelector("template"))throw new Error("dom-if requires a <template> child");e.disconnect(),this.__render()});return e.observe(this,{childList:!0}),!1}this.__ctor=vs(e,this,{mutableData:!0,forwardHostProp:function(e,t){this.__instance&&(this.if?this.__instance.forwardHostProp(e,t):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[it(e)]=!0))}})}if(this.__instance){this.__syncHostProperties();let t=this.__instance.children;if(t&&t.length){if(et(this).previousSibling!==t[t.length-1])for(let i,n=0;n<t.length&&(i=t[n]);n++)et(e).insertBefore(i,this)}}else this.__instance=new this.__ctor,et(e).insertBefore(this.__instance.root,this)}return!0}__syncHostProperties(){let e=this.__invalidProps;if(e){for(let t in e)this.__instance._setPendingProperty(t,this.__dataHost[t]);this.__invalidProps=null,this.__instance._flushProperties()}}__teardownInstance(){if(this.__instance){let e=this.__instance.children;if(e&&e.length){let t=et(e[0]).parentNode;if(t){t=et(t);for(let i,n=0;n<e.length&&(i=e[n]);n++)t.removeChild(i)}}this.__instance=null,this.__invalidProps=null}}_showHideChildren(){let e=this.__hideTemplateChildren__||!this.if;this.__instance&&this.__instance._showHideChildren(e)}}customElements.define(Ts.is,Ts);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let ks,zs=Qe(e=>{let t=gi(e);return class extends t{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(e,t){let i=t.path;if(i==JSCompiler_renameProperty("items",this)){let i=t.base||[],n=this.__lastItems;if(e!==this.__lastMulti&&this.clearSelection(),n){let e=Mn(i,n);this.__applySplices(e)}this.__lastItems=i,this.__lastMulti=e}else if(t.path==`${JSCompiler_renameProperty("items",this)}.splices`)this.__applySplices(t.value.indexSplices);else{let e=i.slice(`${JSCompiler_renameProperty("items",this)}.`.length),t=parseInt(e,10);e.indexOf(".")<0&&e==t&&this.__deselectChangedIdx(t)}}__applySplices(e){let t=this.__selectedMap;for(let i=0;i<e.length;i++){let n=e[i];t.forEach((e,i)=>{e<n.index||(e>=n.index+n.removed.length?t.set(i,e+n.addedCount-n.removed.length):t.set(i,-1))});for(let e=0;e<n.addedCount;e++){let i=n.index+e;t.has(this.items[i])&&t.set(this.items[i],i)}}this.__updateLinks();let i=0;t.forEach((e,n)=>{e<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),i,1):this.selected=this.selectedItem=null,t.delete(n)):i++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let e=0;this.__selectedMap.forEach(t=>{t>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${t}`,`${JSCompiler_renameProperty("selected",this)}.${e++}`)})}else this.__selectedMap.forEach(e=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${e}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${e}`)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(e){return this.__selectedMap.has(e)}isIndexSelected(e){return this.isSelected(this.items[e])}__deselectChangedIdx(e){let t=this.__selectedIndexForItemIndex(e);if(t>=0){let e=0;this.__selectedMap.forEach((i,n)=>{t==e++&&this.deselect(n)})}}__selectedIndexForItemIndex(e){let t=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${e}`];if(t)return parseInt(t.slice(`${JSCompiler_renameProperty("selected",this)}.`.length),10)}deselect(e){let t=this.__selectedMap.get(e);if(t>=0){let i;this.__selectedMap.delete(e),this.multi&&(i=this.__selectedIndexForItemIndex(t)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),i,1):this.selected=this.selectedItem=null}}deselectIndex(e){this.deselect(this.items[e])}select(e){this.selectIndex(this.items.indexOf(e))}selectIndex(e){let t=this.items[e];this.isSelected(t)?this.toggle&&this.deselectIndex(e):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(t,e),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),t):this.selected=this.selectedItem=t)}}})(Ps);class Os extends zs{static get is(){return"array-selector"}static get template(){return null}}customElements.define(Os.is,Os),ks=os._mutablePropertyChange;const Ls={properties:{mutableData:Boolean},_shouldPropertyChange(e,t,i){return ks(this,e,t,i,this.mutableData)}},Ns=Jn(HTMLElement).prototype,Rs=Is`
<custom-style>
  <style is="custom-style">
    [hidden] {
      display: none !important;
    }
  </style>
</custom-style>
<custom-style>
  <style is="custom-style">
    html {

      --layout: {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      };

      --layout-inline: {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      };

      --layout-horizontal: {
        @apply --layout;

        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      };

      --layout-horizontal-reverse: {
        @apply --layout;

        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      };

      --layout-vertical: {
        @apply --layout;

        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      };

      --layout-vertical-reverse: {
        @apply --layout;

        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      };

      --layout-wrap: {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      };

      --layout-wrap-reverse: {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      };

      --layout-flex-auto: {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      };

      --layout-flex-none: {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      };

      --layout-flex: {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      };

      --layout-flex-2: {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      };

      --layout-flex-3: {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      };

      --layout-flex-4: {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      };

      --layout-flex-5: {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      };

      --layout-flex-6: {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      };

      --layout-flex-7: {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      };

      --layout-flex-8: {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      };

      --layout-flex-9: {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      };

      --layout-flex-10: {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      };

      --layout-flex-11: {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      };

      --layout-flex-12: {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      };

      /* alignment in cross axis */

      --layout-start: {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      };

      --layout-center: {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      };

      --layout-end: {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      };

      --layout-baseline: {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      };

      /* alignment in main axis */

      --layout-start-justified: {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      };

      --layout-center-justified: {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      };

      --layout-end-justified: {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      };

      --layout-around-justified: {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      };

      --layout-justified: {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      };

      --layout-center-center: {
        @apply --layout-center;
        @apply --layout-center-justified;
      };

      /* self alignment */

      --layout-self-start: {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      };

      --layout-self-center: {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      };

      --layout-self-end: {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      };

      --layout-self-stretch: {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      };

      --layout-self-baseline: {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      };

      /* multi-line alignment in main axis */

      --layout-start-aligned: {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      };

      --layout-end-aligned: {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      };

      --layout-center-aligned: {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      };

      --layout-between-aligned: {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      };

      --layout-around-aligned: {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      };

      /*******************************
                Other Layout
      *******************************/

      --layout-block: {
        display: block;
      };

      --layout-invisible: {
        visibility: hidden !important;
      };

      --layout-relative: {
        position: relative;
      };

      --layout-fit: {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-scroll: {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      };

      --layout-fullbleed: {
        margin: 0;
        height: 100vh;
      };

      /* fixed position */

      --layout-fixed-top: {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      };

      --layout-fixed-right: {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
      };

      --layout-fixed-bottom: {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-fixed-left: {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
      };

    }
  </style>
</custom-style>`;Rs.setAttribute("style","display: none;"),document.head.appendChild(Rs.content);var Ms=document.createElement("style");Ms.textContent="[hidden] { display: none !important; }",document.head.appendChild(Ms);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
class Vs{constructor(e){Vs[" "](e),this.type=e&&e.type||"default",this.key=e&&e.key,e&&"value"in e&&(this.value=e.value)}get value(){var e=this.type,t=this.key;if(e&&t)return Vs.types[e]&&Vs.types[e][t]}set value(e){var t=this.type,i=this.key;t&&i&&(t=Vs.types[t]=Vs.types[t]||{},null==e?delete t[i]:t[i]=e)}get list(){if(this.type){var e=Vs.types[this.type];return e?Object.keys(e).map((function(e){return Fs[this.type][e]}),this):[]}}byKey(e){return this.key=e,this.value}}Vs[" "]=function(){},Vs.types={};var Fs=Vs.types;ns({is:"iron-meta",properties:{type:{type:String,value:"default"},key:{type:String},value:{type:String,notify:!0},self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:!0},__computeMeta:function(e,t,i){var n=new Vs({type:e,key:t});return void 0!==i&&i!==n.value?n.value=i:this.value!==n.value&&(this.value=n.value),n},get list(){return this.__meta&&this.__meta.list},_selfChanged:function(e){e&&(this.value=this)},byKey:function(e){return new Vs({type:this.type,key:e}).value}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
ns({_template:Is`
    <style>
      :host {
        @apply --layout-inline;
        @apply --layout-center-center;
        position: relative;

        vertical-align: middle;

        fill: var(--iron-icon-fill-color, currentcolor);
        stroke: var(--iron-icon-stroke-color, none);

        width: var(--iron-icon-width, 24px);
        height: var(--iron-icon-height, 24px);
        @apply --iron-icon;
      }

      :host([hidden]) {
        display: none;
      }
    </style>
`,is:"iron-icon",properties:{icon:{type:String},theme:{type:String},src:{type:String},_meta:{value:Ns.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function(e){var t=(e||"").split(":");this._iconName=t.pop(),this._iconsetName=t.pop()||this._DEFAULT_ICONSET,this._updateIcon()},_srcChanged:function(e){this._updateIcon()},_usesIconset:function(){return this.icon||!this.src},_updateIcon:function(){this._usesIconset()?(this._img&&this._img.parentNode&&Gn(this.root).removeChild(this._img),""===this._iconName?this._iconset&&this._iconset.removeIcon(this):this._iconsetName&&this._meta&&(this._iconset=this._meta.byKey(this._iconsetName),this._iconset?(this._iconset.applyIcon(this,this._iconName,this.theme),this.unlisten(window,"iron-iconset-added","_updateIcon")):this.listen(window,"iron-iconset-added","_updateIcon"))):(this._iconset&&this._iconset.removeIcon(this),this._img||(this._img=document.createElement("img"),this._img.style.width="100%",this._img.style.height="100%",this._img.draggable=!1),this._img.src=this.src,Gn(this.root).appendChild(this._img))}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
ns({is:"iron-iconset-svg",properties:{name:{type:String,observer:"_nameChanged"},size:{type:Number,value:24},rtlMirroring:{type:Boolean,value:!1},useGlobalRtlAttribute:{type:Boolean,value:!1}},created:function(){this._meta=new Vs({type:"iconset",key:null,value:null})},attached:function(){this.style.display="none"},getIconNames:function(){return this._icons=this._createIconMap(),Object.keys(this._icons).map((function(e){return this.name+":"+e}),this)},applyIcon:function(e,t){this.removeIcon(e);var i=this._cloneIcon(t,this.rtlMirroring&&this._targetIsRTL(e));if(i){var n=Gn(e.root||e);return n.insertBefore(i,n.childNodes[0]),e._svgIcon=i}return null},removeIcon:function(e){e._svgIcon&&(Gn(e.root||e).removeChild(e._svgIcon),e._svgIcon=null)},_targetIsRTL:function(e){if(null==this.__targetIsRTL)if(this.useGlobalRtlAttribute){var t=document.body&&document.body.hasAttribute("dir")?document.body:document.documentElement;this.__targetIsRTL="rtl"===t.getAttribute("dir")}else e&&e.nodeType!==Node.ELEMENT_NODE&&(e=e.host),this.__targetIsRTL=e&&"rtl"===window.getComputedStyle(e).direction;return this.__targetIsRTL},_nameChanged:function(){this._meta.value=null,this._meta.key=this.name,this._meta.value=this,this.async((function(){this.fire("iron-iconset-added",this,{node:window})}))},_createIconMap:function(){var e=Object.create(null);return Gn(this).querySelectorAll("[id]").forEach((function(t){e[t.id]=t})),e},_cloneIcon:function(e,t){return this._icons=this._icons||this._createIconMap(),this._prepareSvgClone(this._icons[e],this.size,t)},_prepareSvgClone:function(e,t,i){if(e){var n=e.cloneNode(!0),s=document.createElementNS("http://www.w3.org/2000/svg","svg"),o=n.getAttribute("viewBox")||"0 0 "+t+" "+t,r="pointer-events: none; display: block; width: 100%; height: 100%;";return i&&n.hasAttribute("mirror-in-rtl")&&(r+="-webkit-transform:scale(-1,1);transform:scale(-1,1);transform-origin:center;"),s.setAttribute("viewBox",o),s.setAttribute("preserveAspectRatio","xMidYMid meet"),s.setAttribute("focusable","false"),s.style.cssText=r,s.appendChild(n).removeAttribute("id"),s}return null}});const Ds=document.createElement("template");Ds.innerHTML='<iron-iconset-svg size="1000" name="lumo">\n<svg xmlns="http://www.w3.org/2000/svg">\n<defs>\n<g id="angle-down"><path d="M283 391c-18-16-46-15-63 4-16 18-15 46 3 63l244 224c17 15 43 15 60 0l250-229c18-16 20-45 3-63-16-18-45-20-63-4l-220 203-214-198z"></path></g>\n<g id="angle-left"><path d="M601 710c16 18 15 46-3 63-18 16-46 15-63-4l-224-244c-15-17-15-43 0-59l229-250c16-18 45-20 63-4 18 16 20 45 3 63l-203 220 198 215z"></path></g>\n<g id="angle-right"><path d="M399 275c-16-18-15-46 3-63 18-16 46-15 63 4l224 244c15 17 15 43 0 59l-229 250c-16 18-45 20-63 4-18-16-20-45-3-63l203-220-198-215z"></path></g>\n<g id="angle-up"><path d="M283 635c-18 16-46 15-63-3-16-18-15-46 3-63l244-224c17-15 43-15 60 0l250 229c18 16 20 45 3 63-16 18-45 20-63 3l-220-202L283 635z"></path></g>\n<g id="arrow-down"><path d="M538 646l125-112c15-14 39-12 53 4 14 15 12 39-4 53l-187 166c0 0 0 0 0 0-14 13-36 12-50 0l-187-166c-15-14-17-37-4-53 14-15 37-17 53-4L462 646V312c0-21 17-38 38-37s38 17 37 37v334z"></path></g>\n<g id="arrow-left"><path d="M375 538l111 125c14 15 12 39-3 53-15 14-39 12-53-4l-166-187c0 0 0 0 0 0-13-14-12-36 0-50l166-187c14-15 37-17 53-4 15 14 17 37 3 53L375 463h333c21 0 38 17 38 37 0 21-17 38-38 38h-333z"></path></g>\n<g id="arrow-right"><path d="M625 538h-333c-21 0-38-17-38-38 0-21 17-38 38-37h333l-111-126c-14-15-12-39 3-53 15-14 39-12 53 4l166 187c13 14 13 36 0 50 0 0 0 0 0 0l-166 187c-14 15-37 17-53 4-15-14-17-37-3-53l111-125z"></path></g>\n<g id="arrow-up"><path d="M538 354V688c0 21-17 38-38 37s-38-17-38-38V354l-125 112c-15 14-39 12-53-4-14-15-12-39 4-53l187-166c14-13 36-13 50 0 0 0 0 0 0 0l187 166c15 14 17 37 4 53-14 15-37 17-53 4L538 354z"></path></g>\n<g id="bar-chart"><path d="M175 500h108c28 0 50 22 50 50v233c0 28-22 50-50 50H175c-28 0-50-22-50-50v-233c0-28 22-50 50-50z m33 67c-9 0-17 7-16 16v167c0 9 7 17 16 17h42c9 0 17-7 17-17v-167c0-9-7-17-17-16H208zM446 167h108c28 0 50 22 50 50v566c0 28-22 50-50 50h-108c-28 0-50-22-50-50V217c0-28 22-50 50-50z m33 66c-9 0-17 7-17 17v500c0 9 7 17 17 17h42c9 0 17-7 16-17V250c0-9-7-17-16-17h-42zM717 333h108c28 0 50 22 50 50v400c0 28-22 50-50 50h-108c-28 0-50-22-50-50V383c0-28 22-50 50-50z m33 67c-9 0-17 7-17 17v333c0 9 7 17 17 17h42c9 0 17-7 16-17v-333c0-9-7-17-16-17h-42z"></path></g>\n<g id="bell"><path d="M367 675H292v-258C292 325 366 250 459 250H458V208c0-23 18-42 42-41 23 0 42 18 42 41v42h-1C634 250 708 325 708 417V675h-75v-258c0-51-41-92-91-92h-84C408 325 367 366 367 417V675z m-159 37c0-21 17-38 38-37h508c21 0 37 17 38 37 0 21-17 38-38 38H246C225 750 208 733 208 713z m230 71h125v32c0 17-14 31-32 31h-62c-17 0-32-14-31-31v-32z"></path></g>\n<g id="calendar"><path d="M375 208h250v-20C625 176 634 167 646 167h41C699 167 708 176 708 188V208h74c23 0 41 19 41 42v42C823 315 804 333 782 333H218C196 333 177 315 177 292V250C177 227 196 208 218 208H292v-20C292 176 301 167 313 167h41C366 167 375 176 375 188V208zM229 375h42C283 375 292 384 292 396v41C292 449 282 458 271 458h-42C217 458 208 449 208 437v-41C208 384 218 375 229 375z m125 0h42C408 375 417 384 417 396v41C417 449 407 458 396 458h-42C342 458 333 449 333 437v-41C333 384 343 375 354 375z m125 0h42C533 375 542 384 542 396v41C542 449 532 458 521 458h-42C467 458 458 449 458 437v-41C458 384 468 375 479 375z m-250 125h42C283 500 292 509 292 521v41C292 574 282 583 271 583h-42C217 583 208 574 208 562v-41C208 509 218 500 229 500z m125 0h42C408 500 417 509 417 521v41C417 574 407 583 396 583h-42C342 583 333 574 333 562v-41C333 509 343 500 354 500z m125 0h42c12 0 21 9 21 21v41C542 574 532 583 521 583h-42C467 583 458 574 458 562v-41C458 509 468 500 479 500z m-250 125h42C283 625 292 634 292 646v41C292 699 282 708 271 708h-42C217 708 208 699 208 687v-41C208 634 218 625 229 625z m125 0h42C408 625 417 634 417 646v41C417 699 407 708 396 708h-42C342 708 333 699 333 687v-41C333 634 343 625 354 625z m125 0h42c12 0 21 9 21 21v41C542 699 532 708 521 708h-42C467 708 458 699 458 687v-41C458 634 468 625 479 625z m125-250h42C658 375 667 384 667 396v41C667 449 657 458 646 458h-42C592 458 583 449 583 437v-41C583 384 593 375 604 375z m0 125h42c12 0 21 9 21 21v41C667 574 657 583 646 583h-42C592 583 583 574 583 562v-41C583 509 593 500 604 500z m0 125h42c12 0 21 9 21 21v41C667 699 657 708 646 708h-42C592 708 583 699 583 687v-41C583 634 593 625 604 625z m125 0h42c12 0 21 9 21 21v41C792 699 782 708 771 708h-42C717 708 708 699 708 687v-41C708 634 718 625 729 625z m-500 125h42C283 750 292 759 292 771v41C292 824 282 833 271 833h-42C217 833 208 824 208 812v-41C208 759 218 750 229 750z m125 0h42C408 750 417 759 417 771v41C417 824 407 833 396 833h-42C342 833 333 824 333 812v-41C333 759 343 750 354 750z m125 0h42c12 0 21 9 21 21v41C542 824 532 833 521 833h-42C467 833 458 824 458 812v-41C458 759 468 750 479 750z m125 0h42c12 0 21 9 21 21v41C667 824 657 833 646 833h-42C592 833 583 824 583 812v-41C583 759 593 750 604 750z m125 0h42c12 0 21 9 21 21v41C792 824 782 833 771 833h-42C717 833 708 824 708 812v-41C708 759 718 750 729 750z m0-250h42c12 0 21 9 21 21v41C792 574 782 583 771 583h-42C717 583 708 574 708 562v-41C708 509 718 500 729 500z m0-125h42C783 375 792 384 792 396v41C792 449 782 458 771 458h-42C717 458 708 449 708 437v-41C708 384 718 375 729 375z"></path></g>\n<g id="checkmark"><path d="M318 493c-15-15-38-15-53 0-15 15-15 38 0 53l136 136c15 15 38 15 53 0l323-322c15-15 15-38 0-53-15-15-38-15-54 0l-295 296-110-110z"></path></g>\n<g id="chevron-down"><path d="M533 654l210-199c9-9 9-23 0-32C739 419 733 417 726 417H274C261 417 250 427 250 439c0 6 2 12 7 16l210 199c18 17 48 17 66 0z"></path></g>\n<g id="chevron-left"><path d="M346 533l199 210c9 9 23 9 32 0 4-4 7-10 6-17V274C583 261 573 250 561 250c-6 0-12 2-16 7l-199 210c-17 18-17 48 0 66z"></path></g>\n<g id="chevron-right"><path d="M654 533L455 743c-9 9-23 9-32 0C419 739 417 733 417 726V274C417 261 427 250 439 250c6 0 12 2 16 7l199 210c17 18 17 48 0 66z"></path></g>\n<g id="chevron-up"><path d="M533 346l210 199c9 9 9 23 0 32-4 4-10 7-17 6H274C261 583 250 573 250 561c0-6 2-12 7-16l210-199c18-17 48-17 66 0z"></path></g>\n<g id="clock"><path d="M538 489l85 85c15 15 15 38 0 53-15 15-38 15-53 0l-93-93a38 38 0 0 1-2-2C467 525 462 515 462 504V308c0-21 17-38 38-37 21 0 38 17 37 37v181zM500 833c-184 0-333-149-333-333s149-333 333-333 333 149 333 333-149 333-333 333z m0-68c146 0 265-118 265-265 0-146-118-265-265-265-146 0-265 118-265 265 0 146 118 265 265 265z"></path></g>\n<g id="cog"><path d="M833 458l-81-18c-8-25-17-50-29-75L767 292 708 233l-72 49c-21-12-46-25-75-30L542 167h-84l-19 79c-25 8-50 17-71 30L296 233 233 296l47 69c-12 21-21 46-29 71L167 458v84l84 25c8 25 17 50 29 75L233 708 292 767l76-44c21 12 46 25 75 29L458 833h84l19-81c25-8 50-17 75-29L708 767l59-59-44-66c12-21 25-46 29-75L833 542v-84z m-333 217c-96 0-175-79-175-175 0-96 79-175 175-175 96 0 175 79 175 175 0 96-79 175-175 175z"></path></g>\n<g id="cross"><path d="M445 500l-142-141c-15-15-15-40 0-56 15-15 40-15 56 0L500 445l141-142c15-15 40-15 56 0 15 15 15 40 0 56L555 500l142 141c15 15 15 40 0 56-15 15-40 15-56 0L500 555l-141 142c-15 15-40 15-56 0-15-15-15-40 0-56L445 500z"></path></g>\n<g id="download"><path d="M538 521l125-112c15-14 39-12 53 4 14 15 12 39-4 53l-187 166a38 38 0 0 1 0 0c-14 13-36 12-50 0l-187-166c-15-14-17-37-4-53 14-15 37-17 53-4L462 521V188c0-21 17-38 38-38s38 17 37 38v333zM758 704c0-21 17-38 38-37 21 0 38 17 37 37v92c0 21-17 38-37 37H204c-21 0-38-17-37-37v-92c0-21 17-38 37-37s38 17 38 37v54h516v-54z"></path></g>\n<g id="dropdown"><path d="M317 393c-15-14-39-13-53 3-14 15-13 39 3 53l206 189c14 13 36 13 50 0l210-193c15-14 17-38 3-53-14-15-38-17-53-3l-185 171L317 393z"></path></g>\n<g id="edit"><path d="M673 281l62 56-205 233c-9 10-38 24-85 39a8 8 0 0 1-5 0c-4-1-7-6-6-10l0 0c14-47 25-76 35-86l204-232z m37-42l52-59c15-17 41-18 58-2 17 16 18 42 3 59L772 295l-62-56zM626 208l-67 75h-226C305 283 283 306 283 333v334C283 695 306 717 333 717h334c28 0 50-22 50-50v-185L792 398v269C792 736 736 792 667 792H333C264 792 208 736 208 667V333C208 264 264 208 333 208h293z"></path></g>\n<g id="error"><path d="M500 833c-184 0-333-149-333-333s149-333 333-333 333 149 333 333-149 333-333 333z m0-68c146 0 265-118 265-265 0-146-118-265-265-265-146 0-265 118-265 265 0 146 118 265 265 265zM479 292h42c12 0 21 9 20 20l-11 217c0 8-6 13-13 13h-34c-7 0-13-6-13-13l-11-217C459 301 468 292 479 292zM483 608h34c12 0 21 9 20 21v33c0 12-9 21-20 21h-34c-12 0-21-9-21-21v-33c0-12 9-21 21-21z"></path></g>\n<g id="eye-disabled"><path d="M396 735l60-60c15 2 30 3 44 3 89 0 178-34 258-90 31-22 59-46 78-69 6-7 12-14 16-19-4-6-9-12-16-19-20-22-47-46-78-69-8-5-15-11-23-15l50-51C862 397 917 458 917 500c0 87-230 250-417 250-34 0-69-5-104-15zM215 654C138 603 83 542 83 500c0-87 230-250 417-250 34 0 69 5 104 15l-59 60c-15-2-30-3-45-3-89 0-178 34-258 90-31 22-59 46-78 69-6 7-12 14-16 19 4 6 9 12 16 19 20 22 47 46 78 69 8 5 16 11 24 16L215 654z m271-9l159-159c0 5 1 9 1 14 0 81-65 146-146 146-5 0-9 0-14-1z m-131-131C354 510 354 505 354 500c0-81 65-146 146-146 5 0 10 0 14 1l-159 159z m-167 257L780 179c12-12 32-12 44 0 12 12 12 32 0 44L232 815c-12 12-32 12-44 0s-12-32 0-44z"></path></g>\n<g id="eye"><path d="M500 750c-187 0-417-163-417-250s230-250 417-250 417 163 417 250-230 250-417 250z m-336-231c20 22 47 46 78 69C322 644 411 678 500 678s178-34 258-90c31-22 59-46 78-69 6-7 12-14 16-19-4-6-9-12-16-19-20-22-47-46-78-69C678 356 589 322 500 322s-178 34-258 90c-31 22-59 46-78 69-6 7-12 14-16 19 4 6 9 12 16 19zM500 646c-81 0-146-65-146-146s65-146 146-146 146 65 146 146-65 146-146 146z m0-75c39 0 71-32 71-71 0-39-32-71-71-71-39 0-71 32-71 71 0 39 32 71 71 71z"></path></g>\n<g id="menu"><path d="M167 292c0-23 19-42 41-42h584C815 250 833 268 833 292c0 23-19 42-41 41H208C185 333 167 315 167 292z m0 208c0-23 19-42 41-42h584C815 458 833 477 833 500c0 23-19 42-41 42H208C185 542 167 523 167 500z m0 208c0-23 19-42 41-41h584C815 667 833 685 833 708c0 23-19 42-41 42H208C185 750 167 732 167 708z"></path></g>\n<g id="minus"><path d="M261 461c-22 0-39 18-39 39 0 22 18 39 39 39h478c22 0 39-18 39-39 0-22-18-39-39-39H261z"></path></g>\n<g id="ordered-list"><path d="M138 333V198H136l-43 28v-38l45-31h45V333H138z m-61 128c0-35 27-59 68-59 39 0 66 21 66 53 0 20-11 37-43 64l-29 27v2h74V583H80v-30l55-52c26-24 32-33 33-43 0-13-10-22-24-22-15 0-26 10-26 25v1h-41v-1zM123 759v-31h21c15 0 25-8 25-21 0-13-10-21-25-21-15 0-26 9-26 23h-41c1-34 27-56 68-57 39 0 66 20 66 49 0 20-14 36-33 39v3c24 3 40 19 39 41 0 32-30 54-73 54-41 0-69-22-70-57h43c1 13 11 22 28 22 16 0 27-9 27-22 0-14-10-22-28-22h-21zM333 258c0-18 15-33 34-33h516c18 0 33 15 34 33 0 18-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z"></path></g>\n<g id="phone"><path d="M296 208l42-37c17-15 44-13 58 4a42 42 0 0 1 5 7L459 282c12 20 5 45-15 57l-7 4c-17 10-25 30-19 48l20 66a420 420 0 0 0 93 157l41 45c13 14 35 17 51 8l7-5c20-12 45-5 57 16L745 777c12 20 5 45-15 57a42 42 0 0 1-8 4l-52 17c-61 21-129 4-174-43l-50-52c-81-85-141-189-175-302l-24-78c-19-62 0-129 49-172z"></path></g>\n<g id="photo"><path d="M208 167h584c69 0 125 56 125 125v416c0 69-56 125-125 125H208c-69 0-125-56-125-125V292c0-69 56-125 125-125z m584 75H208c-28 0-50 22-50 50v416c0 28 22 50 50 50h584c28 0 50-22 50-50V292c0-28-22-50-50-50zM239 740l167-167c12-12 31-14 45-6l73 43 172-201c13-15 34-18 50-7l95 67v92l-111-78-169 199c-12 14-32 17-47 8l-76-43-111 111H229c2-7 5-13 10-18zM458 427C458 490 407 542 344 542S229 490 229 427c0-63 51-115 115-115S458 364 458 427z m-62 0C396 398 373 375 344 375S292 398 292 427c0 29 23 52 52 52s52-23 52-52z"></path></g>\n<g id="play"><path d="M689 528l-298 175c-13 8-34 8-48 0-6-4-10-9-10-14V311C333 300 348 292 367 292c9 0 17 2 24 5l298 175c26 15 26 40 0 56z"></path></g>\n<g id="plus"><path d="M461 461H261c-22 0-39 18-39 39 0 22 18 39 39 39h200v200c0 22 18 39 39 39 22 0 39-18 39-39v-200h200c22 0 39-18 39-39 0-22-18-39-39-39h-200V261c0-22-18-39-39-39-22 0-39 18-39 39v200z"></path></g>\n<g id="redo"><path d="M290 614C312 523 393 458 491 458c55 0 106 22 144 57l-88 88c-3 3-5 7-5 11 0 8 6 15 15 15l193-5c17 0 31-15 31-32l5-192c0-4-1-8-4-11-6-6-16-6-22 0l-66 67C641 406 570 375 491 375c-136 0-248 90-281 215-1 2-1 5-1 8-8 44 45 68 73 32 4-5 7-11 8-16z"></path></g>\n<g id="reload"><path d="M500 233V137c0-9 7-16 15-16 4 0 8 2 10 4l133 140c12 12 12 32 0 45l-133 140c-6 6-15 6-21 0C502 447 500 443 500 438V308c-117 0-212 95-212 213 0 117 95 212 212 212 117 0 212-95 212-212 0-21 17-38 38-38s38 17 37 38c0 159-129 288-287 287-159 0-288-129-288-287 0-159 129-288 288-288z"></path></g>\n<g id="search"><path d="M662 603l131 131c16 16 16 42 0 59-16 16-43 16-59 0l-131-131C562 691 512 708 458 708c-138 0-250-112-250-250 0-138 112-250 250-250 138 0 250 112 250 250 0 54-17 104-46 145zM458 646c104 0 188-84 188-188S562 271 458 271 271 355 271 458s84 188 187 188z"></path></g>\n<g id="undo"><path d="M710 614C688 523 607 458 509 458c-55 0-106 22-144 57l88 88c3 3 5 7 5 11 0 8-6 15-15 15l-193-5c-17 0-31-15-31-32L214 400c0-4 1-8 4-11 6-6 16-6 22 0l66 67C359 406 430 375 509 375c136 0 248 90 281 215 1 2 1 5 1 8 8 44-45 68-73 32-4-5-7-11-8-16z"></path></g>\n<g id="unordered-list"><path d="M146 325c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63z m0 250c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63z m0 250c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63zM333 258c0-18 15-33 34-33h516c18 0 33 15 34 33 0 18-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z"></path></g>\n<g id="upload"><path d="M454 271V604c0 21-17 38-37 38s-38-17-38-38V271L254 382c-15 14-39 12-53-3-14-15-12-39 3-53L391 160c14-13 36-13 51-1 0 0 0 0 0 1l187 166c15 14 17 37 3 53-14 15-37 17-53 3L454 271zM675 704c0-21 17-38 37-37 21 0 38 17 38 37v92c0 21-17 38-38 37H121c-21 0-38-17-38-37v-92c0-21 17-38 38-37s38 17 37 37v54h517v-54z"></path></g>\n<g id="user"><path d="M500 500c-69 0-125-56-125-125s56-125 125-125 125 56 125 125-56 125-125 125z m-292 292c0-115 131-208 292-209s292 93 292 209H208z"></path></g>\n</defs>\n</svg>\n</iron-iconset-svg>',document.head.appendChild(Ds.content);class Bs extends Ps{static get template(){return Is`
    <slot></slot>
`}static get is(){return"flow-component-renderer"}static get properties(){return{nodeid:Number,appid:String}}static get observers(){return["_attachRenderedComponentIfAble(appid, nodeid)"]}connectedCallback(){super.connectedCallback(),this._runChrome72ShadowDomBugWorkaround()}_runChrome72ShadowDomBugWorkaround(){const e=navigator.userAgent;if(e&&e.match("Chrome/")){const t=e.split("Chrome/")[1].split(".")[0];if(t&&parseInt(t)>71){const e=this._getDebouncedNotifyResizeFunction();e&&(this.style.visibility="hidden",requestAnimationFrame(()=>{this.style.visibility="",e()}))}}}_getDebouncedNotifyResizeFunction(){let e=this.parentElement;for(;;){if(!e)return;if(e.notifyResize)break;e=e.parentElement}return e._debouncedNotifyResize||(e._debouncedNotifyResize=function(){e.__debouncedNotifyResize=vi.debounce(e.__debouncedNotifyResize,xt,e.notifyResize)}),e._debouncedNotifyResize}ready(){super.ready(),this.addEventListener("click",(function(e){this.firstChild&&"function"==typeof this.firstChild.click&&e.target===this&&this.firstChild.click()}))}_asyncAttachRenderedComponentIfAble(){this._debouncer=vi.debounce(this._debouncer,Ct,()=>this._attachRenderedComponentIfAble())}_attachRenderedComponentIfAble(){if(!this.nodeid||!this.appid)return;const e=this._getRenderedComponent();this.firstChild?e?this.firstChild!==e?(this.replaceChild(e,this.firstChild),this._defineFocusTarget(),this.onComponentRendered()):(this._defineFocusTarget(),this.onComponentRendered()):(this._clear(),this._asyncAttachRenderedComponentIfAble()):e?(this.appendChild(e),this._defineFocusTarget(),this.onComponentRendered()):this._asyncAttachRenderedComponentIfAble()}_getRenderedComponent(){try{return window.Vaadin.Flow.clients[this.appid].getByNodeId(this.nodeid)}catch(e){console.error("Could not get node %s from app %s",this.nodeid,this.appid),console.error(e)}return null}_clear(){for(;this.firstChild;)this.removeChild(this.firstChild)}onComponentRendered(){}_defineFocusTarget(){var e=this._getFirstFocusableDescendant(this.firstChild);null!==e&&e.setAttribute("focus-target","true")}_getFirstFocusableDescendant(e){if(this._isFocusable(e))return e;if(!e.children)return null;for(var t=0;t<e.children.length;t++){var i=this._getFirstFocusableDescendant(e.children[t]);if(null!==i)return i}return null}_isFocusable(e){return(!e.hasAttribute||"function"!=typeof e.hasAttribute||!e.hasAttribute("disabled")&&!e.hasAttribute("hidden"))&&0===e.tabIndex}}window.customElements.define(Bs.is,Bs);i(13);
/**
@license
Copyright (c) 2018 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/const Hs=class{toString(){return""}};window.Vaadin.Flow.Legacy.Debouncer=vi,window.Vaadin.Flow.Legacy.timeOut=wt,window.Vaadin.ComboBoxPlaceholder=Hs;const $s=document.createElement("template");$s.innerHTML='<dom-module id="lumo-overlay">\n  <template>\n    <style>\n      :host {\n        top: var(--lumo-space-m);\n        right: var(--lumo-space-m);\n        bottom: var(--lumo-space-m);\n        left: var(--lumo-space-m);\n        /* Workaround for Edge issue (only on Surface), where an overflowing vaadin-list-box inside vaadin-select-overlay makes the overlay transparent */\n        /* stylelint-disable-next-line */\n        outline: 0px solid transparent;\n      }\n\n      [part="overlay"] {\n        background-color: var(--lumo-base-color);\n        background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));\n        border-radius: var(--lumo-border-radius-m);\n        box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-m);\n        color: var(--lumo-body-text-color);\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size-m);\n        font-weight: 400;\n        line-height: var(--lumo-line-height-m);\n        letter-spacing: 0;\n        text-transform: none;\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      [part="content"] {\n        padding: var(--lumo-space-xs);\n      }\n\n      [part="backdrop"] {\n        background-color: var(--lumo-shade-20pct);\n        animation: 0.2s lumo-overlay-backdrop-enter both;\n        will-change: opacity;\n      }\n\n      @keyframes lumo-overlay-backdrop-enter {\n        0% {\n          opacity: 0;\n        }\n      }\n\n      :host([closing]) [part="backdrop"] {\n        animation: 0.2s lumo-overlay-backdrop-exit both;\n      }\n\n      @keyframes lumo-overlay-backdrop-exit {\n        100% {\n          opacity: 0;\n        }\n      }\n\n      @keyframes lumo-overlay-dummy-animation {\n        0% { opacity: 1; }\n        100% { opacity: 1; }\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild($s.content);const js=Is`<dom-module id="lumo-vaadin-overlay" theme-for="vaadin-overlay">
  <template>
    <style include="lumo-overlay">
      /* stylelint-disable no-empty-source */
    </style>
  </template>
</dom-module>`;document.head.appendChild(js.content);const qs=e=>(class extends e{static get properties(){return{theme:{type:String,readOnly:!0}}}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),"theme"===e&&this._setTheme(i)}}),Ys=e=>(class extends(qs(e)){static finalize(){super.finalize();const e=this.prototype._template,t=this.template&&this.template.parentElement&&this.template.parentElement.id===this.is,i=Object.getPrototypeOf(this.prototype)._template;i&&!t&&Array.from(i.content.querySelectorAll("style[include]")).forEach(t=>{this._includeStyle(t.getAttribute("include"),e)}),this._includeMatchingThemes(e)}static _includeMatchingThemes(e){const t=Y.prototype.modules;let i=!1;const n=this.is+"-default-theme";Object.keys(t).sort((e,t)=>{const i=0===e.indexOf("vaadin-"),n=0===t.indexOf("vaadin-"),s=["lumo-","material-"],o=s.filter(t=>0===e.indexOf(t)).length>0,r=s.filter(e=>0===t.indexOf(e)).length>0;return i!==n?i?-1:1:o!==r?o?-1:1:0}).forEach(s=>{if(s!==n){const n=t[s].getAttribute("theme-for");n&&n.split(" ").forEach(t=>{new RegExp("^"+t.split("*").join(".*")+"$").test(this.is)&&(i=!0,this._includeStyle(s,e))})}}),!i&&t[n]&&this._includeStyle(n,e)}static _includeStyle(e,t){if(t&&!t.content.querySelector(`style[include="${e}"]`)){const i=document.createElement("style");i.setAttribute("include",e),t.content.appendChild(i)}}}),Us=Element.prototype,Ws=Us.matches||Us.matchesSelector||Us.mozMatchesSelector||Us.msMatchesSelector||Us.oMatchesSelector||Us.webkitMatchesSelector,Gs={getTabbableNodes:function(e){const t=[];return this._collectTabbableNodes(e,t)?this._sortByTabIndex(t):t},isFocusable:function(e){return Ws.call(e,"input, select, textarea, button, object")?Ws.call(e,":not([disabled])"):Ws.call(e,"a[href], area[href], iframe, [tabindex], [contentEditable]")},isTabbable:function(e){return this.isFocusable(e)&&Ws.call(e,':not([tabindex="-1"])')&&this._isVisible(e)},_normalizedTabIndex:function(e){if(this.isFocusable(e)){const t=e.getAttribute("tabindex")||0;return Number(t)}return-1},_collectTabbableNodes:function(e,t){if(e.nodeType!==Node.ELEMENT_NODE||!this._isVisible(e))return!1;const i=e,n=this._normalizedTabIndex(i);let s,o=n>0;if(n>=0&&t.push(i),s="slot"===i.localName?i.assignedNodes({flatten:!0}):(i.shadowRoot||i).children)for(let e=0;e<s.length;e++)o=this._collectTabbableNodes(s[e],t)||o;return o},_isVisible:function(e){let t=e.style;return"hidden"!==t.visibility&&"none"!==t.display&&("hidden"!==(t=window.getComputedStyle(e)).visibility&&"none"!==t.display)},_sortByTabIndex:function(e){const t=e.length;if(t<2)return e;const i=Math.ceil(t/2),n=this._sortByTabIndex(e.slice(0,i)),s=this._sortByTabIndex(e.slice(i));return this._mergeSortByTabIndex(n,s)},_mergeSortByTabIndex:function(e,t){const i=[];for(;e.length>0&&t.length>0;)this._hasLowerTabOrder(e[0],t[0])?i.push(t.shift()):i.push(e.shift());return i.concat(e,t)},_hasLowerTabOrder:function(e,t){const i=Math.max(e.tabIndex,0),n=Math.max(t.tabIndex,0);return 0===i||0===n?n>i:i>n}};
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
let Ks=0;const Js={},Xs=e=>{const t=Js[e]||Zs(e);return document.createElement(t)},Zs=e=>{const t=`vaadin-overlay-content-${++Ks}`,i=document.createElement("template"),n=document.createElement("style");n.textContent=":host { display: block; }"+e,i.content.appendChild(n),window.ShadyCSS&&window.ShadyCSS.prepareTemplate(i,t);const s=(()=>(class extends HTMLElement{static get is(){return t}constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(document.importNode(i.content,!0)))}connectedCallback(){window.ShadyCSS&&window.ShadyCSS.styleElement(this)}}))();return customElements.define(s.is,s),Js[e]=t,t};class Qs extends(Ys(Ps)){static get template(){return Is`
    <style>
      :host {
        z-index: 200;
        position: fixed;

        /*
          Despite of what the names say, <vaadin-overlay> is just a container
          for position/sizing/alignment. The actual overlay is the overlay part.
        */

        /*
          Default position constraints: the entire viewport. Note: themes can
          override this to introduce gaps between the overlay and the viewport.
        */
        top: 0;
        right: 0;
        bottom: var(--vaadin-overlay-viewport-bottom);
        left: 0;

        /* Use flexbox alignment for the overlay part. */
        display: flex;
        flex-direction: column; /* makes dropdowns sizing easier */
        /* Align to center by default. */
        align-items: center;
        justify-content: center;

        /* Allow centering when max-width/max-height applies. */
        margin: auto;

        /* The host is not clickable, only the overlay part is. */
        pointer-events: none;

        /* Remove tap highlight on touch devices. */
        -webkit-tap-highlight-color: transparent;

        /* CSS API for host */
        --vaadin-overlay-viewport-bottom: 0;
      }

      :host([hidden]),
      :host(:not([opened]):not([closing])) {
        display: none !important;
      }

      [part="overlay"] {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
        pointer-events: auto;

        /* Prevent overflowing the host in MSIE 11 */
        max-width: 100%;
        box-sizing: border-box;

        -webkit-tap-highlight-color: initial; /* reenable tap highlight inside */
      }

      [part="backdrop"] {
        z-index: -1;
        content: "";
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        pointer-events: auto;
      }
    </style>

    <div id="backdrop" part="backdrop" hidden\$="{{!withBackdrop}}"></div>
    <div part="overlay" id="overlay" tabindex="0">
      <div part="content" id="content">
        <slot></slot>
      </div>
    </div>
`}static get is(){return"vaadin-overlay"}static get properties(){return{opened:{type:Boolean,notify:!0,observer:"_openedChanged",reflectToAttribute:!0},owner:Element,renderer:Function,template:{type:Object,notify:!0},instanceProps:{type:Object},content:{type:Object,notify:!0},withBackdrop:{type:Boolean,value:!1,reflectToAttribute:!0},model:Object,modeless:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_modelessChanged"},hidden:{type:Boolean,reflectToAttribute:!0,observer:"_hiddenChanged"},focusTrap:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!1},_mouseDownInside:{type:Boolean},_mouseUpInside:{type:Boolean},_instance:{type:Object},_originalContentPart:Object,_contentNodes:Array,_oldOwner:Element,_oldModel:Object,_oldTemplate:Object,_oldInstanceProps:Object,_oldRenderer:Object,_oldOpened:Boolean}}static get observers(){return["_templateOrRendererChanged(template, renderer, owner, model, instanceProps, opened)"]}constructor(){super(),this._boundMouseDownListener=this._mouseDownListener.bind(this),this._boundMouseUpListener=this._mouseUpListener.bind(this),this._boundOutsideClickListener=this._outsideClickListener.bind(this),this._boundKeydownListener=this._keydownListener.bind(this),this._observer=new Dn(this,e=>{this._setTemplateFromNodes(e.addedNodes)}),this._boundIronOverlayCanceledListener=this._ironOverlayCanceled.bind(this),/iPad|iPhone|iPod/.test(navigator.userAgent)&&(this._boundIosResizeListener=()=>this._detectIosNavbar())}ready(){super.ready(),this._observer.flush(),this.addEventListener("click",()=>{}),this.$.backdrop.addEventListener("click",()=>{})}_detectIosNavbar(){if(!this.opened)return;const e=window.innerHeight,t=window.innerWidth>e,i=document.documentElement.clientHeight;t&&i>e?this.style.setProperty("--vaadin-overlay-viewport-bottom",i-e+"px"):this.style.setProperty("--vaadin-overlay-viewport-bottom","0")}_setTemplateFromNodes(e){this.template=e.filter(e=>e.localName&&"template"===e.localName)[0]||this.template}close(e){var t=new CustomEvent("vaadin-overlay-close",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),t.defaultPrevented||(this.opened=!1)}connectedCallback(){super.connectedCallback(),this._boundIosResizeListener&&(this._detectIosNavbar(),window.addEventListener("resize",this._boundIosResizeListener))}disconnectedCallback(){super.disconnectedCallback(),this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener)}_ironOverlayCanceled(e){e.preventDefault()}_mouseDownListener(e){this._mouseDownInside=e.composedPath().indexOf(this.$.overlay)>=0}_mouseUpListener(e){this._mouseUpInside=e.composedPath().indexOf(this.$.overlay)>=0}_outsideClickListener(e){if(-1!==e.composedPath().indexOf(this.$.overlay)||this._mouseDownInside||this._mouseUpInside)return this._mouseDownInside=!1,void(this._mouseUpInside=!1);if(!this._last)return;const t=new CustomEvent("vaadin-overlay-outside-click",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),this.opened&&!t.defaultPrevented&&this.close(e)}_keydownListener(e){if(this._last)if("Tab"===e.key&&this.focusTrap)this._cycleTab(e.shiftKey?-1:1),e.preventDefault();else if("Escape"===e.key||"Esc"===e.key){const t=new CustomEvent("vaadin-overlay-escape-press",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),this.opened&&!t.defaultPrevented&&this.close(e)}}_ensureTemplatized(){this._setTemplateFromNodes(Array.from(this.children))}_openedChanged(e,t){var i,n,s;this._instance||this._ensureTemplatized(),e?(this.__restoreFocusNode=this._getActiveElement(),this._animatedOpening(),i=this,n=()=>{this.focusTrap&&!this.contains(document._activeElement||document.activeElement)&&this._cycleTab(0,0);const e=new CustomEvent("vaadin-overlay-open",{bubbles:!0});this.dispatchEvent(e)},Cn||Pn(),In.push([i,n,s]),this.modeless||this._addGlobalListeners()):t&&(this._animatedClosing(),this.modeless||this._removeGlobalListeners())}_hiddenChanged(e){e&&this.hasAttribute("closing")&&this._flushAnimation("closing")}_shouldAnimate(){const e=getComputedStyle(this).getPropertyValue("animation-name");return!("none"===getComputedStyle(this).getPropertyValue("display"))&&e&&"none"!=e}_enqueueAnimation(e,t){const i=`__${e}Handler`,n=()=>{t(),this.removeEventListener("animationend",n),delete this[i]};this[i]=n,this.addEventListener("animationend",n)}_flushAnimation(e){const t=`__${e}Handler`;"function"==typeof this[t]&&this[t]()}_animatedOpening(){this.parentNode===document.body&&this.hasAttribute("closing")&&this._flushAnimation("closing"),this._attachOverlay(),this.setAttribute("opening","");const e=()=>{this.removeAttribute("opening"),document.addEventListener("iron-overlay-canceled",this._boundIronOverlayCanceledListener),this.modeless||this._enterModalState()};this._shouldAnimate()?this._enqueueAnimation("opening",e):e()}_attachOverlay(){this._placeholder=document.createComment("vaadin-overlay-placeholder"),this.parentNode.insertBefore(this._placeholder,this),document.body.appendChild(this)}_animatedClosing(){if(this.hasAttribute("opening")&&this._flushAnimation("opening"),this._placeholder){this.setAttribute("closing","");const e=()=>{if(this.shadowRoot.querySelector('[part="overlay"]').style.removeProperty("pointer-events"),this._exitModalState(),document.removeEventListener("iron-overlay-canceled",this._boundIronOverlayCanceledListener),this._detachOverlay(),this.removeAttribute("closing"),this.restoreFocusOnClose&&this.__restoreFocusNode){const e=this._getActiveElement();(e===document.body||this._deepContains(e))&&this.__restoreFocusNode.focus(),this.__restoreFocusNode=null}};this._shouldAnimate()?this._enqueueAnimation("closing",e):e()}}_detachOverlay(){this._placeholder.parentNode.insertBefore(this,this._placeholder),this._placeholder.parentNode.removeChild(this._placeholder)}static get __attachedInstances(){return Array.from(document.body.children).filter(e=>e instanceof Qs)}get _last(){return this===Qs.__attachedInstances.pop()}_modelessChanged(e){e?(this._removeGlobalListeners(),this._exitModalState()):this.opened&&(this._addGlobalListeners(),this._enterModalState())}_addGlobalListeners(){document.addEventListener("mousedown",this._boundMouseDownListener),document.addEventListener("mouseup",this._boundMouseUpListener),document.documentElement.addEventListener("click",this._boundOutsideClickListener,!0),document.addEventListener("keydown",this._boundKeydownListener)}_enterModalState(){"none"!==document.body.style.pointerEvents&&(this._previousDocumentPointerEvents=document.body.style.pointerEvents,document.body.style.pointerEvents="none"),Qs.__attachedInstances.forEach(e=>{e===this||e.hasAttribute("opening")||e.hasAttribute("closing")||(e.shadowRoot.querySelector('[part="overlay"]').style.pointerEvents="none")})}_removeGlobalListeners(){document.removeEventListener("mousedown",this._boundMouseDownListener),document.removeEventListener("mouseup",this._boundMouseUpListener),document.documentElement.removeEventListener("click",this._boundOutsideClickListener,!0),document.removeEventListener("keydown",this._boundKeydownListener)}_exitModalState(){void 0!==this._previousDocumentPointerEvents&&(document.body.style.pointerEvents=this._previousDocumentPointerEvents,delete this._previousDocumentPointerEvents);const e=Qs.__attachedInstances;let t;for(;(t=e.pop())&&(t===this||(t.shadowRoot.querySelector('[part="overlay"]').style.removeProperty("pointer-events"),t.modeless)););}_removeOldContent(){this.content&&this._contentNodes&&(this._observer.disconnect(),this._contentNodes.forEach(e=>{e.parentNode===this.content&&this.content.removeChild(e)}),this._originalContentPart&&(this.$.content.parentNode.replaceChild(this._originalContentPart,this.$.content),this.$.content=this._originalContentPart,this._originalContentPart=void 0),this._observer.connect(),this._contentNodes=void 0,this.content=void 0)}_stampOverlayTemplate(e,t){this._removeOldContent(),e._Templatizer||(e._Templatizer=vs(e,this,{instanceProps:t,forwardHostProp:function(e,t){this._instance&&this._instance.forwardHostProp(e,t)}})),this._instance=new e._Templatizer({}),this._contentNodes=Array.from(this._instance.root.childNodes);const i=e._templateRoot||(e._templateRoot=e.getRootNode());if(i!==document){const e=window.ShadyCSS&&!window.ShadyCSS.nativeShadow;this.$.content.shadowRoot||this.$.content.attachShadow({mode:"open"});let t=Array.from(i.querySelectorAll("style")).reduce((e,t)=>e+t.textContent,"");if(e){const e=window.ShadyCSS.ScopingShim._styleInfoForNode(i.host);e&&(t+=e._getStyleRules().parsedCssText,t+="}")}if(t=t.replace(/:host/g,":host-nomatch"))if(e){const e=Xs(t);e.id="content",e.setAttribute("part","content"),this.$.content.parentNode.replaceChild(e,this.$.content),e.className=this.$.content.className,this._originalContentPart=this.$.content,this.$.content=e}else{const e=document.createElement("style");e.textContent=t,this.$.content.shadowRoot.appendChild(e),this._contentNodes.unshift(e)}this.$.content.shadowRoot.appendChild(this._instance.root),this.content=this.$.content.shadowRoot}else this.appendChild(this._instance.root),this.content=this}_removeNewRendererOrTemplate(e,t,i,n){e!==t?this.template=void 0:i!==n&&(this.renderer=void 0)}render(){this.renderer&&this.renderer.call(this.owner,this.content,this.owner,this.model)}_templateOrRendererChanged(e,t,i,n,s,o){if(e&&t)throw this._removeNewRendererOrTemplate(e,this._oldTemplate,t,this._oldRenderer),new Error("You should only use either a renderer or a template for overlay content");const r=this._oldOwner!==i||this._oldModel!==n;this._oldModel=n,this._oldOwner=i;const a=this._oldInstanceProps!==s||this._oldTemplate!==e;this._oldInstanceProps=s,this._oldTemplate=e;const l=this._oldRenderer!==t;this._oldRenderer=t;const d=this._oldOpened!==o;if(this._oldOpened=o,e&&a)this._stampOverlayTemplate(e,s);else if(t&&(l||d||r)){if(this.content=this,l)for(;this.content.firstChild;)this.content.removeChild(this.content.firstChild);o&&this.render()}}_isFocused(e){return e&&e.getRootNode().activeElement===e}_focusedIndex(e){return(e=e||this._getFocusableElements()).indexOf(e.filter(this._isFocused).pop())}_cycleTab(e,t){const i=this._getFocusableElements();void 0===t&&(t=this._focusedIndex(i)),(t+=e)>=i.length?t=0:t<0&&(t=i.length-1),i[t].focus()}_getFocusableElements(){return Gs.getTabbableNodes(this.$.overlay)}_getActiveElement(){let e=document._activeElement||document.activeElement;for(e&&e!==document.documentElement&&e instanceof Element!=!1||(e=document.body);e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;return e}_deepContains(e){if(this.contains(e))return!0;let t=e;const i=e.ownerDocument;for(;t&&t!==i&&t!==this;)t=t.parentNode||t.host;return t===this}}customElements.define(Qs.is,Qs);const eo=document.createElement("template");eo.innerHTML='<dom-module id="lumo-menu-overlay-core">\n  <template>\n    <style>\n      :host([opening]),\n      :host([closing]) {\n        animation: 0.14s lumo-overlay-dummy-animation;\n      }\n\n      [part="overlay"] {\n        will-change: opacity, transform;\n      }\n\n      :host([opening]) [part="overlay"] {\n        animation: 0.1s lumo-menu-overlay-enter ease-out both;\n      }\n\n      @keyframes lumo-menu-overlay-enter {\n        0% {\n          opacity: 0;\n          transform: translateY(-4px);\n        }\n      }\n\n      :host([closing]) [part="overlay"] {\n        animation: 0.1s lumo-menu-overlay-exit both;\n      }\n\n      @keyframes lumo-menu-overlay-exit {\n        100% {\n          opacity: 0;\n        }\n      }\n    </style>\n  </template>\n</dom-module><dom-module id="lumo-menu-overlay">\n  <template>\n    <style include="lumo-overlay lumo-menu-overlay-core">\n      /* Small viewport (bottom sheet) styles */\n      /* Use direct media queries instead of the state attributes (`[phone]` and `[fullscreen]`) provided by the elements */\n      @media (max-width: 420px), (max-height: 420px) {\n        :host {\n          top: 0 !important;\n          right: 0 !important;\n          bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;\n          left: 0 !important;\n          align-items: stretch !important;\n          justify-content: flex-end !important;\n        }\n\n        [part="overlay"] {\n          max-height: 50vh;\n          width: 100vw;\n          border-radius: 0;\n          box-shadow: var(--lumo-box-shadow-xl);\n        }\n\n        /* The content part scrolls instead of the overlay part, because of the gradient fade-out */\n        [part="content"] {\n          padding: 30px var(--lumo-space-m);\n          max-height: inherit;\n          box-sizing: border-box;\n          -webkit-overflow-scrolling: touch;\n          overflow: auto;\n          -webkit-mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);\n          mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);\n        }\n\n        [part="backdrop"] {\n          display: block;\n        }\n\n        /* Animations */\n\n        :host([opening]) [part="overlay"] {\n          animation: 0.2s lumo-mobile-menu-overlay-enter cubic-bezier(.215, .61, .355, 1) both;\n        }\n\n        :host([closing]),\n        :host([closing]) [part="backdrop"] {\n          animation-delay: 0.14s;\n        }\n\n        :host([closing]) [part="overlay"] {\n          animation: 0.14s 0.14s lumo-mobile-menu-overlay-exit cubic-bezier(.55, .055, .675, .19) both;\n        }\n      }\n\n      @keyframes lumo-mobile-menu-overlay-enter {\n        0% {\n          transform: translateY(150%);\n        }\n      }\n\n      @keyframes lumo-mobile-menu-overlay-exit {\n        100% {\n          transform: translateY(150%);\n        }\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(eo.content);const to=Is`<dom-module id="lumo-combo-box-overlay" theme-for="vaadin-combo-box-overlay">
  <template>
    <style include="lumo-overlay lumo-menu-overlay-core">
      [part="content"] {
        padding: 0;
      }

      :host {
        /* TODO: using a legacy mixin (unsupported) */
        --iron-list-items-container: {
          border-width: var(--lumo-space-xs);
          border-style: solid;
          border-color: transparent;
        };
      }

      /* TODO: workaround ShadyCSS issue when using inside of the dom-if */
      :host([opened]) {
        --iron-list-items-container_-_border-width: var(--lumo-space-xs);
        --iron-list-items-container_-_border-style: solid;
        --iron-list-items-container_-_border-color: transparent;
      }

      /* Loading state */

      /* When items are empty, the sinner needs some room */
      :host(:not([closing])) [part~="content"] {
        min-height: calc(2 * var(--lumo-space-s) + var(--lumo-icon-size-s));
      }

      [part~="overlay"] {
        position: relative;
      }

      :host([loading]) [part~="loader"] {
        box-sizing: border-box;
        width: var(--lumo-icon-size-s);
        height: var(--lumo-icon-size-s);
        position: absolute;
        z-index: 1;
        left: var(--lumo-space-s);
        right: var(--lumo-space-s);
        top: var(--lumo-space-s);
        margin-left: auto;
        margin-inline-start: auto;
        margin-inline-end: 0;
        border: 2px solid transparent;
        border-color:
          var(--lumo-primary-color-50pct)
          var(--lumo-primary-color-50pct)
          var(--lumo-primary-color)
          var(--lumo-primary-color);
        border-radius: calc(0.5 * var(--lumo-icon-size-s));
        opacity: 0;
        animation:
          1s linear infinite lumo-combo-box-loader-rotate,
          .3s .1s lumo-combo-box-loader-fade-in both;
        pointer-events: none;
      }

      @keyframes lumo-combo-box-loader-fade-in {
        0% {
          opacity: 0;
        }

        100% {
          opacity: 1;
        }
      }

      @keyframes lumo-combo-box-loader-rotate {
        0% {
          transform: rotate(0deg);
        }

        100% {
          transform: rotate(360deg);
        }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(to.content);const io=document.createElement("template");io.innerHTML='<custom-style>\n  <style>\n    @font-face {\n      font-family: \'lumo-icons\';\n      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABEgAAsAAAAAIiwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUuKY21hcAAAAYgAAAD4AAADrsCU8d5nbHlmAAACgAAAC2MAABd4h9To2WhlYWQAAA3kAAAAMQAAADYSnCkuaGhlYQAADhgAAAAdAAAAJAbpA35obXR4AAAOOAAAABAAAACspBAAAGxvY2EAAA5IAAAAWAAAAFh55IAsbWF4cAAADqAAAAAfAAAAIAFKAXBuYW1lAAAOwAAAATEAAAIuUUJZCHBvc3QAAA/0AAABKwAAAelm8SzVeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS+yDiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+0mIO+p/FEMUcxDANKMwIkgMABn8MLQB4nO3SWW6DMABF0UtwCEnIPM/zhLK8LqhfXRybSP14XUYtHV9hGYQwQBNIo3cUIPkhQeM7rib1ekqnXg981XuC1qvy84lzojleh3puxL0hPjGjRU473teloEefAUNGjJkwZcacBUtWrNmwZceeA0dOnLlw5cadB09elPGhGf+j0NTI/65KfXerT6JhqKnpRKtgOpuqaTrtKjPUlqHmhto21I7pL6i6hlqY3q7qGWrfUAeGOjTUkaGODXViqFNDnRnq3FAXhro01JWhrg11Y6hbQ90Z6t5QD4Z6NNSToZ4N9WKoV0O9GerdUB+G+jTUl6GWRvkL24BkEXictVh9bFvVFb/nxvbz+7Rf/N6zHcd2bCfP+Wgc1Z9N0jpNnEL6kbRVS6HA2hQYGh9TGR1CbCqa2rXrWOkQE/sHNJgmtZvoVNZqE1B1DNHxzTQxCehUTYiJTQyENui0qSLezr3PduyQfgmRWOfde8+9551z7rnn/O4jLoJ/bRP0UaKQMLFJjpBAvphLZC3Dk0ok7WBzR2/upJs7Ryw/nfFbln/uuN/apCvwrKLrSvUqRufbm5pn0fs0w4gYxnGVP6qHnO4bWiDQGQgwtS6lm3lB3QoX1M2vwEmuzirF39y+Es2+DJ8d1pkyqBIqoze3D1+Zz4DrFoazxI8dWwMrDlZ2DMqQAR9AROsJU+2cmlTPazTco52F1xTa2a2+K8vvq92dVHmtLoPeQX/AZPRYGthDYOeZjBjKoFsVGulR3lWU95WeCK44qHU7MhWUGUKZDT3oKUcG2GWuh+EDDfUYA/jhAhl0TOsJNYSEu7mQmi3UzfXwZKA4BsVsHLXQYGgRW95uEtpJ1Vfn9XiLriRBlFEqxsDjA09yCNUoQxxwd7KWSTt2y3GTKiflqHRSoWZc3m11Wa/fJdFgXD4sSYfleJBKd8GMz7J8dZn/cGRCcKGDnA2Ge3fKzcvlnTDNthGWLXzX/WaXtUAmRgeLlHSr30r0G9UTXMb0AtmwzOoy73fkSlHZkduw/TYuU9cAD4YutPoxTTsA3797wVr4Z/1NC5zARHr4vtxJjxIfiZMhMkbWk+14BnJZKwqGZwDfswLyxWDSg11rFLJF7Nopxjd1h1/QOT+oezgfu3Yq+Hk+duf5x+40o1GTkaIgikK/IEnC6aYxCUBaZJSN4XTYFjU/YMNIKqJwhDGOCCI8FDXnXmXjtGhGJyShqjAOnBOkW2JG9S7GgYeMWAU5JzhnWmBOaOM+CKEPoqSfFDC2Unq+DLlUgUVUFFLZGJg6jtlojsdsa8kPObPuJdi5dnBdBsLJMGTWDa4t2JvtwuPo9s+Y86suv/W33QG1rAaOAUV+vx4K6f2D04PVKlC7WLSrZzAi45ZV6lIC7WoXqmRyvUqoVwrzUoVsIjeTXWQv+RH5GTlBXiB/In8ln0IbBCAFOajAJrgZYyOHWqOfUe/aHjI12R6OQo1jCgt215l+4f6XPb+0MNou0V+43n2F77tSfRb24d7zitgnKmvYHs69zugaPvBwv6ioXkb2LdL65Atw51uLkXlu1bhMMRcXSPcYoqKIRlh34lQP8/5JbuUFye4vxD6/6MxFF11C0uVLr9Ulgw44tS3pMViNLUExbycFgLIct+QDMibRimx1ydUz8FXZiuOIDBOMVX2nUZc+huNE5XUJ81uiJoiabwqaVF0uacKbau/pl4R2VW0XXlJra6boVrYG646TF5NYzwy4vjENVrDlcNpZPl8DH6XX8XWCx0mvWVZY6KFLrvsY66/zPict5FnxaNUR/juvZCM3TvD60E2W1tZizbXTPDuabcm0nbbzpWKpmA1ayBQ8giedLUM+A0kNjBjQjmuYz7YrgIXYvmF63ZLBwSXrpn9Tb9wwdd/U1H0PMQK3XcO8ul3WT7PyPPdpy0TemKxNRcJNauiXJnnUDpUppQWs4SnUIy0EESGYqJYQLGHxzaGWwVIaS6Y7mQFM8ZjYDQ3axjf61SWjU33JwOZA1pwaG1L9mzf71aHRdX1JHw6Fp0aXhNwbqyeGNg4NbdzGCBxoz4ZXjy4Nu69Zr6sDY6vMrLU5nA1P8JkbdWXJ6ERfMryvNh1JfQ9+T4dIhGvK9w3dxjBBzatsQ/MlOHVIDnYpDz6odAXlQ01t2Pa5Iafd8MMpxAeDKP0C6CjgVLT5osB6icUx01lWjXxzT/GyRF2welEM5Z/7jG3VjQ1SrNn5IbyzOG5dobB3/QHxyZvsXcoz8IoEwS7plCg+zxHQk424q9BfEpkESJbFHQusDBSWFkuBkoPO0kLKwRVYjxGXlHTcTDQMJ/H6TX9afkO7mnraTO1feTnZAXLu4cp7HAXMmNG1yeFk9TgS/NHhZR/4QoBTr/ZB+6hCgyl15Nq1UbN6nE1/ZnP1U2cizCBpvs8cJQZJ4LkYx5N/yZPAUZNQQ0V4f3BQllWrK3YRzl30dOT6RVn2upNur6woSa8CqpdT/aKnBM4o3jNur9d9xqtUT6veBEt9Ca9at+ERzEEhUkR8sa5mQ4aVvJoVeEA8zI4ei5mULXFGyU7z/6TAeYLVcpzSWZY8PYYF5yrTV60sT0+XV141vX++Wf16V2bFeGVPZXxFpkvyeKTWLlzfW0mnKxsY6Y3294/0998SCfX1blm5pbcvFGlq/r07MRAMhYIDiW5JFKWW3vdrEpCsZSJG+om7Zu/PSScZJhNkLbmW5Wsr12pWqW5zKtlwRS4bFOxUw17mCzy6lskCDl1WYOGWDYrADrMA7BDDweWWNd5koiJnR1dz+ytLP2q0SqPB1lnK2ccB7RYe4FSoPks3iB3t4txTSHctb2sy1ivk0pvHuCNm6w1f6wxv3+OCgN78LqdQnUVh7R0oTAp0zOf2rbW770Vu5C2dIyGdTnHo8zSji7dppj0USoVCz+lhRMTh53Teq9VbGfbjuSbAooSdXayY4PYHg374C6f7gl1B/DXuJ4/QXxOBdJFJspFsI3egpoWUUCjlTIFnNYNl+ZyZKmBeYKGHkD1QyDlhaKbKwKcIJqJ4TLJ2OmdY/JWXae4DdGBw8HZ7eXcgFF2zr2SoalDry5iKqoa0Puhe3hPQ2s3elTYM+MI+n3rK0KgL7/La3GeMLt6m7u912vGnvtORiIa0qBmhqVi+XW9XNBmqb8eVgKzIHfGI5bNoG7X0UCzeISmqIcO/nY8FH7U8avX9fx/ST+hx0sezPw9Qy8Mum3GWf2N4Uy/yIYGVBXbJHWIZp7dfTcptdMTr9Qmq7DaiK/ukqCL4kt4RUfS5XPnMtmT22/mQFqF7emSqtrlu8SVElxDRJrZODkpuwe0VfTfjdEp1f7A7v+fozNBXUJ/6WTuK2TtFlpFVZAZ3LcFvUi1Z2p2YT+EMAkGJVStOzLTAPg4IqWIAlzRSjOBkl2zxj3TKycpzT/MnvX3uaSMWM+gU0rkXjohhefVRMaps3/kLMSKv23lT23uxQrkQjyOJleMDsdhAnD6ZGElWZ5MjCXzCE/hkWX+WF4knzGhVOyK2eQZekV3eyo0zL8kuYWCnDCvjjhAkcTPOBDXVdoav3HVcFnQjLvtV9S2p0zA6JegPwMQxt+yFb3ll9zGlq/5dRKb3cEyQYoaNYpharJ7xCB7AWxsLY3jjZXY0XsZj0Wjwc9I6PP/dKABnCZaqHpaZEACxk4ZeLZSKNgZABl+lYQX1sJQOSX3n6r410evcoud5JeAGUXVP9H1tZOKejTq4Ono0z0erro1FrnOpohva1d/hTdtVsQdKN5W9RlT3NjD0nznyKNTgKAMfWNWcyodV0IGLPIHOF0o4JyqufaK4z6WIIzuGh3d8c8cwQg8ER+OVxyrjdm8vNuhts4LoOihGxIMuUdgzwiYN7xhh1+oZnJNuTG7gQZvu4XWZ9GAZZjGEubwePqYhtKDTH+9VQkl17/iGybsnJ+8+sKtyPrcll9ty65Zsdst/9iqpEKh7M5VdBxh3csOdNc6tW3I1uyM1PzOXegSOrLFsFNI2O27M+TF2ApnN9MUv5ud6LjxIvEQnHRzxIu4IsA9MLFkJn2tcZoZ7ON7dXe7ujrc8HrusPKamlqXwd77lQUuLpilau4PUMapueBb7irU4RoUXEYXuVuIGlRGmOp+2lNkaRPVziOqmlaZvaqG4dFgSj0jxEJWrv12IUWntmw+rfQarRE0Aph4ocI6nlUlGqs+u3/+T/ethW62PpHp2eHbZstnh/wOO95yDAHicY2BkYGAAYi2NOJ94fpuvDNzML4AiDNc/fzqEoP+/Zp7KdAvI5WBgAokCAGkcDfgAAAB4nGNgZGBgDvqfBSRfMAAB81QGRgZUoA0AVvYDbwAAAHicY2BgYGB+MTQwAM8EJo8AAAAAAE4AmgDoAQoBLAFOAXABmgHEAe4CGgKcAugEmgS8BNYE8gUOBSoFegXQBf4GRAZmBrYHGAeQCBgIUghqCP4JRgm+CdoKBAo8CoIKuArwC1ALlgu8eJxjYGRgYNBmTGEQZQABJiDmAkIGhv9gPgMAGJQBvAB4nG2RPU7DMBiG3/QP0UoIBGJh8QILavozdmRo9w7d09RpUzlx5LgVvQMn4BAcgoEzcAgOwVvzSZVQbcnf48fvFysJgGt8IcJxROiG9TgauODuj5ukG+EW+UG4jR4ehTv0Q+EunjER7uEWmk+IWpc0d3gVbuAKb8JN+nfhFvlDuI17fAp36L+Fu1jgR7iHp+jF7Arbz1Nb1nO93pnEncSJFtrVuS3VKB6e5EyX2iVer9TyoOr9eux9pjJnCzW1pdfGWFU5u9WpjzfeV5PBIBMfp7aAwQ4FLPrIkbKWqDHn+67pDRK4s4lzbsEux5qHvcIIMb/nueSMyTKkE3jWFdNLHLjW2PPmMa1Hxn3GjGW/wjT0HtOG09JU4WxLk9LH2ISuiv9twJn9y8fh9uIXI+BknAAAAHicbY7ZboMwEEW5CVBCSLrv+76kfJRjTwHFsdGAG+Xvy5JUfehIHp0rnxmNN/D6ir3/a4YBhvARIMQOIowQY4wEE0yxiz3s4wCHOMIxTnCKM5zjApe4wjVucIs73OMBj3jCM17wije84wMzfHqJ0EVmUkmmJo77oOmrHvfIRZbXsTCZplTZldlgb3TYGVHProwFs11t1A57tcON2rErR3PBqcwF1/6ctI6k0GSU4JHMSS6WghdJQ99sTbfuN7QLJ9vQ37dNrgyktnIxlDYLJNuqitpRbYWKFNuyDT6pog6oOYKHtKakeakqKjHXpPwlGRcsC+OqxLIiJpXqoqqDMreG2l5bv9Ri3TRX+c23DZna9WFFgmXuO6Ps1Jm/w6ErW8N3FbHn/QC444j0AA==) format(\'woff\');\n      font-weight: normal;\n      font-style: normal;\n    }\n\n    html {\n      --lumo-icons-align-center: "\\ea01";\n      --lumo-icons-align-left: "\\ea02";\n      --lumo-icons-align-right: "\\ea03";\n      --lumo-icons-angle-down: "\\ea04";\n      --lumo-icons-angle-left: "\\ea05";\n      --lumo-icons-angle-right: "\\ea06";\n      --lumo-icons-angle-up: "\\ea07";\n      --lumo-icons-arrow-down: "\\ea08";\n      --lumo-icons-arrow-left: "\\ea09";\n      --lumo-icons-arrow-right: "\\ea0a";\n      --lumo-icons-arrow-up: "\\ea0b";\n      --lumo-icons-bar-chart: "\\ea0c";\n      --lumo-icons-bell: "\\ea0d";\n      --lumo-icons-calendar: "\\ea0e";\n      --lumo-icons-checkmark: "\\ea0f";\n      --lumo-icons-chevron-down: "\\ea10";\n      --lumo-icons-chevron-left: "\\ea11";\n      --lumo-icons-chevron-right: "\\ea12";\n      --lumo-icons-chevron-up: "\\ea13";\n      --lumo-icons-clock: "\\ea14";\n      --lumo-icons-cog: "\\ea15";\n      --lumo-icons-cross: "\\ea16";\n      --lumo-icons-download: "\\ea17";\n      --lumo-icons-dropdown: "\\ea18";\n      --lumo-icons-edit: "\\ea19";\n      --lumo-icons-error: "\\ea1a";\n      --lumo-icons-eye: "\\ea1b";\n      --lumo-icons-eye-disabled: "\\ea1c";\n      --lumo-icons-menu: "\\ea1d";\n      --lumo-icons-minus: "\\ea1e";\n      --lumo-icons-ordered-list: "\\ea1f";\n      --lumo-icons-phone: "\\ea20";\n      --lumo-icons-photo: "\\ea21";\n      --lumo-icons-play: "\\ea22";\n      --lumo-icons-plus: "\\ea23";\n      --lumo-icons-redo: "\\ea24";\n      --lumo-icons-reload: "\\ea25";\n      --lumo-icons-search: "\\ea26";\n      --lumo-icons-undo: "\\ea27";\n      --lumo-icons-unordered-list: "\\ea28";\n      --lumo-icons-upload: "\\ea29";\n      --lumo-icons-user: "\\ea2a";\n    }\n  </style>\n</custom-style>',document.head.appendChild(io.content);const no=document.createElement("template");no.innerHTML='<dom-module id="lumo-item" theme-for="vaadin-item">\n  <template>\n    <style>\n      :host {\n        display: flex;\n        align-items: center;\n        box-sizing: border-box;\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size-m);\n        line-height: var(--lumo-line-height-xs);\n        padding: 0.5em 1em;\n        min-height: var(--lumo-size-m);\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        -webkit-tap-highlight-color: transparent;\n      }\n\n      /* Selectable items have a checkmark icon */\n      :host([tabindex])::before {\n        display: var(--_lumo-item-selected-icon-display, none);\n        content: var(--lumo-icons-checkmark);\n        font-family: lumo-icons;\n        font-size: var(--lumo-icon-size-m);\n        line-height: 1;\n        font-weight: normal;\n        width: 1em;\n        height: 1em;\n        margin: calc((1 - var(--lumo-line-height-xs)) * var(--lumo-font-size-m) / 2) 0;\n        color: var(--lumo-primary-text-color);\n        flex: none;\n        opacity: 0;\n        transition: transform 0.2s cubic-bezier(.12, .32, .54, 2), opacity 0.1s;\n      }\n\n      :host([selected])::before {\n        opacity: 1;\n      }\n\n      :host([active]:not([selected]))::before {\n        transform: scale(0.8);\n        opacity: 0;\n        transition-duration: 0s;\n      }\n\n      [part="content"] {\n        flex: auto;\n      }\n\n      /* Disabled item */\n\n      :host([disabled]) {\n        color: var(--lumo-disabled-text-color);\n        cursor: default;\n        pointer-events: none;\n      }\n\n      /* Slotted icons */\n\n      :host ::slotted(iron-icon) {\n        width: var(--lumo-icon-size-m);\n        height: var(--lumo-icon-size-m);\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(no.content);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
const so=e=>(class extends e{static get properties(){return{_hasVaadinItemMixin:{value:!0},disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0},selected:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_selectedChanged"},_value:String}}constructor(){super(),this.value}get value(){return void 0!==this._value?this._value:this.textContent.trim()}set value(e){this._value=e}ready(){super.ready();const e=this.getAttribute("value");null!==e&&(this.value=e),this.addEventListener("focus",e=>this._setFocused(!0),!0),this.addEventListener("blur",e=>this._setFocused(!1),!0),this.addEventListener("mousedown",e=>{this._setActive(this._mousedown=!0);const t=()=>{this._setActive(this._mousedown=!1),document.removeEventListener("mouseup",t)};document.addEventListener("mouseup",t)}),this.addEventListener("keydown",e=>this._onKeydown(e)),this.addEventListener("keyup",e=>this._onKeyup(e))}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("active")&&this._setFocused(!1)}_selectedChanged(e){this.setAttribute("aria-selected",e)}_disabledChanged(e){e?(this.selected=!1,this.setAttribute("aria-disabled","true"),this.blur()):this.removeAttribute("aria-disabled")}_setFocused(e){e?(this.setAttribute("focused",""),this._mousedown||this.setAttribute("focus-ring","")):(this.removeAttribute("focused"),this.removeAttribute("focus-ring"),this._setActive(!1))}_setActive(e){e?this.setAttribute("active",""):this.removeAttribute("active")}_onKeydown(e){/^( |SpaceBar|Enter)$/.test(e.key)&&!e.defaultPrevented&&(e.preventDefault(),this._setActive(!0))}_onKeyup(e){this.hasAttribute("active")&&(this._setActive(!1),this.click())}});
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/class oo extends(so(Ys(Ps))){static get template(){return Is`
    <style>
      :host {
        display: inline-block;
      }

      :host([hidden]) {
        display: none !important;
      }
    </style>
    <div part="content">
      <slot></slot>
    </div>
`}static get is(){return"vaadin-item"}static get version(){return"2.1.0"}}customElements.define(oo.is,oo);const ro=Is`<dom-module id="lumo-combo-box-item" theme-for="vaadin-combo-box-item">
  <template>
    <style include="lumo-item">
      /* TODO partly duplicated from vaadin-list-box styles. Should find a way to make it DRY */

      :host {
        cursor: default;
        -webkit-tap-highlight-color: var(--lumo-primary-color-10pct);
        padding-left: calc(var(--lumo-border-radius) / 4);
        padding-right: calc(var(--lumo-space-l) + var(--lumo-border-radius) / 4);
        transition: background-color 100ms;
        border-radius: var(--lumo-border-radius);
        overflow: hidden;
        --_lumo-item-selected-icon-display: block;
      }

      /* ShadyCSS workaround (show the selected item checkmark) */
      :host::before {
        display: block;
      }

      :host(:hover) {
        background-color: var(--lumo-primary-color-10pct);
      }

      :host([focused]:not([disabled])) {
        box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      @media (pointer: coarse) {
        :host(:hover) {
          background-color: transparent;
        }

        :host([focused]:not([disabled])) {
          box-shadow: none;
        }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(ro.content);const ao=document.createElement("template");ao.innerHTML='<dom-module id="lumo-field-button">\n  <template>\n    <style>\n      [part$="button"] {\n        flex: none;\n        width: 1em;\n        height: 1em;\n        line-height: 1;\n        font-size: var(--lumo-icon-size-m);\n        text-align: center;\n        color: var(--lumo-contrast-60pct);\n        transition: 0.2s color;\n        cursor: var(--lumo-clickable-cursor);\n      }\n\n      :host(:not([readonly])) [part$="button"]:hover {\n        color: var(--lumo-contrast-90pct);\n      }\n\n      :host([disabled]) [part$="button"],\n      :host([readonly]) [part$="button"] {\n        color: var(--lumo-contrast-20pct);\n      }\n\n      [part$="button"]::before {\n        font-family: "lumo-icons";\n        display: block;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(ao.content);const lo=document.createElement("template");lo.innerHTML='<dom-module id="lumo-required-field">\n  <template>\n    <style>\n      [part="label"] {\n        align-self: flex-start;\n        color: var(--lumo-secondary-text-color);\n        font-weight: 500;\n        font-size: var(--lumo-font-size-s);\n        margin-left: calc(var(--lumo-border-radius-m) / 4);\n        transition: color 0.2s;\n        line-height: 1;\n        padding-bottom: 0.5em;\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n        position: relative;\n        max-width: 100%;\n        box-sizing: border-box;\n      }\n\n      :host([has-label])::before {\n        margin-top: calc(var(--lumo-font-size-s) * 1.5);\n      }\n\n      :host([has-label]) {\n        padding-top: var(--lumo-space-m);\n      }\n\n      :host([required]) [part="label"] {\n        padding-right: 1em;\n      }\n\n      [part="label"]::after {\n        content: var(--lumo-required-field-indicator, "•");\n        transition: opacity 0.2s;\n        opacity: 0;\n        color: var(--lumo-primary-text-color);\n        position: absolute;\n        right: 0;\n        width: 1em;\n        text-align: center;\n      }\n\n      :host([required]:not([has-value])) [part="label"]::after {\n        opacity: 1;\n      }\n\n      :host([invalid]) [part="label"]::after {\n        color: var(--lumo-error-text-color);\n      }\n\n      [part="error-message"] {\n        margin-left: calc(var(--lumo-border-radius-m) / 4);\n        font-size: var(--lumo-font-size-xs);\n        line-height: var(--lumo-line-height-xs);\n        color: var(--lumo-error-text-color);\n        will-change: max-height;\n        transition: 0.4s max-height;\n        max-height: 5em;\n      }\n\n      /* Margin that doesn’t reserve space when there’s no error message */\n      [part="error-message"]:not(:empty)::before,\n      [part="error-message"]:not(:empty)::after {\n        content: "";\n        display: block;\n        height: 0.4em;\n      }\n\n      :host(:not([invalid])) [part="error-message"] {\n        max-height: 0;\n        overflow: hidden;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(lo.content);const co=Is`<dom-module id="lumo-text-field" theme-for="vaadin-text-field">
  <template>
    <style include="lumo-required-field lumo-field-button">
      :host {
        --lumo-text-field-size: var(--lumo-size-m);
        color: var(--lumo-body-text-color);
        font-size: var(--lumo-font-size-m);
        font-family: var(--lumo-font-family);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-tap-highlight-color: transparent;
        padding: var(--lumo-space-xs) 0;
      }

      :host::before {
        height: var(--lumo-text-field-size);
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
      }

      :host([focused]:not([readonly])) [part="label"] {
        color: var(--lumo-primary-text-color);
      }

      [part="value"],
      [part="input-field"] ::slotted(input),
      [part="input-field"] ::slotted(textarea),
      /* Slotted by vaadin-select-text-field */
      [part="input-field"] ::slotted([part="value"]) {
        cursor: inherit;
        min-height: var(--lumo-text-field-size);
        padding: 0 0.25em;
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
        -webkit-mask-image: var(--_lumo-text-field-overflow-mask-image);
      }

      [part="value"]:focus,
      [part="input-field"] ::slotted(input):focus,
      [part="input-field"] ::slotted(textarea):focus {
        -webkit-mask-image: none;
        mask-image: none;
      }

      /*
        TODO: CSS custom property in \`mask-image\` causes crash in Edge
        see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/15415089/
      */
      @-moz-document url-prefix() {
        [part="value"],
        [part="input-field"] ::slotted(input),
        [part="input-field"] ::slotted(textarea),
        [part="input-field"] ::slotted([part="value"]) {
          mask-image: var(--_lumo-text-field-overflow-mask-image);
        }
      }

      [part="value"]::-webkit-input-placeholder {
        color: inherit;
        transition: opacity 0.175s 0.05s;
        opacity: 0.5;
      }

      [part="value"]:-ms-input-placeholder {
        color: inherit;
        opacity: 0.5;
      }

      [part="value"]::-moz-placeholder {
        color: inherit;
        transition: opacity 0.175s 0.05s;
        opacity: 0.5;
      }

      [part="value"]::placeholder {
        color: inherit;
        transition: opacity 0.175s 0.1s;
        opacity: 0.5;
      }

      [part="input-field"] {
        border-radius: var(--lumo-border-radius);
        background-color: var(--lumo-contrast-10pct);
        padding: 0 calc(0.375em + var(--lumo-border-radius) / 4 - 1px);
        font-weight: 500;
        line-height: 1;
        position: relative;
        cursor: text;
        box-sizing: border-box;
      }

      /* Used for hover and activation effects */
      [part="input-field"]::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border-radius: inherit;
        pointer-events: none;
        background-color: var(--lumo-contrast-50pct);
        opacity: 0;
        transition: transform 0.15s, opacity 0.2s;
        transform-origin: 100% 0;
      }

      /* Hover */

      :host(:hover:not([readonly]):not([focused])) [part="label"] {
        color: var(--lumo-body-text-color);
      }

      :host(:hover:not([readonly]):not([focused])) [part="input-field"]::after {
        opacity: 0.1;
      }

      /* Touch device adjustment */
      @media (pointer: coarse) {
        :host(:hover:not([readonly]):not([focused])) [part="label"] {
          color: var(--lumo-secondary-text-color);
        }

        :host(:hover:not([readonly]):not([focused])) [part="input-field"]::after {
          opacity: 0;
        }

        :host(:active:not([readonly]):not([focused])) [part="input-field"]::after {
          opacity: 0.2;
        }
      }

      /* Trigger when not focusing using the keyboard */
      :host([focused]:not([focus-ring]):not([readonly])) [part="input-field"]::after {
        transform: scaleX(0);
        transition-duration: 0.15s, 1s;
      }

      /* Focus-ring */

      :host([focus-ring]) [part="input-field"] {
        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      /* Read-only and disabled */
      :host([readonly]) [part="value"]::-webkit-input-placeholder,
      :host([disabled]) [part="value"]::-webkit-input-placeholder {
        opacity: 0;
      }

      :host([readonly]) [part="value"]:-ms-input-placeholder,
      :host([disabled]) [part="value"]:-ms-input-placeholder {
        opacity: 0;
      }

      :host([readonly]) [part="value"]::-moz-placeholder,
      :host([disabled]) [part="value"]::-moz-placeholder {
        opacity: 0;
      }

      :host([readonly]) [part="value"]::placeholder,
      :host([disabled]) [part="value"]::placeholder {
        opacity: 0;
      }

      /* Read-only */

      :host([readonly]) [part="input-field"] {
        color: var(--lumo-secondary-text-color);
        background-color: transparent;
        cursor: default;
      }

      :host([readonly]) [part="input-field"]::after {
        background-color: transparent;
        opacity: 1;
        border: 1px dashed var(--lumo-contrast-30pct);
      }

      /* Disabled style */

      :host([disabled]) {
        pointer-events: none;
      }

      :host([disabled]) [part="input-field"] {
        background-color: var(--lumo-contrast-5pct);
      }

      :host([disabled]) [part="label"],
      :host([disabled]) [part="value"],
      :host([disabled]) [part="input-field"] ::slotted(*) {
        color: var(--lumo-disabled-text-color);
        -webkit-text-fill-color: var(--lumo-disabled-text-color);
      }

      /* Invalid style */

      :host([invalid]) [part="input-field"] {
        background-color: var(--lumo-error-color-10pct);
      }

      :host([invalid]) [part="input-field"]::after {
        background-color: var(--lumo-error-color-50pct);
      }

      :host([invalid][focus-ring]) [part="input-field"] {
        box-shadow: 0 0 0 2px var(--lumo-error-color-50pct);
      }

      :host([input-prevented]) [part="input-field"] {
        color: var(--lumo-error-text-color);
      }

      /* Small theme */

      :host([theme~="small"]) {
        font-size: var(--lumo-font-size-s);
        --lumo-text-field-size: var(--lumo-size-s);
      }

      :host([theme~="small"][has-label]) [part="label"] {
        font-size: var(--lumo-font-size-xs);
      }

      :host([theme~="small"][has-label]) [part="error-message"] {
        font-size: var(--lumo-font-size-xxs);
      }

      /* Text align */

      :host([theme~="align-center"]) [part="value"] {
        text-align: center;
        --_lumo-text-field-overflow-mask-image: none;
      }

      :host([theme~="align-right"]) [part="value"] {
        text-align: right;
        --_lumo-text-field-overflow-mask-image: none;
      }

      @-moz-document url-prefix() {
        /* Firefox is smart enough to align overflowing text to right */
        :host([theme~="align-right"]) [part="value"] {
          --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
        }
      }

      /* Slotted content */

      [part="input-field"] ::slotted(:not([part]):not(iron-icon):not(input):not(textarea)) {
        color: var(--lumo-secondary-text-color);
        font-weight: 400;
      }

      /* Slotted icons */

      [part="input-field"] ::slotted(iron-icon) {
        color: var(--lumo-contrast-60pct);
        width: var(--lumo-icon-size-m);
        height: var(--lumo-icon-size-m);
      }

      /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
      [part="input-field"] ::slotted(iron-icon[icon^="vaadin:"]) {
        padding: 0.25em;
        box-sizing: border-box !important;
      }

      [part="clear-button"]::before {
        content: var(--lumo-icons-cross);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(co.content);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
const ho=e=>(class extends((e=>(class extends e{static get properties(){var e={tabindex:{type:Number,value:0,reflectToAttribute:!0,observer:"_tabindexChanged"}};return window.ShadyDOM&&(e.tabIndex=e.tabindex),e}}))(e)){static get properties(){return{autofocus:{type:Boolean},_previousTabIndex:{type:Number},disabled:{type:Boolean,observer:"_disabledChanged",reflectToAttribute:!0},_isShiftTabbing:{type:Boolean}}}ready(){this.addEventListener("focusin",e=>{e.composedPath()[0]===this?this._focus(e):-1===e.composedPath().indexOf(this.focusElement)||this.disabled||this._setFocused(!0)}),this.addEventListener("focusout",e=>this._setFocused(!1)),super.ready();const e=e=>{e.composed||e.target.dispatchEvent(new CustomEvent(e.type,{bubbles:!0,composed:!0,cancelable:!1}))};this.shadowRoot.addEventListener("focusin",e),this.shadowRoot.addEventListener("focusout",e),this.addEventListener("keydown",e=>{if(!e.defaultPrevented&&9===e.keyCode)if(e.shiftKey)this._isShiftTabbing=!0,HTMLElement.prototype.focus.apply(this),this._setFocused(!1),setTimeout(()=>this._isShiftTabbing=!1,0);else{const e=window.navigator.userAgent.match(/Firefox\/(\d\d\.\d)/);if(e&&parseFloat(e[1])>=63&&parseFloat(e[1])<66&&this.parentNode&&this.nextSibling){const e=document.createElement("input");e.style.position="absolute",e.style.opacity=0,e.tabIndex=this.tabIndex,this.parentNode.insertBefore(e,this.nextSibling),e.focus(),e.addEventListener("focusout",()=>this.parentNode.removeChild(e))}}}),!this.autofocus||this.focused||this.disabled||window.requestAnimationFrame(()=>{this._focus(),this._setFocused(!0),this.setAttribute("focus-ring","")}),this._boundKeydownListener=this._bodyKeydownListener.bind(this),this._boundKeyupListener=this._bodyKeyupListener.bind(this)}connectedCallback(){super.connectedCallback(),document.body.addEventListener("keydown",this._boundKeydownListener,!0),document.body.addEventListener("keyup",this._boundKeyupListener,!0)}disconnectedCallback(){super.disconnectedCallback(),document.body.removeEventListener("keydown",this._boundKeydownListener,!0),document.body.removeEventListener("keyup",this._boundKeyupListener,!0),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(e){e?this.setAttribute("focused",""):this.removeAttribute("focused"),e&&this._tabPressed?this.setAttribute("focus-ring",""):this.removeAttribute("focus-ring")}_bodyKeydownListener(e){this._tabPressed=9===e.keyCode}_bodyKeyupListener(){this._tabPressed=!1}get focusElement(){return window.console.warn(`Please implement the 'focusElement' property in <${this.localName}>`),this}_focus(e){this._isShiftTabbing||(this.focusElement.focus(),this._setFocused(!0))}focus(){this.focusElement&&!this.disabled&&(this.focusElement.focus(),this._setFocused(!0))}blur(){this.focusElement.blur(),this._setFocused(!1)}_disabledChanged(e){this.focusElement.disabled=e,e?(this.blur(),this._previousTabIndex=this.tabindex,this.tabindex=-1,this.setAttribute("aria-disabled","true")):(void 0!==this._previousTabIndex&&(this.tabindex=this._previousTabIndex),this.removeAttribute("aria-disabled"))}_tabindexChanged(e){void 0!==e&&(this.focusElement.tabIndex=e),this.disabled&&this.tabindex&&(-1!==this.tabindex&&(this._previousTabIndex=this.tabindex),this.tabindex=e=void 0),window.ShadyDOM&&this.setProperties({tabIndex:e,tabindex:e})}click(){this.disabled||super.click()}}),uo=document.createElement("template");uo.innerHTML='<dom-module id="vaadin-text-field-shared-styles">\n  <template>\n    <style>\n      :host {\n        display: inline-flex;\n        outline: none;\n      }\n\n      :host::before {\n        content: "\\2003";\n        width: 0;\n        display: inline-block;\n        /* Size and position this element on the same vertical position as the input-field element\n           to make vertical align for the host element work as expected */\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      .vaadin-text-field-container,\n      .vaadin-text-area-container {\n        display: flex;\n        flex-direction: column;\n        min-width: 100%;\n        max-width: 100%;\n        width: var(--vaadin-text-field-default-width, 12em);\n      }\n\n      [part="label"]:empty {\n        display: none;\n      }\n\n      [part="input-field"] {\n        display: flex;\n        align-items: center;\n        flex: auto;\n      }\n\n      .vaadin-text-field-container [part="input-field"] {\n        flex-grow: 0;\n      }\n\n      /* Reset the native input styles */\n      [part="value"],\n      [part="input-field"] ::slotted(input),\n      [part="input-field"] ::slotted(textarea) {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        outline: none;\n        margin: 0;\n        padding: 0;\n        border: 0;\n        border-radius: 0;\n        min-width: 0;\n        font: inherit;\n        font-size: 1em;\n        line-height: normal;\n        color: inherit;\n        background-color: transparent;\n        /* Disable default invalid style in Firefox */\n        box-shadow: none;\n      }\n\n      [part="input-field"] ::slotted(*) {\n        flex: none;\n      }\n\n      [part="value"],\n      [part="input-field"] ::slotted(input),\n      [part="input-field"] ::slotted(textarea),\n      /* Slotted by vaadin-select-text-field */\n      [part="input-field"] ::slotted([part="value"]) {\n        flex: auto;\n        white-space: nowrap;\n        overflow: hidden;\n        width: 100%;\n        height: 100%;\n      }\n\n      [part="input-field"] ::slotted(textarea) {\n        resize: none;\n      }\n\n      [part="value"]::-ms-clear,\n      [part="input-field"] ::slotted(input)::-ms-clear {\n        display: none;\n      }\n\n      [part="clear-button"] {\n        cursor: default;\n      }\n\n      [part="clear-button"]::before {\n        content: "✕";\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(uo.content);const po={default:["list","autofocus","pattern","autocapitalize","autocorrect","maxlength","minlength","name","placeholder","autocomplete","title"],accessible:["disabled","readonly","required","invalid"]},mo={DEFAULT:"default",ACCESSIBLE:"accessible"},_o=e=>(class extends(ho(e)){static get properties(){return{autocomplete:{type:String},autocorrect:{type:String},autocapitalize:{type:String},autoselect:{type:Boolean,value:!1},clearButtonVisible:{type:Boolean,value:!1},errorMessage:{type:String,value:""},i18n:{type:Object,value:()=>({clear:"Clear"})},label:{type:String,value:"",observer:"_labelChanged"},maxlength:{type:Number},minlength:{type:Number},name:{type:String},placeholder:{type:String},readonly:{type:Boolean,reflectToAttribute:!0},required:{type:Boolean,reflectToAttribute:!0},value:{type:String,value:"",observer:"_valueChanged",notify:!0},invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},hasValue:{type:Boolean,reflectToAttribute:!0},preventInvalidInput:{type:Boolean},_labelId:String,_errorId:String,_inputId:String}}static get observers(){return["_stateChanged(disabled, readonly, clearButtonVisible, hasValue)","_hostPropsChanged("+po.default.join(", ")+")","_hostAccessiblePropsChanged("+po.accessible.join(", ")+")","_getActiveErrorId(invalid, errorMessage, _errorId)","_getActiveLabelId(label, _labelId, _inputId)","__observeOffsetHeight(errorMessage, invalid, label)"]}get focusElement(){if(!this.shadowRoot)return;const e=this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`);return e||this.shadowRoot.querySelector('[part="value"]')}get inputElement(){return this.focusElement}get _slottedTagName(){return"input"}_createConstraintsObserver(){this._createMethodObserver("_constraintsChanged(required, minlength, maxlength, pattern)")}_onInput(e){if(this.__preventInput)return e.stopImmediatePropagation(),void(this.__preventInput=!1);if(this.preventInvalidInput){const e=this.inputElement;if(e.value.length>0&&!this.checkValidity())return e.value=this.value||"",this.setAttribute("input-prevented",""),void(this._inputDebouncer=vi.debounce(this._inputDebouncer,wt.after(200),()=>{this.removeAttribute("input-prevented")}))}e.__fromClearButton||(this.__userInput=!0),this.value=e.target.value}_stateChanged(e,t,i,n){!e&&!t&&i&&n?this.$.clearButton.removeAttribute("hidden"):this.$.clearButton.setAttribute("hidden",!0)}_onChange(e){if(this._valueClearing)return;const t=new CustomEvent("change",{detail:{sourceEvent:e},bubbles:e.bubbles,cancelable:e.cancelable});this.dispatchEvent(t)}_valueChanged(e,t){""===e&&void 0===t||(this.hasValue=""!==e&&null!=e,this.__userInput?this.__userInput=!1:(void 0!==e?this.inputElement.value=e:this.value=this.inputElement.value="",this.invalid&&this.validate()))}_labelChanged(e){""!==e&&null!=e?this.setAttribute("has-label",""):this.removeAttribute("has-label")}_onSlotChange(){const e=this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`);this.value&&(this.inputElement.value=this.value,this.validate()),e&&!this._slottedInput?(this._validateSlottedValue(e),this._addInputListeners(e),this._addIEListeners(e),this._slottedInput=e):!e&&this._slottedInput&&(this._removeInputListeners(this._slottedInput),this._removeIEListeners(this._slottedInput),this._slottedInput=void 0),Object.keys(mo).map(e=>mo[e]).forEach(e=>this._propagateHostAttributes(po[e].map(e=>this[e]),e))}_hostPropsChanged(...e){this._propagateHostAttributes(e,mo.DEFAULT)}_hostAccessiblePropsChanged(...e){this._propagateHostAttributes(e,mo.ACCESSIBLE)}_validateSlottedValue(e){e.value!==this.value&&(console.warn("Please define value on the vaadin-text-field component!"),e.value="")}_propagateHostAttributes(e,t){const i=this.inputElement,n=po[t];"accessible"===t?n.forEach((t,n)=>{this._setOrToggleAttribute(t,e[n],i),this._setOrToggleAttribute(`aria-${t}`,e[n],i)}):n.forEach((t,n)=>{this._setOrToggleAttribute(t,e[n],i)})}_setOrToggleAttribute(e,t,i){e&&i&&(t?i.setAttribute(e,"boolean"==typeof t?"":t):i.removeAttribute(e))}_constraintsChanged(e,t,i,n){this.invalid&&(e||t||i||n?this.validate():this.invalid=!1)}checkValidity(){return this.required||this.pattern||this.maxlength||this.minlength?this.inputElement.checkValidity():!this.invalid}_addInputListeners(e){e.addEventListener("input",this._boundOnInput),e.addEventListener("change",this._boundOnChange),e.addEventListener("blur",this._boundOnBlur),e.addEventListener("focus",this._boundOnFocus)}_removeInputListeners(e){e.removeEventListener("input",this._boundOnInput),e.removeEventListener("change",this._boundOnChange),e.removeEventListener("blur",this._boundOnBlur),e.removeEventListener("focus",this._boundOnFocus)}ready(){super.ready(),this._createConstraintsObserver(),this._boundOnInput=this._onInput.bind(this),this._boundOnChange=this._onChange.bind(this),this._boundOnBlur=this._onBlur.bind(this),this._boundOnFocus=this._onFocus.bind(this);const e=this.shadowRoot.querySelector('[part="value"]');this._slottedInput=this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`),this._addInputListeners(e),this._addIEListeners(e),this._slottedInput&&(this._addIEListeners(this._slottedInput),this._addInputListeners(this._slottedInput)),this.shadowRoot.querySelector('[name="input"], [name="textarea"]').addEventListener("slotchange",this._onSlotChange.bind(this)),window.ShadyCSS&&window.ShadyCSS.nativeCss||this.updateStyles(),this.$.clearButton.addEventListener("mousedown",()=>this._valueClearing=!0),this.$.clearButton.addEventListener("mouseleave",()=>this._valueClearing=!1),this.$.clearButton.addEventListener("click",this._onClearButtonClick.bind(this)),this.addEventListener("keydown",this._onKeyDown.bind(this));var t=_o._uniqueId=1+_o._uniqueId||0;this._errorId=`${this.constructor.is}-error-${t}`,this._labelId=`${this.constructor.is}-label-${t}`,this._inputId=`${this.constructor.is}-input-${t}`,this.shadowRoot.querySelector('[part="error-message"]').addEventListener("transitionend",()=>{this.__observeOffsetHeight()})}validate(){return!(this.invalid=!this.checkValidity())}clear(){this.value=""}_onBlur(){this.validate()}_onFocus(){this.autoselect&&(this.inputElement.select(),setTimeout(()=>{try{this.inputElement.setSelectionRange(0,9999)}catch(e){}}))}_onClearButtonClick(e){e.preventDefault(),this.inputElement.focus(),this.clear(),this._valueClearing=!1,navigator.userAgent.match(/Trident/)&&(this.__preventInput=!1);const t=new Event("input",{bubbles:!0,composed:!0});t.__fromClearButton=!0;const i=new Event("change",{bubbles:!this._slottedInput});i.__fromClearButton=!0,this.inputElement.dispatchEvent(t),this.inputElement.dispatchEvent(i)}_onKeyDown(e){if(27===e.keyCode&&this.clearButtonVisible){const e=!!this.value;this.clear(),e&&this.inputElement.dispatchEvent(new Event("change",{bubbles:!this._slottedInput}))}}_addIEListeners(e){navigator.userAgent.match(/Trident/)&&(this._shouldPreventInput=()=>{this.__preventInput=!0,requestAnimationFrame(()=>{this.__preventInput=!1})},e.addEventListener("focusin",this._shouldPreventInput),e.addEventListener("focusout",this._shouldPreventInput),this._createPropertyObserver("placeholder",this._shouldPreventInput))}_removeIEListeners(e){navigator.userAgent.match(/Trident/)&&(e.removeEventListener("focusin",this._shouldPreventInput),e.removeEventListener("focusout",this._shouldPreventInput))}_getActiveErrorId(e,t,i){this._setOrToggleAttribute("aria-describedby",t&&e?i:void 0,this.focusElement)}_getActiveLabelId(e,t,i){let n=i;e&&(n=`${t} ${i}`),this.focusElement.setAttribute("aria-labelledby",n)}_getErrorMessageAriaHidden(e,t,i){return(!(t&&e?i:void 0)).toString()}_dispatchIronResizeEventIfNeeded(e,t){const i="__previous"+e;void 0!==this[i]&&this[i]!==t&&this.dispatchEvent(new CustomEvent("iron-resize",{bubbles:!0})),this[i]=t}__observeOffsetHeight(){this._dispatchIronResizeEventIfNeeded("Height",this.offsetHeight)}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),window.ShadyCSS&&window.ShadyCSS.nativeCss||!/^(focused|focus-ring|invalid|disabled|placeholder|has-value)$/.test(e)||this.updateStyles(),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&this.root){const e="-webkit-backface-visibility";this.root.querySelectorAll("*").forEach(t=>{t.style[e]="visible",t.style[e]=""})}}}),fo=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,yo=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function go(e,t){if("function"!=typeof e)return;const i=fo.exec(e.toString());if(i)try{e=new Function(i[1])}catch(e){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",e)}return e(t)}window.Vaadin=window.Vaadin||{};const vo=function(e,t){if(window.Vaadin.developmentMode)return go(e,t)};function bo(){}void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{return!!localStorage.getItem("vaadin.developmentmode.force")||["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0&&(yo?!function(){if(yo){if(Object.keys(yo).map(e=>yo[e]).filter(e=>e.productionMode).length>0)return!0}return!1}():!go((function(){return!0})))}catch(e){return!1}}());const wo=function(){return vo(bo)};let xo;window.Vaadin||(window.Vaadin={}),window.Vaadin.registrations=window.Vaadin.registrations||[],window.Vaadin.developmentModeCallback=window.Vaadin.developmentModeCallback||{},window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){wo&&wo()};const Co=e=>(class extends e{static _finalizeClass(){super._finalizeClass(),this.is&&(window.Vaadin.registrations.push(this),window.Vaadin.developmentModeCallback&&(xo=vi.debounce(xo,Ct,()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()}),wi(xo)))}ready(){super.ready(),null===document.doctype&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}});
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/class So extends(Co(_o(Ys(Ps)))){static get template(){return Is`
    <style include="vaadin-text-field-shared-styles">
      /* polymer-cli linter breaks with empty line */
    </style>

    <div class="vaadin-text-field-container">

      <label part="label" on-click="focus" id="[[_labelId]]">[[label]]</label>

      <div part="input-field" id="[[_inputId]]">

        <slot name="prefix"></slot>

        <slot name="input">
          <input part="value">
        </slot>

        <div part="clear-button" id="clearButton" role="button" aria-label\$="[[i18n.clear]]"></div>
        <slot name="suffix"></slot>

      </div>

      <div part="error-message" id="[[_errorId]]" aria-live="assertive" aria-hidden\$="[[_getErrorMessageAriaHidden(invalid, errorMessage, _errorId)]]">[[errorMessage]]</div>

    </div>
`}static get is(){return"vaadin-text-field"}static get version(){return"2.4.12"}static get properties(){return{list:{type:String},pattern:{type:String},title:{type:String}}}}customElements.define(So.is,So);const Io=Is`<dom-module id="lumo-combo-box" theme-for="vaadin-combo-box">
  <template>
    <style include="lumo-field-button">
      :host {
        outline: none;
      }

      [part="toggle-button"]::before {
        content: var(--lumo-icons-dropdown);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(Io.content);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const Po=ns({_template:Is`
    <style>
      :host {
        display: inline-block;
        position: fixed;
        clip: rect(0px,0px,0px,0px);
      }
    </style>
    <div aria-live$="[[mode]]">[[_text]]</div>
`,is:"iron-a11y-announcer",properties:{mode:{type:String,value:"polite"},_text:{type:String,value:""}},created:function(){Po.instance||(Po.instance=this),document.body.addEventListener("iron-announce",this._onIronAnnounce.bind(this))},announce:function(e){this._text="",this.async((function(){this._text=e}),100)},_onIronAnnounce:function(e){e.detail&&e.detail.text&&this.announce(e.detail.text)}});Po.instance=null,Po.requestAvailability=function(){Po.instance||(Po.instance=document.createElement("iron-a11y-announcer")),document.body.appendChild(Po.instance)};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
var Eo={"U+0008":"backspace","U+0009":"tab","U+001B":"esc","U+0020":"space","U+007F":"del"},Ao={8:"backspace",9:"tab",13:"enter",27:"esc",33:"pageup",34:"pagedown",35:"end",36:"home",32:"space",37:"left",38:"up",39:"right",40:"down",46:"del",106:"*"},To={shift:"shiftKey",ctrl:"ctrlKey",alt:"altKey",meta:"metaKey"},ko=/[a-z0-9*]/,zo=/U\+/,Oo=/^arrow/,Lo=/^space(bar)?/,No=/^escape$/;function Ro(e,t){var i="";if(e){var n=e.toLowerCase();" "===n||Lo.test(n)?i="space":No.test(n)?i="esc":1==n.length?t&&!ko.test(n)||(i=n):i=Oo.test(n)?n.replace("arrow",""):"multiply"==n?"*":n}return i}function Mo(e,t){return e.key?Ro(e.key,t):e.detail&&e.detail.key?Ro(e.detail.key,t):(i=e.keyIdentifier,n="",i&&(i in Eo?n=Eo[i]:zo.test(i)?(i=parseInt(i.replace("U+","0x"),16),n=String.fromCharCode(i).toLowerCase()):n=i.toLowerCase()),n||function(e){var t="";return Number(e)&&(t=e>=65&&e<=90?String.fromCharCode(32+e):e>=112&&e<=123?"f"+(e-112+1):e>=48&&e<=57?String(e-48):e>=96&&e<=105?String(e-96):Ao[e]),t}(e.keyCode)||"");var i,n}function Vo(e,t){return Mo(t,e.hasModifiers)===e.key&&(!e.hasModifiers||!!t.shiftKey==!!e.shiftKey&&!!t.ctrlKey==!!e.ctrlKey&&!!t.altKey==!!e.altKey&&!!t.metaKey==!!e.metaKey)}function Fo(e){return e.trim().split(" ").map((function(e){return function(e){return 1===e.length?{combo:e,key:e,event:"keydown"}:e.split("+").reduce((function(e,t){var i=t.split(":"),n=i[0],s=i[1];return n in To?(e[To[n]]=!0,e.hasModifiers=!0):(e.key=n,e.event=s||"keydown"),e}),{combo:e.split(":").shift()})}(e)}))}Object,Boolean,Array,Object;
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/const Do=function(e,t){for(var i=Fo(t),n=0;n<i.length;++n)if(Vo(i[n],e))return!0;return!1},Bo=e=>(class extends e{static get properties(){return{opened:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0,observer:"_openedChanged"},disabled:{type:Boolean,value:!1,reflectToAttribute:!0},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},renderer:Function,items:{type:Array,observer:"_itemsChanged"},allowCustomValue:{type:Boolean,value:!1},filteredItems:{type:Array},value:{type:String,observer:"_valueChanged",notify:!0,value:""},_lastCommittedValue:String,loading:{type:Boolean,value:!1,reflectToAttribute:!0},_focusedIndex:{type:Number,value:-1},filter:{type:String,value:"",notify:!0},selectedItem:{type:Object,notify:!0},itemLabelPath:{type:String,value:"label",observer:"_itemLabelPathChanged"},itemValuePath:{type:String,value:"value"},itemIdPath:String,name:{type:String},invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},_toggleElement:Object,_clearElement:Object,_inputElementValue:String,_closeOnBlurIsPrevented:Boolean,_previousDocumentPointerEvents:String,_itemTemplate:Object}}static get observers(){return["_filterChanged(filter, itemValuePath, itemLabelPath)","_itemsOrPathsChanged(items.*, itemValuePath, itemLabelPath)","_filteredItemsChanged(filteredItems.*, itemValuePath, itemLabelPath)","_templateOrRendererChanged(_itemTemplate, renderer)","_loadingChanged(loading)","_selectedItemChanged(selectedItem, itemLabelPath)","_toggleElementChanged(_toggleElement)"]}ready(){super.ready(),this.addEventListener("focusout",e=>{const t=this.$.overlay.$.dropdown;t&&t.$&&e.relatedTarget===t.$.overlay?e.composedPath()[0].focus():this._closeOnBlurIsPrevented||this.close()}),this._lastCommittedValue=this.value,Po.requestAvailability(),this.$.overlay.addEventListener("selection-changed",this._overlaySelectedItemChanged.bind(this)),this.addEventListener("vaadin-combo-box-dropdown-closed",this.close.bind(this)),this.addEventListener("vaadin-combo-box-dropdown-opened",this._onOpened.bind(this)),this.addEventListener("keydown",this._onKeyDown.bind(this)),this.addEventListener("click",this._onClick.bind(this)),this.$.overlay.addEventListener("vaadin-overlay-touch-action",this._onOverlayTouchAction.bind(this)),this.addEventListener("touchend",e=>{this._clearElement&&e.composedPath()[0]===this._clearElement&&(e.preventDefault(),this._clear())}),this._observer=new Dn(this,e=>{this._setTemplateFromNodes(e.addedNodes)})}render(){this.$.overlay._selector&&this.$.overlay._selector.querySelectorAll("vaadin-combo-box-item").forEach(e=>e._render())}_setTemplateFromNodes(e){this._itemTemplate=e.filter(e=>e.localName&&"template"===e.localName)[0]||this._itemTemplate}_removeNewRendererOrTemplate(e,t,i,n){e!==t?this._itemTemplate=void 0:i!==n&&(this.renderer=void 0)}_templateOrRendererChanged(e,t){if(e&&t)throw this._removeNewRendererOrTemplate(e,this._oldTemplate,t,this._oldRenderer),new Error("You should only use either a renderer or a template for combo box items");this._oldTemplate=e,this._oldRenderer=t}open(){this.disabled||this.readonly||(this.opened=!0)}close(){this.opened=!1}_openedChanged(e,t){void 0!==t&&(this.opened?(this._openedWithFocusRing=this.hasAttribute("focus-ring")||this.focusElement&&this.focusElement.hasAttribute("focus-ring"),this.hasAttribute("focused")||this.$.overlay.touchDevice||this.focus()):(this._onClosed(),this._openedWithFocusRing&&this.hasAttribute("focused")&&this.focusElement.setAttribute("focus-ring","")))}_onOverlayTouchAction(e){this._closeOnBlurIsPrevented=!0,this.inputElement.blur(),this._closeOnBlurIsPrevented=!1}_onClick(e){this._closeOnBlurIsPrevented=!0;const t=e.composedPath();-1!==t.indexOf(this._clearElement)||"clear-button"===t[0].getAttribute("part")?(this._clear(),this.focus()):-1!==t.indexOf(this.inputElement)&&(t.indexOf(this._toggleElement)>-1&&this.opened?this.close():this.open()),this._closeOnBlurIsPrevented=!1}_onKeyDown(e){this._isEventKey(e,"down")?(this._closeOnBlurIsPrevented=!0,this._onArrowDown(),this._closeOnBlurIsPrevented=!1,e.preventDefault()):this._isEventKey(e,"up")?(this._closeOnBlurIsPrevented=!0,this._onArrowUp(),this._closeOnBlurIsPrevented=!1,e.preventDefault()):this._isEventKey(e,"enter")?this._onEnter(e):this._isEventKey(e,"esc")&&this._onEscape(e)}_isEventKey(e,t){return Do(e,t)}_getItemLabel(e){return this.$.overlay.getItemLabel(e)}_getItemValue(e){let t=e&&this.itemValuePath?this.get(this.itemValuePath,e):void 0;return void 0===t&&(t=e?e.toString():""),t}_onArrowDown(){this.opened?this.$.overlay._items&&(this._focusedIndex=Math.min(this.$.overlay._items.length-1,this._focusedIndex+1),this._prefillFocusedItemLabel()):this.open()}_onArrowUp(){this.opened?(this._focusedIndex>-1?this._focusedIndex=Math.max(0,this._focusedIndex-1):this.$.overlay._items&&(this._focusedIndex=this.$.overlay._items.length-1),this._prefillFocusedItemLabel()):this.open()}_prefillFocusedItemLabel(){this._focusedIndex>-1&&(this._inputElementValue="",setTimeout(()=>{this._inputElementValue=this._getItemLabel(this.$.overlay._focusedItem),this._markAllSelectionRange()},1))}_setSelectionRange(e,t){const i=this._nativeInput||this.inputElement;if(this.hasAttribute("focused")&&i&&i.setSelectionRange)try{i.setSelectionRange(e,t)}catch(e){}}_markAllSelectionRange(){void 0!==this._inputElementValue&&this._setSelectionRange(0,this._inputElementValue.length)}_clearSelectionRange(){if(void 0!==this._inputElementValue){const e=this._inputElementValue?this._inputElementValue.length:0;this._setSelectionRange(e,e)}}_onEnter(e){this.opened&&(this.allowCustomValue||""===this._inputElementValue||this._focusedIndex>-1)&&(this.close(),e.preventDefault(),e.stopPropagation())}_onEscape(e){this.opened&&(this._stopPropagation(e),this._focusedIndex>-1?(this._focusedIndex=-1,this._revertInputValue()):this.cancel())}_toggleElementChanged(e){e&&(e.addEventListener("mousedown",e=>e.preventDefault()),e.addEventListener("click",e=>{this.$.overlay.touchDevice&&!this.hasAttribute("focused")&&document.activeElement.blur()}))}_clear(){this.selectedItem=null,this.allowCustomValue&&(this.value=""),this._detectAndDispatchChange()}cancel(){this._revertInputValueToValue(),this._lastCommittedValue=this.value,this.close()}_onOpened(){Bn(),this.$.overlay.ensureItemsRendered(),this.$.overlay._selector.toggleScrollListener(!0),this.$.overlay.updateViewportBoundaries(),this.$.overlay._selector._increasePoolIfNeeded(),setTimeout(()=>this._resizeDropdown(),1),window.requestAnimationFrame(()=>this.$.overlay.adjustScrollPosition()),this._lastCommittedValue=this.value}_onClosed(){if(this.opened&&this.close(),this.$.overlay._items&&this._focusedIndex>-1){const e=this.$.overlay._items[this._focusedIndex];this.selectedItem!==e&&(this.selectedItem=e),this._inputElementValue=this._getItemLabel(this.selectedItem)}else if(""===this._inputElementValue||void 0===this._inputElementValue)this.selectedItem=null,this.allowCustomValue&&(this.value="");else if(!this.allowCustomValue||this.filteredItems&&this.filteredItems.filter(e=>this._getItemLabel(e)===this._inputElementValue).length)this._inputElementValue=this.selectedItem?this._getItemLabel(this.selectedItem):this.value||"";else{const e=new CustomEvent("custom-value-set",{detail:this._inputElementValue,composed:!0,cancelable:!0,bubbles:!0});if(this.dispatchEvent(e),!e.defaultPrevented){const e=this._inputElementValue;this._selectItemForValue(e),this.value=e}}this._detectAndDispatchChange(),this._clearSelectionRange(),this.dataProvider||(this.filter="")}get _propertyForValue(){return"value"}_inputValueChanged(e){-1!==e.composedPath().indexOf(this.inputElement)&&(this._inputElementValue=this.inputElement[this._propertyForValue],this._filterFromInput(e))}_filterFromInput(e){this.opened||e.__fromClearButton||this.open(),this.filter===this._inputElementValue?this._filterChanged(this.filter,this.itemValuePath,this.itemLabelPath):this.filter=this._inputElementValue}_itemLabelPathChanged(e,t){"string"!=typeof e&&console.error("You should set itemLabelPath to a valid string")}_filterChanged(e,t,i){void 0!==e&&(this.items?this.filteredItems=this._filterItems(this.items,e):this._filteredItemsChanged({path:"filteredItems",value:this.filteredItems},t,i))}_loadingChanged(e){e&&(this._focusedIndex=-1)}_revertInputValue(){""!==this.filter?this._inputElementValue=this.filter:this._revertInputValueToValue(),this._clearSelectionRange()}_revertInputValueToValue(){this.allowCustomValue&&!this.selectedItem?this._inputElementValue=this.value:this._inputElementValue=this._getItemLabel(this.selectedItem)}_resizeDropdown(){this.$.overlay.$.dropdown.notifyResize()}_updateHasValue(e){e?this.setAttribute("has-value",""):this.removeAttribute("has-value")}_selectedItemChanged(e,t){if(null==e)this.filteredItems&&(this.allowCustomValue||(this.value=""),this._updateHasValue(""!==this.value),this._inputElementValue=this.value);else{const t=this._getItemValue(e);if(this.value!==t&&(this.value=t,this.value!==t))return;this._updateHasValue(!0),this._inputElementValue=this._getItemLabel(e),this.inputElement&&(this.inputElement[this._propertyForValue]=this._inputElementValue)}this.$.overlay._selectedItem=e,this.filteredItems&&this.$.overlay._items&&(this._focusedIndex=this.filteredItems.indexOf(e))}_valueChanged(e,t){if(""!==e||void 0!==t){if(this._isValidValue(e)){let t;this._getItemValue(this.selectedItem)!==e?this._selectItemForValue(e):t=this.selectedItem,!t&&this.allowCustomValue&&(this._inputElementValue=e),this._updateHasValue(""!==this.value)}else this.selectedItem=null;this._lastCommittedValue=void 0}}_detectAndDispatchChange(){this.value!==this._lastCommittedValue&&(this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this._lastCommittedValue=this.value)}_itemsChanged(e,t){this._ensureItemsOrDataProvider(()=>{this.items=t})}_itemsOrPathsChanged(e,t,i){if(void 0!==e.value&&("items"===e.path||"items.splices"===e.path)){this.filteredItems=this.items?this.items.slice(0):this.items;const e=this._indexOfValue(this.value,this.items);this._focusedIndex=e;const t=e>-1&&this.items[e];t&&(this.selectedItem=t)}}_filteredItemsChanged(e,t,i){void 0!==e.value&&("filteredItems"!==e.path&&"filteredItems.splices"!==e.path||(this._setOverlayItems(this.filteredItems),this._focusedIndex=this.opened?this.$.overlay.indexOfLabel(this.filter):this._indexOfValue(this.value,this.filteredItems),this.opened&&this._repositionOverlay()))}_filterItems(e,t){return e?e.filter(e=>(t=t?t.toString().toLowerCase():"",this._getItemLabel(e).toString().toLowerCase().indexOf(t)>-1)):e}_selectItemForValue(e){const t=this._indexOfValue(e,this.filteredItems),i=this.selectedItem;this.selectedItem=t>=0?this.filteredItems[t]:this.dataProvider&&void 0===this.selectedItem?void 0:null,null===this.selectedItem&&null===i&&this._selectedItemChanged(this.selectedItem)}_setOverlayItems(e){this.$.overlay.set("_items",e)}_repositionOverlay(){this.__repositionOverlayDebouncer=vi.debounce(this.__repositionOverlayDebouncer,wt.after(500),()=>{const e=this.$.overlay._selector;e._isClientFull()||e._resetScrollPosition(e._physicalTop),this._resizeDropdown(),this.$.overlay.updateViewportBoundaries(),this.$.overlay.ensureItemsRendered(),e.notifyResize(),Bn()})}_indexOfValue(e,t){if(t&&this._isValidValue(e))for(let i=0;i<t.length;i++)if(this._getItemValue(t[i])===e)return i;return-1}_isValidValue(e){return null!=e}_overlaySelectedItemChanged(e){e.stopPropagation(),e.detail.item instanceof Hs||(this.opened?(this._focusedIndex=this.filteredItems.indexOf(e.detail.item),this.close()):this.selectedItem!==e.detail.item&&(this.selectedItem=e.detail.item,this._detectAndDispatchChange()))}validate(){return!(this.invalid=!this.checkValidity())}checkValidity(){if(this.inputElement.validate)return this.inputElement.validate()}get _instanceProps(){return{item:!0,index:!0,selected:!0,focused:!0}}_ensureTemplatized(){if(!this._TemplateClass){const e=this._itemTemplate||this._getRootTemplate();e&&(this._TemplateClass=vs(e,this,{instanceProps:this._instanceProps,forwardHostProp:function(e,t){const i=this.$.overlay._selector.querySelectorAll("vaadin-combo-box-item");Array.prototype.forEach.call(i,i=>{i._itemTemplateInstance&&(i._itemTemplateInstance.set(e,t),i._itemTemplateInstance.notifyPath(e,t,!0))})}}))}}_getRootTemplate(){return Array.prototype.filter.call(this.children,e=>"TEMPLATE"===e.tagName)[0]}_preventInputBlur(){this._toggleElement&&this._toggleElement.addEventListener("click",this._preventDefault),this._clearElement&&this._clearElement.addEventListener("click",this._preventDefault)}_restoreInputBlur(){this._toggleElement&&this._toggleElement.removeEventListener("click",this._preventDefault),this._clearElement&&this._clearElement.removeEventListener("click",this._preventDefault)}_preventDefault(e){e.preventDefault()}_stopPropagation(e){e.stopPropagation()}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
var Ho=new Set;const $o={properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[],this._boundNotifyResize=this.notifyResize.bind(this),this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){this._parentResizable?this._parentResizable.stopResizeNotificationsFor(this):(Ho.delete(this),window.removeEventListener("resize",this._boundNotifyResize)),this._parentResizable=null},notifyResize:function(){this.isAttached&&(this._interestedResizables.forEach((function(e){this.resizerShouldNotify(e)&&this._notifyDescendant(e)}),this),this._fireResize())},assignParentResizable:function(e){this._parentResizable&&this._parentResizable.stopResizeNotificationsFor(this),this._parentResizable=e,e&&-1===e._interestedResizables.indexOf(this)&&(e._interestedResizables.push(this),e._subscribeIronResize(this))},stopResizeNotificationsFor:function(e){var t=this._interestedResizables.indexOf(e);t>-1&&(this._interestedResizables.splice(t,1),this._unsubscribeIronResize(e))},_subscribeIronResize:function(e){e.addEventListener("iron-resize",this._boundOnDescendantIronResize)},_unsubscribeIronResize:function(e){e.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},resizerShouldNotify:function(e){return!0},_onDescendantIronResize:function(e){this._notifyingDescendant?e.stopPropagation():L||this._fireResize()},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function(e){var t=Gn(e).rootTarget;t!==this&&(t.assignParentResizable(this),this._notifyDescendant(t),e.stopPropagation())},_parentResizableChanged:function(e){e&&window.removeEventListener("resize",this._boundNotifyResize)},_notifyDescendant:function(e){this.isAttached&&(this._notifyingDescendant=!0,e.notifyResize(),this._notifyingDescendant=!1)},_requestResizeNotifications:function(){if(this.isAttached)if("loading"===document.readyState){var e=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",(function t(){document.removeEventListener("readystatechange",t),e()}))}else this._findParent(),this._parentResizable?this._parentResizable._interestedResizables.forEach((function(e){e!==this&&e._findParent()}),this):(Ho.forEach((function(e){e!==this&&e._findParent()}),this),window.addEventListener("resize",this._boundNotifyResize),this.notifyResize())},_findParent:function(){this.assignParentResizable(null),this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0}),this._parentResizable?Ho.delete(this):Ho.add(this)}},jo={properties:{scrollTarget:{type:HTMLElement,value:function(){return this._defaultScrollTarget}}},observers:["_scrollTargetChanged(scrollTarget, isAttached)"],_shouldHaveListener:!0,_scrollTargetChanged:function(e,t){if(this._oldScrollTarget&&(this._toggleScrollListener(!1,this._oldScrollTarget),this._oldScrollTarget=null),t)if("document"===e)this.scrollTarget=this._doc;else if("string"==typeof e){var i=this.domHost;this.scrollTarget=i&&i.$?i.$[e]:Gn(this.ownerDocument).querySelector("#"+e)}else this._isValidScrollTarget()&&(this._oldScrollTarget=e,this._toggleScrollListener(this._shouldHaveListener,e))},_scrollHandler:function(){},get _defaultScrollTarget(){return this._doc},get _doc(){return this.ownerDocument.documentElement},get _scrollTop(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageYOffset:this.scrollTarget.scrollTop:0},get _scrollLeft(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageXOffset:this.scrollTarget.scrollLeft:0},set _scrollTop(e){this.scrollTarget===this._doc?window.scrollTo(window.pageXOffset,e):this._isValidScrollTarget()&&(this.scrollTarget.scrollTop=e)},set _scrollLeft(e){this.scrollTarget===this._doc?window.scrollTo(e,window.pageYOffset):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=e)},scroll:function(e,t){var i;"object"==typeof e?(i=e.left,t=e.top):i=e,i=i||0,t=t||0,this.scrollTarget===this._doc?window.scrollTo(i,t):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=i,this.scrollTarget.scrollTop=t)},get _scrollTargetWidth(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerWidth:this.scrollTarget.offsetWidth:0},get _scrollTargetHeight(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerHeight:this.scrollTarget.offsetHeight:0},_isValidScrollTarget:function(){return this.scrollTarget instanceof HTMLElement},_toggleScrollListener:function(e,t){var i=t===this._doc?window:t;e?this._boundScrollHandler||(this._boundScrollHandler=this._scrollHandler.bind(this),i.addEventListener("scroll",this._boundScrollHandler)):this._boundScrollHandler&&(i.removeEventListener("scroll",this._boundScrollHandler),this._boundScrollHandler=null)},toggleScrollListener:function(e){this._shouldHaveListener=e,this._toggleScrollListener(e,this.scrollTarget)}};
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
var qo=navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/),Yo=qo&&qo[1]>=8;ns({_template:Is`
    <style>
      :host {
        display: block;
      }

      @media only screen and (-webkit-max-device-pixel-ratio: 1) {
        :host {
          will-change: transform;
        }
      }

      #items {
        @apply --iron-list-items-container;
        position: relative;
      }

      :host(:not([grid])) #items > ::slotted(*) {
        width: 100%;
      }

      #items > ::slotted(*) {
        box-sizing: border-box;
        margin: 0;
        position: absolute;
        top: 0;
        will-change: transform;
      }
    </style>

    <array-selector id="selector" items="{{items}}" selected="{{selectedItems}}" selected-item="{{selectedItem}}"></array-selector>

    <div id="items">
      <slot></slot>
    </div>
`,is:"iron-list",properties:{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},selectedAs:{type:String,value:"selected"},grid:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_gridChanged"},selectionEnabled:{type:Boolean,value:!1},selectedItem:{type:Object,notify:!0},selectedItems:{type:Object,notify:!0},multiSelection:{type:Boolean,value:!1},scrollOffset:{type:Number,value:0}},observers:["_itemsChanged(items.*)","_selectionEnabledChanged(selectionEnabled)","_multiSelectionChanged(multiSelection)","_setOverflow(scrollTarget, scrollOffset)"],behaviors:[ws,$o,jo,Ls],_ratio:.5,_scrollerPaddingTop:0,_scrollPosition:0,_physicalSize:0,_physicalAverage:0,_physicalAverageCount:0,_physicalTop:0,_virtualCount:0,_estScrollHeight:0,_scrollHeight:0,_viewportHeight:0,_viewportWidth:0,_physicalItems:null,_physicalSizes:null,_firstVisibleIndexVal:null,_lastVisibleIndexVal:null,_maxPages:2,_focusedItem:null,_focusedVirtualIndex:-1,_focusedPhysicalIndex:-1,_offscreenFocusedItem:null,_focusBackfillItem:null,_itemsPerRow:1,_itemWidth:0,_rowHeight:0,_templateCost:0,_parentModel:!0,get _physicalBottom(){return this._physicalTop+this._physicalSize},get _scrollBottom(){return this._scrollPosition+this._viewportHeight},get _virtualEnd(){return this._virtualStart+this._physicalCount-1},get _hiddenContentSize(){return(this.grid?this._physicalRows*this._rowHeight:this._physicalSize)-this._viewportHeight},get _itemsParent(){return Gn(Gn(this._userTemplate).parentNode)},get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset},get _maxVirtualStart(){var e=this._convertIndexToCompleteRow(this._virtualCount);return Math.max(0,e-this._physicalCount)},set _virtualStart(e){e=this._clamp(e,0,this._maxVirtualStart),this.grid&&(e-=e%this._itemsPerRow),this._virtualStartVal=e},get _virtualStart(){return this._virtualStartVal||0},set _physicalStart(e){(e%=this._physicalCount)<0&&(e=this._physicalCount+e),this.grid&&(e-=e%this._itemsPerRow),this._physicalStartVal=e},get _physicalStart(){return this._physicalStartVal||0},get _physicalEnd(){return(this._physicalStart+this._physicalCount-1)%this._physicalCount},set _physicalCount(e){this._physicalCountVal=e},get _physicalCount(){return this._physicalCountVal||0},get _optPhysicalSize(){return 0===this._viewportHeight?1/0:this._viewportHeight*this._maxPages},get _isVisible(){return Boolean(this.offsetWidth||this.offsetHeight)},get firstVisibleIndex(){var e=this._firstVisibleIndexVal;if(null==e){var t=this._physicalTop+this._scrollOffset;e=this._iterateItems((function(e,i){return(t+=this._getPhysicalSizeIncrement(e))>this._scrollPosition?this.grid?i-i%this._itemsPerRow:i:this.grid&&this._virtualCount-1===i?i-i%this._itemsPerRow:void 0}))||0,this._firstVisibleIndexVal=e}return e},get lastVisibleIndex(){var e=this._lastVisibleIndexVal;if(null==e){if(this.grid)e=Math.min(this._virtualCount,this.firstVisibleIndex+this._estRowsInView*this._itemsPerRow-1);else{var t=this._physicalTop+this._scrollOffset;this._iterateItems((function(i,n){t<this._scrollBottom&&(e=n),t+=this._getPhysicalSizeIncrement(i)}))}this._lastVisibleIndexVal=e}return e},get _defaultScrollTarget(){return this},get _virtualRowCount(){return Math.ceil(this._virtualCount/this._itemsPerRow)},get _estRowsInView(){return Math.ceil(this._viewportHeight/this._rowHeight)},get _physicalRows(){return Math.ceil(this._physicalCount/this._itemsPerRow)},get _scrollOffset(){return this._scrollerPaddingTop+this.scrollOffset},ready:function(){this.addEventListener("focus",this._didFocus.bind(this),!0)},attached:function(){this._debounce("_render",this._render,xt),this.listen(this,"iron-resize","_resizeHandler"),this.listen(this,"keydown","_keydownHandler")},detached:function(){this.unlisten(this,"iron-resize","_resizeHandler"),this.unlisten(this,"keydown","_keydownHandler")},_setOverflow:function(e){this.style.webkitOverflowScrolling=e===this?"touch":"",this.style.overflowY=e===this?"auto":"",this._lastVisibleIndexVal=null,this._firstVisibleIndexVal=null,this._debounce("_render",this._render,xt)},updateViewportBoundaries:function(){var e=window.getComputedStyle(this);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(e["padding-top"],10),this._isRTL=Boolean("rtl"===e.direction),this._viewportWidth=this.$.items.offsetWidth,this._viewportHeight=this._scrollTargetHeight,this.grid&&this._updateGridMetrics()},_scrollHandler:function(){var e=Math.max(0,Math.min(this._maxScrollTop,this._scrollTop)),t=e-this._scrollPosition,i=t>=0;if(this._scrollPosition=e,this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,Math.abs(t)>this._physicalSize&&this._physicalSize>0){t-=this._scrollOffset;var n=Math.round(t/this._physicalAverage)*this._itemsPerRow;this._virtualStart=this._virtualStart+n,this._physicalStart=this._physicalStart+n,this._physicalTop=Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage,this._update()}else if(this._physicalCount>0){var s=this._getReusables(i);i?(this._physicalTop=s.physicalTop,this._virtualStart=this._virtualStart+s.indexes.length,this._physicalStart=this._physicalStart+s.indexes.length):(this._virtualStart=this._virtualStart-s.indexes.length,this._physicalStart=this._physicalStart-s.indexes.length),this._update(s.indexes,i?null:s.indexes),this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,0),St)}},_getReusables:function(e){var t,i,n,s=[],o=this._hiddenContentSize*this._ratio,r=this._virtualStart,a=this._virtualEnd,l=this._physicalCount,d=this._physicalTop+this._scrollOffset,c=this._physicalBottom+this._scrollOffset,h=this._scrollTop,u=this._scrollBottom;for(e?(t=this._physicalStart,this._physicalEnd,i=h-d):(t=this._physicalEnd,this._physicalStart,i=c-u);i-=n=this._getPhysicalSizeIncrement(t),!(s.length>=l||i<=o);)if(e){if(a+s.length+1>=this._virtualCount)break;if(d+n>=h-this._scrollOffset)break;s.push(t),d+=n,t=(t+1)%l}else{if(r-s.length<=0)break;if(d+this._physicalSize-n<=u)break;s.push(t),d-=n,t=0===t?l-1:t-1}return{indexes:s,physicalTop:d-this._scrollOffset}},_update:function(e,t){if(!(e&&0===e.length||0===this._physicalCount)){if(this._manageFocus(),this._assignModels(e),this._updateMetrics(e),t)for(;t.length;){var i=t.pop();this._physicalTop-=this._getPhysicalSizeIncrement(i)}this._positionItems(),this._updateScrollerSize()}},_createPool:function(e){var t,i;this._ensureTemplatized();var n=new Array(e);for(t=0;t<e;t++)i=this.stamp(null),n[t]=i.root.querySelector("*"),this._itemsParent.appendChild(i.root);return n},_isClientFull:function(){return 0!=this._scrollBottom&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition},_increasePoolIfNeeded:function(e){var t=this._clamp(this._physicalCount+e,3,this._virtualCount-this._virtualStart);if(t=this._convertIndexToCompleteRow(t),this.grid){var i=t%this._itemsPerRow;i&&t-i<=this._physicalCount&&(t+=this._itemsPerRow),t-=i}var n=t-this._physicalCount,s=Math.round(.5*this._physicalCount);if(!(n<0)){if(n>0){var o=window.performance.now();[].push.apply(this._physicalItems,this._createPool(n));for(var r=0;r<n;r++)this._physicalSizes.push(0);this._physicalCount=this._physicalCount+n,this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd&&(this._physicalStart=this._physicalStart+n),this._update(),this._templateCost=(window.performance.now()-o)/n,s=Math.round(.5*this._physicalCount)}this._virtualEnd>=this._virtualCount-1||0===s||(this._isClientFull()?this._physicalSize<this._optPhysicalSize&&this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,this._clamp(Math.round(50/this._templateCost),1,s)),Ct):this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,s),St))}},_render:function(){if(this.isAttached&&this._isVisible)if(0!==this._physicalCount){var e=this._getReusables(!0);this._physicalTop=e.physicalTop,this._virtualStart=this._virtualStart+e.indexes.length,this._physicalStart=this._physicalStart+e.indexes.length,this._update(e.indexes),this._update(),this._increasePoolIfNeeded(0)}else this._virtualCount>0&&(this.updateViewportBoundaries(),this._increasePoolIfNeeded(3))},_ensureTemplatized:function(){if(!this.ctor){this._userTemplate=this.queryEffectiveChildren("template"),this._userTemplate||console.warn("iron-list requires a template to be provided in light-dom");var e={__key__:!0};e[this.as]=!0,e[this.indexAs]=!0,e[this.selectedAs]=!0,e.tabIndex=!0,this._instanceProps=e,this.templatize(this._userTemplate,this.mutableData)}},_gridChanged:function(e,t){void 0!==t&&(this.notifyResize(),Bn(),e&&this._updateGridMetrics())},_itemsChanged:function(e){if("items"===e.path)this._virtualStart=0,this._physicalTop=0,this._virtualCount=this.items?this.items.length:0,this._physicalIndexForKey={},this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._physicalCount=this._physicalCount||0,this._physicalItems=this._physicalItems||[],this._physicalSizes=this._physicalSizes||[],this._physicalStart=0,this._scrollTop>this._scrollOffset&&this._resetScrollPosition(0),this._removeFocusedItem(),this._debounce("_render",this._render,xt);else if("items.splices"===e.path){if(this._adjustVirtualIndex(e.value.indexSplices),this._virtualCount=this.items?this.items.length:0,e.value.indexSplices.some((function(e){return e.addedCount>0||e.removed.length>0}))){var t=this._getActiveElement();this.contains(t)&&t.blur()}var i=e.value.indexSplices.some((function(e){return e.index+e.addedCount>=this._virtualStart&&e.index<=this._virtualEnd}),this);this._isClientFull()&&!i||this._debounce("_render",this._render,xt)}else"items.length"!==e.path&&this._forwardItemPath(e.path,e.value)},_forwardItemPath:function(e,t){var i,n,s,o=(e=e.slice(6)).indexOf(".");-1===o&&(o=e.length);var r=this.modelForElement(this._offscreenFocusedItem),a=parseInt(e.substring(0,o),10);(i=this._isIndexRendered(a))?(n=this._getPhysicalIndex(a),s=this.modelForElement(this._physicalItems[n])):r&&(s=r),s&&s[this.indexAs]===a&&(e=e.substring(o+1),e=this.as+(e?"."+e:""),s._setPendingPropertyOrPath(e,t,!1,!0),s._flushProperties&&s._flushProperties(!0),i&&(this._updateMetrics([n]),this._positionItems(),this._updateScrollerSize()))},_adjustVirtualIndex:function(e){e.forEach((function(e){if(e.removed.forEach(this._removeItem,this),e.index<this._virtualStart){var t=Math.max(e.addedCount-e.removed.length,e.index-this._virtualStart);this._virtualStart=this._virtualStart+t,this._focusedVirtualIndex>=0&&(this._focusedVirtualIndex=this._focusedVirtualIndex+t)}}),this)},_removeItem:function(e){this.$.selector.deselect(e),this._focusedItem&&this.modelForElement(this._focusedItem)[this.as]===e&&this._removeFocusedItem()},_iterateItems:function(e,t){var i,n,s,o;if(2===arguments.length&&t){for(o=0;o<t.length;o++)if(i=t[o],n=this._computeVidx(i),null!=(s=e.call(this,i,n)))return s}else{for(i=this._physicalStart,n=this._virtualStart;i<this._physicalCount;i++,n++)if(null!=(s=e.call(this,i,n)))return s;for(i=0;i<this._physicalStart;i++,n++)if(null!=(s=e.call(this,i,n)))return s}},_computeVidx:function(e){return e>=this._physicalStart?this._virtualStart+(e-this._physicalStart):this._virtualStart+(this._physicalCount-this._physicalStart)+e},_assignModels:function(e){this._iterateItems((function(e,t){var i=this._physicalItems[e],n=this.items&&this.items[t];if(null!=n){var s=this.modelForElement(i);s.__key__=null,this._forwardProperty(s,this.as,n),this._forwardProperty(s,this.selectedAs,this.$.selector.isSelected(n)),this._forwardProperty(s,this.indexAs,t),this._forwardProperty(s,"tabIndex",this._focusedVirtualIndex===t?0:-1),this._physicalIndexForKey[s.__key__]=e,s._flushProperties&&s._flushProperties(!0),i.removeAttribute("hidden")}else i.setAttribute("hidden","")}),e)},_updateMetrics:function(e){Bn();var t=0,i=0,n=this._physicalAverageCount,s=this._physicalAverage;this._iterateItems((function(e,n){i+=this._physicalSizes[e],this._physicalSizes[e]=this._physicalItems[e].offsetHeight,t+=this._physicalSizes[e],this._physicalAverageCount+=this._physicalSizes[e]?1:0}),e),this.grid?(this._updateGridMetrics(),this._physicalSize=Math.ceil(this._physicalCount/this._itemsPerRow)*this._rowHeight):(i=1===this._itemsPerRow?i:Math.ceil(this._physicalCount/this._itemsPerRow)*this._rowHeight,this._physicalSize=this._physicalSize+t-i,this._itemsPerRow=1),this._physicalAverageCount!==n&&(this._physicalAverage=Math.round((s*n+t)/this._physicalAverageCount))},_updateGridMetrics:function(){this._itemWidth=this._physicalCount>0?this._physicalItems[0].getBoundingClientRect().width:200,this._rowHeight=this._physicalCount>0?this._physicalItems[0].offsetHeight:200,this._itemsPerRow=this._itemWidth?Math.floor(this._viewportWidth/this._itemWidth):this._itemsPerRow},_positionItems:function(){this._adjustScrollPosition();var e=this._physicalTop;if(this.grid){var t=this._itemsPerRow*this._itemWidth,i=(this._viewportWidth-t)/2;this._iterateItems((function(t,n){var s=n%this._itemsPerRow,o=Math.floor(s*this._itemWidth+i);this._isRTL&&(o*=-1),this.translate3d(o+"px",e+"px",0,this._physicalItems[t]),this._shouldRenderNextRow(n)&&(e+=this._rowHeight)}))}else this._iterateItems((function(t,i){this.translate3d(0,e+"px",0,this._physicalItems[t]),e+=this._physicalSizes[t]}))},_getPhysicalSizeIncrement:function(e){return this.grid?this._computeVidx(e)%this._itemsPerRow!=this._itemsPerRow-1?0:this._rowHeight:this._physicalSizes[e]},_shouldRenderNextRow:function(e){return e%this._itemsPerRow==this._itemsPerRow-1},_adjustScrollPosition:function(){var e=0===this._virtualStart?this._physicalTop:Math.min(this._scrollPosition+this._physicalTop,0);if(0!==e){this._physicalTop=this._physicalTop-e;var t=this._scrollTop;!Yo&&t>0&&this._resetScrollPosition(t-e)}},_resetScrollPosition:function(e){this.scrollTarget&&e>=0&&(this._scrollTop=e,this._scrollPosition=this._scrollTop)},_updateScrollerSize:function(e){this.grid?this._estScrollHeight=this._virtualRowCount*this._rowHeight:this._estScrollHeight=this._physicalBottom+Math.max(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage,((e=(e=(e=e||0===this._scrollHeight)||this._scrollPosition>=this._estScrollHeight-this._physicalSize)||this.grid&&this.$.items.style.height<this._estScrollHeight)||Math.abs(this._estScrollHeight-this._scrollHeight)>=this._viewportHeight)&&(this.$.items.style.height=this._estScrollHeight+"px",this._scrollHeight=this._estScrollHeight)},scrollToItem:function(e){return this.scrollToIndex(this.items.indexOf(e))},scrollToIndex:function(e){if(!("number"!=typeof e||e<0||e>this.items.length-1)&&(Bn(),0!==this._physicalCount)){e=this._clamp(e,0,this._virtualCount-1),(!this._isIndexRendered(e)||e>=this._maxVirtualStart)&&(this._virtualStart=this.grid?e-2*this._itemsPerRow:e-1),this._manageFocus(),this._assignModels(),this._updateMetrics(),this._physicalTop=Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage;for(var t=this._physicalStart,i=this._virtualStart,n=0,s=this._hiddenContentSize;i<e&&n<=s;)n+=this._getPhysicalSizeIncrement(t),t=(t+1)%this._physicalCount,i++;this._updateScrollerSize(!0),this._positionItems(),this._resetScrollPosition(this._physicalTop+this._scrollOffset+n),this._increasePoolIfNeeded(0),this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null}},_resetAverage:function(){this._physicalAverage=0,this._physicalAverageCount=0},_resizeHandler:function(){this._debounce("_render",(function(){this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._isVisible?(this.updateViewportBoundaries(),this.toggleScrollListener(!0),this._resetAverage(),this._render()):this.toggleScrollListener(!1)}),xt)},selectItem:function(e){return this.selectIndex(this.items.indexOf(e))},selectIndex:function(e){if(!(e<0||e>=this._virtualCount)){if(!this.multiSelection&&this.selectedItem&&this.clearSelection(),this._isIndexRendered(e)){var t=this.modelForElement(this._physicalItems[this._getPhysicalIndex(e)]);t&&(t[this.selectedAs]=!0),this.updateSizeForIndex(e)}this.$.selector.selectIndex(e)}},deselectItem:function(e){return this.deselectIndex(this.items.indexOf(e))},deselectIndex:function(e){if(!(e<0||e>=this._virtualCount)){if(this._isIndexRendered(e))this.modelForElement(this._physicalItems[this._getPhysicalIndex(e)])[this.selectedAs]=!1,this.updateSizeForIndex(e);this.$.selector.deselectIndex(e)}},toggleSelectionForItem:function(e){return this.toggleSelectionForIndex(this.items.indexOf(e))},toggleSelectionForIndex:function(e){(this.$.selector.isIndexSelected?this.$.selector.isIndexSelected(e):this.$.selector.isSelected(this.items[e]))?this.deselectIndex(e):this.selectIndex(e)},clearSelection:function(){this._iterateItems((function(e,t){this.modelForElement(this._physicalItems[e])[this.selectedAs]=!1})),this.$.selector.clearSelection()},_selectionEnabledChanged:function(e){(e?this.listen:this.unlisten).call(this,this,"tap","_selectionHandler")},_selectionHandler:function(e){var t=this.modelForElement(e.target);if(t){var i,n,s=Gn(e).path[0],o=this._getActiveElement(),r=this._physicalItems[this._getPhysicalIndex(t[this.indexAs])];"input"!==s.localName&&"button"!==s.localName&&"select"!==s.localName&&(i=t.tabIndex,t.tabIndex=-100,n=o?o.tabIndex:-1,t.tabIndex=i,o&&r!==o&&r.contains(o)&&-100!==n||this.toggleSelectionForItem(t[this.as]))}},_multiSelectionChanged:function(e){this.clearSelection(),this.$.selector.multi=e},updateSizeForItem:function(e){return this.updateSizeForIndex(this.items.indexOf(e))},updateSizeForIndex:function(e){return this._isIndexRendered(e)?(this._updateMetrics([this._getPhysicalIndex(e)]),this._positionItems(),null):null},_manageFocus:function(){var e=this._focusedVirtualIndex;e>=0&&e<this._virtualCount?this._isIndexRendered(e)?this._restoreFocusedItem():this._createFocusBackfillItem():this._virtualCount>0&&this._physicalCount>0&&(this._focusedPhysicalIndex=this._physicalStart,this._focusedVirtualIndex=this._virtualStart,this._focusedItem=this._physicalItems[this._physicalStart])},_convertIndexToCompleteRow:function(e){return this._itemsPerRow=this._itemsPerRow||1,this.grid?Math.ceil(e/this._itemsPerRow)*this._itemsPerRow:e},_isIndexRendered:function(e){return e>=this._virtualStart&&e<=this._virtualEnd},_isIndexVisible:function(e){return e>=this.firstVisibleIndex&&e<=this.lastVisibleIndex},_getPhysicalIndex:function(e){return(this._physicalStart+(e-this._virtualStart))%this._physicalCount},focusItem:function(e){this._focusPhysicalItem(e)},_focusPhysicalItem:function(e){if(!(e<0||e>=this._virtualCount)){this._restoreFocusedItem(),this._isIndexRendered(e)||this.scrollToIndex(e);var t,i=this._physicalItems[this._getPhysicalIndex(e)],n=this.modelForElement(i);n.tabIndex=-100,-100===i.tabIndex&&(t=i),t||(t=Gn(i).querySelector('[tabindex="-100"]')),n.tabIndex=0,this._focusedVirtualIndex=e,t&&t.focus()}},_removeFocusedItem:function(){this._offscreenFocusedItem&&this._itemsParent.removeChild(this._offscreenFocusedItem),this._offscreenFocusedItem=null,this._focusBackfillItem=null,this._focusedItem=null,this._focusedVirtualIndex=-1,this._focusedPhysicalIndex=-1},_createFocusBackfillItem:function(){var e=this._focusedPhysicalIndex;if(!(this._offscreenFocusedItem||this._focusedVirtualIndex<0)){if(!this._focusBackfillItem){var t=this.stamp(null);this._focusBackfillItem=t.root.querySelector("*"),this._itemsParent.appendChild(t.root)}this._offscreenFocusedItem=this._physicalItems[e],this.modelForElement(this._offscreenFocusedItem).tabIndex=0,this._physicalItems[e]=this._focusBackfillItem,this._focusedPhysicalIndex=e,this.translate3d(0,"-10000px",0,this._offscreenFocusedItem)}},_restoreFocusedItem:function(){if(this._offscreenFocusedItem&&!(this._focusedVirtualIndex<0)){this._assignModels();var e=this._focusedPhysicalIndex=this._getPhysicalIndex(this._focusedVirtualIndex),t=this._physicalItems[e];if(t){var i=this.modelForElement(t),n=this.modelForElement(this._offscreenFocusedItem);i[this.as]===n[this.as]?(this._focusBackfillItem=t,i.tabIndex=-1,this._physicalItems[e]=this._offscreenFocusedItem,this.translate3d(0,"-10000px",0,this._focusBackfillItem)):(this._removeFocusedItem(),this._focusBackfillItem=null),this._offscreenFocusedItem=null}}},_didFocus:function(e){var t=this.modelForElement(e.target),i=this.modelForElement(this._focusedItem),n=null!==this._offscreenFocusedItem,s=this._focusedVirtualIndex;t&&(i===t?this._isIndexVisible(s)||this.scrollToIndex(s):(this._restoreFocusedItem(),i&&(i.tabIndex=-1),t.tabIndex=0,s=t[this.indexAs],this._focusedVirtualIndex=s,this._focusedPhysicalIndex=this._getPhysicalIndex(s),this._focusedItem=this._physicalItems[this._focusedPhysicalIndex],n&&!this._offscreenFocusedItem&&this._update()))},_keydownHandler:function(e){switch(e.keyCode){case 40:this._focusedVirtualIndex<this._virtualCount-1&&e.preventDefault(),this._focusPhysicalItem(this._focusedVirtualIndex+(this.grid?this._itemsPerRow:1));break;case 39:this.grid&&this._focusPhysicalItem(this._focusedVirtualIndex+(this._isRTL?-1:1));break;case 38:this._focusedVirtualIndex>0&&e.preventDefault(),this._focusPhysicalItem(this._focusedVirtualIndex-(this.grid?this._itemsPerRow:1));break;case 37:this.grid&&this._focusPhysicalItem(this._focusedVirtualIndex+(this._isRTL?1:-1));break;case 13:this._focusPhysicalItem(this._focusedVirtualIndex),this.selectionEnabled&&this._selectionHandler(e)}},_clamp:function(e,t,i){return Math.min(i,Math.max(t,e))},_debounce:function(e,t,i){this._debouncers=this._debouncers||{},this._debouncers[e]=vi.debounce(this._debouncers[e],i,t.bind(this)),wi(this._debouncers[e])},_forwardProperty:function(e,t,i){e._setPendingProperty(t,i)},_forwardHostPropV2:function(e,t){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach((function(i){i&&this.modelForElement(i).forwardHostProp(e,t)}),this)},_notifyInstancePropV2:function(e,t,i){if(rt(this.as,t)){var n=e[this.indexAs];t==this.as&&(this.items[n]=i),this.notifyPath(ot(this.as,"items."+n,t),i)}},_getStampedChildren:function(){return this._physicalItems},_forwardInstancePath:function(e,t,i){0===t.indexOf(this.as+".")&&this.notifyPath("items."+e.__key__+"."+t.slice(this.as.length+1),i)},_forwardParentPath:function(e,t){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach((function(i){i&&this.modelForElement(i).notifyPath(e,t,!0)}),this)},_forwardParentProp:function(e,t){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach((function(i){i&&(this.modelForElement(i)[e]=t)}),this)},_getActiveElement:function(){var e=this._itemsParent.node.domHost;return Gn(e?e.root:document).activeElement}});
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class Uo extends(Ys(Ps)){static get template(){return Is`
    <style>
      :host {
        display: block;
      }

      :host([hidden]) {
         display: none;
      }
    </style>
    <div part="content" id="content"></div>
`}static get is(){return"vaadin-combo-box-item"}static get properties(){return{index:Number,item:Object,label:String,selected:{type:Boolean,value:!1,reflectToAttribute:!0},focused:{type:Boolean,value:!1,reflectToAttribute:!0},_itemTemplateInstance:Object,renderer:Function,_oldRenderer:Function}}static get observers(){return["_rendererOrItemChanged(renderer, index, item.*)","_updateLabel(label, _itemTemplateInstance)",'_updateTemplateInstanceVariable("index", index, _itemTemplateInstance)','_updateTemplateInstanceVariable("item", item, _itemTemplateInstance)','_updateTemplateInstanceVariable("selected", selected, _itemTemplateInstance)','_updateTemplateInstanceVariable("focused", focused, _itemTemplateInstance)']}connectedCallback(){if(super.connectedCallback(),!this._itemTemplateInstance){const e=this.getRootNode().host.getRootNode().host.__dataHost.getRootNode().host;this._comboBox=e.getRootNode().host,this._comboBox._ensureTemplatized(),this._comboBox._TemplateClass&&(this._itemTemplateInstance=new this._comboBox._TemplateClass({}),this.$.content.textContent="",this.$.content.appendChild(this._itemTemplateInstance.root))}}_render(){if(!this.renderer)return;const e={index:this.index,item:this.item};this.renderer(this.$.content,this._comboBox,e)}_rendererOrItemChanged(e,t,i){void 0!==i&&void 0!==t&&(this._oldRenderer!==e&&(this.$.content.innerHTML=""),e&&(this._oldRenderer=e,this._render()))}_updateLabel(e,t){void 0===t&&this.$.content&&!this.renderer&&(this.$.content.textContent=e)}_updateTemplateInstanceVariable(e,t,i){void 0!==e&&void 0!==t&&void 0!==i&&(i[e]=t)}}customElements.define(Uo.is,Uo);
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */
const Wo="disable-upgrade",Go=Qe(e=>{const t=gi(e);return class extends t{static get observedAttributes(){return super.observedAttributes.concat(Wo)}attributeChangedCallback(e,t,i,n){e==Wo?!this.__dataEnabled&&null==i&&this.isConnected&&super.connectedCallback():super.attributeChangedCallback(e,t,i,n)}_initializeProperties(){}connectedCallback(){!this.__dataEnabled&&this.hasAttribute(Wo)||super.connectedCallback()}_enableProperties(){this.hasAttribute(Wo)||(this.__dataEnabled||super._initializeProperties(),super._enableProperties())}disconnectedCallback(){this.__dataEnabled&&super.disconnectedCallback()}}});
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class Ko extends Qs{static get is(){return"vaadin-combo-box-overlay"}ready(){super.ready();const e=document.createElement("div");e.setAttribute("part","loader");const t=this.shadowRoot.querySelector(['[part~="content"]']);t.parentNode.insertBefore(e,t)}}customElements.define(Ko.is,Ko);class Jo extends(Go(function(e,t){return is({},Jn(t),e)}($o,Ps))){static get template(){return Is`
    <style>
      :host {
        display: block;
      }

      :host > #overlay {
        display: none;
      }
    </style>
    <vaadin-combo-box-overlay id="overlay" hidden\$="[[hidden]]" opened="[[opened]]" template="{{template}}" style="align-items: stretch; margin: 0;" theme\$="[[theme]]">
      <slot></slot>
    </vaadin-combo-box-overlay>
`}static get is(){return"vaadin-combo-box-dropdown"}static get properties(){return{opened:{type:Boolean,observer:"_openedChanged"},template:{type:Object,notify:!0},positionTarget:{type:Object},alignedAbove:{type:Boolean,value:!1},theme:String}}constructor(){super(),this._boundSetPosition=this._setPosition.bind(this),this._boundOutsideClickListener=this._outsideClickListener.bind(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("iron-resize",this._boundSetPosition)}ready(){super.ready(),this.$.overlay.addEventListener("vaadin-overlay-outside-click",e=>{e.preventDefault()})}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("iron-resize",this._boundSetPosition),this.opened=!1}notifyResize(){super.notifyResize(),this.positionTarget&&this.opened&&(this._setPosition(),requestAnimationFrame(this._setPosition.bind(this)))}_openedChanged(e,t){!!e!=!!t&&(e?(this.$.overlay.style.position=this._isPositionFixed(this.positionTarget)?"fixed":"absolute",this._setPosition(),window.addEventListener("scroll",this._boundSetPosition,!0),document.addEventListener("click",this._boundOutsideClickListener,!0),this.dispatchEvent(new CustomEvent("vaadin-combo-box-dropdown-opened",{bubbles:!0,composed:!0}))):(window.removeEventListener("scroll",this._boundSetPosition,!0),document.removeEventListener("click",this._boundOutsideClickListener,!0),this.dispatchEvent(new CustomEvent("vaadin-combo-box-dropdown-closed",{bubbles:!0,composed:!0}))))}_outsideClickListener(e){const t=e.composedPath();t.indexOf(this.positionTarget)<0&&t.indexOf(this.$.overlay)<0&&(this.opened=!1)}_isPositionFixed(e){const t=this._getOffsetParent(e);return"fixed"===window.getComputedStyle(e).position||t&&this._isPositionFixed(t)}_getOffsetParent(e){if(e.assignedSlot)return e.assignedSlot.parentElement;if(e.parentElement)return e.offsetParent;const t=e.parentNode;return t&&11===t.nodeType&&t.host?t.host:void 0}_verticalOffset(e,t){return this.alignedAbove?-e.height:t.height}_shouldAlignAbove(e){return(window.innerHeight-e.bottom-Math.min(document.body.scrollTop,0))/window.innerHeight<.3}_setPosition(e){if(this.hidden)return;if(e&&e.target){const t=e.target===document?document.body:e.target,i=this.$.overlay.parentElement;if(!t.contains(this.$.overlay)&&!t.contains(this.positionTarget)||i!==document.body)return}const t=this.positionTarget.getBoundingClientRect();this.alignedAbove=this._shouldAlignAbove(t);const i=this.$.overlay.getBoundingClientRect();this._translateX=t.left-i.left+(this._translateX||0),this._translateY=t.top-i.top+(this._translateY||0)+this._verticalOffset(i,t);const n=window.devicePixelRatio||1;this._translateX=Math.round(this._translateX*n)/n,this._translateY=Math.round(this._translateY*n)/n,this.$.overlay.style.transform=`translate3d(${this._translateX}px, ${this._translateY}px, 0)`,this.$.overlay.style.width=this.positionTarget.clientWidth+"px",this.$.overlay.style.justifyContent=this.alignedAbove?"flex-end":"flex-start",this.dispatchEvent(new CustomEvent("position-changed"))}}customElements.define(Jo.is,Jo);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
const Xo=(()=>{try{return document.createEvent("TouchEvent"),!0}catch(e){return!1}})();class Zo extends class extends Ps{}{static get template(){return Is`
    <vaadin-combo-box-dropdown id="dropdown" hidden="[[_hidden(_items.*, loading)]]" position-target="[[positionTarget]]" on-template-changed="_templateChanged" on-position-changed="_setOverlayHeight" disable-upgrade="" theme="[[theme]]">
      <template>
        <style>
          #scroller {
            overflow: auto;

            /* Fixes item background from getting on top of scrollbars on Safari */
            transform: translate3d(0, 0, 0);

            /* Enable momentum scrolling on iOS (iron-list v1.2+ no longer does it for us) */
            -webkit-overflow-scrolling: touch;

            /* Fixes scrollbar disappearing when 'Show scroll bars: Always' enabled in Safari */
            box-shadow: 0 0 0 white;
          }
        </style>
        <div id="scroller" on-click="_stopPropagation">
          <iron-list id="selector" role="listbox" items="[[_getItems(opened, _items)]]" scroll-target="[[_scroller]]">
            <template>
              <vaadin-combo-box-item on-click="_onItemClick" index="[[__requestItemByIndex(item, index)]]" item="[[item]]" label="[[getItemLabel(item, _itemLabelPath)]]" selected="[[_isItemSelected(item, _selectedItem, _itemIdPath)]]" renderer="[[renderer]]" role\$="[[_getAriaRole(index)]]" aria-selected\$="[[_getAriaSelected(_focusedIndex,index)]]" focused="[[_isItemFocused(_focusedIndex,index)]]" tabindex="-1" theme\$="[[theme]]">
              </vaadin-combo-box-item>
            </template>
          </iron-list>
        </div>
      </template>
    </vaadin-combo-box-dropdown>
`}static get is(){return"vaadin-combo-box-dropdown-wrapper"}static get properties(){return{touchDevice:{type:Boolean,value:Xo},opened:Boolean,positionTarget:{type:Object},renderer:Function,loading:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_setOverlayHeight"},theme:String,_selectedItem:{type:Object},_items:{type:Object},_focusedIndex:{type:Number,value:-1,observer:"_focusedIndexChanged"},_focusedItem:{type:String,computed:"_getFocusedItem(_focusedIndex)"},_itemLabelPath:{type:String,value:"label"},_itemValuePath:{type:String,value:"value"},_selector:Object,_itemIdPath:String}}static get observers(){return["_selectorChanged(_selector)","_loadingChanged(loading)","_openedChanged(opened, _items, loading)"]}_fireTouchAction(e){this.dispatchEvent(new CustomEvent("vaadin-overlay-touch-action",{detail:{sourceEvent:e}}))}_getItems(e,t){return e?t:[]}_openedChanged(e,t,i){if(this.$.dropdown.hasAttribute("disable-upgrade")){if(!e)return;this._initDropdown()}this.$.dropdown.opened=!(!e||!(i||this.$.dropdown.opened||t&&t.length))}_initDropdown(){this.$.dropdown.removeAttribute("disable-upgrade"),this._templateChanged(),this._loadingChanged(this.loading),this.$.dropdown.$.overlay.addEventListener("touchend",e=>this._fireTouchAction(e)),this.$.dropdown.$.overlay.addEventListener("touchmove",e=>this._fireTouchAction(e)),this.$.dropdown.$.overlay.addEventListener("mousedown",e=>e.preventDefault()),/Trident/.test(navigator.userAgent)&&this._scroller.setAttribute("unselectable","on")}_templateChanged(e){this.$.dropdown.hasAttribute("disable-upgrade")||(this._selector=this.$.dropdown.$.overlay.content.querySelector("#selector"),this._scroller=this.$.dropdown.$.overlay.content.querySelector("#scroller"))}_loadingChanged(e){this.$.dropdown.hasAttribute("disable-upgrade")||(e?this.$.dropdown.$.overlay.setAttribute("loading",""):this.$.dropdown.$.overlay.removeAttribute("loading"))}_selectorChanged(e){this._patchWheelOverScrolling()}_setOverlayHeight(){if(!this.opened||!this.positionTarget||!this._selector)return;const e=this.positionTarget.getBoundingClientRect();this._scroller.style.maxHeight=(window.ShadyCSS?window.ShadyCSS.getComputedStyleValue(this,"--vaadin-combo-box-overlay-max-height"):getComputedStyle(this).getPropertyValue("--vaadin-combo-box-overlay-max-height"))||"65vh";const t=this._maxOverlayHeight(e);this.$.dropdown.$.overlay.style.maxHeight=t,this._selector.style.maxHeight=t,this.updateViewportBoundaries()}_maxOverlayHeight(e){const t=Math.min(window.innerHeight,document.body.scrollHeight-document.body.scrollTop);return this.$.dropdown.alignedAbove?Math.max(e.top-8+Math.min(document.body.scrollTop,0),116)+"px":Math.max(t-e.bottom-8,116)+"px"}_getFocusedItem(e){if(e>=0)return this._items[e]}_isItemSelected(e,t,i){return!(e instanceof Hs)&&(i&&void 0!==e&&void 0!==t?this.get(i,e)===this.get(i,t):e===t)}_onItemClick(e){e.detail&&e.detail.sourceEvent&&e.detail.sourceEvent.stopPropagation&&this._stopPropagation(e.detail.sourceEvent),this.dispatchEvent(new CustomEvent("selection-changed",{detail:{item:e.model.item}}))}indexOfLabel(e){if(this._items&&e)for(let t=0;t<this._items.length;t++)if(this.getItemLabel(this._items[t]).toString().toLowerCase()===e.toString().toLowerCase())return t;return-1}__requestItemByIndex(e,t){return e instanceof Hs&&void 0!==t&&this.dispatchEvent(new CustomEvent("index-requested",{detail:{index:t}})),t}getItemLabel(e,t){t=t||this._itemLabelPath;let i=e&&t?this.get(t,e):void 0;return null==i&&(i=e?e.toString():""),i}_isItemFocused(e,t){return e==t}_getAriaSelected(e,t){return this._isItemFocused(e,t).toString()}_getAriaRole(e){return void 0!==e&&"option"}_focusedIndexChanged(e){e>=0&&this._scrollIntoView(e)}_scrollIntoView(e){if(!(this.opened&&e>=0))return;const t=this._visibleItemsCount();if(void 0===t)return;let i=e;e>this._selector.lastVisibleIndex-1?(this._selector.scrollToIndex(e),i=e-t+1):e>this._selector.firstVisibleIndex&&(i=this._selector.firstVisibleIndex),this._selector.scrollToIndex(Math.max(0,i));const n=this._selector._getPhysicalIndex(e),s=this._selector._physicalItems[n];if(!s)return;const o=s.getBoundingClientRect(),r=this._scroller.getBoundingClientRect(),a=o.bottom-r.bottom+this._viewportTotalPaddingBottom;a>0&&(this._scroller.scrollTop+=a)}ensureItemsRendered(){this._selector._render()}adjustScrollPosition(){this.opened&&this._items&&this._scrollIntoView(this._focusedIndex)}_patchWheelOverScrolling(){const e=this._selector;e.addEventListener("wheel",t=>{const i=e._scroller||e.scrollTarget,n=0===i.scrollTop,s=i.scrollHeight-i.scrollTop-i.clientHeight<=1;n&&t.deltaY<0?t.preventDefault():s&&t.deltaY>0&&t.preventDefault()})}updateViewportBoundaries(){this._cachedViewportTotalPaddingBottom=void 0,this._selector.updateViewportBoundaries()}get _viewportTotalPaddingBottom(){if(void 0===this._cachedViewportTotalPaddingBottom){const e=window.getComputedStyle(this._selector.$.items);this._cachedViewportTotalPaddingBottom=[e.paddingBottom,e.borderBottomWidth].map(e=>parseInt(e,10)).reduce((e,t)=>e+t)}return this._cachedViewportTotalPaddingBottom}_visibleItemsCount(){if(this._selector)return this._selector.flushDebouncer("_debounceTemplate"),this._selector.scrollToIndex(this._selector.firstVisibleIndex),this.updateViewportBoundaries(),this._selector.lastVisibleIndex-this._selector.firstVisibleIndex+1}_selectItem(e){e="number"==typeof e?this._items[e]:e,this._selector.selectedItem!==e&&this._selector.selectItem(e)}_preventDefault(e){e.cancelable&&e.preventDefault()}_stopPropagation(e){e.stopPropagation()}_hidden(e){return!(this.loading||this._items&&this._items.length)}}customElements.define(Zo.is,Zo);
/**
@license
Copyright (c) 2018 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
const Qo=e=>(class extends e{static get properties(){return{pageSize:{type:Number,value:50,observer:"_pageSizeChanged"},size:{type:Number,observer:"_sizeChanged"},dataProvider:{type:Object,observer:"_dataProviderChanged"},_pendingRequests:{value:()=>({})},__placeHolder:{value:new Hs}}}static get observers(){return["_dataProviderFilterChanged(filter, dataProvider)","_dataProviderClearFilter(dataProvider, opened, value)","_warnDataProviderValue(dataProvider, value)","_ensureFirstPage(opened)"]}_dataProviderClearFilter(e,t,i){e&&this.filter&&(this.size=void 0,this._pendingRequests={},this.filter="",this.clearCache())}ready(){super.ready(),this.clearCache(),this.$.overlay.addEventListener("index-requested",e=>{const t=e.detail.index;if(void 0!==t){const e=this._getPageForIndex(t);this._shouldLoadPage(e)&&this._loadPage(e)}})}_dataProviderFilterChanged(){this.dataProvider&&this.opened&&(this.size=void 0,this._pendingRequests={},this.clearCache())}_ensureFirstPage(e){e&&this._shouldLoadPage(0)&&this._loadPage(0)}_shouldLoadPage(e){if(!this.filteredItems||this._forceNextRequest)return this._forceNextRequest=!1,!0;const t=this.filteredItems[e*this.pageSize];return void 0!==t?t instanceof Hs:void 0===this.size}_loadPage(e){if(!this._pendingRequests[e]&&this.dataProvider){this.loading=!0;const t={page:e,pageSize:this.pageSize,filter:this.filter},i=(n,s)=>{if(this._pendingRequests[e]===i){if(this.filteredItems)this.splice("filteredItems",t.page*t.pageSize,n.length,...n);else{const e=[];e.splice(t.page*t.pageSize,n.length,...n),this.filteredItems=e}this._isValidValue(this.value)&&this._getItemValue(this.selectedItem)!==this.value&&this._selectItemForValue(this.value),this.size=s,delete this._pendingRequests[e],0===Object.keys(this._pendingRequests).length&&(this.loading=!1),0===e&&this.__repositionOverlayDebouncer&&n.length>(this.__maxRenderedItems||0)&&(setTimeout(()=>this.__repositionOverlayDebouncer.flush()),this.__maxRenderedItems=n.length)}};this._pendingRequests[e]=i,this.dataProvider(t,i)}}_getPageForIndex(e){return Math.floor(e/this.pageSize)}clearCache(){if(!this.dataProvider)return;this._pendingRequests={};const e=[];for(let t=0;t<(this.size||0);t++)e.push(this.__placeHolder);this.filteredItems=e,this.opened?this._loadPage(0):this._forceNextRequest=!0}_sizeChanged(e=0){const t=(this.filteredItems||[]).slice(0,e);for(let i=0;i<e;i++)t[i]=void 0!==t[i]?t[i]:this.__placeHolder;this.filteredItems=t}_pageSizeChanged(e,t){if(Math.floor(e)!==e||e<1)throw this.pageSize=t,new Error("`pageSize` value must be an integer > 0");this.clearCache()}_dataProviderChanged(e,t){this._ensureItemsOrDataProvider(()=>{this.dataProvider=t})}_ensureItemsOrDataProvider(e){if(void 0!==this.items&&void 0!==this.dataProvider)throw e(),new Error("Using `items` and `dataProvider` together is not supported");this.dataProvider&&!this.filteredItems&&(this.filteredItems=[])}_warnDataProviderValue(e,t){if(e&&""!==t&&(void 0===this.selectedItem||null===this.selectedItem)){const e=this._indexOfValue(t,this.filteredItems);(e<0||!this._getItemLabel(this.filteredItems[e]))&&console.warn("Warning: unable to determine the label for the provided `value`. Nothing to display in the text field. This usually happens when setting an initial `value` before any items are returned from the `dataProvider` callback. Consider setting `selectedItem` instead of `value`")}}});
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/class er extends(Co(ho(qs(Ys(Qo(Bo(Ps))))))){static get template(){return Is`
    <style>
      :host {
        display: inline-block;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host([opened]) {
        pointer-events: auto;
      }

      [part="text-field"] {
        width: 100%;
        min-width: 0;
      }
    </style>

    <vaadin-text-field part="text-field" id="input" pattern="[[pattern]]" prevent-invalid-input="[[preventInvalidInput]]" value="{{_inputElementValue}}" autocomplete="off" invalid="[[invalid]]" label="[[label]]" name="[[name]]" placeholder="[[placeholder]]" required="[[required]]" disabled="[[disabled]]" readonly="[[readonly]]" error-message="[[errorMessage]]" autocapitalize="none" autofocus="[[autofocus]]" on-change="_stopPropagation" on-input="_inputValueChanged" clear-button-visible="[[clearButtonVisible]]" theme\$="[[theme]]">
      <slot name="prefix" slot="prefix"></slot>

      <div part="toggle-button" id="toggleButton" slot="suffix" role="button" aria-label="Toggle"></div>

    </vaadin-text-field>

    <vaadin-combo-box-dropdown-wrapper id="overlay" opened="[[opened]]" renderer="[[renderer]]" position-target="[[_getPositionTarget()]]" _focused-index="[[_focusedIndex]]" _item-id-path="[[itemIdPath]]" _item-label-path="[[itemLabelPath]]" loading="[[loading]]" theme="[[theme]]">
    </vaadin-combo-box-dropdown-wrapper>
`}constructor(){super(),this.theme}static get is(){return"vaadin-combo-box"}static get version(){return"5.0.8"}static get properties(){return{label:{type:String,reflectToAttribute:!0},required:{type:Boolean,value:!1},disabled:{type:Boolean,value:!1},preventInvalidInput:{type:Boolean},pattern:{type:String},errorMessage:{type:String},autofocus:{type:Boolean},placeholder:{type:String,value:""},readonly:{type:Boolean,value:!1},clearButtonVisible:{type:Boolean,value:!1}}}static get observers(){return["_updateAriaExpanded(opened)"]}attributeChanged(e,t){/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&this.root&&Array.prototype.forEach.call(this.root.querySelectorAll("*"),e=>{e.style["-webkit-backface-visibility"]="visible",e.style["-webkit-backface-visibility"]=""})}ready(){super.ready(),this._nativeInput=this.inputElement.focusElement,this._toggleElement=this.$.toggleButton,this._clearElement=this.inputElement.shadowRoot.querySelector('[part="clear-button"]'),this.inputElement.addEventListener("keydown",e=>{this._isEventKey(e,"esc")&&(this._stopPropagation(e),this._onEscape(e))},!0),this._nativeInput.setAttribute("role","combobox"),this._nativeInput.setAttribute("aria-autocomplete","list"),this._updateAriaExpanded()}connectedCallback(){super.connectedCallback(),this._preventInputBlur()}disconnectedCallback(){super.disconnectedCallback(),this._restoreInputBlur()}_getPositionTarget(){return this.$.input}_updateAriaExpanded(){this._nativeInput&&(this._nativeInput.setAttribute("aria-expanded",this.opened),this._toggleElement.setAttribute("aria-expanded",this.opened))}get inputElement(){return this.$.input}get focusElement(){return this.inputElement||this}}customElements.define(er.is,er);const tr=document.createElement("template");tr.innerHTML='<dom-module id="lumo-ordered-layout">\n  <template>\n    <style>\n      :host([theme~="margin"]) {\n        margin: var(--lumo-space-m);\n      }\n\n      :host([theme~="padding"]) {\n        padding: var(--lumo-space-m);\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(tr.content);const ir=document.createElement("template");ir.innerHTML='<dom-module id="lumo-horizontal-layout" theme-for="vaadin-horizontal-layout">\n  <template>\n    <style include="lumo-ordered-layout">\n      :host([theme~="spacing-xs"]) ::slotted(*) {\n        margin-left: var(--lumo-space-xs);\n      }\n\n      :host([theme~="spacing-s"]) ::slotted(*) {\n        margin-left: var(--lumo-space-s);\n      }\n\n      :host([theme~="spacing"]) ::slotted(*) {\n        margin-left: var(--lumo-space-m);\n      }\n\n      :host([theme~="spacing-l"]) ::slotted(*) {\n        margin-left: var(--lumo-space-l);\n      }\n\n      :host([theme~="spacing-xl"]) ::slotted(*) {\n        margin-left: var(--lumo-space-xl);\n      }\n\n      /*\n        Compensate for the first item margin, so that there is no gap around\n        the layout itself.\n       */\n      :host([theme~="spacing-xs"])::before {\n        content: "";\n        margin-left: calc(var(--lumo-space-xs) * -1);\n      }\n\n      :host([theme~="spacing-s"])::before {\n        content: "";\n        margin-left: calc(var(--lumo-space-s) * -1);\n      }\n\n      :host([theme~="spacing"])::before {\n        content: "";\n        margin-left: calc(var(--lumo-space-m) * -1);\n      }\n\n      :host([theme~="spacing-l"])::before {\n        content: "";\n        margin-left: calc(var(--lumo-space-l) * -1);\n      }\n\n      :host([theme~="spacing-xl"])::before {\n        content: "";\n        margin-left: calc(var(--lumo-space-xl) * -1);\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(ir.content);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class nr extends(Co(Ys(Ps))){static get template(){return Is`
    <style>
      :host {
        display: flex;
        box-sizing: border-box;
      }

      :host([hidden]) {
        display: none !important;
      }

      /* Theme variations */
      :host([theme~="margin"]) {
        margin: 1em;
      }

      :host([theme~="padding"]) {
        padding: 1em;
      }

      :host([theme~="spacing"]) ::slotted(*) {
        margin-left: 1em;
      }

      /*
        Compensate for the first item margin, so that there is no gap around
        the layout itself.
       */
      :host([theme~="spacing"])::before {
        content: "";
        margin-left: -1em;
      }
    </style>

    <slot></slot>
`}static get is(){return"vaadin-horizontal-layout"}static get version(){return"1.1.0"}}customElements.define(nr.is,nr);const sr=Is`<dom-module id="lumo-button" theme-for="vaadin-button">
  <template>
    <style>
      :host {
        /* Sizing */
        --lumo-button-size: var(--lumo-size-m);
        min-width: calc(var(--lumo-button-size) * 2);
        height: var(--lumo-button-size);
        padding: 0 calc(var(--lumo-button-size) / 3 + var(--lumo-border-radius) / 2);
        margin: var(--lumo-space-xs) 0;
        box-sizing: border-box;
        /* Style */
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-m);
        font-weight: 500;
        color: var(--_lumo-button-color, var(--lumo-primary-text-color));
        background-color: var(--_lumo-button-background-color, var(--lumo-contrast-5pct));
        border-radius: var(--lumo-border-radius);
        cursor: default;
        -webkit-tap-highlight-color: transparent;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      /* Set only for the internal parts so we don’t affect the host vertical alignment */
      [part="label"],
      [part="prefix"],
      [part="suffix"] {
        line-height: var(--lumo-line-height-xs);
      }

      [part="label"] {
        padding: calc(var(--lumo-button-size) / 6) 0;
      }

      :host([theme~="small"]) {
        font-size: var(--lumo-font-size-s);
        --lumo-button-size: var(--lumo-size-s);
      }

      :host([theme~="large"]) {
        font-size: var(--lumo-font-size-l);
        --lumo-button-size: var(--lumo-size-l);
      }

      /* This needs to be the last selector for it to take priority */
      :host([disabled][disabled]) {
        pointer-events: none;
        color: var(--lumo-disabled-text-color);
        background-color: var(--lumo-contrast-5pct);
      }

      /* For interaction states */
      :host::before,
      :host::after {
        content: "";
        /* We rely on the host always being relative */
        position: absolute;
        z-index: 1;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: currentColor;
        border-radius: inherit;
        opacity: 0;
        transition: opacity 0.2s;
        pointer-events: none;
      }

      /* Hover */

      :host(:hover)::before {
        opacity: 0.05;
      }

      /* Disable hover for touch devices */
      @media (pointer: coarse) {
        :host(:not([active]):hover)::before {
          opacity: 0;
        }
      }

      /* Active */

      :host::after {
        transition: opacity 1.4s, transform 0.1s;
        filter: blur(8px);
      }

      :host([active])::before {
        opacity: 0.1;
        transition-duration: 0s;
      }

      :host([active])::after {
        opacity: 0.1;
        transition-duration: 0s, 0s;
        transform: scale(0);
      }

      /* Keyboard focus */

      :host([focus-ring]) {
        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      /* Types (primary, tertiary, tertiary-inline */

      :host([theme~="tertiary"]),
      :host([theme~="tertiary-inline"]) {
        background-color: transparent !important;
        transition: opacity 0.2s;
        min-width: 0;
      }

      :host([theme~="tertiary"])::before,
      :host([theme~="tertiary-inline"])::before {
        display: none;
      }

      :host([theme~="tertiary"]) {
        padding: 0 calc(var(--lumo-button-size) / 6);
      }

      @media (hover: hover) {
        :host([theme*="tertiary"]:not([active]):hover) {
          opacity: 0.8;
        }
      }

      :host([theme~="tertiary"][active]),
      :host([theme~="tertiary-inline"][active]) {
        opacity: 0.5;
        transition-duration: 0s;
      }

      :host([theme~="tertiary-inline"]) {
        margin: 0;
        height: auto;
        padding: 0;
        line-height: inherit;
        font-size: inherit;
      }

      :host([theme~="tertiary-inline"]) [part="label"] {
        padding: 0;
        overflow: visible;
        line-height: inherit;
      }

      :host([theme~="primary"]) {
        background-color: var(--_lumo-button-primary-background-color, var(--lumo-primary-color));
        color: var(--_lumo-button-primary-color, var(--lumo-primary-contrast-color));
        font-weight: 600;
        min-width: calc(var(--lumo-button-size) * 2.5);
      }

      :host([theme~="primary"][disabled]) {
        background-color: var(--lumo-primary-color-50pct);
        color: var(--lumo-primary-contrast-color);
      }

      :host([theme~="primary"]:hover)::before {
        opacity: 0.1;
      }

      :host([theme~="primary"][active])::before {
        background-color: var(--lumo-shade-20pct);
      }

      @media (pointer: coarse) {
        :host([theme~="primary"][active])::before {
          background-color: var(--lumo-shade-60pct);
        }

        :host([theme~="primary"]:not([active]):hover)::before {
          opacity: 0;
        }
      }

      :host([theme~="primary"][active])::after {
        opacity: 0.2;
      }

      /* Colors (success, error, contrast) */

      :host([theme~="success"]) {
        color: var(--lumo-success-text-color);
      }

      :host([theme~="success"][theme~="primary"]) {
        background-color: var(--lumo-success-color);
        color: var(--lumo-success-contrast-color);
      }

      :host([theme~="success"][theme~="primary"][disabled]) {
        background-color: var(--lumo-success-color-50pct);
      }

      :host([theme~="error"]) {
        color: var(--lumo-error-text-color);
      }

      :host([theme~="error"][theme~="primary"]) {
        background-color: var(--lumo-error-color);
        color: var(--lumo-error-contrast-color);
      }

      :host([theme~="error"][theme~="primary"][disabled]) {
        background-color: var(--lumo-error-color-50pct);
      }

      :host([theme~="contrast"]) {
        color: var(--lumo-contrast);
      }

      :host([theme~="contrast"][theme~="primary"]) {
        background-color: var(--lumo-contrast);
        color: var(--lumo-base-color);
      }

      :host([theme~="contrast"][theme~="primary"][disabled]) {
        background-color: var(--lumo-contrast-50pct);
      }

      /* Icons */

      [part] ::slotted(iron-icon) {
        display: inline-block;
        width: var(--lumo-icon-size-m);
        height: var(--lumo-icon-size-m);
      }

      /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
      [part] ::slotted(iron-icon[icon^="vaadin:"]) {
        padding: 0.25em;
        box-sizing: border-box !important;
      }

      [part="prefix"] {
        margin-left: -0.25em;
        margin-right: 0.25em;
      }

      [part="suffix"] {
        margin-left: 0.25em;
        margin-right: -0.25em;
      }

      /* Icon-only */

      :host([theme~="icon"]:not([theme~="tertiary-inline"])) {
        min-width: var(--lumo-button-size);
        padding-left: calc(var(--lumo-button-size) / 4);
        padding-right: calc(var(--lumo-button-size) / 4);
      }

      :host([theme~="icon"]) [part="prefix"],
      :host([theme~="icon"]) [part="suffix"] {
        margin-left: 0;
        margin-right: 0;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(sr.content);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class or extends(Co(ho(Ys(dn(Ps))))){static get template(){return Is`
    <style>
      :host {
        display: inline-block;
        position: relative;
        outline: none;
        white-space: nowrap;
      }

      :host([hidden]) {
        display: none !important;
      }

      /* Ensure the button is always aligned on the baseline */
      .vaadin-button-container::before {
        content: "\\2003";
        display: inline-block;
        width: 0;
      }

      .vaadin-button-container {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 100%;
        height: 100%;
        min-height: inherit;
        text-shadow: inherit;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      [part="prefix"],
      [part="suffix"] {
        flex: none;
      }

      [part="label"] {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      #button {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: inherit;
      }
    </style>
    <div class="vaadin-button-container">
      <div part="prefix">
        <slot name="prefix"></slot>
      </div>
      <div part="label">
        <slot></slot>
      </div>
      <div part="suffix">
        <slot name="suffix"></slot>
      </div>
    </div>
    <button id="button" type="button"></button>
`}static get is(){return"vaadin-button"}static get version(){return"2.2.1"}ready(){super.ready(),this.setAttribute("role","button"),this.$.button.setAttribute("role","presentation"),this._addActiveListeners()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("active")&&this.removeAttribute("active")}_addActiveListeners(){Zi(this,"down",()=>!this.disabled&&this.setAttribute("active","")),Zi(this,"up",()=>this.removeAttribute("active")),this.addEventListener("keydown",e=>!this.disabled&&[13,32].indexOf(e.keyCode)>=0&&this.setAttribute("active","")),this.addEventListener("keyup",()=>this.removeAttribute("active")),this.addEventListener("blur",()=>this.removeAttribute("active"))}get focusElement(){return this.$.button}}customElements.define(or.is,or);const rr=Is`<dom-module id="lumo-notification-card" theme-for="vaadin-notification-card">
  <template>
    <style>
      :host {
        position: relative;
        margin: var(--lumo-space-s);
      }

      [part="overlay"] {
        background: var(--lumo-base-color) linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
        border-radius: var(--lumo-border-radius);
        box-shadow: 0 0 0 1px var(--lumo-contrast-10pct), var(--lumo-box-shadow-l);
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-m);
        font-weight: 400;
        line-height: var(--lumo-line-height-s);
        letter-spacing: 0;
        text-transform: none;
        -webkit-text-size-adjust: 100%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      [part="content"] {
        padding: var(--lumo-space-wide-l);
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      [part="content"] ::slotted(vaadin-button) {
        flex: none;
        margin: 0 calc(var(--lumo-space-s) * -1) 0 var(--lumo-space-m);
      }

      :host([slot^="middle"]) {
        width: 20em;
        max-width: 80vw;
        margin: var(--lumo-space-s) auto;
      }

      :host([slot\$="stretch"]) {
        margin: 0;
      }

      :host([slot\$="stretch"]) [part="overlay"] {
        border-radius: 0;
      }

      @media (min-width: 421px) {
        :host(:not([slot\$="stretch"])) {
          display: flex;
        }

        :host([slot\$="end"]) {
          justify-content: flex-end;
        }

        :host([slot^="middle"]),
        :host([slot\$="center"]) {
          display: flex;
          justify-content: center;
        }
      }

      @keyframes lumo-notification-exit-fade-out {
        100% {
          opacity: 0;
        }
      }

      @keyframes lumo-notification-enter-fade-in {
        0% {
          opacity: 0;
        }
      }

      @keyframes lumo-notification-enter-slide-down {
        0% {
          transform: translateY(-200%);
          opacity: 0;
        }
      }

      @keyframes lumo-notification-exit-slide-up {
        100% {
          transform: translateY(-200%);
          opacity: 0;
        }
      }

      @keyframes lumo-notification-enter-slide-up {
        0% {
          transform: translateY(200%);
          opacity: 0;
        }
      }

      @keyframes lumo-notification-exit-slide-down {
        100% {
          transform: translateY(200%);
          opacity: 0;
        }
      }

      :host([slot="middle"][opening]) {
        animation: lumo-notification-enter-fade-in 300ms;
      }

      :host([slot="middle"][closing]) {
        animation: lumo-notification-exit-fade-out 300ms;
      }

      :host([slot^="top"][opening]) {
        animation: lumo-notification-enter-slide-down 300ms;
      }

      :host([slot^="top"][closing]) {
        animation: lumo-notification-exit-slide-up 300ms;
      }

      :host([slot^="bottom"][opening]) {
        animation: lumo-notification-enter-slide-up 300ms;
      }

      :host([slot^="bottom"][closing]) {
        animation: lumo-notification-exit-slide-down 300ms;
      }

      :host([theme~="primary"]) [part="overlay"] {
        background: var(--lumo-primary-color);
        color: var(--lumo-primary-contrast-color);
      }

      :host([theme~="primary"]) {
        --_lumo-button-background-color: var(--lumo-shade-20pct);
        --_lumo-button-color: var(--lumo-primary-contrast-color);
        --_lumo-button-primary-background-color: var(--lumo-primary-contrast-color);
        --_lumo-button-primary-color: var(--lumo-primary-text-color);
      }

      :host([theme~="contrast"]) [part="overlay"] {
        background: var(--lumo-contrast);
        color: var(--lumo-base-color);
      }

      :host([theme~="contrast"]) {
        --_lumo-button-background-color: var(--lumo-contrast-20pct);
        --_lumo-button-color: var(--lumo-base-color);
        --_lumo-button-primary-background-color: var(--lumo-base-color);
        --_lumo-button-primary-color: var(--lumo-contrast);
      }

      :host([theme~="success"]) [part="overlay"] {
        background: var(--lumo-success-color);
        color: var(--lumo-success-contrast-color);
      }

      :host([theme~="success"]) {
        --_lumo-button-background-color: var(--lumo-shade-20pct);
        --_lumo-button-color: var(--lumo-success-contrast-color);
        --_lumo-button-primary-background-color: var(--lumo-success-contrast-color);
        --_lumo-button-primary-color: var(--lumo-success-text-color);
      }

      :host([theme~="error"]) [part="overlay"] {
        background: var(--lumo-error-color);
        color: var(--lumo-error-contrast-color);
      }

      :host([theme~="error"]) {
        --_lumo-button-background-color: var(--lumo-shade-20pct);
        --_lumo-button-color: var(--lumo-error-contrast-color);
        --_lumo-button-primary-background-color: var(--lumo-error-contrast-color);
        --_lumo-button-primary-color: var(--lumo-error-text-color);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(rr.content);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class ar extends(Ys(Co(Ps))){static get template(){return Is`
    <style>
      :host {
        position: fixed;
        z-index: 1000;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        box-sizing: border-box;

        display: flex;
        flex-direction: column;
        align-items: stretch;
        pointer-events: none;
      }

      [region-group] {
        flex: 1 1 0%;
        display: flex;
      }

      [region-group="top"] {
        align-items: flex-start;
      }

      [region-group="bottom"] {
        align-items: flex-end;
      }

      [region-group] > [region] {
        flex: 1 1 0%;
      }

      @media (max-width: 420px) {
        [region-group] {
          flex-direction: column;
          align-items: stretch;
        }

        [region-group="top"] {
          justify-content: flex-start;
        }

        [region-group="bottom"] {
          justify-content: flex-end;
        }

        [region-group] > [region] {
          flex: initial;
        }
      }
    </style>

    <div region="top-stretch"><slot name="top-stretch"></slot></div>
    <div region-group="top">
      <div region="top-start"><slot name="top-start"></slot></div>
      <div region="top-center"><slot name="top-center"></slot></div>
      <div region="top-end"><slot name="top-end"></slot></div>
    </div>
    <div region="middle"><slot name="middle"></slot></div>
    <div region-group="bottom">
      <div region="bottom-start"><slot name="bottom-start"></slot></div>
      <div region="bottom-center"><slot name="bottom-center"></slot></div>
      <div region="bottom-end"><slot name="bottom-end"></slot></div>
    </div>
    <div region="bottom-stretch"><slot name="bottom-stretch"></slot></div>
`}static get is(){return"vaadin-notification-container"}static get properties(){return{opened:{type:Boolean,value:!1,observer:"_openedChanged"}}}_openedChanged(e){e?(document.body.appendChild(this),this._boundIosResizeListener&&(this._detectIosNavbar(),window.addEventListener("resize",this._boundIosResizeListener))):(document.body.removeChild(this),this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener))}constructor(){super(),/iPad|iPhone|iPod/.test(navigator.userAgent)&&(this._boundIosResizeListener=()=>this._detectIosNavbar())}_detectIosNavbar(){const e=window.innerHeight,t=window.innerWidth>e,i=document.documentElement.clientHeight;this.style.bottom=t&&i>e?i-e+"px":"0"}}class lr extends(Ys(Ps)){static get template(){return Is`
    <style>
      :host {
        display: block;
        pointer-events: auto;
      }
    </style>

    <div part="overlay">
      <div part="content">
        <slot></slot>
      </div>
    </div>
`}static get is(){return"vaadin-notification-card"}ready(){super.ready(),this.setAttribute("role","alert"),this.setAttribute("aria-live","polite")}}class dr extends(qs(Co(Ps))){static get template(){return Is`
    <style>
      :host {
        display: none;
      }
    </style>
    <vaadin-notification-card id="vaadin-notification-card" theme\$="[[theme]]">
    </vaadin-notification-card>
`}static get is(){return"vaadin-notification"}static get version(){return"1.4.0"}static get properties(){return{duration:{type:Number,value:5e3},opened:{type:Boolean,value:!1,notify:!0,observer:"_openedChanged"},position:{type:String,value:"bottom-start",observer:"_positionChanged"},renderer:Function,_notificationTemplate:Object}}static get observers(){return["_durationChanged(duration, opened)","_templateOrRendererChanged(_notificationTemplate, renderer, opened)"]}ready(){super.ready(),this._observer=new Dn(this,e=>{this._setTemplateFromNodes(e.addedNodes)})}_setTemplateFromNodes(e){this._notificationTemplate=e.filter(e=>e.localName&&"template"===e.localName)[0]||this._notificationTemplate}render(){"function"==typeof this.renderer&&this.renderer(this._card,this)}_removeNewRendererOrTemplate(e,t,i,n){e!==t?this._notificationTemplate=void 0:i!==n&&(this.renderer=void 0)}_templateOrRendererChanged(e,t,i){if(e&&t)throw this._removeNewRendererOrTemplate(e,this._oldTemplate,t,this._oldRenderer),new Error("You should only use either a renderer or a template for notification content");this._oldTemplate=e;const n=this._oldRenderer!==t;if(this._oldRenderer=t,t){if(this._card=this.$["vaadin-notification-card"],n)for(;this._card.firstChild;)this._card.removeChild(this._card.firstChild);i&&(this._didAnimateNotificationAppend||this._animatedAppendNotificationCard(),this.render())}}open(){this.opened=!0}close(){this.opened=!1}get _container(){return dr._container||(dr._container=document.createElement("vaadin-notification-container"),document.body.appendChild(dr._container)),dr._container}_openedChanged(e){e?(this._container.opened=!0,this._instance||this.renderer||this._ensureTemplatized(),this._animatedAppendNotificationCard(),setTimeout(()=>this._updateShadyButtonStyles())):this._card&&this._closeNotificationCard()}_ensureTemplatized(){if(this._notificationTemplate=this.querySelector("template")||this._notificationTemplate,!this._notificationTemplate)return;this._notificationTemplate._Templatizer||(this._notificationTemplate._Templatizer=vs(this._notificationTemplate,this,{forwardHostProp:function(e,t){this._instance&&this._instance.forwardHostProp(e,t)}})),this._instance=new this._notificationTemplate._Templatizer({});const e=this._notificationTemplate.getRootNode(),t=e!==document;if(this._card=this.$["vaadin-notification-card"],this._cardContent=this._card.shadowRoot.querySelector('[part~="content"]'),t){if(this._cardContent.shadowRoot||this._cardContent.attachShadow({mode:"open"}),window.ShadyCSS&&!window.ShadyCSS.nativeShadow){var i=e.host&&e.host.localName;i&&-1===i.indexOf("-")&&(i=e.host.getAttribute("is")),i&&this._cardContent.setAttribute("is",i)}else{const t=Array.from(e.querySelectorAll("style")).reduce((e,t)=>e+t.textContent,"").replace(/:host/g,":host-nomatch");if(t){const e=document.createElement("style");e.textContent=t,this._cardContent.shadowRoot.appendChild(e)}}this._cardContent.shadowRoot.appendChild(this._instance.root)}else this._card.appendChild(this._instance.root);this._card.setAttribute("aria-label",this._card.textContent.trim())}_animatedAppendNotificationCard(){if(this._card){this._card.setAttribute("opening",""),this._appendNotificationCard();const e=()=>{this._card.removeEventListener("animationend",e),this._card.removeAttribute("opening")};this._card.addEventListener("animationend",e),this._didAnimateNotificationAppend=!0}else this._didAnimateNotificationAppend=!1}_appendNotificationCard(){this._card&&(this._container.shadowRoot.querySelector(`slot[name="${this.position}"]`)?(this._card.slot=this.position,this._container.firstElementChild&&/top/.test(this.position)?this._container.insertBefore(this._card,this._container.firstElementChild):this._container.appendChild(this._card)):window.console.warn(`Invalid alignment parameter provided: position=${this.position}`))}_removeNotificationCard(){this._card.parentNode&&this._card.parentNode.removeChild(this._card),this._card.removeAttribute("closing"),this._container.opened=Boolean(this._container.firstElementChild)}_closeNotificationCard(){this._durationTimeoutId&&clearTimeout(this._durationTimeoutId),this._animatedRemoveNotificationCard()}_animatedRemoveNotificationCard(){this._card.setAttribute("closing","");const e=getComputedStyle(this._card).getPropertyValue("animation-name");if(e&&"none"!=e){const e=()=>{this._removeNotificationCard(),this._card.removeEventListener("animationend",e)};this._card.addEventListener("animationend",e)}else this._removeNotificationCard()}_positionChanged(e){this.opened&&this._animatedAppendNotificationCard()}_durationChanged(e,t){t&&(clearTimeout(this._durationTimeoutId),e>0&&(this._durationTimeoutId=setTimeout(()=>this.close(),e)))}_updateShadyButtonStyles(){window.ShadyCSS&&!this.__buttonStylesPending&&(customElements.whenDefined("vaadin-button").then(()=>{Array.from(this._card.querySelectorAll("*")).filter(e=>e instanceof customElements.get("vaadin-button")).forEach(e=>{const t=["--_lumo-button-color","--_lumo-button-background-color","--_lumo-button-primary-color","--_lumo-button-primary-background-color"].reduce((e,t)=>{const i=window.ShadyCSS.getComputedStyleValue(this._card,t);return i&&(e[t]=i),e},{});e.updateStyles(t)}),this.__buttonStylesPending=!1}),this.__buttonStylesPending=!0)}}customElements.define(ar.is,ar),customElements.define(lr.is,lr),customElements.define(dr.is,dr);const cr=document.createElement("template");cr.innerHTML='<dom-module id="lumo-vertical-layout" theme-for="vaadin-vertical-layout">\n  <template>\n    <style include="lumo-ordered-layout">\n      :host([theme~="spacing-xs"]) ::slotted(*) {\n        margin-top: var(--lumo-space-xs);\n      }\n\n      :host([theme~="spacing-s"]) ::slotted(*) {\n        margin-top: var(--lumo-space-s);\n      }\n\n      :host([theme~="spacing"]) ::slotted(*) {\n        margin-top: var(--lumo-space-m);\n      }\n\n      :host([theme~="spacing-l"]) ::slotted(*) {\n        margin-top: var(--lumo-space-l);\n      }\n\n      :host([theme~="spacing-xl"]) ::slotted(*) {\n        margin-top: var(--lumo-space-xl);\n      }\n\n      /*\n        Compensate for the first item margin, so that there is no gap around\n        the layout itself.\n       */\n       :host([theme~="spacing-xs"])::before {\n         content: "";\n         margin-top: calc(var(--lumo-space-xs) * -1);\n       }\n\n       :host([theme~="spacing-s"])::before {\n         content: "";\n         margin-top: calc(var(--lumo-space-s) * -1);\n       }\n\n      :host([theme~="spacing"])::before {\n        content: "";\n        margin-top: calc(var(--lumo-space-m) * -1);\n      }\n\n      :host([theme~="spacing-l"])::before {\n        content: "";\n        margin-top: calc(var(--lumo-space-l) * -1);\n      }\n\n      :host([theme~="spacing-xl"])::before {\n        content: "";\n        margin-top: calc(var(--lumo-space-xl) * -1);\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(cr.content);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class hr extends(Co(Ys(Ps))){static get template(){return Is`
    <style>
      :host {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        box-sizing: border-box;
      }

      :host([hidden]) {
        display: none !important;
      }

      /* Theme variations */
      :host([theme~="margin"]) {
        margin: 1em;
      }

      :host([theme~="padding"]) {
        padding: 1em;
      }

      :host([theme~="spacing"]) ::slotted(*) {
        margin-top: 1em;
      }

      /*
        Compensate for the first item margin, so that there is no gap around
        the layout itself.
       */
      :host([theme~="spacing"])::before {
        content: "";
        margin-top: -1em;
      }
    </style>

    <slot></slot>
`}static get is(){return"vaadin-vertical-layout"}static get version(){return"1.1.0"}}customElements.define(hr.is,hr);class ur extends Ps{static get template(){return Is`
             <style include="shared-styles">
                :host {
                    display: block;
                    height: 100%;
                }
            </style>
<vaadin-vertical-layout style="width: 100vw; height: 60px; background: #00C6FF; margin: -1em">
 <span style="color: white; font-weight: bold; font-family: 'Helvetica Neue'; font-size: 24px; padding: 10px">Finding Path</span>
</vaadin-vertical-layout>
`}static get is(){return"nav-bar"}static get properties(){return{}}}customElements.define(ur.is,ur);const pr=document.createElement("div");pr.innerHTML='<custom-style><style include="lumo-color lumo-typography"></style></custom-style>',document.head.insertBefore(pr.firstElementChild,document.head.firstChild),function(e){const t=document.createElement("template");t.innerHTML=e,document.head.appendChild(t.content)}(`<custom-style><style>${n.a}</style></custom-style>`)}});