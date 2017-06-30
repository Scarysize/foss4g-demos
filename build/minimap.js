!function(t){function e(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=28)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.mapboxgl,n=document.createElement("div");n.classList.add("map","container"),document.body.appendChild(n),e.accessToken="pk.eyJ1Ijoic2NhcnlzaXplIiwiYSI6ImNpcjR2ZWs4ODAwNDZoc25xMmRzM2JlcnQifQ.XmRVjMqDm9jUWw3eMYrrUw";var r=new e.Map({container:n,center:[0,0],zoom:1,style:"mapbox://styles/scarysize/cj318x12u00002qnqcawqy98r"});r.on("load",function(){return t(r)})}},function(t,e,n){"use strict";function r(t,e,n){var r=t.northeast.longitude,a=t.southwest.latitude,o=t.southwest.longitude,i=t.northeast.latitude;return[Math.abs(o-r)/n,Math.abs(i-a)/e]}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(){return{type:"FeatureCollection",features:arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]}}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=n(7),u=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(i),l=n(9),c=function(t){return t&&t.__esModule?t:{default:t}}(l),s={},f=function(){function t(){r(this,t)}return o(t,[{key:"queryData",value:function(t,e){var n=this,r=e.bbox,o=e.bounds,i=e.samplingFactor,u=e.zoom,l=t.map(function(t){var e=t.url,r=t.weatherParameter;return n._executeQuery(e,r)});return Promise.all(l).then(function(t){return(0,c.default)({grid:t,bbox:r},{bounds:o,zoom:u},i)}).then(a)}},{key:"_executeQuery",value:function(t,e){var n=this;return new Promise(function(r,a){n._fetchData(t).then(u.imageToBitmap).then(function(t){return{data:u.imageDataToPixels(t),height:t.height,width:t.width,weatherParameter:e}}).then(r).catch(function(t){return a(t)})})}},{key:"_fetchData",value:function(t){return s[t]?Promise.resolve(s[t]):new Promise(function(e,n){var r=new Image;r.crossOrigin="anonymous",r.addEventListener("error",n),r.addEventListener("load",function(){s[t]=r,e(r)}),r.src=t})}}]),t}();e.default=f},,function(t,e,n){(function(e){function n(t,e,n){function r(e){var n=g,r=p;return g=p=void 0,O=e,m=t.apply(r,n)}function o(t){return O=t,w=setTimeout(s,e),_?r(t):m}function i(t){var n=t-b,r=t-O,a=e-n;return P?x(a,y-r):a}function c(t){var n=t-b,r=t-O;return void 0===b||n>=e||n<0||P&&r>=y}function s(){var t=j();if(c(t))return f(t);w=setTimeout(s,i(t))}function f(t){return w=void 0,E&&g?r(t):(g=p=void 0,m)}function h(){void 0!==w&&clearTimeout(w),O=0,g=b=p=w=void 0}function d(){return void 0===w?m:f(j())}function v(){var t=j(),n=c(t);if(g=arguments,p=this,b=t,n){if(void 0===w)return o(b);if(P)return w=setTimeout(s,e),r(b)}return void 0===w&&(w=setTimeout(s,e)),m}var g,p,y,m,w,b,O=0,_=!1,P=!1,E=!0;if("function"!=typeof t)throw new TypeError(l);return e=u(e)||0,a(n)&&(_=!!n.leading,P="maxWait"in n,y=P?M(u(n.maxWait)||0,e):y,E="trailing"in n?!!n.trailing:E),v.cancel=h,v.flush=d,v}function r(t,e,r){var o=!0,i=!0;if("function"!=typeof t)throw new TypeError(l);return a(r)&&(o="leading"in r?!!r.leading:o,i="trailing"in r?!!r.trailing:i),n(t,e,{leading:o,maxWait:e,trailing:i})}function a(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function o(t){return!!t&&"object"==typeof t}function i(t){return"symbol"==typeof t||o(t)&&b.call(t)==s}function u(t){if("number"==typeof t)return t;if(i(t))return c;if(a(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=a(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(f,"");var n=d.test(t);return n||v.test(t)?g(t.slice(2),n?2:8):h.test(t)?c:+t}var l="Expected a function",c=NaN,s="[object Symbol]",f=/^\s+|\s+$/g,h=/^[-+]0x[0-9a-f]+$/i,d=/^0b[01]+$/i,v=/^0o[0-7]+$/i,g=parseInt,p="object"==typeof e&&e&&e.Object===Object&&e,y="object"==typeof self&&self&&self.Object===Object&&self,m=p||y||Function("return this")(),w=Object.prototype,b=w.toString,M=Math.max,x=Math.min,j=function(){return m.Date.now()};t.exports=r}).call(e,n(5))},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function a(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function o(t,e,n,r){var a={lng:t.northeast.longitude,lat:t.southwest.latitude},o={lng:e.northeast.lng,lat:e.southwest.lat},i=(0,f.inLng)(a,e),u=(0,f.inLat)(a,e),c=(0,s.default)(t,n,r),h=l(c,2),d=h[0],v=h[1],g=Math.abs(a.lng-o.lng),p=Math.abs(a.lat-o.lat),y=r,m=n;return i||(y-=Math.floor(g/d)),u||(m-=Math.floor(p/v)),[y,m]}function i(t,e,n,r){var a={lng:t.southwest.longitude,lat:t.northeast.latitude},o={lng:e.southwest.lng,lat:e.northeast.lat},i=(0,f.inLng)(a,e),u=(0,f.inLat)(a,e),c=(0,s.default)(t,n,r),h=l(c,2),d=h[0],v=h[1],g=Math.abs(a.lng-o.lng),p=Math.abs(a.lat-o.lat),y=0,m=0;return i||(y=Math.floor(g/d)),u||(m=Math.floor(p/v)),[y,m]}function u(t,e,n,r){if(Math.abs(e.southwest.lng-e.northeast.lng)>=360)return[0,0,r,n];var u=(0,d.default)(e);return[].concat(a(i(t,u,n,r)),a(o(t,u,n,r)))}Object.defineProperty(e,"__esModule",{value:!0});var l=function(){function t(t,e){var n=[],r=!0,a=!1,o=void 0;try{for(var i,u=t[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){a=!0,o=t}finally{try{!r&&u.return&&u.return()}finally{if(a)throw o}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();e.getPixelExtent=o,e.getPixelOrigins=i,e.default=u;var c=n(1),s=r(c),f=n(8),h=n(10),d=r(h)},function(t,e,n){"use strict";function r(t){var e=document.createElement("canvas");e.height=t.height,e.width=t.width;var n=e.getContext("2d");return n.drawImage(t,0,0),n.getImageData(0,0,t.width,t.height)}function a(t){return Promise.resolve(r(t))}function o(t){for(var e=t.data,n=t.height,r=t.width,a=new Uint8Array(n*r),o=0,i=e.length;o<i;o+=4)a[o/4]=e[o];return a}Object.defineProperty(e,"__esModule",{value:!0}),e.imageToBitmap=a,e.imageDataToPixels=o},function(t,e,n){"use strict";function r(t,e){var n=e.southwest,r=e.northeast;return t.lat>n.lat&&t.lat<r.lat}function a(t,e){var n=e.southwest,r=e.northeast,a=t.lng<r.lng,o=t.lng>n.lng,i=a&&o;return r.lng<n.lng&&(i=a||o),i}function o(t,e){return r(t,e)&&a(t,e)}Object.defineProperty(e,"__esModule",{value:!0}),e.inLat=r,e.inLng=a,e.default=o},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function a(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function o(t,e,n,r){var a=Math.pow(2,Math.floor(n)),o=Math.floor(1/(a*r)*e),i=Math.floor(1/(a*r)*t);return[Math.max(o,1),Math.max(i,1)]}function i(t,e){var n={};return t.forEach(function(t){var r=t.data[e];n[t.weatherParameter]=r}),{weatherParameters:n}}function u(t,e){return{type:"Feature",geometry:{type:"Point",coordinates:t},properties:e}}function l(t,e,n){var r,l=t.bbox,s=t.grid,h=e.bounds,v=e.zoom,g=s.map(function(t){for(var e=t.height,r=t.width,a=(0,d.default)(l,e,r),g=c(a,2),p=g[0],y=g[1],m=o(e,r,v,n),w=c(m,2),b=w[0],M=w[1],x=(0,f.default)(l,h,e,r),j=c(x,4),O=j[0],_=j[1],P=j[2],E=j[3],I=O-O%b,T=_-_%M,A=[],k=T;k<E;k+=M)for(var D=I;D<P;D+=b){var L=l.northeast.latitude-k*y,S=l.southwest.longitude+D*p,C=i(s,D+k*r);A.push(u([S,L],C))}return A});return(r=[]).concat.apply(r,a(g))}Object.defineProperty(e,"__esModule",{value:!0});var c=function(){function t(t,e){var n=[],r=!0,a=!1,o=void 0;try{for(var i,u=t[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){a=!0,o=t}finally{try{!r&&u.return&&u.return()}finally{if(a)throw o}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();e.default=l;var s=n(6),f=r(s),h=n(1),d=r(h)},function(t,e,n){"use strict";function r(t){var e=new mapboxgl.LngLat(t.lng,t.lat).wrap();return{lat:e.lat,lng:e.lng}}function a(t){return{northeast:o({},r(t.northeast)),southwest:o({},r(t.southwest))}}Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};e.default=a},,,,,,,,,function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t){var e=(t.lng+180)/u,n=(90-t.lat)/l;return[Math.min(Math.max(e,0),100),Math.min(Math.max(n,0),100)]}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){var n=[],r=!0,a=!1,o=void 0;try{for(var i,u=t[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){a=!0,o=t}finally{try{!r&&u.return&&u.return()}finally{if(a)throw o}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u=360,l=180,c={},s=function(){function t(e,n,a){var o=this;r(this,t),this.map=e,this.imageUrl=n,this.imageBbox=a,this.setupDom(),this.map.on("move",function(){o.clear(),o.calculateImage(),o.calculateViewport()}),this.calculateImage(),this.calculateViewport()}return i(t,[{key:"setupDom",value:function(){this.container=document.createElement("div"),this.canvas=document.createElement("canvas"),this.canvas.width=500,this.canvas.height=500,this.container.classList.add("container"),this.container.appendChild(this.canvas),document.body.appendChild(this.container)}},{key:"calculateImage",value:function(){var t=this,e=this.imageUrl,n=this.imageBbox,r={lng:n.southwest.longitude,lat:n.northeast.latitude},i={lng:n.northeast.longitude,lat:n.southwest.latitude},u=a(r),l=o(u,2),s=l[0],f=l[1],h=a(i),d=o(h,2),v=d[0],g=d[1],p=500*(v-s),y=500*(g-f),m=function(e){return t.drawImage(e,500*s,500*f,p,y)};if(c[e])return void m(c[e]);var w=new Image(e);w.addEventListener("load",function(){c[e]=w,m(w)}),w.src=e}},{key:"calculateViewport",value:function(){var t=this.map.getBounds(),e=t.getNorthWest(),n=t.getSouthEast(),r=a(e),i=o(r,2),u=i[0],l=i[1],c=a(n),s=o(c,2),f=s[0],h=s[1],d=500*(f-u),v=500*(h-l);this.drawOutline(500*u,500*l,d,v)}},{key:"clear",value:function(){this.canvas.getContext("2d").clearRect(0,0,500,500)}},{key:"drawImage",value:function(t,e,n,r,a){this.canvas.getContext("2d").drawImage(t,e,n,r,a)}},{key:"drawOutline",value:function(t,e,n,r){var a=this.canvas.getContext("2d");a.strokeStyle="rgba(255, 0, 0, 0.7)",a.lineWidth=7,a.strokeRect(t,e,n,r)}}]),t}();e.default=s},,,,,,,,,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function a(t){var e=t.getSouthWest(),n=t.getNorthEast();return{southwest:{lng:e.lng,lat:e.lat},northeast:{lng:n.lng,lat:n.lat}}}function o(t){var e=(new c.default(t,g,v),new f.default);t.addSource("circle-source",{type:"geojson",data:{type:"FeatureCollection",features:[]}}),t.addLayer({type:"circle",source:"circle-source",id:"circle-layer",paint:{"circle-color":{type:"identity",property:"color"}}});var n=(0,d.default)(function(){var n={bbox:v,bounds:a(t.getBounds()),samplingFactor:12,zoom:Math.floor(t.getZoom())};e.queryData([{url:g,weatherParameter:"color"}],n).then(function(e){for(var n=0;n<e.features.length;n++){var r=e.features[n],a=r.properties.weatherParameters.color;r.properties.color=a>0?"#42f448":"#000000"}t.getSource("circle-source").setData(e)})},100);t.on("move",n)}var i=n(0),u=r(i),l=n(19),c=r(l),s=n(2),f=r(s),h=n(4),d=r(h);(0,u.default)(o);var v={northeast:{latitude:52.05249047600099,longitude:86.8359375},southwest:{latitude:-52.908902047770255,longitude:-39.0234375}},g="static/foo.png"}]);