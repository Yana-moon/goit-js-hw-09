!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var i=r("6JpON");function u(n,t){(function(e,n){return new Promise((function(t,o){var r=Math.random()>.3;setTimeout((function(){r?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))})(n,t).then((function(n){!function(n,t){e(i).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))}(n.position,n.delay)})).catch((function(n){!function(n,t){e(i).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))}(n.position,n.delay)}))}document.querySelector(".form").addEventListener("submit",(function(n){n.preventDefault();var t=n.currentTarget.elements,o=t.delay,r=t.step,a=t.amount;if(o.value<=0||r.value<0||a.value<0)return e(i).Notify.failure("Please enter a value greater than zero",{width:"300px"});for(var l=0;l<a.value;l+=1){var f=l*Number(r.value)+Number(o.value);u(l+1,f)}}))}();
//# sourceMappingURL=03-promises.7ebbab8b.js.map