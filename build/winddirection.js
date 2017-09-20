!function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r={};e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=30)}([function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t};e.default=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.mapboxgl,r=arguments[2],o=document.createElement("div");o.classList.add("map","container"),document.body.appendChild(o),e.accessToken="pk.eyJ1Ijoic2NhcnlzaXplIiwiYSI6ImNpcjR2ZWs4ODAwNDZoc25xMmRzM2JlcnQifQ.XmRVjMqDm9jUWw3eMYrrUw";var a=new e.Map(n({container:o,center:[0,0],zoom:1,style:"mapbox://styles/mapbox/dark-v9"},r));a.on("load",function(){return t(a)})}},function(t,e,r){"use strict";function n(t,e,r){var n=t.northeast.longitude,o=t.southwest.latitude,a=t.southwest.longitude,i=t.northeast.latitude;return[Math.abs(a-n)/r,Math.abs(i-o)/e]}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(){return{type:"FeatureCollection",features:arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]}}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),i=r(6),l=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}(i),u=r(8),c=function(t){return t&&t.__esModule?t:{default:t}}(u),s={},f=function(){function t(){n(this,t)}return a(t,[{key:"queryData",value:function(t,e){var r=this,n=e.bbox,a=e.bounds,i=e.samplingFactor,l=e.zoom,u=t.map(function(t){var e=t.url,n=t.weatherParameter;return r._executeQuery(e,n)});return Promise.all(u).then(function(t){return(0,c.default)({grid:t,bbox:n},{bounds:a,zoom:l},i)}).then(o)}},{key:"_executeQuery",value:function(t,e){var r=this;return new Promise(function(n,o){r._fetchData(t).then(l.imageToBitmap).then(function(t){return{data:l.imageDataToPixels(t),height:t.height,width:t.width,weatherParameter:e}}).then(n).catch(function(t){return o(t)})})}},{key:"_fetchData",value:function(t){return s[t]?Promise.resolve(s[t]):new Promise(function(e,r){var n=new Image;n.crossOrigin="anonymous",n.addEventListener("error",r),n.addEventListener("load",function(){s[t]=n,e(n)}),n.src=t})}}]),t}();e.default=f},,function(t,e,r){(function(e){function r(t,e,r){function n(e){var r=h,n=m;return h=m=void 0,j=e,v=t.apply(n,r)}function a(t){return j=t,b=setTimeout(s,e),P?n(t):v}function i(t){var r=t-w,n=t-j,o=e-r;return O?_(o,g-n):o}function c(t){var r=t-w,n=t-j;return void 0===w||r>=e||r<0||O&&n>=g}function s(){var t=M();if(c(t))return f(t);b=setTimeout(s,i(t))}function f(t){return b=void 0,k&&h?n(t):(h=m=void 0,v)}function d(){void 0!==b&&clearTimeout(b),j=0,h=w=m=b=void 0}function p(){return void 0===b?v:f(M())}function y(){var t=M(),r=c(t);if(h=arguments,m=this,w=t,r){if(void 0===b)return a(w);if(O)return b=setTimeout(s,e),n(w)}return void 0===b&&(b=setTimeout(s,e)),v}var h,m,g,v,b,w,j=0,P=!1,O=!1,k=!0;if("function"!=typeof t)throw new TypeError(u);return e=l(e)||0,o(r)&&(P=!!r.leading,O="maxWait"in r,g=O?x(l(r.maxWait)||0,e):g,k="trailing"in r?!!r.trailing:k),y.cancel=d,y.flush=p,y}function n(t,e,n){var a=!0,i=!0;if("function"!=typeof t)throw new TypeError(u);return o(n)&&(a="leading"in n?!!n.leading:a,i="trailing"in n?!!n.trailing:i),r(t,e,{leading:a,maxWait:e,trailing:i})}function o(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function a(t){return!!t&&"object"==typeof t}function i(t){return"symbol"==typeof t||a(t)&&w.call(t)==s}function l(t){if("number"==typeof t)return t;if(i(t))return c;if(o(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=o(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(f,"");var r=p.test(t);return r||y.test(t)?h(t.slice(2),r?2:8):d.test(t)?c:+t}var u="Expected a function",c=NaN,s="[object Symbol]",f=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,y=/^0o[0-7]+$/i,h=parseInt,m="object"==typeof e&&e&&e.Object===Object&&e,g="object"==typeof self&&self&&self.Object===Object&&self,v=m||g||Function("return this")(),b=Object.prototype,w=b.toString,x=Math.max,_=Math.min,M=function(){return v.Date.now()};t.exports=n}).call(e,r(10))},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function o(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)}function a(t,e,r,n){var o={lng:t.northeast.longitude,lat:t.southwest.latitude},a={lng:e.northeast.lng,lat:e.southwest.lat},i=(0,f.inLng)(o,e),l=(0,f.inLat)(o,e),c=(0,s.default)(t,r,n),d=u(c,2),p=d[0],y=d[1],h=Math.abs(o.lng-a.lng),m=Math.abs(o.lat-a.lat),g=n,v=r;return i||(g-=Math.floor(h/p)),l||(v-=Math.floor(m/y)),[g,v]}function i(t,e,r,n){var o={lng:t.southwest.longitude,lat:t.northeast.latitude},a={lng:e.southwest.lng,lat:e.northeast.lat},i=(0,f.inLng)(o,e),l=(0,f.inLat)(o,e),c=(0,s.default)(t,r,n),d=u(c,2),p=d[0],y=d[1],h=Math.abs(o.lng-a.lng),m=Math.abs(o.lat-a.lat),g=0,v=0;return i||(g=Math.floor(h/p)),l||(v=Math.floor(m/y)),[g,v]}function l(t,e,r,n){if(Math.abs(e.southwest.lng-e.northeast.lng)>=360)return[0,0,n,r];var l=(0,p.default)(e);return[].concat(o(i(t,l,r,n)),o(a(t,l,r,n)))}Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function t(t,e){var r=[],n=!0,o=!1,a=void 0;try{for(var i,l=t[Symbol.iterator]();!(n=(i=l.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(t){o=!0,a=t}finally{try{!n&&l.return&&l.return()}finally{if(o)throw a}}return r}return function(e,r){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();e.getPixelExtent=a,e.getPixelOrigins=i,e.default=l;var c=r(1),s=n(c),f=r(7),d=r(9),p=n(d)},function(t,e,r){"use strict";function n(t){var e=document.createElement("canvas");e.height=t.height,e.width=t.width;var r=e.getContext("2d");return r.drawImage(t,0,0),r.getImageData(0,0,t.width,t.height)}function o(t){return Promise.resolve(n(t))}function a(t){for(var e=t.data,r=t.height,n=t.width,o=new Uint8Array(r*n),a=0,i=e.length;a<i;a+=4)o[a/4]=e[a];return o}Object.defineProperty(e,"__esModule",{value:!0}),e.imageToBitmap=o,e.imageDataToPixels=a},function(t,e,r){"use strict";function n(t,e){var r=e.southwest,n=e.northeast;return t.lat>r.lat&&t.lat<n.lat}function o(t,e){var r=e.southwest,n=e.northeast,o=t.lng<n.lng,a=t.lng>r.lng,i=o&&a;return n.lng<r.lng&&(i=o||a),i}function a(t,e){return n(t,e)&&o(t,e)}Object.defineProperty(e,"__esModule",{value:!0}),e.inLat=n,e.inLng=o,e.default=a},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function o(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)}function a(t,e,r,n){var o=Math.pow(2,Math.floor(r)),a=Math.floor(1/(o*n)*e),i=Math.floor(1/(o*n)*t);return[Math.max(a,1),Math.max(i,1)]}function i(t,e){var r={};return t.forEach(function(t){var n=t.data[e];r[t.weatherParameter]=n}),{weatherParameters:r}}function l(t,e){return{type:"Feature",geometry:{type:"Point",coordinates:t},properties:e}}function u(t,e,r){var n,u=t.bbox,s=t.grid,d=e.bounds,y=e.zoom,h=s.map(function(t){for(var e=t.height,n=t.width,o=(0,p.default)(u,e,n),h=c(o,2),m=h[0],g=h[1],v=a(e,n,y,r),b=c(v,2),w=b[0],x=b[1],_=(0,f.default)(u,d,e,n),M=c(_,4),j=M[0],P=M[1],O=M[2],k=M[3],S=j-j%w,L=P-P%x,A=[],T=L;T<k;T+=x)for(var $=S;$<O;$+=w){var z=u.northeast.latitude-T*g,E=u.southwest.longitude+$*m,I=i(s,$+T*n);A.push(l([E,z],I))}return A});return(n=[]).concat.apply(n,o(h))}Object.defineProperty(e,"__esModule",{value:!0});var c=function(){function t(t,e){var r=[],n=!0,o=!1,a=void 0;try{for(var i,l=t[Symbol.iterator]();!(n=(i=l.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(t){o=!0,a=t}finally{try{!n&&l.return&&l.return()}finally{if(o)throw a}}return r}return function(e,r){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();e.default=u;var s=r(5),f=n(s),d=r(1),p=n(d)},function(t,e,r){"use strict";function n(t){var e=new mapboxgl.LngLat(t.lng,t.lat).wrap();return{lat:e.lat,lng:e.lng}}function o(t){return{northeast:a({},n(t.northeast)),southwest:a({},n(t.southwest))}}Object.defineProperty(e,"__esModule",{value:!0});var a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t};e.default=o},function(t,e){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(r=window)}t.exports=r},,,,,,,,,,,,,,function(t,e){t.exports={version:8,name:"BASEMAP LIGHT",metadata:{"mapbox:autocomposite":!0,"mapbox:type":"template"},center:[4.349731568307675,51.94437828477908],zoom:10.878210297714592,bearing:0,pitch:0,sources:{composite:{url:"mapbox://mapbox.mapbox-terrain-v2,mapbox.mapbox-streets-v7",type:"vector"}},sprite:"static/sprite",glyphs:"mapbox://fonts/ubilabs/{fontstack}/{range}.pbf",layers:[{id:"background",type:"background",interactive:!0,paint:{"background-color":"#c6c6c6"}},{id:"hillshade",type:"fill",source:"composite","source-layer":"hillshade",interactive:!0,layout:{visibility:"visible"},paint:{"fill-color":"hsla(0, 0%, 50%, 0.25)","fill-outline-color":"hsla(0, 0%, 66%, 0)"}},{id:"waterway",type:"line",source:"composite","source-layer":"waterway",interactive:!0,filter:["all",["==","$type","LineString"],["in","class","canal","river"]],paint:{"line-color":"hsl(200, 27%, 44%)","line-width":{base:1.4,stops:[[8,.5],[20,15]]}}},{id:"water",type:"fill",source:"composite","source-layer":"water",interactive:!0,paint:{"fill-color":"hsl(200, 14%, 56%)"}},{id:"building",type:"fill",source:"composite","source-layer":"building",interactive:!0,paint:{"fill-color":"#d6d6d6"}},{id:"tunnel_minor",type:"line",source:"composite","source-layer":"road",interactive:!0,filter:["all",["==","$type","LineString"],["all",["==","structure","tunnel"],["in","class","link","motorway_link","path","pedestrian","service","street","street_limited","track"]]],layout:{"line-cap":"butt","line-join":"miter"},paint:{"line-color":"#efefef","line-width":{base:1.55,stops:[[4,.25],[20,30]]},"line-dasharray":[.36,.18]}},{id:"tunnel_major",type:"line",source:"composite","source-layer":"road",interactive:!0,filter:["all",["==","$type","LineString"],["all",["==","structure","tunnel"],["in","class","motorway","primary","secondary","tertiary","trunk"]]],layout:{"line-cap":"butt","line-join":"miter"},paint:{"line-color":"#fff","line-width":{base:1.4,stops:[[6,.5],[20,30]]},"line-dasharray":[.28,.14]}},{id:"road_minor",type:"line",source:"composite","source-layer":"road",interactive:!0,filter:["all",["==","$type","LineString"],["all",["in","class","link","motorway_link","path","pedestrian","service","street","street_limited","track"],["in","structure","ford","none"]]],layout:{"line-cap":"round","line-join":"round"},paint:{"line-color":"#efefef","line-width":{base:1.55,stops:[[4,.25],[20,30]]}}},{id:"road_major",type:"line",source:"composite","source-layer":"road",interactive:!0,filter:["all",["==","$type","LineString"],["all",["in","class","motorway","primary","secondary","tertiary","trunk"],["in","structure","ford","none"]]],layout:{"line-cap":"round","line-join":"round"},paint:{"line-color":"#fff","line-width":{base:1.4,stops:[[6,.5],[20,30]]}}},{id:"bridge_minor case",type:"line",source:"composite","source-layer":"road",interactive:!0,filter:["all",["==","$type","LineString"],["all",["==","structure","bridge"],["in","class","link","motorway_link","path","pedestrian","service","street","street_limited","track"]]],layout:{"line-cap":"butt","line-join":"miter"},paint:{"line-color":"#dedede","line-width":{base:1.6,stops:[[12,.5],[20,10]]},"line-gap-width":{base:1.55,stops:[[4,.25],[20,30]]}}},{id:"bridge_major case",type:"line",source:"composite","source-layer":"road",interactive:!0,filter:["all",["==","$type","LineString"],["all",["==","structure","bridge"],["in","class","motorway","primary","secondary","tertiary","trunk"]]],layout:{"line-cap":"butt","line-join":"miter"},paint:{"line-color":"#dedede","line-width":{base:1.6,stops:[[12,.5],[20,10]]},"line-gap-width":{base:1.55,stops:[[4,.25],[20,30]]}}},{id:"bridge_minor",type:"line",source:"composite","source-layer":"road",interactive:!0,filter:["all",["==","$type","LineString"],["all",["==","structure","bridge"],["in","class","link","motorway_link","path","pedestrian","service","street","street_limited","track"]]],layout:{"line-cap":"round","line-join":"round"},paint:{"line-color":"#efefef","line-width":{base:1.55,stops:[[4,.25],[20,30]]}}},{id:"bridge_major",type:"line",source:"composite","source-layer":"road",interactive:!0,filter:["all",["==","$type","LineString"],["all",["==","structure","bridge"],["in","class","motorway","primary","secondary","tertiary","trunk"]]],layout:{"line-cap":"round","line-join":"round"},paint:{"line-color":"#fff","line-width":{base:1.4,stops:[[6,.5],[20,30]]}}},{id:"admin_country",type:"line",source:"composite","source-layer":"admin",interactive:!0,filter:["all",["==","$type","LineString"],["all",["<=","admin_level",2],["==","maritime",0]]],layout:{"line-cap":"round","line-join":"round"},paint:{"line-color":"#8b8a8a","line-width":{base:1.3,stops:[[3,.5],[22,15]]}}},{id:"road_major_label",type:"symbol",source:"composite","source-layer":"road_label",interactive:!0,filter:["all",["==","$type","LineString"],["in","class","motorway","primary","secondary","tertiary","trunk"]],layout:{"symbol-placement":"line","text-field":"{name_en}","text-font":["Roboto Medium","Arial Unicode MS Bold"],"text-transform":"uppercase","text-letter-spacing":.1,"text-size":{base:1.4,stops:[[10,8],[20,14]]}},paint:{"text-color":"#666","text-halo-color":"rgba(255,255,255,0.75)","text-halo-width":2}},{id:"place_label_other",type:"symbol",source:"composite","source-layer":"place_label",minzoom:8,interactive:!0,filter:["all",["==","$type","Point"],["in","type","hamlet","island","neighbourhood","suburb","town","village"]],layout:{"text-field":"{name_en}","text-font":["Roboto Medium","Arial Unicode MS Bold"],"text-max-width":6,"text-size":{stops:[[6,12],[12,16]]}},paint:{"text-color":"#666","text-halo-color":"rgba(255,255,255,0.75)","text-halo-width":1,"text-halo-blur":1}},{id:"place_label_city",type:"symbol",source:"composite","source-layer":"place_label",maxzoom:16,interactive:!0,filter:["all",["==","$type","Point"],["==","type","city"]],layout:{"text-field":"{name_en}","text-size":{stops:[[3,12],[8,16]]},"text-max-width":10,"text-font":["Roboto Bold","Arial Unicode MS Regular"]},paint:{"text-color":"#666","text-halo-color":"rgba(255,255,255,0.75)","text-halo-width":1,"text-halo-blur":1}},{id:"country_label",type:"symbol",source:"composite","source-layer":"country_label",maxzoom:12,interactive:!0,filter:["==","$type","Point"],layout:{"text-field":"{name_en}","text-font":["Roboto Regular","Arial Unicode MS Regular"],"text-max-width":10,"text-size":{stops:[[3,14],[8,22]]}},paint:{"text-color":"#666","text-halo-color":"rgba(255,255,255,0.75)","text-halo-width":1,"text-halo-blur":1}}],created:"2016-08-18T15:35:34.403Z",id:"cis0ho1ko005wgxm2yi13xqdu",modified:"2016-08-18T16:28:01.553Z",owner:"neutronenkind",draft:!1}},,,,,,function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function o(t){var e=t.getSouthWest(),r=t.getNorthEast();return{southwest:{lng:e.lng,lat:e.lat},northeast:{lng:r.lng,lat:r.lat}}}function a(t){return t/256*128-64}function i(t,e,r){var n=Math.sqrt(Math.pow(t,2)+Math.pow(e,2)),o="wind-arrow-calm-00";if(n>=2.5){var a=""+Math.round(n/5);a.length<2&&(a="0"+a),o=r.geometry.coordinates[1]>0?"wind-arrow-nh-"+a:"wind-arrow-sh-"+a}return o}function l(t,e){var r=Math.atan2(t,e);return r<0&&(r+=2*Math.PI),180*r/Math.PI}function u(t){var e=new d.default;t.addSource("circle-source",{type:"geojson",data:{type:"FeatureCollection",features:[]}}),t.addLayer({type:"sdficon",source:"circle-source",id:"circle-layer",layout:{"sdficon-image":"{image}","sdficon-rotate":{property:"angle",type:"identity"},"sdficon-scale":{property:"scale",type:"identity"}},paint:{"sdficon-color":{property:"color",type:"identity"}}});var r=(0,y.default)(function(){var r={bbox:g,bounds:o(t.getBounds()),samplingFactor:6,zoom:Math.floor(t.getZoom())};e.queryData(v,r).then(function(e){for(var r=0;r<e.features.length;r++){var n=e.features[r],o=n.properties.weatherParameters,u=o.u,c=o.v;u=a(u),c=a(c);var s=Math.sqrt(Math.pow(u,2)+Math.pow(c,2));n.properties.angle=l(u,c),n.properties.image=i(u,c,n),n.properties.color="hsla("+s/30*360+", 100%, 50%, 1)",n.properties.scale=Math.max(.5,s/20)}t.getSource("circle-source").setData(e)})},100);t.on("move",r)}var c=r(0),s=n(c),f=r(2),d=n(f),p=r(4),y=n(p),h=r(24),m=n(h);(0,s.default)(u,void 0,{style:m.default});var g={southwest:{latitude:-90,longitude:-180},northeast:{latitude:90,longitude:180}},v=[{url:"static/u-component.png",weatherParameter:"u"},{url:"static/v-component.png",weatherParameter:"v"}]}]);