!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=89)}({0:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isScriptLoaded=t.markScriptLoaded=void 0;t.markScriptLoaded=function(e){window.POINTER=window.POINTER||{},window.POINTER.loadedScripts=window.POINTER.loadedScripts||{},window.POINTER.loadedScripts[e]=!0};t.isScriptLoaded=function(e){var t,n;return null===(t=window.POINTER)||void 0===t||null===(n=t.loadedScripts)||void 0===n?void 0:n[e]}},89:function(e,t,n){"use strict";n(90);var o=n(0);var r=function(){document.querySelectorAll("[data-featured-collection-slider]").forEach((function(e){var t=null,n=e.querySelector("[ data-featured-collections-nav-prev]"),o=e.querySelector("[ data-featured-collections-nav-next]");function r(){if(window.matchMedia("(max-width: 749px)").matches&&null!==t)t.destroy(),t=null;else if(window.matchMedia("(min-width: 749px)").matches&&null===t){var r=function(){t.autoplay.stop()},i=function(){t.autoplay.start()};(t=new Swiper(e,{loop:!0,spaceBetween:24,slidesPerView:"auto",centeredSlides:!0,speed:1e3,autoplay:{delay:4e3},disableOnInteraction:!0,pauseOnMouseEnter:!0,keyboard:{enabled:!0},mousewheel:{invert:!1,forceToAxis:!0},navigation:{nextEl:o,prevEl:n},on:{init:function(){e.querySelectorAll("[data-featured-collection-slide]").forEach((function(e,n){e.addEventListener("focusin",(function(){t.slideTo(n)}),!0)}))}}})).init(),e.addEventListener("mouseenter",r),e.addEventListener("mouseleave",i),e.addEventListener("focusin",r),e.addEventListener("focusout",i)}}r(),window.addEventListener("resize",(function(){r()}))}))};(0,o.isScriptLoaded)("featured-collections")||(document.addEventListener("DOMContentLoaded",r),document.addEventListener("shopify:section:load",r),(0,o.markScriptLoaded)("featured-collections"))},90:function(e,t,n){"use strict";n.r(t)}});