AOS.init();
// window.addEventListener("wheel", function(e){
//     e.preventDefault();
// },{passive : false});


// var mHtml = $("html");
// var page = 1;

// mHtml.animate({scrollTop : 0},10);

$(function(){
    $('#header').each(function(){
        let $window= $(window) 
        let $header =$(this) 
        // let $headerClone = $header.contents().clone();
        // let $headerCloneBox = $("<div class='header-clone'></div>")

        // $headerCloneBox.append($headerClone);

        // $headerCloneBox.appendTo('body');


        let sum = $header.offset().top + $header.outerHeight();


        // $window.on('scroll',function(){
        //     if($window.scrollTop() > sum){
        //         $headerCloneBox.addClass('visible');
        //         $(".header_logo").attr("src", "./img/new_logo.png");
        //     }else{
        //         $headerCloneBox.removeClass('visible')
        //         $(".header_logo").attr("src", "./img/new_logo.png");
        //     }
        // })
        $('.top').hide();
        $window.trigger('scroll');
    })
})

// gnb
$('.Community')
.mouseover(function(){
    $('.sub, .gnbBg').stop(true).slideDown();
})
.mouseout(function(){
    $('.sub, .gnbBg').stop(true).slideUp();
})

$(window).on("wheel", function(e){
    if(mHtml.is(":animated")) return;
    if(e.originalEvent.deltaY > 0){
        if(page == 2) return;
        page++;
    } else if(e.originalEvent.deltaY < 0){
        if(page == 1) return;
        page--;
    }
    var posTop =(page-1) * $(window).height();
    mHtml.animate({scrollTop : posTop}, 800);
})

var prevScrollTop = 1;
        var nowScrollTop = 1;
        function wheelDelta(){
            return prevScrollTop - nowScrollTop > 0 ? 'up' : 'down';
        }
        $(window).on('scroll', function(){
            nowScrollTop = $(this).scrollTop();
                if(wheelDelta() == 'down'){
                    $('#header').fadeOut();                  
                }
                if(wheelDelta() == 'up'){
                    $('#header').fadeIn();                  
                }
        })

$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 400) {
            $('.top').fadeIn();
        } else {
            $('.top').fadeOut();
        }
    })
        
    $(".top").click(function() {
        $('html, body').animate({
            scrollTop : 0
        }, 800);
        page=$(this).parent("li").index()+1;
        // page=$(this).html();
        return false;
    })
})

