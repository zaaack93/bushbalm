!function(t){var e={};function i(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=175)}({0:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.isScriptLoaded=e.markScriptLoaded=void 0;e.markScriptLoaded=function(t){window.POINTER=window.POINTER||{},window.POINTER.loadedScripts=window.POINTER.loadedScripts||{},window.POINTER.loadedScripts[t]=!0};e.isScriptLoaded=function(t){var e,i;return null===(e=window.POINTER)||void 0===e||null===(i=e.loadedScripts)||void 0===i?void 0:i[t]}},175:function(t,e,i){"use strict";i(176);var n=i(0),r=function(){var t;(t=document.querySelectorAll("[data-testimonials-carousel]")).length&&t.forEach((function(t){var e,i=t.closest("[data-testimonials]"),n=i.querySelector("[data-testimonials-carousel-prev]"),r=i.querySelector("[data-testimonials-carousel-next]"),a=i.querySelector("[data-testimonial-content]"),o=i.querySelector("[data-testimonial-name]"),d=i.querySelector("[data-testimonial-cta]"),s=i.querySelector("[data-testimonial-image]"),l=new Swiper(t,{loop:!0,allowTouchMove:!1,centeredSlides:!0,spaceBetween:24,slidesPerView:"auto",updateOnWindowResize:!1,navigation:{nextEl:r,prevEl:n}});function u(){t.classList.add("resizing"),l.update(),t.classList.remove("resizing")}return window.addEventListener("resize",(function(){clearTimeout(e),e=setTimeout(u,100)})),l.on("slideChangeTransitionStart",(function(){a.classList.add("loading"),o.classList.add("loading"),s.classList.add("loading")})),l.on("slideChangeTransitionEnd",(function(){var e=t.querySelector(".swiper-slide-active");a.classList.remove("loading"),o.classList.remove("loading"),s.classList.remove("loading"),a.innerHTML=e.getAttribute("data-content"),o.innerHTML=e.getAttribute("data-name"),d.innerHTML=e.getAttribute("data-cta-text"),d.setAttribute("href",e.getAttribute("data-cta-link")),d.setAttribute("title",e.getAttribute("data-cta-text")),s.setAttribute("src",e.getAttribute("data-image")),s.setAttribute("alt",e.getAttribute("data-cta-text"))})),l}))};(0,n.isScriptLoaded)("testimonials")||(document.addEventListener("DOMContentLoaded",r),document.addEventListener("shopify:section:load",r),(0,n.markScriptLoaded)("testimonials"))},176:function(t,e,i){"use strict";i.r(e)}});