!function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=51)}({0:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isScriptLoaded=t.markScriptLoaded=void 0;t.markScriptLoaded=function(e){window.POINTER=window.POINTER||{},window.POINTER.loadedScripts=window.POINTER.loadedScripts||{},window.POINTER.loadedScripts[e]=!0};t.isScriptLoaded=function(e){var t,o;return null===(t=window.POINTER)||void 0===t||null===(o=t.loadedScripts)||void 0===o?void 0:o[e]}},51:function(e,t,o){"use strict";o(52);var r=o(0);var n=function(){document.querySelectorAll("[data-collection-hero-copy]").forEach((function(e){var t=e.querySelector("[data-collection-hero-copy-expand]");if(t){var o=e.querySelector("[data-collection-hero-copy-less]"),r=e.querySelector("[data-collection-hero-copy-more]");t.addEventListener("click",(function(){e.classList.add("collection-hero__copy--expanded"),t.setAttribute("aria-expanded",!0),o.setAttribute("aria-hidden",!0),r.setAttribute("aria-hidden",!1)}))}}))};(0,r.isScriptLoaded)("collection-hero")||(document.addEventListener("DOMContentLoaded",n),document.addEventListener("shopify:section:load",n),(0,r.markScriptLoaded)("collection-hero"))},52:function(e,t,o){"use strict";o.r(t)}});