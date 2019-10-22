/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["D:/My_Blog/public/about/index.html","3e9d4029b0edc7cb41e46b2102f8c542"],["D:/My_Blog/public/archives/2018/07/index.html","31f31439ea8be4dd5f8d41558e8072a2"],["D:/My_Blog/public/archives/2018/08/index.html","9e2d0b248ce1cc4ea3bd58096af4f48b"],["D:/My_Blog/public/archives/2018/09/index.html","154760546f2644fa970e94ac4c687041"],["D:/My_Blog/public/archives/2018/10/index.html","ef088f4879f9a706a53ec480cdec3af9"],["D:/My_Blog/public/archives/2018/12/index.html","304c208f5d39590bfaf561278fdcc10c"],["D:/My_Blog/public/archives/2018/index.html","356087a5500873dcb6968c34ee9fdcbb"],["D:/My_Blog/public/archives/2018/page/2/index.html","2548a6d2132dea9c78b88ceb3c63d5a2"],["D:/My_Blog/public/archives/2019/01/index.html","b705bbd327e100417b40a5e9911efaca"],["D:/My_Blog/public/archives/2019/07/index.html","0cb7a01ff639a52821a0a76c1960988f"],["D:/My_Blog/public/archives/2019/08/index.html","b4c89a4ef39cea385804ba022b05583c"],["D:/My_Blog/public/archives/2019/09/index.html","2eaecb74ea2065665d6c8302dcb144bc"],["D:/My_Blog/public/archives/2019/10/index.html","fd66244a7af075bca4d8126eeb219d5e"],["D:/My_Blog/public/archives/2019/10/page/2/index.html","8c2640a784c2a8822e67379ae4f63d93"],["D:/My_Blog/public/archives/2019/index.html","cd1c99d754a5f30f70fa6b752d97baa7"],["D:/My_Blog/public/archives/2019/page/2/index.html","0b217f66c1ddb0883364e74429990b5e"],["D:/My_Blog/public/archives/index.html","6bba09aff8e603b13c964affedb868c7"],["D:/My_Blog/public/archives/page/2/index.html","8aeb57837329bfed0f59af6172520e03"],["D:/My_Blog/public/archives/page/3/index.html","86f7a70eaaafe2f2a8d3b6f343cc413a"],["D:/My_Blog/public/archives/page/4/index.html","3f2cb6080845db7596af13e8d1385fd4"],["D:/My_Blog/public/articles/2018/07/STL-sort/index.html","e75111199162aa9b4ac055591c0a03da"],["D:/My_Blog/public/articles/2018/07/并查集学习笔记/1.png","c01792916aab22c1ffe7816bf509c4bd"],["D:/My_Blog/public/articles/2018/07/并查集学习笔记/2.png","dbb3e029a7b876bcd9766ca29e5f4665"],["D:/My_Blog/public/articles/2018/07/并查集学习笔记/3.png","c9ada5ae61038f31b57dbfafcca24c97"],["D:/My_Blog/public/articles/2018/07/并查集学习笔记/4.png","597da8fa0e6d5e95cadcfbd48bf990b2"],["D:/My_Blog/public/articles/2018/07/并查集学习笔记/5.png","81bdf103da2965de6d458637a4ff32e6"],["D:/My_Blog/public/articles/2018/07/并查集学习笔记/6.png","63b8df0f691dd6385cbc5c1f8bfcdf23"],["D:/My_Blog/public/articles/2018/07/并查集学习笔记/index.html","1ab88f070645e3b0c4f254c015182ea3"],["D:/My_Blog/public/articles/2018/08/图的邻接表存储/1.png","234e3364855d51e1e35b9584958f5a6a"],["D:/My_Blog/public/articles/2018/08/图的邻接表存储/2.png","848b0de34801b10a3f688f53d4a08a8a"],["D:/My_Blog/public/articles/2018/08/图的邻接表存储/3.png","be85a2a984af3f2aa2b7dc37223bca33"],["D:/My_Blog/public/articles/2018/08/图的邻接表存储/4.png","cc87a5faa20db51db022de07231b3d04"],["D:/My_Blog/public/articles/2018/08/图的邻接表存储/5.png","f01003660b3b15b1f06200b3ce1bf066"],["D:/My_Blog/public/articles/2018/08/图的邻接表存储/graph.png","f37a84c4cbfab6b064cbbf6974288008"],["D:/My_Blog/public/articles/2018/08/图的邻接表存储/index.html","8ef22a6c33cb49501020d569eb38bc39"],["D:/My_Blog/public/articles/2018/08/最大公约数算法/index.html","69b8a7dbbd5a7fe2cb27dbd2661fe2b7"],["D:/My_Blog/public/articles/2018/08/最短路Floyd/graph.png","55e777f191f1f8b7b5cedc7f5dc592e1"],["D:/My_Blog/public/articles/2018/08/最短路Floyd/graph1.png","e0c582a617a8f0fb655fa035e503c595"],["D:/My_Blog/public/articles/2018/08/最短路Floyd/index.html","e9956492651ab1cde24b5a2fe219118f"],["D:/My_Blog/public/articles/2018/08/线段树小记/index.html","f8cc7339475f2c6e4ec6da841e75b904"],["D:/My_Blog/public/articles/2018/08/给你的程序提速-论C++中的那些坑/index.html","b682a4cc8b672c3a83b5c0db1e15f37c"],["D:/My_Blog/public/articles/2018/09/Dijkstra从入门到出门/graph.png","975942b732099dfd980a969c9bac8658"],["D:/My_Blog/public/articles/2018/09/Dijkstra从入门到出门/graph1.png","0ff500fc440807d7ff6967aaf8ece7ba"],["D:/My_Blog/public/articles/2018/09/Dijkstra从入门到出门/graph2.png","298fc22a9f5ddbf7e4e8e7d0a7580dc2"],["D:/My_Blog/public/articles/2018/09/Dijkstra从入门到出门/graph3.png","a40854187af4a9ee7b928dc786db9900"],["D:/My_Blog/public/articles/2018/09/Dijkstra从入门到出门/index.html","3d39ae763228768b978801d5a5278b2a"],["D:/My_Blog/public/articles/2018/09/Dijkstra从入门到出门/mar.png","fafda5fc48b20dd8998b39dcdef69813"],["D:/My_Blog/public/articles/2018/10/C-各个函数读写速度一览/index.html","3bd1bacbc9643cfbe5a55503a59c2970"],["D:/My_Blog/public/articles/2018/10/快读&&快写——模板与解释/index.html","ae3559d253fc4cff417bef7e43895509"],["D:/My_Blog/public/articles/2018/12/前缀和/index.html","d750e98e2edd274229fd49797f33ae3f"],["D:/My_Blog/public/articles/2018/12/差分/index.html","097ccb7368169621b0fc4fab5818dcad"],["D:/My_Blog/public/articles/2019/01/01背包小记/index.html","ae68d895e40f58ecffb75267c3a8c733"],["D:/My_Blog/public/articles/2019/01/转载－KMP算法/1.jpg","274ebe59d149ec12573e4b8d8837ad4a"],["D:/My_Blog/public/articles/2019/01/转载－KMP算法/2.jpg","01c28ba8bf43132bb616e15f8aa0608d"],["D:/My_Blog/public/articles/2019/01/转载－KMP算法/3.jpg","289ff35a1d3f29f09b424987d4581d1b"],["D:/My_Blog/public/articles/2019/01/转载－KMP算法/4.jpg","6dd55f9823121d8985ea96307463deb7"],["D:/My_Blog/public/articles/2019/01/转载－KMP算法/5.jpg","903f3fcc9903df38fe9a16bb1e28e61f"],["D:/My_Blog/public/articles/2019/01/转载－KMP算法/6.jpg","994a0383c78e8b5ba592a338c56ab9cb"],["D:/My_Blog/public/articles/2019/01/转载－KMP算法/7.jpg","8ab91b4b1d0746870f54c96beeed3569"],["D:/My_Blog/public/articles/2019/01/转载－KMP算法/8.jpg","b796a6a8e129919a623968044b5dedbc"],["D:/My_Blog/public/articles/2019/01/转载－KMP算法/index.html","ab70dac528333bb0fbf754e9dd201250"],["D:/My_Blog/public/articles/2019/07/Axis-NOI导刊2011提高（05）/index.html","d5e11df9ff858d4cb6029044d370f364"],["D:/My_Blog/public/articles/2019/07/最长上升子序列/index.html","00a2dcb6474f786dd39018349149250a"],["D:/My_Blog/public/articles/2019/08/DFS-BFS-ID-IDA-搜索算法简介/1.gif","51ce8fb962e159aa2965adc025388056"],["D:/My_Blog/public/articles/2019/08/DFS-BFS-ID-IDA-搜索算法简介/dfs.png","7059390bf550df8a9b919fbe4fe57ff7"],["D:/My_Blog/public/articles/2019/08/DFS-BFS-ID-IDA-搜索算法简介/index.html","e4bd7cf9c14d056cd04fbb22befc06b0"],["D:/My_Blog/public/articles/2019/09/洛谷P2678-跳石头-题解/index.html","efe5dbe723f9ef9d1d714075cc675706"],["D:/My_Blog/public/articles/2019/10/CF1179A-Valeriy-and-Deque题解/index.html","c7ebe54ab4108418e3be045d39d92c41"],["D:/My_Blog/public/articles/2019/10/Kruskal重构树/graph (1).png","39043722496363139272f9f470a6671b"],["D:/My_Blog/public/articles/2019/10/Kruskal重构树/graph (2).png","77fa552fdb43d73c82cd9ed4b228c4d1"],["D:/My_Blog/public/articles/2019/10/Kruskal重构树/graph (3).png","9db9150048274caa25e601be24578095"],["D:/My_Blog/public/articles/2019/10/Kruskal重构树/graph.png","d16c4fe6131a67420e44d97d5d0a640b"],["D:/My_Blog/public/articles/2019/10/Kruskal重构树/index.html","ef46bafb7e7e52fc0513164ae1762b69"],["D:/My_Blog/public/articles/2019/10/NOIP2018货币系统题解/index.html","e282656c1432ff70da3f0ae567e37393"],["D:/My_Blog/public/articles/2019/10/分层图最短路小记/index.html","0a41816a4df11b97bea57628c04b64c8"],["D:/My_Blog/public/articles/2019/10/分层图最短路小记/liuzhe.png","6b5ad4bff8c3aecaefde0b57d8bcd498"],["D:/My_Blog/public/articles/2019/10/分层图最短路小记/payphone.png","be0bf7d37e540298898e35f07d92a9f6"],["D:/My_Blog/public/articles/2019/10/双指针-CF660C题解/index.html","45af1c4baf9531ae64fbd38ae0929943"],["D:/My_Blog/public/articles/2019/10/埃氏筛小记/index.html","4f18dec16b2589df24da7b8a3e80ee13"],["D:/My_Blog/public/articles/2019/10/对拍模板/index.html","e68787eb3f97cbec881665c84d59142f"],["D:/My_Blog/public/articles/2019/10/树链剖分—重链剖分小记/64629076_p0_master1200.jpg","0c0108aac16984b187f6a14ea0ff9abd"],["D:/My_Blog/public/articles/2019/10/树链剖分—重链剖分小记/hld.png","047d7287bb9ce707370a99d78b226597"],["D:/My_Blog/public/articles/2019/10/树链剖分—重链剖分小记/index.html","8f6b410f7314626d25dbee21504c9c6c"],["D:/My_Blog/public/articles/2019/10/树链剖分—重链剖分小记/v2-9c08dae6f0b1d00234b281ef96611d3c_hd.jpg","6f77b514423ebf74f341c51bc2c5e3d1"],["D:/My_Blog/public/articles/2019/10/洛谷P1144最短路计数/index.html","24e8d0892b9c926516c4a715b4b0e199"],["D:/My_Blog/public/articles/2019/10/洛谷P1967货车运输题解/index.html","eb93536b5e63bb102f55afc2efc563c6"],["D:/My_Blog/public/articles/2019/10/洛谷P2024食物链题解/index.html","03ed104e86316b81560710d76bb78808"],["D:/My_Blog/public/articles/2019/10/洛谷P2071座位安排题解/index.html","1b816c5ffe12f71d0fcf22d4dcc74421"],["D:/My_Blog/public/articles/2019/10/洛谷P2613有理数取余题解/index.html","acfb06b3ece5789e71e0b1ec39b1e95e"],["D:/My_Blog/public/articles/2019/10/珂朵莉树（ODT）详解/CF.png","136fcce901a5c11f71b891b96e19c2da"],["D:/My_Blog/public/articles/2019/10/珂朵莉树（ODT）详解/index.html","faa0e33282b9e8c7ab5cc4394eef0dd7"],["D:/My_Blog/public/css/disqus-proxy.css","87976db321c1c288aa3d9d4af06c8ad8"],["D:/My_Blog/public/css/disqus-proxy.min.css","caa38dd245e9da4c20580c256e540bd6"],["D:/My_Blog/public/css/duoshuo.css","bdd8f7eb0dd14fc7e719cab11e685a9e"],["D:/My_Blog/public/css/duoshuo.min.css","6457d80daef45eca1f7399b2329b1dc2"],["D:/My_Blog/public/css/fontawesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["D:/My_Blog/public/css/gallery.min.css","a62dc56ec5981c978cddcba32f2dc875"],["D:/My_Blog/public/css/ie-blocker.css","4c323bd282014d64264bad241f1c14d3"],["D:/My_Blog/public/css/material-icons.css","a6a841fd177f69bd07dbe919a744439b"],["D:/My_Blog/public/css/material.css","f65ff1c879db0e257bd7d9521f0eaa57"],["D:/My_Blog/public/css/material.min.css","67b6bbd91d44e12c7304a47f58672d38"],["D:/My_Blog/public/css/prettify.css","074dc30ad95ce2f227848a2c38bc7fbd"],["D:/My_Blog/public/css/prettify.min.css","ce9f124ce53dbfcf5758512737ee9899"],["D:/My_Blog/public/css/prettify/atelier-cave-dark.min.css","78d9bbfc7d0f526727e9da749cd08a44"],["D:/My_Blog/public/css/prettify/atelier-cave-light.min.css","e4c2bf4caff36e974733bae61be7a10b"],["D:/My_Blog/public/css/prettify/atelier-dune-dark.min.css","4aafbf8ec70b42c2b7964aa2b347bf68"],["D:/My_Blog/public/css/prettify/atelier-dune-light.min.css","65f9c4494342967919044e847347634c"],["D:/My_Blog/public/css/prettify/atelier-estuary-dark.min.css","79f259a7e1a0ab58772d339f97c53bf7"],["D:/My_Blog/public/css/prettify/atelier-estuary-light.min.css","65039bc195c71fa32df0c35bc902587d"],["D:/My_Blog/public/css/prettify/atelier-forest-dark.min.css","cbc537385cc8ab19748f9d4160a1e46c"],["D:/My_Blog/public/css/prettify/atelier-forest-light.min.css","1dda1f8f21aeedbe0fb68caf55c615e0"],["D:/My_Blog/public/css/prettify/atelier-heath-dark.min.css","b52d843659b13491b555f324bebfe9e8"],["D:/My_Blog/public/css/prettify/atelier-heath-light.min.css","0d999c502c821f1b761ad772d7301067"],["D:/My_Blog/public/css/prettify/atelier-lakeside-dark.min.css","f48fd98ed8f7ed8aa59fb57c87247b23"],["D:/My_Blog/public/css/prettify/atelier-lakeside-light.min.css","bc790feb4057204347c45ea551d0d784"],["D:/My_Blog/public/css/prettify/atelier-plateau-dark.min.css","e81b69c147a9ffbd298dccdaf02a810f"],["D:/My_Blog/public/css/prettify/atelier-plateau-light.min.css","ad2d0ed869dc8142306110f8b7fa9035"],["D:/My_Blog/public/css/prettify/atelier-savanna-dark.min.css","b3a404d78c50fbe9968d0d4dac123484"],["D:/My_Blog/public/css/prettify/atelier-savanna-light.min.css","7d4087bd0552352c12ee3dd8f397db75"],["D:/My_Blog/public/css/prettify/atelier-seaside-dark.min.css","10a0183644bd5c369616f0b94298c8f5"],["D:/My_Blog/public/css/prettify/atelier-seaside-light.min.css","6fbd6de95fcd79393de5fbb4e7a3dac7"],["D:/My_Blog/public/css/prettify/atelier-sulphurpool-dark.min.css","be693407f25090368983c17ad1fe1dca"],["D:/My_Blog/public/css/prettify/atelier-sulphurpool-light.min.css","fcd7ecab5bfa792ac082257e73f08abd"],["D:/My_Blog/public/css/prettify/github-v2.min.css","01fccac6dfbe2befe58590654a39f1c2"],["D:/My_Blog/public/css/prettify/github.min.css","dab580bb047648b053d1546fe31e1215"],["D:/My_Blog/public/css/prettify/hemisu-dark.min.css","7095b0461d4cf22e7935f0e447807c6d"],["D:/My_Blog/public/css/prettify/hemisu-light.min.css","54e6d654c095a946b257a243ffd5f3f7"],["D:/My_Blog/public/css/prettify/tomorrow-night-blue.min.css","2733cdcd81e2ca4e8d6598b2237c2eef"],["D:/My_Blog/public/css/prettify/tomorrow-night-bright.min.css","f15804e96aa1b47d36233c5b02732f28"],["D:/My_Blog/public/css/prettify/tomorrow-night-eighties.min.css","d8b250cd444ef8aafcaff7e5fd3f2830"],["D:/My_Blog/public/css/prettify/tomorrow-night.min.css","4259c6664fdae3e77c5dbc2d5c10cf88"],["D:/My_Blog/public/css/prettify/tomorrow.min.css","1c8792425eb2dedea306ec47bcb3c648"],["D:/My_Blog/public/css/prettify/tranquil-heart.min.css","ba5de9f48f4cb1b3b12b42fe047cc30e"],["D:/My_Blog/public/css/prettify/vibrant-ink.min.css","7b913faaa19c1af792ed54c7e0cf3deb"],["D:/My_Blog/public/css/style.css","d076c234da67bef747946e096fcd155b"],["D:/My_Blog/public/css/style.min.css","34a865290917c3f73ae93479a78c0efb"],["D:/My_Blog/public/css/uc.css","31dc264064481a02fb48046046a76084"],["D:/My_Blog/public/fonts/MaterialIcons-Regular.eot","e79bfd88537def476913f3ed52f4f4b3"],["D:/My_Blog/public/fonts/MaterialIcons-Regular.ttf","a37b0c01c0baf1888ca812cc0508f6e2"],["D:/My_Blog/public/fonts/MaterialIcons-Regular.woff","012cf6a10129e2275d79d6adac7f3b02"],["D:/My_Blog/public/fonts/Roboto-Black.ttf","4dae2e3c6207a71de6b078b879230062"],["D:/My_Blog/public/fonts/Roboto-Bold.ttf","a68db3b33213fa138e6f72a5b76ac632"],["D:/My_Blog/public/fonts/Roboto-Light.ttf","8d252992868e895b059335848dec3402"],["D:/My_Blog/public/fonts/Roboto-Medium.ttf","989d2dff37a09f19c6dbc6f0e8f9b4ea"],["D:/My_Blog/public/fonts/Roboto-Regular.ttf","8f793587dcf03f31c551c5b60d175fc2"],["D:/My_Blog/public/fonts/Roboto-Thin.ttf","21c61396b4bea54e7308a7cda49edbe0"],["D:/My_Blog/public/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["D:/My_Blog/public/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["D:/My_Blog/public/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["D:/My_Blog/public/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["D:/My_Blog/public/images/icons/icon-128x128.png","a33c9140ca03c567bd7f37a9cf5573e1"],["D:/My_Blog/public/images/icons/icon-144x144.png","2c4e37a7f384bd9ac86be6144c45920b"],["D:/My_Blog/public/images/icons/icon-152x152.png","6dc5962f26164c2ee2a2726101b848c4"],["D:/My_Blog/public/images/icons/icon-192x192.png","9245a9f459de2e21f21c93592631a212"],["D:/My_Blog/public/images/icons/icon-384x384.png","c816f178bc15b2f0f9ca4aadfea944df"],["D:/My_Blog/public/images/icons/icon-512x512.png","d581bf7b87b5b40704bebc5cd1cfc3f7"],["D:/My_Blog/public/images/icons/icon-72x72.png","03e1995815472315b46fd08b6e315559"],["D:/My_Blog/public/images/icons/icon-96x96.png","16a39fbf1490de058036e26d70bdaf66"],["D:/My_Blog/public/img/avatar.png","0acf37b762876c3999bb712819ef0fe3"],["D:/My_Blog/public/img/bg.png","db5830a9208cfa1f3977e30af172ffbb"],["D:/My_Blog/public/img/browserstack_logo.png","9901607d552cbf936a8c86e6f206aa47"],["D:/My_Blog/public/img/favicon.png","c1ff911b185ce19e850d38f681e8e541"],["D:/My_Blog/public/img/footer/footer_ico-bilibili.svg","d67fcd7d1fa5999e9a785b2dfaa39f2c"],["D:/My_Blog/public/img/footer/footer_ico-facebook.svg","64c580c2986d6f16d04b1c4d3b896fd2"],["D:/My_Blog/public/img/footer/footer_ico-github.svg","4b3dc07ff72cee5be0eff6a100a354cd"],["D:/My_Blog/public/img/footer/footer_ico-gplus.svg","7d75444af4019d5612e2005ab501eca5"],["D:/My_Blog/public/img/footer/footer_ico-instagram.svg","c8eaf1f2fe5f4d9a7b26f2981d6f14ed"],["D:/My_Blog/public/img/footer/footer_ico-linkedin.svg","5e4c53b53c9d59880c6e483d57309a6a"],["D:/My_Blog/public/img/footer/footer_ico-segmentfault.svg","dbf66b5f0165802dc698eec23e147967"],["D:/My_Blog/public/img/footer/footer_ico-telegram.svg","50e65465cc40292f7101255daed7c593"],["D:/My_Blog/public/img/footer/footer_ico-tumblr.svg","b127eb5d3e455ba8794ddc4d060df5bc"],["D:/My_Blog/public/img/footer/footer_ico-twitter.svg","90ff42c9e275a7cd7ca5bf4291c93961"],["D:/My_Blog/public/img/footer/footer_ico-v2ex.svg","3500b18a911b661a2b379b36b39def20"],["D:/My_Blog/public/img/footer/footer_ico-weibo.svg","f1f6375680122267b9ebfc3b546307e8"],["D:/My_Blog/public/img/footer/footer_ico-zhihu.svg","39538ba6607a9dcadf6d4dca35b687b8"],["D:/My_Blog/public/img/gallery/arrow.svg","f3f776676f3b78b5180c9d2e08c2d532"],["D:/My_Blog/public/img/gallery/close.svg","181336ad0bd48cdde68d7fb8be304daf"],["D:/My_Blog/public/img/gallery/spinner.svg","2a61c8efd2d72146d79a2f6692840a85"],["D:/My_Blog/public/img/logo.png","c1ff911b185ce19e850d38f681e8e541"],["D:/My_Blog/public/img/me.jpg","2becee58695dcb4a6d8c2410aa0906d9"],["D:/My_Blog/public/img/random/material-1.png","0c4e486759ad62e3415f8f197f0311f7"],["D:/My_Blog/public/img/random/material-10.png","2263d9d1cc9b0724e6331374c33f988b"],["D:/My_Blog/public/img/random/material-11.png","41127baf9a286e968a63653dee50ba21"],["D:/My_Blog/public/img/random/material-12.png","2507dbe92186b0b39df6331347aa2c27"],["D:/My_Blog/public/img/random/material-13.png","5d127887b6d043259f7e2fb99cd08175"],["D:/My_Blog/public/img/random/material-14.png","84c21a53679bddbe415fdae1d3c02163"],["D:/My_Blog/public/img/random/material-15.png","ec116546453394cc0d78e580d6d52dd5"],["D:/My_Blog/public/img/random/material-16.png","39a5dca2dc2de60bd5dd191f205db7d6"],["D:/My_Blog/public/img/random/material-17.png","30a855e361dcf170aecdce04ce564c68"],["D:/My_Blog/public/img/random/material-18.png","584900ff821930a8b093b4c0a58be34b"],["D:/My_Blog/public/img/random/material-19.png","c004830c8683856939dc83b75b230b66"],["D:/My_Blog/public/img/random/material-2.png","fa4f4588b9fab07979acd61b94d34fa0"],["D:/My_Blog/public/img/random/material-3.png","418c3457b6792eb732844d41d2501294"],["D:/My_Blog/public/img/random/material-4.png","99898b727359e568759eebbb2c9e4a8b"],["D:/My_Blog/public/img/random/material-5.png","e521776cb427f848546e20d784888a55"],["D:/My_Blog/public/img/random/material-6.png","db810792edf3d40de5baf5401a9a0626"],["D:/My_Blog/public/img/random/material-7.png","d7e9fe3e0e3db6b841ab12fad331daed"],["D:/My_Blog/public/img/random/material-8.png","9f1914138052c3a631e1f2b2cf674a46"],["D:/My_Blog/public/img/random/material-9.png","069b687b7f1069254c816a56317bfaad"],["D:/My_Blog/public/img/sidebar_header.png","0ac2232bb0756d0d4e5f04875b443217"],["D:/My_Blog/public/img/upyun_logo.svg","0895a1d05ab8bc4849337c5a7f4edda0"],["D:/My_Blog/public/index.html","f0a43e6d36314593debf8f9107040511"],["D:/My_Blog/public/js/MathJax.js","1bef8ba3b323e77cd264bfc09662ae1e"],["D:/My_Blog/public/js/Valine.min.js","c640924dc2c3508b1a1c8f3ab726f3fa"],["D:/My_Blog/public/js/gallery/gallery.js","54dbd709efe8893194901af3fce1379d"],["D:/My_Blog/public/js/hanabi-browser-bundle.js","3e48b9fa9ce496eaaee7783ea2e316a4"],["D:/My_Blog/public/js/ie-blocker.en.js","eb054767893aa2f8e981be25c4221415"],["D:/My_Blog/public/js/ie-blocker.zhCN.js","861699947bcd571f62d6dc10f1c43be0"],["D:/My_Blog/public/js/jquery.min.js","a9cbac0142cd78192ca9f7ea50cdbe22"],["D:/My_Blog/public/js/js.js","d69f3cf073c561b1820bbdd62b60bb06"],["D:/My_Blog/public/js/js.min.js","067f54cc49bc46b052c6ac99074ccf8c"],["D:/My_Blog/public/js/lazyload.min.js","d4171fcee357a95fa7b45ea0abee57dd"],["D:/My_Blog/public/js/link.js","34ac04376d139010ae77e87b057fae6f"],["D:/My_Blog/public/js/lsloader.js","d01962f06751b296c985a8fee73019f8"],["D:/My_Blog/public/js/lsloader.min.js","fdef13cf99a299ae566d65ab828cdc19"],["D:/My_Blog/public/js/nprogress.js","a65dd085bf65bea475165c8b5276b563"],["D:/My_Blog/public/js/prettify.min.js","58dd3b7e2bc741230a5b2ec1987041eb"],["D:/My_Blog/public/js/queue.js","3ef240fa4fc55888e5e234e48f23fc95"],["D:/My_Blog/public/js/queue.min.js","1677e3c59497558a9f53b73b726dedc6"],["D:/My_Blog/public/js/smoothscroll.js","94ecbf0028f9b2e48d8bb6551556e915"],["D:/My_Blog/public/links/index.html","5ed95c7d02207eaad299692ac7eb588b"],["D:/My_Blog/public/page/2/index.html","37cd3e03d4a79b2c6c70738fa32ebf19"],["D:/My_Blog/public/page/3/index.html","b6caec89e853af8724fad24ce1ee5c33"],["D:/My_Blog/public/page/4/index.html","b51f5af5bce9213767609f0f8941a911"],["D:/My_Blog/public/tags/BFS/index.html","2f42ae4a7ce1c2663128eed75cf09b08"],["D:/My_Blog/public/tags/DFS/index.html","82527e1209d0bbbfda35857404d7ecb8"],["D:/My_Blog/public/tags/KMP/index.html","664503837fb69d19a0845b518c021920"],["D:/My_Blog/public/tags/LCA/index.html","8300aadd794e4ac14f664928a4f7b5d2"],["D:/My_Blog/public/tags/STL/index.html","bc57e25ea7901157addc3f3c76d93637"],["D:/My_Blog/public/tags/exgcd/index.html","8e1505476fb2b66b299288b850d63eeb"],["D:/My_Blog/public/tags/index.html","bc5c73c709d05668c8e2246598faa9d7"],["D:/My_Blog/public/tags/python/index.html","f6df0ddba42863f28c29da79aec28991"],["D:/My_Blog/public/tags/乱搞/index.html","18e3ba19f6e02dce39685622f95be64e"],["D:/My_Blog/public/tags/二分图/index.html","22d36c7754be413b527581cf665877c1"],["D:/My_Blog/public/tags/二分答案/index.html","148897903f95319278cae0262075b503"],["D:/My_Blog/public/tags/其他/index.html","06a522f68c2835be27ddc824195e7e95"],["D:/My_Blog/public/tags/前缀和/index.html","282418e8979dec03254854dfe131c011"],["D:/My_Blog/public/tags/动态规划/index.html","b509a366001c09b770474c8bd3240b09"],["D:/My_Blog/public/tags/区间/index.html","de64e268f39a2d08bde162a020aacf9e"],["D:/My_Blog/public/tags/卡常/index.html","2c8b675e457c7d0138e61d373bdcfe18"],["D:/My_Blog/public/tags/双指针/index.html","28c7c9f82eb9db0c7d4a126415dd7b1c"],["D:/My_Blog/public/tags/图论/index.html","08f63c94d40d67c8a857713715c659ac"],["D:/My_Blog/public/tags/差分/index.html","fe635d47b02592d832910c04171504f8"],["D:/My_Blog/public/tags/并查集/index.html","b22306d37e8b4368896819024ac869ec"],["D:/My_Blog/public/tags/排序/index.html","a94cc9f1f061d4c9385b5ce1bea475db"],["D:/My_Blog/public/tags/搜索/index.html","f71e2163f0ac4610f115b8de051b924c"],["D:/My_Blog/public/tags/数论/index.html","fb35cd8b1c0ff7e2fe40204037ce7ced"],["D:/My_Blog/public/tags/暴力数据结构/index.html","e30e6b958f29b8d6f8d488ef2e90fe7a"],["D:/My_Blog/public/tags/最小生成树/index.html","f74b7c2f2138e0ad3dc233e55b432d66"],["D:/My_Blog/public/tags/最短路径/index.html","4c68c935b3482001e7c11463d0ca6208"],["D:/My_Blog/public/tags/树链剖分/index.html","09ef44bab01a1c3a1c0dbe8ab5a91cd0"],["D:/My_Blog/public/tags/毒瘤/index.html","26e5d8e254a779204e99ee7742285a71"],["D:/My_Blog/public/tags/珂朵莉树/index.html","4afca4da7ef36e58f62ec183321c4485"],["D:/My_Blog/public/tags/筛法/index.html","6f0edd7ced0e2ae60106215400142c48"],["D:/My_Blog/public/tags/线段树/index.html","a52819bb803dc504c45c1dd650dcca54"],["D:/My_Blog/public/tags/背包/index.html","cbb77303e49132a08f9329c09122f420"],["D:/My_Blog/public/tags/逆元/index.html","f27614cb5f26f8281ffb7aa3e564e811"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







