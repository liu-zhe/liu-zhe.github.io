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

var precacheConfig = [["about/index.html","bb21d2041b9ee2f0317b267ebe8ddbe3"],["archives/2018/07/index.html","dc1cd72d1a2aed856cef62f23bb61bfe"],["archives/2018/08/index.html","790566513b1635007ccb61161b0df782"],["archives/2018/09/index.html","353d712b6bf2e4fdd6112c83fc82b44d"],["archives/2018/10/index.html","e4129dd64af0f5810293b7d3e4417bf2"],["archives/2018/12/index.html","82fea9d9296bc1ea76745929b8ac6440"],["archives/2018/index.html","9f4e7594e36254dfc94206b3c0211a9c"],["archives/2018/page/2/index.html","f2ed2ae6965ffe30f87653b512c0ed7b"],["archives/2019/01/index.html","3b00799d0fb34248c93f46616dcb2e02"],["archives/2019/07/index.html","81f9f3772e005b877a09e1f4c9de00af"],["archives/2019/08/index.html","2d801fff74c920b99fd3692054683e40"],["archives/2019/09/index.html","512bbf834d3e997c4ae454ce5ba2765b"],["archives/2019/10/index.html","443a41dbc1207037ca9eb64ca6d734ec"],["archives/2019/index.html","ab4c020faf328d7388643d594755be8b"],["archives/2019/page/2/index.html","7843f152bc07327bc82822ba7de5f127"],["archives/index.html","aa0eb9bf8a73e49c71c43bbdd20ad690"],["archives/page/2/index.html","5f4a18485723a2edb2f56fff4104b114"],["archives/page/3/index.html","14e4817b5dab3ad01a6f218e44d4c591"],["articles/2018/07/STL-sort/index.html","e5b65c05e7f3bbedcc4b6a9ce816ea8f"],["articles/2018/07/并查集学习笔记/1.png","c01792916aab22c1ffe7816bf509c4bd"],["articles/2018/07/并查集学习笔记/2.png","dbb3e029a7b876bcd9766ca29e5f4665"],["articles/2018/07/并查集学习笔记/3.png","c9ada5ae61038f31b57dbfafcca24c97"],["articles/2018/07/并查集学习笔记/4.png","597da8fa0e6d5e95cadcfbd48bf990b2"],["articles/2018/07/并查集学习笔记/5.png","81bdf103da2965de6d458637a4ff32e6"],["articles/2018/07/并查集学习笔记/6.png","63b8df0f691dd6385cbc5c1f8bfcdf23"],["articles/2018/07/并查集学习笔记/index.html","e58dd961d28ea42c1d7a4bbb11b61651"],["articles/2018/08/图的邻接表存储/1.png","234e3364855d51e1e35b9584958f5a6a"],["articles/2018/08/图的邻接表存储/2.png","848b0de34801b10a3f688f53d4a08a8a"],["articles/2018/08/图的邻接表存储/3.png","be85a2a984af3f2aa2b7dc37223bca33"],["articles/2018/08/图的邻接表存储/4.png","cc87a5faa20db51db022de07231b3d04"],["articles/2018/08/图的邻接表存储/5.png","f01003660b3b15b1f06200b3ce1bf066"],["articles/2018/08/图的邻接表存储/graph.png","f37a84c4cbfab6b064cbbf6974288008"],["articles/2018/08/图的邻接表存储/index.html","929577aec4aea2b145382be201783d6f"],["articles/2018/08/最大公约数算法/index.html","62bca5215f2bdbfcc9ddcc8e49e1cab1"],["articles/2018/08/最短路Floyd/graph.png","55e777f191f1f8b7b5cedc7f5dc592e1"],["articles/2018/08/最短路Floyd/graph1.png","e0c582a617a8f0fb655fa035e503c595"],["articles/2018/08/最短路Floyd/index.html","605ecf2e00dbe2403a4b005bf84a0077"],["articles/2018/08/线段树小记/index.html","fce687a8ccb77cebc741c63c5d164625"],["articles/2018/08/给你的程序提速-论C++中的那些坑/index.html","66e47cb8f688dbed89f1cecfb15df08e"],["articles/2018/09/Dijkstra从入门到出门/graph.png","975942b732099dfd980a969c9bac8658"],["articles/2018/09/Dijkstra从入门到出门/graph1.png","0ff500fc440807d7ff6967aaf8ece7ba"],["articles/2018/09/Dijkstra从入门到出门/graph2.png","298fc22a9f5ddbf7e4e8e7d0a7580dc2"],["articles/2018/09/Dijkstra从入门到出门/graph3.png","a40854187af4a9ee7b928dc786db9900"],["articles/2018/09/Dijkstra从入门到出门/index.html","b923058c73978a3335704342ee1e2073"],["articles/2018/09/Dijkstra从入门到出门/mar.png","fafda5fc48b20dd8998b39dcdef69813"],["articles/2018/10/C-各个函数读写速度一览/index.html","d55314af5e3e951fb104e3c50a2a200e"],["articles/2018/10/快读&&快写——模板与解释/index.html","da652f25e8630def0f0c2261fb8f2c18"],["articles/2018/12/前缀和/index.html","ed6157b9312aeaff7a0de18a74bbb633"],["articles/2018/12/差分/index.html","876af54176efd96ad58d758a8df73dac"],["articles/2019/01/01背包小记/index.html","0a157b2ac1d25a66b439dea5a38f82cb"],["articles/2019/01/转载－KMP算法/1.jpg","274ebe59d149ec12573e4b8d8837ad4a"],["articles/2019/01/转载－KMP算法/2.jpg","01c28ba8bf43132bb616e15f8aa0608d"],["articles/2019/01/转载－KMP算法/3.jpg","289ff35a1d3f29f09b424987d4581d1b"],["articles/2019/01/转载－KMP算法/4.jpg","6dd55f9823121d8985ea96307463deb7"],["articles/2019/01/转载－KMP算法/5.jpg","903f3fcc9903df38fe9a16bb1e28e61f"],["articles/2019/01/转载－KMP算法/6.jpg","994a0383c78e8b5ba592a338c56ab9cb"],["articles/2019/01/转载－KMP算法/7.jpg","8ab91b4b1d0746870f54c96beeed3569"],["articles/2019/01/转载－KMP算法/8.jpg","b796a6a8e129919a623968044b5dedbc"],["articles/2019/01/转载－KMP算法/index.html","ec26640fe61bb4234f89cb482bca5c43"],["articles/2019/07/Axis-NOI导刊2011提高（05）/index.html","e09588032376996aa277e5e66aded507"],["articles/2019/07/最长上升子序列/index.html","c4e02b503b4d2a20322838b6f3e52318"],["articles/2019/08/DFS-BFS-ID-IDA-搜索算法简介/1.gif","51ce8fb962e159aa2965adc025388056"],["articles/2019/08/DFS-BFS-ID-IDA-搜索算法简介/dfs.png","7059390bf550df8a9b919fbe4fe57ff7"],["articles/2019/08/DFS-BFS-ID-IDA-搜索算法简介/index.html","59177c2aa4f68b64eba6c8bdc7c3e7b6"],["articles/2019/09/洛谷P2678-跳石头-题解/index.html","fb5088e005d84dba5ab1b15b118b19c8"],["articles/2019/10/Kruskal重构树/graph (1).png","39043722496363139272f9f470a6671b"],["articles/2019/10/Kruskal重构树/graph (2).png","77fa552fdb43d73c82cd9ed4b228c4d1"],["articles/2019/10/Kruskal重构树/graph (3).png","9db9150048274caa25e601be24578095"],["articles/2019/10/Kruskal重构树/graph.png","d16c4fe6131a67420e44d97d5d0a640b"],["articles/2019/10/Kruskal重构树/index.html","c3917ada11e7e4d391ca71c1746f2cde"],["articles/2019/10/分层图最短路小记/index.html","9f00e11457aa7886812bb8e6daf5534f"],["articles/2019/10/分层图最短路小记/liuzhe.png","6b5ad4bff8c3aecaefde0b57d8bcd498"],["articles/2019/10/分层图最短路小记/payphone.png","be0bf7d37e540298898e35f07d92a9f6"],["articles/2019/10/对拍模板/index.html","b710bf301c1ad876791b98d5942164a4"],["articles/2019/10/树链剖分—重链剖分小记/64629076_p0_master1200.jpg","0c0108aac16984b187f6a14ea0ff9abd"],["articles/2019/10/树链剖分—重链剖分小记/hld.png","047d7287bb9ce707370a99d78b226597"],["articles/2019/10/树链剖分—重链剖分小记/index.html","ad1e32cbd17961ec76313c2d59d0900d"],["articles/2019/10/树链剖分—重链剖分小记/v2-9c08dae6f0b1d00234b281ef96611d3c_hd.jpg","6f77b514423ebf74f341c51bc2c5e3d1"],["articles/2019/10/洛谷P1967货车运输题解/index.html","d13fb4042da29dd8a57cbe67e3b67b66"],["articles/2019/10/洛谷P2024食物链题解/index.html","208c1212495c2401b5c702bf5375fa5d"],["articles/2019/10/洛谷P2071座位安排题解/index.html","344496cdfe69b8db2e151a2fae7da897"],["articles/2019/10/珂朵莉树（ODT）详解/CF.png","136fcce901a5c11f71b891b96e19c2da"],["articles/2019/10/珂朵莉树（ODT）详解/index.html","4d98f883ab8eaf0e97234095bbb8a479"],["css/disqus-proxy.css","87976db321c1c288aa3d9d4af06c8ad8"],["css/disqus-proxy.min.css","caa38dd245e9da4c20580c256e540bd6"],["css/duoshuo.css","bdd8f7eb0dd14fc7e719cab11e685a9e"],["css/duoshuo.min.css","6457d80daef45eca1f7399b2329b1dc2"],["css/fontawesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["css/gallery.min.css","a62dc56ec5981c978cddcba32f2dc875"],["css/ie-blocker.css","4c323bd282014d64264bad241f1c14d3"],["css/material-icons.css","a6a841fd177f69bd07dbe919a744439b"],["css/material.css","f65ff1c879db0e257bd7d9521f0eaa57"],["css/material.min.css","67b6bbd91d44e12c7304a47f58672d38"],["css/prettify.css","074dc30ad95ce2f227848a2c38bc7fbd"],["css/prettify.min.css","ce9f124ce53dbfcf5758512737ee9899"],["css/prettify/atelier-cave-dark.min.css","78d9bbfc7d0f526727e9da749cd08a44"],["css/prettify/atelier-cave-light.min.css","e4c2bf4caff36e974733bae61be7a10b"],["css/prettify/atelier-dune-dark.min.css","4aafbf8ec70b42c2b7964aa2b347bf68"],["css/prettify/atelier-dune-light.min.css","65f9c4494342967919044e847347634c"],["css/prettify/atelier-estuary-dark.min.css","79f259a7e1a0ab58772d339f97c53bf7"],["css/prettify/atelier-estuary-light.min.css","65039bc195c71fa32df0c35bc902587d"],["css/prettify/atelier-forest-dark.min.css","cbc537385cc8ab19748f9d4160a1e46c"],["css/prettify/atelier-forest-light.min.css","1dda1f8f21aeedbe0fb68caf55c615e0"],["css/prettify/atelier-heath-dark.min.css","b52d843659b13491b555f324bebfe9e8"],["css/prettify/atelier-heath-light.min.css","0d999c502c821f1b761ad772d7301067"],["css/prettify/atelier-lakeside-dark.min.css","f48fd98ed8f7ed8aa59fb57c87247b23"],["css/prettify/atelier-lakeside-light.min.css","bc790feb4057204347c45ea551d0d784"],["css/prettify/atelier-plateau-dark.min.css","e81b69c147a9ffbd298dccdaf02a810f"],["css/prettify/atelier-plateau-light.min.css","ad2d0ed869dc8142306110f8b7fa9035"],["css/prettify/atelier-savanna-dark.min.css","b3a404d78c50fbe9968d0d4dac123484"],["css/prettify/atelier-savanna-light.min.css","7d4087bd0552352c12ee3dd8f397db75"],["css/prettify/atelier-seaside-dark.min.css","10a0183644bd5c369616f0b94298c8f5"],["css/prettify/atelier-seaside-light.min.css","6fbd6de95fcd79393de5fbb4e7a3dac7"],["css/prettify/atelier-sulphurpool-dark.min.css","be693407f25090368983c17ad1fe1dca"],["css/prettify/atelier-sulphurpool-light.min.css","fcd7ecab5bfa792ac082257e73f08abd"],["css/prettify/github-v2.min.css","01fccac6dfbe2befe58590654a39f1c2"],["css/prettify/github.min.css","dab580bb047648b053d1546fe31e1215"],["css/prettify/hemisu-dark.min.css","7095b0461d4cf22e7935f0e447807c6d"],["css/prettify/hemisu-light.min.css","54e6d654c095a946b257a243ffd5f3f7"],["css/prettify/tomorrow-night-blue.min.css","2733cdcd81e2ca4e8d6598b2237c2eef"],["css/prettify/tomorrow-night-bright.min.css","f15804e96aa1b47d36233c5b02732f28"],["css/prettify/tomorrow-night-eighties.min.css","d8b250cd444ef8aafcaff7e5fd3f2830"],["css/prettify/tomorrow-night.min.css","4259c6664fdae3e77c5dbc2d5c10cf88"],["css/prettify/tomorrow.min.css","1c8792425eb2dedea306ec47bcb3c648"],["css/prettify/tranquil-heart.min.css","ba5de9f48f4cb1b3b12b42fe047cc30e"],["css/prettify/vibrant-ink.min.css","7b913faaa19c1af792ed54c7e0cf3deb"],["css/style.css","d076c234da67bef747946e096fcd155b"],["css/style.min.css","34a865290917c3f73ae93479a78c0efb"],["css/uc.css","31dc264064481a02fb48046046a76084"],["fonts/MaterialIcons-Regular.eot","e79bfd88537def476913f3ed52f4f4b3"],["fonts/MaterialIcons-Regular.ttf","a37b0c01c0baf1888ca812cc0508f6e2"],["fonts/MaterialIcons-Regular.woff","012cf6a10129e2275d79d6adac7f3b02"],["fonts/Roboto-Black.ttf","4dae2e3c6207a71de6b078b879230062"],["fonts/Roboto-Bold.ttf","a68db3b33213fa138e6f72a5b76ac632"],["fonts/Roboto-Light.ttf","8d252992868e895b059335848dec3402"],["fonts/Roboto-Medium.ttf","989d2dff37a09f19c6dbc6f0e8f9b4ea"],["fonts/Roboto-Regular.ttf","8f793587dcf03f31c551c5b60d175fc2"],["fonts/Roboto-Thin.ttf","21c61396b4bea54e7308a7cda49edbe0"],["fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["images/bg.jpg","76ebc06195687775b21a1315496f2a1c"],["images/icons/icon-128x128.png","a33c9140ca03c567bd7f37a9cf5573e1"],["images/icons/icon-144x144.png","2c4e37a7f384bd9ac86be6144c45920b"],["images/icons/icon-152x152.png","6dc5962f26164c2ee2a2726101b848c4"],["images/icons/icon-192x192.png","9245a9f459de2e21f21c93592631a212"],["images/icons/icon-384x384.png","c816f178bc15b2f0f9ca4aadfea944df"],["images/icons/icon-512x512.png","d581bf7b87b5b40704bebc5cd1cfc3f7"],["images/icons/icon-72x72.png","03e1995815472315b46fd08b6e315559"],["images/icons/icon-96x96.png","16a39fbf1490de058036e26d70bdaf66"],["images/me.jpg","2becee58695dcb4a6d8c2410aa0906d9"],["img/avatar.png","0acf37b762876c3999bb712819ef0fe3"],["img/bg.png","4491b5e3d2320fb530a6ecf4a3d27e9b"],["img/browserstack_logo.png","9901607d552cbf936a8c86e6f206aa47"],["img/daily_pic.png","8655723de1bfb93de6290938f18cb8a0"],["img/favicon.png","c1ff911b185ce19e850d38f681e8e541"],["img/footer/footer_ico-bilibili.svg","d67fcd7d1fa5999e9a785b2dfaa39f2c"],["img/footer/footer_ico-facebook.svg","64c580c2986d6f16d04b1c4d3b896fd2"],["img/footer/footer_ico-github.svg","4b3dc07ff72cee5be0eff6a100a354cd"],["img/footer/footer_ico-gplus.svg","7d75444af4019d5612e2005ab501eca5"],["img/footer/footer_ico-instagram.svg","c8eaf1f2fe5f4d9a7b26f2981d6f14ed"],["img/footer/footer_ico-linkedin.svg","5e4c53b53c9d59880c6e483d57309a6a"],["img/footer/footer_ico-segmentfault.svg","dbf66b5f0165802dc698eec23e147967"],["img/footer/footer_ico-telegram.svg","50e65465cc40292f7101255daed7c593"],["img/footer/footer_ico-tumblr.svg","b127eb5d3e455ba8794ddc4d060df5bc"],["img/footer/footer_ico-twitter.svg","90ff42c9e275a7cd7ca5bf4291c93961"],["img/footer/footer_ico-v2ex.svg","3500b18a911b661a2b379b36b39def20"],["img/footer/footer_ico-weibo.svg","f1f6375680122267b9ebfc3b546307e8"],["img/footer/footer_ico-zhihu.svg","39538ba6607a9dcadf6d4dca35b687b8"],["img/gallery/arrow.svg","f3f776676f3b78b5180c9d2e08c2d532"],["img/gallery/close.svg","181336ad0bd48cdde68d7fb8be304daf"],["img/gallery/spinner.svg","2a61c8efd2d72146d79a2f6692840a85"],["img/logo.png","c1ff911b185ce19e850d38f681e8e541"],["img/me.jpg","2becee58695dcb4a6d8c2410aa0906d9"],["img/random/material-1.png","0c4e486759ad62e3415f8f197f0311f7"],["img/random/material-10.png","2263d9d1cc9b0724e6331374c33f988b"],["img/random/material-11.png","41127baf9a286e968a63653dee50ba21"],["img/random/material-12.png","2507dbe92186b0b39df6331347aa2c27"],["img/random/material-13.png","5d127887b6d043259f7e2fb99cd08175"],["img/random/material-14.png","84c21a53679bddbe415fdae1d3c02163"],["img/random/material-15.png","ec116546453394cc0d78e580d6d52dd5"],["img/random/material-16.png","39a5dca2dc2de60bd5dd191f205db7d6"],["img/random/material-17.png","30a855e361dcf170aecdce04ce564c68"],["img/random/material-18.png","584900ff821930a8b093b4c0a58be34b"],["img/random/material-19.png","c004830c8683856939dc83b75b230b66"],["img/random/material-2.png","fa4f4588b9fab07979acd61b94d34fa0"],["img/random/material-3.png","418c3457b6792eb732844d41d2501294"],["img/random/material-4.png","99898b727359e568759eebbb2c9e4a8b"],["img/random/material-5.png","e521776cb427f848546e20d784888a55"],["img/random/material-6.png","db810792edf3d40de5baf5401a9a0626"],["img/random/material-7.png","d7e9fe3e0e3db6b841ab12fad331daed"],["img/random/material-8.png","9f1914138052c3a631e1f2b2cf674a46"],["img/random/material-9.png","069b687b7f1069254c816a56317bfaad"],["img/sidebar_header.png","0ac2232bb0756d0d4e5f04875b443217"],["img/upyun_logo.svg","0895a1d05ab8bc4849337c5a7f4edda0"],["index.html","3d6575f042b594fe0bca9893c0bf36d9"],["js/MathJax.js","1bef8ba3b323e77cd264bfc09662ae1e"],["js/Valine.min.js","c640924dc2c3508b1a1c8f3ab726f3fa"],["js/gallery/gallery.js","54dbd709efe8893194901af3fce1379d"],["js/hanabi-browser-bundle.js","3e48b9fa9ce496eaaee7783ea2e316a4"],["js/ie-blocker.en.js","eb054767893aa2f8e981be25c4221415"],["js/ie-blocker.zhCN.js","861699947bcd571f62d6dc10f1c43be0"],["js/jquery.min.js","a9cbac0142cd78192ca9f7ea50cdbe22"],["js/js.js","d69f3cf073c561b1820bbdd62b60bb06"],["js/js.min.js","067f54cc49bc46b052c6ac99074ccf8c"],["js/lazyload.min.js","d4171fcee357a95fa7b45ea0abee57dd"],["js/link.js","34ac04376d139010ae77e87b057fae6f"],["js/lsloader.js","d01962f06751b296c985a8fee73019f8"],["js/lsloader.min.js","fdef13cf99a299ae566d65ab828cdc19"],["js/nprogress.js","a65dd085bf65bea475165c8b5276b563"],["js/prettify.min.js","58dd3b7e2bc741230a5b2ec1987041eb"],["js/queue.js","3ef240fa4fc55888e5e234e48f23fc95"],["js/queue.min.js","1677e3c59497558a9f53b73b726dedc6"],["js/smoothscroll.js","94ecbf0028f9b2e48d8bb6551556e915"],["links/index.html","9089d092c058a4753c20094e0b5c052e"],["page/2/index.html","100bf23588fe2d226f18859a3883202d"],["page/3/index.html","688658d60012c51f1d3cc017eabbce29"],["page/4/index.html","897b5336b5d555ba210cfdf8c485d577"],["tags/BFS/index.html","d539731a253cd3c49d555b250c4cf6d8"],["tags/DFS/index.html","784984283f5bc156a45cdd39f7a39236"],["tags/KMP/index.html","e2c078df28527837c628ccfb646a9993"],["tags/LCA/index.html","87f00ff1265e8c5cbbf40bafab687c8f"],["tags/STL/index.html","e74bba44ffe6d43c9653a9620dab0328"],["tags/index.html","a9ad649e68938c14b4b4be5a4dd0f5d8"],["tags/二分图/index.html","190ea6a857e4dd85fd96789b45841bef"],["tags/二分答案/index.html","f11cfdceefd8c6356ae808f5b56af05c"],["tags/其他/index.html","cd7161feef6f44126476e9a0934c763a"],["tags/前缀和/index.html","62aa3bc0aa2c26ea04ad4dd803fe4f95"],["tags/动态规划/index.html","76ceea06b597518aa7ecaf8aab54cce9"],["tags/区间/index.html","2ed291fa7cb7e76d1998e39e620d873e"],["tags/卡常/index.html","7519b19465e10d313310d4da3bba7903"],["tags/图论/index.html","157c74e681d11fe2b68e39b1037175ce"],["tags/差分/index.html","938e408ee7fafc9b1483b60364ebeb94"],["tags/并查集/index.html","0a963029253f2ac808323e0f8f48aca8"],["tags/排序/index.html","039285c9fce7ea80a5ce022ad63a5fee"],["tags/搜索/index.html","0b4f0e2a7d80d0c92e58cb41644281a6"],["tags/数论/index.html","aab702f3927b958d00c3b711efd7a90c"],["tags/暴力数据结构/index.html","f797804ed0553271e9facffa7d5baec9"],["tags/最小生成树/index.html","d8dc3aa3b1863cc0d8135f4d0ee96d64"],["tags/最短路径/index.html","f66f61a0ff7019f1e066f971afa7abc1"],["tags/树链剖分/index.html","e9ee64517cea144169fa833738f77c95"],["tags/毒瘤/index.html","29e9711cd6b882f58d0f658879ff7163"],["tags/珂朵莉树/index.html","acee4d30b4a68e48aae2943d69f7c97d"],["tags/线段树/index.html","d154035306d759893e17f430422861fe"],["tags/背包/index.html","4ce655c2babf36e6806510a40e04f497"]];
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







