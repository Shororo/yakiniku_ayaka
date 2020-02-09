    $(function(){

      $(".slider").bxSlider({
        auto: true,
        pause: 4000,
        speed: 2000,
  //一度に表示させる最大枚数
  maxSlides: 1,
  //タッチスワイプ許可設定
  touchEnabled: true,
  //タッチスワイプしたとみなす最低限の移動距離
  swipeThreshold: 10,
  //'full'はスライダーの数を黒点で、'short'はa/nで表示
  pagerType: 'full',
  // 画像の高さを自動調整
  adaptiveHeight: true,
  //コントロール表示
  controls: false,
  //スライドモード設定
  mode: 'fade',
  //スライド番号を表示する
  pager: false
});
    });

//windowサイズが変化するごとにjQueryの動作を変更する判定
var timer = false;
var currentWidth = window.innerWidth;

$(window).on('load',function(){

  $(window).resize(function() {
    if (currentWidth == window.innerWidth) {
        // ウインドウ横幅が変わっていないため処理をキャンセル。
        // safariでリロードされる現象を防ぐ
        return;
      }else if (timer !== false) {
        clearTimeout(timer);
      }
      timer = setTimeout(function() {
        location.reload();
      }, 200);
    });

    //現在の画面サイズ
    var winW = $(window).width();
  //判定基準にしたい画面サイズ
  var devW = 720;

  if (winW <= devW) {
    //720px以下の時の処理  
    $(document).on('click',function(e) {
     if(!$(e.target).closest('.navigation').length) {
     // ターゲット要素の外側をクリックした時の操作
     $("nav").slideUp();
     $(".nav-cover").slideUp();
   } else {
     // ターゲット要素をクリックした時の操作
     $("nav").slideToggle();
     $(".nav-cover").slideToggle();
   }
 });
    //スマホ用navここまで

  } else {
  //720pxより大きい時の処理

    //navをheaderの中に入れる
    $("nav").insertAfter(".navigation");

    //画面をクリックするとheaderが隠れる
   //  $(document).on('click',function() {
   //   $("header").slideToggle();
   // });

        //上にスライドでheader出現
        //下にスライドでheader隠れる
        var startPos = 0,winScrollTop = 0;
        $(window).on('scroll',function(){
          winScrollTop = $(this).scrollTop();
          if (winScrollTop > startPos) {
            $('header').slideUp();
          } else {
            $('header').slideDown();
          }
          startPos = winScrollTop;
        });

      }

    });

//特定の位置までスクロールしたら背景画像を差し替える
var thisOffset;
$(window).on('load',function(){
  thisOffset = $('#hazimeni').offset().top + $('#hazimeni').outerHeight();
});

$(window).scroll(function(){
  if( $(window).scrollTop() + $(window).height() > thisOffset){
        // 特定の要素を超えた場合のイベント
        $("#haikei").css("display","block");
        //$('.image').children('img').attr('src', '//into-the-program.com/demo/images/sample002.jpg');
      } else {
        // 特定の要素を超えていないイベント
        $("#haikei").css("display","none");
      }
    });


$(function(){
  $('.youkoso').on('inview', function() {
           //ブラウザの表示域に表示されたときに実行する処理
           if($('.youkoso').css("opacity") == "0"){
             $('.youkoso').toggleClass('showUp');
           }
         });
  $('.title .hitokoto').on('inview', function() {
           //ブラウザの表示域に表示されたときに実行する処理
           if($('.title .hitokoto').css("opacity") == "0"){
             $('.title .hitokoto').toggleClass('showUp');
           }
         });
  $('.title .logo').on('inview', function() {
           //ブラウザの表示域に表示されたときに実行する処理
           if($('.title .logo').css("opacity") == "0"){
             $('.title .logo').toggleClass('showUp');
           }
         });
  $('.title p').on('inview', function() {
           //ブラウザの表示域に表示されたときに実行する処理
           if($('.title p').css("opacity") == "0"){
             $('.title p').toggleClass('showUp');
           }
         });
  $('.course-3').on('inview', function() {
           //ブラウザの表示域に表示されたときに実行する処理
           if($(this).css("opacity") == "0"){
             $(this).toggleClass('showUp');
           }
         });
});


$(function(){
  $(".btn-c").on('click',function() {
    if($(".btn-c").css("color") == "rgb(255, 255, 255)"){
      $(".btn-c").css("color","rgb(255, 247, 0)").css("border-color","rgb(255, 247, 0)");
      $(".btn-k").css("color","white").css("border-color","rgb(0,0,0,0)");
      $(".counter").show();
      $(".koshitsu").hide();
    }else if($(".btn-c").css("color") == "rgb(255, 247, 0)"){
      $(".btn-c").css("color","white").css("border-color","rgb(0,0,0,0)");
      $(".counter").hide();
    }
  });
  $(".btn-k").on('click',function() {
    if($(".btn-k").css("color") == "rgb(255, 255, 255)"){
      $(".btn-c").css("color","white").css("border-color","rgb(0,0,0,0)");
      $(".btn-k").css("color","rgb(255, 247, 0)").css("border-color","rgb(255, 247, 0)");
      $(".counter").hide();
      $(".koshitsu").show();
    }else if($(".btn-k").css("color") == "rgb(255, 247, 0)"){
      $(".btn-k").css("color","white").css("border-color","rgb(0,0,0,0)");
      $(".koshitsu").hide();
    }
  });
  $(".btn-k, .btn-c").on('click',function() {
    if($(".btn-k").css("color") == "rgb(255, 255, 255)" && $(".btn-c").css("color") == "rgb(255, 255, 255)"){
      $(".btn-k").css("border-color","rgb(255, 255, 255)");
      $(".btn-c").css("border-color","rgb(255, 255, 255)");
    }
  });
  // コース詳細ボタンを押したら
  $(".course-shousai-btn1").on('click',function() {
    $(".course-shousai1").slideToggle();
  });
  $(".course-shousai-btn2").on('click',function() {
    $(".course-shousai2").slideToggle();
  });
  $(".course-shousai-btn3").on('click',function() {
    $(".course-shousai3").slideToggle();
  });
});