AOS.init();
window.addEventListener("wheel", function(e){
    e.preventDefault();
},{passive : false});


var mHtml = $("html");
var page = 1;

mHtml.animate({scrollTop : 0},10);

$(function(){
    $('#header').each(function(){
        let $window= $(window) 
        let $header =$(this) 
        let $headerClone = $header.contents().clone();
        let $headerCloneBox = $("<div class='header-clone'></div>")

        $headerCloneBox.append($headerClone);

        $headerCloneBox.appendTo('body');


        let sum = $header.offset().top + $header.outerHeight();


        $window.on('scroll',function(){
            if($window.scrollTop() > sum){
                $headerCloneBox.addClass('visible');
                $(".header_logo").attr("src", "./img/new_logo.png");
            }else{
                $headerCloneBox.removeClass('visible')
                $(".header_logo").attr("src", "./img/new_logo.png");
            }
        })
        $('.top').hide();
        $('.sidebar').show();
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
        if(page == 6) return;
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
                    $('#section1 h1').fadeOut();
                    $('#section1 h2').fadeOut();
                }
                if(wheelDelta() == 'up'){
                    $('#section1 h1').fadeIn();
                    $('#section1 h2').fadeIn();
                }
        })

$('.sidebar ul li a').click(function(e) {
    var href = $(this).attr('href');
    
    var targetTop = $(href).offset().top;
        
    $('html').stop().animate({scrollTop:targetTop}, 800);
    page=$(this).parent("li").index()+1;
    e.preventDefault();
});

function Page__updateIndicatorActive() {
    var scrollTop = $(window).scrollTop();
    
    $($('.section').get().reverse()).each(function(index, node) {
        var $node = $(this);
        var offsetTop = parseInt($node.attr('data-offset-top'));
        
        if ( scrollTop >= offsetTop ) {
            
            $('.sidebar ul li a.active').removeClass('active');
                    
            var currentPageIndex = $node.index();
            $('.sidebar ul li a').eq(currentPageIndex).addClass('active');
            
            $('html').attr('data-current-page-index', currentPageIndex);
            return false;
        }
    });
}

// ??? ???????????? offsetTop ????????? ????????????
function Page__updateOffsetTop() {
    
    $('.section').each(function(index, node) {
        var $page = $(node);
        var offsetTop = $page.offset().top;
        
        $page.attr('data-offset-top', offsetTop);
    });
    
    // ????????? ??????????????????, ?????? ?????? ????????????
    Page__updateIndicatorActive();
}

function Page__init() {
    Page__updateOffsetTop();
}

// ?????????
Page__init();

// ????????? ???????????? ??? ??? ??????, offsetTop??? ????????????
$(window).resize(Page__updateOffsetTop);

// ???????????? ??? ??? ??????, ?????????????????? ????????? ??????
$(window).scroll(Page__updateIndicatorActive);



$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 3876) {
            $('.sidebar').fadeOut();
            $('#header').fadeOut();    
        } else{
            $('.sidebar').fadeIn();
            $('#header').fadeIn(); 
        }
        
    })
})

$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
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


