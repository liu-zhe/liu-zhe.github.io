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

var precacheConfig = [["D:/My_Blog/public/about/index.html","5799ea9a8b933b49a0b244a5dff4a36a"],["D:/My_Blog/public/archives/2018/07/index.html","cb9e0da1416d2fd209598757156c303f"],["D:/My_Blog/public/archives/2018/08/index.html","6209576b6a651a557e20b3fc972a8b1c"],["D:/My_Blog/public/archives/2018/09/index.html","99844c36fff66559a7945b17e95c4915"],["D:/My_Blog/public/archives/2018/10/index.html","7eeab21575b2fd32d228b707bb3bbee5"],["D:/My_Blog/public/archives/2018/12/index.html","5c1e8d2fcff7f5ef8d0b4987acf9ef79"],["D:/My_Blog/public/archives/2018/index.html","69d9e756ed4fa82ac0b19733a1a92bcb"],["D:/My_Blog/public/archives/2018/page/2/index.html","2d9e54e998c3b156f5e70a1f2101ad35"],["D:/My_Blog/public/archives/2019/01/index.html","5418feacb64ae6c972f1c8913ba9dcc0"],["D:/My_Blog/public/archives/2019/07/index.html","6791b2e29993b8b7ab69a245ee1c7c2f"],["D:/My_Blog/public/archives/2019/08/index.html","aa5b0d51ae69a0437c01a0d66634c298"],["D:/My_Blog/public/archives/2019/09/index.html","84025615f389155f0f15789c7190425f"],["D:/My_Blog/public/archives/2019/10/index.html","f564f90e77246a7d2e7f4853999bf7cb"],["D:/My_Blog/public/archives/2019/10/page/2/index.html","c019ecf60580b87a6430440b2a75adde"],["D:/My_Blog/public/archives/2019/index.html","7ca97302ceade561652a07ddd8c9d406"],["D:/My_Blog/public/archives/2019/page/2/index.html","8e25ec6139b855e4a2bba7b5841eda36"],["D:/My_Blog/public/archives/2019/page/3/index.html","077bba1646128fabea307fead4499ade"],["D:/My_Blog/public/archives/index.html","773d63cfb86f296302c72d13b3f555f9"],["D:/My_Blog/public/archives/page/2/index.html","516dcf33602d7d11cc3f8edc7c431d4a"],["D:/My_Blog/public/archives/page/3/index.html","57867d35cee97fe8504ccef4ef8abce0"],["D:/My_Blog/public/archives/page/4/index.html","50f4f7a3abb9b7fc01b2928d56093136"],["D:/My_Blog/public/articles/2018/07/STL-sort/index.html","6e8d6b6b1255fa98d62ee4ff83d50747"],["D:/My_Blog/public/articles/2018/07/并查集学习笔记/1.png","c01792916aab22c1ffe7816bf509c4bd"],["D:/My_Blog/public/articles/2018/07/并查集学习笔记/2.png","dbb3e029a7b876bcd9766ca29e5f4665"],["D:/My_Blog/public/articles/2018/07/并查集学习笔记/3.png","c9ada5ae61038f31b57dbfafcca24c97"],["D:/My_Blog/public/articles/2018/07/并查集学习笔记/4.png","597da8fa0e6d5e95cadcfbd48bf990b2"],["D:/My_Blog/public/articles/2018/07/并查集学习笔记/5.png","81bdf103da2965de6d458637a4ff32e6"],["D:/My_Blog/public/articles/2018/07/并查集学习笔记/6.png","63b8df0f691dd6385cbc5c1f8bfcdf23"],["D:/My_Blog/public/articles/2018/07/并查集学习笔记/index.html","5ffcdc05be82796e60351ecf29a4b149"],["D:/My_Blog/public/articles/2018/08/图的邻接表存储/1.png","234e3364855d51e1e35b9584958f5a6a"],["D:/My_Blog/public/articles/2018/08/图的邻接表存储/2.png","848b0de34801b10a3f688f53d4a08a8a"],["D:/My_Blog/public/articles/2018/08/图的邻接表存储/3.png","be85a2a984af3f2aa2b7dc37223bca33"],["D:/My_Blog/public/articles/2018/08/图的邻接表存储/4.png","cc87a5faa20db51db022de07231b3d04"],["D:/My_Blog/public/articles/2018/08/图的邻接表存储/5.png","f01003660b3b15b1f06200b3ce1bf066"],["D:/My_Blog/public/articles/2018/08/图的邻接表存储/graph.png","f37a84c4cbfab6b064cbbf6974288008"],["D:/My_Blog/public/articles/2018/08/图的邻接表存储/index.html","fbd4ba10671c3f3f542aad7637ef001a"],["D:/My_Blog/public/articles/2018/08/最大公约数算法/index.html","80389dd13c4feb6126de91b3e6d409a3"],["D:/My_Blog/public/articles/2018/08/最短路Floyd/graph.png","55e777f191f1f8b7b5cedc7f5dc592e1"],["D:/My_Blog/public/articles/2018/08/最短路Floyd/graph1.png","e0c582a617a8f0fb655fa035e503c595"],["D:/My_Blog/public/articles/2018/08/最短路Floyd/index.html","7dad68d680d2908c9246d959d8d3a0aa"],["D:/My_Blog/public/articles/2018/08/线段树小记/index.html","82cf2402982c54d3a6e4174174bd45cf"],["D:/My_Blog/public/articles/2018/08/给你的程序提速-论C++中的那些坑/index.html","55b4ad1c96012b28b272444ffd2ccf86"],["D:/My_Blog/public/articles/2018/09/Dijkstra从入门到出门/graph.png","975942b732099dfd980a969c9bac8658"],["D:/My_Blog/public/articles/2018/09/Dijkstra从入门到出门/graph1.png","0ff500fc440807d7ff6967aaf8ece7ba"],["D:/My_Blog/public/articles/2018/09/Dijkstra从入门到出门/graph2.png","298fc22a9f5ddbf7e4e8e7d0a7580dc2"],["D:/My_Blog/public/articles/2018/09/Dijkstra从入门到出门/graph3.png","a40854187af4a9ee7b928dc786db9900"],["D:/My_Blog/public/articles/2018/09/Dijkstra从入门到出门/index.html","5483f9736ca1bead89c5027c6eff148c"],["D:/My_Blog/public/articles/2018/09/Dijkstra从入门到出门/mar.png","fafda5fc48b20dd8998b39dcdef69813"],["D:/My_Blog/public/articles/2018/10/C-各个函数读写速度一览/index.html","e2120a521dddcf494eb321d2053fc941"],["D:/My_Blog/public/articles/2018/10/快读&&快写——模板与解释/index.html","89e645374285fa1819e669d705fdad1d"],["D:/My_Blog/public/articles/2018/12/前缀和/index.html","7362e645a7a2fe8733ce49b567f2b237"],["D:/My_Blog/public/articles/2018/12/差分/index.html","144c255a395b87b3f31be37cc7347159"],["D:/My_Blog/public/articles/2019/01/01背包小记/index.html","ee65f9f5fe3bfafb8fb9d9316fa7b9bb"],["D:/My_Blog/public/articles/2019/01/转载－KMP算法/1.jpg","274ebe59d149ec12573e4b8d8837ad4a"],["D:/My_Blog/public/articles/2019/01/转载－KMP算法/2.jpg","01c28ba8bf43132bb616e15f8aa0608d"],["D:/My_Blog/public/articles/2019/01/转载－KMP算法/3.jpg","289ff35a1d3f29f09b424987d4581d1b"],["D:/My_Blog/public/articles/2019/01/转载－KMP算法/4.jpg","6dd55f9823121d8985ea96307463deb7"],["D:/My_Blog/public/articles/2019/01/转载－KMP算法/5.jpg","903f3fcc9903df38fe9a16bb1e28e61f"],["D:/My_Blog/public/articles/2019/01/转载－KMP算法/6.jpg","994a0383c78e8b5ba592a338c56ab9cb"],["D:/My_Blog/public/articles/2019/01/转载－KMP算法/7.jpg","8ab91b4b1d0746870f54c96beeed3569"],["D:/My_Blog/public/articles/2019/01/转载－KMP算法/8.jpg","b796a6a8e129919a623968044b5dedbc"],["D:/My_Blog/public/articles/2019/01/转载－KMP算法/index.html","e1bf19814a70194069cd0e25758e867c"],["D:/My_Blog/public/articles/2019/07/Axis-NOI导刊2011提高（05）/index.html","3923a0c0533ad6fc8e44a50cb63a53ab"],["D:/My_Blog/public/articles/2019/07/最长上升子序列/index.html","857058001d6759151f8e7425f4b1157a"],["D:/My_Blog/public/articles/2019/08/DFS-BFS-ID-IDA-搜索算法简介/1.gif","51ce8fb962e159aa2965adc025388056"],["D:/My_Blog/public/articles/2019/08/DFS-BFS-ID-IDA-搜索算法简介/dfs.png","7059390bf550df8a9b919fbe4fe57ff7"],["D:/My_Blog/public/articles/2019/08/DFS-BFS-ID-IDA-搜索算法简介/index.html","b61da4efa6b73affc65b2e49fabd2925"],["D:/My_Blog/public/articles/2019/09/洛谷P2678-跳石头-题解/index.html","dfbf0b292b2729da18b15106b19d1686"],["D:/My_Blog/public/articles/2019/10/CF1179A-Valeriy-and-Deque题解/index.html","4b198fabee7a6434cd7b21279be0edb8"],["D:/My_Blog/public/articles/2019/10/Kruskal重构树/graph.png","d16c4fe6131a67420e44d97d5d0a640b"],["D:/My_Blog/public/articles/2019/10/Kruskal重构树/graph1.png","39043722496363139272f9f470a6671b"],["D:/My_Blog/public/articles/2019/10/Kruskal重构树/graph2.png","77fa552fdb43d73c82cd9ed4b228c4d1"],["D:/My_Blog/public/articles/2019/10/Kruskal重构树/graph3.png","9db9150048274caa25e601be24578095"],["D:/My_Blog/public/articles/2019/10/Kruskal重构树/index.html","99923994b1bde86a0613f662b4fae6cb"],["D:/My_Blog/public/articles/2019/10/NOIP2018货币系统题解/index.html","49a4b95350ff9033d1268c5ae2cabdc6"],["D:/My_Blog/public/articles/2019/10/中山纪念中学中DAY1的记录/index.html","80430ed8f899057c483997f49c4de6de"],["D:/My_Blog/public/articles/2019/10/分层图最短路小记/index.html","b1865f2b71284d55e5131c652eaa3011"],["D:/My_Blog/public/articles/2019/10/分层图最短路小记/liuzhe.png","6b5ad4bff8c3aecaefde0b57d8bcd498"],["D:/My_Blog/public/articles/2019/10/分层图最短路小记/payphone.png","be0bf7d37e540298898e35f07d92a9f6"],["D:/My_Blog/public/articles/2019/10/双指针-CF660C题解/index.html","a58fadcb1ceffd5922069b4c9f9dde5a"],["D:/My_Blog/public/articles/2019/10/埃氏筛小记/index.html","240e268d2f1db78cf69c970614964da8"],["D:/My_Blog/public/articles/2019/10/对拍模板/index.html","8987d1da28bcf70848758c54c7b03d96"],["D:/My_Blog/public/articles/2019/10/树链剖分—重链剖分小记/64629076_p0_master1200.jpg","0c0108aac16984b187f6a14ea0ff9abd"],["D:/My_Blog/public/articles/2019/10/树链剖分—重链剖分小记/hld.png","047d7287bb9ce707370a99d78b226597"],["D:/My_Blog/public/articles/2019/10/树链剖分—重链剖分小记/index.html","7361367a51fcd4c0a9a45103a698336f"],["D:/My_Blog/public/articles/2019/10/树链剖分—重链剖分小记/v2-9c08dae6f0b1d00234b281ef96611d3c_hd.jpg","6f77b514423ebf74f341c51bc2c5e3d1"],["D:/My_Blog/public/articles/2019/10/洛谷P1144最短路计数/index.html","41230b09257047c5f3c0c103ce1d39f2"],["D:/My_Blog/public/articles/2019/10/洛谷P1967货车运输题解/index.html","d18e2058a1d94361ee670f96d7af6b43"],["D:/My_Blog/public/articles/2019/10/洛谷P2024食物链题解/index.html","9284b51338b038bf88fe6ac5eb79bee4"],["D:/My_Blog/public/articles/2019/10/洛谷P2071座位安排题解/index.html","0b96fe4cd3474be716284816be411039"],["D:/My_Blog/public/articles/2019/10/洛谷P2613有理数取余题解/index.html","d4e52bdf979278082a84136b74a7423c"],["D:/My_Blog/public/articles/2019/10/珂朵莉树（ODT）详解/CF.png","136fcce901a5c11f71b891b96e19c2da"],["D:/My_Blog/public/articles/2019/10/珂朵莉树（ODT）详解/index.html","00854f68660a49ef12a3127d47bf9cb9"],["D:/My_Blog/public/css/disqus-proxy.css","87976db321c1c288aa3d9d4af06c8ad8"],["D:/My_Blog/public/css/disqus-proxy.min.css","caa38dd245e9da4c20580c256e540bd6"],["D:/My_Blog/public/css/duoshuo.css","bdd8f7eb0dd14fc7e719cab11e685a9e"],["D:/My_Blog/public/css/duoshuo.min.css","6457d80daef45eca1f7399b2329b1dc2"],["D:/My_Blog/public/css/fontawesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["D:/My_Blog/public/css/gallery.min.css","a62dc56ec5981c978cddcba32f2dc875"],["D:/My_Blog/public/css/ie-blocker.css","4c323bd282014d64264bad241f1c14d3"],["D:/My_Blog/public/css/material-icons.css","a6a841fd177f69bd07dbe919a744439b"],["D:/My_Blog/public/css/material.css","f65ff1c879db0e257bd7d9521f0eaa57"],["D:/My_Blog/public/css/material.min.css","67b6bbd91d44e12c7304a47f58672d38"],["D:/My_Blog/public/css/prettify.css","074dc30ad95ce2f227848a2c38bc7fbd"],["D:/My_Blog/public/css/prettify.min.css","ce9f124ce53dbfcf5758512737ee9899"],["D:/My_Blog/public/css/prettify/atelier-cave-dark.min.css","78d9bbfc7d0f526727e9da749cd08a44"],["D:/My_Blog/public/css/prettify/atelier-cave-light.min.css","e4c2bf4caff36e974733bae61be7a10b"],["D:/My_Blog/public/css/prettify/atelier-dune-dark.min.css","4aafbf8ec70b42c2b7964aa2b347bf68"],["D:/My_Blog/public/css/prettify/atelier-dune-light.min.css","65f9c4494342967919044e847347634c"],["D:/My_Blog/public/css/prettify/atelier-estuary-dark.min.css","79f259a7e1a0ab58772d339f97c53bf7"],["D:/My_Blog/public/css/prettify/atelier-estuary-light.min.css","65039bc195c71fa32df0c35bc902587d"],["D:/My_Blog/public/css/prettify/atelier-forest-dark.min.css","cbc537385cc8ab19748f9d4160a1e46c"],["D:/My_Blog/public/css/prettify/atelier-forest-light.min.css","1dda1f8f21aeedbe0fb68caf55c615e0"],["D:/My_Blog/public/css/prettify/atelier-heath-dark.min.css","b52d843659b13491b555f324bebfe9e8"],["D:/My_Blog/public/css/prettify/atelier-heath-light.min.css","0d999c502c821f1b761ad772d7301067"],["D:/My_Blog/public/css/prettify/atelier-lakeside-dark.min.css","f48fd98ed8f7ed8aa59fb57c87247b23"],["D:/My_Blog/public/css/prettify/atelier-lakeside-light.min.css","bc790feb4057204347c45ea551d0d784"],["D:/My_Blog/public/css/prettify/atelier-plateau-dark.min.css","e81b69c147a9ffbd298dccdaf02a810f"],["D:/My_Blog/public/css/prettify/atelier-plateau-light.min.css","ad2d0ed869dc8142306110f8b7fa9035"],["D:/My_Blog/public/css/prettify/atelier-savanna-dark.min.css","b3a404d78c50fbe9968d0d4dac123484"],["D:/My_Blog/public/css/prettify/atelier-savanna-light.min.css","7d4087bd0552352c12ee3dd8f397db75"],["D:/My_Blog/public/css/prettify/atelier-seaside-dark.min.css","10a0183644bd5c369616f0b94298c8f5"],["D:/My_Blog/public/css/prettify/atelier-seaside-light.min.css","6fbd6de95fcd79393de5fbb4e7a3dac7"],["D:/My_Blog/public/css/prettify/atelier-sulphurpool-dark.min.css","be693407f25090368983c17ad1fe1dca"],["D:/My_Blog/public/css/prettify/atelier-sulphurpool-light.min.css","fcd7ecab5bfa792ac082257e73f08abd"],["D:/My_Blog/public/css/prettify/github-v2.min.css","01fccac6dfbe2befe58590654a39f1c2"],["D:/My_Blog/public/css/prettify/github.min.css","dab580bb047648b053d1546fe31e1215"],["D:/My_Blog/public/css/prettify/hemisu-dark.min.css","7095b0461d4cf22e7935f0e447807c6d"],["D:/My_Blog/public/css/prettify/hemisu-light.min.css","54e6d654c095a946b257a243ffd5f3f7"],["D:/My_Blog/public/css/prettify/tomorrow-night-blue.min.css","2733cdcd81e2ca4e8d6598b2237c2eef"],["D:/My_Blog/public/css/prettify/tomorrow-night-bright.min.css","f15804e96aa1b47d36233c5b02732f28"],["D:/My_Blog/public/css/prettify/tomorrow-night-eighties.min.css","d8b250cd444ef8aafcaff7e5fd3f2830"],["D:/My_Blog/public/css/prettify/tomorrow-night.min.css","4259c6664fdae3e77c5dbc2d5c10cf88"],["D:/My_Blog/public/css/prettify/tomorrow.min.css","1c8792425eb2dedea306ec47bcb3c648"],["D:/My_Blog/public/css/prettify/tranquil-heart.min.css","ba5de9f48f4cb1b3b12b42fe047cc30e"],["D:/My_Blog/public/css/prettify/vibrant-ink.min.css","7b913faaa19c1af792ed54c7e0cf3deb"],["D:/My_Blog/public/css/style.css","d076c234da67bef747946e096fcd155b"],["D:/My_Blog/public/css/style.min.css","34a865290917c3f73ae93479a78c0efb"],["D:/My_Blog/public/css/uc.css","31dc264064481a02fb48046046a76084"],["D:/My_Blog/public/fonts/MaterialIcons-Regular.eot","e79bfd88537def476913f3ed52f4f4b3"],["D:/My_Blog/public/fonts/MaterialIcons-Regular.ttf","a37b0c01c0baf1888ca812cc0508f6e2"],["D:/My_Blog/public/fonts/MaterialIcons-Regular.woff","012cf6a10129e2275d79d6adac7f3b02"],["D:/My_Blog/public/fonts/Roboto-Black.ttf","4dae2e3c6207a71de6b078b879230062"],["D:/My_Blog/public/fonts/Roboto-Bold.ttf","a68db3b33213fa138e6f72a5b76ac632"],["D:/My_Blog/public/fonts/Roboto-Light.ttf","8d252992868e895b059335848dec3402"],["D:/My_Blog/public/fonts/Roboto-Medium.ttf","989d2dff37a09f19c6dbc6f0e8f9b4ea"],["D:/My_Blog/public/fonts/Roboto-Regular.ttf","8f793587dcf03f31c551c5b60d175fc2"],["D:/My_Blog/public/fonts/Roboto-Thin.ttf","21c61396b4bea54e7308a7cda49edbe0"],["D:/My_Blog/public/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["D:/My_Blog/public/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["D:/My_Blog/public/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["D:/My_Blog/public/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["D:/My_Blog/public/images/icons/icon-128x128.png","a33c9140ca03c567bd7f37a9cf5573e1"],["D:/My_Blog/public/images/icons/icon-144x144.png","2c4e37a7f384bd9ac86be6144c45920b"],["D:/My_Blog/public/images/icons/icon-152x152.png","6dc5962f26164c2ee2a2726101b848c4"],["D:/My_Blog/public/images/icons/icon-192x192.png","9245a9f459de2e21f21c93592631a212"],["D:/My_Blog/public/images/icons/icon-384x384.png","c816f178bc15b2f0f9ca4aadfea944df"],["D:/My_Blog/public/images/icons/icon-512x512.png","d581bf7b87b5b40704bebc5cd1cfc3f7"],["D:/My_Blog/public/images/icons/icon-72x72.png","03e1995815472315b46fd08b6e315559"],["D:/My_Blog/public/images/icons/icon-96x96.png","16a39fbf1490de058036e26d70bdaf66"],["D:/My_Blog/public/img/avatar.png","0acf37b762876c3999bb712819ef0fe3"],["D:/My_Blog/public/img/bg.png","db5830a9208cfa1f3977e30af172ffbb"],["D:/My_Blog/public/img/browserstack_logo.png","9901607d552cbf936a8c86e6f206aa47"],["D:/My_Blog/public/img/favicon.png","c1ff911b185ce19e850d38f681e8e541"],["D:/My_Blog/public/img/footer/footer_ico-bilibili.svg","d67fcd7d1fa5999e9a785b2dfaa39f2c"],["D:/My_Blog/public/img/footer/footer_ico-facebook.svg","64c580c2986d6f16d04b1c4d3b896fd2"],["D:/My_Blog/public/img/footer/footer_ico-github.svg","4b3dc07ff72cee5be0eff6a100a354cd"],["D:/My_Blog/public/img/footer/footer_ico-gplus.svg","7d75444af4019d5612e2005ab501eca5"],["D:/My_Blog/public/img/footer/footer_ico-instagram.svg","c8eaf1f2fe5f4d9a7b26f2981d6f14ed"],["D:/My_Blog/public/img/footer/footer_ico-linkedin.svg","5e4c53b53c9d59880c6e483d57309a6a"],["D:/My_Blog/public/img/footer/footer_ico-segmentfault.svg","dbf66b5f0165802dc698eec23e147967"],["D:/My_Blog/public/img/footer/footer_ico-telegram.svg","50e65465cc40292f7101255daed7c593"],["D:/My_Blog/public/img/footer/footer_ico-tumblr.svg","b127eb5d3e455ba8794ddc4d060df5bc"],["D:/My_Blog/public/img/footer/footer_ico-twitter.svg","90ff42c9e275a7cd7ca5bf4291c93961"],["D:/My_Blog/public/img/footer/footer_ico-v2ex.svg","3500b18a911b661a2b379b36b39def20"],["D:/My_Blog/public/img/footer/footer_ico-weibo.svg","f1f6375680122267b9ebfc3b546307e8"],["D:/My_Blog/public/img/footer/footer_ico-zhihu.svg","39538ba6607a9dcadf6d4dca35b687b8"],["D:/My_Blog/public/img/gallery/arrow.svg","f3f776676f3b78b5180c9d2e08c2d532"],["D:/My_Blog/public/img/gallery/close.svg","181336ad0bd48cdde68d7fb8be304daf"],["D:/My_Blog/public/img/gallery/spinner.svg","2a61c8efd2d72146d79a2f6692840a85"],["D:/My_Blog/public/img/logo.png","c1ff911b185ce19e850d38f681e8e541"],["D:/My_Blog/public/img/me.jpg","2becee58695dcb4a6d8c2410aa0906d9"],["D:/My_Blog/public/img/random/material-1.png","0c4e486759ad62e3415f8f197f0311f7"],["D:/My_Blog/public/img/random/material-10.png","2263d9d1cc9b0724e6331374c33f988b"],["D:/My_Blog/public/img/random/material-11.png","41127baf9a286e968a63653dee50ba21"],["D:/My_Blog/public/img/random/material-12.png","2507dbe92186b0b39df6331347aa2c27"],["D:/My_Blog/public/img/random/material-13.png","5d127887b6d043259f7e2fb99cd08175"],["D:/My_Blog/public/img/random/material-14.png","84c21a53679bddbe415fdae1d3c02163"],["D:/My_Blog/public/img/random/material-15.png","ec116546453394cc0d78e580d6d52dd5"],["D:/My_Blog/public/img/random/material-16.png","39a5dca2dc2de60bd5dd191f205db7d6"],["D:/My_Blog/public/img/random/material-17.png","30a855e361dcf170aecdce04ce564c68"],["D:/My_Blog/public/img/random/material-18.png","584900ff821930a8b093b4c0a58be34b"],["D:/My_Blog/public/img/random/material-19.png","c004830c8683856939dc83b75b230b66"],["D:/My_Blog/public/img/random/material-2.png","fa4f4588b9fab07979acd61b94d34fa0"],["D:/My_Blog/public/img/random/material-3.png","418c3457b6792eb732844d41d2501294"],["D:/My_Blog/public/img/random/material-4.png","99898b727359e568759eebbb2c9e4a8b"],["D:/My_Blog/public/img/random/material-5.png","e521776cb427f848546e20d784888a55"],["D:/My_Blog/public/img/random/material-6.png","db810792edf3d40de5baf5401a9a0626"],["D:/My_Blog/public/img/random/material-7.png","d7e9fe3e0e3db6b841ab12fad331daed"],["D:/My_Blog/public/img/random/material-8.png","9f1914138052c3a631e1f2b2cf674a46"],["D:/My_Blog/public/img/random/material-9.png","069b687b7f1069254c816a56317bfaad"],["D:/My_Blog/public/img/sidebar_header.png","0ac2232bb0756d0d4e5f04875b443217"],["D:/My_Blog/public/img/upyun_logo.svg","0895a1d05ab8bc4849337c5a7f4edda0"],["D:/My_Blog/public/index.html","3fc8c94c79c5c1d6e2ac7db08d545f63"],["D:/My_Blog/public/js/MathJax.js","1bef8ba3b323e77cd264bfc09662ae1e"],["D:/My_Blog/public/js/Valine.min.js","c640924dc2c3508b1a1c8f3ab726f3fa"],["D:/My_Blog/public/js/gallery/gallery.js","54dbd709efe8893194901af3fce1379d"],["D:/My_Blog/public/js/hanabi-browser-bundle.js","3e48b9fa9ce496eaaee7783ea2e316a4"],["D:/My_Blog/public/js/ie-blocker.en.js","eb054767893aa2f8e981be25c4221415"],["D:/My_Blog/public/js/ie-blocker.zhCN.js","861699947bcd571f62d6dc10f1c43be0"],["D:/My_Blog/public/js/jquery.min.js","a9cbac0142cd78192ca9f7ea50cdbe22"],["D:/My_Blog/public/js/js.js","d69f3cf073c561b1820bbdd62b60bb06"],["D:/My_Blog/public/js/js.min.js","067f54cc49bc46b052c6ac99074ccf8c"],["D:/My_Blog/public/js/lazyload.min.js","d4171fcee357a95fa7b45ea0abee57dd"],["D:/My_Blog/public/js/link.js","34ac04376d139010ae77e87b057fae6f"],["D:/My_Blog/public/js/lsloader.js","d01962f06751b296c985a8fee73019f8"],["D:/My_Blog/public/js/lsloader.min.js","fdef13cf99a299ae566d65ab828cdc19"],["D:/My_Blog/public/js/nprogress.js","a65dd085bf65bea475165c8b5276b563"],["D:/My_Blog/public/js/prettify.min.js","58dd3b7e2bc741230a5b2ec1987041eb"],["D:/My_Blog/public/js/queue.js","3ef240fa4fc55888e5e234e48f23fc95"],["D:/My_Blog/public/js/queue.min.js","1677e3c59497558a9f53b73b726dedc6"],["D:/My_Blog/public/js/smoothscroll.js","94ecbf0028f9b2e48d8bb6551556e915"],["D:/My_Blog/public/links/index.html","b4780e3e0493154ce09e9ce67f527f55"],["D:/My_Blog/public/page/2/index.html","deaf03c59450c70e2fc37e0e3a151c99"],["D:/My_Blog/public/page/3/index.html","1723074599713c268b83698e773ab20e"],["D:/My_Blog/public/page/4/index.html","f1b2dfaa420620b75ee528213a614f35"],["D:/My_Blog/public/page/5/index.html","adbd2a3a8096ea40edf4dfe85f14904a"],["D:/My_Blog/public/tags/BFS/index.html","803baa3238bcb4adefcb4832032717d3"],["D:/My_Blog/public/tags/DFS/index.html","634d372ed03475debdf2573540295c53"],["D:/My_Blog/public/tags/KMP/index.html","77c20b8f47ecf5a4b9dfc2cc52edca76"],["D:/My_Blog/public/tags/LCA/index.html","3a841e0b14b4328999609e7198e87277"],["D:/My_Blog/public/tags/STL/index.html","e7f1a5e9c0fdc9833bf4096af624b3e0"],["D:/My_Blog/public/tags/exgcd/index.html","e47c0ee1ddfd97290bc85cd07846a518"],["D:/My_Blog/public/tags/index.html","dd43c4f89a28adc8878e6f0640a87dd2"],["D:/My_Blog/public/tags/python/index.html","58bfdebdc68d25132633f15396d52133"],["D:/My_Blog/public/tags/乱搞/index.html","726feebf18dd1f7a238981073783cacf"],["D:/My_Blog/public/tags/二分图/index.html","8b5fab1a7bf0e2529f779dad3bbf2906"],["D:/My_Blog/public/tags/二分答案/index.html","0646a4d501562684367cb45d66dae861"],["D:/My_Blog/public/tags/其他/index.html","b194e2306c3968173bf2329f769dd518"],["D:/My_Blog/public/tags/前缀和/index.html","6c54b2c9101ffd5c2cb1f321efcf85f7"],["D:/My_Blog/public/tags/动态规划/index.html","65f625153b6f05d29e2f86543e09c031"],["D:/My_Blog/public/tags/区间/index.html","e74bd59cb89dff93f400ac137c47589a"],["D:/My_Blog/public/tags/卡常/index.html","49091f8dad97282b163de32d4bfa28ed"],["D:/My_Blog/public/tags/双指针/index.html","ac35d7044571f3fbac82d3437d80e471"],["D:/My_Blog/public/tags/图论/index.html","0263af1de725bb1e4eb064ea05557145"],["D:/My_Blog/public/tags/差分/index.html","c04d4e084ed5ad2000bfe95f434b1a22"],["D:/My_Blog/public/tags/并查集/index.html","1601a1d0ac7a009ae633ed68e3dd785c"],["D:/My_Blog/public/tags/排序/index.html","d564ebca1a34b40dfb3b95fe4b2e29c5"],["D:/My_Blog/public/tags/搜索/index.html","57389d607a6f8f2f4dbb46649a1ad424"],["D:/My_Blog/public/tags/数论/index.html","ac6915200efd411eea093aeec5aee2d0"],["D:/My_Blog/public/tags/暴力数据结构/index.html","7ab012a49f529b4b3f1e0abf359bf04d"],["D:/My_Blog/public/tags/最小生成树/index.html","b6b758972951dd9fbff8c05b2d498a40"],["D:/My_Blog/public/tags/最短路径/index.html","f6bdcc24633c089fd0395ffffe93909f"],["D:/My_Blog/public/tags/树链剖分/index.html","c26be975ba2f738de00dbb43997d55d5"],["D:/My_Blog/public/tags/毒瘤/index.html","5d533ce7e5925f62538afe86fe84f4c4"],["D:/My_Blog/public/tags/珂朵莉树/index.html","11c9b594dacd89a44a88fc485a6b5c0e"],["D:/My_Blog/public/tags/筛法/index.html","5c85397b9aaff3ca1ddcd0e181c29563"],["D:/My_Blog/public/tags/线段树/index.html","2073b56b7dfa26ca1738ae12a10b3b5a"],["D:/My_Blog/public/tags/背包/index.html","2a5dd7953b2738d8c51a147fea01101f"],["D:/My_Blog/public/tags/逆元/index.html","31990576a2c76c14e30b514472712dae"]];
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







