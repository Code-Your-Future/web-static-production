"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["index.html","185843002a746c4fd04be8a049812ebf"],["static/css/main.246485df.css","f9e62cafb0d632244e647921db1d100b"],["static/js/main.977fd7d3.js","a688a7ead98fb14f724d08d5be78db6b"],["static/media/amit.1b64dcb1.jpg","1b64dcb199f42c8a54dd0487528852b4"],["static/media/bex.ff1241a7.jpg","ff1241a71dc52128c58da66b44da005f"],["static/media/claudia.b35e6693.jpg","b35e6693c5570923bc78171c58a4352b"],["static/media/cyf_brand.fbcea877.png","fbcea87769f4ae6b776d2d54778f5348"],["static/media/email-icon.14b25ceb.svg","14b25cebab1202a341ab9551d9279607"],["static/media/fb_logo.ab92ad6d.svg","ab92ad6d992f203adfc29fddf0efd3e6"],["static/media/german.47f11405.jpg","47f114056652404860bbdf2422b3493f"],["static/media/index.18e9058c.scss","18e9058c0f35c1afc3bc691921c0a646"],["static/media/james.4eadcacb.png","4eadcacb88fb5afec6efc53e63bf4b2c"],["static/media/kash.16e0f0bf.jpg","16e0f0bf19a00e8f2191b3cd83b39768"],["static/media/linkedin-logo.7658ffb2.svg","7658ffb25432b6205a9594bf65a8ff16"],["static/media/mozafar.611e4ca0.jpg","611e4ca04ea30bc589aec7d2d51fdd5f"],["static/media/nate.44a9ba3d.jpg","44a9ba3d37a5897e921d09032b94d7ab"],["static/media/simon.0ad0ccb3.jpg","0ad0ccb39513f19b9e0e3d931d4ca07e"],["static/media/twitter-silhouette.587a4df2.svg","587a4df297afc3d2e3be6be7099de59c"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);t=urlsToCacheKeys.has(a);t||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});