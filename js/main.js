$(document).ready(function () {
  /*---------------------------------------
  共通部分の読み込み
  ----------------------------------------- */
  $("#header").load("./header.html", function () {
    /*---------------------------------------
    ヘッダーがtopセクションを超えたら背景色のクラスを付与
    （loadが非同期のためここに記述）
    ----------------------------------------- */
    $(window).on('scroll', function () {
      const $header = $('header');
      const $fvSection = $('#fv');
      const fvSectionHeight = $fvSection.outerHeight();
      const filename = getCurrentFilename();
      const $contactPageFvSection = $('#contact-page-fv');
      const contactPageFvSectionHeight = $contactPageFvSection.outerHeight();

      if (filename === "index") {
        handleHeaderScroll($header, fvSectionHeight);
      } else if (filename === "contact-page") {
        handleHeaderScroll($header, contactPageFvSectionHeight);
      }
    });

    function getCurrentFilename() {
      const url = window.location.href;
      const filename = url.substring(url.lastIndexOf('/') + 1).split('.')[0];

      if (filename === "") {
        return "index";
      }else {
        return filename
      }
    }

    function handleHeaderScroll($header, sectionHeight) {
      if ($(window).scrollTop() > sectionHeight) {
        $header.addClass('header__bg-scroll'); // ヘッダーにクラスを追加
      } else {
        $header.removeClass('header__bg-scroll'); // ヘッダーからクラスを削除
      }
    }


    /*------------------------------------
    ハンバーガー
    -----------------------------------*/

    // DOM要素の取得
    const hamburgerBtn = document.getElementById('header__burger-btn');
    console.log(hamburgerBtn.style.display);
    const headerNav = document.getElementById('header__nav');
    const headerNavLis = document.querySelectorAll('.header__nav-li');

    // クリックイベントのリスナーを追加
    hamburgerBtn.addEventListener('click', toggleNav);

    // ナビゲーション表示の切り替え
    function toggleNav() {
      const isNavHidden = headerNav.style.display === 'none' || !headerNav.style.display;

      if (isNavHidden) {
        showNav();
      } else {
        hideNav();
      }
    }

    // ナビゲーション表示
    function showNav() {
      headerNav.style.display = 'block';
      hamburgerBtn.classList.add('header__burger-btn_close');
    }

    // ナビゲーション非表示
    function hideNav() {
      headerNav.style.display = 'none';
      hamburgerBtn.classList.remove('header__burger-btn_close');
    }

    // リストアイテムのクリックイベントのリスナーを追加
    headerNavLis.forEach((li) => {
      li.addEventListener('click', () => {
        let widthPx = window.innerWidth;
        if (widthPx < 1000) {
          console.log(widthPx);
          hideNav();
        }
      });
    });

    // レスポンス前後の処理
    window.onresize = function () {
      let widthPx = window.innerWidth;
      if (widthPx > 1000) {
        showNav();
      } else {
        hideNav();
      }
    };




  });

  $("#footer").load("./footer.html");


  /*---------------------------------------
    swiper
  ----------------------------------------- */
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 2000, // 1秒ごとにスライドを移動させる
    },
  });



  /*---------------------------------------
    contactのチェックボックスをラジオボタン化
  ----------------------------------------- */
  const checkboxes = document.querySelectorAll('.contact-page-form__checkbox');
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        checkboxes.forEach(otherCheckbox => {
          if (otherCheckbox !== checkbox) {
            otherCheckbox.checked = false;
          }
        });
      }
    });
  });





});
