//レスポンシブ判定処理
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
var thisOffset2;
$(window).on('load',function(){
 thisOffset = $('#hazimeni').offset().top + $('#hazimeni').outerHeight();
 thisOffset2 = $('.course-3:last-child').offset().top + $('.course-3:last-child').outerHeight();
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

      if( $(window).scrollTop() + $(window).height() > thisOffset2){
        // 特定の要素を超えた場合のイベント
        $("#haikei img").attr('src', 'images/izakaya02.jpg');
      } else {
        // 特定の要素を超えていないイベント
        $("#haikei img").attr('src', 'images/IMGP2560.jpg');
      }
    });



$(function(){

  //ローディングが終わったら画面表示
  Pace.on('done', function(){
    $("#loading-window").fadeOut();
  });

		//ボタン全般処理
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

	//コンテンツのスライド表示
	$('.youkoso').on('inview', function() {
           //ブラウザの表示域に表示されたときに実行する処理
           if($('.youkoso').css("opacity") == "0"){
             $('.youkoso').toggleClass('showUp');
           }
         });
  $('.course-3').on('inview', function() {
           //ブラウザの表示域に表示されたときに実行する処理
           if($(this).css("opacity") == "0"){
             $(this).toggleClass('showUp');
           }
         });

    //メニュー詳細画面
    //assignment-sourceクラスが付与されている要素をクリックすると
    //詳細画面が開き、画像やテキストが代入されます
    $(".assignment-source").on("click", function(){ 
      $(".item-img").attr("src", $(this).find(".assignment-img").attr("src"));
      $(".item-title").text($(this).find(".assignment-title").text());
      $(".item-price").text($(this).find(".assignment-price").text());
      $(".item-text").text($(this).find(".assignment-text").text());
      $(".shosai").css("display","block");
      $(".shosai-out").css("display","block");
    });
      //詳細画面外をクリックしたときに詳細画面を閉じます
      $(".shosai-out").on("click",function() {
        $(".shosai").css("display","none");
        $(".shosai-out").css("display","none");
      });
      
      //メニューをさらに読み込む
      $("#motto").one("click", function(){ 
        $("#menu-plus").load("menu.html");
        $("#menu-plus").css("display","block");
        $("#motto").css("display","none");
        $("#toziru").css("display","block");
        var mottohantei = 1;
      });
      if(mottohantei == 1){
      $("#motto").one("click", function(){ 
        $("#menu-plus").css("display","block");
        $("#motto").css("display","none");
        $("#toziru").css("display","block");
      });
  }
      //メニューを閉じる
      $("#toziru").on("click", function(){
        $("#menu-plus").css("display","none");
        $("#motto").css("display","block");
        $("#toziru").css("display","none");
      });

      //メールフォームの出現
      $("#mailform").on("click",function() {
        $(".googleform").slideDown();
        $("#mailform").css("display","none");
        $("#mailform2").css("display","block");
      });
      $("#mailform2").on("click",function() {
        $(".googleform").slideUp();
        $("#mailform").css("display","block");
        $("#mailform2").css("display","none");
      });                      

    });

      // instagram
      $(function () {

        try {

        // インスタのIDを入れようね

        this.name = "via_jpn";

        $.ajax('https://www.instagram.com/' + this.name + '/', {

          timeout: 2000,

          datatype: 'html'

        }).then(function (data) {

          json_string = data.split("window._sharedData = ")[1];

          json_string = json_string.split("};</script>")[0] + "}";

          this.Arrya_data = JSON.parse(json_string);

          let datas = this.Arrya_data.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges;

          for (i in datas) {

                // 画像URL取得

                var url = datas[i].node.display_url;

                // テキスト取得

                var text = datas[i].node.edge_media_to_caption.edges[0].node.text;



                this.html = `

                <div class="carousel-item sinchaku-item">
                <img class="d-block w-100" src="${url}" alt="First slide">
                <div class="carousel-caption d-md-block w-100">
                <p class="clr-black">${text}</p>
                </div>
                </div>

                `;

                $(".insta-card").append(this.html);

              }

            });

      } catch (error) {

        alert(error);

      }

    });

//マウスが動いたら新着情報をアクティブに！
$(window).one('scroll',function(){
  $(".carousel-item:first-of-type").addClass("active");
});