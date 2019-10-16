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

var precacheConfig = [["about/index.html","3e60519f14de134da40f14b7cb8d4c62"],["archives/2018/07/index.html","f68888f469d192ad88f3539fa5fe2f15"],["archives/2018/08/index.html","8ed99e37522ed986dc0416741ffd4ce9"],["archives/2018/09/index.html","461f7602ea79cf0c8ea0645283387404"],["archives/2018/10/index.html","1534cbac978a6a62dad2e4990c397ea6"],["archives/2018/12/index.html","da1cd34ab19017468baa2130150a7255"],["archives/2018/index.html","c932a2d45d2b8068e3fe5f9e52e624d6"],["archives/2018/page/2/index.html","7b10ec00601de5dcddcc87f12a930fa2"],["archives/2019/01/index.html","c74723fc17a9f35d39e885ca87189fec"],["archives/2019/07/index.html","d30b6ab79f014ee217a30152e3d6e4af"],["archives/2019/08/index.html","d829828418260c6f2570f483a84dca7d"],["archives/2019/09/index.html","c82bdfc8eb25f123e4ef1723dd0acfde"],["archives/2019/10/index.html","a9eb8fddeabe4270cc81905e01283b4a"],["archives/2019/index.html","247bcbf1b599abf7781fb2214c1f31d4"],["archives/2019/page/2/index.html","04c965639b1957309b91ca4750f75023"],["archives/index.html","a4141bccd83caaf70afe51e093d3fef2"],["archives/page/2/index.html","bef37049102f5a1b93ecaa42634e2d8b"],["archives/page/3/index.html","7ac38d293321c40ff0d35bbacc326aa4"],["articles/2018/07/STL-sort/index.html","eb03c16815625daeb8114290cd0ec4ee"],["articles/2018/07/并查集学习笔记/1.png","c01792916aab22c1ffe7816bf509c4bd"],["articles/2018/07/并查集学习笔记/2.png","dbb3e029a7b876bcd9766ca29e5f4665"],["articles/2018/07/并查集学习笔记/3.png","c9ada5ae61038f31b57dbfafcca24c97"],["articles/2018/07/并查集学习笔记/4.png","597da8fa0e6d5e95cadcfbd48bf990b2"],["articles/2018/07/并查集学习笔记/5.png","81bdf103da2965de6d458637a4ff32e6"],["articles/2018/07/并查集学习笔记/6.png","63b8df0f691dd6385cbc5c1f8bfcdf23"],["articles/2018/07/并查集学习笔记/index.html","df2e647c0d6ee0208f6402f52cd4aed7"],["articles/2018/08/图的邻接表存储/1.png","234e3364855d51e1e35b9584958f5a6a"],["articles/2018/08/图的邻接表存储/2.png","848b0de34801b10a3f688f53d4a08a8a"],["articles/2018/08/图的邻接表存储/3.png","be85a2a984af3f2aa2b7dc37223bca33"],["articles/2018/08/图的邻接表存储/4.png","cc87a5faa20db51db022de07231b3d04"],["articles/2018/08/图的邻接表存储/5.png","f01003660b3b15b1f06200b3ce1bf066"],["articles/2018/08/图的邻接表存储/graph.png","f37a84c4cbfab6b064cbbf6974288008"],["articles/2018/08/图的邻接表存储/index.html","37840a5163192b51a8be497d27e88ca0"],["articles/2018/08/最大公约数算法/index.html","511692115df3d0d2017516025239c09d"],["articles/2018/08/最短路Floyd/graph.png","55e777f191f1f8b7b5cedc7f5dc592e1"],["articles/2018/08/最短路Floyd/graph1.png","e0c582a617a8f0fb655fa035e503c595"],["articles/2018/08/最短路Floyd/index.html","6fd1017387c2080b9ef209a30c8e9ea7"],["articles/2018/08/线段树小记/index.html","f0a29fdd9087166c94b012e0a3f6935a"],["articles/2018/08/给你的程序提速-论C++中的那些坑/index.html","8a3d090d64826f7acdeae92afe63a185"],["articles/2018/09/Dijkstra从入门到出门/graph.png","975942b732099dfd980a969c9bac8658"],["articles/2018/09/Dijkstra从入门到出门/graph1.png","0ff500fc440807d7ff6967aaf8ece7ba"],["articles/2018/09/Dijkstra从入门到出门/graph2.png","298fc22a9f5ddbf7e4e8e7d0a7580dc2"],["articles/2018/09/Dijkstra从入门到出门/graph3.png","a40854187af4a9ee7b928dc786db9900"],["articles/2018/09/Dijkstra从入门到出门/index.html","b29b1586931670ee7db7299c5d78c4c9"],["articles/2018/09/Dijkstra从入门到出门/mar.png","fafda5fc48b20dd8998b39dcdef69813"],["articles/2018/10/C-各个函数读写速度一览/index.html","08392fd6916a4de35b7bf99e62caf04e"],["articles/2018/10/快读&&快写——模板与解释/index.html","8e3334a85392cc5ee351128294af43cf"],["articles/2018/12/前缀和/index.html","eba65072fc6c42fd8f6bab464ba8d934"],["articles/2018/12/差分/index.html","6fa9ba52d134a644c611101b1819b42f"],["articles/2019/01/01背包小记/index.html","8be8061d04dea4e3769a3c2734ae0154"],["articles/2019/01/转载－KMP算法/1.jpg","274ebe59d149ec12573e4b8d8837ad4a"],["articles/2019/01/转载－KMP算法/2.jpg","01c28ba8bf43132bb616e15f8aa0608d"],["articles/2019/01/转载－KMP算法/3.jpg","289ff35a1d3f29f09b424987d4581d1b"],["articles/2019/01/转载－KMP算法/4.jpg","6dd55f9823121d8985ea96307463deb7"],["articles/2019/01/转载－KMP算法/5.jpg","903f3fcc9903df38fe9a16bb1e28e61f"],["articles/2019/01/转载－KMP算法/6.jpg","994a0383c78e8b5ba592a338c56ab9cb"],["articles/2019/01/转载－KMP算法/7.jpg","8ab91b4b1d0746870f54c96beeed3569"],["articles/2019/01/转载－KMP算法/8.jpg","b796a6a8e129919a623968044b5dedbc"],["articles/2019/01/转载－KMP算法/index.html","e06cf463631bb295d9e852271aba2303"],["articles/2019/07/Axis-NOI导刊2011提高（05）/index.html","0bcb6b784d5b442e473a1b0e48148579"],["articles/2019/07/最长上升子序列/index.html","8bc79c7099838024b243adbfc40c5ba4"],["articles/2019/08/DFS-BFS-ID-IDA-搜索算法简介/1.gif","51ce8fb962e159aa2965adc025388056"],["articles/2019/08/DFS-BFS-ID-IDA-搜索算法简介/dfs.png","7059390bf550df8a9b919fbe4fe57ff7"],["articles/2019/08/DFS-BFS-ID-IDA-搜索算法简介/index.html","3bac64f656c548a155ec621e9097f235"],["articles/2019/09/洛谷P2678-跳石头-题解/index.html","b6cc2b14ca3dd8b1e0569146eed596d9"],["articles/2019/10/Kruskal重构树/graph (1).png","39043722496363139272f9f470a6671b"],["articles/2019/10/Kruskal重构树/graph (2).png","77fa552fdb43d73c82cd9ed4b228c4d1"],["articles/2019/10/Kruskal重构树/graph (3).png","9db9150048274caa25e601be24578095"],["articles/2019/10/Kruskal重构树/graph.png","d16c4fe6131a67420e44d97d5d0a640b"],["articles/2019/10/Kruskal重构树/index.html","40a937f6107d1c40a5875401245a2b09"],["articles/2019/10/分层图最短路小记/index.html","6e30d3d3038d529d9e0a2c4e596885c5"],["articles/2019/10/分层图最短路小记/liuzhe.png","6b5ad4bff8c3aecaefde0b57d8bcd498"],["articles/2019/10/分层图最短路小记/payphone.png","be0bf7d37e540298898e35f07d92a9f6"],["articles/2019/10/对拍模板/index.html","73ce4a876608aa7dcb17af6c5b71b5ec"],["articles/2019/10/树链剖分—重链剖分小记/64629076_p0_master1200.jpg","0c0108aac16984b187f6a14ea0ff9abd"],["articles/2019/10/树链剖分—重链剖分小记/hld.png","047d7287bb9ce707370a99d78b226597"],["articles/2019/10/树链剖分—重链剖分小记/index.html","d1461d2112b999301d41466258cc55f6"],["articles/2019/10/树链剖分—重链剖分小记/v2-9c08dae6f0b1d00234b281ef96611d3c_hd.jpg","6f77b514423ebf74f341c51bc2c5e3d1"],["articles/2019/10/洛谷P1144最短路计数/index.html","e9cd43ef271ae2f46cc48fa1f64d96d7"],["articles/2019/10/洛谷P1967货车运输题解/index.html","aee143a01e9a486d71103a16d774a377"],["articles/2019/10/洛谷P2024食物链题解/index.html","59c38411ec06bc6089258496a0422b40"],["articles/2019/10/洛谷P2071座位安排题解/index.html","93a13e5f828ce283eaa9e98ce2f00fcc"],["articles/2019/10/珂朵莉树（ODT）详解/CF.png","136fcce901a5c11f71b891b96e19c2da"],["articles/2019/10/珂朵莉树（ODT）详解/index.html","b7a15b379f8332141f4cbc70d70903c4"],["css/disqus-proxy.css","87976db321c1c288aa3d9d4af06c8ad8"],["css/disqus-proxy.min.css","caa38dd245e9da4c20580c256e540bd6"],["css/duoshuo.css","bdd8f7eb0dd14fc7e719cab11e685a9e"],["css/duoshuo.min.css","6457d80daef45eca1f7399b2329b1dc2"],["css/fontawesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["css/gallery.min.css","a62dc56ec5981c978cddcba32f2dc875"],["css/ie-blocker.css","4c323bd282014d64264bad241f1c14d3"],["css/material-icons.css","a6a841fd177f69bd07dbe919a744439b"],["css/material.css","f65ff1c879db0e257bd7d9521f0eaa57"],["css/material.min.css","67b6bbd91d44e12c7304a47f58672d38"],["css/prettify.css","074dc30ad95ce2f227848a2c38bc7fbd"],["css/prettify.min.css","ce9f124ce53dbfcf5758512737ee9899"],["css/prettify/atelier-cave-dark.min.css","78d9bbfc7d0f526727e9da749cd08a44"],["css/prettify/atelier-cave-light.min.css","e4c2bf4caff36e974733bae61be7a10b"],["css/prettify/atelier-dune-dark.min.css","4aafbf8ec70b42c2b7964aa2b347bf68"],["css/prettify/atelier-dune-light.min.css","65f9c4494342967919044e847347634c"],["css/prettify/atelier-estuary-dark.min.css","79f259a7e1a0ab58772d339f97c53bf7"],["css/prettify/atelier-estuary-light.min.css","65039bc195c71fa32df0c35bc902587d"],["css/prettify/atelier-forest-dark.min.css","cbc537385cc8ab19748f9d4160a1e46c"],["css/prettify/atelier-forest-light.min.css","1dda1f8f21aeedbe0fb68caf55c615e0"],["css/prettify/atelier-heath-dark.min.css","b52d843659b13491b555f324bebfe9e8"],["css/prettify/atelier-heath-light.min.css","0d999c502c821f1b761ad772d7301067"],["css/prettify/atelier-lakeside-dark.min.css","f48fd98ed8f7ed8aa59fb57c87247b23"],["css/prettify/atelier-lakeside-light.min.css","bc790feb4057204347c45ea551d0d784"],["css/prettify/atelier-plateau-dark.min.css","e81b69c147a9ffbd298dccdaf02a810f"],["css/prettify/atelier-plateau-light.min.css","ad2d0ed869dc8142306110f8b7fa9035"],["css/prettify/atelier-savanna-dark.min.css","b3a404d78c50fbe9968d0d4dac123484"],["css/prettify/atelier-savanna-light.min.css","7d4087bd0552352c12ee3dd8f397db75"],["css/prettify/atelier-seaside-dark.min.css","10a0183644bd5c369616f0b94298c8f5"],["css/prettify/atelier-seaside-light.min.css","6fbd6de95fcd79393de5fbb4e7a3dac7"],["css/prettify/atelier-sulphurpool-dark.min.css","be693407f25090368983c17ad1fe1dca"],["css/prettify/atelier-sulphurpool-light.min.css","fcd7ecab5bfa792ac082257e73f08abd"],["css/prettify/github-v2.min.css","01fccac6dfbe2befe58590654a39f1c2"],["css/prettify/github.min.css","dab580bb047648b053d1546fe31e1215"],["css/prettify/hemisu-dark.min.css","7095b0461d4cf22e7935f0e447807c6d"],["css/prettify/hemisu-light.min.css","54e6d654c095a946b257a243ffd5f3f7"],["css/prettify/tomorrow-night-blue.min.css","2733cdcd81e2ca4e8d6598b2237c2eef"],["css/prettify/tomorrow-night-bright.min.css","f15804e96aa1b47d36233c5b02732f28"],["css/prettify/tomorrow-night-eighties.min.css","d8b250cd444ef8aafcaff7e5fd3f2830"],["css/prettify/tomorrow-night.min.css","4259c6664fdae3e77c5dbc2d5c10cf88"],["css/prettify/tomorrow.min.css","1c8792425eb2dedea306ec47bcb3c648"],["css/prettify/tranquil-heart.min.css","ba5de9f48f4cb1b3b12b42fe047cc30e"],["css/prettify/vibrant-ink.min.css","7b913faaa19c1af792ed54c7e0cf3deb"],["css/style.css","d076c234da67bef747946e096fcd155b"],["css/style.min.css","34a865290917c3f73ae93479a78c0efb"],["css/uc.css","31dc264064481a02fb48046046a76084"],["fonts/MaterialIcons-Regular.eot","e79bfd88537def476913f3ed52f4f4b3"],["fonts/MaterialIcons-Regular.ttf","a37b0c01c0baf1888ca812cc0508f6e2"],["fonts/MaterialIcons-Regular.woff","012cf6a10129e2275d79d6adac7f3b02"],["fonts/Roboto-Black.ttf","4dae2e3c6207a71de6b078b879230062"],["fonts/Roboto-Bold.ttf","a68db3b33213fa138e6f72a5b76ac632"],["fonts/Roboto-Light.ttf","8d252992868e895b059335848dec3402"],["fonts/Roboto-Medium.ttf","989d2dff37a09f19c6dbc6f0e8f9b4ea"],["fonts/Roboto-Regular.ttf","8f793587dcf03f31c551c5b60d175fc2"],["fonts/Roboto-Thin.ttf","21c61396b4bea54e7308a7cda49edbe0"],["fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["images/icons/icon-128x128.png","a33c9140ca03c567bd7f37a9cf5573e1"],["images/icons/icon-144x144.png","2c4e37a7f384bd9ac86be6144c45920b"],["images/icons/icon-152x152.png","6dc5962f26164c2ee2a2726101b848c4"],["images/icons/icon-192x192.png","9245a9f459de2e21f21c93592631a212"],["images/icons/icon-384x384.png","c816f178bc15b2f0f9ca4aadfea944df"],["images/icons/icon-512x512.png","d581bf7b87b5b40704bebc5cd1cfc3f7"],["images/icons/icon-72x72.png","03e1995815472315b46fd08b6e315559"],["images/icons/icon-96x96.png","16a39fbf1490de058036e26d70bdaf66"],["img/39186698_p0.jpg","ea5c57d928273124042ed5237ac4ff9c"],["img/avatar.png","0acf37b762876c3999bb712819ef0fe3"],["img/bg.png","db5830a9208cfa1f3977e30af172ffbb"],["img/browserstack_logo.png","9901607d552cbf936a8c86e6f206aa47"],["img/favicon.png","c1ff911b185ce19e850d38f681e8e541"],["img/footer/footer_ico-bilibili.svg","d67fcd7d1fa5999e9a785b2dfaa39f2c"],["img/footer/footer_ico-facebook.svg","64c580c2986d6f16d04b1c4d3b896fd2"],["img/footer/footer_ico-github.svg","4b3dc07ff72cee5be0eff6a100a354cd"],["img/footer/footer_ico-gplus.svg","7d75444af4019d5612e2005ab501eca5"],["img/footer/footer_ico-instagram.svg","c8eaf1f2fe5f4d9a7b26f2981d6f14ed"],["img/footer/footer_ico-linkedin.svg","5e4c53b53c9d59880c6e483d57309a6a"],["img/footer/footer_ico-segmentfault.svg","dbf66b5f0165802dc698eec23e147967"],["img/footer/footer_ico-telegram.svg","50e65465cc40292f7101255daed7c593"],["img/footer/footer_ico-tumblr.svg","b127eb5d3e455ba8794ddc4d060df5bc"],["img/footer/footer_ico-twitter.svg","90ff42c9e275a7cd7ca5bf4291c93961"],["img/footer/footer_ico-v2ex.svg","3500b18a911b661a2b379b36b39def20"],["img/footer/footer_ico-weibo.svg","f1f6375680122267b9ebfc3b546307e8"],["img/footer/footer_ico-zhihu.svg","39538ba6607a9dcadf6d4dca35b687b8"],["img/gallery/arrow.svg","f3f776676f3b78b5180c9d2e08c2d532"],["img/gallery/close.svg","181336ad0bd48cdde68d7fb8be304daf"],["img/gallery/spinner.svg","2a61c8efd2d72146d79a2f6692840a85"],["img/logo.png","c1ff911b185ce19e850d38f681e8e541"],["img/me.jpg","2becee58695dcb4a6d8c2410aa0906d9"],["img/random/qwq-12.png","5ce6f172fc535b54181be7621b62fbfc"],["img/random/qwq-15.png","f68263b76247b13dc88e16c86b36c3a3"],["img/random/qwq-27.png","58a400b84ec408c61daea39eaec0cb14"],["img/random/qwq-35.png","9d165d1599b31a30f4dcc9007f5ac958"],["img/random/qwq-39.png","10a34c77b4a5e2a221d4d2567c70ff7e"],["img/random/qwq-43.png","32dd3d3f41f487f62e78fbe66b3b1cc2"],["img/random/qwq-68.png","b2ac8a8062fe0ca6cec03e9d95bc0d23"],["img/random/qwq-7.png","de8367ecd395e6a41ca25f3b1011076e"],["img/random/qwq-70.png","f8eea61bf22368a9a2a0c9c6771d2295"],["img/sidebar_header.png","0ac2232bb0756d0d4e5f04875b443217"],["img/upyun_logo.svg","0895a1d05ab8bc4849337c5a7f4edda0"],["index.html","b96ac3af1b2f10b51cf0263f42dbe429"],["js/MathJax.js","1bef8ba3b323e77cd264bfc09662ae1e"],["js/Valine.min.js","c640924dc2c3508b1a1c8f3ab726f3fa"],["js/gallery/gallery.js","54dbd709efe8893194901af3fce1379d"],["js/hanabi-browser-bundle.js","3e48b9fa9ce496eaaee7783ea2e316a4"],["js/ie-blocker.en.js","eb054767893aa2f8e981be25c4221415"],["js/ie-blocker.zhCN.js","861699947bcd571f62d6dc10f1c43be0"],["js/jquery.min.js","a9cbac0142cd78192ca9f7ea50cdbe22"],["js/js.js","d69f3cf073c561b1820bbdd62b60bb06"],["js/js.min.js","067f54cc49bc46b052c6ac99074ccf8c"],["js/lazyload.min.js","d4171fcee357a95fa7b45ea0abee57dd"],["js/link.js","34ac04376d139010ae77e87b057fae6f"],["js/lsloader.js","d01962f06751b296c985a8fee73019f8"],["js/lsloader.min.js","fdef13cf99a299ae566d65ab828cdc19"],["js/nprogress.js","a65dd085bf65bea475165c8b5276b563"],["js/prettify.min.js","58dd3b7e2bc741230a5b2ec1987041eb"],["js/queue.js","3ef240fa4fc55888e5e234e48f23fc95"],["js/queue.min.js","1677e3c59497558a9f53b73b726dedc6"],["js/smoothscroll.js","94ecbf0028f9b2e48d8bb6551556e915"],["links/index.html","9405be32892d1ac886bf75a32375e087"],["page/2/index.html","ae791a772861770f2e060a327df0a1fa"],["page/3/index.html","d441a93a354c0c04106c76ba376f82d3"],["page/4/index.html","71b8a22b0b70ae54f4fbde7ac75439c2"],["tags/BFS/index.html","341e0dedffd4d1f8f7e15924180fde8c"],["tags/DFS/index.html","49c8c4e7d028a4b7d88116ba8d6d77a4"],["tags/KMP/index.html","9a107077c3984eb220d5cf585efba3bb"],["tags/LCA/index.html","4795f1215a74d4ede2bcd94c9901433a"],["tags/STL/index.html","3272b6b9de133cdd6a50877fc050c9e7"],["tags/index.html","ea001ce1b7f78c417f61be252fba5eb2"],["tags/二分图/index.html","93f61f2803f48c45274fc6e762a42908"],["tags/二分答案/index.html","1ada9c79513c5cc62c8438b14937297d"],["tags/其他/index.html","450f6fd4b2b89a487a315c06bf42287b"],["tags/前缀和/index.html","ca1975e0315619d5b86009247ad95406"],["tags/动态规划/index.html","13966dd9836ef2cf455ee8f8754a32fd"],["tags/区间/index.html","413df1ef868411a73a3e7c3c55e0f07f"],["tags/卡常/index.html","3b2e5f1244d2d5fa1e0a3c2f9052dab4"],["tags/图论/index.html","fecbd104f958163cea665a5486b7ef14"],["tags/差分/index.html","95207d526c0dd45c4ac148bf7d1962c0"],["tags/并查集/index.html","ee8ed41f75c0752d46340f853c4118ad"],["tags/排序/index.html","5e81dac256048676c5d7f403cc1bd0ad"],["tags/搜索/index.html","a49c197f253c9aa46b361c2b450a002b"],["tags/数论/index.html","548589039147b9600db9fd602fec053f"],["tags/暴力数据结构/index.html","0c7bf4d52314362ef8dd402787efd69d"],["tags/最小生成树/index.html","2c01263627df6c40c02755e8786f794f"],["tags/最短路径/index.html","b09b9fba6672b4f370e8bd9848dcc250"],["tags/树链剖分/index.html","00524448e91870be28d0634b5a5c83d8"],["tags/毒瘤/index.html","226c5728e2012e9c3fb7ca7df169f9cb"],["tags/珂朵莉树/index.html","7d8c097326c5fcba28779f3bd0336078"],["tags/线段树/index.html","5b18ee99ee4c30eea3075ea6575576de"],["tags/背包/index.html","76dca8073b90e94f65bc270b37c3d354"]];
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







