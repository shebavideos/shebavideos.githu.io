(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{20:function(n,t){n.exports='<svg class="remove" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48"><path fill="#F44336" d="M42,37c0,2.762-2.238,5-5,5H11c-2.762,0-5-2.238-5-5V11c0-2.762,2.238-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFEBEE" d="M21.914 12.065H25.914V36.107H21.914z" transform="rotate(-134.999 23.914 24.086)"></path><path fill="#FFEBEE" d="M22.064 11.726H26.064V35.897H22.064z" transform="rotate(134.999 24.064 23.812)"></path></svg>'},22:function(n,t,e){"use strict";e.r(t);var r=e(2),o=e(20),i=e.n(o),a=e(1),c=e(4);function l(n){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function u(n,t){var e;if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(e=f(n))||t&&n&&"number"==typeof n.length){e&&(n=e);var r=0,o=function(){};return{s:o,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){e=n[Symbol.iterator]()},n:function(){var n=e.next();return a=n.done,n},e:function(n){c=!0,i=n},f:function(){try{a||null==e.return||e.return()}finally{if(c)throw i}}}}function d(n){return function(n){if(Array.isArray(n))return s(n)}(n)||function(n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}(n)||f(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(n,t){if(n){if("string"==typeof n)return s(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?s(n,t):void 0}}function s(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function p(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function h(n,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):t}function m(n){var t="function"==typeof Map?new Map:void 0;return(m=function(n){if(null===n||(e=n,-1===Function.toString.call(e).indexOf("[native code]")))return n;var e;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(n))return t.get(n);t.set(n,r)}function r(){return y(n,arguments,g(this).constructor)}return r.prototype=Object.create(n.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),b(r,n)})(n)}function y(n,t,e){return(y=v()?Reflect.construct:function(n,t,e){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(n,r));return e&&b(o,e.prototype),o}).apply(null,arguments)}function v(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}function b(n,t){return(b=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function g(n){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}var w=document.createElement("template");w.innerHTML="\n<style>\n    ".concat("\n    @font-face{\n        font-family: customFont;\n        src: url(".concat(r.a,');\n      } \n    * {\n        box-sizing: border-box;\n        margin: 0;\n        padding: 0;\n        color: #ffff;\n        font-family: \'Comic Neue\', cursive;\n    }\n    \n    .nextVideo {\n        max-width: 200px;\n        height: 140px;\n        background:black;\n        cursor:pointer;\n        display:grid;\n        grid-template-columns:repeat(12,auto);\n        grid-template-rows: repeat(12, auto);\n        border-radius:2px;\n        border:none;\n    }\n    \n    .nextVideo:hover{\n        border:1px solid white;\n    }\n    .nextVideo video {\n        grid-column:1/13;\n        grid-row:1/13;\n        width:100%;\n        height:100%;\n    }\n    .remove {\n        \n        z-index:2;\n        cursor:pointer;\n        grid-column: 12;\n        grid-row: 2/2;\n        height:35px;\n        width:35px;\n        \n    }\n    \n    .remove svg {\n        pointer-events:none;\n    }\n    .duration {\n        z-index:2;\n        width:100%;\n        grid-column:2/13;\n        grid-row: 11;\n        text-align:right;\n        font-size:0.75em;\n        background:#222;\n        padding:1px;\n        overflow:hidden;\n    }\n    \n    \n    #videoPlaylist{\n        margin:auto;\n        width:95%;\n        height:290px;\n        padding:10px;\n        display: grid;\n        grid-template-columns: repeat(2, 1fr);\n        grid-template-rows: repeat(50, 1fr);\n        gap: 8px;\n        overflow-y: auto; \n        scrollbar-width: thin;          /* "auto" or "thin"  */\n        scrollbar-color: #008CFF transparent;\n    }\n    #videoPlaylist::-webkit-scrollbar {\n        width: 12px;               /* width of the entire scrollbar */\n    }\n    #videoPlaylist::-webkit-scrollbar-track {\n        background: transparent;        /* color of the tracking area */\n    }\n    #videoPlaylist::-webkit-scrollbar-thumb {\n        \n        background-color: #008CFF;    /* color of the scroll thumb */\n        border-radius: 2px;       /* roundness of the scroll thumb */\n        border: 3px solid transparent;  /* creates padding around scroll thumb */\n    }\n    \n    \n    @media only screen and (min-width:520px){\n        #videoPlaylist{\n            width:90%;\n            height:400px;\n            grid-template-columns: repeat(3, 1fr);\n        }\n    }\n    @media only screen and (min-width:800px){\n        #videoPlaylist{\n            margin:auto;\n            width:90%;\n            height:450px;\n            grid-template-columns: repeat(4, 1fr);\n            \n        }\n    }\n    @media only screen and (min-width:900px){\n        #videoPlaylist{\n            width:200px;\n            grid-template-columns: repeat(1, 1fr);\n            \n        }\n    }\n    @media only screen and (min-width:1100px){\n        #videoPlaylist{\n            width:350px;\n            height:420px;\n\n        }\n    }\n    @media only screen and (min-width:1200px){\n        #videoPlaylist{\n            grid-template-columns: repeat(3,1fr);\n            width:500px;\n            height:450px;\n        \n        }\n    }\n    \n    '),'\n</style>\n<section id="videoPlaylist"> \n</section>\n');var x=function(n){!function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&b(n,t)}(s,n);var t,e,r,o,l,f=(t=s,e=v(),function(){var n,r=g(t);if(e){var o=g(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)});function s(){var n;return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(n=f.call(this)).attachShadow({mode:"open"}),n.shadowRoot.appendChild(w.content.cloneNode(!0)),n}return r=s,(o=[{key:"connectedCallback",value:function(){Object(a.c)(this.beforeDisplayingVideoToUi(this)),Object(c.c)(this.updateUI(this))}},{key:"beforeDisplayingVideoToUi",value:function(n){return function(){var t=Object(a.a)(),e=d(n.shadowRoot.querySelector("#videoPlaylist").children).map((function(n){return n.getAttribute("data-name")})),r=t.videos;if(e.length>0){var o,i=u(r);try{var c=function(){var n=o.value;e.includes(n.name)&&(r=r.filter((function(t){return t.name!==n.name})))};for(i.s();!(o=i.n()).done;)c()}catch(n){i.e(n)}finally{i.f()}n.displayVideo(r)}else n.displayVideo(r)}}},{key:"updateUI",value:function(n){return function(){var t=Object(a.a)(),e=n.shadowRoot.querySelector("#videoPlaylist"),r=d(e.children),o=r.map((function(n){return n.getAttribute("id")})),i=t.videos.map((function(n){return n.id}));if(o.length!==i.length){var c=o.filter((function(n){return!i.includes(n)}));c.length>0&&c.forEach((function(n){var t,o=u(r);try{for(o.s();!(t=o.n()).done;){var i=t.value;i.getAttribute("id")===n&&e.removeChild(i)}}catch(n){o.e(n)}finally{o.f()}}))}}}},{key:"displayVideo",value:function(n){var t,e=this.shadowRoot.querySelector("#videoPlaylist"),r=u(n);try{for(r.s();!(t=r.n()).done;){var o=t.value;e.appendChild(this.videoElement(o))}}catch(n){r.e(n)}finally{r.f()}}},{key:"videoElement",value:function(n){var t=this.shadowRoot,e=document.createElement("span");e.classList.add("remove"),e.innerHTML=i.a,e.onclick=function(e){e.stopImmediatePropagation(),t.querySelector("#videoPlaylist").removeChild(e.target.parentElement),Object(a.b)(n.id)};var r=document.createElement("div");r.classList.add("duration");var o=document.createElement("video");o.src=n.src,o.currentTime+=2,o.onloadedmetadata=function(){var n,t=Math.floor(o.duration/60),e=Math.floor(o.duration/60)>=60?Math.floor(o.duration/60%60):Math.floor(o.duration/60),i=Math.floor(o.duration-60*Math.floor(o.duration/60));i<10&&(i="0".concat(i)),e<10&&(e="0".concat(e)),t<10&&(t="0".concat(t)),t>60?(t=(t=Math.floor(Math.floor(o.duration/60)/60))<10?"0".concat(t):t,n="".concat(t,":").concat(e,":").concat(i)):t===e&&(n="".concat(e,":").concat(i)),r.textContent=n},o.oncontextmenu=function(n){n.preventDefault()};var l=document.createElement("article");return l.classList.add("nextVideo"),l.id=n.id,l.setAttribute("data-name",n.name),l.setAttribute("title",n.name),l.onclick=function(e){e.stopImmediatePropagation(),Object(c.d)(n.id),t.querySelector("#videoPlaylist").removeChild(e.target.parentElement),Object(a.b)(n.id)},[r,o,e].forEach((function(n){l.appendChild(n)})),l}}])&&p(r.prototype,o),l&&p(r,l),s}(m(HTMLElement));window.customElements.define("playlist-card",x);var E=document.createElement("playlist-card");t.default=E}}]);