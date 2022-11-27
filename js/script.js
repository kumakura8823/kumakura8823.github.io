$(function () {
  // ハンバーガーメニューをクリックした時
  $('.menuButton').on('click', function () {
    hamburger();
  });
  // メニューのリンクをクリックした時
  $('#global_nav a').on('click', function () {
    hamburger();
  });
});

// ハンバーガーメニューをクリックした時とメニュー内のリンクをクリックした時の処理が同じなので処理を共通化する
function hamburger() {
  $('.menuButton').toggleClass('active');
  if ($('.menuButton').hasClass('active')) {
    // hamburgerクラスにactiveクラスが存在する場合は、naviにもactiveクラスを追加する
    $('#global_nav').addClass('active');
  } else {
    // hamburgerクラスにactiveクラスが存在しない場合は、naviからactiveクラスを削除する
    $('#global_nav').removeClass('active');
  }
}

/*--------------------------------
            更新日の出力
----------------------------------*/
// 日付を取得
var day = new Date(document.lastModified);
var y = day.getFullYear();
var m = day.getMonth() + 1;
var d = day.getDate();

// 曜日を指定して出力
var week = new Array('日', '月', '火', '水', '木', '金', '土');
var w = week[day.getDay()];

//日にちの整形
if (m < 10) m = '0' + m;
if (d < 10) d = '0' + d;

// modDayに出力
modDay.innerHTML += '<span>更新日 </span>' + y + '年' + m + '月' + d + '日 (' + w + ')';

/*------------------------------
guam
-------------------------------*/
// $(function () {
//   $('.ac-label').click(function () {
//     $(this).next('div').slideToggle();
//     $(this).find('.icon').toggleClass('open');
//   });
// });

$(function () {
  //.accordion_oneの中の.accordion_headerがクリックされたら
  $('.s_07 .accordion_one .accordion_header').click(function () {
    //クリックされた.accordion_oneの中の.accordion_headerに隣接する.accordion_innerが開いたり閉じたりする。
    $(this).next('.accordion_inner').slideToggle();
    $(this).toggleClass('open');
  });
});
