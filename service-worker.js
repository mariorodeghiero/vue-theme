"use strict";var precacheConfig=[["/vue-theme/index.html","fc9404e844538920c85f4269a760e1fd"],["/vue-theme/static/css/main.7648588b.css","79ed10d08db5d63c340b0bb0ad7b73fa"],["/vue-theme/static/js/main.7d841193.js","8687829f19ba1d17798a0d7d12fe268c"],["/vue-theme/static/media/css.f5da6f25.svg","f5da6f2582ec0f08a61d1860848c6cac"],["/vue-theme/static/media/editorconfig.622d2d1f.svg","622d2d1f0ece1abff6e84dae2302e954"],["/vue-theme/static/media/example-1.6196700c.png","6196700c076812281b4f652823f57265"],["/vue-theme/static/media/html.8ee96cee.svg","8ee96cee414aecdaf50a90e7b0ce361b"],["/vue-theme/static/media/iterm2.e1ceff83.png","e1ceff83f5b212a2805a5443a10bd77f"],["/vue-theme/static/media/js.6e350c5b.svg","6e350c5b3a233d7e91960d3f733159f8"],["/vue-theme/static/media/json.28419c38.svg","28419c382bca0498e38f814b9f6f4ccc"],["/vue-theme/static/media/markdown.d542f6a4.svg","d542f6a455cfecf2b5c9fb056b4c5637"],["/vue-theme/static/media/php.5f4952d8.svg","5f4952d85d434b7d00b7c493e3b79f97"],["/vue-theme/static/media/react.07923a4b.svg","07923a4b7fbefd21dd31c66296c3f6e7"],["/vue-theme/static/media/scss.bd817b06.svg","bd817b061dce17af2b9e7a5d1285cd29"],["/vue-theme/static/media/vscode.6055d523.svg","6055d523d93b2f5cd770165dafe319cd"],["/vue-theme/static/media/vue.11e81d53.svg","11e81d53032d0122e223ae3e6a5a59f5"],["/vue-theme/static/media/xml.05dea736.svg","05dea736688b966384b28ad6764fe398"],["/vue-theme/static/media/yarn.f5d6026e.svg","f5d6026efaf39f3458814683e3bfc700"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/vue-theme/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});