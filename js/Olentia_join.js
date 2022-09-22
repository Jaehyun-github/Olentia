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
        } else if (!checkPassword(form.userId.value, form.password1.value,
                form.password2.value)) {
            return false;
        } else if (!checkName(form.name.value)) {
            return false;
        } else if (!checkMail(form.email.value)) {
            return false;
        } else if (!checkYearY(form.bir_yyMMdd.value)){
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

function checkPassword(id, password1, password2) {
    //비밀번호가 입력되었는지 확인하기
    if (!checkExistData(password1, "비밀번호를"))
        return false;
    //비밀번호 확인이 입력되었는지 확인하기
    if (!checkExistData(password2, "비밀번호 확인을"))
        return false;

    var password1RegExp = /^[a-zA-z0-9]{4,12}$/; //비밀번호 유효성 검사
    if (!password1RegExp.test(password1)) {
        alert("비밀번호는 영문 대소문자와 숫자 4~12자리로 입력해야 합니다!");
        form.password1.value = "";
        form.password1.focus();
        return false;
    }
    //비밀번호와 비밀번호 확인이 맞지 않다면..
    if (password1 != password2) {
        alert("두 비밀번호가 맞지 않습니다.");
        form.password1.value = "";
        form.password2.value = "";
        form.password1.focus();
        return false;
    }

    //아이디와 비밀번호가 같을 때..
    if (id == password1) {
        alert("아이디와 비밀번호는 같을 수 없습니다!");
        form.password1.value = "";
        form.password2.value = "";
        form.password2.focus();
        return false;
    }
    return true; //확인이 완료되었을 때
}    


function checkName(name) {
    if (!checkExistData(name, "이름을"))
        return false;

    var nameRegExp = /^[가-힣]{2,4}$/;
    if (!nameRegExp.test(name)) {
        alert("이름이 올바르지 않습니다.");
        form.name.value = "";
        form.name.focus();
        return false;
    }
    return true; //확인이 완료되었을 때
}


function checkMail(email) {
    //email이 입력되었는지 확인하기
    if (!checkExistData(email, "이메일을"))
        return false;

    var emailRegExp = /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
    if (!emailRegExp.test(email)) {
        alert("이메일 형식이 올바르지 않습니다!");
        form.email.value = "";
        form.email.focus();
        return false;
    }
    return true; //확인이 완료되었을 때
}


function checkYearY(bir_yyMMdd) {
    //bir_yy가 입력되었는지 확인하기
    if (!checkExistData(bir_yyMMdd, "생년월일을"))
        return false;

    var yearYMDRegExp = /^(19|20)[0-9]{2}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/; // 생년월일 유효성 검사
    if (!yearYMDRegExp.test(bir_yyMMdd)){
        alert("생년월일을 정확하게 입력해야 합니다!")
        form.bir_yyMMdd.value = "";
        form.bir_yyMMdd.focus();
        return false;
    }        
    return true;
}

// function checkYearM(bir_MM) {
//     //bir_MM가 입력되었는지 확인하기
//     if(!checkExistData(bir_MM, "생월을"))
//         return false;

//     var yearMRegExp = /^(0[1-9]|1[0-2])$/; // 생월 유효성 검사
    
//     if (!yearMRegExp.test(bir_MM)){
//         alert("생월을 정확하게 입력해야 합니다!")
//         form.bir_MM.value = "";
//         form.bir_MM.focus();
//         return false;
//     }
//     return true;
// }


// function checkYearD(bir_dd) {
//     //bir_dd가 입력되었는지 확인하기
//     if (!checkExistData(bir_dd, "생일을"))
//         return false;

//     var yearDRegExp = /^(0[1-9]|[12][0-9]|3[01])$/; // 생일 유효성 검사
    
//     if (!yearDRegExp.test(bir_dd)){
//         alert("생일을 정확하게 입력해야 합니다!")
//         form.bir_dd.value = "";
//         form.bir_dd.focus();
//         return false;
//     }
//     return true;
// }
    
    // return true; //확인이 완료되었을 때


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


