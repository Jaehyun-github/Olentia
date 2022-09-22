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

function checkAll() {
    if (!checkUserId(form.userId.value)) {
        return false;
    } else if (!checkPassword(form.userId.value, form.password.value)){
        return false;
    }
    return true;
}



// 공백확인 함수
function checkExistData(value, dataName) {
    if (value == "") {
        alert(dataName + " 입력해주세요!");
        return false;
    }
    
    return true;
}

function checkUserId(id) {
    //Id가 입력되었는지 확인하기
    if (!checkExistData(id, "아이디를"))
        return false;
        
    var idRegExp = /^[a-zA-z0-9]{4,12}$/; //아이디 유효성 검사
    if (!idRegExp.test(id)) {
        alert("아이디는 영문 대소문자와 숫자 4~12자리로 입력해야합니다!");
        form.userId.value = "";
        form.userId.focus();
        return false;
    }
    return true; //확인이 완료되었을 때
}
        
function checkPassword(id, password) {
    //비밀번호가 입력되었는지 확인하기
    if (!checkExistData(password, "비밀번호를")){
        return false;
    }
    return true;
}


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

