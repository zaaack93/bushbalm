!function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=108)}({0:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isScriptLoaded=t.markScriptLoaded=void 0;t.markScriptLoaded=function(e){window.POINTER=window.POINTER||{},window.POINTER.loadedScripts=window.POINTER.loadedScripts||{},window.POINTER.loadedScripts[e]=!0};t.isScriptLoaded=function(e){var t,r;return null===(t=window.POINTER)||void 0===t||null===(r=t.loadedScripts)||void 0===r?void 0:r[e]}},108:function(e,t,r){"use strict";r(109);var o=r(0);var n=function(){document.querySelectorAll("[data-ig-story-feed]").forEach((function(e){var t=e.querySelector("[data-ig-story-feed-slider]");return new Swiper(t,{freeMode:!0,spaceBetween:24,slidesPerView:"auto",mousewheel:{invert:!1,forceToAxis:!0},breakpoints:{750:{spaceBetween:80}}})}))};(0,o.isScriptLoaded)("ig-story-feed")||(document.addEventListener("DOMContentLoaded",n),document.addEventListener("shopify:section:load",n),(0,o.markScriptLoaded)("ig-story-feed"))},109:function(e,t,r){"use strict";r.r(t)}});