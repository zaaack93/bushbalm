!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=35)}({35:function(e,t,n){"use strict";n(36),n(37)},36:function(e,t,n){"use strict";n.r(t)},37:function(e,t,n){"use strict";function o(){document.querySelectorAll("[data-article-share-button]").forEach((function(e){e.addEventListener("click",(function(t){t.stopImmediatePropagation(),t.preventDefault();var n=e.href.replace("[url]",window.location.href);window.open(n,"popup","width=600, height=600")}))})),document.querySelectorAll("[data-copy-link]").forEach((function(e){e.addEventListener("click",(function(){var t=document.querySelector("[data-link]");t.innerHTML=window.location.href,t.classList.remove("hide"),t.select(),t.setSelectionRange(0,99999),document.execCommand("copy"),t.classList.add("hide"),function(e){var t=e.textContent;e.classList.add("copy-link-button--copied"),e.textContent="Copied!",setTimeout((function(){e.classList.remove("copy-link-button--copied"),e.textContent=t}),800)}(e)}))})),document.querySelectorAll("[data-text-link]").forEach((function(e){var t,n=window.location.href,o=function(e){return"Android"===e?"?":"Apple"===e?"&":"?"}((t=navigator.userAgent||navigator.vendor||window.opera,/android/i.test(t)?"Android":/Mac|iPad|iPhone|iPod/.test(t)&&!window.MSStream?"Apple":"unknown")),r="sms:".concat(o,"body=").concat(n);e.href=r}))}document.addEventListener("DOMContentLoaded",(function(){o()}))}});