// ドロップダウン実装
$(function() {
    $("#toggle").click(function() {
        $(".toggle-lists").slideToggle();
    })

    // $("#toggle").on("click", function() {
    //     $('.toggle-lists').slideToggle();
    // })


});


// PAGE-TOPボタンの実装
$(function() {
    let btnTop = $("#page-top");
    $(window).scroll(function () {
       if ($(this).scrollTop() > 156) {
            $("#page-top").fadeIn(300);
       } else {
            $("#page-top").fadeOut(300);
       }
    })

    btnTop.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
})

$(function() {
    let a = $(".nav-1");
    a.click(function () {
        $('body,html').animate({
            scrollTop: 450
        }, 500);
        return false;
    });
})

$(function() {
    let a = $(".nav-3");
    a.click(function () {
        $('body,html').animate({
            scrollTop: 1300
        }, 1000);
        return false;
    });
})


// モーダル表示の実装
$(function() {
    const modal = $(".modal_content");
    const overlay = $(".modal_overlay");

    //クリックされたとき
    $(".modal_open_first").click(function() {
        $('.modal_first').addClass("open");
        overlay.addClass("open");
    })

    $(".modal_open_second").click(function() {
        $('.modal_second').addClass("open");
        overlay.addClass("open");
    })

    $(".modal_open_third").click(function() {
        $('.modal_third').addClass("open");
        overlay.addClass("open");
    })

    //背景のグレー部分が押されたとき
    overlay.click(function() {
        modal.removeClass("open");
        overlay.removeClass("open");
    })

    //画像が押されたとき
    modal.click(function() {
        modal.removeClass("open");
        overlay.removeClass("open");
    })


    // overlay.on('click',function() {
    //     modal.removeClass("open");
    //     overlay.removeClass("open");
    // })
})
