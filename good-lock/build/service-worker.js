"use strict";var precacheConfig=[["/index.html","bdcb48ce3478a2641950bb7241f5a26d"],["/static/css/main.5c49b629.css","11b51b93efd2d7402a39dbae47520f4e"],["/static/js/main.f0733f41.js","ee88658097a633afe11b1a71a58253f4"],["/static/media/123.ebc89a50.png","ebc89a504c02151abb141d96c009fe4b"],["/static/media/404.6810ae48.jpg","6810ae48c7e92820c5fdb1641263dc86"],["/static/media/Ipad.9c4bed93.jpg","9c4bed9341e820f65ff8f7f90b9abc34"],["/static/media/My_wallet.fb90265b.png","fb90265b32bd4f3ae9a65133c4720bfb"],["/static/media/badge.aa9068a2.png","aa9068a209e0c928a687dc7bc9eeffe2"],["/static/media/badge_blue.e356299d.png","e356299db65b4064facd41a3572dfccb"],["/static/media/baijiu.b3ce7b99.jpg","b3ce7b99885c1bd74e4393030092b8fb"],["/static/media/banner-congji.fafa1d95.png","fafa1d954b408d39b5673a0c288f3ef9"],["/static/media/banner-fuhao.6fe6a128.png","6fe6a1283257e17acb6f6d32dfdd639a"],["/static/media/banner-xinshou.1a45a73d.png","1a45a73d69e080ab81201f639179a53f"],["/static/media/banner4.6c3f750e.png","6c3f750e8fc925039c2ad20a1c343db7"],["/static/media/banner5.1ce89d94.png","1ce89d947ccee6a7289fd1952b4660cb"],["/static/media/bmw.060061e7.jpg","060061e789d67d9bf03de1cc84e30f16"],["/static/media/cao.dd48f7a2.png","dd48f7a220c5ec8aee45a0909b012772"],["/static/media/dianshi.fbd65237.jpg","fbd652376aaea4ac07a9473e15359e6a"],["/static/media/erweim.bd489375.png","bd4893752d3bff8ea885570adcd291db"],["/static/media/fuhao.63d39e8c.png","63d39e8c733e1aac62c6e54666434c6a"],["/static/media/iPhone6s.827c3230.jpg","827c32300060ab83b25e777916efd281"],["/static/media/img_eight.54f0ab8e.jpg","54f0ab8e700b0fc490c5cfd3ec5f4172"],["/static/media/img_five.3aacd1d5.jpg","3aacd1d5e988393feb4ec8ec2aff4fce"],["/static/media/img_four.fd354eab.jpg","fd354eab5794ad8c96c576b31b3ae1d7"],["/static/media/img_one.ac299a4e.jpg","ac299a4e9b235dc4ee0b04d9dc0750b2"],["/static/media/img_seven.39ed83b4.jpg","39ed83b48cc4880a3658dce84f85ded4"],["/static/media/img_six.7f21a961.jpg","7f21a961bdb800ac1f42f5302ecbbce5"],["/static/media/img_three.566e08f9.jpg","566e08f91b017560376304cdb6600677"],["/static/media/img_two.37a6d040.jpg","37a6d040d983782bf3ebf7f4d25d9606"],["/static/media/iphoneneibu.a4faa520.jpg","a4faa520b8e072b763d798476dc6aa56"],["/static/media/jintiao.87d90b7b.jpg","87d90b7b0e1f6a4b4484c1fb356cf691"],["/static/media/jishuan.25c8b22f.png","25c8b22fa004035964d04ae63b1177ed"],["/static/media/luwei.78f9a14a.jpg","78f9a14acd50eabd5527a0a71b3fba1e"],["/static/media/naipin.bbe1a3b0.jpg","bbe1a3b0678cbf42188c27239ebaf084"],["/static/media/qingdan.5798a3e2.png","5798a3e24c11621deb665a0ef500c72e"],["/static/media/share_top.f3359e14.png","f3359e14efc6149a6b0238303724acc4"],["/static/media/title.0b0711d1.png","0b0711d1e2565c4c39aceafd787f6e34"],["/static/media/top.ce18cd51.png","ce18cd51328d6aad1ea2a3f5e2d6699b"],["/static/media/touxiang.64d7317f.jpg","64d7317f79f52529c40cced745197404"],["/static/media/touxiang1.4d0df85d.jpg","4d0df85d216cd004f6c05c38882fd1fd"],["/static/media/touxiang@2x.7f920553.png","7f920553e5b2eca6415b431544d49fd4"],["/static/media/yindao.d5a5f141.png","d5a5f1418419d1f1d7dbf096cc8c6354"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),c="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),a=urlsToCacheKeys.has(t));var n="/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(n,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});