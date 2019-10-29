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

var precacheConfig = [["D:/My_Blog/public/about/index.html","ea9b71773ef042fbe9e70f9fc2aa931e"],["D:/My_Blog/public/archives/2018/07/index.html","fe667400918934ce246ceaa552b0d3e3"],["D:/My_Blog/public/archives/2018/08/index.html","c4da4b250b0d3e035c458ef78ec8d599"],["D:/My_Blog/public/archives/2018/09/index.html","9ca0b71872424d22a97a4280b8da4137"],["D:/My_Blog/public/archives/2018/10/index.html","4ad4470df1474a83b36c6f1e7e797510"],["D:/My_Blog/public/archives/2018/12/index.html","9c39f67bf876e2a90047c5768fd1b4cd"],["D:/My_Blog/public/archives/2018/index.html","d09b41232d44615a2b9a424db446eeaa"],["D:/My_Blog/public/archives/2018/page/2/index.html","73fcd73ad08eb0271fcf6ec18debf047"],["D:/My_Blog/public/archives/2019/01/index.html","4815f905cab37c4522aa3344d36b7dab"],["D:/My_Blog/public/archives/2019/07/index.html","dc58035d18adcb8df57485d1dd7d6ada"],["D:/My_Blog/public/archives/2019/08/index.html","ecd202be1d20fd8a3534021ee2e0b7ba"],["D:/My_Blog/public/archives/2019/09/index.html","d4dcb38b98e7c64f1390a63304df3da2"],["D:/My_Blog/public/archives/2019/10/index.html","0a027fed5027bf0c02227731f583ff68"],["D:/My_Blog/public/archives/2019/10/page/2/index.html","0aca74c3974053a5d9e313a1fecd1c09"],["D:/My_Blog/public/archives/2019/10/page/3/index.html","90b0052d4f5714ed88bc6c8fea38e7df"],["D:/My_Blog/public/archives/2019/index.html","8333c13d539069ab537fa804b921f70e"],["D:/My_Blog/public/archives/2019/page/2/index.html","4bdc5b12f72b55e5adbad56a128a5b8f"],["D:/My_Blog/public/archives/2019/page/3/index.html","de080b52c46f13b253cd5e6003d745f3"],["D:/My_Blog/public/archives/index.html","2e06f0b11f4863c75962535f7a1fddfd"],["D:/My_Blog/public/archives/page/2/index.html","38d95f81a2cd52708f5debfb6f495619"],["D:/My_Blog/public/archives/page/3/index.html","e50d57505ff19025a9d75aa6fbecc9c3"],["D:/My_Blog/public/archives/page/4/index.html","f1c590df88088c07b77e5fbe871ccf8b"],["D:/My_Blog/public/archives/page/5/index.html","f07e6baf9df2b5db44265b15b5187d26"],["D:/My_Blog/public/articles/2018/07/STL-sort/index.html","f898c1e7eb44b1f7910c107e269a3d59"],["D:/My_Blog/public/articles/2018/07/并查集学习笔记/1.png","c01792916aab22c1ffe7816bf509c4bd"],["D:/My_Blog/public/articles/2018/07/并查集学习笔记/2.png","dbb3e029a7b876bcd9766ca29e5f4665"],["D:/My_Blog/public/articles/2018/07/并查集学习笔记/3.png","c9ada5ae61038f31b57dbfafcca24c97"],["D:/My_Blog/public/articles/2018/07/并查集学习笔记/4.png","597da8fa0e6d5e95cadcfbd48bf990b2"],["D:/My_Blog/public/articles/2018/07/并查集学习笔记/5.png","81bdf103da2965de6d458637a4ff32e6"],["D:/My_Blog/public/articles/2018/07/并查集学习笔记/6.png","63b8df0f691dd6385cbc5c1f8bfcdf23"],["D:/My_Blog/public/articles/2018/07/并查集学习笔记/index.html","e30c1dcb2e000351e8b671bc45b524de"],["D:/My_Blog/public/articles/2018/08/图的邻接表存储/1.png","234e3364855d51e1e35b9584958f5a6a"],["D:/My_Blog/public/articles/2018/08/图的邻接表存储/2.png","848b0de34801b10a3f688f53d4a08a8a"],["D:/My_Blog/public/articles/2018/08/图的邻接表存储/3.png","be85a2a984af3f2aa2b7dc37223bca33"],["D:/My_Blog/public/articles/2018/08/图的邻接表存储/4.png","cc87a5faa20db51db022de07231b3d04"],["D:/My_Blog/public/articles/2018/08/图的邻接表存储/5.png","f01003660b3b15b1f06200b3ce1bf066"],["D:/My_Blog/public/articles/2018/08/图的邻接表存储/graph.png","f37a84c4cbfab6b064cbbf6974288008"],["D:/My_Blog/public/articles/2018/08/图的邻接表存储/index.html","0bdce4f30df20a2ea0e783219a32f245"],["D:/My_Blog/public/articles/2018/08/最大公约数算法/index.html","c8bd046fc37b4407966dfca4e15244fe"],["D:/My_Blog/public/articles/2018/08/最短路Floyd/graph.png","55e777f191f1f8b7b5cedc7f5dc592e1"],["D:/My_Blog/public/articles/2018/08/最短路Floyd/graph1.png","e0c582a617a8f0fb655fa035e503c595"],["D:/My_Blog/public/articles/2018/08/最短路Floyd/index.html","df9e2bedf9705d9dbdbe4c99b976bca9"],["D:/My_Blog/public/articles/2018/08/线段树小记/index.html","e9d6ec07d44589f0698619ee81cf8387"],["D:/My_Blog/public/articles/2018/08/给你的程序提速-论C++中的那些坑/index.html","47c816d084aff9c2eab8bfb6e169e984"],["D:/My_Blog/public/articles/2018/09/Dijkstra从入门到出门/graph.png","975942b732099dfd980a969c9bac8658"],["D:/My_Blog/public/articles/2018/09/Dijkstra从入门到出门/graph1.png","0ff500fc440807d7ff6967aaf8ece7ba"],["D:/My_Blog/public/articles/2018/09/Dijkstra从入门到出门/graph2.png","298fc22a9f5ddbf7e4e8e7d0a7580dc2"],["D:/My_Blog/public/articles/2018/09/Dijkstra从入门到出门/graph3.png","a40854187af4a9ee7b928dc786db9900"],["D:/My_Blog/public/articles/2018/09/Dijkstra从入门到出门/index.html","03840a823438191d31202f73adb5ee1b"],["D:/My_Blog/public/articles/2018/09/Dijkstra从入门到出门/mar.png","fafda5fc48b20dd8998b39dcdef69813"],["D:/My_Blog/public/articles/2018/10/C-各个函数读写速度一览/index.html","95787ae491b36e2e0fd1ded9614e05db"],["D:/My_Blog/public/articles/2018/10/快读&&快写——模板与解释/index.html","d6e5659ff1c0481d44c88211990d9b2e"],["D:/My_Blog/public/articles/2018/12/前缀和/index.html","96bdecb736d803faaab2fe6adec59e06"],["D:/My_Blog/public/articles/2018/12/差分/index.html","12e2736b75342bd7e37231c63f3f1010"],["D:/My_Blog/public/articles/2019/01/01背包小记/index.html","6708b07903f1a060d842085703ca7041"],["D:/My_Blog/public/articles/2019/01/转载－KMP算法/1.jpg","274ebe59d149ec12573e4b8d8837ad4a"],["D:/My_Blog/public/articles/2019/01/转载－KMP算法/2.jpg","01c28ba8bf43132bb616e15f8aa0608d"],["D:/My_Blog/public/articles/2019/01/转载－KMP算法/3.jpg","289ff35a1d3f29f09b424987d4581d1b"],["D:/My_Blog/public/articles/2019/01/转载－KMP算法/4.jpg","6dd55f9823121d8985ea96307463deb7"],["D:/My_Blog/public/articles/2019/01/转载－KMP算法/5.jpg","903f3fcc9903df38fe9a16bb1e28e61f"],["D:/My_Blog/public/articles/2019/01/转载－KMP算法/6.jpg","994a0383c78e8b5ba592a338c56ab9cb"],["D:/My_Blog/public/articles/2019/01/转载－KMP算法/7.jpg","8ab91b4b1d0746870f54c96beeed3569"],["D:/My_Blog/public/articles/2019/01/转载－KMP算法/8.jpg","b796a6a8e129919a623968044b5dedbc"],["D:/My_Blog/public/articles/2019/01/转载－KMP算法/index.html","951adfdf17463c7fe8947c3fb2c907b8"],["D:/My_Blog/public/articles/2019/07/Axis-NOI导刊2011提高（05）/index.html","e11273892340beda98dc4d86215da09c"],["D:/My_Blog/public/articles/2019/07/最长上升子序列/index.html","337203f1e74934352a2a9809e955861a"],["D:/My_Blog/public/articles/2019/08/DFS-BFS-ID-IDA-搜索算法简介/1.gif","51ce8fb962e159aa2965adc025388056"],["D:/My_Blog/public/articles/2019/08/DFS-BFS-ID-IDA-搜索算法简介/dfs.png","7059390bf550df8a9b919fbe4fe57ff7"],["D:/My_Blog/public/articles/2019/08/DFS-BFS-ID-IDA-搜索算法简介/index.html","19ffc1218361f6777eb8d8750de5aaa6"],["D:/My_Blog/public/articles/2019/09/洛谷P2678-跳石头-题解/index.html","62eedf0cb7d7a366288ecf45df8ee45a"],["D:/My_Blog/public/articles/2019/10/CF1179A-Valeriy-and-Deque题解/index.html","33fc1df83af9f244cf4fbbfebdf73c4a"],["D:/My_Blog/public/articles/2019/10/CF135B-Rectangle-and-Square题解/index.html","7d1dc2574d21eef8e186746041f2c3b5"],["D:/My_Blog/public/articles/2019/10/Kruskal重构树/graph.png","d16c4fe6131a67420e44d97d5d0a640b"],["D:/My_Blog/public/articles/2019/10/Kruskal重构树/graph1.png","39043722496363139272f9f470a6671b"],["D:/My_Blog/public/articles/2019/10/Kruskal重构树/graph2.png","77fa552fdb43d73c82cd9ed4b228c4d1"],["D:/My_Blog/public/articles/2019/10/Kruskal重构树/graph3.png","9db9150048274caa25e601be24578095"],["D:/My_Blog/public/articles/2019/10/Kruskal重构树/index.html","e9a73a2755096ee53d858d521797f928"],["D:/My_Blog/public/articles/2019/10/Luogu-P1613-跑路/index.html","5a7efe2bd38401a55d452e706c9f50f0"],["D:/My_Blog/public/articles/2019/10/NOIP2010乌龟棋/index.html","a349845a0d1fe43c1bd557c761480483"],["D:/My_Blog/public/articles/2019/10/NOIP2018货币系统题解/index.html","1bb0c77c0fa1d538de7a7a1409ddb1d8"],["D:/My_Blog/public/articles/2019/10/UVA1395-苗条的生成树-Slim-Span-题解/index.html","5ea633bc5665328321b447b040accc07"],["D:/My_Blog/public/articles/2019/10/中山纪念中学中DAY1的记录/index.html","6e7f760992027d4fad2d0ea4e0c889d3"],["D:/My_Blog/public/articles/2019/10/分层图最短路小记/index.html","729395f6c2856256e0914a3da1fcb0a2"],["D:/My_Blog/public/articles/2019/10/分层图最短路小记/liuzhe.png","6b5ad4bff8c3aecaefde0b57d8bcd498"],["D:/My_Blog/public/articles/2019/10/分层图最短路小记/payphone.png","be0bf7d37e540298898e35f07d92a9f6"],["D:/My_Blog/public/articles/2019/10/双指针-CF660C题解/index.html","b704479287c66d8c791327ed3cbd349f"],["D:/My_Blog/public/articles/2019/10/埃氏筛小记/index.html","ae75cc0bcef1af1dbb59460349b4052d"],["D:/My_Blog/public/articles/2019/10/对拍模板/index.html","3e32dcd67400fc9f580d1666ee26472f"],["D:/My_Blog/public/articles/2019/10/旅行题解/1.png","33da4f60d4eafa69ebbb9b307dea961d"],["D:/My_Blog/public/articles/2019/10/旅行题解/2.png","06d85b7eb0a6ad469ac4ae211d4cd295"],["D:/My_Blog/public/articles/2019/10/旅行题解/3.png","337be7830a14231868c70064942bd6f3"],["D:/My_Blog/public/articles/2019/10/旅行题解/4.png","18894259f460f15631b9e2632ebfa134"],["D:/My_Blog/public/articles/2019/10/旅行题解/index.html","9e3d3128e8e16eda183a4b26f85bd0df"],["D:/My_Blog/public/articles/2019/10/树状数组求逆序对数/index.html","68510ca210cc6b633daa7ab4e8ad9e8b"],["D:/My_Blog/public/articles/2019/10/树链剖分—重链剖分小记/64629076_p0_master1200.jpg","0c0108aac16984b187f6a14ea0ff9abd"],["D:/My_Blog/public/articles/2019/10/树链剖分—重链剖分小记/hld.png","047d7287bb9ce707370a99d78b226597"],["D:/My_Blog/public/articles/2019/10/树链剖分—重链剖分小记/index.html","f69dc5b2717ac7c949ddbc95ddd03571"],["D:/My_Blog/public/articles/2019/10/树链剖分—重链剖分小记/v2-9c08dae6f0b1d00234b281ef96611d3c_hd.jpg","6f77b514423ebf74f341c51bc2c5e3d1"],["D:/My_Blog/public/articles/2019/10/欧拉筛/1.png","8b92bf8ca254497293c2351c0181e280"],["D:/My_Blog/public/articles/2019/10/欧拉筛/index.html","8fc77561d085577fe7c5678aca86d6f5"],["D:/My_Blog/public/articles/2019/10/洛谷-P1469-找筷子/index.html","e9f0a9ead096014e3816464d93323b25"],["D:/My_Blog/public/articles/2019/10/洛谷P1144最短路计数/index.html","6b9ec77fd75d7ab33b841739896eb91f"],["D:/My_Blog/public/articles/2019/10/洛谷P1967货车运输题解/index.html","995c2f0cf59ae184c27d67a1f25dbd8e"],["D:/My_Blog/public/articles/2019/10/洛谷P2024食物链题解/index.html","a3eedc28e6316a794514e28cc5693277"],["D:/My_Blog/public/articles/2019/10/洛谷P2071座位安排题解/index.html","1a12124eafb7d551154a27f2c781474d"],["D:/My_Blog/public/articles/2019/10/洛谷P2613有理数取余题解/index.html","71e4293764fc9ef29c6228bf1bedf072"],["D:/My_Blog/public/articles/2019/10/珂朵莉树（ODT）详解/CF.png","136fcce901a5c11f71b891b96e19c2da"],["D:/My_Blog/public/articles/2019/10/珂朵莉树（ODT）详解/index.html","c914182bcef922bc62d5f4cac4c4cac7"],["D:/My_Blog/public/css/disqus-proxy.css","87976db321c1c288aa3d9d4af06c8ad8"],["D:/My_Blog/public/css/disqus-proxy.min.css","caa38dd245e9da4c20580c256e540bd6"],["D:/My_Blog/public/css/duoshuo.css","bdd8f7eb0dd14fc7e719cab11e685a9e"],["D:/My_Blog/public/css/duoshuo.min.css","6457d80daef45eca1f7399b2329b1dc2"],["D:/My_Blog/public/css/fontawesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["D:/My_Blog/public/css/gallery.min.css","a62dc56ec5981c978cddcba32f2dc875"],["D:/My_Blog/public/css/ie-blocker.css","4c323bd282014d64264bad241f1c14d3"],["D:/My_Blog/public/css/material-icons.css","a6a841fd177f69bd07dbe919a744439b"],["D:/My_Blog/public/css/material.css","f65ff1c879db0e257bd7d9521f0eaa57"],["D:/My_Blog/public/css/material.min.css","67b6bbd91d44e12c7304a47f58672d38"],["D:/My_Blog/public/css/prettify.css","074dc30ad95ce2f227848a2c38bc7fbd"],["D:/My_Blog/public/css/prettify.min.css","ce9f124ce53dbfcf5758512737ee9899"],["D:/My_Blog/public/css/prettify/atelier-cave-dark.min.css","78d9bbfc7d0f526727e9da749cd08a44"],["D:/My_Blog/public/css/prettify/atelier-cave-light.min.css","e4c2bf4caff36e974733bae61be7a10b"],["D:/My_Blog/public/css/prettify/atelier-dune-dark.min.css","4aafbf8ec70b42c2b7964aa2b347bf68"],["D:/My_Blog/public/css/prettify/atelier-dune-light.min.css","65f9c4494342967919044e847347634c"],["D:/My_Blog/public/css/prettify/atelier-estuary-dark.min.css","79f259a7e1a0ab58772d339f97c53bf7"],["D:/My_Blog/public/css/prettify/atelier-estuary-light.min.css","65039bc195c71fa32df0c35bc902587d"],["D:/My_Blog/public/css/prettify/atelier-forest-dark.min.css","cbc537385cc8ab19748f9d4160a1e46c"],["D:/My_Blog/public/css/prettify/atelier-forest-light.min.css","1dda1f8f21aeedbe0fb68caf55c615e0"],["D:/My_Blog/public/css/prettify/atelier-heath-dark.min.css","b52d843659b13491b555f324bebfe9e8"],["D:/My_Blog/public/css/prettify/atelier-heath-light.min.css","0d999c502c821f1b761ad772d7301067"],["D:/My_Blog/public/css/prettify/atelier-lakeside-dark.min.css","f48fd98ed8f7ed8aa59fb57c87247b23"],["D:/My_Blog/public/css/prettify/atelier-lakeside-light.min.css","bc790feb4057204347c45ea551d0d784"],["D:/My_Blog/public/css/prettify/atelier-plateau-dark.min.css","e81b69c147a9ffbd298dccdaf02a810f"],["D:/My_Blog/public/css/prettify/atelier-plateau-light.min.css","ad2d0ed869dc8142306110f8b7fa9035"],["D:/My_Blog/public/css/prettify/atelier-savanna-dark.min.css","b3a404d78c50fbe9968d0d4dac123484"],["D:/My_Blog/public/css/prettify/atelier-savanna-light.min.css","7d4087bd0552352c12ee3dd8f397db75"],["D:/My_Blog/public/css/prettify/atelier-seaside-dark.min.css","10a0183644bd5c369616f0b94298c8f5"],["D:/My_Blog/public/css/prettify/atelier-seaside-light.min.css","6fbd6de95fcd79393de5fbb4e7a3dac7"],["D:/My_Blog/public/css/prettify/atelier-sulphurpool-dark.min.css","be693407f25090368983c17ad1fe1dca"],["D:/My_Blog/public/css/prettify/atelier-sulphurpool-light.min.css","fcd7ecab5bfa792ac082257e73f08abd"],["D:/My_Blog/public/css/prettify/github-v2.min.css","01fccac6dfbe2befe58590654a39f1c2"],["D:/My_Blog/public/css/prettify/github.min.css","dab580bb047648b053d1546fe31e1215"],["D:/My_Blog/public/css/prettify/hemisu-dark.min.css","7095b0461d4cf22e7935f0e447807c6d"],["D:/My_Blog/public/css/prettify/hemisu-light.min.css","54e6d654c095a946b257a243ffd5f3f7"],["D:/My_Blog/public/css/prettify/tomorrow-night-blue.min.css","2733cdcd81e2ca4e8d6598b2237c2eef"],["D:/My_Blog/public/css/prettify/tomorrow-night-bright.min.css","f15804e96aa1b47d36233c5b02732f28"],["D:/My_Blog/public/css/prettify/tomorrow-night-eighties.min.css","d8b250cd444ef8aafcaff7e5fd3f2830"],["D:/My_Blog/public/css/prettify/tomorrow-night.min.css","4259c6664fdae3e77c5dbc2d5c10cf88"],["D:/My_Blog/public/css/prettify/tomorrow.min.css","1c8792425eb2dedea306ec47bcb3c648"],["D:/My_Blog/public/css/prettify/tranquil-heart.min.css","ba5de9f48f4cb1b3b12b42fe047cc30e"],["D:/My_Blog/public/css/prettify/vibrant-ink.min.css","7b913faaa19c1af792ed54c7e0cf3deb"],["D:/My_Blog/public/css/style.css","d076c234da67bef747946e096fcd155b"],["D:/My_Blog/public/css/style.min.css","34a865290917c3f73ae93479a78c0efb"],["D:/My_Blog/public/css/uc.css","31dc264064481a02fb48046046a76084"],["D:/My_Blog/public/fonts/MaterialIcons-Regular.eot","e79bfd88537def476913f3ed52f4f4b3"],["D:/My_Blog/public/fonts/MaterialIcons-Regular.ttf","a37b0c01c0baf1888ca812cc0508f6e2"],["D:/My_Blog/public/fonts/MaterialIcons-Regular.woff","012cf6a10129e2275d79d6adac7f3b02"],["D:/My_Blog/public/fonts/Roboto-Black.ttf","4dae2e3c6207a71de6b078b879230062"],["D:/My_Blog/public/fonts/Roboto-Bold.ttf","a68db3b33213fa138e6f72a5b76ac632"],["D:/My_Blog/public/fonts/Roboto-Light.ttf","8d252992868e895b059335848dec3402"],["D:/My_Blog/public/fonts/Roboto-Medium.ttf","989d2dff37a09f19c6dbc6f0e8f9b4ea"],["D:/My_Blog/public/fonts/Roboto-Regular.ttf","8f793587dcf03f31c551c5b60d175fc2"],["D:/My_Blog/public/fonts/Roboto-Thin.ttf","21c61396b4bea54e7308a7cda49edbe0"],["D:/My_Blog/public/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["D:/My_Blog/public/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["D:/My_Blog/public/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["D:/My_Blog/public/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["D:/My_Blog/public/images/icons/icon-128x128.png","a33c9140ca03c567bd7f37a9cf5573e1"],["D:/My_Blog/public/images/icons/icon-144x144.png","2c4e37a7f384bd9ac86be6144c45920b"],["D:/My_Blog/public/images/icons/icon-152x152.png","6dc5962f26164c2ee2a2726101b848c4"],["D:/My_Blog/public/images/icons/icon-192x192.png","9245a9f459de2e21f21c93592631a212"],["D:/My_Blog/public/images/icons/icon-384x384.png","c816f178bc15b2f0f9ca4aadfea944df"],["D:/My_Blog/public/images/icons/icon-512x512.png","d581bf7b87b5b40704bebc5cd1cfc3f7"],["D:/My_Blog/public/images/icons/icon-72x72.png","03e1995815472315b46fd08b6e315559"],["D:/My_Blog/public/images/icons/icon-96x96.png","16a39fbf1490de058036e26d70bdaf66"],["D:/My_Blog/public/img/avatar.png","0acf37b762876c3999bb712819ef0fe3"],["D:/My_Blog/public/img/bg.png","db5830a9208cfa1f3977e30af172ffbb"],["D:/My_Blog/public/img/browserstack_logo.png","9901607d552cbf936a8c86e6f206aa47"],["D:/My_Blog/public/img/favicon.png","c1ff911b185ce19e850d38f681e8e541"],["D:/My_Blog/public/img/footer/footer_ico-bilibili.svg","d67fcd7d1fa5999e9a785b2dfaa39f2c"],["D:/My_Blog/public/img/footer/footer_ico-facebook.svg","64c580c2986d6f16d04b1c4d3b896fd2"],["D:/My_Blog/public/img/footer/footer_ico-github.svg","4b3dc07ff72cee5be0eff6a100a354cd"],["D:/My_Blog/public/img/footer/footer_ico-gplus.svg","7d75444af4019d5612e2005ab501eca5"],["D:/My_Blog/public/img/footer/footer_ico-instagram.svg","c8eaf1f2fe5f4d9a7b26f2981d6f14ed"],["D:/My_Blog/public/img/footer/footer_ico-linkedin.svg","5e4c53b53c9d59880c6e483d57309a6a"],["D:/My_Blog/public/img/footer/footer_ico-segmentfault.svg","dbf66b5f0165802dc698eec23e147967"],["D:/My_Blog/public/img/footer/footer_ico-telegram.svg","50e65465cc40292f7101255daed7c593"],["D:/My_Blog/public/img/footer/footer_ico-tumblr.svg","b127eb5d3e455ba8794ddc4d060df5bc"],["D:/My_Blog/public/img/footer/footer_ico-twitter.svg","90ff42c9e275a7cd7ca5bf4291c93961"],["D:/My_Blog/public/img/footer/footer_ico-v2ex.svg","3500b18a911b661a2b379b36b39def20"],["D:/My_Blog/public/img/footer/footer_ico-weibo.svg","f1f6375680122267b9ebfc3b546307e8"],["D:/My_Blog/public/img/footer/footer_ico-zhihu.svg","39538ba6607a9dcadf6d4dca35b687b8"],["D:/My_Blog/public/img/gallery/arrow.svg","f3f776676f3b78b5180c9d2e08c2d532"],["D:/My_Blog/public/img/gallery/close.svg","181336ad0bd48cdde68d7fb8be304daf"],["D:/My_Blog/public/img/gallery/spinner.svg","2a61c8efd2d72146d79a2f6692840a85"],["D:/My_Blog/public/img/logo.png","c1ff911b185ce19e850d38f681e8e541"],["D:/My_Blog/public/img/me.jpg","2becee58695dcb4a6d8c2410aa0906d9"],["D:/My_Blog/public/img/random/material-1.png","0c4e486759ad62e3415f8f197f0311f7"],["D:/My_Blog/public/img/random/material-10.png","2263d9d1cc9b0724e6331374c33f988b"],["D:/My_Blog/public/img/random/material-11.png","41127baf9a286e968a63653dee50ba21"],["D:/My_Blog/public/img/random/material-12.png","2507dbe92186b0b39df6331347aa2c27"],["D:/My_Blog/public/img/random/material-13.png","5d127887b6d043259f7e2fb99cd08175"],["D:/My_Blog/public/img/random/material-14.png","84c21a53679bddbe415fdae1d3c02163"],["D:/My_Blog/public/img/random/material-15.png","ec116546453394cc0d78e580d6d52dd5"],["D:/My_Blog/public/img/random/material-16.png","39a5dca2dc2de60bd5dd191f205db7d6"],["D:/My_Blog/public/img/random/material-17.png","30a855e361dcf170aecdce04ce564c68"],["D:/My_Blog/public/img/random/material-18.png","584900ff821930a8b093b4c0a58be34b"],["D:/My_Blog/public/img/random/material-19.png","c004830c8683856939dc83b75b230b66"],["D:/My_Blog/public/img/random/material-2.png","fa4f4588b9fab07979acd61b94d34fa0"],["D:/My_Blog/public/img/random/material-3.png","418c3457b6792eb732844d41d2501294"],["D:/My_Blog/public/img/random/material-4.png","99898b727359e568759eebbb2c9e4a8b"],["D:/My_Blog/public/img/random/material-5.png","e521776cb427f848546e20d784888a55"],["D:/My_Blog/public/img/random/material-6.png","db810792edf3d40de5baf5401a9a0626"],["D:/My_Blog/public/img/random/material-7.png","d7e9fe3e0e3db6b841ab12fad331daed"],["D:/My_Blog/public/img/random/material-8.png","9f1914138052c3a631e1f2b2cf674a46"],["D:/My_Blog/public/img/random/material-9.png","069b687b7f1069254c816a56317bfaad"],["D:/My_Blog/public/img/sidebar_header.png","0ac2232bb0756d0d4e5f04875b443217"],["D:/My_Blog/public/img/upyun_logo.svg","0895a1d05ab8bc4849337c5a7f4edda0"],["D:/My_Blog/public/index.html","94fcfcae45f16eb4c04d9afcd3ce6f07"],["D:/My_Blog/public/js/MathJax.js","1bef8ba3b323e77cd264bfc09662ae1e"],["D:/My_Blog/public/js/Valine.min.js","c640924dc2c3508b1a1c8f3ab726f3fa"],["D:/My_Blog/public/js/gallery/gallery.js","54dbd709efe8893194901af3fce1379d"],["D:/My_Blog/public/js/hanabi-browser-bundle.js","3e48b9fa9ce496eaaee7783ea2e316a4"],["D:/My_Blog/public/js/ie-blocker.en.js","eb054767893aa2f8e981be25c4221415"],["D:/My_Blog/public/js/ie-blocker.zhCN.js","861699947bcd571f62d6dc10f1c43be0"],["D:/My_Blog/public/js/jquery.min.js","a9cbac0142cd78192ca9f7ea50cdbe22"],["D:/My_Blog/public/js/js.js","d69f3cf073c561b1820bbdd62b60bb06"],["D:/My_Blog/public/js/js.min.js","067f54cc49bc46b052c6ac99074ccf8c"],["D:/My_Blog/public/js/lazyload.min.js","d4171fcee357a95fa7b45ea0abee57dd"],["D:/My_Blog/public/js/link.js","34ac04376d139010ae77e87b057fae6f"],["D:/My_Blog/public/js/lsloader.js","d01962f06751b296c985a8fee73019f8"],["D:/My_Blog/public/js/lsloader.min.js","fdef13cf99a299ae566d65ab828cdc19"],["D:/My_Blog/public/js/nprogress.js","a65dd085bf65bea475165c8b5276b563"],["D:/My_Blog/public/js/prettify.min.js","58dd3b7e2bc741230a5b2ec1987041eb"],["D:/My_Blog/public/js/queue.js","3ef240fa4fc55888e5e234e48f23fc95"],["D:/My_Blog/public/js/queue.min.js","1677e3c59497558a9f53b73b726dedc6"],["D:/My_Blog/public/js/smoothscroll.js","94ecbf0028f9b2e48d8bb6551556e915"],["D:/My_Blog/public/links/index.html","cae0961e4126c3d84a6b2f8865ab0735"],["D:/My_Blog/public/page/2/index.html","354eabd35b0c75b7b1193424aa9dab1d"],["D:/My_Blog/public/page/3/index.html","e6034b2b17f3834a07772ba532c1f329"],["D:/My_Blog/public/page/4/index.html","971cb5afe80ab42c624c7d9ebebf7154"],["D:/My_Blog/public/page/5/index.html","83782011da45a3b8de4603369e46f1f4"],["D:/My_Blog/public/page/6/index.html","8fb3882c72d4f3913b33717fe2f90844"],["D:/My_Blog/public/tags/BFS/index.html","ceb2d733a8a14b64fbda80e5a1ea2004"],["D:/My_Blog/public/tags/DFS/index.html","b669ed0a751e9fa235e01fd1baafeb9a"],["D:/My_Blog/public/tags/KMP/index.html","35b086866d6d95a42eecb1416fa12604"],["D:/My_Blog/public/tags/LCA/index.html","c160e6f12de1e95672749c99e03805d5"],["D:/My_Blog/public/tags/STL/index.html","4751e2003985e76a1a5daefab2fc8ec2"],["D:/My_Blog/public/tags/exgcd/index.html","457f6b256ec99e70c4a06fb903436d05"],["D:/My_Blog/public/tags/idea/index.html","8cbe9ada814cd9e5ab70295542905d67"],["D:/My_Blog/public/tags/index.html","600f5a12a7c07646e414e39ba88f2b10"],["D:/My_Blog/public/tags/python/index.html","b5edb42b94385794384e27265970da20"],["D:/My_Blog/public/tags/乱搞/index.html","ba32b6c00a0e1b53c3fec9c3e26e7ae4"],["D:/My_Blog/public/tags/二分图/index.html","8c78b0db5cfc3ef977995a46aeb0c97f"],["D:/My_Blog/public/tags/二分答案/index.html","fde0b37a78f849124c55f2272e12cb54"],["D:/My_Blog/public/tags/倍增/index.html","0aa1af91f67fe49879542aec85d5c14f"],["D:/My_Blog/public/tags/其他/index.html","ea63d1d425237b27fb215cbc521668dc"],["D:/My_Blog/public/tags/前缀和/index.html","84d12adad56d6209f896a966d596fbc5"],["D:/My_Blog/public/tags/动态规划/index.html","516d70ef11e781487b0c417e463fcbcb"],["D:/My_Blog/public/tags/区间/index.html","bfe343e1fce2d5f9401971f5048da8a8"],["D:/My_Blog/public/tags/卡常/index.html","5340d9b99fdf2db54a27cde36e4c320a"],["D:/My_Blog/public/tags/双指针/index.html","c43bbdcc4e8dd7622946f09b9066571b"],["D:/My_Blog/public/tags/图论/index.html","ce56702375874a785adf936560ba30a3"],["D:/My_Blog/public/tags/差分/index.html","f581e264e01464e5bd1e371d54037587"],["D:/My_Blog/public/tags/并查集/index.html","85c7e6ae9792d2c61e4fc13a2b9c7bc0"],["D:/My_Blog/public/tags/排序/index.html","e7ff6316b5da2502890dd1404bbb62a6"],["D:/My_Blog/public/tags/搜索/index.html","97d50ddfb147c95e3b2bc96d7831e440"],["D:/My_Blog/public/tags/数论/index.html","30f469011a6016b83783d2976507f9ad"],["D:/My_Blog/public/tags/暴力数据结构/index.html","f055d28c666bb3900d3348717b1753d6"],["D:/My_Blog/public/tags/最小生成树/index.html","f4af1a9b35cdba1c41f6b4fcd5b485ea"],["D:/My_Blog/public/tags/最短路/index.html","4556c05bb813e4e214b62b5bedfc201a"],["D:/My_Blog/public/tags/最短路径/index.html","12b6a49ddd3e7054102cc6e4d5f8565e"],["D:/My_Blog/public/tags/枚举/index.html","269a8ed8abe284a6e1eb78ad73102e19"],["D:/My_Blog/public/tags/树状数组/index.html","7bd691a2c6690e3f2dde2836a7a6d454"],["D:/My_Blog/public/tags/树链剖分/index.html","10580e430db65a78d1a62b058d9392f7"],["D:/My_Blog/public/tags/毒瘤/index.html","f85395857283a5477a6c47cb9551f1e2"],["D:/My_Blog/public/tags/珂朵莉树/index.html","40a77331c370cb026b35184c17613fc3"],["D:/My_Blog/public/tags/筛法/index.html","fc93a6743775a710eea47e8b5272ae6f"],["D:/My_Blog/public/tags/线段树/index.html","ef338b45e9981d888fc2fd1786da3585"],["D:/My_Blog/public/tags/背包/index.html","28fd484d1355135941fe4286831d1356"],["D:/My_Blog/public/tags/贪心/index.html","073f04b9d49e4f7457f1645d0f97cb07"],["D:/My_Blog/public/tags/逆元/index.html","ca80031f847e5fc0795512d274912f88"]];
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







