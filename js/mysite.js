$(document).ready(function () {

    $('.carousel').carousel({
        interval: 4000
    })

    $(".light-box").click(function (e) {
        e.preventDefault();
        var link = $(this).attr("href");
        $(".embed-responsive-item").attr("src", link);
    });

    $(".hover-animated").mouseover(function () {
        // alert(1111);
        // $(".hover-show").toggleClass("hover-show");
        // $(".hover-show-title").attr("style", "transition-delay: .15s");
        // $(".hover-show-text").attr("style", "transition-delay: .25s");
        $(this).find(".hover-show, .hover-show-title, .hover-show-text").addClass("show");
    });
    $(".hover-animated").mouseout(function (e) {
        // $(".hover-show").toggleClass("hover-show");
        // $(".hover-show-title, .hover-show-text").attr("style", "transition-delay: 0s");
        $(this).find(".hover-show, .hover-show-title, .hover-show-text").removeClass("show");
        // e.stopPropagation();
    });

    $(".clickdown").click(function () {
        // e.preventDefault();
        $(this).parent().parent().find(".clickdown-menu").slideToggle();
        // $(this).find(".hover-show").addClass("fadeIn");
        // $(".hover-show-text").attr("style", "transform: translateY(0)");
    });

    $('#event, #demo, #layout').click(function (e) {
        e.preventDefault();
        var tab = this.id;
        var tabClass = '.' + tab;
        console.log(tabClass);
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $("#work-content").children().hide();
        $("#work-content").find(tabClass).fadeIn("slow");
    });
    $('#all').click(function (e) {
        e.preventDefault();
        var tab = this.id;
        var tabClass = '.' + tab + '';
        $("#work-content").children().hide();
        $("#work-content").children().fadeIn("slow");
    });

    //menu click scroll
    $('.scrollTop').click(function (e) {
        e.preventDefault();
        var target = $(this).attr('href');
        var targetPos = $(target).offset().top;
        $('html, body').animate({ scrollTop: targetPos - 135 }, 800);
    });

    $(window).scroll(function () {
        var scrollPos = $(window).scrollTop();
        var windowHeight = $(window).height();
        // console.log(scrollPos, windowHeight);

        $('.scrollTop').each(function () {
            var target = $(this).attr('href');
            var targetPos = $(target).offset().top;
            var targetHeight = $(target).outerHeight();
            if (targetPos - 1 <= scrollPos && (targetPos + targetHeight) > scrollPos) {
                $('.scrollTop').removeClass('active')
                $(this).addClass('active');
            } else {
                $(this).removeClass('active')
            }
        });


    });


    $('.skills-title').mouseover(function () {
        $(this).addClass('bounce');
        $(this).parent().siblings().find('.skills-text').removeClass('pulse');
        // $('.skills-text').removeClass('flash');
        
    });
    $('.skills-title').mouseleave(function () {
        $(this).removeClass('bounce');
        $(this).parent().siblings().find('.skills-text').addClass('pulse');
        // $('.skills-text').addClass('flash');
        // $('.skills-text').addClass('rubberBand');
    });
    // 動畫結束後執行此事件
    $('.skills-title').mouseout(function () {
        // $('.skills-text').delay(3000).removeClass('rubberBand');
    });

//Modal
    $(".click-show-modal").click(function (e) {
        e.preventDefault;
        // $('.modal-img').html(title);
        var title = $(this).find('.hover-show-title').html();
        $('.modal-title').html(title);
        var text = $(this).find('.hover-show-text').html();
        $('.modal-text').html(text);
        // var img = $(this).find('.click-show-img').attr('src');
        var img = 'img/'+ $(this).find('.click-show-img').attr('alt') + '.jpg';
        $('.modal-img').attr('src', img);
        console.log(img);
        var link = $(this).attr('href');
        $('.modal-button').attr('href', link);
    });



});
