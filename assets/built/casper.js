!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=15)}([function(t,e,n){t.exports=n(8)},function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e){function n(t,e,n,r,o,i,l){try{var a=t[i](l),u=a.value}catch(t){return void n(t)}a.done?e(u):Promise.resolve(u).then(r,o)}t.exports=function(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var l=t.apply(e,r);function a(t){n(l,o,i,a,u,"next",t)}function u(t){n(l,o,i,a,u,"throw",t)}a(void 0)}))}}},function(t,e,n){var r=n(9),o=n(10),i=n(11),l=n(13);t.exports=function(t,e){return r(t)||o(t,e)||i(t,e)||l()}},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){!function(t,e){e.addEventListener("DOMContentLoaded",(function(){e.querySelectorAll(".kg-gallery-image img").forEach((function(t){var e=t.closest(".kg-gallery-image"),n=t.attributes.width.value/t.attributes.height.value;e.style.flex=n+" 1 0%"}))}))}(window,document)},function(t,e){var n=document.querySelector("link[rel=next]"),r=document.querySelector(".post-feed");if(n&&r){var o=function(){if(404===this.status)return window.removeEventListener("scroll",a),void window.removeEventListener("resize",u);this.response.querySelectorAll(".post-card").forEach((function(t){r.appendChild(document.importNode(t,!0))}));var t=this.response.querySelector("link[rel=next]");t?n.href=t.href:(window.removeEventListener("scroll",a),window.removeEventListener("resize",u)),d=document.documentElement.scrollHeight,s=!1,f=!1},i=function(){if(!f)if(_+p<=d-c)s=!1;else{f=!0;var t=new window.XMLHttpRequest;t.responseType="document",t.addEventListener("load",o),t.open("GET",n.href),t.send(null)}},l=function(){s||window.requestAnimationFrame(i),s=!0},a=function(){_=window.scrollY,l()},u=function(){p=window.innerHeight,d=document.documentElement.scrollHeight,l()},c=300,s=!1,f=!1,_=window.scrollY,p=window.innerHeight,d=document.documentElement.scrollHeight;window.addEventListener("scroll",a,{passive:!0}),window.addEventListener("resize",u),l()}},function(t,e){!function(t){"use strict";t.fn.fitVids=function(e){var n={customSelector:null,ignore:null};if(!document.getElementById("fit-vids-style")){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("div");o.innerHTML='<p>x</p><style id="fit-vids-style">.fluid-width-video-container{flex-grow: 1;width:100%;}.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>',r.appendChild(o.childNodes[1])}return e&&t.extend(n,e),this.each((function(){var e=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]',"object","embed"];n.customSelector&&e.push(n.customSelector);var r=".fitvidsignore";n.ignore&&(r=r+", "+n.ignore);var o=t(this).find(e.join(","));(o=(o=o.not("object object")).not(r)).each((function(){var e=t(this);if(!(e.parents(r).length>0||"embed"===this.tagName.toLowerCase()&&e.parent("object").length||e.parent(".fluid-width-video-wrapper").length)){e.css("height")||e.css("width")||!isNaN(e.attr("height"))&&!isNaN(e.attr("width"))||(e.attr("height",9),e.attr("width",16));var n=("object"===this.tagName.toLowerCase()||e.attr("height")&&!isNaN(parseInt(e.attr("height"),10))?parseInt(e.attr("height"),10):e.height())/(isNaN(parseInt(e.attr("width"),10))?e.width():parseInt(e.attr("width"),10));if(!e.attr("name")){var o="fitvid"+t.fn.fitVids._count;e.attr("name",o),t.fn.fitVids._count++}e.wrap('<div class="fluid-width-video-container"><div class="fluid-width-video-wrapper"></div></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*n+"%"),e.removeAttr("height").removeAttr("width")}}))}))},t.fn.fitVids._count=0}(window.jQuery||window.Zepto)},function(t,e,n){var r=function(t){"use strict";var e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",l=r.toStringTag||"@@toStringTag";function a(t,e,n,r){var o=e&&e.prototype instanceof s?e:s,i=Object.create(o.prototype),l=new x(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return E()}for(n.method=o,n.arg=i;;){var l=n.delegate;if(l){var a=g(l,n);if(a){if(a===c)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=u(t,e,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===c)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}(t,n,l),i}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=a;var c={};function s(){}function f(){}function _(){}var p={};p[o]=function(){return this};var d=Object.getPrototypeOf,h=d&&d(d(k([])));h&&h!==e&&n.call(h,o)&&(p=h);var v=_.prototype=s.prototype=Object.create(p);function m(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function y(t,e){var r;this._invoke=function(o,i){function l(){return new e((function(r,l){!function r(o,i,l,a){var c=u(t[o],t,i);if("throw"!==c.type){var s=c.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,l,a)}),(function(t){r("throw",t,l,a)})):e.resolve(f).then((function(t){s.value=t,l(s)}),(function(t){return r("throw",t,l,a)}))}a(c.arg)}(o,i,r,l)}))}return r=r?r.then(l,l):l()}}function g(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,g(t,e),"throw"===e.method))return c;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return c}var r=u(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,c;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,c):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,c)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function b(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function k(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:E}}function E(){return{value:void 0,done:!0}}return f.prototype=v.constructor=_,_.constructor=f,_[l]=f.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,l in t||(t[l]="GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},m(y.prototype),y.prototype[i]=function(){return this},t.AsyncIterator=y,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var l=new y(a(e,n,r,o),i);return t.isGeneratorFunction(n)?l:l.next().then((function(t){return t.done?t.value:l.next()}))},m(v),v[l]="Generator",v[o]=function(){return this},v.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=k,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(b),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return l.type="throw",l.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],l=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var a=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(a&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var l=i?i.completion:{};return l.type=t,l.arg=e,i?(this.method="next",this.next=i.finallyLoc,c):this.complete(l)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),c},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),b(n),c}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;b(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:k(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),c}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}},function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},function(t,e){t.exports=function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var l,a=t[Symbol.iterator]();!(r=(l=a.next()).done)&&(n.push(l.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}}},function(t,e,n){var r=n(12);t.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(t,e){!function(t,e){t.Casper||(t.Casper={}),t.Casper.stickyNavTitle=function(n){var r=e.querySelector(n.navSelector),o=e.querySelector(n.titleSelector),i=t.scrollY,l=!1;function a(){var e=o.getBoundingClientRect().top+t.scrollY,a=o.offsetHeight+35;i>=e+a?r.classList.add(n.activeClass):r.classList.remove(n.activeClass),l=!1}t.addEventListener("scroll",(function(){i=t.scrollY,function(){l||requestAnimationFrame(a);l=!0}()}),{passive:!0}),a()}}(window,document)},function(t,e,n){"use strict";n.r(e);n(5),n(6),n(7);var r,o,i,l,a,u,c=n(0),s=n.n(c),f=n(2),_=n.n(f),p=n(3),d=n.n(p),h={},v=[],m=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function y(t,e){for(var n in e)t[n]=e[n];return t}function g(t){var e=t.parentNode;e&&e.removeChild(t)}function w(t,e,n){var r,o=arguments,i={};for(r in e)"key"!==r&&"ref"!==r&&(i[r]=e[r]);if(arguments.length>3)for(n=[n],r=3;r<arguments.length;r++)n.push(o[r]);if(null!=n&&(i.children=n),"function"==typeof t&&null!=t.defaultProps)for(r in t.defaultProps)void 0===i[r]&&(i[r]=t.defaultProps[r]);return b(t,i,e&&e.key,e&&e.ref,null)}function b(t,e,n,o,i){var l={type:t,props:e,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:i};return null==i&&(l.__v=l),r.vnode&&r.vnode(l),l}function x(t){return t.children}function k(t,e){this.props=t,this.context=e}function E(t,e){if(null==e)return t.__?E(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e)return n.__e;return"function"==typeof t.type?E(t):null}function L(t){var e,n;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e){t.__e=t.__c.base=n.__e;break}return L(t)}}function S(t){(!t.__d&&(t.__d=!0)&&o.push(t)&&!i++||a!==r.debounceRendering)&&((a=r.debounceRendering)||l)(C)}function C(){for(var t;i=o.length;)t=o.sort((function(t,e){return t.__v.__b-e.__v.__b})),o=[],t.some((function(t){var e,n,r,o,i,l,a;t.__d&&(l=(i=(e=t).__v).__e,(a=e.__P)&&(n=[],(r=y({},i)).__v=r,o=N(a,i,r,e.__n,void 0!==a.ownerSVGElement,null,n,null==l?E(i):l),A(n,i),o!=l&&L(i)))}))}function j(t,e,n,r,o,i,l,a,u,c){var s,f,_,p,d,m,y,w,k,L=r&&r.__k||v,S=L.length;for(u==h&&(u=null!=l?l[0]:S?E(r,0):null),n.__k=[],s=0;s<e.length;s++)if(null!=(p=n.__k[s]=null==(p=e[s])||"boolean"==typeof p?null:"string"==typeof p||"number"==typeof p?b(null,p,null,null,p):Array.isArray(p)?b(x,{children:p},null,null,null):null!=p.__e||null!=p.__c?b(p.type,p.props,p.key,null,p.__v):p)){if(p.__=n,p.__b=n.__b+1,null===(_=L[s])||_&&p.key==_.key&&p.type===_.type)L[s]=void 0;else for(f=0;f<S;f++){if((_=L[f])&&p.key==_.key&&p.type===_.type){L[f]=void 0;break}_=null}if(d=N(t,p,_=_||h,o,i,l,a,u,c),(f=p.ref)&&_.ref!=f&&(w||(w=[]),_.ref&&w.push(_.ref,null,p),w.push(f,p.__c||d,p)),null!=d){if(null==y&&(y=d),k=void 0,void 0!==p.__d)k=p.__d,p.__d=void 0;else if(l==_||d!=u||null==d.parentNode){t:if(null==u||u.parentNode!==t)t.appendChild(d),k=null;else{for(m=u,f=0;(m=m.nextSibling)&&f<S;f+=2)if(m==d)break t;t.insertBefore(d,u),k=u}"option"==n.type&&(t.value="")}u=void 0!==k?k:d.nextSibling,"function"==typeof n.type&&(n.__d=u)}else u&&_.__e==u&&u.parentNode!=t&&(u=E(_))}if(n.__e=y,null!=l&&"function"!=typeof n.type)for(s=l.length;s--;)null!=l[s]&&g(l[s]);for(s=S;s--;)null!=L[s]&&R(L[s],L[s]);if(w)for(s=0;s<w.length;s++)D(w[s],w[++s],w[++s])}function T(t,e,n){"-"===e[0]?t.setProperty(e,n):t[e]="number"==typeof n&&!1===m.test(e)?n+"px":null==n?"":n}function O(t,e,n,r,o){var i,l,a,u,c;if(o?"className"===e&&(e="class"):"class"===e&&(e="className"),"style"===e)if(i=t.style,"string"==typeof n)i.cssText=n;else{if("string"==typeof r&&(i.cssText="",r=null),r)for(u in r)n&&u in n||T(i,u,"");if(n)for(c in n)r&&n[c]===r[c]||T(i,c,n[c])}else"o"===e[0]&&"n"===e[1]?(l=e!==(e=e.replace(/Capture$/,"")),a=e.toLowerCase(),e=(a in t?a:e).slice(2),n?(r||t.addEventListener(e,P,l),(t.l||(t.l={}))[e]=n):t.removeEventListener(e,P,l)):"list"!==e&&"tagName"!==e&&"form"!==e&&"type"!==e&&"size"!==e&&!o&&e in t?t[e]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==e&&(e!==(e=e.replace(/^xlink:?/,""))?null==n||!1===n?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(e)?t.removeAttribute(e):t.setAttribute(e,n))}function P(t){this.l[t.type](r.event?r.event(t):t)}function N(t,e,n,o,i,l,a,u,c){var s,f,_,p,d,h,v,m,g,w,b,E=e.type;if(void 0!==e.constructor)return null;(s=r.__b)&&s(e);try{t:if("function"==typeof E){if(m=e.props,g=(s=E.contextType)&&o[s.__c],w=s?g?g.props.value:s.__:o,n.__c?v=(f=e.__c=n.__c).__=f.__E:("prototype"in E&&E.prototype.render?e.__c=f=new E(m,w):(e.__c=f=new k(m,w),f.constructor=E,f.render=I),g&&g.sub(f),f.props=m,f.state||(f.state={}),f.context=w,f.__n=o,_=f.__d=!0,f.__h=[]),null==f.__s&&(f.__s=f.state),null!=E.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=y({},f.__s)),y(f.__s,E.getDerivedStateFromProps(m,f.__s))),p=f.props,d=f.state,_)null==E.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(null==E.getDerivedStateFromProps&&m!==p&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(m,w),!f.__e&&null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(m,f.__s,w)||e.__v===n.__v){for(f.props=m,f.state=f.__s,e.__v!==n.__v&&(f.__d=!1),f.__v=e,e.__e=n.__e,e.__k=n.__k,f.__h.length&&a.push(f),s=0;s<e.__k.length;s++)e.__k[s]&&(e.__k[s].__=e);break t}null!=f.componentWillUpdate&&f.componentWillUpdate(m,f.__s,w),null!=f.componentDidUpdate&&f.__h.push((function(){f.componentDidUpdate(p,d,h)}))}f.context=w,f.props=m,f.state=f.__s,(s=r.__r)&&s(e),f.__d=!1,f.__v=e,f.__P=t,s=f.render(f.props,f.state,f.context),null!=f.getChildContext&&(o=y(y({},o),f.getChildContext())),_||null==f.getSnapshotBeforeUpdate||(h=f.getSnapshotBeforeUpdate(p,d)),b=null!=s&&s.type==x&&null==s.key?s.props.children:s,j(t,Array.isArray(b)?b:[b],e,n,o,i,l,a,u,c),f.base=e.__e,f.__h.length&&a.push(f),v&&(f.__E=f.__=null),f.__e=!1}else null==l&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=H(n.__e,e,n,o,i,l,a,c);(s=r.diffed)&&s(e)}catch(t){e.__v=null,r.__e(t,e,n)}return e.__e}function A(t,e){r.__c&&r.__c(e,t),t.some((function(e){try{t=e.__h,e.__h=[],t.some((function(t){t.call(e)}))}catch(t){r.__e(t,e.__v)}}))}function H(t,e,n,r,o,i,l,a){var u,c,s,f,_,p=n.props,d=e.props;if(o="svg"===e.type||o,null!=i)for(u=0;u<i.length;u++)if(null!=(c=i[u])&&((null===e.type?3===c.nodeType:c.localName===e.type)||t==c)){t=c,i[u]=null;break}if(null==t){if(null===e.type)return document.createTextNode(d);t=o?document.createElementNS("http://www.w3.org/2000/svg",e.type):document.createElement(e.type,d.is&&{is:d.is}),i=null,a=!1}if(null===e.type)p!==d&&t.data!=d&&(t.data=d);else{if(null!=i&&(i=v.slice.call(t.childNodes)),s=(p=n.props||h).dangerouslySetInnerHTML,f=d.dangerouslySetInnerHTML,!a){if(null!=i)for(p={},_=0;_<t.attributes.length;_++)p[t.attributes[_].name]=t.attributes[_].value;(f||s)&&(f&&s&&f.__html==s.__html||(t.innerHTML=f&&f.__html||""))}(function(t,e,n,r,o){var i;for(i in n)"children"===i||"key"===i||i in e||O(t,i,null,n[i],r);for(i in e)o&&"function"!=typeof e[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===e[i]||O(t,i,e[i],n[i],r)})(t,d,p,o,a),f?e.__k=[]:(u=e.props.children,j(t,Array.isArray(u)?u:[u],e,n,r,"foreignObject"!==e.type&&o,i,l,h,a)),a||("value"in d&&void 0!==(u=d.value)&&u!==t.value&&O(t,"value",u,p.value,!1),"checked"in d&&void 0!==(u=d.checked)&&u!==t.checked&&O(t,"checked",u,p.checked,!1))}return t}function D(t,e,n){try{"function"==typeof t?t(e):t.current=e}catch(t){r.__e(t,n)}}function R(t,e,n){var o,i,l;if(r.unmount&&r.unmount(t),(o=t.ref)&&(o.current&&o.current!==t.__e||D(o,null,e)),n||"function"==typeof t.type||(n=null!=(i=t.__e)),t.__e=t.__d=void 0,null!=(o=t.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(t){r.__e(t,e)}o.base=o.__P=null}if(o=t.__k)for(l=0;l<o.length;l++)o[l]&&R(o[l],e,n);null!=i&&g(i)}function I(t,e,n){return this.constructor(t,n)}function M(t,e,n){var o,i,l;r.__&&r.__(t,e),i=(o=n===u)?null:n&&n.__k||e.__k,t=w(x,null,[t]),l=[],N(e,(o?e:n||e).__k=t,i||h,h,void 0!==e.ownerSVGElement,n&&!o?[n]:i?null:e.childNodes.length?v.slice.call(e.childNodes):null,l,n||h,o),A(l,t)}r={__e:function(t,e){for(var n,r;e=e.__;)if((n=e.__c)&&!n.__)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError&&(r=!0,n.setState(n.constructor.getDerivedStateFromError(t))),null!=n.componentDidCatch&&(r=!0,n.componentDidCatch(t)),r)return S(n.__E=n)}catch(e){t=e}throw t}},k.prototype.setState=function(t,e){var n;n=this.__s!==this.state?this.__s:this.__s=y({},this.state),"function"==typeof t&&(t=t(n,this.props)),t&&y(n,t),null!=t&&this.__v&&(e&&this.__h.push(e),S(this))},k.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),S(this))},k.prototype.render=x,o=[],i=0,l="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,u=h;var F,G,B,q=0,U=[],W=r.__r,Y=r.diffed,z=r.__c,V=r.unmount;function $(t,e){r.__h&&r.__h(G,t,q||e),q=0;var n=G.__H||(G.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({}),n.__[t]}function K(t){return q=1,function(t,e,n){var r=$(F++,2);return r.t=t,r.__c||(r.__c=G,r.__=[n?n(e):tt(void 0,e),function(t){var e=r.t(r.__[0],t);r.__[0]!==e&&(r.__[0]=e,r.__c.setState({}))}]),r.__}(tt,t)}function Q(){U.some((function(t){if(t.__P)try{t.__H.__h.forEach(X),t.__H.__h.forEach(Z),t.__H.__h=[]}catch(e){return t.__H.__h=[],r.__e(e,t.__v),!0}})),U=[]}function X(t){"function"==typeof t.u&&t.u()}function Z(t){t.u=t.__()}function J(t,e){return!t||e.some((function(e,n){return e!==t[n]}))}function tt(t,e){return"function"==typeof e?e(t):e}r.__r=function(t){W&&W(t),F=0;var e=(G=t.__c).__H;e&&(e.__h.forEach(X),e.__h.forEach(Z),e.__h=[])},r.diffed=function(t){Y&&Y(t);var e=t.__c;e&&e.__H&&e.__H.__h.length&&(1!==U.push(e)&&B===r.requestAnimationFrame||((B=r.requestAnimationFrame)||function(t){var e,n=function(){clearTimeout(r),cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100);"undefined"!=typeof window&&(e=requestAnimationFrame(n))})(Q))},r.__c=function(t,e){e.some((function(t){try{t.__h.forEach(X),t.__h=t.__h.filter((function(t){return!t.__||Z(t)}))}catch(n){e.some((function(t){t.__h&&(t.__h=[])})),e=[],r.__e(n,t.__v)}})),z&&z(t,e)},r.unmount=function(t){V&&V(t);var e=t.__c;if(e&&e.__H)try{e.__H.__.forEach(X)}catch(t){r.__e(t,e.__v)}};var et=n(1),nt=n.n(et);function rt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function ot(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?rt(Object(n),!0).forEach((function(e){nt()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):rt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var it=function(t){var e=t.alignItems,n=void 0===e?"flex-start":e,r=t.backgroundColor,o=void 0===r?"none":r,i=t.borderRadius,l=void 0===i?"0px":i,a=t.children,u=t.display,c=void 0===u?"flex":u,s=t.flex,f=void 0===s?"0 0 auto":s,_=t.flexBasis,p=void 0===_?"auto":_,d=t.flexDirection,h=void 0===d?"row":d,v=t.flexGrow,m=void 0===v?0:v,y=t.flexShrink,g=void 0===y?0:y,b=t.height,x=void 0===b?"auto":b,k=t.justifyContent,E=void 0===k?"flex-start":k,L=t.marginBottom,S=void 0===L?0:L,C=t.marginLeft,j=void 0===C?0:C,T=t.marginTop,O=void 0===T?0:T,P=t.overflow,N=void 0===P?"auto":P,A=t.padding,H=t.paddingBottom,D=t.paddingLeft,R=t.paddingRight,I=t.paddingTop,M=t.position,F=void 0===M?"realtive":M,G=t.style,B=void 0===G?{}:G,q=t.width;return w("div",{style:ot({alignItems:n,backgroundColor:o,borderRadius:l,display:c,flex:f,flexBasis:p,flexDirection:h,flexGrow:m,flexShrink:g,height:x,justifyContent:E,marginBottom:S,marginLeft:j,marginTop:O,overflow:N,padding:A,paddingBottom:H,paddingLeft:D,paddingRight:R,paddingTop:I,position:F,width:void 0===q?"auto":q},B)},a)},lt=function(t){var e=t.style;return w("img",{src:"/blog/assets/images/send.svg",style:void 0===e?{}:e})},at=function(t){var e=t.style;return w("img",{src:"/blog/assets/images/static.svg",style:void 0===e?{}:e})},ut={alignItems:"center",backgroundColor:"#2f46b2",borderRadius:"32px",color:"white",display:"flex",height:"32px",justifyContent:"center",outlined:"none",width:"32px"},ct={border:0,maxWidth:"100%",minWidth:150},st={lineHeight:1.25,margin:0},ft=document.getElementById("preact-form-subscribe"),_t=w((function(){var t,e,n,o=K(""),i=d()(o,2),l=i[0],a=i[1],u=K(!1),c=d()(u,2),f=c[0],p=c[1],h=K(!1),v=d()(h,2),m=v[0],y=v[1],g=function(){var t=_()(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(y(!0),t.prev=1,l.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){t.next=4;break}throw new Error("Введите корректный email адрес");case 4:return(e=new FormData).append("email",l),t.next=8,fetch("https://api.noty.one/subscribe/16/551/default/email/true/",{body:e,method:"POST"});case 8:200===t.sent.status&&p(!0),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),alert(t.t0.message);case 15:y(!1);case 16:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(){return t.apply(this,arguments)}}();return t=function(){document.getElementById("preact-form-subscribe").style="width: 100%;"},e=[],n=$(F++,3),!r.__s&&J(n.__H,e)&&(n.__=t,n.__H=e,G.__H.__h.push(n)),w(it,{backgroundColor:"#F2F5FA",display:"flex",flexDirection:"row",flexWrap:"nowrap",height:220,marginBottom:20,marginTop:20,paddingRight:10,overflow:"visible",width:"100%"},w(it,{alignItems:"center",height:"100%",justifyContent:"center",flexBasis:"0",flexGrow:"1",flexShrink:"0",overflow:"visible",position:"relative"},w(f?lt:at,{style:{maxHeight:"calc(100% + 40px)",width:"calc(100% - 100px)"}})),w(it,{display:"flex",height:"100%",justifyContent:"center",flexBasis:"0",flexGrow:"1",flexDirection:"column",flexShrink:"0"},w(it,{display:"flex",flexDirection:"column",flexGrow:0},w("p",{style:st},"Каждое воскресенье"),w("p",{style:st},"узнавай о новых статьях"),w("p",{style:st},"из рассылки главреда")),w(it,{alignItems:"center",backgroundColor:f?"rgba(255,255,255,0)":"rgba(255,255,255,1)",borderRadius:55,flexDirection:"row",flexGrow:0,height:55,justifyContent:"center",paddingLeft:20,paddingRight:20,marginTop:30,width:"100%"},w(it,{alignItems:"center",display:"flex",flexGrow:1,flexShrink:1,justifyContent:"center"},f?w("p",{style:st},"Спасибо за подписку"):w("input",{onChange:function(t){a(t.target.value)},placeholder:"Введите ваш email",style:ct,type:"text",value:l})),w(it,{display:"flex",flexGrow:0,marginLeft:10},f?w("span",{onClick:g,style:ut},"✓"):w("button",{disabled:m,onClick:g,style:ut},"⭢")))))}),null);ft&&M(_t,ft);var pt=n(4),dt=n.n(pt);!function(t,e){t.Search=function n(r){var o=this,i=r.input,l=r.showResult,a=r.contentApiKey,u=r.homeUrl,c=void 0===u?t.location.origin:u,f=r.resultTemplate,p=void 0===f?'<ul style="list-style: none;">\n    <p class="modal-overlay-description" style="margin-top: 20px;">Найдено совпадений: ##resultCount</p>\n    ##results\n</ul>':f,d=r.singleResultTemplate,h=void 0===d?'<li><a href="##url">##title</a></li>':d,v=r.excerpt_length,m=void 0===v?15:v,y=r.time_format,g=void 0===y?"MMMM Do YYYY":y;dt()(this,n),nt()(this,"resultCount",0),nt()(this,"allReplace",(function(t,e){for(var n in e)t=t.replace(new RegExp("##".concat(n),"g"),e[n]);return t})),nt()(this,"doSearch",function(){var t=_()(s.a.mark((function t(e){var n,r,i;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o.searchTerm=e.target.value,t.next=3,o.api.posts.browse({fields:"title,url",limit:500});case 3:n=t.sent,r=n.filter((function(t){return t.title.toLowerCase().includes(o.searchTerm.toLowerCase())})).slice(0,10),o.resultCount=r.length,o.searchTerm.length<=2?o.showResult.innerHTML="":(i=r.map((function(t){var e={};if(t.title&&(e.title=t.title),t.title&&(e.url=t.url),t.primary_tag&&(e.primary_tag_name=t.primary_tag.name,e.primary_tag_url=t.primary_tag.url),t.primary_author){var n=t.primary_author,r=n.name,i=n.profile_image,l=n.url;e.primary_author_name=r,e.primary_author_url=l,e.primary_author_avater=i}if(t.feature_image&&(e.feature_image=t.feature_image),t.html){var a=DOMPurify.sanitize(t.html,{ALLOWED_TAGS:[""]}).split(" ").slice(0,o.excerpt_length).join(" ");e.excerpt=a}return e.resultCount=o.resultCount,o.allReplace(o.singleResultTemplate,e)})).join(" "),o.showResult.innerHTML=void 0!==o.resultTemplate?o.resultTemplate.replace("##results",i).replace("##resultCount",o.resultCount):i);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),this.input=e.querySelector(i),this.homeUrl=c,this.contentApiKey=a,this.resultTemplate=p,this.singleResultTemplate=h,this.showResult=e.querySelector(l),this.excerpt_length=m,this.time_format=g,this.input.addEventListener("keyup",this.doSearch),this.api=new GhostContentAPI({url:this.homeUrl,key:this.contentApiKey,version:"v3"})}}(window,document);n(14)}]);
//# sourceMappingURL=casper.js.map