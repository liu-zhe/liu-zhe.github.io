link = {
  init: function () {
    var that = this;
    //这里设置的是刚才的 linklist.json 文件路径
    $.getJSON("/links/linklist.json", function (data) {
      that.render(data);
    });
  },
  render: function (data) {
    var html, nickname, avatar, site, li = "";
    for (var i = 0; i < data.length; i++) {
      nickname = data[i].nickname;
      avatar = data[i].avatar;
      site = data[i].site;
      li += '<div class="card">' +
        '<a href="' + site + '" target="_blank">' +
        '<div class="thumb" style="background: url( ' + avatar + ');">' +
        '</div>' +
        '</a>' +
        //href 和 src 的链接地址是相册照片外部链接，也可以放博客目录里
        '<div class="card-header">' +
        '<div><a href="' + site + '" target="_blank">' + nickname + '</a></div>' +
        '</div>' +
        '</div>';

    }
    $(".link-navigation").append(li);
  }
}
link.init();